const mount = document.getElementById("bosco-root");

try {
  const framework = await import("./framework-CXnKph_e.js");
  const runtime = await import("./rolldown-runtime-S-ySWqyJ.js");
  const page = await import("./page-DDq_2qKE.js");
  const React = runtime.r(framework.i(), 1);
  const ReactDOMClient = framework.t();
  ReactDOMClient.hydrateRoot(mount, React.createElement(page.default));
} catch (error) {
  mount.textContent = `Erreur de démarrage : ${error?.stack || error}`;
}
