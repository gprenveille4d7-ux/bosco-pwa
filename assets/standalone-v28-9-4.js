const mount = document.getElementById("bosco-root");

try {
  const framework = await import("./framework-CXnKph_e.js");
  const runtime = await import("./rolldown-runtime-S-ySWqyJ.js");
  const page = await import("./page-GeminiSequence-v29.js");
  const React = runtime.r(framework.i(), 1);
  const ReactDOMClient = framework.t();
  ReactDOMClient.hydrateRoot(mount, React.createElement(page.default));

  const restoreNavigationHierarchy = () => {
    const primary = document.querySelector('nav[aria-label="Navigation principale"]');
    if (primary && !document.querySelector(".bosco-route-nav-backdrop")) {
      const backdrop = document.createElement("div");
      backdrop.className = "bosco-route-nav-backdrop";
      backdrop.setAttribute("aria-hidden", "true");
      primary.before(backdrop);
    }

    const contextual = document.querySelector('nav[aria-label="Sections du CarrÃ©"]');
    const library = document.querySelector('[aria-label="Ã‰tat de la bibliothÃ¨que narrative"]');
    if (contextual && library && contextual.nextElementSibling !== library) {
      library.before(contextual);
    }
  };

  const navigationObserver = new MutationObserver(restoreNavigationHierarchy);
  navigationObserver.observe(mount, { childList: true, subtree: true });
  restoreNavigationHierarchy();

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/bosco-pwa/sw.js?v=28.13.0");
    });
  }
} catch (error) {
  mount.textContent = `Erreur de dÃ©marrage : ${error?.stack || error}`;
}

