import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  analyticsPageType: "task-guide",
  title: "Voice agent quickstart",
  description: "Build a working voice agent in under five minutes without writing any server code by cloning an officially maintained starter project."
};
export let _markdown = `

Set up a working voice agent in under five minutes. This page walks you through installing Agora Skills to give your AI coding assistant the official quickstarts and Agora CLI workflows. You then use the CLI to sign in, clone the official starter, and run it locally. You can follow the CLI steps yourself or paste the sample prompt and let your assistant handle setup for you.

If you are new to Agora, read [Core concepts](/en/introduction/core-concepts) first to understand how RTC, Signaling, channels, UIDs, and tokens fit together.

### Install Agora Skills [#install-agora-skills]

Agora Skills teach your AI coding assistant how to work with Conversational AI projects using official starter repos and the Agora CLI, including signing in, project binding, generating environment files, and running diagnostics. Install the CLI in the next section, or ask your assistant to run the installer for you.

\`\`\`bash
npx skills add AgoraIO/skills
\`\`\`

Paste the following prompt into your assistant's chat. You can replace Python with TypeScript or Go depending on your language preference:

\`\`\`text
Set up and run the Agora Conversational AI Python starter project locally.
\`\`\`

Your assistant installs the CLI, signs you in, scaffolds the official starter, and guides you through the remaining steps. Follow the manual CLI steps below if you prefer to run each command yourself.

### Install the Agora CLI [#install-the-agora-cli]

The Agora CLI is a native Go binary available at [AgoraIO-Community/cli](https://github.com/AgoraIO-Community/cli).

<Tabs defaultValue="mac-linux" groupId="ai-install-os">
  <TabsList>
    <TabsTrigger value="mac-linux">
      macOS and Linux
    </TabsTrigger>

    <TabsTrigger value="windows-powershell">
      Windows (PowerShell)
    </TabsTrigger>
  </TabsList>

  <TabsContent value="mac-linux">
    \`\`\`bash
    curl -fsSL https://dl.agora.io/cli/install.sh | sh
    agora --help
    \`\`\`

    If the \`agora\` command is not found after installation, re-run with \`--add-to-path\` or
    manually add the install directory to your shell profile.
  </TabsContent>

  <TabsContent value="windows-powershell">
    \`\`\`powershell
    irm https://dl.agora.io/cli/install.ps1 | iex
    agora --help
    \`\`\`

    If your execution policy blocks inline scripts, download \`install.ps1\` and run:

    \`\`\`powershell
    powershell -ExecutionPolicy Bypass -File .\\install.ps1
    \`\`\`
  </TabsContent>
</Tabs>

## Sign in, scaffold, and run [#sign-in-scaffold-and-run]

Sign in with the Agora CLI, clone the starter project, and configure it for your chosen language.

1. Sign in to Agora Console.

   \`\`\`bash
   agora login
   \`\`\`

2. Use \`agora init\` to clone the official starter for your chosen template, bind it to your
   Agora project, and write the runtime-specific environment file.

<Tabs defaultValue="python" groupId="ai-sdk-language">
  <TabsList>
    <TabsTrigger value="python">
      Python
    </TabsTrigger>

    <TabsTrigger value="typescript">
      TypeScript
    </TabsTrigger>

    <TabsTrigger value="go">
      Go
    </TabsTrigger>
  </TabsList>

  <TabsContent value="python">
    \`\`\`bash
    agora init my-python-demo --template python
    cd my-python-demo
    # Set up the web client and Python backend.
    bun run setup
    # Start the web client and Python backend.
    bun run dev
    \`\`\`
  </TabsContent>

  <TabsContent value="typescript">
    \`\`\`bash
    agora init my-nextjs-demo --template nextjs
    cd my-nextjs-demo
    pnpm install
    pnpm dev
    \`\`\`
  </TabsContent>

  <TabsContent value="go">
    \`\`\`bash
    agora init my-go-demo --template go
    cd my-go-demo
    make setup
    make dev
    \`\`\`
  </TabsContent>
</Tabs>

3. Open \`http://localhost:3000\` and click **Start conversation**.

If the agent does not join or transcripts do not appear, run \`agora project doctor\` to
check credential validity, feature enablement, and network reachability.

<CalloutContainer type="info">
  <CalloutDescription>
    Conversational AI Engine is enabled by default for new projects and can't be disabled. If you're using an older project and the agent fails to start, verify that Conversational AI Engine is enabled on the **RTC Services** page in [Agora Console](https://console.agora.io/).
  </CalloutDescription>
</CalloutContainer>

## What just happened [#what-just-happened]

The CLI cloned the selected starter, connected it to your Agora project, and wrote
the environment configuration required to run the demo locally.

The demo runs a local browser app and server-side agent controls:

* **Browser app**: Captures microphone audio and plays the agent response.
* **Server-side controls**: Generate tokens and start or stop the agent session.

Agora provides the real-time path between the user and the agent. The user and
agent join the same Agora channel, and Agora transports low-latency audio and
session events between them.

The configured models handle the speech pipeline:

1. ASR converts user speech to text.
2. The LLM reasons over the conversation and generates a response.
3. TTS converts the response back to speech.

## Next steps [#next-steps]

### Build and customize [#build-and-customize]

* **[Manage agent sessions](../build/start-stop-agent)**: Start and stop agents with the SDKs or REST API.
* **[Customize models](../build/managed-mode)**: Use managed mode, or connect your own LLM and TTS providers.
* **[Improve conversation quality](../best-practices/optimize-latency)**: Tune latency, audio settings, interruptions, and turn taking.
* **[Optimize audio setup](../best-practices/audio-setup)**: Set audio profiles, scenarios, and capture behavior for your target clients.
* **[Review the API reference](/en/api-reference/api-ref/conversational-ai)**: Check REST and SDK parameters when you move beyond the starter.

### Observe and troubleshoot [#observe-and-troubleshoot]

* **[Observe runtime behavior](../build/handle-runtime-events/monitor-agent-runtime)**: Monitor events, transcripts, session history, and failures.
* **[Debug agent failures](../build/handle-runtime-events/debug-agent-failures)**: Correlate client callbacks, webhook events, and turn-level data.

### Prepare for production [#prepare-for-production]

* **[Review security and privacy](/en/introduction/security-privacy)**: Check authentication, encryption, geofencing, compliance, and operational safeguards.
* **[Restrict where agents run](../best-practices/regional-restrictions)**: Keep agent traffic within the regions your deployment requires.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Set up a working voice agent in under five minutes. This page walks you through installing Agora Skills to give your AI coding assistant the official quickstarts and Agora CLI workflows. You then use the CLI to sign in, clone the official starter, and run it locally. You can follow the CLI steps yourself or paste the sample prompt and let your assistant handle setup for you."
  }, {
    heading: undefined,
    content: "If you are new to Agora, read Core concepts first to understand how RTC, Signaling, channels, UIDs, and tokens fit together."
  }, {
    heading: "install-agora-skills",
    content: "Agora Skills teach your AI coding assistant how to work with Conversational AI projects using official starter repos and the Agora CLI, including signing in, project binding, generating environment files, and running diagnostics. Install the CLI in the next section, or ask your assistant to run the installer for you."
  }, {
    heading: "install-agora-skills",
    content: "Paste the following prompt into your assistant's chat. You can replace Python with TypeScript or Go depending on your language preference:"
  }, {
    heading: "install-agora-skills",
    content: "Your assistant installs the CLI, signs you in, scaffolds the official starter, and guides you through the remaining steps. Follow the manual CLI steps below if you prefer to run each command yourself."
  }, {
    heading: "install-the-agora-cli",
    content: "The Agora CLI is a native Go binary available at AgoraIO-Community/cli."
  }, {
    heading: "install-the-agora-cli",
    content: "If the `agora` command is not found after installation, re-run with `--add-to-path` or\nmanually add the install directory to your shell profile."
  }, {
    heading: "install-the-agora-cli",
    content: "If your execution policy blocks inline scripts, download `install.ps1` and run:"
  }, {
    heading: "sign-in-scaffold-and-run",
    content: "Sign in with the Agora CLI, clone the starter project, and configure it for your chosen language."
  }, {
    heading: "sign-in-scaffold-and-run",
    content: "Sign in to Agora Console."
  }, {
    heading: "sign-in-scaffold-and-run",
    content: "Use `agora init` to clone the official starter for your chosen template, bind it to your\nAgora project, and write the runtime-specific environment file."
  }, {
    heading: "sign-in-scaffold-and-run",
    content: "Open `http://localhost:3000` and click **Start conversation**."
  }, {
    heading: "sign-in-scaffold-and-run",
    content: "If the agent does not join or transcripts do not appear, run `agora project doctor` to\ncheck credential validity, feature enablement, and network reachability."
  }, {
    heading: "sign-in-scaffold-and-run",
    content: "Conversational AI Engine is enabled by default for new projects and can't be disabled. If you're using an older project and the agent fails to start, verify that Conversational AI Engine is enabled on the **RTC Services** page in Agora Console."
  }, {
    heading: "what-just-happened",
    content: `The CLI cloned the selected starter, connected it to your Agora project, and wrote
the environment configuration required to run the demo locally.`
  }, {
    heading: "what-just-happened",
    content: "The demo runs a local browser app and server-side agent controls:"
  }, {
    heading: "what-just-happened",
    content: "**Browser app**: Captures microphone audio and plays the agent response."
  }, {
    heading: "what-just-happened",
    content: "**Server-side controls**: Generate tokens and start or stop the agent session."
  }, {
    heading: "what-just-happened",
    content: `Agora provides the real-time path between the user and the agent. The user and
agent join the same Agora channel, and Agora transports low-latency audio and
session events between them.`
  }, {
    heading: "what-just-happened",
    content: "The configured models handle the speech pipeline:"
  }, {
    heading: "what-just-happened",
    content: "ASR converts user speech to text."
  }, {
    heading: "what-just-happened",
    content: "The LLM reasons over the conversation and generates a response."
  }, {
    heading: "what-just-happened",
    content: "TTS converts the response back to speech."
  }, {
    heading: "build-and-customize",
    content: "**Manage agent sessions**: Start and stop agents with the SDKs or REST API."
  }, {
    heading: "build-and-customize",
    content: "**Customize models**: Use managed mode, or connect your own LLM and TTS providers."
  }, {
    heading: "build-and-customize",
    content: "**Improve conversation quality**: Tune latency, audio settings, interruptions, and turn taking."
  }, {
    heading: "build-and-customize",
    content: "**Optimize audio setup**: Set audio profiles, scenarios, and capture behavior for your target clients."
  }, {
    heading: "build-and-customize",
    content: "**Review the API reference**: Check REST and SDK parameters when you move beyond the starter."
  }, {
    heading: "observe-and-troubleshoot",
    content: "**Observe runtime behavior**: Monitor events, transcripts, session history, and failures."
  }, {
    heading: "observe-and-troubleshoot",
    content: "**Debug agent failures**: Correlate client callbacks, webhook events, and turn-level data."
  }, {
    heading: "prepare-for-production",
    content: "**Review security and privacy**: Check authentication, encryption, geofencing, compliance, and operational safeguards."
  }, {
    heading: "prepare-for-production",
    content: "**Restrict where agents run**: Keep agent traffic within the regions your deployment requires."
  }],
  headings: [{
    id: "install-agora-skills",
    content: "Install Agora Skills"
  }, {
    id: "install-the-agora-cli",
    content: "Install the Agora CLI"
  }, {
    id: "sign-in-scaffold-and-run",
    content: "Sign in, scaffold, and run"
  }, {
    id: "what-just-happened",
    content: "What just happened"
  }, {
    id: "next-steps",
    content: "Next steps"
  }, {
    id: "build-and-customize",
    content: "Build and customize"
  }, {
    id: "observe-and-troubleshoot",
    content: "Observe and troubleshoot"
  }, {
    id: "prepare-for-production",
    content: "Prepare for production"
  }]
};
export let toc = [{
  depth: 3,
  url: "#install-agora-skills",
  title: _jsx(_Fragment, {
    children: "Install Agora Skills"
  })
}, {
  depth: 3,
  url: "#install-the-agora-cli",
  title: _jsx(_Fragment, {
    children: "Install the Agora CLI"
  })
}, {
  depth: 2,
  url: "#sign-in-scaffold-and-run",
  title: _jsx(_Fragment, {
    children: "Sign in, scaffold, and run"
  })
}, {
  depth: 2,
  url: "#what-just-happened",
  title: _jsx(_Fragment, {
    children: "What just happened"
  })
}, {
  depth: 2,
  url: "#next-steps",
  title: _jsx(_Fragment, {
    children: "Next steps"
  })
}, {
  depth: 3,
  url: "#build-and-customize",
  title: _jsx(_Fragment, {
    children: "Build and customize"
  })
}, {
  depth: 3,
  url: "#observe-and-troubleshoot",
  title: _jsx(_Fragment, {
    children: "Observe and troubleshoot"
  })
}, {
  depth: 3,
  url: "#prepare-for-production",
  title: _jsx(_Fragment, {
    children: "Prepare for production"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, Tabs, TabsContent, TabsList, TabsTrigger } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!Tabs)
    _missingMdxReference("Tabs", true);
  if (!TabsContent)
    _missingMdxReference("TabsContent", true);
  if (!TabsList)
    _missingMdxReference("TabsList", true);
  if (!TabsTrigger)
    _missingMdxReference("TabsTrigger", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Set up a working voice agent in under five minutes. This page walks you through installing Agora Skills to give your AI coding assistant the official quickstarts and Agora CLI workflows. You then use the CLI to sign in, clone the official starter, and run it locally. You can follow the CLI steps yourself or paste the sample prompt and let your assistant handle setup for you."
    }), `
`, _jsxs(_components.p, {
      children: ["If you are new to Agora, read ", _jsx(_components.a, {
        href: "/en/introduction/core-concepts",
        children: "Core concepts"
      }), " first to understand how RTC, Signaling, channels, UIDs, and tokens fit together."]
    }), `
`, _jsx(_components.h3, {
      id: "install-agora-skills",
      children: "Install Agora Skills"
    }), `
`, _jsx(_components.p, {
      children: "Agora Skills teach your AI coding assistant how to work with Conversational AI projects using official starter repos and the Agora CLI, including signing in, project binding, generating environment files, and running diagnostics. Install the CLI in the next section, or ask your assistant to run the installer for you."
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
              children: "npx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " skills"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " add"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " AgoraIO/skills"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "Paste the following prompt into your assistant's chat. You can replace Python with TypeScript or Go depending on your language preference:"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Set"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " up"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " and"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " run"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " the"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Agora"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Conversational"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " AI"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Python"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " starter"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " project"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " locally."
            })]
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "Your assistant installs the CLI, signs you in, scaffolds the official starter, and guides you through the remaining steps. Follow the manual CLI steps below if you prefer to run each command yourself."
    }), `
`, _jsx(_components.h3, {
      id: "install-the-agora-cli",
      children: "Install the Agora CLI"
    }), `
`, _jsxs(_components.p, {
      children: ["The Agora CLI is a native Go binary available at ", _jsx(_components.a, {
        href: "https://github.com/AgoraIO-Community/cli",
        children: "AgoraIO-Community/cli"
      }), "."]
    }), `
`, _jsxs(Tabs, {
      defaultValue: "mac-linux",
      groupId: "ai-install-os",
      persist: true,
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "mac-linux",
          children: "macOS and Linux"
        }), _jsx(TabsTrigger, {
          value: "windows-powershell",
          children: "Windows (PowerShell)"
        })]
      }), _jsxs(TabsContent, {
        value: "mac-linux",
        children: [_jsx(_Fragment, {
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
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "curl"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " -fsSL"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " https://dl.agora.io/cli/install.sh"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " |"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " sh"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " --help"
                })]
              })]
            })
          })
        }), _jsxs(_components.p, {
          children: ["If the ", _jsx(_components.code, {
            children: "agora"
          }), " command is not found after installation, re-run with ", _jsx(_components.code, {
            children: "--add-to-path"
          }), ` or
manually add the install directory to your shell profile.`]
        })]
      }), _jsxs(TabsContent, {
        value: "windows-powershell",
        children: [_jsx(_Fragment, {
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
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "irm"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " https://dl.agora.io/cli/install.ps1"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " |"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " iex"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " --help"
                })]
              })]
            })
          })
        }), _jsxs(_components.p, {
          children: ["If your execution policy blocks inline scripts, download ", _jsx(_components.code, {
            children: "install.ps1"
          }), " and run:"]
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
            icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "powershell"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " -ExecutionPolicy"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " Bypass"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " -File"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " ."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "\\i"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "nstall.ps1"
                })]
              })
            })
          })
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "sign-in-scaffold-and-run",
      children: "Sign in, scaffold, and run"
    }), `
`, _jsx(_components.p, {
      children: "Sign in with the Agora CLI, clone the starter project, and configure it for your chosen language."
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Sign in to Agora Console."
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
                  children: "agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " login"
                })]
              })
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Use ", _jsx(_components.code, {
            children: "agora init"
          }), ` to clone the official starter for your chosen template, bind it to your
Agora project, and write the runtime-specific environment file.`]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(Tabs, {
      defaultValue: "python",
      groupId: "ai-sdk-language",
      persist: true,
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "python",
          children: "Python"
        }), _jsx(TabsTrigger, {
          value: "typescript",
          children: "TypeScript"
        }), _jsx(TabsTrigger, {
          value: "go",
          children: "Go"
        })]
      }), _jsx(TabsContent, {
        value: "python",
        children: _jsx(_Fragment, {
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
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " init"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " my-python-demo"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " --template"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " python"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "cd"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " my-python-demo"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "# Set up the web client and Python backend."
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "bun"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " run"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " setup"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "# Start the web client and Python backend."
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "bun"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " run"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " dev"
                })]
              })]
            })
          })
        })
      }), _jsx(TabsContent, {
        value: "typescript",
        children: _jsx(_Fragment, {
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
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " init"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " my-nextjs-demo"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " --template"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " nextjs"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "cd"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " my-nextjs-demo"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "pnpm"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " install"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "pnpm"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " dev"
                })]
              })]
            })
          })
        })
      }), _jsx(TabsContent, {
        value: "go",
        children: _jsx(_Fragment, {
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
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " init"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " my-go-demo"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " --template"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " go"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "cd"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " my-go-demo"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "make"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " setup"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "make"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " dev"
                })]
              })]
            })
          })
        })
      })]
    }), `
`, _jsxs(_components.ol, {
      start: "3",
      children: [`
`, _jsxs(_components.li, {
        children: ["Open ", _jsx(_components.code, {
          children: "http://localhost:3000"
        }), " and click ", _jsx(_components.strong, {
          children: "Start conversation"
        }), "."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["If the agent does not join or transcripts do not appear, run ", _jsx(_components.code, {
        children: "agora project doctor"
      }), ` to
check credential validity, feature enablement, and network reachability.`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["Conversational AI Engine is enabled by default for new projects and can't be disabled. If you're using an older project and the agent fails to start, verify that Conversational AI Engine is enabled on the ", _jsx(_components.strong, {
            children: "RTC Services"
          }), " page in ", _jsx(_components.a, {
            href: "https://console.agora.io/",
            children: "Agora Console"
          }), "."]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "what-just-happened",
      children: "What just happened"
    }), `
`, _jsx(_components.p, {
      children: `The CLI cloned the selected starter, connected it to your Agora project, and wrote
the environment configuration required to run the demo locally.`
    }), `
`, _jsx(_components.p, {
      children: "The demo runs a local browser app and server-side agent controls:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Browser app"
        }), ": Captures microphone audio and plays the agent response."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Server-side controls"
        }), ": Generate tokens and start or stop the agent session."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: `Agora provides the real-time path between the user and the agent. The user and
agent join the same Agora channel, and Agora transports low-latency audio and
session events between them.`
    }), `
`, _jsx(_components.p, {
      children: "The configured models handle the speech pipeline:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "ASR converts user speech to text."
      }), `
`, _jsx(_components.li, {
        children: "The LLM reasons over the conversation and generates a response."
      }), `
`, _jsx(_components.li, {
        children: "TTS converts the response back to speech."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "next-steps",
      children: "Next steps"
    }), `
`, _jsx(_components.h3, {
      id: "build-and-customize",
      children: "Build and customize"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: _jsx(_components.a, {
            href: "../build/start-stop-agent",
            children: "Manage agent sessions"
          })
        }), ": Start and stop agents with the SDKs or REST API."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: _jsx(_components.a, {
            href: "../build/managed-mode",
            children: "Customize models"
          })
        }), ": Use managed mode, or connect your own LLM and TTS providers."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: _jsx(_components.a, {
            href: "../best-practices/optimize-latency",
            children: "Improve conversation quality"
          })
        }), ": Tune latency, audio settings, interruptions, and turn taking."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: _jsx(_components.a, {
            href: "../best-practices/audio-setup",
            children: "Optimize audio setup"
          })
        }), ": Set audio profiles, scenarios, and capture behavior for your target clients."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/conversational-ai",
            children: "Review the API reference"
          })
        }), ": Check REST and SDK parameters when you move beyond the starter."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "observe-and-troubleshoot",
      children: "Observe and troubleshoot"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: _jsx(_components.a, {
            href: "../build/handle-runtime-events/monitor-agent-runtime",
            children: "Observe runtime behavior"
          })
        }), ": Monitor events, transcripts, session history, and failures."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: _jsx(_components.a, {
            href: "../build/handle-runtime-events/debug-agent-failures",
            children: "Debug agent failures"
          })
        }), ": Correlate client callbacks, webhook events, and turn-level data."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "prepare-for-production",
      children: "Prepare for production"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: _jsx(_components.a, {
            href: "/en/introduction/security-privacy",
            children: "Review security and privacy"
          })
        }), ": Check authentication, encryption, geofencing, compliance, and operational safeguards."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: _jsx(_components.a, {
            href: "../best-practices/regional-restrictions",
            children: "Restrict where agents run"
          })
        }), ": Keep agent traffic within the regions your deployment requires."]
      }), `
`]
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
