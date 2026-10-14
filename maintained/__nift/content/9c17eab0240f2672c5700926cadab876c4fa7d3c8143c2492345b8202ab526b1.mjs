import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Voice Activity Detection (Beta)",
  description: "Integrate the Voice Activity Detection (VAD) extension to detect the probability of human voice and background music in audio."
};
export let _markdown = `

<CalloutContainer type="info">
  <CalloutDescription>
    This feature is supported only on Web.
  </CalloutDescription>
</CalloutContainer>

The Voice Activity Detection (VAD) plugin analyzes audio streams in real-time to detect the probability of human voice and background music. This enables you to implement features like automatic muting during silence, smart audio recording, noise suppression, and adaptive audio processing. The extension is compatible with Web SDK v4.15.0 and above.

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;web&#x22;]" showTabs="false">
  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    ## Understand the tech [#understand-the-tech]

    The Agora Web SDK processes media through the following pipeline:

    ![VAD Process](https://assets-docs.agora.io/images/extensions-marketplace/vad-flow.svg)

    The VAD plugin operates during the preprocessing stage, analyzing audio data in real-time to detect voice activity and background music.

    ## Prerequisites [#prerequisites]

    Before you begin, make sure:

    * Your project integrates the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) using Web SDK v4.15.0 or later.
    * You are using a supported browser:
      * **Desktop**: Latest Chrome (recommended), Edge, or Firefox
      * **Safari**: 14.1+ (supported but not recommended due to performance issues)
    * Your system meets performance requirements:
      * **Single plugin**: Standard hardware is sufficient
      * **Multiple plugins**: Use an Intel Core i5 (4-core) or equivalent for best performance
      * **High system load**: Running multiple plugins with heavy CPU usage may cause audio/video to freeze

    ## Implement the logic [#implement-the-logic]

    This section shows you how to integrate and use the VAD extension in your project.

    Follow these steps to install, configure, and use the VAD plugin in your project:

    1. Install the [VAD plugin](https://www.npmjs.com/package/agora-extension-vad) from npm.

       Run the following command to install the VAD plugin:

       \`\`\`shell
       npm install agora-extension-vad
       \`\`\`

       Import the VAD module in your JavaScript or TypeScript file:

       \`\`\`ts
       import { VADExtension } from "agora-extension-vad";
       \`\`\`

    2. Deploy Wasm files.

       The VAD plugin requires WebAssembly files to function. Make these files accessible to your web application:

       1. Copy the Wasm files from \`node_modules/agora-extension-vad/wasm/\` to your application's public assets folder, such as \`public/wasm/\` or \`static/wasm/\`. When you create the \`VADExtension\` object, specify this path so the plugin can load these files.

          Sample file structure:

          \`\`\`text
          your-project/
          ├── public/
          │  └── wasm/      // Copy Wasm files here
          │    ├── file1.wasm
          │    └── file2.wasm
          └── src/
            └── app.js
          \`\`\`

          <CalloutContainer type="info">
            <CalloutDescription>
              * **HTTPS required**: Serve Wasm files over HTTPS in production.
              * **CORS configuration**: If you host Wasm files on a different domain than your app, enable CORS for that domain.
              * **Same-origin recommended**: For simplicity, host Wasm files on the same domain as your application.
            </CalloutDescription>
          </CalloutContainer>

       2. Configure Content Security Policy (if applicable).

          If your application uses CSP headers, add the following permissions:

          * For Chrome 97+, Edge 97+, and modern browsers:

            \`\`\`html
            <meta http-equiv="Content-Security-Policy"
               content="script-src 'self' 'wasm-unsafe-eval' blob:">
            \`\`\`

          * For older browsers (Chrome versions earlier than 97, Edge versions earlier than 97):

            \`\`\`html
            <meta http-equiv="Content-Security-Policy"
               content="script-src 'self' 'unsafe-eval' blob:">
            \`\`\`

    3. Register the plugin.

       Call the <Link to="https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#registerextensions">\`AgoraRTC.registerExtensions\`</Link> method and pass the created \`VADExtension\` instance to register the VAD plugin. You can also listen for events when the Wasm file fails to load.

       <CalloutContainer type="warning">
         <CalloutDescription>
           Agora recommends that you create only one instance of \`VADExtension\`.
         </CalloutDescription>
       </CalloutContainer>

       \`\`\`ts
       import AgoraRTC from "agora-rtc-sdk-ng";
       import { VADExtension } from "agora-extension-vad";

       // Create the VADExtension instance with the public path where the Wasm files are located
       // Don't include a trailing slash in the path
       const extension = new VADExtension({ assetsPath: "./wasm" });

       // Check compatibility
       if (!extension.checkCompatibility()) {
        console.warn("VAD plugin is not supported");
        return;
       }

       // Listen for Wasm file loading failures
       extension.onloaderror = (error) => {
        // Handle VAD loading errors
        console.error("VAD plugin failed to load:", error);
       };

       // Register the plugin
       AgoraRTC.registerExtensions([extension]);
       \`\`\`

    4. Enable the plugin.

       To enable the VAD plugin:

       1. Call the \`createProcessor\` method to create an instance of \`IVADProcessor\`. You can set the plugin to be enabled or disabled by default. If you don't specify a state, the plugin uses the last known state.

          \`\`\`ts
          // Create an IVADProcessor instance
          const processor = extension.createProcessor();

          // Enable the plugin by default
          // await processor.enable();

          // Disable the plugin by default
          // await processor.disable();

          // Optional: Listen for processor overload events
          processor.on("overload", async () => {
           console.log("Processor overload detected");
           // Choose to disable the plugin
           // await processor.disable();
           // Or continue processing audio despite the overload
          });
          \`\`\`

       2. Inject the plugin into the audio processing pipeline by calling the SDK's <Link to="https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/imicrophoneaudiotrack.html#pipe">\`pipe\`</Link> method and specify the \`processorDestination\` property.

          \`\`\`ts
          // Create an audio track
          const audioTrack = await AgoraRTC.createMicrophoneAudioTrack();
          // Inject the plugin into the audio processing pipeline
          audioTrack.pipe(processor).pipe(audioTrack.processorDestination);
          \`\`\`

       3. If the plugin is not enabled by default, call the \`enable\` method to enable the plugin.

          \`\`\`ts
          await processor.enable();
          \`\`\`

    5. Get detection results.

       After you enable the plugin, listen to the \`result\` event to get the detection results and process them as needed.

       \`\`\`ts
       // Listen to the detection results of the VAD plugin
       processor.on("result", handleResult);

       function handleResult(result) {
        // Output voiceProb, which indicates the probability that someone is speaking
        console.info("voiceProb: ", result.voiceProb);
        // Output musicProb, which indicates the probability that music is playing
        console.info("musicProb: ", result.musicProb);
       }
       \`\`\`

       <CalloutContainer type="info">
         <CalloutDescription>
           \`voiceProb\` and \`musicProb\` are floating-point numbers from 0 to 1 that represent the probability that someone is speaking and that music is playing.
         </CalloutDescription>
       </CalloutContainer>

    6. Disable the plugin.

       When you no longer need the VAD plugin, call the \`disable\` method to disable the plugin.

       \`\`\`ts
       await processor.disable();
       \`\`\`

    ## Reference [#reference]

    This section contains content that completes the information in this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference]

    This section provides the API reference for the Voice Activity Detection extension.

    #### \`IVADExtension\` [#ivadextension]

    ##### \`checkCompatibility\` [#checkcompatibility]

    Checks whether the current browser supports the VAD plugin. The result returned by this method is for reference only.

    \`\`\`typescript
    checkCompatibility(): boolean;
    \`\`\`

    ##### \`createProcessor\` [#createprocessor]

    Creates an \`IVADProcessor\` instance.

    \`\`\`typescript
    createProcessor(): IVADProcessor;
    \`\`\`

    ##### \`onloaderror\` [#onloaderror]

    Callback for Wasm dependency file loading failures.

    \`\`\`typescript
    onloaderror?: (error: Error) => void;
    \`\`\`

    #### \`IVADProcessor\` [#ivadprocessor]

    ##### \`kind\` [#kind]

    Processor type. Returns either \`video\` or \`audio\`.

    \`\`\`typescript
    get kind(): 'video' | 'audio';
    \`\`\`

    ##### \`enabled\` [#enabled]

    Indicates whether the plugin is enabled.

    \`\`\`typescript
    get enabled(): boolean;
    \`\`\`

    ##### \`enable\` [#enable]

    Enables the VAD function.

    \`\`\`typescript
    enable(): void | Promise<void>;
    \`\`\`

    ##### \`disable\` [#disable]

    Disables the VAD function.

    \`\`\`typescript
    disable(): void | Promise<void>;
    \`\`\`

    ##### \`on\` [#on]

    Listens for processor overload events.

    \`\`\`typescript
    on("overload", callback: () => void): void;
    \`\`\`

    #### Type definitions [#type-definitions]

    ##### \`VADExtensionOptions\` [#vadextensionoptions]

    \`\`\`typescript
    export interface VADExtensionOptions {
      assetsPath: string;
    }
    \`\`\`

    **Parameters:**

    * \`assetsPath\`: The URL path of the Wasm files that the VAD plugin depends on. Don't end the path with a slash, for example \`"./external"\`.

    The plugin assembles the full path to the Wasm files from the \`assetsPath\`. If the path is incorrect and the Wasm files fail to load, you receive an \`onloaderror\` callback.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This feature is supported only on Web."
  }, {
    heading: undefined,
    content: "The Voice Activity Detection (VAD) plugin analyzes audio streams in real-time to detect the probability of human voice and background music. This enables you to implement features like automatic muting during silence, smart audio recording, noise suppression, and adaptive audio processing. The extension is compatible with Web SDK v4.15.0 and above."
  }, {
    heading: "understand-the-tech",
    content: "The Agora Web SDK processes media through the following pipeline:"
  }, {
    heading: "understand-the-tech",
    content: "The VAD plugin operates during the preprocessing stage, analyzing audio data in real-time to detect voice activity and background music."
  }, {
    heading: "prerequisites",
    content: "Before you begin, make sure:"
  }, {
    heading: "prerequisites",
    content: "Your project integrates the SDK quickstart using Web SDK v4.15.0 or later."
  }, {
    heading: "prerequisites",
    content: "You are using a supported browser:"
  }, {
    heading: "prerequisites",
    content: "**Desktop**: Latest Chrome (recommended), Edge, or Firefox"
  }, {
    heading: "prerequisites",
    content: "**Safari**: 14.1+ (supported but not recommended due to performance issues)"
  }, {
    heading: "prerequisites",
    content: "Your system meets performance requirements:"
  }, {
    heading: "prerequisites",
    content: "**Single plugin**: Standard hardware is sufficient"
  }, {
    heading: "prerequisites",
    content: "**Multiple plugins**: Use an Intel Core i5 (4-core) or equivalent for best performance"
  }, {
    heading: "prerequisites",
    content: "**High system load**: Running multiple plugins with heavy CPU usage may cause audio/video to freeze"
  }, {
    heading: "implement-the-logic",
    content: "This section shows you how to integrate and use the VAD extension in your project."
  }, {
    heading: "implement-the-logic",
    content: "Follow these steps to install, configure, and use the VAD plugin in your project:"
  }, {
    heading: "implement-the-logic",
    content: "Install the VAD plugin from npm."
  }, {
    heading: "implement-the-logic",
    content: "Run the following command to install the VAD plugin:"
  }, {
    heading: "implement-the-logic",
    content: "Import the VAD module in your JavaScript or TypeScript file:"
  }, {
    heading: "implement-the-logic",
    content: "Deploy Wasm files."
  }, {
    heading: "implement-the-logic",
    content: "The VAD plugin requires WebAssembly files to function. Make these files accessible to your web application:"
  }, {
    heading: "implement-the-logic",
    content: "Copy the Wasm files from `node_modules/agora-extension-vad/wasm/` to your application's public assets folder, such as `public/wasm/` or `static/wasm/`. When you create the `VADExtension` object, specify this path so the plugin can load these files."
  }, {
    heading: "implement-the-logic",
    content: "Sample file structure:"
  }, {
    heading: "implement-the-logic",
    content: "**HTTPS required**: Serve Wasm files over HTTPS in production."
  }, {
    heading: "implement-the-logic",
    content: "**CORS configuration**: If you host Wasm files on a different domain than your app, enable CORS for that domain."
  }, {
    heading: "implement-the-logic",
    content: "**Same-origin recommended**: For simplicity, host Wasm files on the same domain as your application."
  }, {
    heading: "implement-the-logic",
    content: "Configure Content Security Policy (if applicable)."
  }, {
    heading: "implement-the-logic",
    content: "If your application uses CSP headers, add the following permissions:"
  }, {
    heading: "implement-the-logic",
    content: "For Chrome 97+, Edge 97+, and modern browsers:"
  }, {
    heading: "implement-the-logic",
    content: "For older browsers (Chrome versions earlier than 97, Edge versions earlier than 97):"
  }, {
    heading: "implement-the-logic",
    content: "Register the plugin."
  }, {
    heading: "implement-the-logic",
    content: "Call the `AgoraRTC.registerExtensions` method and pass the created `VADExtension` instance to register the VAD plugin. You can also listen for events when the Wasm file fails to load."
  }, {
    heading: "implement-the-logic",
    content: "Agora recommends that you create only one instance of `VADExtension`."
  }, {
    heading: "implement-the-logic",
    content: "Enable the plugin."
  }, {
    heading: "implement-the-logic",
    content: "To enable the VAD plugin:"
  }, {
    heading: "implement-the-logic",
    content: "Call the `createProcessor` method to create an instance of `IVADProcessor`. You can set the plugin to be enabled or disabled by default. If you don't specify a state, the plugin uses the last known state."
  }, {
    heading: "implement-the-logic",
    content: "Inject the plugin into the audio processing pipeline by calling the SDK's `pipe` method and specify the `processorDestination` property."
  }, {
    heading: "implement-the-logic",
    content: "If the plugin is not enabled by default, call the `enable` method to enable the plugin."
  }, {
    heading: "implement-the-logic",
    content: "Get detection results."
  }, {
    heading: "implement-the-logic",
    content: "After you enable the plugin, listen to the `result` event to get the detection results and process them as needed."
  }, {
    heading: "implement-the-logic",
    content: "`voiceProb` and `musicProb` are floating-point numbers from 0 to 1 that represent the probability that someone is speaking and that music is playing."
  }, {
    heading: "implement-the-logic",
    content: "Disable the plugin."
  }, {
    heading: "implement-the-logic",
    content: "When you no longer need the VAD plugin, call the `disable` method to disable the plugin."
  }, {
    heading: "reference",
    content: "This section contains content that completes the information in this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference",
    content: "This section provides the API reference for the Voice Activity Detection extension."
  }, {
    heading: "checkcompatibility",
    content: "Checks whether the current browser supports the VAD plugin. The result returned by this method is for reference only."
  }, {
    heading: "createprocessor",
    content: "Creates an `IVADProcessor` instance."
  }, {
    heading: "onloaderror",
    content: "Callback for Wasm dependency file loading failures."
  }, {
    heading: "kind",
    content: "Processor type. Returns either `video` or `audio`."
  }, {
    heading: "enabled",
    content: "Indicates whether the plugin is enabled."
  }, {
    heading: "enable",
    content: "Enables the VAD function."
  }, {
    heading: "disable",
    content: "Disables the VAD function."
  }, {
    heading: "on",
    content: "Listens for processor overload events."
  }, {
    heading: "vadextensionoptions",
    content: "**Parameters:**"
  }, {
    heading: "vadextensionoptions",
    content: '`assetsPath`: The URL path of the Wasm files that the VAD plugin depends on. Don\'t end the path with a slash, for example `"./external"`.'
  }, {
    heading: "vadextensionoptions",
    content: "The plugin assembles the full path to the Wasm files from the `assetsPath`. If the path is incorrect and the Wasm files fail to load, you receive an `onloaderror` callback."
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implement-the-logic",
    content: "Implement the logic"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "api-reference",
    content: "API reference"
  }, {
    id: "ivadextension",
    content: "`IVADExtension`"
  }, {
    id: "checkcompatibility",
    content: "`checkCompatibility`"
  }, {
    id: "createprocessor",
    content: "`createProcessor`"
  }, {
    id: "onloaderror",
    content: "`onloaderror`"
  }, {
    id: "ivadprocessor",
    content: "`IVADProcessor`"
  }, {
    id: "kind",
    content: "`kind`"
  }, {
    id: "enabled",
    content: "`enabled`"
  }, {
    id: "enable",
    content: "`enable`"
  }, {
    id: "disable",
    content: "`disable`"
  }, {
    id: "on",
    content: "`on`"
  }, {
    id: "type-definitions",
    content: "Type definitions"
  }, {
    id: "vadextensionoptions",
    content: "`VADExtensionOptions`"
  }]
};
export let toc = [{
  depth: 2,
  url: "#understand-the-tech",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implement-the-logic",
  title: _jsx(_Fragment, {
    children: "Implement the logic"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-reference",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 4,
  url: "#ivadextension",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "IVADExtension"
    })
  })
}, {
  depth: 5,
  url: "#checkcompatibility",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "checkCompatibility"
    })
  })
}, {
  depth: 5,
  url: "#createprocessor",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "createProcessor"
    })
  })
}, {
  depth: 5,
  url: "#onloaderror",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "onloaderror"
    })
  })
}, {
  depth: 4,
  url: "#ivadprocessor",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "IVADProcessor"
    })
  })
}, {
  depth: 5,
  url: "#kind",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "kind"
    })
  })
}, {
  depth: 5,
  url: "#enabled",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enabled"
    })
  })
}, {
  depth: 5,
  url: "#enable",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enable"
    })
  })
}, {
  depth: 5,
  url: "#disable",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "disable"
    })
  })
}, {
  depth: 5,
  url: "#on",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "on"
    })
  })
}, {
  depth: 4,
  url: "#type-definitions",
  title: _jsx(_Fragment, {
    children: "Type definitions"
  })
}, {
  depth: 5,
  url: "#vadextensionoptions",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "VADExtensionOptions"
    })
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, Link, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!Link)
    _missingMdxReference("Link", true);
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_Fragment, {
    children: [_jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "This feature is supported only on Web."
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "The Voice Activity Detection (VAD) plugin analyzes audio streams in real-time to detect the probability of human voice and background music. This enables you to implement features like automatic muting during silence, smart audio recording, noise suppression, and adaptive audio processing. The extension is compatible with Web SDK v4.15.0 and above."
    }), `
`, _jsx(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["web"]',
      showTabs: "false",
      children: _jsxs(_PlatformPanel, {
        platform: "web",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "web"
        }), _jsx(_components.h2, {
          id: "understand-the-tech",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "The Agora Web SDK processes media through the following pipeline:"
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/extensions-marketplace/vad-flow.svg",
            alt: "VAD Process"
          })
        }), _jsx(_components.p, {
          children: "The VAD plugin operates during the preprocessing stage, analyzing audio data in real-time to detect voice activity and background music."
        }), _jsx(_components.h2, {
          id: "prerequisites",
          children: "Prerequisites"
        }), _jsx(_components.p, {
          children: "Before you begin, make sure:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Your project integrates the ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/get-started-sdk",
              children: "SDK quickstart"
            }), " using Web SDK v4.15.0 or later."]
          }), `
`, _jsxs(_components.li, {
            children: ["You are using a supported browser:", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Desktop"
                }), ": Latest Chrome (recommended), Edge, or Firefox"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Safari"
                }), ": 14.1+ (supported but not recommended due to performance issues)"]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: ["Your system meets performance requirements:", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Single plugin"
                }), ": Standard hardware is sufficient"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Multiple plugins"
                }), ": Use an Intel Core i5 (4-core) or equivalent for best performance"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "High system load"
                }), ": Running multiple plugins with heavy CPU usage may cause audio/video to freeze"]
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "implement-the-logic",
          children: "Implement the logic"
        }), _jsx(_components.p, {
          children: "This section shows you how to integrate and use the VAD extension in your project."
        }), _jsx(_components.p, {
          children: "Follow these steps to install, configure, and use the VAD plugin in your project:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Install the ", _jsx(_components.a, {
                href: "https://www.npmjs.com/package/agora-extension-vad",
                children: "VAD plugin"
              }), " from npm."]
            }), `
`, _jsx(_components.p, {
              children: "Run the following command to install the VAD plugin:"
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
                children: _jsx(_components.code, {
                  children: _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "npm"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " install"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " agora-extension-vad"
                    })]
                  })
                })
              })
            }), `
`, _jsx(_components.p, {
              children: "Import the VAD module in your JavaScript or TypeScript file:"
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
                children: _jsx(_components.code, {
                  children: _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "import"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " { VADExtension } "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "from"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ' "agora-extension-vad"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  })
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Deploy Wasm files."
            }), `
`, _jsx(_components.p, {
              children: "The VAD plugin requires WebAssembly files to function. Make these files accessible to your web application:"
            }), `
`, _jsxs(_components.ol, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Copy the Wasm files from ", _jsx(_components.code, {
                    children: "node_modules/agora-extension-vad/wasm/"
                  }), " to your application's public assets folder, such as ", _jsx(_components.code, {
                    children: "public/wasm/"
                  }), " or ", _jsx(_components.code, {
                    children: "static/wasm/"
                  }), ". When you create the ", _jsx(_components.code, {
                    children: "VADExtension"
                  }), " object, specify this path so the plugin can load these files."]
                }), `
`, _jsx(_components.p, {
                  children: "Sample file structure:"
                }), `
`, _jsx(_Fragment, {
                  children: _jsx(_components.pre, {
                    className: "shiki shiki-themes github-light github-dark",
                    style: {
                      "--shiki-light": "#24292e",
                      "--shiki-dark": "#e1e4e8",
                      "--shiki-light-bg": "#fff",
                      "--shiki-dark-bg": "#24292e"
                    },
                    tabIndex: "0",
                    icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
                    children: _jsxs(_components.code, {
                      children: [_jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "your-project/"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "├──"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: " public/"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "│"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: "  └──"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: " wasm/"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: "      //"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: " Copy"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: " Wasm"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: " files"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: " here"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "│"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: "    ├──"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: " file1.wasm"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "│"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: "    └──"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: " file2.wasm"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "└──"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: " src/"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "  └──"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: " app.js"
                        })]
                      })]
                    })
                  })
                }), `
`, _jsx(CalloutContainer, {
                  type: "info",
                  children: _jsx(CalloutDescription, {
                    children: _jsxs(_components.ul, {
                      children: [`
`, _jsxs(_components.li, {
                        children: [_jsx(_components.strong, {
                          children: "HTTPS required"
                        }), ": Serve Wasm files over HTTPS in production."]
                      }), `
`, _jsxs(_components.li, {
                        children: [_jsx(_components.strong, {
                          children: "CORS configuration"
                        }), ": If you host Wasm files on a different domain than your app, enable CORS for that domain."]
                      }), `
`, _jsxs(_components.li, {
                        children: [_jsx(_components.strong, {
                          children: "Same-origin recommended"
                        }), ": For simplicity, host Wasm files on the same domain as your application."]
                      }), `
`]
                    })
                  })
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Configure Content Security Policy (if applicable)."
                }), `
`, _jsx(_components.p, {
                  children: "If your application uses CSP headers, add the following permissions:"
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [`
`, _jsx(_components.p, {
                      children: "For Chrome 97+, Edge 97+, and modern browsers:"
                    }), `
`, _jsx(_Fragment, {
                      children: _jsx(_components.pre, {
                        className: "shiki shiki-themes github-light github-dark",
                        style: {
                          "--shiki-light": "#24292e",
                          "--shiki-dark": "#e1e4e8",
                          "--shiki-light-bg": "#fff",
                          "--shiki-dark-bg": "#24292e"
                        },
                        tabIndex: "0",
                        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
                        children: _jsxs(_components.code, {
                          children: [_jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "<"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#22863A",
                                "--shiki-dark": "#85E89D"
                              },
                              children: "meta"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: " http-equiv"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "="
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#032F62",
                                "--shiki-dark": "#9ECBFF"
                              },
                              children: '"Content-Security-Policy"'
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "   content"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "="
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#032F62",
                                "--shiki-dark": "#9ECBFF"
                              },
                              children: `"script-src 'self' 'wasm-unsafe-eval' blob:"`
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: ">"
                            })]
                          })]
                        })
                      })
                    }), `
`]
                  }), `
`, _jsxs(_components.li, {
                    children: [`
`, _jsx(_components.p, {
                      children: "For older browsers (Chrome versions earlier than 97, Edge versions earlier than 97):"
                    }), `
`, _jsx(_Fragment, {
                      children: _jsx(_components.pre, {
                        className: "shiki shiki-themes github-light github-dark",
                        style: {
                          "--shiki-light": "#24292e",
                          "--shiki-dark": "#e1e4e8",
                          "--shiki-light-bg": "#fff",
                          "--shiki-dark-bg": "#24292e"
                        },
                        tabIndex: "0",
                        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
                        children: _jsxs(_components.code, {
                          children: [_jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "<"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#22863A",
                                "--shiki-dark": "#85E89D"
                              },
                              children: "meta"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: " http-equiv"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "="
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#032F62",
                                "--shiki-dark": "#9ECBFF"
                              },
                              children: '"Content-Security-Policy"'
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "   content"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "="
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#032F62",
                                "--shiki-dark": "#9ECBFF"
                              },
                              children: `"script-src 'self' 'unsafe-eval' blob:"`
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: ">"
                            })]
                          })]
                        })
                      })
                    }), `
`]
                  }), `
`]
                }), `
`]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Register the plugin."
            }), `
`, _jsxs(_components.p, {
              children: ["Call the ", _jsx(Link, {
                to: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#registerextensions",
                children: _jsx(_components.code, {
                  children: "AgoraRTC.registerExtensions"
                })
              }), " method and pass the created ", _jsx(_components.code, {
                children: "VADExtension"
              }), " instance to register the VAD plugin. You can also listen for events when the Wasm file fails to load."]
            }), `
`, _jsx(CalloutContainer, {
              type: "warning",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Agora recommends that you create only one instance of ", _jsx(_components.code, {
                    children: "VADExtension"
                  }), "."]
                })
              })
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "import"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " AgoraRTC "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "from"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ' "agora-rtc-sdk-ng"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "import"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " { VADExtension } "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "from"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ' "agora-extension-vad"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Create the VADExtension instance with the public path where the Wasm files are located"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Don't include a trailing slash in the path"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "const"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " extension"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " new"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " VADExtension"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "({ assetsPath: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"./wasm"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " });"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Check compatibility"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "if"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " ("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "!"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "extension."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "checkCompatibility"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "()) {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " console."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "warn"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"VAD plugin is not supported"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " return"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ";"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "}"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Listen for Wasm file loading failures"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "extension."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "onloaderror"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " ("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#E36209",
                        "--shiki-dark": "#FFAB70"
                      },
                      children: "error"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ") "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "=>"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " {"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: " // Handle VAD loading errors"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " console."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "error"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"VAD plugin failed to load:"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", error);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "};"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Register the plugin"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "AgoraRTC."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "registerExtensions"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "([extension]);"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Enable the plugin."
            }), `
`, _jsx(_components.p, {
              children: "To enable the VAD plugin:"
            }), `
`, _jsxs(_components.ol, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Call the ", _jsx(_components.code, {
                    children: "createProcessor"
                  }), " method to create an instance of ", _jsx(_components.code, {
                    children: "IVADProcessor"
                  }), ". You can set the plugin to be enabled or disabled by default. If you don't specify a state, the plugin uses the last known state."]
                }), `
`, _jsx(_Fragment, {
                  children: _jsx(_components.pre, {
                    className: "shiki shiki-themes github-light github-dark",
                    style: {
                      "--shiki-light": "#24292e",
                      "--shiki-dark": "#e1e4e8",
                      "--shiki-light-bg": "#fff",
                      "--shiki-dark-bg": "#24292e"
                    },
                    tabIndex: "0",
                    icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
                    children: _jsxs(_components.code, {
                      children: [_jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "// Create an IVADProcessor instance"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "const"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: " processor"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: " ="
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " extension."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "createProcessor"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "();"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line"
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "// Enable the plugin by default"
                        })
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "// await processor.enable();"
                        })
                      }), `
`, _jsx(_components.span, {
                        className: "line"
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "// Disable the plugin by default"
                        })
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "// await processor.disable();"
                        })
                      }), `
`, _jsx(_components.span, {
                        className: "line"
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "// Optional: Listen for processor overload events"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "processor."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "on"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "("
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: '"overload"'
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ", "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "async"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " () "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "=>"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " {"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " console."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "log"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "("
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: '"Processor overload detected"'
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ");"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: " // Choose to disable the plugin"
                        })
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: " // await processor.disable();"
                        })
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: " // Or continue processing audio despite the overload"
                        })
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "});"
                        })
                      })]
                    })
                  })
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Inject the plugin into the audio processing pipeline by calling the SDK's ", _jsx(Link, {
                    to: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/imicrophoneaudiotrack.html#pipe",
                    children: _jsx(_components.code, {
                      children: "pipe"
                    })
                  }), " method and specify the ", _jsx(_components.code, {
                    children: "processorDestination"
                  }), " property."]
                }), `
`, _jsx(_Fragment, {
                  children: _jsx(_components.pre, {
                    className: "shiki shiki-themes github-light github-dark",
                    style: {
                      "--shiki-light": "#24292e",
                      "--shiki-dark": "#e1e4e8",
                      "--shiki-light-bg": "#fff",
                      "--shiki-dark-bg": "#24292e"
                    },
                    tabIndex: "0",
                    icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
                    children: _jsxs(_components.code, {
                      children: [_jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "// Create an audio track"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "const"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: " audioTrack"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: " ="
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: " await"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " AgoraRTC."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "createMicrophoneAudioTrack"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "();"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "// Inject the plugin into the audio processing pipeline"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "audioTrack."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "pipe"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(processor)."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "pipe"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(audioTrack.processorDestination);"
                        })]
                      })]
                    })
                  })
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["If the plugin is not enabled by default, call the ", _jsx(_components.code, {
                    children: "enable"
                  }), " method to enable the plugin."]
                }), `
`, _jsx(_Fragment, {
                  children: _jsx(_components.pre, {
                    className: "shiki shiki-themes github-light github-dark",
                    style: {
                      "--shiki-light": "#24292e",
                      "--shiki-dark": "#e1e4e8",
                      "--shiki-light-bg": "#fff",
                      "--shiki-dark-bg": "#24292e"
                    },
                    tabIndex: "0",
                    icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
                    children: _jsx(_components.code, {
                      children: _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "await"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " processor."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "enable"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "();"
                        })]
                      })
                    })
                  })
                }), `
`]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Get detection results."
            }), `
`, _jsxs(_components.p, {
              children: ["After you enable the plugin, listen to the ", _jsx(_components.code, {
                children: "result"
              }), " event to get the detection results and process them as needed."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Listen to the detection results of the VAD plugin"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "processor."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "on"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"result"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", handleResult);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "function"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " handleResult"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#E36209",
                        "--shiki-dark": "#FFAB70"
                      },
                      children: "result"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ") {"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: " // Output voiceProb, which indicates the probability that someone is speaking"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " console."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "info"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"voiceProb: "'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", result.voiceProb);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: " // Output musicProb, which indicates the probability that music is playing"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " console."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "info"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"musicProb: "'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", result.musicProb);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "}"
                    })
                  })]
                })
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "voiceProb"
                  }), " and ", _jsx(_components.code, {
                    children: "musicProb"
                  }), " are floating-point numbers from 0 to 1 that represent the probability that someone is speaking and that music is playing."]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Disable the plugin."
            }), `
`, _jsxs(_components.p, {
              children: ["When you no longer need the VAD plugin, call the ", _jsx(_components.code, {
                children: "disable"
              }), " method to disable the plugin."]
            }), `
`, _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
                children: _jsx(_components.code, {
                  children: _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "await"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " processor."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "disable"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  })
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "reference",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information in this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "api-reference",
          children: "API reference"
        }), _jsx(_components.p, {
          children: "This section provides the API reference for the Voice Activity Detection extension."
        }), _jsx(_components.h4, {
          id: "ivadextension",
          children: _jsx(_components.code, {
            children: "IVADExtension"
          })
        }), _jsx(_components.h5, {
          id: "checkcompatibility",
          children: _jsx(_components.code, {
            children: "checkCompatibility"
          })
        }), _jsx(_components.p, {
          children: "Checks whether the current browser supports the VAD plugin. The result returned by this method is for reference only."
        }), _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "checkCompatibility"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(): boolean;"
                })]
              })
            })
          })
        }), _jsx(_components.h5, {
          id: "createprocessor",
          children: _jsx(_components.code, {
            children: "createProcessor"
          })
        }), _jsxs(_components.p, {
          children: ["Creates an ", _jsx(_components.code, {
            children: "IVADProcessor"
          }), " instance."]
        }), _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "createProcessor"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(): IVADProcessor;"
                })]
              })
            })
          })
        }), _jsx(_components.h5, {
          id: "onloaderror",
          children: _jsx(_components.code, {
            children: "onloaderror"
          })
        }), _jsx(_components.p, {
          children: "Callback for Wasm dependency file loading failures."
        }), _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "onloaderror"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "?:"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "error"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " Error"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ") "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "=>"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
                })]
              })
            })
          })
        }), _jsx(_components.h4, {
          id: "ivadprocessor",
          children: _jsx(_components.code, {
            children: "IVADProcessor"
          })
        }), _jsx(_components.h5, {
          id: "kind",
          children: _jsx(_components.code, {
            children: "kind"
          })
        }), _jsxs(_components.p, {
          children: ["Processor type. Returns either ", _jsx(_components.code, {
            children: "video"
          }), " or ", _jsx(_components.code, {
            children: "audio"
          }), "."]
        }), _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "get "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "kind"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(): "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'video'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " |"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'audio'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
                })]
              })
            })
          })
        }), _jsx(_components.h5, {
          id: "enabled",
          children: _jsx(_components.code, {
            children: "enabled"
          })
        }), _jsx(_components.p, {
          children: "Indicates whether the plugin is enabled."
        }), _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "get "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "enabled"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(): boolean;"
                })]
              })
            })
          })
        }), _jsx(_components.h5, {
          id: "enable",
          children: _jsx(_components.code, {
            children: "enable"
          })
        }), _jsx(_components.p, {
          children: "Enables the VAD function."
        }), _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "enable"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(): "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " |"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " Promise"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "<void>"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
                })]
              })
            })
          })
        }), _jsx(_components.h5, {
          id: "disable",
          children: _jsx(_components.code, {
            children: "disable"
          })
        }), _jsx(_components.p, {
          children: "Disables the VAD function."
        }), _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "disable"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(): "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " |"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " Promise"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "<void>"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
                })]
              })
            })
          })
        }), _jsx(_components.h5, {
          id: "on",
          children: _jsx(_components.code, {
            children: "on"
          })
        }), _jsx(_components.p, {
          children: "Listens for processor overload events."
        }), _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "on"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"overload"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", callback: () "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "=>"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "): "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
                })]
              })
            })
          })
        }), _jsx(_components.h4, {
          id: "type-definitions",
          children: "Type definitions"
        }), _jsx(_components.h5, {
          id: "vadextensionoptions",
          children: _jsx(_components.code, {
            children: "VADExtensionOptions"
          })
        }), _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "export"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " interface"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " VADExtensionOptions"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "  assetsPath"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "}"
                })
              })]
            })
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Parameters:"
          })
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "assetsPath"
            }), ": The URL path of the Wasm files that the VAD plugin depends on. Don't end the path with a slash, for example ", _jsx(_components.code, {
              children: '"./external"'
            }), "."]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["The plugin assembles the full path to the Wasm files from the ", _jsx(_components.code, {
            children: "assetsPath"
          }), ". If the path is incorrect and the Wasm files fail to load, you receive an ", _jsx(_components.code, {
            children: "onloaderror"
          }), " callback."]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      })
    })]
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
