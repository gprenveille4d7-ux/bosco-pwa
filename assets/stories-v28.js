import { r as getDefaultExport } from "./rolldown-runtime-S-ySWqyJ.js";
import { i as getReactModule, r as getJsxRuntime } from "./framework-CXnKph_e.js";

const React = getDefaultExport(getReactModule(), 1);
const jsx = getJsxRuntime();

const VIDEO_SRC = "/bosco-pwa/assets/bosco/stories/tourbillon-lamp-v28.mp4";
const POSTER_SRC = "/bosco-pwa/assets/bosco/stories/tourbillon-lamp-v28-poster.png";
const SCROLL_KEY_PREFIX = "bosco:v28:reading-position:";

function readingKey(narrative) {
  return `${SCROLL_KEY_PREFIX}${narrative.portId}:${narrative.story?.contentId ?? "waiting"}`;
}

function safeStoredPosition(key) {
  try {
    const value = Number(window.sessionStorage.getItem(key));
    return Number.isFinite(value) && value > 0 ? value : 0;
  } catch {
    return 0;
  }
}

function storeReadingPosition(key, value) {
  try {
    window.sessionStorage.setItem(key, String(Math.max(0, value || 0)));
  } catch {
    // La lecture reste fonctionnelle si le stockage privé est indisponible.
  }
}

function StoryVideo() {
  const videoRef = React.useRef(null);
  const [failed, setFailed] = React.useState(false);
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener?.("change", update);
    return () => query.removeEventListener?.("change", update);
  }, []);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video || failed || reducedMotion) return;
    video.muted = true;
    const play = () => video.play().catch(() => setFailed(true));
    play();
    const resume = () => {
      if (!document.hidden && video.paused) play();
    };
    document.addEventListener("visibilitychange", resume);
    window.addEventListener("pageshow", resume);
    return () => {
      document.removeEventListener("visibilitychange", resume);
      window.removeEventListener("pageshow", resume);
    };
  }, [failed, reducedMotion]);

  return jsx.jsxs("div", {
    className: "bosco-story-video-frame",
    "data-video-fallback": failed || reducedMotion ? "poster" : "video",
    children: [
      jsx.jsx("img", {
        className: "bosco-story-poster",
        src: POSTER_SRC,
        alt: "La lampe à huile du Tourbillon éclaire la tasse POLDERS, la boussole et le Carnet d’Émile",
        width: "600",
        height: "400",
      }),
      failed || reducedMotion
        ? null
        : jsx.jsx("video", {
            ref: videoRef,
            className: "bosco-story-video",
            src: VIDEO_SRC,
            poster: POSTER_SRC,
            muted: true,
            autoPlay: true,
            loop: true,
            playsInline: true,
            "webkit-playsinline": "true",
            preload: "auto",
            disablePictureInPicture: true,
            onError: () => setFailed(true),
            "aria-label": "Flamme de la lampe à huile dans Le Tourbillon",
          }),
    ],
  });
}

export function BoscoStoriesV28({
  narrative,
  onBackToMap,
  onOpenEmile,
  onPrevious,
  onNext,
}) {
  const scrollRef = React.useRef(null);
  const storyKey = readingKey(narrative);
  const story = narrative.story;
  const isFirst = narrative.storyIndex <= 0;
  const isLast = narrative.storyIndex >= narrative.storyCount - 1;
  const leaveStory = (destination) => {
    storeReadingPosition(storyKey, scrollRef.current?.scrollTop ?? 0);
    destination();
  };

  React.useLayoutEffect(() => {
    const scroller = scrollRef.current;
    if (!scroller) return;
    const restore = () => {
      scroller.scrollTop = safeStoredPosition(storyKey);
    };
    restore();
    const restoreFrame = window.requestAnimationFrame(restore);
    const restoreAfterLayout = window.setTimeout(restore, 80);
    const restoreAfterMedia = window.setTimeout(restore, 260);
    let frame = 0;
    const saveNow = () => {
      storeReadingPosition(storyKey, scroller.scrollTop);
    };
    const remember = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(saveNow);
    };
    scroller.addEventListener("scroll", remember, { passive: true });
    return () => {
      scroller.removeEventListener("scroll", remember);
      window.cancelAnimationFrame(restoreFrame);
      window.clearTimeout(restoreAfterLayout);
      window.clearTimeout(restoreAfterMedia);
      window.cancelAnimationFrame(frame);
      saveNow();
    };
  }, [storyKey]);

  return jsx.jsxs("section", {
    className: "bosco-story-screen",
    "aria-label": `Les histoires de Bosco à ${narrative.portName}`,
    children: [
      jsx.jsxs("div", {
        ref: scrollRef,
        className: "bosco-story-scroll",
        "data-testid": "bosco-stories-v28",
        children: [
          jsx.jsxs("div", {
            className: "bosco-story-sticky-stage",
            children: [
              jsx.jsx(StoryVideo, {}),
              jsx.jsxs("div", {
                className: "bosco-story-actions",
                children: [
                  jsx.jsxs("button", {
                    type: "button",
                    onClick: () => leaveStory(onBackToMap),
                    "aria-label": "Retour à la carte",
                    children: [jsx.jsx("span", { "aria-hidden": "true", children: "⌖" }), "Carte"],
                  }),
                  jsx.jsxs("button", {
                    type: "button",
                    onClick: () => leaveStory(onOpenEmile),
                    disabled: !narrative.emileStory,
                    "aria-label": "Ouvrir le Carnet d’Émile",
                    children: ["Carnet d’Émile", jsx.jsx("span", { "aria-hidden": "true", children: "▱" })],
                  }),
                ],
              }),
            ],
          }),
          jsx.jsxs("article", {
            className: "bosco-story-reading",
            children: [
              jsx.jsx("p", { className: "bosco-story-kicker", children: "LES HISTOIRES DE BOSCO" }),
              jsx.jsxs("p", {
                className: "bosco-story-context",
                children: ["LES VOIX DU LARGE · ", narrative.portName.toUpperCase()],
              }),
              jsx.jsxs("nav", {
                className: "bosco-story-pager",
                "aria-label": "Navigation entre les histoires du port",
                children: [
                  jsx.jsx("button", {
                    type: "button",
                    onClick: onPrevious,
                    disabled: isFirst,
                    "aria-label": "Histoire précédente",
                    children: "← Précédente",
                  }),
                  jsx.jsxs("strong", {
                    children: [narrative.storyCount ? narrative.storyIndex + 1 : 0, " / ", narrative.storyCount],
                  }),
                  jsx.jsx("button", {
                    type: "button",
                    onClick: onNext,
                    disabled: isLast,
                    "aria-label": "Histoire suivante",
                    children: "Suivante →",
                  }),
                ],
              }),
              story
                ? jsx.jsxs(jsx.Fragment, {
                    children: [
                      jsx.jsxs("p", {
                        className: "bosco-story-number",
                        children: ["Légende ", narrative.storyIndex + 1, " sur ", narrative.storyCount],
                      }),
                      jsx.jsx("h1", { children: story.title }),
                      jsx.jsx("div", {
                        className: "bosco-story-copy",
                        children: String(story.text)
                          .split(/\n{2,}/u)
                          .filter(Boolean)
                          .map((paragraph, index) => jsx.jsx("p", { children: paragraph }, `${story.contentId}-${index}`)),
                      }),
                      jsx.jsxs("aside", {
                        className: "bosco-story-conclusion",
                        children: [
                          jsx.jsx("span", { children: "BOSCO CONCLUT" }),
                          jsx.jsx("p", { children: narrative.invitation }),
                          jsx.jsx("p", { children: narrative.closingLine }),
                        ],
                      }),
                      jsx.jsx("button", {
                        type: "button",
                        className: "bosco-story-emile-cta",
                        onClick: () => leaveStory(onOpenEmile),
                        disabled: !narrative.emileStory,
                        children: "Lire le Carnet d’Émile",
                      }),
                    ],
                  })
                : jsx.jsxs("div", {
                    className: "bosco-story-empty",
                    children: [
                      jsx.jsx("h1", { children: "Le récit n’est pas encore arrivé au comptoir" }),
                      jsx.jsx("p", {
                        children: "Doucement, moussaillon. Bosco garde le port actif, mais n’invente pas une histoire qui n’a pas encore été transmise.",
                      }),
                    ],
                  }),
            ],
          }),
        ],
      }),
    ],
  });
}
