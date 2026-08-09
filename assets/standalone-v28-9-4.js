const mount = document.getElementById("bosco-root");

try {
  const framework = await import("./framework-CXnKph_e.js");
  const runtime = await import("./rolldown-runtime-S-ySWqyJ.js");
  const page = await import("./page-GeminiSequence-v29.js");
  const React = runtime.r(framework.i(), 1);
  const ReactDOMClient = framework.t();
  ReactDOMClient.hydrateRoot(mount, React.createElement(page.default));

  let observedScrollRoot = null;
  let observedScreen = null;
  const updateScrollHint = () => {
    const hint = document.querySelector(".bosco-scroll-hint");
    if (!hint) return;
    if (!observedScrollRoot) {
      hint.classList.remove("is-visible");
      return;
    }
    const hasMore = observedScrollRoot.scrollHeight > observedScrollRoot.clientHeight + 8;
    hint.classList.toggle("is-visible", hasMore && observedScrollRoot.scrollTop <= 2);
  };

  const bindScrollHint = () => {
    const activeLabel = document.querySelector(
      'nav[aria-label="Navigation principale"] button[aria-current="page"]',
    )?.textContent?.trim();
    const nextScrollRoot = activeLabel === "Conditions" || activeLabel === "MarÃ©es"
      ? document.querySelector("._scrollArea_10jw9_19")
      : activeLabel === "Le CarrÃ©"
        ? document.querySelector("._scroll_skgo3_12")
        : null;

    if (activeLabel !== observedScreen) {
      observedScreen = activeLabel;
      if (nextScrollRoot) nextScrollRoot.scrollTop = 0;
    }
    if (nextScrollRoot !== observedScrollRoot) {
      observedScrollRoot?.removeEventListener("scroll", updateScrollHint);
      observedScrollRoot = nextScrollRoot;
      observedScrollRoot?.addEventListener("scroll", updateScrollHint, { passive: true });
    }
    updateScrollHint();
  };

  const restoreNavigationHierarchy = () => {
    const primary = document.querySelector('nav[aria-label="Navigation principale"]');
    if (primary && !document.querySelector(".bosco-route-nav-backdrop")) {
      const backdrop = document.createElement("div");
      backdrop.className = "bosco-route-nav-backdrop";
      backdrop.setAttribute("aria-hidden", "true");
      primary.before(backdrop);
    }
    if (primary && !document.querySelector(".bosco-scroll-hint")) {
      const hint = document.createElement("div");
      hint.className = "bosco-scroll-hint";
      hint.setAttribute("aria-hidden", "true");
      hint.innerHTML = "<span>âŒ„</span>";
      primary.before(hint);
    }

    const contextual = document.querySelector('nav[aria-label="Sections du CarrÃ©"]');
    const library = document.querySelector('[aria-label="Ã‰tat de la bibliothÃ¨que narrative"]');
    if (contextual && library && contextual.nextElementSibling !== library) {
      library.before(contextual);
    }
    window.requestAnimationFrame(bindScrollHint);
  };

  const navigationObserver = new MutationObserver(restoreNavigationHierarchy);
  navigationObserver.observe(mount, { childList: true, subtree: true });
  window.addEventListener("resize", updateScrollHint);
  restoreNavigationHierarchy();

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/bosco-pwa/sw.js?v=28.14.0");
    });
  }
} catch (error) {
  mount.textContent = `Erreur de dÃ©marrage : ${error?.stack || error}`;
}

