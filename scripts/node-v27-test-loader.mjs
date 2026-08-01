import { existsSync, readFileSync } from "node:fs";
import { registerHooks } from "node:module";
import { dirname, extname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));

registerHooks({
  resolve(specifier, context, nextResolve) {
    const aliasBase = specifier.startsWith("@/") ? join(root, specifier.slice(2)) : null;
    const relativeBase = specifier.startsWith(".") && context.parentURL
      ? fileURLToPath(new URL(specifier, context.parentURL))
      : null;
    const base = aliasBase ?? relativeBase;
    if (!base) return nextResolve(specifier, context);
    if (aliasBase && existsSync(base)) return { url: pathToFileURL(base).href, shortCircuit: true };
    if (extname(base)) return nextResolve(specifier, context);
    const resolved = [base, `${base}.ts`, `${base}.tsx`, `${base}.mjs`, `${base}.js`]
      .find((candidate) => existsSync(candidate));
    if (!resolved) return nextResolve(specifier, context);
    return { url: pathToFileURL(resolved).href, shortCircuit: true };
  },
  load(url, context, nextLoad) {
    if (!url.endsWith(".json")) return nextLoad(url, context);
    return {
      format: "module",
      source: `export default ${readFileSync(fileURLToPath(url), "utf8")};`,
      shortCircuit: true,
    };
  },
});
