import { jsx as _jsx } from "../runtime-jsx.mjs";
export let frontmatter = {
  analyticsPageType: "navigation-landing",
  title: "Recipes",
  description: "Agora Recipes is a growing catalog of runnable examples, integration patterns, and end-to-end references across Agora products.",
  hideToc: true
};
export let _markdown = `

<RecipesGallery
  allCategoriesLabel="All recipe types"
  allProductsLabel="All products"
  allStacksLabel="All stacks"
  categoryFilterLabel="Recipe type"
  clearFiltersLabel="Clear filters"
  emptyMessage="No recipes match the current filters."
  items="[
  {
    category: &#x22;Quickstart&#x22;,
    description: &#x22;Start with the shortest path to your first Voice Agent.&#x22;,
    href: &#x22;/en/ai/get-started/quickstart&#x22;,
    product: &#x22;Voice AI&#x22;,
    tags: [&#x22;Beginner&#x22;, &#x22;Conversational AI&#x22;, &#x22;Voice Agent&#x22;],
    title: &#x22;Voice Agent quickstart&#x22;,
    tone: &#x22;blue&#x22;,
  },
  {
    category: &#x22;Quickstart&#x22;,
    description: &#x22;Build a native Android voice-agent client that owns RTC/RTM lifecycle and renders live transcripts.&#x22;,
    href: &#x22;https://github.com/AgoraIO-Conversational-AI/recipe-client-android-quickstart/blob/main/README.md&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Android&#x22;,
    tags: [&#x22;Intermediate&#x22;, &#x22;Conversational AI&#x22;, &#x22;Voice Agent&#x22;, &#x22;Android&#x22;],
    title: &#x22;Android Voice Agent&#x22;,
    tone: &#x22;blue&#x22;,
  },
  {
    category: &#x22;Quickstart&#x22;,
    description: &#x22;Run a cross-platform Flutter voice-agent app with RTC audio, RTM events, and transcript UI.&#x22;,
    href: &#x22;https://github.com/AgoraIO-Conversational-AI/agent-quickstart-flutter/blob/main/docs/ai/RECIPE.md&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Flutter&#x22;,
    tags: [&#x22;Beginner&#x22;, &#x22;Conversational AI&#x22;, &#x22;Voice Agent&#x22;, &#x22;Flutter&#x22;],
    title: &#x22;Flutter Voice Agent&#x22;,
    tone: &#x22;green&#x22;,
  },
  {
    category: &#x22;Quickstart&#x22;,
    description: &#x22;Run a Go Gin backend with a Next.js voice-agent client and managed model defaults.&#x22;,
    href: &#x22;https://github.com/AgoraIO-Conversational-AI/agent-quickstart-go/blob/main/docs/ai/RECIPE.md&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Go&#x22;,
    tags: [&#x22;Beginner&#x22;, &#x22;Conversational AI&#x22;, &#x22;Voice Agent&#x22;, &#x22;Go&#x22;],
    title: &#x22;Go Voice Agent&#x22;,
    tone: &#x22;purple&#x22;,
  },
  {
    category: &#x22;Quickstart&#x22;,
    description: &#x22;Run a browser voice-agent starter with RTC audio, RTM events, server routes, and transcript UI.&#x22;,
    href: &#x22;https://github.com/AgoraIO-Conversational-AI/agent-quickstart-nextjs/blob/main/docs/ai/RECIPE.md&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;TypeScript&#x22;,
    tags: [&#x22;Beginner&#x22;, &#x22;Conversational AI&#x22;, &#x22;Voice Agent&#x22;, &#x22;Next.js&#x22;],
    title: &#x22;Next.js Voice Agent&#x22;,
    tone: &#x22;sand&#x22;,
  },
  {
    category: &#x22;Quickstart&#x22;,
    description: &#x22;Run a Python FastAPI backend with a Next.js voice-agent client and managed model defaults.&#x22;,
    href: &#x22;https://github.com/AgoraIO-Conversational-AI/agent-quickstart-python/blob/main/docs/ai/RECIPE.md&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Python&#x22;,
    tags: [&#x22;Beginner&#x22;, &#x22;Conversational AI&#x22;, &#x22;Voice Agent&#x22;, &#x22;Python&#x22;],
    title: &#x22;Python Voice Agent&#x22;,
    tone: &#x22;blue&#x22;,
  },
  {
    category: &#x22;Quickstart&#x22;,
    description: &#x22;Build a React Native voice-agent client that renders transcripts through Agora engine adapters.&#x22;,
    href: &#x22;https://github.com/AgoraIO-Conversational-AI/recipe-client-rn-quickstart/blob/main/README.md&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;React Native, TypeScript&#x22;,
    tags: [&#x22;Intermediate&#x22;, &#x22;Conversational AI&#x22;, &#x22;Voice Agent&#x22;, &#x22;React Native&#x22;],
    title: &#x22;React Native Voice Agent&#x22;,
    tone: &#x22;green&#x22;,
  },
  {
    category: &#x22;Quickstart&#x22;,
    description: &#x22;Build a native SwiftUI voice-agent client with RTC/RTM lifecycle and live transcripts.&#x22;,
    href: &#x22;https://github.com/AgoraIO-Conversational-AI/recipe-client-swiftui-quickstart/blob/main/README.md&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;iOS&#x22;,
    tags: [&#x22;Intermediate&#x22;, &#x22;Conversational AI&#x22;, &#x22;Voice Agent&#x22;, &#x22;iOS&#x22;],
    title: &#x22;SwiftUI Voice Agent&#x22;,
    tone: &#x22;purple&#x22;,
  },
  {
    category: &#x22;Add features&#x22;,
    description: &#x22;Hear blocked sentences redacted by a custom LLM endpoint before they reach TTS.&#x22;,
    href: &#x22;https://github.com/AgoraIO-Conversational-AI/recipe-agent-content-filter/blob/main/README.md&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Python, TypeScript&#x22;,
    tags: [&#x22;Intermediate&#x22;, &#x22;Conversational AI&#x22;, &#x22;Voice Agent&#x22;, &#x22;Content Moderation&#x22;],
    title: &#x22;Content Filtering&#x22;,
    tone: &#x22;sand&#x22;,
  },
  {
    category: &#x22;Add features&#x22;,
    description: &#x22;Give the agent memory of prior conversations so it recognizes returning users.&#x22;,
    href: &#x22;https://github.com/AgoraIO-Conversational-AI/recipe-agent-memory/blob/main/README.md&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Python, TypeScript&#x22;,
    tags: [&#x22;Intermediate&#x22;, &#x22;Conversational AI&#x22;, &#x22;Voice Agent&#x22;, &#x22;Memory&#x22;],
    title: &#x22;Cross-Session Memory&#x22;,
    tone: &#x22;blue&#x22;,
  },
  {
    category: &#x22;Add features&#x22;,
    description: &#x22;Swap the managed LLM for your own OpenAI-compatible endpoint while keeping managed STT and TTS.&#x22;,
    href: &#x22;https://github.com/AgoraIO-Conversational-AI/recipe-agent-custom-llm/blob/main/README.md&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Python, TypeScript&#x22;,
    tags: [&#x22;Intermediate&#x22;, &#x22;Conversational AI&#x22;, &#x22;Voice Agent&#x22;, &#x22;Custom LLM&#x22;],
    title: &#x22;Custom LLM&#x22;,
    tone: &#x22;green&#x22;,
  },
  {
    category: &#x22;Add features&#x22;,
    description: &#x22;Return audio from a custom endpoint so the agent skips the separate TTS step.&#x22;,
    href: &#x22;https://github.com/AgoraIO-Conversational-AI/recipe-agent-custom-llm-tts/blob/main/README.md&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Python, TypeScript&#x22;,
    tags: [&#x22;Intermediate&#x22;, &#x22;Conversational AI&#x22;, &#x22;Voice Agent&#x22;, &#x22;Custom LLM&#x22;],
    title: &#x22;Custom Modalities&#x22;,
    tone: &#x22;purple&#x22;,
  },
  {
    category: &#x22;Add features&#x22;,
    description: &#x22;Change prompts, injected context, and runtime instructions without running a separate LLM service.&#x22;,
    href: &#x22;https://github.com/AgoraIO-Conversational-AI/recipe-agent-instructions/blob/main/README.md&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Python, TypeScript&#x22;,
    tags: [&#x22;Beginner&#x22;, &#x22;Conversational AI&#x22;, &#x22;Voice Agent&#x22;, &#x22;Prompt Management&#x22;],
    title: &#x22;Dynamic Instructions&#x22;,
    tone: &#x22;sand&#x22;,
  },
  {
    category: &#x22;Add features&#x22;,
    description: &#x22;Use keyword hints to help ARES recognize specific terms more accurately.&#x22;,
    href: &#x22;https://github.com/AgoraIO-Conversational-AI/recipe-agent-stt-vendors/blob/main/README.md#ares-keywords&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Python, TypeScript&#x22;,
    tags: [&#x22;Beginner&#x22;, &#x22;Conversational AI&#x22;, &#x22;Voice Agent&#x22;, &#x22;Speech Recognition&#x22;],
    title: &#x22;Ares Keywords&#x22;,
    tone: &#x22;blue&#x22;,
  },
  {
    category: &#x22;Add features&#x22;,
    description: &#x22;Run a smart-home agent whose available tools change by room and keyword scene.&#x22;,
    href: &#x22;https://github.com/AgoraIO-Conversational-AI/recipe-agent-tools-plus/blob/main/README.md&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Python, TypeScript&#x22;,
    tags: [&#x22;Advanced&#x22;, &#x22;Conversational AI&#x22;, &#x22;Voice Agent&#x22;, &#x22;Dynamic Tools&#x22;],
    title: &#x22;Dynamic Tool Sets&#x22;,
    tone: &#x22;blue&#x22;,
  },
  {
    category: &#x22;Add features&#x22;,
    description: &#x22;Watch agent state, metrics, errors, and transcript events update in a live web timeline.&#x22;,
    href: &#x22;https://github.com/AgoraIO-Conversational-AI/recipe-agent-events/blob/main/README.md&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Python, TypeScript&#x22;,
    tags: [&#x22;Beginner&#x22;, &#x22;Conversational AI&#x22;, &#x22;Voice Agent&#x22;, &#x22;Observability&#x22;],
    title: &#x22;Event Observability&#x22;,
    tone: &#x22;green&#x22;,
  },
  {
    category: &#x22;Add features&#x22;,
    description: &#x22;Add natural filler phrases during LLM latency and a graceful goodbye at session end.&#x22;,
    href: &#x22;https://github.com/AgoraIO-Conversational-AI/recipe-agent-filler-words/blob/main/README.md&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Python, TypeScript&#x22;,
    tags: [&#x22;Beginner&#x22;, &#x22;Conversational AI&#x22;, &#x22;Voice Agent&#x22;, &#x22;Latency Smoothing&#x22;],
    title: &#x22;Filler Words & Graceful Exit&#x22;,
    tone: &#x22;purple&#x22;,
  },
  {
    category: &#x22;Add features&#x22;,
    description: &#x22;Compare interruptible, locked, and keyword-triggered barge-in behavior for voice turns.&#x22;,
    href: &#x22;https://github.com/AgoraIO-Conversational-AI/recipe-agent-interruptions/blob/main/README.md&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Python, TypeScript&#x22;,
    tags: [&#x22;Beginner&#x22;, &#x22;Conversational AI&#x22;, &#x22;Voice Agent&#x22;, &#x22;Turn Detection&#x22;],
    title: &#x22;Interruption Handling&#x22;,
    tone: &#x22;sand&#x22;,
  },
  {
    category: &#x22;Add features&#x22;,
    description: &#x22;Expose a FastMCP tool server that Agora invokes from a managed LLM conversation.&#x22;,
    href: &#x22;https://github.com/AgoraIO-Conversational-AI/recipe-agent-mcp/blob/main/README.md&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Python, TypeScript&#x22;,
    tags: [&#x22;Intermediate&#x22;, &#x22;Conversational AI&#x22;, &#x22;Voice Agent&#x22;, &#x22;MCP&#x22;],
    title: &#x22;MCP Tools&#x22;,
    tone: &#x22;blue&#x22;,
  },
  {
    category: &#x22;Add features&#x22;,
    description: &#x22;Ground replies in a small document corpus through a custom RAG endpoint.&#x22;,
    href: &#x22;https://github.com/AgoraIO-Conversational-AI/recipe-agent-rag/blob/main/README.md&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Python, TypeScript&#x22;,
    tags: [&#x22;Intermediate&#x22;, &#x22;Conversational AI&#x22;, &#x22;Voice Agent&#x22;, &#x22;RAG&#x22;],
    title: &#x22;Retrieval-Augmented Generation&#x22;,
    tone: &#x22;green&#x22;,
  },
  {
    category: &#x22;Add features&#x22;,
    description: &#x22;Receive Agora server callbacks, verify them, store them, and stream them to a live timeline.&#x22;,
    href: &#x22;https://github.com/AgoraIO-Conversational-AI/recipe-agent-webhooks/blob/main/README.md&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Python, TypeScript&#x22;,
    tags: [&#x22;Intermediate&#x22;, &#x22;Conversational AI&#x22;, &#x22;Voice Agent&#x22;, &#x22;Webhooks&#x22;],
    title: &#x22;Server-side Webhooks&#x22;,
    tone: &#x22;purple&#x22;,
  },
  {
    category: &#x22;Add features&#x22;,
    description: &#x22;Focus the agent on the primary speaker and suppress background voices without enrollment.&#x22;,
    href: &#x22;https://github.com/AgoraIO-Conversational-AI/recipe-agent-voiceprint/blob/main/README.md&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Python, TypeScript&#x22;,
    tags: [&#x22;Intermediate&#x22;, &#x22;Conversational AI&#x22;, &#x22;Voice Agent&#x22;, &#x22;Speaker Lock&#x22;],
    title: &#x22;Speaker Lock&#x22;,
    tone: &#x22;sand&#x22;,
  },
  {
    category: &#x22;Add features&#x22;,
    description: &#x22;Run tools inside a custom LLM endpoint and persist note-taking results in SQLite.&#x22;,
    href: &#x22;https://github.com/AgoraIO-Conversational-AI/recipe-agent-tool-calling/blob/main/README.md&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Python, TypeScript&#x22;,
    tags: [&#x22;Intermediate&#x22;, &#x22;Conversational AI&#x22;, &#x22;Voice Agent&#x22;, &#x22;Function Calling&#x22;],
    title: &#x22;Tool Calling&#x22;,
    tone: &#x22;blue&#x22;,
  },
  {
    category: &#x22;Explore scenarios&#x22;,
    description: &#x22;Try a travel concierge that moves between triage, booking, and support personas.&#x22;,
    href: &#x22;https://github.com/AgoraIO-Conversational-AI/recipe-agent-handoff/blob/main/README.md&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Python, TypeScript&#x22;,
    tags: [&#x22;Advanced&#x22;, &#x22;Conversational AI&#x22;, &#x22;Voice Agent&#x22;, &#x22;Agent Handoff&#x22;],
    title: &#x22;Agent Handoff&#x22;,
    tone: &#x22;pink&#x22;,
  },
  {
    category: &#x22;Explore scenarios&#x22;,
    description: &#x22;Translate spoken input into a target language and speak the translated response.&#x22;,
    href: &#x22;https://github.com/AgoraIO-Conversational-AI/recipe-agent-translator/blob/main/README.md&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Python, TypeScript&#x22;,
    tags: [&#x22;Intermediate&#x22;, &#x22;Conversational AI&#x22;, &#x22;Voice Agent&#x22;, &#x22;Speech Translation&#x22;],
    title: &#x22;Real-time Translator&#x22;,
    tone: &#x22;green&#x22;,
  },
  {
    category: &#x22;Explore scenarios&#x22;,
    description: &#x22;Use OpenAI Realtime with camera input so the agent can answer what it sees.&#x22;,
    href: &#x22;https://github.com/AgoraIO-Conversational-AI/recipe-agent-realtime-vision/blob/main/README.md&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Python, TypeScript&#x22;,
    tags: [&#x22;Advanced&#x22;, &#x22;Conversational AI&#x22;, &#x22;Voice Agent&#x22;, &#x22;Real-time&#x22;],
    title: &#x22;Real-time Vision (MLLM)&#x22;,
    tone: &#x22;blue&#x22;,
  },
  {
    category: &#x22;Explore scenarios&#x22;,
    description: &#x22;Replace the STT-LLM-TTS pipeline with an OpenAI Realtime voice-to-voice model.&#x22;,
    href: &#x22;https://github.com/AgoraIO-Conversational-AI/recipe-agent-realtime/blob/main/README.md&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Python, TypeScript&#x22;,
    tags: [&#x22;Intermediate&#x22;, &#x22;Conversational AI&#x22;, &#x22;Voice Agent&#x22;, &#x22;Real-time&#x22;],
    title: &#x22;Real-time Voice (MLLM)&#x22;,
    tone: &#x22;purple&#x22;,
  },
  {
    category: &#x22;Explore scenarios&#x22;,
    description: &#x22;Explore a wellness demo that injects live voice biomarker scores into an AI therapist session.&#x22;,
    href: &#x22;https://github.com/AgoraIO-Conversational-AI/agent-samples/blob/main/recipes/thymia.md&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Python&#x22;,
    tags: [&#x22;Advanced&#x22;, &#x22;Conversational AI&#x22;, &#x22;Biomarkers&#x22;, &#x22;Integrations&#x22;],
    title: &#x22;Thymia Biomarkers&#x22;,
    tone: &#x22;pink&#x22;,
  },
  {
    category: &#x22;Explore scenarios&#x22;,
    description: &#x22;Publish camera frames to a managed vision-capable LLM and ask what it sees.&#x22;,
    href: &#x22;https://github.com/AgoraIO-Conversational-AI/recipe-agent-vision/blob/main/README.md&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Python, TypeScript&#x22;,
    tags: [&#x22;Intermediate&#x22;, &#x22;Conversational AI&#x22;, &#x22;Voice Agent&#x22;, &#x22;Vision&#x22;],
    title: &#x22;Vision (Camera Input)&#x22;,
    tone: &#x22;green&#x22;,
  },
  {
    category: &#x22;Explore scenarios&#x22;,
    description: &#x22;Play a voice RPG where a Dungeon Master uses MCP tools for dice, combat, and inventory.&#x22;,
    href: &#x22;https://github.com/AgoraIO-Conversational-AI/recipe-agent-rpg/blob/main/README.md&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Python, TypeScript&#x22;,
    tags: [&#x22;Advanced&#x22;, &#x22;Conversational AI&#x22;, &#x22;Voice Agent&#x22;, &#x22;MCP&#x22;],
    title: &#x22;Voice RPG&#x22;,
    tone: &#x22;blue&#x22;,
  },
  {
    category: &#x22;Explore scenarios&#x22;,
    description: &#x22;Run a wellness conversation stack with optional voice and video biomarker signals.&#x22;,
    href: &#x22;https://github.com/AgoraIO-Conversational-AI/agent-samples/blob/main/recipes/therapist.md&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Python&#x22;,
    tags: [&#x22;Advanced&#x22;, &#x22;Conversational AI&#x22;, &#x22;Coaching&#x22;, &#x22;Python&#x22;],
    title: &#x22;Wellness Coach&#x22;,
    tone: &#x22;purple&#x22;,
  },
]"
  productFilterLabel="Product"
  searchPlaceholder="Search recipes by name, stack, or use case"
  stackFilterLabel="Stack"
/>
`;
export let structuredData = {
  contents: [],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const { RecipesGallery } = props.components || {};
  if (!RecipesGallery)
    _missingMdxReference("RecipesGallery", true);
  return _jsx(RecipesGallery, {
    allCategoriesLabel: "All recipe types",
    allProductsLabel: "All products",
    allStacksLabel: "All stacks",
    categoryFilterLabel: "Recipe type",
    clearFiltersLabel: "Clear filters",
    emptyMessage: "No recipes match the current filters.",
    items: [{
      category: "Quickstart",
      description: "Start with the shortest path to your first Voice Agent.",
      href: "/en/ai/get-started/quickstart",
      product: "Voice AI",
      tags: ["Beginner", "Conversational AI", "Voice Agent"],
      title: "Voice Agent quickstart",
      tone: "blue"
    }, {
      category: "Quickstart",
      description: "Build a native Android voice-agent client that owns RTC/RTM lifecycle and renders live transcripts.",
      href: "https://github.com/AgoraIO-Conversational-AI/recipe-client-android-quickstart/blob/main/README.md",
      product: "Voice AI",
      stack: "Android",
      tags: ["Intermediate", "Conversational AI", "Voice Agent", "Android"],
      title: "Android Voice Agent",
      tone: "blue"
    }, {
      category: "Quickstart",
      description: "Run a cross-platform Flutter voice-agent app with RTC audio, RTM events, and transcript UI.",
      href: "https://github.com/AgoraIO-Conversational-AI/agent-quickstart-flutter/blob/main/docs/ai/RECIPE.md",
      product: "Voice AI",
      stack: "Flutter",
      tags: ["Beginner", "Conversational AI", "Voice Agent", "Flutter"],
      title: "Flutter Voice Agent",
      tone: "green"
    }, {
      category: "Quickstart",
      description: "Run a Go Gin backend with a Next.js voice-agent client and managed model defaults.",
      href: "https://github.com/AgoraIO-Conversational-AI/agent-quickstart-go/blob/main/docs/ai/RECIPE.md",
      product: "Voice AI",
      stack: "Go",
      tags: ["Beginner", "Conversational AI", "Voice Agent", "Go"],
      title: "Go Voice Agent",
      tone: "purple"
    }, {
      category: "Quickstart",
      description: "Run a browser voice-agent starter with RTC audio, RTM events, server routes, and transcript UI.",
      href: "https://github.com/AgoraIO-Conversational-AI/agent-quickstart-nextjs/blob/main/docs/ai/RECIPE.md",
      product: "Voice AI",
      stack: "TypeScript",
      tags: ["Beginner", "Conversational AI", "Voice Agent", "Next.js"],
      title: "Next.js Voice Agent",
      tone: "sand"
    }, {
      category: "Quickstart",
      description: "Run a Python FastAPI backend with a Next.js voice-agent client and managed model defaults.",
      href: "https://github.com/AgoraIO-Conversational-AI/agent-quickstart-python/blob/main/docs/ai/RECIPE.md",
      product: "Voice AI",
      stack: "Python",
      tags: ["Beginner", "Conversational AI", "Voice Agent", "Python"],
      title: "Python Voice Agent",
      tone: "blue"
    }, {
      category: "Quickstart",
      description: "Build a React Native voice-agent client that renders transcripts through Agora engine adapters.",
      href: "https://github.com/AgoraIO-Conversational-AI/recipe-client-rn-quickstart/blob/main/README.md",
      product: "Voice AI",
      stack: "React Native, TypeScript",
      tags: ["Intermediate", "Conversational AI", "Voice Agent", "React Native"],
      title: "React Native Voice Agent",
      tone: "green"
    }, {
      category: "Quickstart",
      description: "Build a native SwiftUI voice-agent client with RTC/RTM lifecycle and live transcripts.",
      href: "https://github.com/AgoraIO-Conversational-AI/recipe-client-swiftui-quickstart/blob/main/README.md",
      product: "Voice AI",
      stack: "iOS",
      tags: ["Intermediate", "Conversational AI", "Voice Agent", "iOS"],
      title: "SwiftUI Voice Agent",
      tone: "purple"
    }, {
      category: "Add features",
      description: "Hear blocked sentences redacted by a custom LLM endpoint before they reach TTS.",
      href: "https://github.com/AgoraIO-Conversational-AI/recipe-agent-content-filter/blob/main/README.md",
      product: "Voice AI",
      stack: "Python, TypeScript",
      tags: ["Intermediate", "Conversational AI", "Voice Agent", "Content Moderation"],
      title: "Content Filtering",
      tone: "sand"
    }, {
      category: "Add features",
      description: "Give the agent memory of prior conversations so it recognizes returning users.",
      href: "https://github.com/AgoraIO-Conversational-AI/recipe-agent-memory/blob/main/README.md",
      product: "Voice AI",
      stack: "Python, TypeScript",
      tags: ["Intermediate", "Conversational AI", "Voice Agent", "Memory"],
      title: "Cross-Session Memory",
      tone: "blue"
    }, {
      category: "Add features",
      description: "Swap the managed LLM for your own OpenAI-compatible endpoint while keeping managed STT and TTS.",
      href: "https://github.com/AgoraIO-Conversational-AI/recipe-agent-custom-llm/blob/main/README.md",
      product: "Voice AI",
      stack: "Python, TypeScript",
      tags: ["Intermediate", "Conversational AI", "Voice Agent", "Custom LLM"],
      title: "Custom LLM",
      tone: "green"
    }, {
      category: "Add features",
      description: "Return audio from a custom endpoint so the agent skips the separate TTS step.",
      href: "https://github.com/AgoraIO-Conversational-AI/recipe-agent-custom-llm-tts/blob/main/README.md",
      product: "Voice AI",
      stack: "Python, TypeScript",
      tags: ["Intermediate", "Conversational AI", "Voice Agent", "Custom LLM"],
      title: "Custom Modalities",
      tone: "purple"
    }, {
      category: "Add features",
      description: "Change prompts, injected context, and runtime instructions without running a separate LLM service.",
      href: "https://github.com/AgoraIO-Conversational-AI/recipe-agent-instructions/blob/main/README.md",
      product: "Voice AI",
      stack: "Python, TypeScript",
      tags: ["Beginner", "Conversational AI", "Voice Agent", "Prompt Management"],
      title: "Dynamic Instructions",
      tone: "sand"
    }, {
      category: "Add features",
      description: "Use keyword hints to help ARES recognize specific terms more accurately.",
      href: "https://github.com/AgoraIO-Conversational-AI/recipe-agent-stt-vendors/blob/main/README.md#ares-keywords",
      product: "Voice AI",
      stack: "Python, TypeScript",
      tags: ["Beginner", "Conversational AI", "Voice Agent", "Speech Recognition"],
      title: "Ares Keywords",
      tone: "blue"
    }, {
      category: "Add features",
      description: "Run a smart-home agent whose available tools change by room and keyword scene.",
      href: "https://github.com/AgoraIO-Conversational-AI/recipe-agent-tools-plus/blob/main/README.md",
      product: "Voice AI",
      stack: "Python, TypeScript",
      tags: ["Advanced", "Conversational AI", "Voice Agent", "Dynamic Tools"],
      title: "Dynamic Tool Sets",
      tone: "blue"
    }, {
      category: "Add features",
      description: "Watch agent state, metrics, errors, and transcript events update in a live web timeline.",
      href: "https://github.com/AgoraIO-Conversational-AI/recipe-agent-events/blob/main/README.md",
      product: "Voice AI",
      stack: "Python, TypeScript",
      tags: ["Beginner", "Conversational AI", "Voice Agent", "Observability"],
      title: "Event Observability",
      tone: "green"
    }, {
      category: "Add features",
      description: "Add natural filler phrases during LLM latency and a graceful goodbye at session end.",
      href: "https://github.com/AgoraIO-Conversational-AI/recipe-agent-filler-words/blob/main/README.md",
      product: "Voice AI",
      stack: "Python, TypeScript",
      tags: ["Beginner", "Conversational AI", "Voice Agent", "Latency Smoothing"],
      title: "Filler Words & Graceful Exit",
      tone: "purple"
    }, {
      category: "Add features",
      description: "Compare interruptible, locked, and keyword-triggered barge-in behavior for voice turns.",
      href: "https://github.com/AgoraIO-Conversational-AI/recipe-agent-interruptions/blob/main/README.md",
      product: "Voice AI",
      stack: "Python, TypeScript",
      tags: ["Beginner", "Conversational AI", "Voice Agent", "Turn Detection"],
      title: "Interruption Handling",
      tone: "sand"
    }, {
      category: "Add features",
      description: "Expose a FastMCP tool server that Agora invokes from a managed LLM conversation.",
      href: "https://github.com/AgoraIO-Conversational-AI/recipe-agent-mcp/blob/main/README.md",
      product: "Voice AI",
      stack: "Python, TypeScript",
      tags: ["Intermediate", "Conversational AI", "Voice Agent", "MCP"],
      title: "MCP Tools",
      tone: "blue"
    }, {
      category: "Add features",
      description: "Ground replies in a small document corpus through a custom RAG endpoint.",
      href: "https://github.com/AgoraIO-Conversational-AI/recipe-agent-rag/blob/main/README.md",
      product: "Voice AI",
      stack: "Python, TypeScript",
      tags: ["Intermediate", "Conversational AI", "Voice Agent", "RAG"],
      title: "Retrieval-Augmented Generation",
      tone: "green"
    }, {
      category: "Add features",
      description: "Receive Agora server callbacks, verify them, store them, and stream them to a live timeline.",
      href: "https://github.com/AgoraIO-Conversational-AI/recipe-agent-webhooks/blob/main/README.md",
      product: "Voice AI",
      stack: "Python, TypeScript",
      tags: ["Intermediate", "Conversational AI", "Voice Agent", "Webhooks"],
      title: "Server-side Webhooks",
      tone: "purple"
    }, {
      category: "Add features",
      description: "Focus the agent on the primary speaker and suppress background voices without enrollment.",
      href: "https://github.com/AgoraIO-Conversational-AI/recipe-agent-voiceprint/blob/main/README.md",
      product: "Voice AI",
      stack: "Python, TypeScript",
      tags: ["Intermediate", "Conversational AI", "Voice Agent", "Speaker Lock"],
      title: "Speaker Lock",
      tone: "sand"
    }, {
      category: "Add features",
      description: "Run tools inside a custom LLM endpoint and persist note-taking results in SQLite.",
      href: "https://github.com/AgoraIO-Conversational-AI/recipe-agent-tool-calling/blob/main/README.md",
      product: "Voice AI",
      stack: "Python, TypeScript",
      tags: ["Intermediate", "Conversational AI", "Voice Agent", "Function Calling"],
      title: "Tool Calling",
      tone: "blue"
    }, {
      category: "Explore scenarios",
      description: "Try a travel concierge that moves between triage, booking, and support personas.",
      href: "https://github.com/AgoraIO-Conversational-AI/recipe-agent-handoff/blob/main/README.md",
      product: "Voice AI",
      stack: "Python, TypeScript",
      tags: ["Advanced", "Conversational AI", "Voice Agent", "Agent Handoff"],
      title: "Agent Handoff",
      tone: "pink"
    }, {
      category: "Explore scenarios",
      description: "Translate spoken input into a target language and speak the translated response.",
      href: "https://github.com/AgoraIO-Conversational-AI/recipe-agent-translator/blob/main/README.md",
      product: "Voice AI",
      stack: "Python, TypeScript",
      tags: ["Intermediate", "Conversational AI", "Voice Agent", "Speech Translation"],
      title: "Real-time Translator",
      tone: "green"
    }, {
      category: "Explore scenarios",
      description: "Use OpenAI Realtime with camera input so the agent can answer what it sees.",
      href: "https://github.com/AgoraIO-Conversational-AI/recipe-agent-realtime-vision/blob/main/README.md",
      product: "Voice AI",
      stack: "Python, TypeScript",
      tags: ["Advanced", "Conversational AI", "Voice Agent", "Real-time"],
      title: "Real-time Vision (MLLM)",
      tone: "blue"
    }, {
      category: "Explore scenarios",
      description: "Replace the STT-LLM-TTS pipeline with an OpenAI Realtime voice-to-voice model.",
      href: "https://github.com/AgoraIO-Conversational-AI/recipe-agent-realtime/blob/main/README.md",
      product: "Voice AI",
      stack: "Python, TypeScript",
      tags: ["Intermediate", "Conversational AI", "Voice Agent", "Real-time"],
      title: "Real-time Voice (MLLM)",
      tone: "purple"
    }, {
      category: "Explore scenarios",
      description: "Explore a wellness demo that injects live voice biomarker scores into an AI therapist session.",
      href: "https://github.com/AgoraIO-Conversational-AI/agent-samples/blob/main/recipes/thymia.md",
      product: "Voice AI",
      stack: "Python",
      tags: ["Advanced", "Conversational AI", "Biomarkers", "Integrations"],
      title: "Thymia Biomarkers",
      tone: "pink"
    }, {
      category: "Explore scenarios",
      description: "Publish camera frames to a managed vision-capable LLM and ask what it sees.",
      href: "https://github.com/AgoraIO-Conversational-AI/recipe-agent-vision/blob/main/README.md",
      product: "Voice AI",
      stack: "Python, TypeScript",
      tags: ["Intermediate", "Conversational AI", "Voice Agent", "Vision"],
      title: "Vision (Camera Input)",
      tone: "green"
    }, {
      category: "Explore scenarios",
      description: "Play a voice RPG where a Dungeon Master uses MCP tools for dice, combat, and inventory.",
      href: "https://github.com/AgoraIO-Conversational-AI/recipe-agent-rpg/blob/main/README.md",
      product: "Voice AI",
      stack: "Python, TypeScript",
      tags: ["Advanced", "Conversational AI", "Voice Agent", "MCP"],
      title: "Voice RPG",
      tone: "blue"
    }, {
      category: "Explore scenarios",
      description: "Run a wellness conversation stack with optional voice and video biomarker signals.",
      href: "https://github.com/AgoraIO-Conversational-AI/agent-samples/blob/main/recipes/therapist.md",
      product: "Voice AI",
      stack: "Python",
      tags: ["Advanced", "Conversational AI", "Coaching", "Python"],
      title: "Wellness Coach",
      tone: "purple"
    }],
    productFilterLabel: "Product",
    searchPlaceholder: "Search recipes by name, stack, or use case",
    stackFilterLabel: "Stack"
  });
}
export default function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
