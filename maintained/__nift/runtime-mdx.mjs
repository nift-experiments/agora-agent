const runtime = globalThis.__NIFT_RUNTIME?.mdx;
if (!runtime) throw new Error('Shared Agora runtime namespace unavailable: mdx');
export const Parameter = runtime.Parameter;
export const ParameterList = runtime.ParameterList;
