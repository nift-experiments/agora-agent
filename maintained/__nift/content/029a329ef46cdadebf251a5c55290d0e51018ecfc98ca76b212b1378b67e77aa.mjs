import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Encrypted signature",
  description: "How to generate the signature that allows vendors to verify HTTP requests sent by Agora."
};
export let _markdown = `

The Provisioning, Usage, and Billing APIs have a request parameter named \`signature\`. This parameter is an encrypted string shared between vendors and Agora. It allows vendors to verify HTTP requests sent by Agora.

This page explains how to generate a signature.

## Overview [#overview]

The signature combines the source string (\`SourceString\`) and your secret key (\`apiSecret&\`) using an encryption algorithm, as follows:

* GET methods:

  \`\`\`text
  signature = URLEncode(Base64( HMAC-SHA1( apiSecret&, SourceString) ), "UTF-8")
  \`\`\`

* POST and PUT methods:

  \`\`\`text
  signature = Base64( HMAC-SHA1( apiSecret&, SourceString) )
  \`\`\`

After receiving the request, you need to apply the encryption algorithm to generate a signature on your own. If the generated signature is the same as the one you receive, you can verify that the request is sent by Agora.

## Generate a signature (GET) [#generate-a-signature-get]

Take the [Usage API](./usage) for example, Agora sends the following request to query usage information:

\`\`\`text
https://[host]/usage?fromTs=1619913600&toTs=1619917200&pageNum=1&apiKey=pzD5XinRSlmA64tZx81fL92YcBsJK0gd&signature={signature}
\`\`\`

For this example, the parameters used in the encryption algorithm are as follows:

| Parameter      | Value                                                                                                             |
| :------------- | :---------------------------------------------------------------------------------------------------------------- |
| \`SourceString\` | \`GET&%2Fusage&apiKey%3DpzD5XinRSlmA64tZx81fL92YcBsJK0gd%26fromTs%3D1619913600%26pageNum%3D1%26toTs%3D1619917200\`  |
| \`apiSecret\`    | \`U1SXE6k57vxVRjTomgquwC2F3tH8ziOB\` (This is for demonstration only. Your actual \`apiSecret\` should be different.) |
| \`signature\`    | \`SFVnCVlRbrZcjMPGTWVxAE4QWZ8%3D\`                                                                                  |

This section shows how to generate the signature step-by-step.

### Step 1: Construct the source string [#step-1-construct-the-source-string]

To construct \`SourceString\`, follow these steps:

1. Get the type of the HTTP request and add an "&":

   \`\`\`text
   GET&
   \`\`\`

2. In the request URL, leave only the path after \`[host]\` and before \`?\` (if any), URL-encode the resulting string (that is, \`/usage\`), and add an "&". The source string now looks like:

   \`\`\`text
   GET&%2Fusage&
   \`\`\`

3. Sequence the query parameters in the request URL except \`signature\` (that is, \`fromTs\`, \`toTs\`, and \`apiKey\`) in alphabetical ascending order in the form of \`key=value\`, and combine them using "&":

   \`\`\`text
   apiKey=pzD5XinRSlmA64tZx81fL92YcBsJK0gd&fromTs=1619913600&pageNum=1&toTs=1619917200
   \`\`\`

   URL-encode the string above and add it to the source string:

   \`\`\`text
   GET&%2Fusage&apiKey%3DpzD5XinRSlmA64tZx81fL92YcBsJK0gd%26fromTs%3D1619913600%26pageNum%3D1%26toTs%3D1619917200
   \`\`\`

### Step 2: Construct your secret key [#step-2-construct-your-secret-key]

To construct the secret key, add an “&” to the end of your apiSecret string.

For example, if the apiSecret you provide when applying to become a vendor is U1SXE6k57vxVRjTomgquwC2F3tH8ziOB, the secret key should be \`U1SXE6k57vxVRjTomgquwC2F3tH8ziOB&\`.

### Step 3: Generate the signature [#step-3-generate-the-signature]

The encryption algorithm for GET methods is as follows:

\`\`\`text
signature = URLEncode(Base64( HMAC-SHA1( apiSecret&, SourceString) ), "UTF-8")
\`\`\`

Using the \`SourceString\` and \`apiSecret&\` from previous steps, you get this signature:

\`\`\`text
SFVnCVlRbrZcjMPGTWVxAE4QWZ8%3D
\`\`\`

## Generate a signature (POST and PUT) [#generate-a-signature-post-and-put]

Take the [Provisioning API](./provisioning) for example, Agora sends the following request body:

\`\`\`json
{
    "projectId": "430892",
    "apiKey": "pzD5XinRSlmA64tZx81fL92YcBsJK0gd",
    "signature": "To be generated"
}
\`\`\`

And the request URL is:

\`\`\`text
https://[host]/customers/123456/projects/new
\`\`\`

For this example, the parameters used in the encryption algorithm are as follows:

| Parameter      | Value                                                                                                              |
| :------------- | :----------------------------------------------------------------------------------------------------------------- |
| \`SourceString\` | \`POST&%2Fcustomers%2F123456%2Fprojects%2Fnew&apiKey%3DpzD5XinRSlmA64tZx81fL92YcBsJK0gd%26projectId%3D430892\`       |
| \`apiSecret\`    | \`U1SXE6k57vxVRjTomgquwC2F3tH8ziOB\`  (This is for demonstration only. Your actual \`apiSecret\` should be different.) |
| \`signature\`    | \`YZOl2v5q3I7o0x3F13tpnkq5aDI=\`                                                                                     |

This section shows how to generate the signature step-by-step.

### Step 1: Construct the source string [#step-1-construct-the-source-string-1]

To construct \`SourceString\`, follow these steps:

1. Get the type of the HTTP request and add an "&":

   \`\`\`text
   POST&
   \`\`\`

2. In the request URL, leave only the path after \`[host]\` and before \`?\` (if any), URL-encode the resulting string (that is, \`/usage\`), and add an "&". The source string now looks like:

   \`\`\`text
   POST&%2Fcustomers%2F123456%2Fprojects%2Fnew&
   \`\`\`

3. Sequence the query parameters in the request body except \`signature\` (that is, \`projectId\` and \`apiKey\`) in alphabetical ascending order in the form of \`key=value\`, and combine them using "&":

   \`\`\`text
   apiKey=pzD5XinRSlmA64tZx81fL92YcBsJK0gd&projectId=430892
   \`\`\`

   URL-encode the string above and add it to the source string:

   \`\`\`text
   POST&%2Fcustomers%2F123456%2Fprojects%2Fnew&apiKey%3DpzD5XinRSlmA64tZx81fL92YcBsJK0gd%26projectId%3D430892
   \`\`\`

### Step 2: Construct your secret key [#step-2-construct-your-secret-key-1]

To construct the secret key, add an “&” to the end of your apiSecret string.

For example, if the apiSecret you provide when applying to become a vendor is U1SXE6k57vxVRjTomgquwC2F3tH8ziOB, the secret key should be \`U1SXE6k57vxVRjTomgquwC2F3tH8ziOB&\`.

### Step 3: Generate the signature [#step-3-generate-the-signature-1]

The encryption algorithm for POST and PUT methods is as follows:

\`\`\`text
signature = Base64( HMAC-SHA1( apiSecret&, SourceString) )
\`\`\`

Using the \`SourceString\` and \`apiSecret&\` from previous steps, you get this signature:

\`\`\`text
YZOl2v5q3I7o0x3F13tpnkq5aDI=
\`\`\`
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The Provisioning, Usage, and Billing APIs have a request parameter named `signature`. This parameter is an encrypted string shared between vendors and Agora. It allows vendors to verify HTTP requests sent by Agora."
  }, {
    heading: undefined,
    content: "This page explains how to generate a signature."
  }, {
    heading: "overview",
    content: "The signature combines the source string (`SourceString`) and your secret key (`apiSecret&`) using an encryption algorithm, as follows:"
  }, {
    heading: "overview",
    content: "GET methods:"
  }, {
    heading: "overview",
    content: "POST and PUT methods:"
  }, {
    heading: "overview",
    content: "After receiving the request, you need to apply the encryption algorithm to generate a signature on your own. If the generated signature is the same as the one you receive, you can verify that the request is sent by Agora."
  }, {
    heading: "generate-a-signature-get",
    content: "Take the Usage API for example, Agora sends the following request to query usage information:"
  }, {
    heading: "generate-a-signature-get",
    content: "For this example, the parameters used in the encryption algorithm are as follows:"
  }, {
    heading: "generate-a-signature-get",
    content: "Parameter"
  }, {
    heading: "generate-a-signature-get",
    content: "Value"
  }, {
    heading: "generate-a-signature-get",
    content: "`SourceString`"
  }, {
    heading: "generate-a-signature-get",
    content: "`GET&%2Fusage&apiKey%3DpzD5XinRSlmA64tZx81fL92YcBsJK0gd%26fromTs%3D1619913600%26pageNum%3D1%26toTs%3D1619917200`"
  }, {
    heading: "generate-a-signature-get",
    content: "`apiSecret`"
  }, {
    heading: "generate-a-signature-get",
    content: "`U1SXE6k57vxVRjTomgquwC2F3tH8ziOB` (This is for demonstration only. Your actual `apiSecret` should be different.)"
  }, {
    heading: "generate-a-signature-get",
    content: "`signature`"
  }, {
    heading: "generate-a-signature-get",
    content: "`SFVnCVlRbrZcjMPGTWVxAE4QWZ8%3D`"
  }, {
    heading: "generate-a-signature-get",
    content: "This section shows how to generate the signature step-by-step."
  }, {
    heading: "step-1-construct-the-source-string",
    content: "To construct `SourceString`, follow these steps:"
  }, {
    heading: "step-1-construct-the-source-string",
    content: 'Get the type of the HTTP request and add an "&":'
  }, {
    heading: "step-1-construct-the-source-string",
    content: 'In the request URL, leave only the path after `[host]` and before `?` (if any), URL-encode the resulting string (that is, `/usage`), and add an "&". The source string now looks like:'
  }, {
    heading: "step-1-construct-the-source-string",
    content: 'Sequence the query parameters in the request URL except `signature` (that is, `fromTs`, `toTs`, and `apiKey`) in alphabetical ascending order in the form of `key=value`, and combine them using "&":'
  }, {
    heading: "step-1-construct-the-source-string",
    content: "URL-encode the string above and add it to the source string:"
  }, {
    heading: "step-2-construct-your-secret-key",
    content: "To construct the secret key, add an “&” to the end of your apiSecret string."
  }, {
    heading: "step-2-construct-your-secret-key",
    content: "For example, if the apiSecret you provide when applying to become a vendor is U1SXE6k57vxVRjTomgquwC2F3tH8ziOB, the secret key should be `U1SXE6k57vxVRjTomgquwC2F3tH8ziOB&`."
  }, {
    heading: "step-3-generate-the-signature",
    content: "The encryption algorithm for GET methods is as follows:"
  }, {
    heading: "step-3-generate-the-signature",
    content: "Using the `SourceString` and `apiSecret&` from previous steps, you get this signature:"
  }, {
    heading: "generate-a-signature-post-and-put",
    content: "Take the Provisioning API for example, Agora sends the following request body:"
  }, {
    heading: "generate-a-signature-post-and-put",
    content: "And the request URL is:"
  }, {
    heading: "generate-a-signature-post-and-put",
    content: "For this example, the parameters used in the encryption algorithm are as follows:"
  }, {
    heading: "generate-a-signature-post-and-put",
    content: "Parameter"
  }, {
    heading: "generate-a-signature-post-and-put",
    content: "Value"
  }, {
    heading: "generate-a-signature-post-and-put",
    content: "`SourceString`"
  }, {
    heading: "generate-a-signature-post-and-put",
    content: "`POST&%2Fcustomers%2F123456%2Fprojects%2Fnew&apiKey%3DpzD5XinRSlmA64tZx81fL92YcBsJK0gd%26projectId%3D430892`"
  }, {
    heading: "generate-a-signature-post-and-put",
    content: "`apiSecret`"
  }, {
    heading: "generate-a-signature-post-and-put",
    content: "`U1SXE6k57vxVRjTomgquwC2F3tH8ziOB`  (This is for demonstration only. Your actual `apiSecret` should be different.)"
  }, {
    heading: "generate-a-signature-post-and-put",
    content: "`signature`"
  }, {
    heading: "generate-a-signature-post-and-put",
    content: "`YZOl2v5q3I7o0x3F13tpnkq5aDI=`"
  }, {
    heading: "generate-a-signature-post-and-put",
    content: "This section shows how to generate the signature step-by-step."
  }, {
    heading: "step-1-construct-the-source-string-1",
    content: "To construct `SourceString`, follow these steps:"
  }, {
    heading: "step-1-construct-the-source-string-1",
    content: 'Get the type of the HTTP request and add an "&":'
  }, {
    heading: "step-1-construct-the-source-string-1",
    content: 'In the request URL, leave only the path after `[host]` and before `?` (if any), URL-encode the resulting string (that is, `/usage`), and add an "&". The source string now looks like:'
  }, {
    heading: "step-1-construct-the-source-string-1",
    content: 'Sequence the query parameters in the request body except `signature` (that is, `projectId` and `apiKey`) in alphabetical ascending order in the form of `key=value`, and combine them using "&":'
  }, {
    heading: "step-1-construct-the-source-string-1",
    content: "URL-encode the string above and add it to the source string:"
  }, {
    heading: "step-2-construct-your-secret-key-1",
    content: "To construct the secret key, add an “&” to the end of your apiSecret string."
  }, {
    heading: "step-2-construct-your-secret-key-1",
    content: "For example, if the apiSecret you provide when applying to become a vendor is U1SXE6k57vxVRjTomgquwC2F3tH8ziOB, the secret key should be `U1SXE6k57vxVRjTomgquwC2F3tH8ziOB&`."
  }, {
    heading: "step-3-generate-the-signature-1",
    content: "The encryption algorithm for POST and PUT methods is as follows:"
  }, {
    heading: "step-3-generate-the-signature-1",
    content: "Using the `SourceString` and `apiSecret&` from previous steps, you get this signature:"
  }],
  headings: [{
    id: "overview",
    content: "Overview"
  }, {
    id: "generate-a-signature-get",
    content: "Generate a signature (GET)"
  }, {
    id: "step-1-construct-the-source-string",
    content: "Step 1: Construct the source string"
  }, {
    id: "step-2-construct-your-secret-key",
    content: "Step 2: Construct your secret key"
  }, {
    id: "step-3-generate-the-signature",
    content: "Step 3: Generate the signature"
  }, {
    id: "generate-a-signature-post-and-put",
    content: "Generate a signature (POST and PUT)"
  }, {
    id: "step-1-construct-the-source-string-1",
    content: "Step 1: Construct the source string"
  }, {
    id: "step-2-construct-your-secret-key-1",
    content: "Step 2: Construct your secret key"
  }, {
    id: "step-3-generate-the-signature-1",
    content: "Step 3: Generate the signature"
  }]
};
export let toc = [{
  depth: 2,
  url: "#overview",
  title: _jsx(_Fragment, {
    children: "Overview"
  })
}, {
  depth: 2,
  url: "#generate-a-signature-get",
  title: _jsx(_Fragment, {
    children: "Generate a signature (GET)"
  })
}, {
  depth: 3,
  url: "#step-1-construct-the-source-string",
  title: _jsx(_Fragment, {
    children: "Step 1: Construct the source string"
  })
}, {
  depth: 3,
  url: "#step-2-construct-your-secret-key",
  title: _jsx(_Fragment, {
    children: "Step 2: Construct your secret key"
  })
}, {
  depth: 3,
  url: "#step-3-generate-the-signature",
  title: _jsx(_Fragment, {
    children: "Step 3: Generate the signature"
  })
}, {
  depth: 2,
  url: "#generate-a-signature-post-and-put",
  title: _jsx(_Fragment, {
    children: "Generate a signature (POST and PUT)"
  })
}, {
  depth: 3,
  url: "#step-1-construct-the-source-string-1",
  title: _jsx(_Fragment, {
    children: "Step 1: Construct the source string"
  })
}, {
  depth: 3,
  url: "#step-2-construct-your-secret-key-1",
  title: _jsx(_Fragment, {
    children: "Step 2: Construct your secret key"
  })
}, {
  depth: 3,
  url: "#step-3-generate-the-signature-1",
  title: _jsx(_Fragment, {
    children: "Step 3: Generate the signature"
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["The Provisioning, Usage, and Billing APIs have a request parameter named ", _jsx(_components.code, {
        children: "signature"
      }), ". This parameter is an encrypted string shared between vendors and Agora. It allows vendors to verify HTTP requests sent by Agora."]
    }), `
`, _jsx(_components.p, {
      children: "This page explains how to generate a signature."
    }), `
`, _jsx(_components.h2, {
      id: "overview",
      children: "Overview"
    }), `
`, _jsxs(_components.p, {
      children: ["The signature combines the source string (", _jsx(_components.code, {
        children: "SourceString"
      }), ") and your secret key (", _jsx(_components.code, {
        children: "apiSecret&"
      }), ") using an encryption algorithm, as follows:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "GET methods:"
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
                  children: "signature"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " URLEncode"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Base64("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " HMAC-SHA1"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "( "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "apiSecret"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "&"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: ","
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " SourceString"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ") )"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ","
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' "UTF-8"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
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
          children: "POST and PUT methods:"
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
                  children: "signature"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " Base64"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "( "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "HMAC-SHA1("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " apiSecret"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "&"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: ","
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " SourceString"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ") )"
                })]
              })
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "After receiving the request, you need to apply the encryption algorithm to generate a signature on your own. If the generated signature is the same as the one you receive, you can verify that the request is sent by Agora."
    }), `
`, _jsx(_components.h2, {
      id: "generate-a-signature-get",
      children: "Generate a signature (GET)"
    }), `
`, _jsxs(_components.p, {
      children: ["Take the ", _jsx(_components.a, {
        href: "./usage",
        children: "Usage API"
      }), " for example, Agora sends the following request to query usage information:"]
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
              children: "https://[host]/usage?fromTs"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "=1619913600"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "&toTs"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "1619917200"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "&pageNum"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "&apiKey"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "pzD5XinRSlmA64tZx81fL92YcBsJK0gd"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "&signature"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "signature}"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "For this example, the parameters used in the encryption algorithm are as follows:"
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
            children: "Value"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "SourceString"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "GET&%2Fusage&apiKey%3DpzD5XinRSlmA64tZx81fL92YcBsJK0gd%26fromTs%3D1619913600%26pageNum%3D1%26toTs%3D1619917200"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "apiSecret"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "U1SXE6k57vxVRjTomgquwC2F3tH8ziOB"
            }), " (This is for demonstration only. Your actual ", _jsx(_components.code, {
              children: "apiSecret"
            }), " should be different.)"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "signature"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "SFVnCVlRbrZcjMPGTWVxAE4QWZ8%3D"
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "This section shows how to generate the signature step-by-step."
    }), `
`, _jsx(_components.h3, {
      id: "step-1-construct-the-source-string",
      children: "Step 1: Construct the source string"
    }), `
`, _jsxs(_components.p, {
      children: ["To construct ", _jsx(_components.code, {
        children: "SourceString"
      }), ", follow these steps:"]
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: 'Get the type of the HTTP request and add an "&":'
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
                  children: "GET"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "&"
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
          children: ["In the request URL, leave only the path after ", _jsx(_components.code, {
            children: "[host]"
          }), " and before ", _jsx(_components.code, {
            children: "?"
          }), " (if any), URL-encode the resulting string (that is, ", _jsx(_components.code, {
            children: "/usage"
          }), '), and add an "&". The source string now looks like:']
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
                  children: "GET"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "&"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "%2Fusage"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "&"
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
          children: ["Sequence the query parameters in the request URL except ", _jsx(_components.code, {
            children: "signature"
          }), " (that is, ", _jsx(_components.code, {
            children: "fromTs"
          }), ", ", _jsx(_components.code, {
            children: "toTs"
          }), ", and ", _jsx(_components.code, {
            children: "apiKey"
          }), ") in alphabetical ascending order in the form of ", _jsx(_components.code, {
            children: "key=value"
          }), ', and combine them using "&":']
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "apiKey"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "pzD5XinRSlmA64tZx81fL92YcBsJK0gd"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "&fromTs"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "1619913600"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "&pageNum"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "1"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "&toTs"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "1619917200"
                })]
              })
            })
          })
        }), `
`, _jsx(_components.p, {
          children: "URL-encode the string above and add it to the source string:"
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
                  children: "GET"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "&"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "%2Fusage"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "&"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "apiKey%3DpzD5XinRSlmA64tZx81fL92YcBsJK0gd%26fromTs%3D1619913600%26pageNum%3D1%26toTs%3D1619917200"
                })]
              })
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "step-2-construct-your-secret-key",
      children: "Step 2: Construct your secret key"
    }), `
`, _jsx(_components.p, {
      children: "To construct the secret key, add an “&” to the end of your apiSecret string."
    }), `
`, _jsxs(_components.p, {
      children: ["For example, if the apiSecret you provide when applying to become a vendor is U1SXE6k57vxVRjTomgquwC2F3tH8ziOB, the secret key should be ", _jsx(_components.code, {
        children: "U1SXE6k57vxVRjTomgquwC2F3tH8ziOB&"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "step-3-generate-the-signature",
      children: "Step 3: Generate the signature"
    }), `
`, _jsx(_components.p, {
      children: "The encryption algorithm for GET methods is as follows:"
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
              children: "signature"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " URLEncode"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Base64("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " HMAC-SHA1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "( "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "apiSecret"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "&"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " SourceString"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") )"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "UTF-8"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Using the ", _jsx(_components.code, {
        children: "SourceString"
      }), " and ", _jsx(_components.code, {
        children: "apiSecret&"
      }), " from previous steps, you get this signature:"]
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
          children: _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "SFVnCVlRbrZcjMPGTWVxAE4QWZ8%3D"
            })
          })
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "generate-a-signature-post-and-put",
      children: "Generate a signature (POST and PUT)"
    }), `
`, _jsxs(_components.p, {
      children: ["Take the ", _jsx(_components.a, {
        href: "./provisioning",
        children: "Provisioning API"
      }), " for example, Agora sends the following request body:"]
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
              children: '    "projectId"'
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
              children: '"430892"'
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
              children: '    "apiKey"'
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
              children: '"pzD5XinRSlmA64tZx81fL92YcBsJK0gd"'
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
              children: '    "signature"'
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
              children: '"To be generated"'
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
`, _jsx(_components.p, {
      children: "And the request URL is:"
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
          children: _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "https://[host]/customers/123456/projects/new"
            })
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "For this example, the parameters used in the encryption algorithm are as follows:"
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
            children: "Value"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "SourceString"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "POST&%2Fcustomers%2F123456%2Fprojects%2Fnew&apiKey%3DpzD5XinRSlmA64tZx81fL92YcBsJK0gd%26projectId%3D430892"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "apiSecret"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "U1SXE6k57vxVRjTomgquwC2F3tH8ziOB"
            }), "  (This is for demonstration only. Your actual ", _jsx(_components.code, {
              children: "apiSecret"
            }), " should be different.)"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "signature"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "YZOl2v5q3I7o0x3F13tpnkq5aDI="
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "This section shows how to generate the signature step-by-step."
    }), `
`, _jsx(_components.h3, {
      id: "step-1-construct-the-source-string-1",
      children: "Step 1: Construct the source string"
    }), `
`, _jsxs(_components.p, {
      children: ["To construct ", _jsx(_components.code, {
        children: "SourceString"
      }), ", follow these steps:"]
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: 'Get the type of the HTTP request and add an "&":'
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
                  children: "POST"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "&"
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
          children: ["In the request URL, leave only the path after ", _jsx(_components.code, {
            children: "[host]"
          }), " and before ", _jsx(_components.code, {
            children: "?"
          }), " (if any), URL-encode the resulting string (that is, ", _jsx(_components.code, {
            children: "/usage"
          }), '), and add an "&". The source string now looks like:']
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
                  children: "POST"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "&"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "%2Fcustomers%2F123456%2Fprojects%2Fnew"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "&"
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
          children: ["Sequence the query parameters in the request body except ", _jsx(_components.code, {
            children: "signature"
          }), " (that is, ", _jsx(_components.code, {
            children: "projectId"
          }), " and ", _jsx(_components.code, {
            children: "apiKey"
          }), ") in alphabetical ascending order in the form of ", _jsx(_components.code, {
            children: "key=value"
          }), ', and combine them using "&":']
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "apiKey"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "pzD5XinRSlmA64tZx81fL92YcBsJK0gd"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "&projectId"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "430892"
                })]
              })
            })
          })
        }), `
`, _jsx(_components.p, {
          children: "URL-encode the string above and add it to the source string:"
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
                  children: "POST"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "&"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "%2Fcustomers%2F123456%2Fprojects%2Fnew"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "&"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "apiKey%3DpzD5XinRSlmA64tZx81fL92YcBsJK0gd%26projectId%3D430892"
                })]
              })
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "step-2-construct-your-secret-key-1",
      children: "Step 2: Construct your secret key"
    }), `
`, _jsx(_components.p, {
      children: "To construct the secret key, add an “&” to the end of your apiSecret string."
    }), `
`, _jsxs(_components.p, {
      children: ["For example, if the apiSecret you provide when applying to become a vendor is U1SXE6k57vxVRjTomgquwC2F3tH8ziOB, the secret key should be ", _jsx(_components.code, {
        children: "U1SXE6k57vxVRjTomgquwC2F3tH8ziOB&"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "step-3-generate-the-signature-1",
      children: "Step 3: Generate the signature"
    }), `
`, _jsx(_components.p, {
      children: "The encryption algorithm for POST and PUT methods is as follows:"
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
              children: "signature"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Base64"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "( "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "HMAC-SHA1("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " apiSecret"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "&"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " SourceString"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") )"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Using the ", _jsx(_components.code, {
        children: "SourceString"
      }), " and ", _jsx(_components.code, {
        children: "apiSecret&"
      }), " from previous steps, you get this signature:"]
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "YZOl2v5q3I7o0x3F13tpnkq5aDI"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            })]
          })
        })
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
