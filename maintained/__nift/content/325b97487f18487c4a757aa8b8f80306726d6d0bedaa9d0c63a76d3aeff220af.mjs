import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Common errors",
  description: "Common error codes and status codes you may encounter when using the Cloud Recording RESTful APIs."
};
export let _markdown = `

This article lists the common errors, error codes and status codes you may encounter when using the Cloud Recording RESTful APIs. If you encounter other errors, contact [Agora technical support](mailto\\:support@agora.io).

## Errors [#errors]

### Why do I get a 404 error when I call query? [#why-do-i-get-a-404-error-when-i-call-query]

After the cloud recording enables the high availability mechanism, the fault processing center needs a certain period of time to find the cause of the failure and act accordingly.

When the service detects that the server process is killed, the fault processing center switches the service to another server within 30 seconds; when the service detects that the server is disconnected, the fault processing center tries to reconnect to that server or switch to a different server if it fails to reconnect within one minute. Before the service resumes, you get a 404 for the method call of \`query\`, \`updateLayout\`, or \`stop\`.

## Error codes [#error-codes]

* \`2\`: Invalid parameter. Possible reasons:
  * A parameter's data type is wrong.
  * A parameter is spelt wrong. All the parameters are case sensitive.
  * A parameter value is out of range.
  * A mandatory parameter is missing.

* \`7\`: The recording is already running. Do not repeat the \`start\` request with the same resource ID.

* \`8\`: Errors in the HTTP request header fields. Possible reasons:
  * Content-type is wrong. Ensure that the \`Content-type\` field is \`application/json;charset=utf-8\`.
  * \`cloud_recording\` is missing in the request URL.
  * The HTTP method is wrong.
  * The request is not valid JSON

* \`49\`: Caused by repeated \`stop\` requests with the same resource ID and recording ID (sid).

* \`53\`: The recording is already running. This error occurs when you use the same parameters to call \`acquire\` again and use the new resource ID in the \`start\` request. To start multiple recording instances, use a different user ID for each instance.

* \`62\`: If you receive this error when calling \`acquire\`, the cloud recording service is not enabled. See [Enable Cloud Recording](/en/realtime-media/cloud-recording/index) for details.

* \`65\`: Usually caused by network jitter. Retry with the same resource ID. Agora recommends that you use a backoff strategy, for example, retry after 3 and 6 seconds successively.

* \`109\`: The authentication token for joining the RTC SDK channel has expired. You need to get a new token.

* \`110\`: The authentication token for joining the rtc channel is wrong. You need to confirm if you have got the right one.

* \`432\`: The parameter in the request is incorrect. Either the parameter is invalid, or the App ID, channel name, or user ID does not match the resource ID.

* \`433\`: The resource ID has expired. You need to start recording within five minutes after getting a resource ID. Call acquire to get a new resource ID.

* \`435\`: No recorded files created. There is nothing to record because no user is sending any stream in the channel.

* \`501\`: The recording service is exiting. This error might occur when you call query after stop.

* \`1001\`: Fails to parse the resource ID. Call acquire to get a new resource ID.

* \`1003\`: The App ID or recording ID (sid) does not match the resource ID. Ensure that the App ID or recording ID matches the resource ID in each recording session.

* \`1013\`: The channel name is invalid. The string length must be less than 64 bytes. Supported character scopes are:
  * All lowercase English letters: a to z.
  * All uppercase English letters: A to Z.
  * All numeric characters: 0 to 9.
  * The space character.
  * Punctuation characters and other symbols, including: "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "\\<", "=", ".", ">", "?", "@", "\\[", "]", "^", "\\_", " {", "}", "|", "\\~", ",".

* \`1028\`: Invalid parameters in the request body of the \`updateLayout\` method.

* \`"invalid appid"\`: The App ID you entered is invalid. If the error persists after you verify the App ID, contact [support@agora.io](mailto\\:support@agora.io).

* \`"no Route matched with those values"\`: A possible reason for this message is that you entered an incorrect HTTP method in your request, such as using GET when it should have been POST. Another possible reason is that you sent your request to a wrong URL.

* \`"Invalid authentication credentials"\`: The following list contains possible reasons for this message. If the error persists after you correct the following issues, contact [support@agora.io](mailto\\:support@agora.io):
  * The Customer ID or Customer Certificate you entered is incorrect.
  * The cloud recording service is not enabled. See [Enable Cloud Recording](/en/realtime-media/cloud-recording/index) for details.
  * HTTP header contains incorrect information. For example, \`Basic\` is missing in the \`Authorization\` field.
  * HTTP header contains incorrectly formatted content. For example, the capitalization is wrong or there is an unnecessary space in the \`Content-type\` field. The correct value is \`application/json;charset=utf-8\`.

## Status codes [#status-codes]

| Code  | Description                                                                                                                                                                                                                 |
| :---- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`200\` | The request is successful.                                                                                                                                                                                                  |
| \`201\` | The recording is already running. Do not repeat the \`start\` request with the same resource ID.                                                                                                                              |
| \`206\` | No user in the channel sent a stream during the recording process, or some of the recorded files are uploaded to the Agora Cloud Backup instead of the third-party cloud storage, or the recording process is not over yet. |
| \`400\` | The server cannot process the request due to malformed request syntax, or [the cloud recording service is not enabled](/en/realtime-media/cloud-recording/index).                                                           |
| \`401\` | Unauthorized (incorrect Customer ID/Customer Secret).                                                                                                                                                                       |
| \`404\` | The requested resource could not be found.                                                                                                                                                                                  |
| \`500\` | Internal server error.                                                                                                                                                                                                      |
| \`504\` | The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.                                                                                                                 |

## Service status [#service-status]

| State                     | Description                                                                          |
| :------------------------ | :----------------------------------------------------------------------------------- |
| "serviceIdle"             | The submodule is idle.                                                               |
| "serviceStarted"          | The submodule has started.                                                           |
| "serviceReady"            | The submodule is ready.                                                              |
| "serviceInProgress"       | The submodule is running.                                                            |
| "serviceCompleted"        | All subscribed contents have been uploaded to the extension service.                 |
| "servicePartialCompleted" | Part of the subscribed contents have been uploaded to the extension service.         |
| "serviceValidationFailed" | The validation of the extension service failed. For example, \`apiData\` is incorrect. |
| "serviceAbnormal"         | The submodule is in an abnormal status.                                              |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This article lists the common errors, error codes and status codes you may encounter when using the Cloud Recording RESTful APIs. If you encounter other errors, contact Agora technical support."
  }, {
    heading: "why-do-i-get-a-404-error-when-i-call-query",
    content: "After the cloud recording enables the high availability mechanism, the fault processing center needs a certain period of time to find the cause of the failure and act accordingly."
  }, {
    heading: "why-do-i-get-a-404-error-when-i-call-query",
    content: "When the service detects that the server process is killed, the fault processing center switches the service to another server within 30 seconds; when the service detects that the server is disconnected, the fault processing center tries to reconnect to that server or switch to a different server if it fails to reconnect within one minute. Before the service resumes, you get a 404 for the method call of `query`, `updateLayout`, or `stop`."
  }, {
    heading: "error-codes",
    content: "`2`: Invalid parameter. Possible reasons:"
  }, {
    heading: "error-codes",
    content: "A parameter's data type is wrong."
  }, {
    heading: "error-codes",
    content: "A parameter is spelt wrong. All the parameters are case sensitive."
  }, {
    heading: "error-codes",
    content: "A parameter value is out of range."
  }, {
    heading: "error-codes",
    content: "A mandatory parameter is missing."
  }, {
    heading: "error-codes",
    content: "`7`: The recording is already running. Do not repeat the `start` request with the same resource ID."
  }, {
    heading: "error-codes",
    content: "`8`: Errors in the HTTP request header fields. Possible reasons:"
  }, {
    heading: "error-codes",
    content: "Content-type is wrong. Ensure that the `Content-type` field is `application/json;charset=utf-8`."
  }, {
    heading: "error-codes",
    content: "`cloud_recording` is missing in the request URL."
  }, {
    heading: "error-codes",
    content: "The HTTP method is wrong."
  }, {
    heading: "error-codes",
    content: "The request is not valid JSON"
  }, {
    heading: "error-codes",
    content: "`49`: Caused by repeated `stop` requests with the same resource ID and recording ID (sid)."
  }, {
    heading: "error-codes",
    content: "`53`: The recording is already running. This error occurs when you use the same parameters to call `acquire` again and use the new resource ID in the `start` request. To start multiple recording instances, use a different user ID for each instance."
  }, {
    heading: "error-codes",
    content: "`62`: If you receive this error when calling `acquire`, the cloud recording service is not enabled. See Enable Cloud Recording for details."
  }, {
    heading: "error-codes",
    content: "`65`: Usually caused by network jitter. Retry with the same resource ID. Agora recommends that you use a backoff strategy, for example, retry after 3 and 6 seconds successively."
  }, {
    heading: "error-codes",
    content: "`109`: The authentication token for joining the RTC SDK channel has expired. You need to get a new token."
  }, {
    heading: "error-codes",
    content: "`110`: The authentication token for joining the rtc channel is wrong. You need to confirm if you have got the right one."
  }, {
    heading: "error-codes",
    content: "`432`: The parameter in the request is incorrect. Either the parameter is invalid, or the App ID, channel name, or user ID does not match the resource ID."
  }, {
    heading: "error-codes",
    content: "`433`: The resource ID has expired. You need to start recording within five minutes after getting a resource ID. Call acquire to get a new resource ID."
  }, {
    heading: "error-codes",
    content: "`435`: No recorded files created. There is nothing to record because no user is sending any stream in the channel."
  }, {
    heading: "error-codes",
    content: "`501`: The recording service is exiting. This error might occur when you call query after stop."
  }, {
    heading: "error-codes",
    content: "`1001`: Fails to parse the resource ID. Call acquire to get a new resource ID."
  }, {
    heading: "error-codes",
    content: "`1003`: The App ID or recording ID (sid) does not match the resource ID. Ensure that the App ID or recording ID matches the resource ID in each recording session."
  }, {
    heading: "error-codes",
    content: "`1013`: The channel name is invalid. The string length must be less than 64 bytes. Supported character scopes are:"
  }, {
    heading: "error-codes",
    content: "All lowercase English letters: a to z."
  }, {
    heading: "error-codes",
    content: "All uppercase English letters: A to Z."
  }, {
    heading: "error-codes",
    content: "All numeric characters: 0 to 9."
  }, {
    heading: "error-codes",
    content: "The space character."
  }, {
    heading: "error-codes",
    content: 'Punctuation characters and other symbols, including: "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "\\<", "=", ".", ">", "?", "@", "\\[", "]", "^", "\\_", " {", "}", "|", "\\~", ",".'
  }, {
    heading: "error-codes",
    content: "`1028`: Invalid parameters in the request body of the `updateLayout` method."
  }, {
    heading: "error-codes",
    content: '`"invalid appid"`: The App ID you entered is invalid. If the error persists after you verify the App ID, contact support\\@agora.io.'
  }, {
    heading: "error-codes",
    content: '`"no Route matched with those values"`: A possible reason for this message is that you entered an incorrect HTTP method in your request, such as using GET when it should have been POST. Another possible reason is that you sent your request to a wrong URL.'
  }, {
    heading: "error-codes",
    content: '`"Invalid authentication credentials"`: The following list contains possible reasons for this message. If the error persists after you correct the following issues, contact support\\@agora.io:'
  }, {
    heading: "error-codes",
    content: "The Customer ID or Customer Certificate you entered is incorrect."
  }, {
    heading: "error-codes",
    content: "The cloud recording service is not enabled. See Enable Cloud Recording for details."
  }, {
    heading: "error-codes",
    content: "HTTP header contains incorrect information. For example, `Basic` is missing in the `Authorization` field."
  }, {
    heading: "error-codes",
    content: "HTTP header contains incorrectly formatted content. For example, the capitalization is wrong or there is an unnecessary space in the `Content-type` field. The correct value is `application/json;charset=utf-8`."
  }, {
    heading: "status-codes",
    content: "Code"
  }, {
    heading: "status-codes",
    content: "Description"
  }, {
    heading: "status-codes",
    content: "`200`"
  }, {
    heading: "status-codes",
    content: "The request is successful."
  }, {
    heading: "status-codes",
    content: "`201`"
  }, {
    heading: "status-codes",
    content: "The recording is already running. Do not repeat the `start` request with the same resource ID."
  }, {
    heading: "status-codes",
    content: "`206`"
  }, {
    heading: "status-codes",
    content: "No user in the channel sent a stream during the recording process, or some of the recorded files are uploaded to the Agora Cloud Backup instead of the third-party cloud storage, or the recording process is not over yet."
  }, {
    heading: "status-codes",
    content: "`400`"
  }, {
    heading: "status-codes",
    content: "The server cannot process the request due to malformed request syntax, or the cloud recording service is not enabled."
  }, {
    heading: "status-codes",
    content: "`401`"
  }, {
    heading: "status-codes",
    content: "Unauthorized (incorrect Customer ID/Customer Secret)."
  }, {
    heading: "status-codes",
    content: "`404`"
  }, {
    heading: "status-codes",
    content: "The requested resource could not be found."
  }, {
    heading: "status-codes",
    content: "`500`"
  }, {
    heading: "status-codes",
    content: "Internal server error."
  }, {
    heading: "status-codes",
    content: "`504`"
  }, {
    heading: "status-codes",
    content: "The server was acting as a gateway or proxy and did not receive a timely response from the upstream server."
  }, {
    heading: "service-status",
    content: "State"
  }, {
    heading: "service-status",
    content: "Description"
  }, {
    heading: "service-status",
    content: '"serviceIdle"'
  }, {
    heading: "service-status",
    content: "The submodule is idle."
  }, {
    heading: "service-status",
    content: '"serviceStarted"'
  }, {
    heading: "service-status",
    content: "The submodule has started."
  }, {
    heading: "service-status",
    content: '"serviceReady"'
  }, {
    heading: "service-status",
    content: "The submodule is ready."
  }, {
    heading: "service-status",
    content: '"serviceInProgress"'
  }, {
    heading: "service-status",
    content: "The submodule is running."
  }, {
    heading: "service-status",
    content: '"serviceCompleted"'
  }, {
    heading: "service-status",
    content: "All subscribed contents have been uploaded to the extension service."
  }, {
    heading: "service-status",
    content: '"servicePartialCompleted"'
  }, {
    heading: "service-status",
    content: "Part of the subscribed contents have been uploaded to the extension service."
  }, {
    heading: "service-status",
    content: '"serviceValidationFailed"'
  }, {
    heading: "service-status",
    content: "The validation of the extension service failed. For example, `apiData` is incorrect."
  }, {
    heading: "service-status",
    content: '"serviceAbnormal"'
  }, {
    heading: "service-status",
    content: "The submodule is in an abnormal status."
  }],
  headings: [{
    id: "errors",
    content: "Errors"
  }, {
    id: "why-do-i-get-a-404-error-when-i-call-query",
    content: "Why do I get a 404 error when I call query?"
  }, {
    id: "error-codes",
    content: "Error codes"
  }, {
    id: "status-codes",
    content: "Status codes"
  }, {
    id: "service-status",
    content: "Service status"
  }]
};
export let toc = [{
  depth: 2,
  url: "#errors",
  title: _jsx(_Fragment, {
    children: "Errors"
  })
}, {
  depth: 3,
  url: "#why-do-i-get-a-404-error-when-i-call-query",
  title: _jsx(_Fragment, {
    children: "Why do I get a 404 error when I call query?"
  })
}, {
  depth: 2,
  url: "#error-codes",
  title: _jsx(_Fragment, {
    children: "Error codes"
  })
}, {
  depth: 2,
  url: "#status-codes",
  title: _jsx(_Fragment, {
    children: "Status codes"
  })
}, {
  depth: 2,
  url: "#service-status",
  title: _jsx(_Fragment, {
    children: "Service status"
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
      children: ["This article lists the common errors, error codes and status codes you may encounter when using the Cloud Recording RESTful APIs. If you encounter other errors, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "Agora technical support"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "errors",
      children: "Errors"
    }), `
`, _jsx(_components.h3, {
      id: "why-do-i-get-a-404-error-when-i-call-query",
      children: "Why do I get a 404 error when I call query?"
    }), `
`, _jsx(_components.p, {
      children: "After the cloud recording enables the high availability mechanism, the fault processing center needs a certain period of time to find the cause of the failure and act accordingly."
    }), `
`, _jsxs(_components.p, {
      children: ["When the service detects that the server process is killed, the fault processing center switches the service to another server within 30 seconds; when the service detects that the server is disconnected, the fault processing center tries to reconnect to that server or switch to a different server if it fails to reconnect within one minute. Before the service resumes, you get a 404 for the method call of ", _jsx(_components.code, {
        children: "query"
      }), ", ", _jsx(_components.code, {
        children: "updateLayout"
      }), ", or ", _jsx(_components.code, {
        children: "stop"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "error-codes",
      children: "Error codes"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "2"
          }), ": Invalid parameter. Possible reasons:"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "A parameter's data type is wrong."
          }), `
`, _jsx(_components.li, {
            children: "A parameter is spelt wrong. All the parameters are case sensitive."
          }), `
`, _jsx(_components.li, {
            children: "A parameter value is out of range."
          }), `
`, _jsx(_components.li, {
            children: "A mandatory parameter is missing."
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "7"
          }), ": The recording is already running. Do not repeat the ", _jsx(_components.code, {
            children: "start"
          }), " request with the same resource ID."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "8"
          }), ": Errors in the HTTP request header fields. Possible reasons:"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Content-type is wrong. Ensure that the ", _jsx(_components.code, {
              children: "Content-type"
            }), " field is ", _jsx(_components.code, {
              children: "application/json;charset=utf-8"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "cloud_recording"
            }), " is missing in the request URL."]
          }), `
`, _jsx(_components.li, {
            children: "The HTTP method is wrong."
          }), `
`, _jsx(_components.li, {
            children: "The request is not valid JSON"
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "49"
          }), ": Caused by repeated ", _jsx(_components.code, {
            children: "stop"
          }), " requests with the same resource ID and recording ID (sid)."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "53"
          }), ": The recording is already running. This error occurs when you use the same parameters to call ", _jsx(_components.code, {
            children: "acquire"
          }), " again and use the new resource ID in the ", _jsx(_components.code, {
            children: "start"
          }), " request. To start multiple recording instances, use a different user ID for each instance."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "62"
          }), ": If you receive this error when calling ", _jsx(_components.code, {
            children: "acquire"
          }), ", the cloud recording service is not enabled. See ", _jsx(_components.a, {
            href: "/en/realtime-media/cloud-recording/index",
            children: "Enable Cloud Recording"
          }), " for details."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "65"
          }), ": Usually caused by network jitter. Retry with the same resource ID. Agora recommends that you use a backoff strategy, for example, retry after 3 and 6 seconds successively."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "109"
          }), ": The authentication token for joining the RTC SDK channel has expired. You need to get a new token."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "110"
          }), ": The authentication token for joining the rtc channel is wrong. You need to confirm if you have got the right one."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "432"
          }), ": The parameter in the request is incorrect. Either the parameter is invalid, or the App ID, channel name, or user ID does not match the resource ID."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "433"
          }), ": The resource ID has expired. You need to start recording within five minutes after getting a resource ID. Call acquire to get a new resource ID."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "435"
          }), ": No recorded files created. There is nothing to record because no user is sending any stream in the channel."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "501"
          }), ": The recording service is exiting. This error might occur when you call query after stop."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "1001"
          }), ": Fails to parse the resource ID. Call acquire to get a new resource ID."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "1003"
          }), ": The App ID or recording ID (sid) does not match the resource ID. Ensure that the App ID or recording ID matches the resource ID in each recording session."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "1013"
          }), ": The channel name is invalid. The string length must be less than 64 bytes. Supported character scopes are:"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "All lowercase English letters: a to z."
          }), `
`, _jsx(_components.li, {
            children: "All uppercase English letters: A to Z."
          }), `
`, _jsx(_components.li, {
            children: "All numeric characters: 0 to 9."
          }), `
`, _jsx(_components.li, {
            children: "The space character."
          }), `
`, _jsxs(_components.li, {
            children: ['Punctuation characters and other symbols, including: "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".", ">", "?", "@", "[", "]", "^", "_", " ', ", ", '", "|", "~", ",".']
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "1028"
          }), ": Invalid parameters in the request body of the ", _jsx(_components.code, {
            children: "updateLayout"
          }), " method."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: '"invalid appid"'
          }), ": The App ID you entered is invalid. If the error persists after you verify the App ID, contact ", _jsx(_components.a, {
            href: "mailto:support@agora.io",
            children: "support@agora.io"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: '"no Route matched with those values"'
          }), ": A possible reason for this message is that you entered an incorrect HTTP method in your request, such as using GET when it should have been POST. Another possible reason is that you sent your request to a wrong URL."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: '"Invalid authentication credentials"'
          }), ": The following list contains possible reasons for this message. If the error persists after you correct the following issues, contact ", _jsx(_components.a, {
            href: "mailto:support@agora.io",
            children: "support@agora.io"
          }), ":"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "The Customer ID or Customer Certificate you entered is incorrect."
          }), `
`, _jsxs(_components.li, {
            children: ["The cloud recording service is not enabled. See ", _jsx(_components.a, {
              href: "/en/realtime-media/cloud-recording/index",
              children: "Enable Cloud Recording"
            }), " for details."]
          }), `
`, _jsxs(_components.li, {
            children: ["HTTP header contains incorrect information. For example, ", _jsx(_components.code, {
              children: "Basic"
            }), " is missing in the ", _jsx(_components.code, {
              children: "Authorization"
            }), " field."]
          }), `
`, _jsxs(_components.li, {
            children: ["HTTP header contains incorrectly formatted content. For example, the capitalization is wrong or there is an unnecessary space in the ", _jsx(_components.code, {
              children: "Content-type"
            }), " field. The correct value is ", _jsx(_components.code, {
              children: "application/json;charset=utf-8"
            }), "."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "status-codes",
      children: "Status codes"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Code"
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
              children: "200"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The request is successful."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "201"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The recording is already running. Do not repeat the ", _jsx(_components.code, {
              children: "start"
            }), " request with the same resource ID."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "206"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No user in the channel sent a stream during the recording process, or some of the recorded files are uploaded to the Agora Cloud Backup instead of the third-party cloud storage, or the recording process is not over yet."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "400"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The server cannot process the request due to malformed request syntax, or ", _jsx(_components.a, {
              href: "/en/realtime-media/cloud-recording/index",
              children: "the cloud recording service is not enabled"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "401"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Unauthorized (incorrect Customer ID/Customer Secret)."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "404"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The requested resource could not be found."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "500"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Internal server error."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "504"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The server was acting as a gateway or proxy and did not receive a timely response from the upstream server."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "service-status",
      children: "Service status"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "State"
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
            children: '"serviceIdle"'
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The submodule is idle."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: '"serviceStarted"'
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The submodule has started."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: '"serviceReady"'
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The submodule is ready."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: '"serviceInProgress"'
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The submodule is running."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: '"serviceCompleted"'
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "All subscribed contents have been uploaded to the extension service."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: '"servicePartialCompleted"'
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Part of the subscribed contents have been uploaded to the extension service."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: '"serviceValidationFailed"'
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The validation of the extension service failed. For example, ", _jsx(_components.code, {
              children: "apiData"
            }), " is incorrect."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: '"serviceAbnormal"'
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The submodule is in an abnormal status."
          })]
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
