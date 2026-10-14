const runtime = globalThis.__NIFT_RUNTIME?.jsx;
if (!runtime) throw new Error('Shared Agora runtime namespace unavailable: jsx');
export const Fragment = runtime.Fragment;
export const jsx = runtime.jsx;
export const jsxs = runtime.jsxs;
