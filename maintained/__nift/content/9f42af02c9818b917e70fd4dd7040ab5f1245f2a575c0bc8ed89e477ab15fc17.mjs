import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Release notes",
  description: "New features, improvements and resolved issues for Real-time STT."
};
export let _markdown = `

## Releases [#releases]

<Accordions type="multiple">
  <Accordion title="v7.2.3" id="v723" headingLevel="3" value="v723">
    Released on July 30, 2026

    #### New features [#new-features]

    Included in this release:

    * **New webhook event for an expiring RTC Token**

      This version adds the [\`104 token will expire\`](/en/api-reference/api-ref/speech-to-text/api-callback-service#event-104-token-will-expire) event. The Notifications service sends this event to your server when the RTC Token used by the Real-Time STT engine has 30 seconds remaining before it expires. Agora does not send this event if the RTC Token's validity period is 30 seconds or less. This event provides advance notification only; it does not end the task or change the task's final status.

    #### Upgrade notes [#upgrade-notes]

    * **Updated idle timeout and maximum task lifetime rules**

      This version updates the rules for the [\`maxIdleTime\`](/en/api-reference/api-ref/speech-to-text/join) parameter: the valid range changes to \`[0,259200]\` seconds, and setting \`maxIdleTime\` to \`0\` disables automatic termination due to idle time.

      Independent of \`maxIdleTime\`, every task also has a maximum lifetime, capped at 72 hours. When a task reaches this limit, Agora terminates it, even if \`maxIdleTime\` is \`0\`. When a task exits because it reached the maximum lifetime, the [\`102 agent left\`](/en/api-reference/api-ref/speech-to-text/api-callback-service#event-102-agent-left) event returns \`Task exceeded maximum lifetime\` in the \`message\` field.

    * **Transcription and translation results can return stable and interim segments together**

      Transcription and translation results can now contain both a stabilized prefix segment and a segment that may still change within the same update. To support this, the \`transcript\` and \`translation\` messages add a new \`results[]\` field that returns one or more segments. For a single segment, \`results[]\` has a length of \`1\`; for a mixed result, \`results[]\` can have a length greater than \`1\`.

      If your client uses the JSON protocol, iterate over \`results[]\` to process each segment, and handle messages where \`results[]\` is an empty array. The Protobuf protocol fields are unchanged, but a single message can now also carry multiple segments. For field descriptions and examples, see [JSON protocol data structure](/en/realtime-media/speech-to-text/build/process-transcription-data/parse-data#json-protocol-data-structure).
  </Accordion>

  <Accordion title="v7.2.2" id="v722" headingLevel="3" value="v722">
    Released on May 18, 2026

    #### New features [#new-features-1]

    Included in this release:

    * **Support for additional languages**

      This version expands the supported language lists for real-time transcription and real-time translation. See [Supported languages](./supported-languages) for the full list.

    #### Upgrade notes [#upgrade-notes-1]

    * **Updated target language configuration rules for real-time translation**

      This version updates the rules for configuring source and target languages in real-time translation, for both single-language and mixed-language input scenarios:

      * **Single-language input**: If you set the source language to a single language, the target language must be different, otherwise an error is returned. For example, if you set the source language to English, you cannot set the target language to English.

      * **Mixed-language input**: If you set the source language to mixed-language input, you can set the target language to one of the source languages. For example, if you set the source languages to Spanish and English, setting the target language to English translates both into English.
  </Accordion>

  <Accordion title="v7.2.1" id="v721" headingLevel="3" value="v721">
    Released on April 20, 2026

    #### New Features [#new-features-2]

    Included in this release:

    * **Support for caption storage**

      This version adds support for writing recorded subtitles to standard S3-compatible object storage. You can configure parameters such as \`endpoint\`, \`type\`, and \`provider\` in the \`captionConfig.extensionParams\` of the transcription request to connect to S3-compatible storage services such as MinIO, as well as some self-hosted object storage. See [Record captions](../build/process-transcription-data/record-captions) for details.

    * **Agent list API**

      This version adds a [List Real-time STT agents](../../../api-reference/speech-to-text/restful/list) API. Use it to retrieve real-time transcription and translation tasks that meet specified criteria by channel, time range, and task status.
  </Accordion>

  <Accordion title="v7.2" id="v72" headingLevel="3" value="v72">
    Released on March 30, 2026

    #### New Features [#new-features-3]

    Included in this release:

    * **Keywords functionality**

      The transcription API now supports configuring \`keywords\` to improve the recognition accuracy of specific words such as proper nouns and industry terms. You can configure up to 500 keywords per request. To specify keywords, pass the list in the \`keywords\` parameter of the request body when creating a transcription task or real-time transcription service.

    * **Unique \`sentence_id\`**

      When parsing transcription data, each subtitle carries a unique identifier \`sentence_id\`. When both original and translated subtitles are enabled, use this ID to match original and translated subtitles for the same sentence, ensuring accurate subtitle alignment.
  </Accordion>

  <Accordion title="v7.0" id="v70" headingLevel="3" value="v70">
    Released on May 1, 2025

    #### Improvements [#improvements]

    This release includes the following enhancements:

    * Supports updating the configuration of the STT agent.
    * Enhances the scalability of STT by supporting multiple endpoints.
    * API deprecations. Refer to the API reference for details.
  </Accordion>
</Accordions>
`;
export let structuredData = {
  contents: [{
    heading: "releases",
    content: "Released on July 30, 2026"
  }, {
    heading: "new-features",
    content: "Included in this release:"
  }, {
    heading: "new-features",
    content: "**New webhook event for an expiring RTC Token**"
  }, {
    heading: "new-features",
    content: "This version adds the `104 token will expire` event. The Notifications service sends this event to your server when the RTC Token used by the Real-Time STT engine has 30 seconds remaining before it expires. Agora does not send this event if the RTC Token's validity period is 30 seconds or less. This event provides advance notification only; it does not end the task or change the task's final status."
  }, {
    heading: "upgrade-notes",
    content: "**Updated idle timeout and maximum task lifetime rules**"
  }, {
    heading: "upgrade-notes",
    content: "This version updates the rules for the `maxIdleTime` parameter: the valid range changes to `[0,259200]` seconds, and setting `maxIdleTime` to `0` disables automatic termination due to idle time."
  }, {
    heading: "upgrade-notes",
    content: "Independent of `maxIdleTime`, every task also has a maximum lifetime, capped at 72 hours. When a task reaches this limit, Agora terminates it, even if `maxIdleTime` is `0`. When a task exits because it reached the maximum lifetime, the `102 agent left` event returns `Task exceeded maximum lifetime` in the `message` field."
  }, {
    heading: "upgrade-notes",
    content: "**Transcription and translation results can return stable and interim segments together**"
  }, {
    heading: "upgrade-notes",
    content: "Transcription and translation results can now contain both a stabilized prefix segment and a segment that may still change within the same update. To support this, the `transcript` and `translation` messages add a new `results[]` field that returns one or more segments. For a single segment, `results[]` has a length of `1`; for a mixed result, `results[]` can have a length greater than `1`."
  }, {
    heading: "upgrade-notes",
    content: "If your client uses the JSON protocol, iterate over `results[]` to process each segment, and handle messages where `results[]` is an empty array. The Protobuf protocol fields are unchanged, but a single message can now also carry multiple segments. For field descriptions and examples, see JSON protocol data structure."
  }, {
    heading: "upgrade-notes",
    content: "Released on May 18, 2026"
  }, {
    heading: "new-features-1",
    content: "Included in this release:"
  }, {
    heading: "new-features-1",
    content: "**Support for additional languages**"
  }, {
    heading: "new-features-1",
    content: "This version expands the supported language lists for real-time transcription and real-time translation. See Supported languages for the full list."
  }, {
    heading: "upgrade-notes-1",
    content: "**Updated target language configuration rules for real-time translation**"
  }, {
    heading: "upgrade-notes-1",
    content: "This version updates the rules for configuring source and target languages in real-time translation, for both single-language and mixed-language input scenarios:"
  }, {
    heading: "upgrade-notes-1",
    content: "**Single-language input**: If you set the source language to a single language, the target language must be different, otherwise an error is returned. For example, if you set the source language to English, you cannot set the target language to English."
  }, {
    heading: "upgrade-notes-1",
    content: "**Mixed-language input**: If you set the source language to mixed-language input, you can set the target language to one of the source languages. For example, if you set the source languages to Spanish and English, setting the target language to English translates both into English."
  }, {
    heading: "upgrade-notes-1",
    content: "Released on April 20, 2026"
  }, {
    heading: "new-features-2",
    content: "Included in this release:"
  }, {
    heading: "new-features-2",
    content: "**Support for caption storage**"
  }, {
    heading: "new-features-2",
    content: "This version adds support for writing recorded subtitles to standard S3-compatible object storage. You can configure parameters such as `endpoint`, `type`, and `provider` in the `captionConfig.extensionParams` of the transcription request to connect to S3-compatible storage services such as MinIO, as well as some self-hosted object storage. See Record captions for details."
  }, {
    heading: "new-features-2",
    content: "**Agent list API**"
  }, {
    heading: "new-features-2",
    content: "This version adds a List Real-time STT agents API. Use it to retrieve real-time transcription and translation tasks that meet specified criteria by channel, time range, and task status."
  }, {
    heading: "new-features-2",
    content: "Released on March 30, 2026"
  }, {
    heading: "new-features-3",
    content: "Included in this release:"
  }, {
    heading: "new-features-3",
    content: "**Keywords functionality**"
  }, {
    heading: "new-features-3",
    content: "The transcription API now supports configuring `keywords` to improve the recognition accuracy of specific words such as proper nouns and industry terms. You can configure up to 500 keywords per request. To specify keywords, pass the list in the `keywords` parameter of the request body when creating a transcription task or real-time transcription service."
  }, {
    heading: "new-features-3",
    content: "**Unique `sentence_id`**"
  }, {
    heading: "new-features-3",
    content: "When parsing transcription data, each subtitle carries a unique identifier `sentence_id`. When both original and translated subtitles are enabled, use this ID to match original and translated subtitles for the same sentence, ensuring accurate subtitle alignment."
  }, {
    heading: "new-features-3",
    content: "Released on May 1, 2025"
  }, {
    heading: "improvements",
    content: "This release includes the following enhancements:"
  }, {
    heading: "improvements",
    content: "Supports updating the configuration of the STT agent."
  }, {
    heading: "improvements",
    content: "Enhances the scalability of STT by supporting multiple endpoints."
  }, {
    heading: "improvements",
    content: "API deprecations. Refer to the API reference for details."
  }],
  headings: [{
    id: "releases",
    content: "Releases"
  }, {
    id: "new-features",
    content: "New features"
  }, {
    id: "upgrade-notes",
    content: "Upgrade notes"
  }, {
    id: "new-features-1",
    content: "New features"
  }, {
    id: "upgrade-notes-1",
    content: "Upgrade notes"
  }, {
    id: "new-features-2",
    content: "New Features"
  }, {
    id: "new-features-3",
    content: "New Features"
  }, {
    id: "improvements",
    content: "Improvements"
  }]
};
export let toc = [{
  depth: 2,
  url: "#releases",
  title: _jsx(_Fragment, {
    children: "Releases"
  })
}, {
  depth: 4,
  url: "#new-features",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#upgrade-notes",
  title: _jsx(_Fragment, {
    children: "Upgrade notes"
  })
}, {
  depth: 4,
  url: "#new-features-1",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#upgrade-notes-1",
  title: _jsx(_Fragment, {
    children: "Upgrade notes"
  })
}, {
  depth: 4,
  url: "#new-features-2",
  title: _jsx(_Fragment, {
    children: "New Features"
  })
}, {
  depth: 4,
  url: "#new-features-3",
  title: _jsx(_Fragment, {
    children: "New Features"
  })
}, {
  depth: 4,
  url: "#improvements",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h4: "h4",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { Accordion, Accordions } = _components;
  if (!Accordion)
    _missingMdxReference("Accordion", true);
  if (!Accordions)
    _missingMdxReference("Accordions", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "releases",
      children: "Releases"
    }), `
`, _jsxs(Accordions, {
      type: "multiple",
      openFirst: true,
      children: [_jsxs(Accordion, {
        title: "v7.2.3",
        id: "v723",
        headingLevel: 3,
        value: "v723",
        children: [_jsx(_components.p, {
          children: "Released on July 30, 2026"
        }), _jsx(_components.h4, {
          id: "new-features",
          children: "New features"
        }), _jsx(_components.p, {
          children: "Included in this release:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New webhook event for an expiring RTC Token"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["This version adds the ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/speech-to-text/api-callback-service#event-104-token-will-expire",
                children: _jsx(_components.code, {
                  children: "104 token will expire"
                })
              }), " event. The Notifications service sends this event to your server when the RTC Token used by the Real-Time STT engine has 30 seconds remaining before it expires. Agora does not send this event if the RTC Token's validity period is 30 seconds or less. This event provides advance notification only; it does not end the task or change the task's final status."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "upgrade-notes",
          children: "Upgrade notes"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Updated idle timeout and maximum task lifetime rules"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["This version updates the rules for the ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/speech-to-text/join",
                children: _jsx(_components.code, {
                  children: "maxIdleTime"
                })
              }), " parameter: the valid range changes to ", _jsx(_components.code, {
                children: "[0,259200]"
              }), " seconds, and setting ", _jsx(_components.code, {
                children: "maxIdleTime"
              }), " to ", _jsx(_components.code, {
                children: "0"
              }), " disables automatic termination due to idle time."]
            }), `
`, _jsxs(_components.p, {
              children: ["Independent of ", _jsx(_components.code, {
                children: "maxIdleTime"
              }), ", every task also has a maximum lifetime, capped at 72 hours. When a task reaches this limit, Agora terminates it, even if ", _jsx(_components.code, {
                children: "maxIdleTime"
              }), " is ", _jsx(_components.code, {
                children: "0"
              }), ". When a task exits because it reached the maximum lifetime, the ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/speech-to-text/api-callback-service#event-102-agent-left",
                children: _jsx(_components.code, {
                  children: "102 agent left"
                })
              }), " event returns ", _jsx(_components.code, {
                children: "Task exceeded maximum lifetime"
              }), " in the ", _jsx(_components.code, {
                children: "message"
              }), " field."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Transcription and translation results can return stable and interim segments together"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Transcription and translation results can now contain both a stabilized prefix segment and a segment that may still change within the same update. To support this, the ", _jsx(_components.code, {
                children: "transcript"
              }), " and ", _jsx(_components.code, {
                children: "translation"
              }), " messages add a new ", _jsx(_components.code, {
                children: "results[]"
              }), " field that returns one or more segments. For a single segment, ", _jsx(_components.code, {
                children: "results[]"
              }), " has a length of ", _jsx(_components.code, {
                children: "1"
              }), "; for a mixed result, ", _jsx(_components.code, {
                children: "results[]"
              }), " can have a length greater than ", _jsx(_components.code, {
                children: "1"
              }), "."]
            }), `
`, _jsxs(_components.p, {
              children: ["If your client uses the JSON protocol, iterate over ", _jsx(_components.code, {
                children: "results[]"
              }), " to process each segment, and handle messages where ", _jsx(_components.code, {
                children: "results[]"
              }), " is an empty array. The Protobuf protocol fields are unchanged, but a single message can now also carry multiple segments. For field descriptions and examples, see ", _jsx(_components.a, {
                href: "/en/realtime-media/speech-to-text/build/process-transcription-data/parse-data#json-protocol-data-structure",
                children: "JSON protocol data structure"
              }), "."]
            }), `
`]
          }), `
`]
        })]
      }), _jsxs(Accordion, {
        title: "v7.2.2",
        id: "v722",
        headingLevel: 3,
        value: "v722",
        children: [_jsx(_components.p, {
          children: "Released on May 18, 2026"
        }), _jsx(_components.h4, {
          id: "new-features-1",
          children: "New features"
        }), _jsx(_components.p, {
          children: "Included in this release:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Support for additional languages"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["This version expands the supported language lists for real-time transcription and real-time translation. See ", _jsx(_components.a, {
                href: "./supported-languages",
                children: "Supported languages"
              }), " for the full list."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "upgrade-notes-1",
          children: "Upgrade notes"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Updated target language configuration rules for real-time translation"
              })
            }), `
`, _jsx(_components.p, {
              children: "This version updates the rules for configuring source and target languages in real-time translation, for both single-language and mixed-language input scenarios:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
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
                  }), ": If you set the source language to mixed-language input, you can set the target language to one of the source languages. For example, if you set the source languages to Spanish and English, setting the target language to English translates both into English."]
                }), `
`]
              }), `
`]
            }), `
`]
          }), `
`]
        })]
      }), _jsxs(Accordion, {
        title: "v7.2.1",
        id: "v721",
        headingLevel: 3,
        value: "v721",
        children: [_jsx(_components.p, {
          children: "Released on April 20, 2026"
        }), _jsx(_components.h4, {
          id: "new-features-2",
          children: "New Features"
        }), _jsx(_components.p, {
          children: "Included in this release:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Support for caption storage"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["This version adds support for writing recorded subtitles to standard S3-compatible object storage. You can configure parameters such as ", _jsx(_components.code, {
                children: "endpoint"
              }), ", ", _jsx(_components.code, {
                children: "type"
              }), ", and ", _jsx(_components.code, {
                children: "provider"
              }), " in the ", _jsx(_components.code, {
                children: "captionConfig.extensionParams"
              }), " of the transcription request to connect to S3-compatible storage services such as MinIO, as well as some self-hosted object storage. See ", _jsx(_components.a, {
                href: "../build/process-transcription-data/record-captions",
                children: "Record captions"
              }), " for details."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Agent list API"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["This version adds a ", _jsx(_components.a, {
                href: "../../../api-reference/speech-to-text/restful/list",
                children: "List Real-time STT agents"
              }), " API. Use it to retrieve real-time transcription and translation tasks that meet specified criteria by channel, time range, and task status."]
            }), `
`]
          }), `
`]
        })]
      }), _jsxs(Accordion, {
        title: "v7.2",
        id: "v72",
        headingLevel: 3,
        value: "v72",
        children: [_jsx(_components.p, {
          children: "Released on March 30, 2026"
        }), _jsx(_components.h4, {
          id: "new-features-3",
          children: "New Features"
        }), _jsx(_components.p, {
          children: "Included in this release:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Keywords functionality"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["The transcription API now supports configuring ", _jsx(_components.code, {
                children: "keywords"
              }), " to improve the recognition accuracy of specific words such as proper nouns and industry terms. You can configure up to 500 keywords per request. To specify keywords, pass the list in the ", _jsx(_components.code, {
                children: "keywords"
              }), " parameter of the request body when creating a transcription task or real-time transcription service."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsxs(_components.strong, {
                children: ["Unique ", _jsx(_components.code, {
                  children: "sentence_id"
                })]
              })
            }), `
`, _jsxs(_components.p, {
              children: ["When parsing transcription data, each subtitle carries a unique identifier ", _jsx(_components.code, {
                children: "sentence_id"
              }), ". When both original and translated subtitles are enabled, use this ID to match original and translated subtitles for the same sentence, ensuring accurate subtitle alignment."]
            }), `
`]
          }), `
`]
        })]
      }), _jsxs(Accordion, {
        title: "v7.0",
        id: "v70",
        headingLevel: 3,
        value: "v70",
        children: [_jsx(_components.p, {
          children: "Released on May 1, 2025"
        }), _jsx(_components.h4, {
          id: "improvements",
          children: "Improvements"
        }), _jsx(_components.p, {
          children: "This release includes the following enhancements:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Supports updating the configuration of the STT agent."
          }), `
`, _jsx(_components.li, {
            children: "Enhances the scalability of STT by supporting multiple endpoints."
          }), `
`, _jsx(_components.li, {
            children: "API deprecations. Refer to the API reference for details."
          }), `
`]
        })]
      })]
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
