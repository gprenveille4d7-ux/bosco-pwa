const MAP = {
  width: 700,
  height: 900,
  minLongitude: -1.94808,
  maxLongitude: -0.73474,
  minLatitude: 48.45608,
  maxLatitude: 49.7271,
  minX: 64,
  maxX: 566,
  minY: 48,
  maxY: 848,
};

const routeCache = new Map();
const GRID_STEP = 8;
const SAFETY_MARGIN = 6;

export function projectPort(port) {
  return {
    x: MAP.minX + ((port.longitude - MAP.minLongitude) / (MAP.maxLongitude - MAP.minLongitude)) * (MAP.maxX - MAP.minX),
    y: MAP.maxY - ((port.latitude - MAP.minLatitude) / (MAP.maxLatitude - MAP.minLatitude)) * (MAP.maxY - MAP.minY),
  };
}

function unproject(point) {
  return {
    longitude: MAP.minLongitude + ((point.x - MAP.minX) / (MAP.maxX - MAP.minX)) * (MAP.maxLongitude - MAP.minLongitude),
    latitude: MAP.minLatitude + ((MAP.maxY - point.y) / (MAP.maxY - MAP.minY)) * (MAP.maxLatitude - MAP.minLatitude),
  };
}

function nauticalMiles(a, b) {
  const rad = Math.PI / 180;
  const lat1 = a.latitude * rad;
  const lat2 = b.latitude * rad;
  const dLat = (b.latitude - a.latitude) * rad;
  const dLon = (b.longitude - a.longitude) * rad;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 3440.065 * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

function routeDistance(points) {
  let distance = 0;
  for (let index = 1; index < points.length; index += 1) {
    distance += nauticalMiles(unproject(points[index - 1]), unproject(points[index]));
  }
  return distance;
}

function createLandTester(landPath) {
  const samples = [[0, 0], [SAFETY_MARGIN, 0], [-SAFETY_MARGIN, 0], [0, SAFETY_MARGIN], [0, -SAFETY_MARGIN], [4, 4], [4, -4], [-4, 4], [-4, -4]];
  // The official path stops at administrative borders. South and south-east
  // of those borders is mainland, not open water, so it must stay blocked.
  const outsideNavigableSea = (x, y) => y >= 840 || (x >= 560 && y >= 560);
  if (typeof document === "undefined" || typeof Path2D === "undefined") return () => false;
  const canvas = document.createElement("canvas");
  canvas.width = MAP.width;
  canvas.height = MAP.height;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) return () => false;
  const path = new Path2D(landPath);
  context.fillStyle = "#000";
  context.fill(path, "nonzero");
  const pixels = context.getImageData(0, 0, MAP.width, MAP.height).data;
  const rasterIsLand = (x, y) => {
    const px = Math.round(x);
    const py = Math.round(y);
    if (px < 0 || px >= MAP.width || py < 0 || py >= MAP.height) return false;
    return pixels[(py * MAP.width + px) * 4 + 3] > 24;
  };
  return (x, y) => samples.some(([dx, dy]) => outsideNavigableSea(x + dx, y + dy) || rasterIsLand(x + dx, y + dy));
}

function segmentIsWater(a, b, isLand, ignoreTerminal = false) {
  const distance = Math.hypot(b.x - a.x, b.y - a.y);
  const count = Math.max(2, Math.ceil(distance / 3));
  for (let index = 0; index <= count; index += 1) {
    if (ignoreTerminal && (index < 3 || index > count - 3)) continue;
    const ratio = index / count;
    if (isLand(a.x + (b.x - a.x) * ratio, a.y + (b.y - a.y) * ratio)) return false;
  }
  return true;
}

function nearestWater(point, isLand) {
  if (!isLand(point.x, point.y)) return point;
  for (let radius = GRID_STEP; radius <= 64; radius += GRID_STEP) {
    let best = null;
    for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 16) {
      const candidate = { x: point.x + Math.cos(angle) * radius, y: point.y + Math.sin(angle) * radius };
      if (candidate.x < 8 || candidate.x > MAP.width - 8 || candidate.y < 8 || candidate.y > MAP.height - 8 || isLand(candidate.x, candidate.y)) continue;
      if (!best || Math.hypot(candidate.x - point.x, candidate.y - point.y) < best.distance) {
        best = { ...candidate, distance: Math.hypot(candidate.x - point.x, candidate.y - point.y) };
      }
    }
    if (best) return { x: best.x, y: best.y };
  }
  return point;
}

function nodeKey(x, y) {
  return `${x}:${y}`;
}

function reconstruct(cameFrom, current, nodes) {
  const route = [nodes.get(current)];
  while (cameFrom.has(current)) {
    current = cameFrom.get(current);
    route.push(nodes.get(current));
  }
  return route.reverse();
}

export function computeGridRoute(start, end, isLand) {
  const waterStart = nearestWater(start, isLand);
  const waterEnd = nearestWater(end, isLand);
  if (segmentIsWater(waterStart, waterEnd, isLand)) return [start, waterStart, waterEnd, end];

  const columns = Math.floor(MAP.width / GRID_STEP);
  const rows = Math.floor(MAP.height / GRID_STEP);
  const landGrid = new Map();
  const isGridLand = (x, y) => {
    const key = nodeKey(x, y);
    if (!landGrid.has(key)) landGrid.set(key, isLand(x * GRID_STEP, y * GRID_STEP));
    return landGrid.get(key);
  };
  const nearestGridPoint = (point) => {
    const base = {
      x: Math.max(1, Math.min(columns - 1, Math.round(point.x / GRID_STEP))),
      y: Math.max(1, Math.min(rows - 1, Math.round(point.y / GRID_STEP))),
    };
    for (let radius = 0; radius <= 8; radius += 1) {
      let best = null;
      for (let dx = -radius; dx <= radius; dx += 1) {
        for (let dy = -radius; dy <= radius; dy += 1) {
          if (Math.max(Math.abs(dx), Math.abs(dy)) !== radius) continue;
          const x = base.x + dx;
          const y = base.y + dy;
          if (x < 1 || x >= columns || y < 1 || y >= rows || isGridLand(x, y)) continue;
          const candidate = { x: x * GRID_STEP, y: y * GRID_STEP };
          if (!segmentIsWater(point, candidate, isLand, true)) continue;
          const distance = Math.hypot(candidate.x - point.x, candidate.y - point.y);
          if (!best || distance < best.distance) best = { x, y, distance };
        }
      }
      if (best) return { x: best.x, y: best.y };
    }
    return base;
  };
  const startGrid = nearestGridPoint(waterStart);
  const endGrid = nearestGridPoint(waterEnd);
  const startKey = nodeKey(startGrid.x, startGrid.y);
  const endKey = nodeKey(endGrid.x, endGrid.y);
  const heap = [];
  const push = (key, priority) => {
    let index = heap.length;
    heap.push({ key, priority });
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (heap[parent].priority <= priority) break;
      heap[index] = heap[parent];
      index = parent;
    }
    heap[index] = { key, priority };
  };
  const pop = () => {
    const first = heap[0];
    const last = heap.pop();
    if (heap.length && last) {
      let index = 0;
      heap[0] = last;
      while (true) {
        const left = index * 2 + 1;
        const right = left + 1;
        if (left >= heap.length) break;
        const smallest = right < heap.length && heap[right].priority < heap[left].priority ? right : left;
        if (heap[index].priority <= heap[smallest].priority) break;
        [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
        index = smallest;
      }
    }
    return first;
  };
  push(startKey, 0);
  const nodes = new Map([[startKey, { x: startGrid.x * GRID_STEP, y: startGrid.y * GRID_STEP }]]);
  const cameFrom = new Map();
  const scores = new Map([[startKey, 0]]);
  const closed = new Set();
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];

  while (heap.length) {
    const currentKey = pop().key;
    if (closed.has(currentKey)) continue;
    closed.add(currentKey);
    if (currentKey === endKey) {
      const middle = reconstruct(cameFrom, currentKey, nodes);
      return [start, waterStart, ...middle, waterEnd, end];
    }
    const current = nodes.get(currentKey);
    const gx = Math.round(current.x / GRID_STEP);
    const gy = Math.round(current.y / GRID_STEP);
    for (const [dx, dy] of directions) {
      const nx = gx + dx;
      const ny = gy + dy;
      if (nx < 1 || nx >= columns || ny < 1 || ny >= rows) continue;
      const point = { x: nx * GRID_STEP, y: ny * GRID_STEP };
      if (isGridLand(nx, ny)) continue;
      if (dx && dy && (isGridLand(gx + dx, gy) || isGridLand(gx, gy + dy))) continue;
      const key = nodeKey(nx, ny);
      const tentative = (scores.get(currentKey) ?? Infinity) + Math.hypot(dx, dy);
      if (tentative >= (scores.get(key) ?? Infinity)) continue;
      cameFrom.set(key, currentKey);
      scores.set(key, tentative);
      nodes.set(key, point);
      push(key, tentative + Math.hypot(endGrid.x - nx, endGrid.y - ny));
    }
  }
  return [start, end];
}

function simplify(points, isLand) {
  if (points.length <= 2) return points;
  const simplified = [points[0]];
  let anchor = 0;
  while (anchor < points.length - 1) {
    let next = points.length - 1;
    while (next > anchor + 1 && !segmentIsWater(points[anchor], points[next], isLand, anchor === 0 || next === points.length - 1)) next -= 1;
    simplified.push(points[next]);
    anchor = next;
  }
  return simplified.filter((point, index, array) => index === 0 || Math.hypot(point.x - array[index - 1].x, point.y - array[index - 1].y) > 0.5);
}

export function computeMaritimeRoute({ landPath, homePort, destinationPort }) {
  if (!homePort || !destinationPort || homePort.id === destinationPort.id) return null;
  const key = `${homePort.id}:${destinationPort.id}`;
  if (routeCache.has(key)) return routeCache.get(key);
  const start = projectPort(homePort);
  const end = projectPort(destinationPort);
  const isLand = createLandTester(landPath);
  const direct = segmentIsWater(start, end, isLand, true);
  const points = simplify(direct ? [start, end] : computeGridRoute(start, end, isLand), isLand);
  const distanceNauticalMiles = routeDistance(points);
  const result = {
    key,
    direct,
    points,
    svgPath: points.map((point, index) => `${index ? "L" : "M"}${point.x.toFixed(2)} ${point.y.toFixed(2)}`).join(" "),
    distanceNauticalMiles,
    travelHours: {
      sailboat: distanceNauticalMiles / 5,
      rib: distanceNauticalMiles / 15,
      motorboat: distanceNauticalMiles / 20,
    },
  };
  routeCache.set(key, result);
  return result;
}

export function installBoscoMapPanZoom() {
  const viewport = document.querySelector('[aria-label="Carte interactive des ports de la Manche"]');
  const svg = viewport?.querySelector("svg");
  if (!viewport || !svg || svg.dataset.boscoPanZoom === "true") return () => {};
  svg.dataset.boscoPanZoom = "true";
  const storageKey = "bosco:v28:map-view";
  let state = { zoom: 1, x: 0, y: 0 };
  try {
    state = { ...state, ...JSON.parse(sessionStorage.getItem(storageKey) || "{}") };
  } catch {}
  const pointers = new Map();
  let dragStart = null;
  let pinchStart = null;
  let dragged = false;

  const apply = () => {
    state.zoom = Math.max(1, Math.min(3.25, state.zoom));
    const bounds = viewport.getBoundingClientRect();
    const maxX = bounds.width * (state.zoom - 1);
    const maxY = bounds.height * (state.zoom - 1);
    state.x = Math.max(-maxX, Math.min(0, state.x));
    state.y = Math.max(-maxY, Math.min(0, state.y));
    svg.style.transformOrigin = "0 0";
    svg.style.transform = `translate(${state.x}px, ${state.y}px) scale(${state.zoom})`;
    svg.style.cursor = state.zoom > 1 ? "grab" : "default";
    try { sessionStorage.setItem(storageKey, JSON.stringify(state)); } catch {}
  };
  const zoomAt = (nextZoom, clientX, clientY) => {
    const rect = viewport.getBoundingClientRect();
    const localX = clientX - rect.left;
    const localY = clientY - rect.top;
    const ratio = nextZoom / state.zoom;
    state.x = localX - (localX - state.x) * ratio;
    state.y = localY - (localY - state.y) * ratio;
    state.zoom = nextZoom;
    apply();
  };
  const onWheel = (event) => {
    event.preventDefault();
    zoomAt(state.zoom * Math.exp(-event.deltaY * 0.0015), event.clientX, event.clientY);
  };
  const onPointerDown = (event) => {
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    svg.setPointerCapture?.(event.pointerId);
    dragStart = { x: event.clientX, y: event.clientY, panX: state.x, panY: state.y };
    if (pointers.size === 2) {
      const values = [...pointers.values()];
      pinchStart = { distance: Math.hypot(values[1].x - values[0].x, values[1].y - values[0].y), zoom: state.zoom };
    }
  };
  const onPointerMove = (event) => {
    if (!pointers.has(event.pointerId)) return;
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pointers.size === 2 && pinchStart) {
      const values = [...pointers.values()];
      const distance = Math.hypot(values[1].x - values[0].x, values[1].y - values[0].y);
      const centerX = (values[0].x + values[1].x) / 2;
      const centerY = (values[0].y + values[1].y) / 2;
      zoomAt(pinchStart.zoom * distance / Math.max(1, pinchStart.distance), centerX, centerY);
      dragged = true;
    } else if (dragStart && state.zoom > 1) {
      state.x = dragStart.panX + event.clientX - dragStart.x;
      state.y = dragStart.panY + event.clientY - dragStart.y;
      dragged ||= Math.hypot(event.clientX - dragStart.x, event.clientY - dragStart.y) > 5;
      apply();
    }
  };
  const onPointerUp = (event) => {
    pointers.delete(event.pointerId);
    if (pointers.size < 2) pinchStart = null;
    if (!pointers.size) dragStart = null;
  };
  const onClickCapture = (event) => {
    if (!dragged) return;
    event.preventDefault();
    event.stopPropagation();
    dragged = false;
  };
  const onDoubleClick = (event) => {
    event.preventDefault();
    state = { zoom: 1, x: 0, y: 0 };
    apply();
  };

  viewport.style.overflow = "hidden";
  svg.style.touchAction = "none";
  svg.addEventListener("wheel", onWheel, { passive: false });
  svg.addEventListener("pointerdown", onPointerDown);
  svg.addEventListener("pointermove", onPointerMove);
  svg.addEventListener("pointerup", onPointerUp);
  svg.addEventListener("pointercancel", onPointerUp);
  svg.addEventListener("click", onClickCapture, true);
  svg.addEventListener("dblclick", onDoubleClick);
  apply();

  return () => {
    svg.removeEventListener("wheel", onWheel);
    svg.removeEventListener("pointerdown", onPointerDown);
    svg.removeEventListener("pointermove", onPointerMove);
    svg.removeEventListener("pointerup", onPointerUp);
    svg.removeEventListener("pointercancel", onPointerUp);
    svg.removeEventListener("click", onClickCapture, true);
    svg.removeEventListener("dblclick", onDoubleClick);
    delete svg.dataset.boscoPanZoom;
  };
}
