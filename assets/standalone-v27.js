const mount = document.getElementById("bosco-root");

const iconStyle = document.createElement("style");
iconStyle.textContent = ".bottom-nav span svg{display:inline-block;width:1em;height:1em;vertical-align:middle}";
document.head.append(iconStyle);

const NAV_ICONS = {
  Bosco: '<path d="m3.5 10.5 8.5-7 8.5 7"/><path d="M5.5 9.2V21h13V9.2M9.5 21v-6h5v6"/>',
  Carte: '<path d="m3.5 6 5-2 7 2 5-2v14l-5 2-7-2-5 2Z"/><path d="M8.5 4v14M15.5 6v14"/><circle cx="12" cy="11" r="2.1"/>',
  "Marées": '<path d="M3 8.5c2.2-2 4.3-2 6.5 0s4.3 2 6.5 0 4.3-2 5 0"/><path d="M3 13c2.2-2 4.3-2 6.5 0s4.3 2 6.5 0 4.3-2 5 0"/><path d="M3 17.5c2.2-2 4.3-2 6.5 0s4.3 2 6.5 0 4.3-2 5 0"/>',
  Conditions: '<path d="M4 7h9M4 12h16M4 17h12"/><circle cx="16" cy="7" r="2"/><circle cx="9" cy="12" r="2"/><circle cx="18" cy="17" r="2"/>',
  "Le Carré": '<path d="M6 3.5h10.5A1.5 1.5 0 0 1 18 5v15.5H6A2.5 2.5 0 0 1 3.5 18V6A2.5 2.5 0 0 1 6 3.5Z"/><path d="M6 3.5V17h12M9 8h6M9 12h6"/>',
};

function restoreNavigationIcons() {
  document.querySelectorAll(".bottom-nav button").forEach((button) => {
    const label = button.textContent.trim().replace(/^[⌂⌖≈≋▤]\s*/, "");
    const paths = NAV_ICONS[label];
    const slot = button.querySelector("span");
    if (!paths || !slot || slot.dataset.iconReady === "v35") return;
    slot.innerHTML = `<svg aria-hidden="true" viewBox="0 0 24 24" focusable="false" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8">${paths}</svg>`;
    slot.dataset.iconReady = "v35";
  });
}

try {
  const framework = await import("./framework-CXnKph_e.js");
  const runtime = await import("./rolldown-runtime-S-ySWqyJ.js");
  const page = await import("./page-DDq_2qKE.js");
  const React = runtime.r(framework.i(), 1);
  const ReactDOMClient = framework.t();
  ReactDOMClient.hydrateRoot(mount, React.createElement(page.default));
  restoreNavigationIcons();
  new MutationObserver(restoreNavigationIcons).observe(mount, {
    childList: true,
    subtree: true,
  });

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/bosco-pwa/sw.js?v=35");
    });
  }
} catch (error) {
  mount.textContent = `Erreur de démarrage : ${error?.stack || error}`;
}
