const runtime = globalThis.__NIFT_RUNTIME?.planCards;
if (!runtime) throw new Error('Shared Agora runtime namespace unavailable: planCards');
export const PlanCards = runtime.PlanCards;
