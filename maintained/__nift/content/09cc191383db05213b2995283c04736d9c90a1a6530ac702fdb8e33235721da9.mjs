import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Pricing",
  description: "Introduces the billing policy for Real-Time STT."
};
export let _markdown = `

Agora calculates the billing for all projects under your Agora account on a monthly basis. Billing begins once you
enable Real-Time STT.

This page explains Agora's billing policy for the Real-Time STT add-on.

<CalloutContainer type="info">
  <CalloutDescription>
    Your billing details may differ if you have signed a contract with Agora.
  </CalloutDescription>
</CalloutContainer>

## Transcription fee [#transcription-fee]

When Real-Time STT is enabled for a channel, it transcribes the audio of the active hosts. When Real-Time STT is enabled for specific hosts, it only transcribes the audio of the specified hosts and ignores others. The Real-Time STT service excludes minutes when hosts mute their audio. The audio stream is transcribed by the Real-Time STT engine and its duration is referred to as the transcription duration. Agora charges for the transcription duration of all or specified hosts in the channel. The unit price is as follows:

| Billing item           | Usage, minutes per month | Pricing, US$/1,000 minutes |
| :--------------------- | :----------------------: | :------------------------: |
| Transcription duration |          Above 0         |            16.99           |

#### Example [#example]

After you enable Real-Time STT:

* Host A speaks for 2 minutes and remains muted for 8 minutes.
* Host B speaks for 3 minutes and remains muted for 7 minutes.
* Host C speaks for 3 minutes and remains muted for 7 minutes.

In this case, the total transcription minutes are calculated as 2 (Host A) + 3 (Host B) + 3 (Host C) = 8 minutes. The period when hosts are muted is not counted towards the transcription duration.

<CalloutContainer type="info">
  <CalloutTitle>
    Note
  </CalloutTitle>

  <CalloutDescription>
    A standby fee of $0.99 per 1,000 minutes is charged if Real-Time STT is enabled and all hosts are muted.
  </CalloutDescription>
</CalloutContainer>

## Language identification fee [#language-identification-fee]

Real-Time STT supports dynamic language detection when two or more languages are enabled for a channel or specific hosts. LID fees are determined by the language configuration applied to each host:

* If the top-level \`languages\` field contains only one language, LID is not enabled and no LID fee is charged.
* If the top-level \`languages\` field contains two or more languages and \`uidLanguagesConfig\` is not set, LID is enabled and LID fees apply.
* If the top-level \`languages\` field contains two or more languages, but \`uidLanguagesConfig\` assigns only one language to each host, LID is not enabled for those hosts and no LID fee is charged for them.

The Language Identification (LID) duration is the same as the transcription duration.

| Billing item                     | Usage, minutes per month | Pricing, US$/1,000 minutes |
| :------------------------------- | :----------------------: | :------------------------: |
| Language identification duration |          Above 0         |            5.00            |

#### Example [#example-1]

* Suppose a channel exists for 10 minutes. There are three active, unmuted hosts, A, B, and C.
* If Spanish and Chinese LID is enabled for this channel at the start, the algorithm removes 8 minutes of muted audio for host A, 7 minutes for host B and 7 minutes for host C. Therefore, the transcription duration is 2 + 3 + 3 = 8 minutes. The LID duration is also 8 minutes, being the sum of 2 minutes for host A, 3 minutes for host B, and 3 minutes for host C.
* If Spanish and Chinese LID is enabled for host A, then the transcription duration and LID duration are both 2 minutes.

Notes:

* The Real-Time STT transcription duration does not change if you enable more than one language.
* If only one language is set for a channel or a specified host, language detection does not start.

## Translation fee [#translation-fee]

When you enable Real-Time Translation (Beta) for a channel or a user, transcription is activated first. The transcription text is then translated to the target languages. The translation usage minutes are the same as the transcription usage minutes. The real-time transcription and translation usage and cost is shown in your monthly invoice. The unit price is as follows:

| Billing item | Pricing, US$/1,000 minutes/Target language |
| ------------ | :----------------------------------------: |
| Translation  |                    8.99                    |

#### Example [#example-2]

After you enable Real-Time STT:

* Host A speaks Russian for 2 minutes and remains muted for 8 minutes.
* Host B speaks French for 3 minutes and remains muted for 7 minutes.
* Host C speaks Russian for 3 minutes and remains muted for 7 minutes.
* Russian and French are translated to English.

In this case, the total transcription minutes are calculated as 2 (Host A) + 3 (Host B) + 3 (Host C) = 8 minutes. The translation minutes are the same as transcription minutes. Agora charges 8 minutes transcription fee and 8 minutes translation fee.

Total cost = 8/1000\\*$16.99 + 8/1000\\*$8.99 = $0.136 + $0.072 = $0.208.

If you translate Russian and French to English and German, the translation cost is multiplied by 2:

Total cost = 8/1000\\*$16.99 + 8/1000\\*$8.99\\*2 = $0.136 + $0.144 = $0.28.

## Free-of-charge duration [#free-of-charge-duration]

Real-Time STT and Real-Time Translation share 300 free-of-charge minutes for integration and testing purposes.

* 1 minute of Real-Time STT equals 1 free-of-charge minute.
* 1 minute of Real-Time Translation equals 8.99/16.99 free-of-charge minute.

Contact [Agora Sales](mailto\\:sales@agora.io) or your AE to get a discount.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: `Agora calculates the billing for all projects under your Agora account on a monthly basis. Billing begins once you
enable Real-Time STT.`
  }, {
    heading: undefined,
    content: "This page explains Agora's billing policy for the Real-Time STT add-on."
  }, {
    heading: undefined,
    content: "Your billing details may differ if you have signed a contract with Agora."
  }, {
    heading: "transcription-fee",
    content: "When Real-Time STT is enabled for a channel, it transcribes the audio of the active hosts. When Real-Time STT is enabled for specific hosts, it only transcribes the audio of the specified hosts and ignores others. The Real-Time STT service excludes minutes when hosts mute their audio. The audio stream is transcribed by the Real-Time STT engine and its duration is referred to as the transcription duration. Agora charges for the transcription duration of all or specified hosts in the channel. The unit price is as follows:"
  }, {
    heading: "transcription-fee",
    content: "Billing item"
  }, {
    heading: "transcription-fee",
    content: "Usage, minutes per month"
  }, {
    heading: "transcription-fee",
    content: "Pricing, US$/1,000 minutes"
  }, {
    heading: "transcription-fee",
    content: "Transcription duration"
  }, {
    heading: "transcription-fee",
    content: "Above 0"
  }, {
    heading: "transcription-fee",
    content: "16.99"
  }, {
    heading: "example",
    content: "After you enable Real-Time STT:"
  }, {
    heading: "example",
    content: "Host A speaks for 2 minutes and remains muted for 8 minutes."
  }, {
    heading: "example",
    content: "Host B speaks for 3 minutes and remains muted for 7 minutes."
  }, {
    heading: "example",
    content: "Host C speaks for 3 minutes and remains muted for 7 minutes."
  }, {
    heading: "example",
    content: "In this case, the total transcription minutes are calculated as 2 (Host A) + 3 (Host B) + 3 (Host C) = 8 minutes. The period when hosts are muted is not counted towards the transcription duration."
  }, {
    heading: "example",
    content: "A standby fee of $0.99 per 1,000 minutes is charged if Real-Time STT is enabled and all hosts are muted."
  }, {
    heading: "language-identification-fee",
    content: "Real-Time STT supports dynamic language detection when two or more languages are enabled for a channel or specific hosts. LID fees are determined by the language configuration applied to each host:"
  }, {
    heading: "language-identification-fee",
    content: "If the top-level `languages` field contains only one language, LID is not enabled and no LID fee is charged."
  }, {
    heading: "language-identification-fee",
    content: "If the top-level `languages` field contains two or more languages and `uidLanguagesConfig` is not set, LID is enabled and LID fees apply."
  }, {
    heading: "language-identification-fee",
    content: "If the top-level `languages` field contains two or more languages, but `uidLanguagesConfig` assigns only one language to each host, LID is not enabled for those hosts and no LID fee is charged for them."
  }, {
    heading: "language-identification-fee",
    content: "The Language Identification (LID) duration is the same as the transcription duration."
  }, {
    heading: "language-identification-fee",
    content: "Billing item"
  }, {
    heading: "language-identification-fee",
    content: "Usage, minutes per month"
  }, {
    heading: "language-identification-fee",
    content: "Pricing, US$/1,000 minutes"
  }, {
    heading: "language-identification-fee",
    content: "Language identification duration"
  }, {
    heading: "language-identification-fee",
    content: "Above 0"
  }, {
    heading: "language-identification-fee",
    content: "5.00"
  }, {
    heading: "example-1",
    content: "Suppose a channel exists for 10 minutes. There are three active, unmuted hosts, A, B, and C."
  }, {
    heading: "example-1",
    content: "If Spanish and Chinese LID is enabled for this channel at the start, the algorithm removes 8 minutes of muted audio for host A, 7 minutes for host B and 7 minutes for host C. Therefore, the transcription duration is 2 + 3 + 3 = 8 minutes. The LID duration is also 8 minutes, being the sum of 2 minutes for host A, 3 minutes for host B, and 3 minutes for host C."
  }, {
    heading: "example-1",
    content: "If Spanish and Chinese LID is enabled for host A, then the transcription duration and LID duration are both 2 minutes."
  }, {
    heading: "example-1",
    content: "Notes:"
  }, {
    heading: "example-1",
    content: "The Real-Time STT transcription duration does not change if you enable more than one language."
  }, {
    heading: "example-1",
    content: "If only one language is set for a channel or a specified host, language detection does not start."
  }, {
    heading: "translation-fee",
    content: "When you enable Real-Time Translation (Beta) for a channel or a user, transcription is activated first. The transcription text is then translated to the target languages. The translation usage minutes are the same as the transcription usage minutes. The real-time transcription and translation usage and cost is shown in your monthly invoice. The unit price is as follows:"
  }, {
    heading: "translation-fee",
    content: "Billing item"
  }, {
    heading: "translation-fee",
    content: "Pricing, US$/1,000 minutes/Target language"
  }, {
    heading: "translation-fee",
    content: "Translation"
  }, {
    heading: "translation-fee",
    content: "8.99"
  }, {
    heading: "example-2",
    content: "After you enable Real-Time STT:"
  }, {
    heading: "example-2",
    content: "Host A speaks Russian for 2 minutes and remains muted for 8 minutes."
  }, {
    heading: "example-2",
    content: "Host B speaks French for 3 minutes and remains muted for 7 minutes."
  }, {
    heading: "example-2",
    content: "Host C speaks Russian for 3 minutes and remains muted for 7 minutes."
  }, {
    heading: "example-2",
    content: "Russian and French are translated to English."
  }, {
    heading: "example-2",
    content: "In this case, the total transcription minutes are calculated as 2 (Host A) + 3 (Host B) + 3 (Host C) = 8 minutes. The translation minutes are the same as transcription minutes. Agora charges 8 minutes transcription fee and 8 minutes translation fee."
  }, {
    heading: "example-2",
    content: "Total cost = 8/1000\\*$16.99 + 8/1000\\*$8.99 = $0.136 + $0.072 = $0.208."
  }, {
    heading: "example-2",
    content: "If you translate Russian and French to English and German, the translation cost is multiplied by 2:"
  }, {
    heading: "example-2",
    content: "Total cost = 8/1000\\*$16.99 + 8/1000\\*$8.99\\*2 = $0.136 + $0.144 = $0.28."
  }, {
    heading: "free-of-charge-duration",
    content: "Real-Time STT and Real-Time Translation share 300 free-of-charge minutes for integration and testing purposes."
  }, {
    heading: "free-of-charge-duration",
    content: "1 minute of Real-Time STT equals 1 free-of-charge minute."
  }, {
    heading: "free-of-charge-duration",
    content: "1 minute of Real-Time Translation equals 8.99/16.99 free-of-charge minute."
  }, {
    heading: "free-of-charge-duration",
    content: "Contact Agora Sales or your AE to get a discount."
  }],
  headings: [{
    id: "transcription-fee",
    content: "Transcription fee"
  }, {
    id: "example",
    content: "Example"
  }, {
    id: "language-identification-fee",
    content: "Language identification fee"
  }, {
    id: "example-1",
    content: "Example"
  }, {
    id: "translation-fee",
    content: "Translation fee"
  }, {
    id: "example-2",
    content: "Example"
  }, {
    id: "free-of-charge-duration",
    content: "Free-of-charge duration"
  }]
};
export let toc = [{
  depth: 2,
  url: "#transcription-fee",
  title: _jsx(_Fragment, {
    children: "Transcription fee"
  })
}, {
  depth: 4,
  url: "#example",
  title: _jsx(_Fragment, {
    children: "Example"
  })
}, {
  depth: 2,
  url: "#language-identification-fee",
  title: _jsx(_Fragment, {
    children: "Language identification fee"
  })
}, {
  depth: 4,
  url: "#example-1",
  title: _jsx(_Fragment, {
    children: "Example"
  })
}, {
  depth: 2,
  url: "#translation-fee",
  title: _jsx(_Fragment, {
    children: "Translation fee"
  })
}, {
  depth: 4,
  url: "#example-2",
  title: _jsx(_Fragment, {
    children: "Example"
  })
}, {
  depth: 2,
  url: "#free-of-charge-duration",
  title: _jsx(_Fragment, {
    children: "Free-of-charge duration"
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: `Agora calculates the billing for all projects under your Agora account on a monthly basis. Billing begins once you
enable Real-Time STT.`
    }), `
`, _jsx(_components.p, {
      children: "This page explains Agora's billing policy for the Real-Time STT add-on."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Your billing details may differ if you have signed a contract with Agora."
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "transcription-fee",
      children: "Transcription fee"
    }), `
`, _jsx(_components.p, {
      children: "When Real-Time STT is enabled for a channel, it transcribes the audio of the active hosts. When Real-Time STT is enabled for specific hosts, it only transcribes the audio of the specified hosts and ignores others. The Real-Time STT service excludes minutes when hosts mute their audio. The audio stream is transcribed by the Real-Time STT engine and its duration is referred to as the transcription duration. Agora charges for the transcription duration of all or specified hosts in the channel. The unit price is as follows:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Billing item"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Usage, minutes per month"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Pricing, US$/1,000 minutes"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Transcription duration"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Above 0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "16.99"
          })]
        })
      })]
    }), `
`, _jsx(_components.h4, {
      id: "example",
      children: "Example"
    }), `
`, _jsx(_components.p, {
      children: "After you enable Real-Time STT:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Host A speaks for 2 minutes and remains muted for 8 minutes."
      }), `
`, _jsx(_components.li, {
        children: "Host B speaks for 3 minutes and remains muted for 7 minutes."
      }), `
`, _jsx(_components.li, {
        children: "Host C speaks for 3 minutes and remains muted for 7 minutes."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "In this case, the total transcription minutes are calculated as 2 (Host A) + 3 (Host B) + 3 (Host C) = 8 minutes. The period when hosts are muted is not counted towards the transcription duration."
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "Note"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "A standby fee of $0.99 per 1,000 minutes is charged if Real-Time STT is enabled and all hosts are muted."
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "language-identification-fee",
      children: "Language identification fee"
    }), `
`, _jsx(_components.p, {
      children: "Real-Time STT supports dynamic language detection when two or more languages are enabled for a channel or specific hosts. LID fees are determined by the language configuration applied to each host:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["If the top-level ", _jsx(_components.code, {
          children: "languages"
        }), " field contains only one language, LID is not enabled and no LID fee is charged."]
      }), `
`, _jsxs(_components.li, {
        children: ["If the top-level ", _jsx(_components.code, {
          children: "languages"
        }), " field contains two or more languages and ", _jsx(_components.code, {
          children: "uidLanguagesConfig"
        }), " is not set, LID is enabled and LID fees apply."]
      }), `
`, _jsxs(_components.li, {
        children: ["If the top-level ", _jsx(_components.code, {
          children: "languages"
        }), " field contains two or more languages, but ", _jsx(_components.code, {
          children: "uidLanguagesConfig"
        }), " assigns only one language to each host, LID is not enabled for those hosts and no LID fee is charged for them."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The Language Identification (LID) duration is the same as the transcription duration."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Billing item"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Usage, minutes per month"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Pricing, US$/1,000 minutes"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Language identification duration"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Above 0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5.00"
          })]
        })
      })]
    }), `
`, _jsx(_components.h4, {
      id: "example-1",
      children: "Example"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Suppose a channel exists for 10 minutes. There are three active, unmuted hosts, A, B, and C."
      }), `
`, _jsx(_components.li, {
        children: "If Spanish and Chinese LID is enabled for this channel at the start, the algorithm removes 8 minutes of muted audio for host A, 7 minutes for host B and 7 minutes for host C. Therefore, the transcription duration is 2 + 3 + 3 = 8 minutes. The LID duration is also 8 minutes, being the sum of 2 minutes for host A, 3 minutes for host B, and 3 minutes for host C."
      }), `
`, _jsx(_components.li, {
        children: "If Spanish and Chinese LID is enabled for host A, then the transcription duration and LID duration are both 2 minutes."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Notes:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The Real-Time STT transcription duration does not change if you enable more than one language."
      }), `
`, _jsx(_components.li, {
        children: "If only one language is set for a channel or a specified host, language detection does not start."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "translation-fee",
      children: "Translation fee"
    }), `
`, _jsx(_components.p, {
      children: "When you enable Real-Time Translation (Beta) for a channel or a user, transcription is activated first. The transcription text is then translated to the target languages. The translation usage minutes are the same as the transcription usage minutes. The real-time transcription and translation usage and cost is shown in your monthly invoice. The unit price is as follows:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Billing item"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Pricing, US$/1,000 minutes/Target language"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Translation"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "8.99"
          })]
        })
      })]
    }), `
`, _jsx(_components.h4, {
      id: "example-2",
      children: "Example"
    }), `
`, _jsx(_components.p, {
      children: "After you enable Real-Time STT:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Host A speaks Russian for 2 minutes and remains muted for 8 minutes."
      }), `
`, _jsx(_components.li, {
        children: "Host B speaks French for 3 minutes and remains muted for 7 minutes."
      }), `
`, _jsx(_components.li, {
        children: "Host C speaks Russian for 3 minutes and remains muted for 7 minutes."
      }), `
`, _jsx(_components.li, {
        children: "Russian and French are translated to English."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "In this case, the total transcription minutes are calculated as 2 (Host A) + 3 (Host B) + 3 (Host C) = 8 minutes. The translation minutes are the same as transcription minutes. Agora charges 8 minutes transcription fee and 8 minutes translation fee."
    }), `
`, _jsx(_components.p, {
      children: "Total cost = 8/1000*$16.99 + 8/1000*$8.99 = $0.136 + $0.072 = $0.208."
    }), `
`, _jsx(_components.p, {
      children: "If you translate Russian and French to English and German, the translation cost is multiplied by 2:"
    }), `
`, _jsx(_components.p, {
      children: "Total cost = 8/1000*$16.99 + 8/1000*$8.99*2 = $0.136 + $0.144 = $0.28."
    }), `
`, _jsx(_components.h2, {
      id: "free-of-charge-duration",
      children: "Free-of-charge duration"
    }), `
`, _jsx(_components.p, {
      children: "Real-Time STT and Real-Time Translation share 300 free-of-charge minutes for integration and testing purposes."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "1 minute of Real-Time STT equals 1 free-of-charge minute."
      }), `
`, _jsx(_components.li, {
        children: "1 minute of Real-Time Translation equals 8.99/16.99 free-of-charge minute."
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["Contact ", _jsx(_components.a, {
        href: "mailto:sales@agora.io",
        children: "Agora Sales"
      }), " or your AE to get a discount."]
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
