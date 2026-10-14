import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "What are the common error messages to expect in Web browsers' console logs?"
};
export let _markdown = `

After integrating the Agora Web SDK into your web app, you can debug your code using the console log. This document lists the common errors in the console log.

## Cannot read property "appendChild" of null [#cannot-read-property-appendchild-of-null]

### Reason [#reason]

The played DOM does not exist, or the element ID cannot be found.

### Solution [#solution]

Ensure that the parent DOM exists when you call \`Stream.play\`.

## Cannot read property 'stringuid' of undefined [#cannot-read-property-stringuid-of-undefined]

### Reason [#reason-1]

You have called \`Client.publish\` before the \`Client.join\` method call succeeds.

### Solution [#solution-1]

Check your code logic and ensure that you call \`Client.publish\` after the \`Client.join\` method call succeeds.

## Connect choose server timeout [#connect-choose-server-timeout]

Same reason and solution as [Failed to load resource](#failed-to-load-resource).

## DTLS [#dtls]

The following table lists the possible reasons and corresponding solutions:

| Reason                                                                                                        | Solution                                                                                                                             |
| :------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------- |
| The web browser does not fully support WebRTC.                                                                | Use a [Web browser](/en/realtime-media/rtc/reference/supported-platforms?platform=web) supporting WebRTC.                            |
| The web browser has plugins that prevent WebRTC from getting an ICE candidate on the local device.            | Disable the problematic browser plugins.                                                                                             |
| The user's gateway firewall disables the UDP protocol or the UDP ports greater than 10000.                    | Disable the firewall or use the [Agora Cloud Proxy](/en/realtime-media/rtc/build/manage-connection-and-quality/cloud-proxy) service. |
| You set the web browser to use the VP8 codec, but the user uses the Safari browser that does not support VP8. | The user can either upgrade the Safari browser to versions later than 12.1, or use the Chrome browser.                               |
| You set the web browser to use the H.264 codec, but the user's device hardware does not support H.264.        | Set the web browser to use VP8.                                                                                                      |
| Connection issues of a network provider.                                                                      | The user can try switching to a different network, for example, using a cellular data connection.                                    |

If the error persists after troubleshooting, contact [support@agora.io](mailto\\:support@agora.io).

## Failed to execute 'addStream' on 'RTCPeerConnection': parameter 1 is not of type 'MediaStream' [#failed-to-execute-addstream-on-rtcpeerconnection-parameter-1-is-not-of-type-mediastream]

### Reason [#reason-2]

You have called \`Client.publish\` before the \`Stream.init\` method call succeeds.

### Solution [#solution-2]

Call \`publish\` in the \`onSuccess\` callback of \`Stream.init\`.

## Failed to load resource [#failed-to-load-resource]

### Reason [#reason-3]

The local DNS resolution fails.

### Solution [#solution-3]

The user can change the DNS server address and try joining the channel again.

* For a user in Mainland China, change the DNS server address to \`114.114.114.114\`.
* For a user outside Mainland China, change the DNS server address to \`8.8.8.8\`.

## Failed to set remote answer sdp: Called in wrong state: kStable [#failed-to-set-remote-answer-sdp-called-in-wrong-state-kstable]

This error is caused by calling \`switchDevice\` and can be ignored.

## Media access MEDIA\\_NOT\\_SUPPORT: video/audio streams not supported yet /enumerateDevices() not supported [#media-access-media_not_support-videoaudio-streams-not-supported-yet-enumeratedevices-not-supported]

### Reason [#reason-4]

Possible reasons:

* The web browser is incompatible with the Agora Web SDK.
* HTTPS protocol is not used.
* Localhost is not used.

### Solution [#solution-4]

* Use a supported [Web browser](/en/realtime-media/rtc/reference/supported-platforms/web).
* Deploy your web app through HTTPS or localhost.

## Invalid elementID [#invalid-elementid]

### Reason [#reason-5]

The \`HTMLElementID\` specified in \`Stream.play\` is invalid.

### Solution [#solution-5]

Ensure that the string in \`HTMLElementID\` contains only "\\_", "-", ".", or any digits and letters in the ASCII character set. The string must be non-empty and less than 256 bytes in length.

## INVALID\\_VENDOR\\_KEY [#invalid_vendor_key]

### Reason [#reason-6]

Possible reasons:

* The App ID is invalid. For example, the Agora project is disabled, or the App ID is not yet active within a newly created project.
* The token is invalid.

### Solution [#solution-6]

Check your settings for \`appId\` in \`Client.init\` and \`tokenOrKey\` in \`Client.join\`. Ensure that the App ID and token are correct and valid.

## NO\\_CANDIDATES\\_IN\\_OFFER [#no_candidates_in_offer]

Same reason and solution as [None Ice Candidate not allowed](#candidate).

## None Ice Candidate not allowed [#none-ice-candidate-not-allowed]

### Reason [#reason-7]

When establishing a WebRTC connection, the SDK fails to find any [ICE](https://developer.mozilla.org/en-US/docs/Glossary/ICE) (Interactive Connectivity Establishment) candidate.

<CalloutContainer type="info">
  <CalloutDescription>
    A candidate contains the IP address and port information for connecting to a remote device.
  </CalloutDescription>
</CalloutContainer>

### Solution [#solution-7]

The type of candidates used for connection depends on whether you have enabled [cloud proxy](/en/realtime-media/rtc/build/manage-connection-and-quality/cloud-proxy) or not. Choose one of the following solutions accordingly.

* If you have enabled cloud proxy, the SDK gets relay candidates from a TURN server. Check whether you have whitelisted the IP addresses and ports that Agora provides for cloud proxy, and ensure that the local client can connect to the TURN server.
* If you have not enabled cloud proxy, the SDK gets host candidates from the local device. In this case, the error is usually caused by the security settings of the local device.
  * Check whether the browser has any plugins that disable WebRTC.
  * Ensure that you have enabled UDP in the system firewall, and added the [specified domains and ports](/en/realtime-media/rtc/reference/cloud-proxy-allowed-ips) to the whitelist.

## P2P lost [#p2p-lost]

Same reason and solution as [DTLS failed](#dtls).

## UID\\_CONFLICT [#uid_conflict]

### Reason [#reason-8]

Multiple users joins the channel with the same \`uid\`.

### Solution [#solution-8]

Ensure that all users in a channel have a unique \`uid\`.

## Uncaught DOMException: Failed to execute 'addTransceiver' on 'RTCPeerConnection': This operation is only supported in 'unified-plan'. [#uncaught-domexception-failed-to-execute-addtransceiver-on-rtcpeerconnection-this-operation-is-only-supported-in-unified-plan]

### Reason [#reason-9]

A mobile device emulator is running in the web browser.

### Solution [#solution-9]

Agora Web SDK does not support emulated mobile devices. Do not use an emulator to debug your app.

## Uncaught TypeError: Failed to execute 'createObjectURL' on 'URL': No function was found that matched the signature provided [#uncaught-typeerror-failed-to-execute-createobjecturl-on-url-no-function-was-found-that-matched-the-signature-provided]

### Reason [#reason-10]

A mobile device emulator is running in the web browser.

### Solution [#solution-10]

Agora Web SDK does not support mobile device emulators. Do not use an emulator to debug your app.

## User is not in the session [#user-is-not-in-the-session]

### Reason [#reason-11]

The connection has not been established. This is usually the result of an incorrect API call sequence, for example, calling \`Client.publish\` after \`Client.leave\`.

### Solution [#solution-11]

Check your API call sequence.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "After integrating the Agora Web SDK into your web app, you can debug your code using the console log. This document lists the common errors in the console log."
  }, {
    heading: "reason",
    content: "The played DOM does not exist, or the element ID cannot be found."
  }, {
    heading: "solution",
    content: "Ensure that the parent DOM exists when you call `Stream.play`."
  }, {
    heading: "reason-1",
    content: "You have called `Client.publish` before the `Client.join` method call succeeds."
  }, {
    heading: "solution-1",
    content: "Check your code logic and ensure that you call `Client.publish` after the `Client.join` method call succeeds."
  }, {
    heading: "connect-choose-server-timeout",
    content: "Same reason and solution as Failed to load resource."
  }, {
    heading: "dtls",
    content: "The following table lists the possible reasons and corresponding solutions:"
  }, {
    heading: "dtls",
    content: "Reason"
  }, {
    heading: "dtls",
    content: "Solution"
  }, {
    heading: "dtls",
    content: "The web browser does not fully support WebRTC."
  }, {
    heading: "dtls",
    content: "Use a Web browser supporting WebRTC."
  }, {
    heading: "dtls",
    content: "The web browser has plugins that prevent WebRTC from getting an ICE candidate on the local device."
  }, {
    heading: "dtls",
    content: "Disable the problematic browser plugins."
  }, {
    heading: "dtls",
    content: "The user's gateway firewall disables the UDP protocol or the UDP ports greater than 10000."
  }, {
    heading: "dtls",
    content: "Disable the firewall or use the Agora Cloud Proxy service."
  }, {
    heading: "dtls",
    content: "You set the web browser to use the VP8 codec, but the user uses the Safari browser that does not support VP8."
  }, {
    heading: "dtls",
    content: "The user can either upgrade the Safari browser to versions later than 12.1, or use the Chrome browser."
  }, {
    heading: "dtls",
    content: "You set the web browser to use the H.264 codec, but the user's device hardware does not support H.264."
  }, {
    heading: "dtls",
    content: "Set the web browser to use VP8."
  }, {
    heading: "dtls",
    content: "Connection issues of a network provider."
  }, {
    heading: "dtls",
    content: "The user can try switching to a different network, for example, using a cellular data connection."
  }, {
    heading: "dtls",
    content: "If the error persists after troubleshooting, contact support\\@agora.io."
  }, {
    heading: "reason-2",
    content: "You have called `Client.publish` before the `Stream.init` method call succeeds."
  }, {
    heading: "solution-2",
    content: "Call `publish` in the `onSuccess` callback of `Stream.init`."
  }, {
    heading: "reason-3",
    content: "The local DNS resolution fails."
  }, {
    heading: "solution-3",
    content: "The user can change the DNS server address and try joining the channel again."
  }, {
    heading: "solution-3",
    content: "For a user in Mainland China, change the DNS server address to `114.114.114.114`."
  }, {
    heading: "solution-3",
    content: "For a user outside Mainland China, change the DNS server address to `8.8.8.8`."
  }, {
    heading: "failed-to-set-remote-answer-sdp-called-in-wrong-state-kstable",
    content: "This error is caused by calling `switchDevice` and can be ignored."
  }, {
    heading: "reason-4",
    content: "Possible reasons:"
  }, {
    heading: "reason-4",
    content: "The web browser is incompatible with the Agora Web SDK."
  }, {
    heading: "reason-4",
    content: "HTTPS protocol is not used."
  }, {
    heading: "reason-4",
    content: "Localhost is not used."
  }, {
    heading: "solution-4",
    content: "Use a supported Web browser."
  }, {
    heading: "solution-4",
    content: "Deploy your web app through HTTPS or localhost."
  }, {
    heading: "reason-5",
    content: "The `HTMLElementID` specified in `Stream.play` is invalid."
  }, {
    heading: "solution-5",
    content: 'Ensure that the string in `HTMLElementID` contains only "\\_", "-", ".", or any digits and letters in the ASCII character set. The string must be non-empty and less than 256 bytes in length.'
  }, {
    heading: "reason-6",
    content: "Possible reasons:"
  }, {
    heading: "reason-6",
    content: "The App ID is invalid. For example, the Agora project is disabled, or the App ID is not yet active within a newly created project."
  }, {
    heading: "reason-6",
    content: "The token is invalid."
  }, {
    heading: "solution-6",
    content: "Check your settings for `appId` in `Client.init` and `tokenOrKey` in `Client.join`. Ensure that the App ID and token are correct and valid."
  }, {
    heading: "no_candidates_in_offer",
    content: "Same reason and solution as None Ice Candidate not allowed."
  }, {
    heading: "reason-7",
    content: "When establishing a WebRTC connection, the SDK fails to find any ICE (Interactive Connectivity Establishment) candidate."
  }, {
    heading: "reason-7",
    content: "A candidate contains the IP address and port information for connecting to a remote device."
  }, {
    heading: "solution-7",
    content: "The type of candidates used for connection depends on whether you have enabled cloud proxy or not. Choose one of the following solutions accordingly."
  }, {
    heading: "solution-7",
    content: "If you have enabled cloud proxy, the SDK gets relay candidates from a TURN server. Check whether you have whitelisted the IP addresses and ports that Agora provides for cloud proxy, and ensure that the local client can connect to the TURN server."
  }, {
    heading: "solution-7",
    content: "If you have not enabled cloud proxy, the SDK gets host candidates from the local device. In this case, the error is usually caused by the security settings of the local device."
  }, {
    heading: "solution-7",
    content: "Check whether the browser has any plugins that disable WebRTC."
  }, {
    heading: "solution-7",
    content: "Ensure that you have enabled UDP in the system firewall, and added the specified domains and ports to the whitelist."
  }, {
    heading: "p2p-lost",
    content: "Same reason and solution as DTLS failed."
  }, {
    heading: "reason-8",
    content: "Multiple users joins the channel with the same `uid`."
  }, {
    heading: "solution-8",
    content: "Ensure that all users in a channel have a unique `uid`."
  }, {
    heading: "reason-9",
    content: "A mobile device emulator is running in the web browser."
  }, {
    heading: "solution-9",
    content: "Agora Web SDK does not support emulated mobile devices. Do not use an emulator to debug your app."
  }, {
    heading: "reason-10",
    content: "A mobile device emulator is running in the web browser."
  }, {
    heading: "solution-10",
    content: "Agora Web SDK does not support mobile device emulators. Do not use an emulator to debug your app."
  }, {
    heading: "reason-11",
    content: "The connection has not been established. This is usually the result of an incorrect API call sequence, for example, calling `Client.publish` after `Client.leave`."
  }, {
    heading: "solution-11",
    content: "Check your API call sequence."
  }],
  headings: [{
    id: "cannot-read-property-appendchild-of-null",
    content: 'Cannot read property "appendChild" of null'
  }, {
    id: "reason",
    content: "Reason"
  }, {
    id: "solution",
    content: "Solution"
  }, {
    id: "cannot-read-property-stringuid-of-undefined",
    content: "Cannot read property 'stringuid' of undefined"
  }, {
    id: "reason-1",
    content: "Reason"
  }, {
    id: "solution-1",
    content: "Solution"
  }, {
    id: "connect-choose-server-timeout",
    content: "Connect choose server timeout"
  }, {
    id: "dtls",
    content: "DTLS"
  }, {
    id: "failed-to-execute-addstream-on-rtcpeerconnection-parameter-1-is-not-of-type-mediastream",
    content: "Failed to execute 'addStream' on 'RTCPeerConnection': parameter 1 is not of type 'MediaStream'"
  }, {
    id: "reason-2",
    content: "Reason"
  }, {
    id: "solution-2",
    content: "Solution"
  }, {
    id: "failed-to-load-resource",
    content: "Failed to load resource"
  }, {
    id: "reason-3",
    content: "Reason"
  }, {
    id: "solution-3",
    content: "Solution"
  }, {
    id: "failed-to-set-remote-answer-sdp-called-in-wrong-state-kstable",
    content: "Failed to set remote answer sdp: Called in wrong state: kStable"
  }, {
    id: "media-access-media_not_support-videoaudio-streams-not-supported-yet-enumeratedevices-not-supported",
    content: "Media access MEDIA_NOT_SUPPORT: video/audio streams not supported yet /enumerateDevices() not supported"
  }, {
    id: "reason-4",
    content: "Reason"
  }, {
    id: "solution-4",
    content: "Solution"
  }, {
    id: "invalid-elementid",
    content: "Invalid elementID"
  }, {
    id: "reason-5",
    content: "Reason"
  }, {
    id: "solution-5",
    content: "Solution"
  }, {
    id: "invalid_vendor_key",
    content: "INVALID_VENDOR_KEY"
  }, {
    id: "reason-6",
    content: "Reason"
  }, {
    id: "solution-6",
    content: "Solution"
  }, {
    id: "no_candidates_in_offer",
    content: "NO_CANDIDATES_IN_OFFER"
  }, {
    id: "none-ice-candidate-not-allowed",
    content: "None Ice Candidate not allowed"
  }, {
    id: "reason-7",
    content: "Reason"
  }, {
    id: "solution-7",
    content: "Solution"
  }, {
    id: "p2p-lost",
    content: "P2P lost"
  }, {
    id: "uid_conflict",
    content: "UID_CONFLICT"
  }, {
    id: "reason-8",
    content: "Reason"
  }, {
    id: "solution-8",
    content: "Solution"
  }, {
    id: "uncaught-domexception-failed-to-execute-addtransceiver-on-rtcpeerconnection-this-operation-is-only-supported-in-unified-plan",
    content: "Uncaught DOMException: Failed to execute 'addTransceiver' on 'RTCPeerConnection': This operation is only supported in 'unified-plan'."
  }, {
    id: "reason-9",
    content: "Reason"
  }, {
    id: "solution-9",
    content: "Solution"
  }, {
    id: "uncaught-typeerror-failed-to-execute-createobjecturl-on-url-no-function-was-found-that-matched-the-signature-provided",
    content: "Uncaught TypeError: Failed to execute 'createObjectURL' on 'URL': No function was found that matched the signature provided"
  }, {
    id: "reason-10",
    content: "Reason"
  }, {
    id: "solution-10",
    content: "Solution"
  }, {
    id: "user-is-not-in-the-session",
    content: "User is not in the session"
  }, {
    id: "reason-11",
    content: "Reason"
  }, {
    id: "solution-11",
    content: "Solution"
  }]
};
export let toc = [{
  depth: 2,
  url: "#cannot-read-property-appendchild-of-null",
  title: _jsx(_Fragment, {
    children: 'Cannot read property "appendChild" of null'
  })
}, {
  depth: 3,
  url: "#reason",
  title: _jsx(_Fragment, {
    children: "Reason"
  })
}, {
  depth: 3,
  url: "#solution",
  title: _jsx(_Fragment, {
    children: "Solution"
  })
}, {
  depth: 2,
  url: "#cannot-read-property-stringuid-of-undefined",
  title: _jsx(_Fragment, {
    children: "Cannot read property 'stringuid' of undefined"
  })
}, {
  depth: 3,
  url: "#reason-1",
  title: _jsx(_Fragment, {
    children: "Reason"
  })
}, {
  depth: 3,
  url: "#solution-1",
  title: _jsx(_Fragment, {
    children: "Solution"
  })
}, {
  depth: 2,
  url: "#connect-choose-server-timeout",
  title: _jsx(_Fragment, {
    children: "Connect choose server timeout"
  })
}, {
  depth: 2,
  url: "#dtls",
  title: _jsx(_Fragment, {
    children: "DTLS"
  })
}, {
  depth: 2,
  url: "#failed-to-execute-addstream-on-rtcpeerconnection-parameter-1-is-not-of-type-mediastream",
  title: _jsx(_Fragment, {
    children: "Failed to execute 'addStream' on 'RTCPeerConnection': parameter 1 is not of type 'MediaStream'"
  })
}, {
  depth: 3,
  url: "#reason-2",
  title: _jsx(_Fragment, {
    children: "Reason"
  })
}, {
  depth: 3,
  url: "#solution-2",
  title: _jsx(_Fragment, {
    children: "Solution"
  })
}, {
  depth: 2,
  url: "#failed-to-load-resource",
  title: _jsx(_Fragment, {
    children: "Failed to load resource"
  })
}, {
  depth: 3,
  url: "#reason-3",
  title: _jsx(_Fragment, {
    children: "Reason"
  })
}, {
  depth: 3,
  url: "#solution-3",
  title: _jsx(_Fragment, {
    children: "Solution"
  })
}, {
  depth: 2,
  url: "#failed-to-set-remote-answer-sdp-called-in-wrong-state-kstable",
  title: _jsx(_Fragment, {
    children: "Failed to set remote answer sdp: Called in wrong state: kStable"
  })
}, {
  depth: 2,
  url: "#media-access-media_not_support-videoaudio-streams-not-supported-yet-enumeratedevices-not-supported",
  title: _jsx(_Fragment, {
    children: "Media access MEDIA_NOT_SUPPORT: video/audio streams not supported yet /enumerateDevices() not supported"
  })
}, {
  depth: 3,
  url: "#reason-4",
  title: _jsx(_Fragment, {
    children: "Reason"
  })
}, {
  depth: 3,
  url: "#solution-4",
  title: _jsx(_Fragment, {
    children: "Solution"
  })
}, {
  depth: 2,
  url: "#invalid-elementid",
  title: _jsx(_Fragment, {
    children: "Invalid elementID"
  })
}, {
  depth: 3,
  url: "#reason-5",
  title: _jsx(_Fragment, {
    children: "Reason"
  })
}, {
  depth: 3,
  url: "#solution-5",
  title: _jsx(_Fragment, {
    children: "Solution"
  })
}, {
  depth: 2,
  url: "#invalid_vendor_key",
  title: _jsx(_Fragment, {
    children: "INVALID_VENDOR_KEY"
  })
}, {
  depth: 3,
  url: "#reason-6",
  title: _jsx(_Fragment, {
    children: "Reason"
  })
}, {
  depth: 3,
  url: "#solution-6",
  title: _jsx(_Fragment, {
    children: "Solution"
  })
}, {
  depth: 2,
  url: "#no_candidates_in_offer",
  title: _jsx(_Fragment, {
    children: "NO_CANDIDATES_IN_OFFER"
  })
}, {
  depth: 2,
  url: "#none-ice-candidate-not-allowed",
  title: _jsx(_Fragment, {
    children: "None Ice Candidate not allowed"
  })
}, {
  depth: 3,
  url: "#reason-7",
  title: _jsx(_Fragment, {
    children: "Reason"
  })
}, {
  depth: 3,
  url: "#solution-7",
  title: _jsx(_Fragment, {
    children: "Solution"
  })
}, {
  depth: 2,
  url: "#p2p-lost",
  title: _jsx(_Fragment, {
    children: "P2P lost"
  })
}, {
  depth: 2,
  url: "#uid_conflict",
  title: _jsx(_Fragment, {
    children: "UID_CONFLICT"
  })
}, {
  depth: 3,
  url: "#reason-8",
  title: _jsx(_Fragment, {
    children: "Reason"
  })
}, {
  depth: 3,
  url: "#solution-8",
  title: _jsx(_Fragment, {
    children: "Solution"
  })
}, {
  depth: 2,
  url: "#uncaught-domexception-failed-to-execute-addtransceiver-on-rtcpeerconnection-this-operation-is-only-supported-in-unified-plan",
  title: _jsx(_Fragment, {
    children: "Uncaught DOMException: Failed to execute 'addTransceiver' on 'RTCPeerConnection': This operation is only supported in 'unified-plan'."
  })
}, {
  depth: 3,
  url: "#reason-9",
  title: _jsx(_Fragment, {
    children: "Reason"
  })
}, {
  depth: 3,
  url: "#solution-9",
  title: _jsx(_Fragment, {
    children: "Solution"
  })
}, {
  depth: 2,
  url: "#uncaught-typeerror-failed-to-execute-createobjecturl-on-url-no-function-was-found-that-matched-the-signature-provided",
  title: _jsx(_Fragment, {
    children: "Uncaught TypeError: Failed to execute 'createObjectURL' on 'URL': No function was found that matched the signature provided"
  })
}, {
  depth: 3,
  url: "#reason-10",
  title: _jsx(_Fragment, {
    children: "Reason"
  })
}, {
  depth: 3,
  url: "#solution-10",
  title: _jsx(_Fragment, {
    children: "Solution"
  })
}, {
  depth: 2,
  url: "#user-is-not-in-the-session",
  title: _jsx(_Fragment, {
    children: "User is not in the session"
  })
}, {
  depth: 3,
  url: "#reason-11",
  title: _jsx(_Fragment, {
    children: "Reason"
  })
}, {
  depth: 3,
  url: "#solution-11",
  title: _jsx(_Fragment, {
    children: "Solution"
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
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "After integrating the Agora Web SDK into your web app, you can debug your code using the console log. This document lists the common errors in the console log."
    }), `
`, _jsx(_components.h2, {
      id: "cannot-read-property-appendchild-of-null",
      children: 'Cannot read property "appendChild" of null'
    }), `
`, _jsx(_components.h3, {
      id: "reason",
      children: "Reason"
    }), `
`, _jsx(_components.p, {
      children: "The played DOM does not exist, or the element ID cannot be found."
    }), `
`, _jsx(_components.h3, {
      id: "solution",
      children: "Solution"
    }), `
`, _jsxs(_components.p, {
      children: ["Ensure that the parent DOM exists when you call ", _jsx(_components.code, {
        children: "Stream.play"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "cannot-read-property-stringuid-of-undefined",
      children: "Cannot read property 'stringuid' of undefined"
    }), `
`, _jsx(_components.h3, {
      id: "reason-1",
      children: "Reason"
    }), `
`, _jsxs(_components.p, {
      children: ["You have called ", _jsx(_components.code, {
        children: "Client.publish"
      }), " before the ", _jsx(_components.code, {
        children: "Client.join"
      }), " method call succeeds."]
    }), `
`, _jsx(_components.h3, {
      id: "solution-1",
      children: "Solution"
    }), `
`, _jsxs(_components.p, {
      children: ["Check your code logic and ensure that you call ", _jsx(_components.code, {
        children: "Client.publish"
      }), " after the ", _jsx(_components.code, {
        children: "Client.join"
      }), " method call succeeds."]
    }), `
`, _jsx(_components.h2, {
      id: "connect-choose-server-timeout",
      children: "Connect choose server timeout"
    }), `
`, _jsxs(_components.p, {
      children: ["Same reason and solution as ", _jsx(_components.a, {
        href: "#failed-to-load-resource",
        children: "Failed to load resource"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "dtls",
      children: "DTLS"
    }), `
`, _jsx(_components.p, {
      children: "The following table lists the possible reasons and corresponding solutions:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Reason"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Solution"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The web browser does not fully support WebRTC."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Use a ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/reference/supported-platforms?platform=web",
              children: "Web browser"
            }), " supporting WebRTC."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The web browser has plugins that prevent WebRTC from getting an ICE candidate on the local device."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Disable the problematic browser plugins."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The user's gateway firewall disables the UDP protocol or the UDP ports greater than 10000."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Disable the firewall or use the ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/build/manage-connection-and-quality/cloud-proxy",
              children: "Agora Cloud Proxy"
            }), " service."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "You set the web browser to use the VP8 codec, but the user uses the Safari browser that does not support VP8."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The user can either upgrade the Safari browser to versions later than 12.1, or use the Chrome browser."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "You set the web browser to use the H.264 codec, but the user's device hardware does not support H.264."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Set the web browser to use VP8."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Connection issues of a network provider."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The user can try switching to a different network, for example, using a cellular data connection."
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["If the error persists after troubleshooting, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "failed-to-execute-addstream-on-rtcpeerconnection-parameter-1-is-not-of-type-mediastream",
      children: "Failed to execute 'addStream' on 'RTCPeerConnection': parameter 1 is not of type 'MediaStream'"
    }), `
`, _jsx(_components.h3, {
      id: "reason-2",
      children: "Reason"
    }), `
`, _jsxs(_components.p, {
      children: ["You have called ", _jsx(_components.code, {
        children: "Client.publish"
      }), " before the ", _jsx(_components.code, {
        children: "Stream.init"
      }), " method call succeeds."]
    }), `
`, _jsx(_components.h3, {
      id: "solution-2",
      children: "Solution"
    }), `
`, _jsxs(_components.p, {
      children: ["Call ", _jsx(_components.code, {
        children: "publish"
      }), " in the ", _jsx(_components.code, {
        children: "onSuccess"
      }), " callback of ", _jsx(_components.code, {
        children: "Stream.init"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "failed-to-load-resource",
      children: "Failed to load resource"
    }), `
`, _jsx(_components.h3, {
      id: "reason-3",
      children: "Reason"
    }), `
`, _jsx(_components.p, {
      children: "The local DNS resolution fails."
    }), `
`, _jsx(_components.h3, {
      id: "solution-3",
      children: "Solution"
    }), `
`, _jsx(_components.p, {
      children: "The user can change the DNS server address and try joining the channel again."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["For a user in Mainland China, change the DNS server address to ", _jsx(_components.code, {
          children: "114.114.114.114"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["For a user outside Mainland China, change the DNS server address to ", _jsx(_components.code, {
          children: "8.8.8.8"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "failed-to-set-remote-answer-sdp-called-in-wrong-state-kstable",
      children: "Failed to set remote answer sdp: Called in wrong state: kStable"
    }), `
`, _jsxs(_components.p, {
      children: ["This error is caused by calling ", _jsx(_components.code, {
        children: "switchDevice"
      }), " and can be ignored."]
    }), `
`, _jsx(_components.h2, {
      id: "media-access-media_not_support-videoaudio-streams-not-supported-yet-enumeratedevices-not-supported",
      children: "Media access MEDIA_NOT_SUPPORT: video/audio streams not supported yet /enumerateDevices() not supported"
    }), `
`, _jsx(_components.h3, {
      id: "reason-4",
      children: "Reason"
    }), `
`, _jsx(_components.p, {
      children: "Possible reasons:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The web browser is incompatible with the Agora Web SDK."
      }), `
`, _jsx(_components.li, {
        children: "HTTPS protocol is not used."
      }), `
`, _jsx(_components.li, {
        children: "Localhost is not used."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "solution-4",
      children: "Solution"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Use a supported ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc/reference/supported-platforms/web",
          children: "Web browser"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Deploy your web app through HTTPS or localhost."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "invalid-elementid",
      children: "Invalid elementID"
    }), `
`, _jsx(_components.h3, {
      id: "reason-5",
      children: "Reason"
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "HTMLElementID"
      }), " specified in ", _jsx(_components.code, {
        children: "Stream.play"
      }), " is invalid."]
    }), `
`, _jsx(_components.h3, {
      id: "solution-5",
      children: "Solution"
    }), `
`, _jsxs(_components.p, {
      children: ["Ensure that the string in ", _jsx(_components.code, {
        children: "HTMLElementID"
      }), ' contains only "_", "-", ".", or any digits and letters in the ASCII character set. The string must be non-empty and less than 256 bytes in length.']
    }), `
`, _jsx(_components.h2, {
      id: "invalid_vendor_key",
      children: "INVALID_VENDOR_KEY"
    }), `
`, _jsx(_components.h3, {
      id: "reason-6",
      children: "Reason"
    }), `
`, _jsx(_components.p, {
      children: "Possible reasons:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The App ID is invalid. For example, the Agora project is disabled, or the App ID is not yet active within a newly created project."
      }), `
`, _jsx(_components.li, {
        children: "The token is invalid."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "solution-6",
      children: "Solution"
    }), `
`, _jsxs(_components.p, {
      children: ["Check your settings for ", _jsx(_components.code, {
        children: "appId"
      }), " in ", _jsx(_components.code, {
        children: "Client.init"
      }), " and ", _jsx(_components.code, {
        children: "tokenOrKey"
      }), " in ", _jsx(_components.code, {
        children: "Client.join"
      }), ". Ensure that the App ID and token are correct and valid."]
    }), `
`, _jsx(_components.h2, {
      id: "no_candidates_in_offer",
      children: "NO_CANDIDATES_IN_OFFER"
    }), `
`, _jsxs(_components.p, {
      children: ["Same reason and solution as ", _jsx(_components.a, {
        href: "#candidate",
        children: "None Ice Candidate not allowed"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "none-ice-candidate-not-allowed",
      children: "None Ice Candidate not allowed"
    }), `
`, _jsx(_components.h3, {
      id: "reason-7",
      children: "Reason"
    }), `
`, _jsxs(_components.p, {
      children: ["When establishing a WebRTC connection, the SDK fails to find any ", _jsx(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Glossary/ICE",
        children: "ICE"
      }), " (Interactive Connectivity Establishment) candidate."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "A candidate contains the IP address and port information for connecting to a remote device."
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "solution-7",
      children: "Solution"
    }), `
`, _jsxs(_components.p, {
      children: ["The type of candidates used for connection depends on whether you have enabled ", _jsx(_components.a, {
        href: "/en/realtime-media/rtc/build/manage-connection-and-quality/cloud-proxy",
        children: "cloud proxy"
      }), " or not. Choose one of the following solutions accordingly."]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "If you have enabled cloud proxy, the SDK gets relay candidates from a TURN server. Check whether you have whitelisted the IP addresses and ports that Agora provides for cloud proxy, and ensure that the local client can connect to the TURN server."
      }), `
`, _jsxs(_components.li, {
        children: ["If you have not enabled cloud proxy, the SDK gets host candidates from the local device. In this case, the error is usually caused by the security settings of the local device.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Check whether the browser has any plugins that disable WebRTC."
          }), `
`, _jsxs(_components.li, {
            children: ["Ensure that you have enabled UDP in the system firewall, and added the ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/reference/cloud-proxy-allowed-ips",
              children: "specified domains and ports"
            }), " to the whitelist."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "p2p-lost",
      children: "P2P lost"
    }), `
`, _jsxs(_components.p, {
      children: ["Same reason and solution as ", _jsx(_components.a, {
        href: "#dtls",
        children: "DTLS failed"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "uid_conflict",
      children: "UID_CONFLICT"
    }), `
`, _jsx(_components.h3, {
      id: "reason-8",
      children: "Reason"
    }), `
`, _jsxs(_components.p, {
      children: ["Multiple users joins the channel with the same ", _jsx(_components.code, {
        children: "uid"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "solution-8",
      children: "Solution"
    }), `
`, _jsxs(_components.p, {
      children: ["Ensure that all users in a channel have a unique ", _jsx(_components.code, {
        children: "uid"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "uncaught-domexception-failed-to-execute-addtransceiver-on-rtcpeerconnection-this-operation-is-only-supported-in-unified-plan",
      children: "Uncaught DOMException: Failed to execute 'addTransceiver' on 'RTCPeerConnection': This operation is only supported in 'unified-plan'."
    }), `
`, _jsx(_components.h3, {
      id: "reason-9",
      children: "Reason"
    }), `
`, _jsx(_components.p, {
      children: "A mobile device emulator is running in the web browser."
    }), `
`, _jsx(_components.h3, {
      id: "solution-9",
      children: "Solution"
    }), `
`, _jsx(_components.p, {
      children: "Agora Web SDK does not support emulated mobile devices. Do not use an emulator to debug your app."
    }), `
`, _jsx(_components.h2, {
      id: "uncaught-typeerror-failed-to-execute-createobjecturl-on-url-no-function-was-found-that-matched-the-signature-provided",
      children: "Uncaught TypeError: Failed to execute 'createObjectURL' on 'URL': No function was found that matched the signature provided"
    }), `
`, _jsx(_components.h3, {
      id: "reason-10",
      children: "Reason"
    }), `
`, _jsx(_components.p, {
      children: "A mobile device emulator is running in the web browser."
    }), `
`, _jsx(_components.h3, {
      id: "solution-10",
      children: "Solution"
    }), `
`, _jsx(_components.p, {
      children: "Agora Web SDK does not support mobile device emulators. Do not use an emulator to debug your app."
    }), `
`, _jsx(_components.h2, {
      id: "user-is-not-in-the-session",
      children: "User is not in the session"
    }), `
`, _jsx(_components.h3, {
      id: "reason-11",
      children: "Reason"
    }), `
`, _jsxs(_components.p, {
      children: ["The connection has not been established. This is usually the result of an incorrect API call sequence, for example, calling ", _jsx(_components.code, {
        children: "Client.publish"
      }), " after ", _jsx(_components.code, {
        children: "Client.leave"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "solution-11",
      children: "Solution"
    }), `
`, _jsx(_components.p, {
      children: "Check your API call sequence."
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
