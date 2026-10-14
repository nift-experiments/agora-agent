import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Real-time translation (Beta)",
  description: "Translate transcription text to multiple languages."
};
export let _markdown = `

In addition to transcribing the host's audio in real time, Real-Time STT also supports translation during transcription. For example, in an international conference use-case, you can transcribe the host's speech, translate the transcribed content, and then push both the original text and the translation back to the channel as subtitles.

## Understand the tech [#understand-the-tech]

Following are the key features of real-time translation:

* **Instant translation**
  Live speech-to-text translation to keep conversations flowing seamlessly in real-time communication or live streaming.

* **Multi-language support**
  Manage multilingual interactions with speech translation from up to 4 source languages into 10 target languages for each source.

* **High accuracy**
  Advanced Speech Recognition (ASR) captures spoken language and converts it accurately to text using sophisticated recognition technologies.

* **Translated captions**
  Live captions are continually updated during speech, providing readable, translated text. Video Text Track (VTT) files can be stored in the cloud for future reference, AI analysis, or compliance.

* **Ultra-low Latency translation**
  Seamless translation with an end-to-start latency of under 1 second and average end-to-end latency of under 3 seconds.

* **LLM integration**
  Process transcribed text using large language models (LLMs) to generate translation text, enhancing the Quality of Experience (QoE) to match that of a native speaker. Incorporate additional AI services to improve accuracy and reduce latency.

This page shows you how to set up translation of the transcribed content when starting a transcription task.

## Prerequisites [#prerequisites]

To follow this guide, first implement basic speech-to-text transcription by following the [Rest quickstart](../../get-started/quickstart).

## Implementation [#implementation]

When calling \`start\` to start a transcription task, set \`translateConfig\` to translate the transcribed text content.

### Sample request [#sample-request]

The following example shows you how to set up translation when transcribing. The example includes the URL, header, and body. To record and encrypt at the same time in the transcription task, refer to [Record captions](../process-transcription-data/record-captions) and [Encrypt captions](../process-transcription-data/encrypt-captions).

\`\`\`bash
curl --location --request POST 'https://api.agora.io/api/speech-to-text/v1/projects/{appid}/join' \\
--header 'Content-Type: application/json' \\
--header 'Accept: application/json' \\
--header 'Authorization: <credentials>' \\
--data '{
    "name": "unique-agent-id",
    "languages": [
        "en-US"
    ],
    "maxIdleTime": 50,
    "rtcConfig": {
        "channelName": "<YourChannelName>",
        "subBotUid": "<YourSubscribeUid>",
        "pubBotUid": "<YourPublishUid>",
        "subscribeAudioUids": ["123", "456"]
    },
    "translateConfig": {
        "languages": [
            {
                "source": "en-US",
                "target": [
                    "ar-SA",
                    "id-ID",
                    "fr-FR",
                    "ja-JP"
                ]
            }
        ]
    }
}'
\`\`\`

| Parameter | Type         | Description                                                                                                                                                         |
| :-------- | :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`source\`  | string array | The source language for the translation.                                                                                                                            |
| \`target\`  | array        | The target languages for translation. You can configure up to 10 target languages per source language. See [Supported Languages](./translation#supported-languages) |

<CalloutContainer type="info">
  <CalloutDescription>
    * A single transcription task supports translating up to 5 speakers simultaneously.

    * **Single-language input**: If you set the source language to a single language, the target language must be different, otherwise an error is returned. For example, if you set the source language to English, you cannot set the target language to English.

    * **Mixed-language input**: If you set the source language to mixed-language input, you can set the target language to one of the source languages. For example, if you set the source languages to Chinese and English, setting the target language to English translates both into English.
  </CalloutDescription>
</CalloutContainer>

### Sample response [#sample-response]

\`\`\`json
{
    "agent_id": "4xxxxx8f21486930fcb77a805af20752",
    "create_ts": 1730974708,
    "status": "RUNNING"
}
\`\`\`

| Parameter Name | Type    | Description                                                                                                                                                                                                                                                                          |
| -------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`agent_id\`     | String  | The ID of the agent.                                                                                                                                                                                                                                                                 |
| \`create_ts\`    | Integer | The Unix timestamp (seconds) when the agent was created.                                                                                                                                                                                                                             |
| \`status\`       | String  | Agent Status:- \`IDLE\`: The agent is not initialized.
- \`STARTING\`: The agent is starting.
- \`RUNNING\`: The agent is running.
- \`STOPPING\`: The agent is exiting.
- \`STOPPED\`: The agent exited successfully.
- \`RECOVERING\`: The agent is recovering.
- \`FAILED\`: Agent exit failed. |

To \`query\`, \`update\`, or \`stop\` the transcription task, refer to the [Rest quickstart](../../get-started/quickstart).

## Supported languages [#supported-languages]

For a full list of supported translation languages and their parameter values, see
[Supported languages](../../reference/supported-languages#real-time-translation).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "In addition to transcribing the host's audio in real time, Real-Time STT also supports translation during transcription. For example, in an international conference use-case, you can transcribe the host's speech, translate the transcribed content, and then push both the original text and the translation back to the channel as subtitles."
  }, {
    heading: "understand-the-tech",
    content: "Following are the key features of real-time translation:"
  }, {
    heading: "understand-the-tech",
    content: `**Instant translation**
Live speech-to-text translation to keep conversations flowing seamlessly in real-time communication or live streaming.`
  }, {
    heading: "understand-the-tech",
    content: `**Multi-language support**
Manage multilingual interactions with speech translation from up to 4 source languages into 10 target languages for each source.`
  }, {
    heading: "understand-the-tech",
    content: `**High accuracy**
Advanced Speech Recognition (ASR) captures spoken language and converts it accurately to text using sophisticated recognition technologies.`
  }, {
    heading: "understand-the-tech",
    content: `**Translated captions**
Live captions are continually updated during speech, providing readable, translated text. Video Text Track (VTT) files can be stored in the cloud for future reference, AI analysis, or compliance.`
  }, {
    heading: "understand-the-tech",
    content: `**Ultra-low Latency translation**
Seamless translation with an end-to-start latency of under 1 second and average end-to-end latency of under 3 seconds.`
  }, {
    heading: "understand-the-tech",
    content: `**LLM integration**
Process transcribed text using large language models (LLMs) to generate translation text, enhancing the Quality of Experience (QoE) to match that of a native speaker. Incorporate additional AI services to improve accuracy and reduce latency.`
  }, {
    heading: "understand-the-tech",
    content: "This page shows you how to set up translation of the transcribed content when starting a transcription task."
  }, {
    heading: "prerequisites",
    content: "To follow this guide, first implement basic speech-to-text transcription by following the Rest quickstart."
  }, {
    heading: "implementation",
    content: "When calling `start` to start a transcription task, set `translateConfig` to translate the transcribed text content."
  }, {
    heading: "sample-request",
    content: "The following example shows you how to set up translation when transcribing. The example includes the URL, header, and body. To record and encrypt at the same time in the transcription task, refer to Record captions and Encrypt captions."
  }, {
    heading: "sample-request",
    content: "Parameter"
  }, {
    heading: "sample-request",
    content: "Type"
  }, {
    heading: "sample-request",
    content: "Description"
  }, {
    heading: "sample-request",
    content: "`source`"
  }, {
    heading: "sample-request",
    content: "string array"
  }, {
    heading: "sample-request",
    content: "The source language for the translation."
  }, {
    heading: "sample-request",
    content: "`target`"
  }, {
    heading: "sample-request",
    content: "array"
  }, {
    heading: "sample-request",
    content: "The target languages for translation. You can configure up to 10 target languages per source language. See Supported Languages"
  }, {
    heading: "sample-request",
    content: "A single transcription task supports translating up to 5 speakers simultaneously."
  }, {
    heading: "sample-request",
    content: "**Single-language input**: If you set the source language to a single language, the target language must be different, otherwise an error is returned. For example, if you set the source language to English, you cannot set the target language to English."
  }, {
    heading: "sample-request",
    content: "**Mixed-language input**: If you set the source language to mixed-language input, you can set the target language to one of the source languages. For example, if you set the source languages to Chinese and English, setting the target language to English translates both into English."
  }, {
    heading: "sample-response",
    content: "Parameter Name"
  }, {
    heading: "sample-response",
    content: "Type"
  }, {
    heading: "sample-response",
    content: "Description"
  }, {
    heading: "sample-response",
    content: "`agent_id`"
  }, {
    heading: "sample-response",
    content: "String"
  }, {
    heading: "sample-response",
    content: "The ID of the agent."
  }, {
    heading: "sample-response",
    content: "`create_ts`"
  }, {
    heading: "sample-response",
    content: "Integer"
  }, {
    heading: "sample-response",
    content: "The Unix timestamp (seconds) when the agent was created."
  }, {
    heading: "sample-response",
    content: "`status`"
  }, {
    heading: "sample-response",
    content: "String"
  }, {
    heading: "sample-response",
    content: "Agent Status:- `IDLE`: The agent is not initialized.\n- `STARTING`: The agent is starting.\n- `RUNNING`: The agent is running.\n- `STOPPING`: The agent is exiting.\n- `STOPPED`: The agent exited successfully.\n- `RECOVERING`: The agent is recovering.\n- `FAILED`: Agent exit failed."
  }, {
    heading: "sample-response",
    content: "To `query`, `update`, or `stop` the transcription task, refer to the Rest quickstart."
  }, {
    heading: "supported-languages",
    content: `For a full list of supported translation languages and their parameter values, see
Supported languages.`
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implementation",
    content: "Implementation"
  }, {
    id: "sample-request",
    content: "Sample request"
  }, {
    id: "sample-response",
    content: "Sample response"
  }, {
    id: "supported-languages",
    content: "Supported languages"
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
  url: "#implementation",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#sample-request",
  title: _jsx(_Fragment, {
    children: "Sample request"
  })
}, {
  depth: 3,
  url: "#sample-response",
  title: _jsx(_Fragment, {
    children: "Sample response"
  })
}, {
  depth: 2,
  url: "#supported-languages",
  title: _jsx(_Fragment, {
    children: "Supported languages"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "In addition to transcribing the host's audio in real time, Real-Time STT also supports translation during transcription. For example, in an international conference use-case, you can transcribe the host's speech, translate the transcribed content, and then push both the original text and the translation back to the channel as subtitles."
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsx(_components.p, {
      children: "Following are the key features of real-time translation:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Instant translation"
          }), `
Live speech-to-text translation to keep conversations flowing seamlessly in real-time communication or live streaming.`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Multi-language support"
          }), `
Manage multilingual interactions with speech translation from up to 4 source languages into 10 target languages for each source.`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "High accuracy"
          }), `
Advanced Speech Recognition (ASR) captures spoken language and converts it accurately to text using sophisticated recognition technologies.`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Translated captions"
          }), `
Live captions are continually updated during speech, providing readable, translated text. Video Text Track (VTT) files can be stored in the cloud for future reference, AI analysis, or compliance.`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Ultra-low Latency translation"
          }), `
Seamless translation with an end-to-start latency of under 1 second and average end-to-end latency of under 3 seconds.`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "LLM integration"
          }), `
Process transcribed text using large language models (LLMs) to generate translation text, enhancing the Quality of Experience (QoE) to match that of a native speaker. Incorporate additional AI services to improve accuracy and reduce latency.`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "This page shows you how to set up translation of the transcribed content when starting a transcription task."
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsxs(_components.p, {
      children: ["To follow this guide, first implement basic speech-to-text transcription by following the ", _jsx(_components.a, {
        href: "../../get-started/quickstart",
        children: "Rest quickstart"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "implementation",
      children: "Implementation"
    }), `
`, _jsxs(_components.p, {
      children: ["When calling ", _jsx(_components.code, {
        children: "start"
      }), " to start a transcription task, set ", _jsx(_components.code, {
        children: "translateConfig"
      }), " to translate the transcribed text content."]
    }), `
`, _jsx(_components.h3, {
      id: "sample-request",
      children: "Sample request"
    }), `
`, _jsxs(_components.p, {
      children: ["The following example shows you how to set up translation when transcribing. The example includes the URL, header, and body. To record and encrypt at the same time in the transcription task, refer to ", _jsx(_components.a, {
        href: "../process-transcription-data/record-captions",
        children: "Record captions"
      }), " and ", _jsx(_components.a, {
        href: "../process-transcription-data/encrypt-captions",
        children: "Encrypt captions"
      }), "."]
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
              children: " --location"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --request"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " POST"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'https://api.agora.io/api/speech-to-text/v1/projects/{appid}/join'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "--header "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'Content-Type: application/json'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "--header "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'Accept: application/json'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "--header "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'Authorization: <credentials>'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "--data "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'{"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "name": "unique-agent-id",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "languages": ['
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "en-US"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "    ],"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "maxIdleTime": 50,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "rtcConfig": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "channelName": "<YourChannelName>",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "subBotUid": "<YourSubscribeUid>",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "pubBotUid": "<YourPublishUid>",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "subscribeAudioUids": ["123", "456"]'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "    },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "translateConfig": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "languages": ['
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "            {"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "source": "en-US",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "target": ['
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                    "ar-SA",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                    "id-ID",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                    "fr-FR",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                    "ja-JP"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "                ]"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "            }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "        ]"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "    }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "}'"
            })
          })]
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Parameter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "source"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "string array"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The source language for the translation."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "target"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "array"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The target languages for translation. You can configure up to 10 target languages per source language. See ", _jsx(_components.a, {
              href: "./translation#supported-languages",
              children: "Supported Languages"
            })]
          })]
        })]
      })]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "A single transcription task supports translating up to 5 speakers simultaneously."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Single-language input"
              }), ": If you set the source language to a single language, the target language must be different, otherwise an error is returned. For example, if you set the source language to English, you cannot set the target language to English."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Mixed-language input"
              }), ": If you set the source language to mixed-language input, you can set the target language to one of the source languages. For example, if you set the source languages to Chinese and English, setting the target language to English translates both into English."]
            }), `
`]
          }), `
`]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "sample-response",
      children: "Sample response"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "agent_id"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"4xxxxx8f21486930fcb77a805af20752"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "create_ts"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1730974708"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "status"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"RUNNING"'
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
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter Name"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agent_id"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The ID of the agent."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "create_ts"
            })
          }), _jsx(_components.td, {
            children: "Integer"
          }), _jsx(_components.td, {
            children: "The Unix timestamp (seconds) when the agent was created."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "status"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "Agent Status:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "IDLE"
                }), ": The agent is not initialized."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "STARTING"
                }), ": The agent is starting."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "RUNNING"
                }), ": The agent is running."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "STOPPING"
                }), ": The agent is exiting."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "STOPPED"
                }), ": The agent exited successfully."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "RECOVERING"
                }), ": The agent is recovering."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "FAILED"
                }), ": Agent exit failed."]
              }), `
`]
            })]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["To ", _jsx(_components.code, {
        children: "query"
      }), ", ", _jsx(_components.code, {
        children: "update"
      }), ", or ", _jsx(_components.code, {
        children: "stop"
      }), " the transcription task, refer to the ", _jsx(_components.a, {
        href: "../../get-started/quickstart",
        children: "Rest quickstart"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "supported-languages",
      children: "Supported languages"
    }), `
`, _jsxs(_components.p, {
      children: [`For a full list of supported translation languages and their parameter values, see
`, _jsx(_components.a, {
        href: "../../reference/supported-languages#real-time-translation",
        children: "Supported languages"
      }), "."]
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
