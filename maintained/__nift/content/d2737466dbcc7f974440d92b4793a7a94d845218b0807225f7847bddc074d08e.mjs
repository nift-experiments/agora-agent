import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Required fields",
  description: "Learn where TEN message schemas can use required fields and how graph validation checks them."
};
export let _markdown = '\n\nIn the TEN framework, only message schemas can include `required` fields. Extension properties cannot include `required` fields.\n\nThis means that schemas for `cmd_in`, `cmd_out`, `data_in`, `data_out`, `audio_frame_in`, `audio_frame_out`, `video_frame_in`, and `video_frame_out` can define `required` fields.\n\nFor message schemas, the `required` field is valid only in the following three locations:\n\n* At the same level as `property` in `foo_in` or `foo_out`\n* Inside the `property` of `result` in `foo_in` or `foo_out`\n* Within a `property` of type `object` (for nested structures)\n\nExamples of these scenarios are shown below.\n\n```json\n{\n  "api": {\n    "cmd_in": [\n      {\n        "name": "foo",\n        "property": {\n          "a": {\n            "type": "int8"\n          },\n          "b": {\n            "type": "uint8"\n          },\n          "c": {\n            "type": "array",\n            "items": {\n              "type": "string"\n            }\n          },\n          "d": {\n            "type": "object",\n            "properties": {\n              "e": {\n                "type": "float32"\n              }\n            }\n          },\n          "exampleObject": {\n            "type": "object",\n            "properties": {\n              "foo": {\n                "type": "int32"\n              },\n              "bar": {\n                "type": "string"\n              }\n            },\n            "required": ["foo"] // 3.\n          }\n        },\n        "required": ["a", "b"], // 1.\n        "result": {\n          "property": {\n            "ccc": {\n              "type": "buf"\n            },\n            "detail": {\n              "type": "buf"\n            }\n          },\n          "required": ["ccc"] // 2.\n        }\n      }\n    ]\n  }\n}\n```\n\n## Use of `required` [#use-of-required]\n\n### Message sent from an extension [#message-sent-from-an-extension]\n\nWhen an extension calls `send_foo(msg_X)` or `return_result(result_Y)`, the framework checks `msg_X` or `result_Y` against their respective schemas in the extension. If `msg_X` or `result_Y` is missing any of the fields marked as `required` in the schema, the schema check fails, indicating an error.\n\nThe handling of these three scenarios is identical, though they are discussed separately:\n\n1. If `send_foo` is sending a TEN command and the schema check fails:\n\n   `send_foo` returns false immediately. If an error parameter is provided, it includes the schema check failure error message.\n\n2. If `return_result` fails the schema check:\n\n   `return_result` returns false. If an error parameter is provided, it includes the schema check failure error message.\n\n3. If `send_foo` is sending a general data-like TEN message, such as data, audio frame, or video frame:\n\n   `send_foo` returns false. If an error parameter is provided, it includes the schema check failure error message.\n\n### Message received by an extension [#message-received-by-an-extension]\n\nBefore TEN runtime passes `msg_X` or `result_Y` to an extension\'s `on_foo()` or result handler, it checks whether all `required` fields defined in the schema of `msg_X` or `result_Y` are present. If a `required` field is missing, the schema check fails.\n\n1. If the incoming message is a TEN command:\n\n   `ten_runtime` returns an error `status_code` result to the previous extension.\n\n2. If the incoming message is a TEN command result:\n\n   `ten_runtime` changes the `status_code` of the result to error, adds the missing `required` fields, and sets the values of these fields to their default values based on their type.\n\n3. If the incoming message is a TEN data-like message:\n\n   `ten_runtime` simply drops the data-like message.\n\n## Behavior of graph check [#behavior-of-graph-check]\n\nTEN Manager has a function called Graph Check, which is used to verify the semantic correctness of a graph. The checks related to required fields are as follows:\n\n1. For a connection, the `required` fields of the source must be a superset of the `required` fields of the destination.\n2. If the same field name appears in both the source and destination `required` fields, their types must be compatible.\n';
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "In the TEN framework, only message schemas can include `required` fields. Extension properties cannot include `required` fields."
  }, {
    heading: undefined,
    content: "This means that schemas for `cmd_in`, `cmd_out`, `data_in`, `data_out`, `audio_frame_in`, `audio_frame_out`, `video_frame_in`, and `video_frame_out` can define `required` fields."
  }, {
    heading: undefined,
    content: "For message schemas, the `required` field is valid only in the following three locations:"
  }, {
    heading: undefined,
    content: "At the same level as `property` in `foo_in` or `foo_out`"
  }, {
    heading: undefined,
    content: "Inside the `property` of `result` in `foo_in` or `foo_out`"
  }, {
    heading: undefined,
    content: "Within a `property` of type `object` (for nested structures)"
  }, {
    heading: undefined,
    content: "Examples of these scenarios are shown below."
  }, {
    heading: "message-sent-from-an-extension",
    content: "When an extension calls `send_foo(msg_X)` or `return_result(result_Y)`, the framework checks `msg_X` or `result_Y` against their respective schemas in the extension. If `msg_X` or `result_Y` is missing any of the fields marked as `required` in the schema, the schema check fails, indicating an error."
  }, {
    heading: "message-sent-from-an-extension",
    content: "The handling of these three scenarios is identical, though they are discussed separately:"
  }, {
    heading: "message-sent-from-an-extension",
    content: "If `send_foo` is sending a TEN command and the schema check fails:"
  }, {
    heading: "message-sent-from-an-extension",
    content: "`send_foo` returns false immediately. If an error parameter is provided, it includes the schema check failure error message."
  }, {
    heading: "message-sent-from-an-extension",
    content: "If `return_result` fails the schema check:"
  }, {
    heading: "message-sent-from-an-extension",
    content: "`return_result` returns false. If an error parameter is provided, it includes the schema check failure error message."
  }, {
    heading: "message-sent-from-an-extension",
    content: "If `send_foo` is sending a general data-like TEN message, such as data, audio frame, or video frame:"
  }, {
    heading: "message-sent-from-an-extension",
    content: "`send_foo` returns false. If an error parameter is provided, it includes the schema check failure error message."
  }, {
    heading: "message-received-by-an-extension",
    content: "Before TEN runtime passes `msg_X` or `result_Y` to an extension's `on_foo()` or result handler, it checks whether all `required` fields defined in the schema of `msg_X` or `result_Y` are present. If a `required` field is missing, the schema check fails."
  }, {
    heading: "message-received-by-an-extension",
    content: "If the incoming message is a TEN command:"
  }, {
    heading: "message-received-by-an-extension",
    content: "`ten_runtime` returns an error `status_code` result to the previous extension."
  }, {
    heading: "message-received-by-an-extension",
    content: "If the incoming message is a TEN command result:"
  }, {
    heading: "message-received-by-an-extension",
    content: "`ten_runtime` changes the `status_code` of the result to error, adds the missing `required` fields, and sets the values of these fields to their default values based on their type."
  }, {
    heading: "message-received-by-an-extension",
    content: "If the incoming message is a TEN data-like message:"
  }, {
    heading: "message-received-by-an-extension",
    content: "`ten_runtime` simply drops the data-like message."
  }, {
    heading: "behavior-of-graph-check",
    content: "TEN Manager has a function called Graph Check, which is used to verify the semantic correctness of a graph. The checks related to required fields are as follows:"
  }, {
    heading: "behavior-of-graph-check",
    content: "For a connection, the `required` fields of the source must be a superset of the `required` fields of the destination."
  }, {
    heading: "behavior-of-graph-check",
    content: "If the same field name appears in both the source and destination `required` fields, their types must be compatible."
  }],
  headings: [{
    id: "use-of-required",
    content: "Use of `required`"
  }, {
    id: "message-sent-from-an-extension",
    content: "Message sent from an extension"
  }, {
    id: "message-received-by-an-extension",
    content: "Message received by an extension"
  }, {
    id: "behavior-of-graph-check",
    content: "Behavior of graph check"
  }]
};
export let toc = [{
  depth: 2,
  url: "#use-of-required",
  title: _jsxs(_Fragment, {
    children: ["Use of ", _jsx("code", {
      children: "required"
    })]
  })
}, {
  depth: 3,
  url: "#message-sent-from-an-extension",
  title: _jsx(_Fragment, {
    children: "Message sent from an extension"
  })
}, {
  depth: 3,
  url: "#message-received-by-an-extension",
  title: _jsx(_Fragment, {
    children: "Message received by an extension"
  })
}, {
  depth: 2,
  url: "#behavior-of-graph-check",
  title: _jsx(_Fragment, {
    children: "Behavior of graph check"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["In the TEN framework, only message schemas can include ", _jsx(_components.code, {
        children: "required"
      }), " fields. Extension properties cannot include ", _jsx(_components.code, {
        children: "required"
      }), " fields."]
    }), `
`, _jsxs(_components.p, {
      children: ["This means that schemas for ", _jsx(_components.code, {
        children: "cmd_in"
      }), ", ", _jsx(_components.code, {
        children: "cmd_out"
      }), ", ", _jsx(_components.code, {
        children: "data_in"
      }), ", ", _jsx(_components.code, {
        children: "data_out"
      }), ", ", _jsx(_components.code, {
        children: "audio_frame_in"
      }), ", ", _jsx(_components.code, {
        children: "audio_frame_out"
      }), ", ", _jsx(_components.code, {
        children: "video_frame_in"
      }), ", and ", _jsx(_components.code, {
        children: "video_frame_out"
      }), " can define ", _jsx(_components.code, {
        children: "required"
      }), " fields."]
    }), `
`, _jsxs(_components.p, {
      children: ["For message schemas, the ", _jsx(_components.code, {
        children: "required"
      }), " field is valid only in the following three locations:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["At the same level as ", _jsx(_components.code, {
          children: "property"
        }), " in ", _jsx(_components.code, {
          children: "foo_in"
        }), " or ", _jsx(_components.code, {
          children: "foo_out"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Inside the ", _jsx(_components.code, {
          children: "property"
        }), " of ", _jsx(_components.code, {
          children: "result"
        }), " in ", _jsx(_components.code, {
          children: "foo_in"
        }), " or ", _jsx(_components.code, {
          children: "foo_out"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Within a ", _jsx(_components.code, {
          children: "property"
        }), " of type ", _jsx(_components.code, {
          children: "object"
        }), " (for nested structures)"]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Examples of these scenarios are shown below."
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
              children: '  "api"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "cmd_in"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "name"'
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
              children: '"foo"'
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
              children: '        "property"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '          "a"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "type"'
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
              children: '"int8"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "          },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '          "b"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "type"'
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
              children: '"uint8"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "          },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '          "c"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "type"'
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
              children: '"array"'
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
              children: '            "items"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '              "type"'
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
              children: '"string"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "          },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '          "d"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "type"'
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
              children: '"object"'
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
              children: '            "properties"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '              "e"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                "type"'
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
              children: '"float32"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "              }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "          },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '          "exampleObject"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "type"'
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
              children: '"object"'
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
              children: '            "properties"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '              "foo"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                "type"'
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
              children: '"int32"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "              },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '              "bar"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                "type"'
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
              children: '"string"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "              }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "required"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"foo"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "] "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// 3."
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "          }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "required"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"a"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"b"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "], "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// 1."
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "result"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '          "property"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "ccc"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '              "type"'
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
              children: '"buf"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "detail"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '              "type"'
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
              children: '"buf"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "          },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '          "required"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"ccc"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "] "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// 2."
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    ]"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  }"
            })
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
`, _jsxs(_components.h2, {
      id: "use-of-required",
      children: ["Use of ", _jsx(_components.code, {
        children: "required"
      })]
    }), `
`, _jsx(_components.h3, {
      id: "message-sent-from-an-extension",
      children: "Message sent from an extension"
    }), `
`, _jsxs(_components.p, {
      children: ["When an extension calls ", _jsx(_components.code, {
        children: "send_foo(msg_X)"
      }), " or ", _jsx(_components.code, {
        children: "return_result(result_Y)"
      }), ", the framework checks ", _jsx(_components.code, {
        children: "msg_X"
      }), " or ", _jsx(_components.code, {
        children: "result_Y"
      }), " against their respective schemas in the extension. If ", _jsx(_components.code, {
        children: "msg_X"
      }), " or ", _jsx(_components.code, {
        children: "result_Y"
      }), " is missing any of the fields marked as ", _jsx(_components.code, {
        children: "required"
      }), " in the schema, the schema check fails, indicating an error."]
    }), `
`, _jsx(_components.p, {
      children: "The handling of these three scenarios is identical, though they are discussed separately:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["If ", _jsx(_components.code, {
            children: "send_foo"
          }), " is sending a TEN command and the schema check fails:"]
        }), `
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "send_foo"
          }), " returns false immediately. If an error parameter is provided, it includes the schema check failure error message."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["If ", _jsx(_components.code, {
            children: "return_result"
          }), " fails the schema check:"]
        }), `
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "return_result"
          }), " returns false. If an error parameter is provided, it includes the schema check failure error message."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["If ", _jsx(_components.code, {
            children: "send_foo"
          }), " is sending a general data-like TEN message, such as data, audio frame, or video frame:"]
        }), `
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "send_foo"
          }), " returns false. If an error parameter is provided, it includes the schema check failure error message."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "message-received-by-an-extension",
      children: "Message received by an extension"
    }), `
`, _jsxs(_components.p, {
      children: ["Before TEN runtime passes ", _jsx(_components.code, {
        children: "msg_X"
      }), " or ", _jsx(_components.code, {
        children: "result_Y"
      }), " to an extension's ", _jsx(_components.code, {
        children: "on_foo()"
      }), " or result handler, it checks whether all ", _jsx(_components.code, {
        children: "required"
      }), " fields defined in the schema of ", _jsx(_components.code, {
        children: "msg_X"
      }), " or ", _jsx(_components.code, {
        children: "result_Y"
      }), " are present. If a ", _jsx(_components.code, {
        children: "required"
      }), " field is missing, the schema check fails."]
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "If the incoming message is a TEN command:"
        }), `
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "ten_runtime"
          }), " returns an error ", _jsx(_components.code, {
            children: "status_code"
          }), " result to the previous extension."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "If the incoming message is a TEN command result:"
        }), `
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "ten_runtime"
          }), " changes the ", _jsx(_components.code, {
            children: "status_code"
          }), " of the result to error, adds the missing ", _jsx(_components.code, {
            children: "required"
          }), " fields, and sets the values of these fields to their default values based on their type."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "If the incoming message is a TEN data-like message:"
        }), `
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "ten_runtime"
          }), " simply drops the data-like message."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "behavior-of-graph-check",
      children: "Behavior of graph check"
    }), `
`, _jsx(_components.p, {
      children: "TEN Manager has a function called Graph Check, which is used to verify the semantic correctness of a graph. The checks related to required fields are as follows:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["For a connection, the ", _jsx(_components.code, {
          children: "required"
        }), " fields of the source must be a superset of the ", _jsx(_components.code, {
          children: "required"
        }), " fields of the destination."]
      }), `
`, _jsxs(_components.li, {
        children: ["If the same field name appears in both the source and destination ", _jsx(_components.code, {
          children: "required"
        }), " fields, their types must be compatible."]
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
