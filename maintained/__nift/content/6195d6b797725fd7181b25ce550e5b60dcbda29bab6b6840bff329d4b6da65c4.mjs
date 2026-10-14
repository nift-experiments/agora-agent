import { jsx as _jsx } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "API reference",
  description: "API references across Agora products and platforms. Migrated SDK API references and updated links to the hosted SDK API documentation.",
  hideToc: true
};
export let _markdown = `

<RecipesCatalog
  allCategoriesLabel="All reference types"
  allProductsLabel="All products"
  allStacksLabel="All platforms"
  categoryFilterLabel="Reference type"
  clearFiltersLabel="Clear filters"
  emptyMessage="No references match the current filters."
  groupByProduct="true"
  productGroups="{
  &#x22;Conversational AI&#x22;: {
    title: &#x22;Conversational AI&#x22;,
    description: &#x22;Manage your Conversational AI agents with RESTful APIs.&#x22;,
    icon: &#x22;ai&#x22;,
  },
  &#x22;Realtime Communication&#x22;: {
    title: &#x22;Realtime Communication&#x22;,
    description: &#x22;This product uses the RTC SDK and RTC (Voice Only) SDK.&#x22;,
    icon: &#x22;rtc&#x22;,
  },
  &#x22;Signaling&#x22;: {
    title: &#x22;Signaling&#x22;,
    description: &#x22;This product uses the Signaling SDK.&#x22;,
    icon: &#x22;signaling&#x22;,
  },
  &#x22;On-Premise Recording&#x22;: {
    title: &#x22;On-Premise Recording&#x22;,
    description: &#x22;This product uses the On-Premise Recording SDK.&#x22;,
    icon: &#x22;on-premise-recording&#x22;,
  },
  &#x22;Server Gateway&#x22;: {
    title: &#x22;Server Gateway&#x22;,
    description: &#x22;This product uses the Server Gateway SDK.&#x22;,
    icon: &#x22;server-sdk&#x22;,
  },
  &#x22;IoT SDK&#x22;: {
    title: &#x22;IoT SDK&#x22;,
    description: &#x22;&#x22;,
    icon: &#x22;iot&#x22;,
  },
  &#x22;Interactive Whiteboard&#x22;: {
    title: &#x22;Interactive Whiteboard&#x22;,
    description: &#x22;This product uses the Interactive Whiteboard SDK.&#x22;,
    icon: &#x22;whiteboard&#x22;,
  },
  &#x22;Flexible Classroom&#x22;: {
    title: &#x22;Flexible Classroom&#x22;,
    description: &#x22;This product uses the Flexible Classroom SDK.&#x22;,
    icon: &#x22;classroom&#x22;,
  },
  &#x22;Chat&#x22;: {
    title: &#x22;Chat&#x22;,
    description: &#x22;This product uses the Chat SDK.&#x22;,
    icon: &#x22;chat&#x22;,
  },
  &#x22;Media Gateway&#x22;: {
    title: &#x22;Media Gateway&#x22;,
    description: &#x22;This product provides RESTful APIs.&#x22;,
    icon: &#x22;rtmp-gateway&#x22;,
  },
  &#x22;Analytics&#x22;: {
    title: &#x22;Analytics&#x22;,
    description: &#x22;This product provides RESTful APIs.&#x22;,
    icon: &#x22;analytics&#x22;,
  },
  &#x22;Cloud Recording&#x22;: {
    title: &#x22;Cloud Recording&#x22;,
    description: &#x22;This product provides RESTful APIs.&#x22;,
    icon: &#x22;cloud-recording&#x22;,
  },
  &#x22;Cloud Transcoding&#x22;: {
    title: &#x22;Cloud Transcoding&#x22;,
    description: &#x22;Create, update, and manage your cloud transcoding tasks with RESTful APIs.&#x22;,
    icon: &#x22;transcoding&#x22;,
  },
  &#x22;Real-Time Speech-To-Text&#x22;: {
    title: &#x22;Real-Time Speech-To-Text&#x22;,
    description: &#x22;This product provides RESTful APIs.&#x22;,
    icon: &#x22;transcription&#x22;,
  },
  &#x22;Media Pull&#x22;: {
    title: &#x22;Media Pull&#x22;,
    description: &#x22;This product provides RESTful APIs.&#x22;,
    icon: &#x22;media-pull&#x22;,
  },
  &#x22;Media Push&#x22;: {
    title: &#x22;Media Push&#x22;,
    description: &#x22;This product provides RESTful APIs.&#x22;,
    icon: &#x22;media-push&#x22;,
  },
  &#x22;Extensions Marketplace&#x22;: {
    title: &#x22;Extensions Marketplace&#x22;,
    description: &#x22;This product provides RESTful APIs.&#x22;,
    icon: &#x22;tools&#x22;,
  },
}"
  items="[
  {
    category: &#x22;In-portal&#x22;,
    description: &#x22;Conversational AI REST API reference.&#x22;,
    product: &#x22;Conversational AI&#x22;,
    stack: &#x22;RESTful APIs&#x22;,
    title: &#x22;RESTful APIs&#x22;,
    links: [
      {
        href: &#x22;/en/api-reference/api-ref/conversational-ai&#x22;,
        label: &#x22;Conversational AI&#x22;,
      },
    ],
    tone: &#x22;blue&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;RTC (Voice Only) SDK for Android API reference with current and previous major-version coverage.&#x22;,
    product: &#x22;Realtime Communication&#x22;,
    sdk: &#x22;RTC (Voice Only) SDK&#x22;,
    stack: &#x22;Android&#x22;,
    title: &#x22;RTC (Voice Only) SDK for Android&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/voice-sdk/android/4.x/API/rtc_api_overview.html&#x22;,
        label: &#x22;4.7.0 (Latest)&#x22;,
      },
      {
        href: &#x22;https://api-ref.agora.io/en/voice-sdk/android/3.x/index.html&#x22;,
        label: &#x22;3.7.2.1&#x22;,
      },
    ],
    tone: &#x22;blue&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;RTC (Voice Only) SDK for iOS API reference with current and previous major-version coverage.&#x22;,
    product: &#x22;Realtime Communication&#x22;,
    sdk: &#x22;RTC (Voice Only) SDK&#x22;,
    stack: &#x22;iOS&#x22;,
    title: &#x22;RTC (Voice Only) SDK for iOS&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/voice-sdk/ios/4.x/documentation/agorartckit&#x22;,
        label: &#x22;4.7.0 (Latest)&#x22;,
      },
      {
        href: &#x22;https://api-ref.agora.io/en/voice-sdk/ios/3.x/docs/headers/Agora-Objective-C-API-Overview.html&#x22;,
        label: &#x22;3.7.2&#x22;,
      },
    ],
    tone: &#x22;blue&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;RTC SDK for ReactJS API reference: components, hooks, and data types.&#x22;,
    product: &#x22;Realtime Communication&#x22;,
    sdk: &#x22;RTC SDK&#x22;,
    stack: &#x22;ReactJS&#x22;,
    title: &#x22;RTC SDK for ReactJS&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/video-sdk/reactjs/2.x/index.html&#x22;,
        label: &#x22;2.5.1 (Latest)&#x22;,
      },
    ],
    tone: &#x22;pink&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;RTC SDK for Android API reference, including Lite SDK and previous major-version coverage.&#x22;,
    product: &#x22;Realtime Communication&#x22;,
    sdk: &#x22;RTC SDK&#x22;,
    stack: &#x22;Android&#x22;,
    title: &#x22;RTC SDK for Android&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/video-sdk/android/4.x/API/rtc_api_overview.html&#x22;,
        label: &#x22;4.7.0 (Latest)&#x22;,
      },
      {
        href: &#x22;https://api-ref.agora.io/en/video-sdk/android/4.x/API/rtc_lite_api.html&#x22;,
        label: &#x22;4.7.0 Lite SDK (Latest)&#x22;,
      },
      {
        href: &#x22;https://api-ref.agora.io/en/video-sdk/android/3.x/index.html&#x22;,
        label: &#x22;3.7.2&#x22;,
      },
    ],
    tone: &#x22;sand&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;RTC SDK for iOS API reference, including Lite SDK and previous major-version coverage.&#x22;,
    product: &#x22;Realtime Communication&#x22;,
    sdk: &#x22;RTC SDK&#x22;,
    stack: &#x22;iOS&#x22;,
    title: &#x22;RTC SDK for iOS&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit&#x22;,
        label: &#x22;4.7.0 (Latest)&#x22;,
      },
      {
        href: &#x22;https://api-ref.agora.io/en/lite-sdk/ios/4.x/documentation/agorartckit&#x22;,
        label: &#x22;4.7.0 Lite SDK (Latest)&#x22;,
      },
      {
        href: &#x22;https://api-ref.agora.io/en/video-sdk/ios/3.x/docs/headers/Agora-Objective-C-API-Overview.html&#x22;,
        label: &#x22;3.7.2&#x22;,
      },
    ],
    tone: &#x22;sand&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;RTC SDK for macOS API reference with current and previous major-version coverage.&#x22;,
    product: &#x22;Realtime Communication&#x22;,
    sdk: &#x22;RTC SDK&#x22;,
    stack: &#x22;macOS&#x22;,
    title: &#x22;RTC SDK for macOS&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit&#x22;,
        label: &#x22;4.7.0 (Latest)&#x22;,
      },
      {
        href: &#x22;https://api-ref.agora.io/en/video-sdk/macos/3.x/docs/headers/Agora-Objective-C-API-Overview.html&#x22;,
        label: &#x22;3.7.2&#x22;,
      },
    ],
    tone: &#x22;sand&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;RTC SDK for Web API reference.&#x22;,
    product: &#x22;Realtime Communication&#x22;,
    sdk: &#x22;RTC SDK&#x22;,
    stack: &#x22;Web&#x22;,
    title: &#x22;RTC SDK for Web&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/video-sdk/web/4.x/index.html&#x22;,
        label: &#x22;4.24.8 (Latest)&#x22;,
      },
    ],
    tone: &#x22;sand&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;RTC SDK for Unity API reference with current and previous major-version coverage.&#x22;,
    product: &#x22;Realtime Communication&#x22;,
    sdk: &#x22;RTC SDK&#x22;,
    stack: &#x22;Unity&#x22;,
    title: &#x22;RTC SDK for Unity&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/video-sdk/unity/4.x/API/rtc_api_overview.html&#x22;,
        label: &#x22;4.6.2 (Latest)&#x22;,
      },
      {
        href: &#x22;https://api-ref.agora.io/en/video-sdk/unity/3.x/index.html&#x22;,
        label: &#x22;3.7.1&#x22;,
      },
    ],
    tone: &#x22;sand&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;RTC SDK for Electron API reference with current and previous major-version coverage.&#x22;,
    product: &#x22;Realtime Communication&#x22;,
    sdk: &#x22;RTC SDK&#x22;,
    stack: &#x22;Electron&#x22;,
    title: &#x22;RTC SDK for Electron&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/video-sdk/electron/4.x/API/rtc_api_overview.html&#x22;,
        label: &#x22;4.6.2 (Latest)&#x22;,
      },
      {
        href: &#x22;https://api-ref.agora.io/en/video-sdk/electron/3.x/index.html&#x22;,
        label: &#x22;3.7.0&#x22;,
      },
    ],
    tone: &#x22;sand&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;RTC SDK for Flutter API reference with current and previous major-version coverage.&#x22;,
    product: &#x22;Realtime Communication&#x22;,
    sdk: &#x22;RTC SDK&#x22;,
    stack: &#x22;Flutter&#x22;,
    title: &#x22;RTC SDK for Flutter&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/rtc_api_overview.html&#x22;,
        label: &#x22;6.6.4 (Latest)&#x22;,
      },
      {
        href: &#x22;https://api-ref.agora.io/en/video-sdk/flutter/5.x/API/rtc_api_overview.html&#x22;,
        label: &#x22;5.3.1&#x22;,
      },
    ],
    tone: &#x22;sand&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;RTC SDK for React Native API reference with current and previous major-version coverage.&#x22;,
    product: &#x22;Realtime Communication&#x22;,
    sdk: &#x22;RTC SDK&#x22;,
    stack: &#x22;React Native&#x22;,
    title: &#x22;RTC SDK for React Native&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/rtc_api_overview.html&#x22;,
        label: &#x22;4.6.4 (Latest)&#x22;,
      },
      {
        href: &#x22;https://api-ref.agora.io/en/video-sdk/react-native/3.x/index.html&#x22;,
        label: &#x22;3.7.0&#x22;,
      },
    ],
    tone: &#x22;sand&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;RTC SDK for Windows C++ API reference with current and previous major-version coverage.&#x22;,
    product: &#x22;Realtime Communication&#x22;,
    sdk: &#x22;RTC SDK&#x22;,
    stack: &#x22;Windows C++&#x22;,
    title: &#x22;RTC SDK for Windows C++&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/rtc_api_overview.html&#x22;,
        label: &#x22;4.7.0 (Latest)&#x22;,
      },
      {
        href: &#x22;https://api-ref.agora.io/en/video-sdk/cpp/3.x/index.html&#x22;,
        label: &#x22;3.7.2&#x22;,
      },
    ],
    tone: &#x22;sand&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;RTC SDK for Windows C# API reference.&#x22;,
    product: &#x22;Realtime Communication&#x22;,
    sdk: &#x22;RTC SDK&#x22;,
    stack: &#x22;Windows C#&#x22;,
    title: &#x22;RTC SDK for Windows C#&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/video-sdk/windows-csharp/3.x/API/rtc_api_overview.html&#x22;,
        label: &#x22;3.6.2 (Latest)&#x22;,
      },
    ],
    tone: &#x22;sand&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;RTC SDK for Unreal Blueprint API reference.&#x22;,
    product: &#x22;Realtime Communication&#x22;,
    sdk: &#x22;RTC SDK&#x22;,
    stack: &#x22;Unreal Blueprint&#x22;,
    title: &#x22;RTC SDK for Unreal Blueprint&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/rtc_api_overview.html&#x22;,
        label: &#x22;4.5.1 (Latest)&#x22;,
      },
    ],
    tone: &#x22;sand&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;RTC SDK for Unreal Engine API reference.&#x22;,
    product: &#x22;Realtime Communication&#x22;,
    sdk: &#x22;RTC SDK&#x22;,
    stack: &#x22;Unreal Engine&#x22;,
    title: &#x22;RTC SDK for Unreal Engine&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/rtc_api_overview.html&#x22;,
        label: &#x22;4.5.1 (Latest)&#x22;,
      },
    ],
    tone: &#x22;sand&#x22;,
  },
  {
    category: &#x22;In-portal&#x22;,
    description: &#x22;Signaling Android SDK API reference.&#x22;,
    product: &#x22;Signaling&#x22;,
    stack: &#x22;Android&#x22;,
    title: &#x22;Android&#x22;,
    links: [
      {
        href: &#x22;/en/api-reference/api-ref/signaling/android&#x22;,
        label: &#x22;Migrated reference&#x22;,
      },
    ],
    tone: &#x22;blue&#x22;,
  },
  {
    category: &#x22;In-portal&#x22;,
    description: &#x22;Signaling iOS SDK API reference.&#x22;,
    product: &#x22;Signaling&#x22;,
    stack: &#x22;iOS&#x22;,
    title: &#x22;iOS&#x22;,
    links: [
      {
        href: &#x22;/en/api-reference/api-ref/signaling/ios&#x22;,
        label: &#x22;Migrated reference&#x22;,
      },
    ],
    tone: &#x22;blue&#x22;,
  },
  {
    category: &#x22;In-portal&#x22;,
    description: &#x22;Signaling macOS SDK API reference.&#x22;,
    product: &#x22;Signaling&#x22;,
    stack: &#x22;macOS&#x22;,
    title: &#x22;macOS&#x22;,
    links: [
      {
        href: &#x22;/en/api-reference/api-ref/signaling/macos&#x22;,
        label: &#x22;Migrated reference&#x22;,
      },
    ],
    tone: &#x22;blue&#x22;,
  },
  {
    category: &#x22;In-portal&#x22;,
    description: &#x22;Signaling Web SDK API reference.&#x22;,
    product: &#x22;Signaling&#x22;,
    stack: &#x22;Web&#x22;,
    title: &#x22;Web&#x22;,
    links: [
      {
        href: &#x22;/en/api-reference/api-ref/signaling/web&#x22;,
        label: &#x22;Migrated reference&#x22;,
      },
    ],
    tone: &#x22;blue&#x22;,
  },
  {
    category: &#x22;In-portal&#x22;,
    description: &#x22;Signaling Flutter SDK API reference.&#x22;,
    product: &#x22;Signaling&#x22;,
    stack: &#x22;Flutter&#x22;,
    title: &#x22;Flutter&#x22;,
    links: [
      {
        href: &#x22;/en/api-reference/api-ref/signaling/flutter&#x22;,
        label: &#x22;Migrated reference&#x22;,
      },
    ],
    tone: &#x22;blue&#x22;,
  },
  {
    category: &#x22;In-portal&#x22;,
    description: &#x22;Signaling Unity SDK API reference.&#x22;,
    product: &#x22;Signaling&#x22;,
    stack: &#x22;Unity&#x22;,
    title: &#x22;Unity&#x22;,
    links: [
      {
        href: &#x22;/en/api-reference/api-ref/signaling/unity&#x22;,
        label: &#x22;Migrated reference&#x22;,
      },
    ],
    tone: &#x22;blue&#x22;,
  },
  {
    category: &#x22;In-portal&#x22;,
    description: &#x22;Signaling React Native SDK API reference.&#x22;,
    product: &#x22;Signaling&#x22;,
    stack: &#x22;React Native&#x22;,
    title: &#x22;React Native&#x22;,
    links: [
      {
        href: &#x22;/en/api-reference/api-ref/signaling/react-native&#x22;,
        label: &#x22;Migrated reference&#x22;,
      },
    ],
    tone: &#x22;blue&#x22;,
  },
  {
    category: &#x22;In-portal&#x22;,
    description: &#x22;Signaling Windows C++ SDK API reference.&#x22;,
    product: &#x22;Signaling&#x22;,
    stack: &#x22;Windows C++&#x22;,
    title: &#x22;Windows C++&#x22;,
    links: [
      {
        href: &#x22;/en/api-reference/api-ref/signaling/windows-cpp&#x22;,
        label: &#x22;Migrated reference&#x22;,
      },
    ],
    tone: &#x22;blue&#x22;,
  },
  {
    category: &#x22;In-portal&#x22;,
    description: &#x22;Signaling Linux C++ SDK API reference.&#x22;,
    product: &#x22;Signaling&#x22;,
    stack: &#x22;Linux C++&#x22;,
    title: &#x22;Linux C++&#x22;,
    links: [
      {
        href: &#x22;/en/api-reference/api-ref/signaling/linux-cpp&#x22;,
        label: &#x22;Migrated reference&#x22;,
      },
    ],
    tone: &#x22;blue&#x22;,
  },
  {
    category: &#x22;In-portal&#x22;,
    description: &#x22;Signaling Linux Java SDK API reference.&#x22;,
    product: &#x22;Signaling&#x22;,
    stack: &#x22;Linux Java&#x22;,
    title: &#x22;Linux Java&#x22;,
    links: [
      {
        href: &#x22;/en/api-reference/api-ref/signaling/linux-java&#x22;,
        label: &#x22;Migrated reference&#x22;,
      },
    ],
    tone: &#x22;blue&#x22;,
  },
  {
    category: &#x22;In-portal&#x22;,
    description: &#x22;Signaling RESTful API reference.&#x22;,
    product: &#x22;Signaling&#x22;,
    stack: &#x22;RESTful APIs&#x22;,
    title: &#x22;RESTful APIs&#x22;,
    links: [
      {
        href: &#x22;/en/api-reference/api-ref/signaling&#x22;,
        label: &#x22;Messaging and Events&#x22;,
      },
    ],
    tone: &#x22;blue&#x22;,
  },
  {
    category: &#x22;In-portal&#x22;,
    description: &#x22;On-Premise Recording Linux C++ API reference.&#x22;,
    product: &#x22;On-Premise Recording&#x22;,
    stack: &#x22;Linux C++&#x22;,
    title: &#x22;Linux C++&#x22;,
    links: [
      {
        href: &#x22;/en/api-reference/api-ref/on-premise-recording&#x22;,
        label: &#x22;4.4.151 (Latest)&#x22;,
      },
      {
        href: &#x22;https://api-ref.agora.io/en/on-premise-recording-sdk/linux-cpp/3.x/index.html&#x22;,
        label: &#x22;3.0.6&#x22;,
      },
    ],
    tone: &#x22;purple&#x22;,
  },
  {
    category: &#x22;In-portal&#x22;,
    description: &#x22;On-Premise Recording Linux Java API reference.&#x22;,
    product: &#x22;On-Premise Recording&#x22;,
    stack: &#x22;Linux Java&#x22;,
    title: &#x22;Linux Java&#x22;,
    links: [
      {
        href: &#x22;/en/api-reference/api-ref/on-premise-recording&#x22;,
        label: &#x22;4.4.151 (Latest)&#x22;,
      },
      {
        href: &#x22;https://api-ref.agora.io/en/on-premise-recording-sdk/linux-java/3.x/index.html&#x22;,
        label: &#x22;3.0.6&#x22;,
      },
    ],
    tone: &#x22;purple&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;Server Gateway Linux C++ API reference.&#x22;,
    product: &#x22;Server Gateway&#x22;,
    stack: &#x22;Linux C++&#x22;,
    title: &#x22;Linux C++&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/server-gateway-sdk/linux-cpp/4.x/index.html&#x22;,
        label: &#x22;4.4.32 (Latest)&#x22;,
      },
      {
        href: &#x22;https://api-ref.agora.io/en/server-gateway-sdk/linux-cpp/3.x/index.html&#x22;,
        label: &#x22;3.8.202.20&#x22;,
      },
    ],
    tone: &#x22;green&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;Server Gateway Linux Java API reference.&#x22;,
    product: &#x22;Server Gateway&#x22;,
    stack: &#x22;Linux Java&#x22;,
    title: &#x22;Linux Java&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/server-gateway-sdk/linux-java/4.x/index.html&#x22;,
        label: &#x22;4.4.30 (Latest)&#x22;,
      },
      {
        href: &#x22;https://api-ref.agora.io/en/server-gateway-sdk/linux-java/3.x/index.html&#x22;,
        label: &#x22;3.7.200.21&#x22;,
      },
    ],
    tone: &#x22;green&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;IoT SDK Android API reference.&#x22;,
    product: &#x22;IoT SDK&#x22;,
    stack: &#x22;Android&#x22;,
    title: &#x22;Android&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/iot-sdk/android/1.x/index.html&#x22;,
        label: &#x22;1.8 (Latest)&#x22;,
      },
    ],
    tone: &#x22;sand&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;IoT SDK Linux C API reference.&#x22;,
    product: &#x22;IoT SDK&#x22;,
    stack: &#x22;Linux C&#x22;,
    title: &#x22;Linux C&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/iot-sdk/linux/1.x/index.html&#x22;,
        label: &#x22;1.9.7 (Latest)&#x22;,
      },
    ],
    tone: &#x22;sand&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;Interactive Whiteboard Android API reference.&#x22;,
    product: &#x22;Interactive Whiteboard&#x22;,
    stack: &#x22;Android&#x22;,
    title: &#x22;Android&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/interactive-whiteboard-sdk/android/2.x/index.html&#x22;,
        label: &#x22;Whiteboard SDK&#x22;,
      },
    ],
    tone: &#x22;green&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;Interactive Whiteboard iOS API reference.&#x22;,
    product: &#x22;Interactive Whiteboard&#x22;,
    stack: &#x22;iOS&#x22;,
    title: &#x22;iOS&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/interactive-whiteboard-sdk/ios/2.x/docs/headers/Agora-Interactive-Whiteboard-Objective-C-Overview.html&#x22;,
        label: &#x22;Whiteboard SDK&#x22;,
      },
    ],
    tone: &#x22;green&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;Interactive Whiteboard Web API reference.&#x22;,
    product: &#x22;Interactive Whiteboard&#x22;,
    stack: &#x22;Web&#x22;,
    title: &#x22;Web&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/interactive-whiteboard-sdk/web/2.x/index.html&#x22;,
        label: &#x22;Whiteboard SDK&#x22;,
      },
    ],
    tone: &#x22;green&#x22;,
  },
  {
    category: &#x22;In-portal&#x22;,
    description: &#x22;Interactive Whiteboard RESTful API reference.&#x22;,
    product: &#x22;Interactive Whiteboard&#x22;,
    stack: &#x22;RESTful APIs&#x22;,
    title: &#x22;RESTful APIs&#x22;,
    links: [
      {
        href: &#x22;/en/api-reference/api-ref/whiteboard&#x22;,
        label: &#x22;Latest&#x22;,
      },
    ],
    tone: &#x22;green&#x22;,
  },
  {
    category: &#x22;In-portal&#x22;,
    description: &#x22;Fastboard SDK API reference for Android, iOS, and Web.&#x22;,
    product: &#x22;Interactive Whiteboard&#x22;,
    stack: &#x22;Fastboard SDK&#x22;,
    title: &#x22;Fastboard SDK&#x22;,
    links: [
      {
        href: &#x22;/en/api-reference/api-ref/uikit-sdk&#x22;,
        label: &#x22;Fastboard API&#x22;,
      },
    ],
    tone: &#x22;green&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;Flexible Classroom Android API reference.&#x22;,
    product: &#x22;Flexible Classroom&#x22;,
    stack: &#x22;Android&#x22;,
    title: &#x22;Android&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/flexible-classroom-sdk/android/2.x/API/edu_context_api_overview.html&#x22;,
        label: &#x22;Edu Context&#x22;,
      },
      {
        href: &#x22;/en/api-reference/api-ref/flexible-classroom/classroom-sdk&#x22;,
        label: &#x22;Classroom SDK&#x22;,
      },
      {
        href: &#x22;/en/api-reference/api-ref/flexible-classroom/proctor-sdk&#x22;,
        label: &#x22;Proctor SDK&#x22;,
      },
    ],
    tone: &#x22;green&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;Flexible Classroom iOS API reference.&#x22;,
    product: &#x22;Flexible Classroom&#x22;,
    stack: &#x22;iOS&#x22;,
    title: &#x22;iOS&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/flexible-classroom-sdk/ios/2.x/API/edu_context_api_overview.html&#x22;,
        label: &#x22;Edu Context&#x22;,
      },
      {
        href: &#x22;/en/api-reference/api-ref/flexible-classroom/classroom-sdk&#x22;,
        label: &#x22;Classroom SDK&#x22;,
      },
      {
        href: &#x22;/en/api-reference/api-ref/flexible-classroom/proctor-sdk&#x22;,
        label: &#x22;Proctor SDK&#x22;,
      },
    ],
    tone: &#x22;green&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;Flexible Classroom Web API reference.&#x22;,
    product: &#x22;Flexible Classroom&#x22;,
    stack: &#x22;Web&#x22;,
    title: &#x22;Web&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/flexible-classroom-sdk/web/2.x/index.html&#x22;,
        label: &#x22;Edu Store&#x22;,
      },
      {
        href: &#x22;/en/api-reference/api-ref/flexible-classroom/classroom-sdk&#x22;,
        label: &#x22;Classroom SDK&#x22;,
      },
      {
        href: &#x22;/en/api-reference/api-ref/flexible-classroom/ui-scene&#x22;,
        label: &#x22;UI Scene SDK&#x22;,
      },
      {
        href: &#x22;/en/api-reference/api-ref/flexible-classroom/proctor-sdk&#x22;,
        label: &#x22;Proctor SDK&#x22;,
      },
    ],
    tone: &#x22;green&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;Flexible Classroom Electron API reference.&#x22;,
    product: &#x22;Flexible Classroom&#x22;,
    stack: &#x22;Electron&#x22;,
    title: &#x22;Electron&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/flexible-classroom-sdk/electron/2.x/index.html&#x22;,
        label: &#x22;Edu Store&#x22;,
      },
      {
        href: &#x22;/en/api-reference/api-ref/flexible-classroom/classroom-sdk&#x22;,
        label: &#x22;Classroom SDK&#x22;,
      },
      {
        href: &#x22;/en/api-reference/api-ref/flexible-classroom/proctor-sdk&#x22;,
        label: &#x22;Proctor SDK&#x22;,
      },
    ],
    tone: &#x22;green&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;Flexible Classroom RESTful API reference.&#x22;,
    product: &#x22;Flexible Classroom&#x22;,
    stack: &#x22;RESTful APIs&#x22;,
    title: &#x22;RESTful APIs&#x22;,
    links: [
      {
        href: &#x22;/en/api-reference/api-ref/flexible-classroom/classroom-rest-api&#x22;,
        label: &#x22;Classroom REST API&#x22;,
      },
    ],
    tone: &#x22;green&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;Chat Android API reference.&#x22;,
    product: &#x22;Chat&#x22;,
    stack: &#x22;Android&#x22;,
    title: &#x22;Android&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/chat-sdk/android/1.x/index.html&#x22;,
        label: &#x22;Chat SDK&#x22;,
      },
    ],
    tone: &#x22;green&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;Chat iOS API reference.&#x22;,
    product: &#x22;Chat&#x22;,
    stack: &#x22;iOS&#x22;,
    title: &#x22;iOS&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/chat-sdk/ios/1.x/index.html&#x22;,
        label: &#x22;Chat SDK&#x22;,
      },
    ],
    tone: &#x22;green&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;Chat Web API reference.&#x22;,
    product: &#x22;Chat&#x22;,
    stack: &#x22;Web&#x22;,
    title: &#x22;Web&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/chat-sdk/web/1.x/index.html&#x22;,
        label: &#x22;Chat SDK&#x22;,
      },
    ],
    tone: &#x22;green&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;Chat Windows C# API reference.&#x22;,
    product: &#x22;Chat&#x22;,
    stack: &#x22;Windows C#&#x22;,
    title: &#x22;Windows C#&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/chat-sdk/windows/1.x/annotated.html&#x22;,
        label: &#x22;1.3.1 (Latest)&#x22;,
      },
    ],
    tone: &#x22;green&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;Chat Unity API reference.&#x22;,
    product: &#x22;Chat&#x22;,
    stack: &#x22;Unity&#x22;,
    title: &#x22;Unity&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/chat-sdk/unity/1.x/annotated.html&#x22;,
        label: &#x22;1.3.1 (Latest)&#x22;,
      },
    ],
    tone: &#x22;green&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;Chat React Native API reference.&#x22;,
    product: &#x22;Chat&#x22;,
    stack: &#x22;React Native&#x22;,
    title: &#x22;React Native&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/chat-sdk/react-native/1.x/index.html&#x22;,
        label: &#x22;1.3.6 (Latest)&#x22;,
      },
    ],
    tone: &#x22;green&#x22;,
  },
  {
    category: &#x22;Hosted SDK reference&#x22;,
    description: &#x22;Chat Flutter API reference.&#x22;,
    product: &#x22;Chat&#x22;,
    stack: &#x22;Flutter&#x22;,
    title: &#x22;Flutter&#x22;,
    links: [
      {
        href: &#x22;https://api-ref.agora.io/en/chat-sdk/flutter/1.x/agora_chat_sdk/index.html&#x22;,
        label: &#x22;1.3.3 (Latest)&#x22;,
      },
      {
        href: &#x22;https://api-ref.agora.io/en/chat-sdk/flutter/1.3.2/agora_chat_sdk/index.html&#x22;,
        label: &#x22;1.3.2&#x22;,
      },
      {
        href: &#x22;https://api-ref.agora.io/en/chat-sdk/flutter/1.3.1/agora_chat_sdk/agora_chat_sdk-library.html&#x22;,
        label: &#x22;1.3.1&#x22;,
      },
    ],
    tone: &#x22;green&#x22;,
  },
  {
    category: &#x22;In-portal&#x22;,
    description: &#x22;Chat RESTful API overview.&#x22;,
    product: &#x22;Chat&#x22;,
    stack: &#x22;RESTful APIs&#x22;,
    title: &#x22;Chat RESTful APIs overview&#x22;,
    links: [
      {
        href: &#x22;/en/api-reference/api-ref/im&#x22;,
        label: &#x22;Chat&#x22;,
      },
    ],
    tone: &#x22;green&#x22;,
  },
  {
    category: &#x22;In-portal&#x22;,
    description: &#x22;Media Gateway RESTful API reference.&#x22;,
    product: &#x22;Media Gateway&#x22;,
    stack: &#x22;RESTful APIs&#x22;,
    title: &#x22;RESTful APIs&#x22;,
    links: [
      {
        href: &#x22;/en/api-reference/api-ref/rtmp-gateway&#x22;,
        label: &#x22;Media Gateway&#x22;,
      },
    ],
    tone: &#x22;purple&#x22;,
  },
  {
    category: &#x22;In-portal&#x22;,
    description: &#x22;Analytics RESTful API reference.&#x22;,
    product: &#x22;Analytics&#x22;,
    stack: &#x22;RESTful APIs&#x22;,
    title: &#x22;RESTful APIs&#x22;,
    links: [
      {
        href: &#x22;/en/api-reference/api-ref/agora-analytics/analytics-rest-api&#x22;,
        label: &#x22;Analytics REST API&#x22;,
      },
    ],
    tone: &#x22;purple&#x22;,
  },
  {
    category: &#x22;In-portal&#x22;,
    description: &#x22;Cloud Recording RESTful API reference.&#x22;,
    product: &#x22;Cloud Recording&#x22;,
    stack: &#x22;RESTful APIs&#x22;,
    title: &#x22;RESTful APIs&#x22;,
    links: [
      {
        href: &#x22;/en/api-reference/api-ref/cloud-recording&#x22;,
        label: &#x22;Cloud Recording&#x22;,
      },
    ],
    tone: &#x22;purple&#x22;,
  },
  {
    category: &#x22;In-portal&#x22;,
    description: &#x22;Cloud Transcoding RESTful API reference.&#x22;,
    product: &#x22;Cloud Transcoding&#x22;,
    stack: &#x22;RESTful APIs&#x22;,
    title: &#x22;RESTful APIs&#x22;,
    links: [
      {
        href: &#x22;/en/api-reference/api-ref/cloud-transcoding&#x22;,
        label: &#x22;Cloud Transcoding&#x22;,
      },
    ],
    tone: &#x22;purple&#x22;,
  },
  {
    category: &#x22;In-portal&#x22;,
    description: &#x22;Real-Time Speech-To-Text RESTful API reference.&#x22;,
    product: &#x22;Real-Time Speech-To-Text&#x22;,
    stack: &#x22;RESTful APIs&#x22;,
    title: &#x22;RESTful APIs&#x22;,
    links: [
      {
        href: &#x22;/en/api-reference/api-ref/speech-to-text&#x22;,
        label: &#x22;7.x (Latest)&#x22;,
      },
    ],
    tone: &#x22;purple&#x22;,
  },
  {
    category: &#x22;In-portal&#x22;,
    description: &#x22;Media Pull RESTful API reference.&#x22;,
    product: &#x22;Media Pull&#x22;,
    stack: &#x22;RESTful APIs&#x22;,
    title: &#x22;RESTful APIs&#x22;,
    links: [
      {
        href: &#x22;/en/api-reference/api-ref/media-pull&#x22;,
        label: &#x22;Media Pull&#x22;,
      },
    ],
    tone: &#x22;purple&#x22;,
  },
  {
    category: &#x22;In-portal&#x22;,
    description: &#x22;Media Push RESTful API reference.&#x22;,
    product: &#x22;Media Push&#x22;,
    stack: &#x22;RESTful APIs&#x22;,
    title: &#x22;RESTful APIs&#x22;,
    links: [
      {
        href: &#x22;/en/api-reference/api-ref/media-push&#x22;,
        label: &#x22;Media Push&#x22;,
      },
    ],
    tone: &#x22;purple&#x22;,
  },
  {
    category: &#x22;In-portal&#x22;,
    description: &#x22;Extensions Marketplace RESTful API reference.&#x22;,
    product: &#x22;Extensions Marketplace&#x22;,
    stack: &#x22;RESTful APIs&#x22;,
    title: &#x22;RESTful APIs&#x22;,
    links: [
      {
        href: &#x22;/en/api-reference/api-ref/extensions-marketplace/provisioning&#x22;,
        label: &#x22;Provisioning API&#x22;,
      },
      {
        href: &#x22;/en/api-reference/api-ref/extensions-marketplace/usage&#x22;,
        label: &#x22;Usage API&#x22;,
      },
    ],
    tone: &#x22;sand&#x22;,
  },
]"
  allSdksLabel="All SDKs"
  productFilterLabel="Product"
  productQueryParam="product"
  searchPlaceholder="Search references by product, platform, or type"
  sdkFilterLabel="SDK"
  sdkQueryParam="sdk"
  showCategoryFilter="false"
  showDescription="false"
  showTags="false"
  stackFilterLabel="Platform"
/>
`;
export let structuredData = {
  contents: [],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const { RecipesCatalog } = props.components || {};
  if (!RecipesCatalog)
    _missingMdxReference("RecipesCatalog", true);
  return _jsx(RecipesCatalog, {
    allCategoriesLabel: "All reference types",
    allProductsLabel: "All products",
    allStacksLabel: "All platforms",
    categoryFilterLabel: "Reference type",
    clearFiltersLabel: "Clear filters",
    emptyMessage: "No references match the current filters.",
    groupByProduct: true,
    productGroups: {
      "Conversational AI": {
        title: "Conversational AI",
        description: "Manage your Conversational AI agents with RESTful APIs.",
        icon: "ai"
      },
      "Realtime Communication": {
        title: "Realtime Communication",
        description: "This product uses the RTC SDK and RTC (Voice Only) SDK.",
        icon: "rtc"
      },
      Signaling: {
        title: "Signaling",
        description: "This product uses the Signaling SDK.",
        icon: "signaling"
      },
      "On-Premise Recording": {
        title: "On-Premise Recording",
        description: "This product uses the On-Premise Recording SDK.",
        icon: "on-premise-recording"
      },
      "Server Gateway": {
        title: "Server Gateway",
        description: "This product uses the Server Gateway SDK.",
        icon: "server-sdk"
      },
      "IoT SDK": {
        title: "IoT SDK",
        description: "",
        icon: "iot"
      },
      "Interactive Whiteboard": {
        title: "Interactive Whiteboard",
        description: "This product uses the Interactive Whiteboard SDK.",
        icon: "whiteboard"
      },
      "Flexible Classroom": {
        title: "Flexible Classroom",
        description: "This product uses the Flexible Classroom SDK.",
        icon: "classroom"
      },
      Chat: {
        title: "Chat",
        description: "This product uses the Chat SDK.",
        icon: "chat"
      },
      "Media Gateway": {
        title: "Media Gateway",
        description: "This product provides RESTful APIs.",
        icon: "rtmp-gateway"
      },
      Analytics: {
        title: "Analytics",
        description: "This product provides RESTful APIs.",
        icon: "analytics"
      },
      "Cloud Recording": {
        title: "Cloud Recording",
        description: "This product provides RESTful APIs.",
        icon: "cloud-recording"
      },
      "Cloud Transcoding": {
        title: "Cloud Transcoding",
        description: "Create, update, and manage your cloud transcoding tasks with RESTful APIs.",
        icon: "transcoding"
      },
      "Real-Time Speech-To-Text": {
        title: "Real-Time Speech-To-Text",
        description: "This product provides RESTful APIs.",
        icon: "transcription"
      },
      "Media Pull": {
        title: "Media Pull",
        description: "This product provides RESTful APIs.",
        icon: "media-pull"
      },
      "Media Push": {
        title: "Media Push",
        description: "This product provides RESTful APIs.",
        icon: "media-push"
      },
      "Extensions Marketplace": {
        title: "Extensions Marketplace",
        description: "This product provides RESTful APIs.",
        icon: "tools"
      }
    },
    items: [{
      category: "In-portal",
      description: "Conversational AI REST API reference.",
      product: "Conversational AI",
      stack: "RESTful APIs",
      title: "RESTful APIs",
      links: [{
        href: "/en/api-reference/api-ref/conversational-ai",
        label: "Conversational AI"
      }],
      tone: "blue"
    }, {
      category: "Hosted SDK reference",
      description: "RTC (Voice Only) SDK for Android API reference with current and previous major-version coverage.",
      product: "Realtime Communication",
      sdk: "RTC (Voice Only) SDK",
      stack: "Android",
      title: "RTC (Voice Only) SDK for Android",
      links: [{
        href: "https://api-ref.agora.io/en/voice-sdk/android/4.x/API/rtc_api_overview.html",
        label: "4.7.0 (Latest)"
      }, {
        href: "https://api-ref.agora.io/en/voice-sdk/android/3.x/index.html",
        label: "3.7.2.1"
      }],
      tone: "blue"
    }, {
      category: "Hosted SDK reference",
      description: "RTC (Voice Only) SDK for iOS API reference with current and previous major-version coverage.",
      product: "Realtime Communication",
      sdk: "RTC (Voice Only) SDK",
      stack: "iOS",
      title: "RTC (Voice Only) SDK for iOS",
      links: [{
        href: "https://api-ref.agora.io/en/voice-sdk/ios/4.x/documentation/agorartckit",
        label: "4.7.0 (Latest)"
      }, {
        href: "https://api-ref.agora.io/en/voice-sdk/ios/3.x/docs/headers/Agora-Objective-C-API-Overview.html",
        label: "3.7.2"
      }],
      tone: "blue"
    }, {
      category: "Hosted SDK reference",
      description: "RTC SDK for ReactJS API reference: components, hooks, and data types.",
      product: "Realtime Communication",
      sdk: "RTC SDK",
      stack: "ReactJS",
      title: "RTC SDK for ReactJS",
      links: [{
        href: "https://api-ref.agora.io/en/video-sdk/reactjs/2.x/index.html",
        label: "2.5.1 (Latest)"
      }],
      tone: "pink"
    }, {
      category: "Hosted SDK reference",
      description: "RTC SDK for Android API reference, including Lite SDK and previous major-version coverage.",
      product: "Realtime Communication",
      sdk: "RTC SDK",
      stack: "Android",
      title: "RTC SDK for Android",
      links: [{
        href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/rtc_api_overview.html",
        label: "4.7.0 (Latest)"
      }, {
        href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/rtc_lite_api.html",
        label: "4.7.0 Lite SDK (Latest)"
      }, {
        href: "https://api-ref.agora.io/en/video-sdk/android/3.x/index.html",
        label: "3.7.2"
      }],
      tone: "sand"
    }, {
      category: "Hosted SDK reference",
      description: "RTC SDK for iOS API reference, including Lite SDK and previous major-version coverage.",
      product: "Realtime Communication",
      sdk: "RTC SDK",
      stack: "iOS",
      title: "RTC SDK for iOS",
      links: [{
        href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit",
        label: "4.7.0 (Latest)"
      }, {
        href: "https://api-ref.agora.io/en/lite-sdk/ios/4.x/documentation/agorartckit",
        label: "4.7.0 Lite SDK (Latest)"
      }, {
        href: "https://api-ref.agora.io/en/video-sdk/ios/3.x/docs/headers/Agora-Objective-C-API-Overview.html",
        label: "3.7.2"
      }],
      tone: "sand"
    }, {
      category: "Hosted SDK reference",
      description: "RTC SDK for macOS API reference with current and previous major-version coverage.",
      product: "Realtime Communication",
      sdk: "RTC SDK",
      stack: "macOS",
      title: "RTC SDK for macOS",
      links: [{
        href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit",
        label: "4.7.0 (Latest)"
      }, {
        href: "https://api-ref.agora.io/en/video-sdk/macos/3.x/docs/headers/Agora-Objective-C-API-Overview.html",
        label: "3.7.2"
      }],
      tone: "sand"
    }, {
      category: "Hosted SDK reference",
      description: "RTC SDK for Web API reference.",
      product: "Realtime Communication",
      sdk: "RTC SDK",
      stack: "Web",
      title: "RTC SDK for Web",
      links: [{
        href: "https://api-ref.agora.io/en/video-sdk/web/4.x/index.html",
        label: "4.24.8 (Latest)"
      }],
      tone: "sand"
    }, {
      category: "Hosted SDK reference",
      description: "RTC SDK for Unity API reference with current and previous major-version coverage.",
      product: "Realtime Communication",
      sdk: "RTC SDK",
      stack: "Unity",
      title: "RTC SDK for Unity",
      links: [{
        href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/rtc_api_overview.html",
        label: "4.6.2 (Latest)"
      }, {
        href: "https://api-ref.agora.io/en/video-sdk/unity/3.x/index.html",
        label: "3.7.1"
      }],
      tone: "sand"
    }, {
      category: "Hosted SDK reference",
      description: "RTC SDK for Electron API reference with current and previous major-version coverage.",
      product: "Realtime Communication",
      sdk: "RTC SDK",
      stack: "Electron",
      title: "RTC SDK for Electron",
      links: [{
        href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/rtc_api_overview.html",
        label: "4.6.2 (Latest)"
      }, {
        href: "https://api-ref.agora.io/en/video-sdk/electron/3.x/index.html",
        label: "3.7.0"
      }],
      tone: "sand"
    }, {
      category: "Hosted SDK reference",
      description: "RTC SDK for Flutter API reference with current and previous major-version coverage.",
      product: "Realtime Communication",
      sdk: "RTC SDK",
      stack: "Flutter",
      title: "RTC SDK for Flutter",
      links: [{
        href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/rtc_api_overview.html",
        label: "6.6.4 (Latest)"
      }, {
        href: "https://api-ref.agora.io/en/video-sdk/flutter/5.x/API/rtc_api_overview.html",
        label: "5.3.1"
      }],
      tone: "sand"
    }, {
      category: "Hosted SDK reference",
      description: "RTC SDK for React Native API reference with current and previous major-version coverage.",
      product: "Realtime Communication",
      sdk: "RTC SDK",
      stack: "React Native",
      title: "RTC SDK for React Native",
      links: [{
        href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/rtc_api_overview.html",
        label: "4.6.4 (Latest)"
      }, {
        href: "https://api-ref.agora.io/en/video-sdk/react-native/3.x/index.html",
        label: "3.7.0"
      }],
      tone: "sand"
    }, {
      category: "Hosted SDK reference",
      description: "RTC SDK for Windows C++ API reference with current and previous major-version coverage.",
      product: "Realtime Communication",
      sdk: "RTC SDK",
      stack: "Windows C++",
      title: "RTC SDK for Windows C++",
      links: [{
        href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/rtc_api_overview.html",
        label: "4.7.0 (Latest)"
      }, {
        href: "https://api-ref.agora.io/en/video-sdk/cpp/3.x/index.html",
        label: "3.7.2"
      }],
      tone: "sand"
    }, {
      category: "Hosted SDK reference",
      description: "RTC SDK for Windows C# API reference.",
      product: "Realtime Communication",
      sdk: "RTC SDK",
      stack: "Windows C#",
      title: "RTC SDK for Windows C#",
      links: [{
        href: "https://api-ref.agora.io/en/video-sdk/windows-csharp/3.x/API/rtc_api_overview.html",
        label: "3.6.2 (Latest)"
      }],
      tone: "sand"
    }, {
      category: "Hosted SDK reference",
      description: "RTC SDK for Unreal Blueprint API reference.",
      product: "Realtime Communication",
      sdk: "RTC SDK",
      stack: "Unreal Blueprint",
      title: "RTC SDK for Unreal Blueprint",
      links: [{
        href: "https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/rtc_api_overview.html",
        label: "4.5.1 (Latest)"
      }],
      tone: "sand"
    }, {
      category: "Hosted SDK reference",
      description: "RTC SDK for Unreal Engine API reference.",
      product: "Realtime Communication",
      sdk: "RTC SDK",
      stack: "Unreal Engine",
      title: "RTC SDK for Unreal Engine",
      links: [{
        href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/rtc_api_overview.html",
        label: "4.5.1 (Latest)"
      }],
      tone: "sand"
    }, {
      category: "In-portal",
      description: "Signaling Android SDK API reference.",
      product: "Signaling",
      stack: "Android",
      title: "Android",
      links: [{
        href: "/en/api-reference/api-ref/signaling/android",
        label: "Migrated reference"
      }],
      tone: "blue"
    }, {
      category: "In-portal",
      description: "Signaling iOS SDK API reference.",
      product: "Signaling",
      stack: "iOS",
      title: "iOS",
      links: [{
        href: "/en/api-reference/api-ref/signaling/ios",
        label: "Migrated reference"
      }],
      tone: "blue"
    }, {
      category: "In-portal",
      description: "Signaling macOS SDK API reference.",
      product: "Signaling",
      stack: "macOS",
      title: "macOS",
      links: [{
        href: "/en/api-reference/api-ref/signaling/macos",
        label: "Migrated reference"
      }],
      tone: "blue"
    }, {
      category: "In-portal",
      description: "Signaling Web SDK API reference.",
      product: "Signaling",
      stack: "Web",
      title: "Web",
      links: [{
        href: "/en/api-reference/api-ref/signaling/web",
        label: "Migrated reference"
      }],
      tone: "blue"
    }, {
      category: "In-portal",
      description: "Signaling Flutter SDK API reference.",
      product: "Signaling",
      stack: "Flutter",
      title: "Flutter",
      links: [{
        href: "/en/api-reference/api-ref/signaling/flutter",
        label: "Migrated reference"
      }],
      tone: "blue"
    }, {
      category: "In-portal",
      description: "Signaling Unity SDK API reference.",
      product: "Signaling",
      stack: "Unity",
      title: "Unity",
      links: [{
        href: "/en/api-reference/api-ref/signaling/unity",
        label: "Migrated reference"
      }],
      tone: "blue"
    }, {
      category: "In-portal",
      description: "Signaling React Native SDK API reference.",
      product: "Signaling",
      stack: "React Native",
      title: "React Native",
      links: [{
        href: "/en/api-reference/api-ref/signaling/react-native",
        label: "Migrated reference"
      }],
      tone: "blue"
    }, {
      category: "In-portal",
      description: "Signaling Windows C++ SDK API reference.",
      product: "Signaling",
      stack: "Windows C++",
      title: "Windows C++",
      links: [{
        href: "/en/api-reference/api-ref/signaling/windows-cpp",
        label: "Migrated reference"
      }],
      tone: "blue"
    }, {
      category: "In-portal",
      description: "Signaling Linux C++ SDK API reference.",
      product: "Signaling",
      stack: "Linux C++",
      title: "Linux C++",
      links: [{
        href: "/en/api-reference/api-ref/signaling/linux-cpp",
        label: "Migrated reference"
      }],
      tone: "blue"
    }, {
      category: "In-portal",
      description: "Signaling Linux Java SDK API reference.",
      product: "Signaling",
      stack: "Linux Java",
      title: "Linux Java",
      links: [{
        href: "/en/api-reference/api-ref/signaling/linux-java",
        label: "Migrated reference"
      }],
      tone: "blue"
    }, {
      category: "In-portal",
      description: "Signaling RESTful API reference.",
      product: "Signaling",
      stack: "RESTful APIs",
      title: "RESTful APIs",
      links: [{
        href: "/en/api-reference/api-ref/signaling",
        label: "Messaging and Events"
      }],
      tone: "blue"
    }, {
      category: "In-portal",
      description: "On-Premise Recording Linux C++ API reference.",
      product: "On-Premise Recording",
      stack: "Linux C++",
      title: "Linux C++",
      links: [{
        href: "/en/api-reference/api-ref/on-premise-recording",
        label: "4.4.151 (Latest)"
      }, {
        href: "https://api-ref.agora.io/en/on-premise-recording-sdk/linux-cpp/3.x/index.html",
        label: "3.0.6"
      }],
      tone: "purple"
    }, {
      category: "In-portal",
      description: "On-Premise Recording Linux Java API reference.",
      product: "On-Premise Recording",
      stack: "Linux Java",
      title: "Linux Java",
      links: [{
        href: "/en/api-reference/api-ref/on-premise-recording",
        label: "4.4.151 (Latest)"
      }, {
        href: "https://api-ref.agora.io/en/on-premise-recording-sdk/linux-java/3.x/index.html",
        label: "3.0.6"
      }],
      tone: "purple"
    }, {
      category: "Hosted SDK reference",
      description: "Server Gateway Linux C++ API reference.",
      product: "Server Gateway",
      stack: "Linux C++",
      title: "Linux C++",
      links: [{
        href: "https://api-ref.agora.io/en/server-gateway-sdk/linux-cpp/4.x/index.html",
        label: "4.4.32 (Latest)"
      }, {
        href: "https://api-ref.agora.io/en/server-gateway-sdk/linux-cpp/3.x/index.html",
        label: "3.8.202.20"
      }],
      tone: "green"
    }, {
      category: "Hosted SDK reference",
      description: "Server Gateway Linux Java API reference.",
      product: "Server Gateway",
      stack: "Linux Java",
      title: "Linux Java",
      links: [{
        href: "https://api-ref.agora.io/en/server-gateway-sdk/linux-java/4.x/index.html",
        label: "4.4.30 (Latest)"
      }, {
        href: "https://api-ref.agora.io/en/server-gateway-sdk/linux-java/3.x/index.html",
        label: "3.7.200.21"
      }],
      tone: "green"
    }, {
      category: "Hosted SDK reference",
      description: "IoT SDK Android API reference.",
      product: "IoT SDK",
      stack: "Android",
      title: "Android",
      links: [{
        href: "https://api-ref.agora.io/en/iot-sdk/android/1.x/index.html",
        label: "1.8 (Latest)"
      }],
      tone: "sand"
    }, {
      category: "Hosted SDK reference",
      description: "IoT SDK Linux C API reference.",
      product: "IoT SDK",
      stack: "Linux C",
      title: "Linux C",
      links: [{
        href: "https://api-ref.agora.io/en/iot-sdk/linux/1.x/index.html",
        label: "1.9.7 (Latest)"
      }],
      tone: "sand"
    }, {
      category: "Hosted SDK reference",
      description: "Interactive Whiteboard Android API reference.",
      product: "Interactive Whiteboard",
      stack: "Android",
      title: "Android",
      links: [{
        href: "https://api-ref.agora.io/en/interactive-whiteboard-sdk/android/2.x/index.html",
        label: "Whiteboard SDK"
      }],
      tone: "green"
    }, {
      category: "Hosted SDK reference",
      description: "Interactive Whiteboard iOS API reference.",
      product: "Interactive Whiteboard",
      stack: "iOS",
      title: "iOS",
      links: [{
        href: "https://api-ref.agora.io/en/interactive-whiteboard-sdk/ios/2.x/docs/headers/Agora-Interactive-Whiteboard-Objective-C-Overview.html",
        label: "Whiteboard SDK"
      }],
      tone: "green"
    }, {
      category: "Hosted SDK reference",
      description: "Interactive Whiteboard Web API reference.",
      product: "Interactive Whiteboard",
      stack: "Web",
      title: "Web",
      links: [{
        href: "https://api-ref.agora.io/en/interactive-whiteboard-sdk/web/2.x/index.html",
        label: "Whiteboard SDK"
      }],
      tone: "green"
    }, {
      category: "In-portal",
      description: "Interactive Whiteboard RESTful API reference.",
      product: "Interactive Whiteboard",
      stack: "RESTful APIs",
      title: "RESTful APIs",
      links: [{
        href: "/en/api-reference/api-ref/whiteboard",
        label: "Latest"
      }],
      tone: "green"
    }, {
      category: "In-portal",
      description: "Fastboard SDK API reference for Android, iOS, and Web.",
      product: "Interactive Whiteboard",
      stack: "Fastboard SDK",
      title: "Fastboard SDK",
      links: [{
        href: "/en/api-reference/api-ref/uikit-sdk",
        label: "Fastboard API"
      }],
      tone: "green"
    }, {
      category: "Hosted SDK reference",
      description: "Flexible Classroom Android API reference.",
      product: "Flexible Classroom",
      stack: "Android",
      title: "Android",
      links: [{
        href: "https://api-ref.agora.io/en/flexible-classroom-sdk/android/2.x/API/edu_context_api_overview.html",
        label: "Edu Context"
      }, {
        href: "/en/api-reference/api-ref/flexible-classroom/classroom-sdk",
        label: "Classroom SDK"
      }, {
        href: "/en/api-reference/api-ref/flexible-classroom/proctor-sdk",
        label: "Proctor SDK"
      }],
      tone: "green"
    }, {
      category: "Hosted SDK reference",
      description: "Flexible Classroom iOS API reference.",
      product: "Flexible Classroom",
      stack: "iOS",
      title: "iOS",
      links: [{
        href: "https://api-ref.agora.io/en/flexible-classroom-sdk/ios/2.x/API/edu_context_api_overview.html",
        label: "Edu Context"
      }, {
        href: "/en/api-reference/api-ref/flexible-classroom/classroom-sdk",
        label: "Classroom SDK"
      }, {
        href: "/en/api-reference/api-ref/flexible-classroom/proctor-sdk",
        label: "Proctor SDK"
      }],
      tone: "green"
    }, {
      category: "Hosted SDK reference",
      description: "Flexible Classroom Web API reference.",
      product: "Flexible Classroom",
      stack: "Web",
      title: "Web",
      links: [{
        href: "https://api-ref.agora.io/en/flexible-classroom-sdk/web/2.x/index.html",
        label: "Edu Store"
      }, {
        href: "/en/api-reference/api-ref/flexible-classroom/classroom-sdk",
        label: "Classroom SDK"
      }, {
        href: "/en/api-reference/api-ref/flexible-classroom/ui-scene",
        label: "UI Scene SDK"
      }, {
        href: "/en/api-reference/api-ref/flexible-classroom/proctor-sdk",
        label: "Proctor SDK"
      }],
      tone: "green"
    }, {
      category: "Hosted SDK reference",
      description: "Flexible Classroom Electron API reference.",
      product: "Flexible Classroom",
      stack: "Electron",
      title: "Electron",
      links: [{
        href: "https://api-ref.agora.io/en/flexible-classroom-sdk/electron/2.x/index.html",
        label: "Edu Store"
      }, {
        href: "/en/api-reference/api-ref/flexible-classroom/classroom-sdk",
        label: "Classroom SDK"
      }, {
        href: "/en/api-reference/api-ref/flexible-classroom/proctor-sdk",
        label: "Proctor SDK"
      }],
      tone: "green"
    }, {
      category: "Hosted SDK reference",
      description: "Flexible Classroom RESTful API reference.",
      product: "Flexible Classroom",
      stack: "RESTful APIs",
      title: "RESTful APIs",
      links: [{
        href: "/en/api-reference/api-ref/flexible-classroom/classroom-rest-api",
        label: "Classroom REST API"
      }],
      tone: "green"
    }, {
      category: "Hosted SDK reference",
      description: "Chat Android API reference.",
      product: "Chat",
      stack: "Android",
      title: "Android",
      links: [{
        href: "https://api-ref.agora.io/en/chat-sdk/android/1.x/index.html",
        label: "Chat SDK"
      }],
      tone: "green"
    }, {
      category: "Hosted SDK reference",
      description: "Chat iOS API reference.",
      product: "Chat",
      stack: "iOS",
      title: "iOS",
      links: [{
        href: "https://api-ref.agora.io/en/chat-sdk/ios/1.x/index.html",
        label: "Chat SDK"
      }],
      tone: "green"
    }, {
      category: "Hosted SDK reference",
      description: "Chat Web API reference.",
      product: "Chat",
      stack: "Web",
      title: "Web",
      links: [{
        href: "https://api-ref.agora.io/en/chat-sdk/web/1.x/index.html",
        label: "Chat SDK"
      }],
      tone: "green"
    }, {
      category: "Hosted SDK reference",
      description: "Chat Windows C# API reference.",
      product: "Chat",
      stack: "Windows C#",
      title: "Windows C#",
      links: [{
        href: "https://api-ref.agora.io/en/chat-sdk/windows/1.x/annotated.html",
        label: "1.3.1 (Latest)"
      }],
      tone: "green"
    }, {
      category: "Hosted SDK reference",
      description: "Chat Unity API reference.",
      product: "Chat",
      stack: "Unity",
      title: "Unity",
      links: [{
        href: "https://api-ref.agora.io/en/chat-sdk/unity/1.x/annotated.html",
        label: "1.3.1 (Latest)"
      }],
      tone: "green"
    }, {
      category: "Hosted SDK reference",
      description: "Chat React Native API reference.",
      product: "Chat",
      stack: "React Native",
      title: "React Native",
      links: [{
        href: "https://api-ref.agora.io/en/chat-sdk/react-native/1.x/index.html",
        label: "1.3.6 (Latest)"
      }],
      tone: "green"
    }, {
      category: "Hosted SDK reference",
      description: "Chat Flutter API reference.",
      product: "Chat",
      stack: "Flutter",
      title: "Flutter",
      links: [{
        href: "https://api-ref.agora.io/en/chat-sdk/flutter/1.x/agora_chat_sdk/index.html",
        label: "1.3.3 (Latest)"
      }, {
        href: "https://api-ref.agora.io/en/chat-sdk/flutter/1.3.2/agora_chat_sdk/index.html",
        label: "1.3.2"
      }, {
        href: "https://api-ref.agora.io/en/chat-sdk/flutter/1.3.1/agora_chat_sdk/agora_chat_sdk-library.html",
        label: "1.3.1"
      }],
      tone: "green"
    }, {
      category: "In-portal",
      description: "Chat RESTful API overview.",
      product: "Chat",
      stack: "RESTful APIs",
      title: "Chat RESTful APIs overview",
      links: [{
        href: "/en/api-reference/api-ref/im",
        label: "Chat"
      }],
      tone: "green"
    }, {
      category: "In-portal",
      description: "Media Gateway RESTful API reference.",
      product: "Media Gateway",
      stack: "RESTful APIs",
      title: "RESTful APIs",
      links: [{
        href: "/en/api-reference/api-ref/rtmp-gateway",
        label: "Media Gateway"
      }],
      tone: "purple"
    }, {
      category: "In-portal",
      description: "Analytics RESTful API reference.",
      product: "Analytics",
      stack: "RESTful APIs",
      title: "RESTful APIs",
      links: [{
        href: "/en/api-reference/api-ref/agora-analytics/analytics-rest-api",
        label: "Analytics REST API"
      }],
      tone: "purple"
    }, {
      category: "In-portal",
      description: "Cloud Recording RESTful API reference.",
      product: "Cloud Recording",
      stack: "RESTful APIs",
      title: "RESTful APIs",
      links: [{
        href: "/en/api-reference/api-ref/cloud-recording",
        label: "Cloud Recording"
      }],
      tone: "purple"
    }, {
      category: "In-portal",
      description: "Cloud Transcoding RESTful API reference.",
      product: "Cloud Transcoding",
      stack: "RESTful APIs",
      title: "RESTful APIs",
      links: [{
        href: "/en/api-reference/api-ref/cloud-transcoding",
        label: "Cloud Transcoding"
      }],
      tone: "purple"
    }, {
      category: "In-portal",
      description: "Real-Time Speech-To-Text RESTful API reference.",
      product: "Real-Time Speech-To-Text",
      stack: "RESTful APIs",
      title: "RESTful APIs",
      links: [{
        href: "/en/api-reference/api-ref/speech-to-text",
        label: "7.x (Latest)"
      }],
      tone: "purple"
    }, {
      category: "In-portal",
      description: "Media Pull RESTful API reference.",
      product: "Media Pull",
      stack: "RESTful APIs",
      title: "RESTful APIs",
      links: [{
        href: "/en/api-reference/api-ref/media-pull",
        label: "Media Pull"
      }],
      tone: "purple"
    }, {
      category: "In-portal",
      description: "Media Push RESTful API reference.",
      product: "Media Push",
      stack: "RESTful APIs",
      title: "RESTful APIs",
      links: [{
        href: "/en/api-reference/api-ref/media-push",
        label: "Media Push"
      }],
      tone: "purple"
    }, {
      category: "In-portal",
      description: "Extensions Marketplace RESTful API reference.",
      product: "Extensions Marketplace",
      stack: "RESTful APIs",
      title: "RESTful APIs",
      links: [{
        href: "/en/api-reference/api-ref/extensions-marketplace/provisioning",
        label: "Provisioning API"
      }, {
        href: "/en/api-reference/api-ref/extensions-marketplace/usage",
        label: "Usage API"
      }],
      tone: "sand"
    }],
    allSdksLabel: "All SDKs",
    productFilterLabel: "Product",
    productQueryParam: "product",
    searchPlaceholder: "Search references by product, platform, or type",
    sdkFilterLabel: "SDK",
    sdkQueryParam: "sdk",
    showCategoryFilter: false,
    showDescription: false,
    showTags: false,
    stackFilterLabel: "Platform"
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
