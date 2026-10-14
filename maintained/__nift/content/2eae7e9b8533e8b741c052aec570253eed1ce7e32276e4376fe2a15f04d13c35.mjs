import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Pricing",
  description: "Introduces the billing policy for Media Push provided by Agora."
};
export let _markdown = `

This article introduces the billing policy for the Media Push service provided by Agora.

Your billing details may differ if you have signed a contract with Agora.

## Overview [#overview]

Agora calculates the billing of all projects under your Agora account on a monthly basis.

Billing for Media Push begins once you enable the Media Push service. At present, the Media Push service only charges you for pushing media streams to the CDN, which consists of subscription fees and transcoding fees.

For details, see [What are Agora’s policies on billing, fee deductions, and account suspension](../reference/billing-policies).

## Calculation [#calculation]

The procedure for pushing streams to the CDN is as follows:

1. The host publishes audio or video streams, and the streams are transmitted through the Agora SDRTN<sup>®</sup>.
2. The Agora streaming server subscribes to the streams transmitted through the Agora SDRTN<sup>®</sup>.
3. The Agora streaming server transcodes the subscribed streams.
4. The Agora streaming server pushes the transcoded streams to the CDN.

Agora only charges you for **subscribing** to streams and **transcoding** the subscribed streams.

## Subscription fee [#subscription-fee]

![1646028221318](https://web-cdn.agora.io/docs-files/1646028221318)

The fee you pay for stream subscription is divided into audio stream charges and video stream charges:

* Audio stream charges = unit price for audio × audio subscription minutes
* Video stream charges = unit price for video × video subscription minutes

When you begin publishing streams in your channel, the Agora streaming server joins your channel as an audience member and subscribes to the streams you publish. This process is the same as an audience member subscribing to the streams published by the host in the channel. You can refer to [Pricing for Real-time Communication](/en/realtime-media/rtc/reference/pricing) for more information about subscription fees.

The subscription minutes for audio and video streams are included in [the audio and video service minutes](/en/realtime-media/rtc/reference/pricing) calculated when you implement an RTC SDK function. Agora's free-of-charge policy for the first 10,000 minutes applies to these subscription fees. See [Agora's free-of-charge policy for the first 10,000 minutes](../reference/billing-policies#free-of-charge-policy) for details.

In a dual-stream use-case, Agora only subscribes to the high-quality video streams published by the host. In this case, the subscription fee for video streams is calculated based on the aggregate resolution of the high-quality video.

## Transcoding fee [#transcoding-fee]

The Agora streaming server charges you when transcoding the subscribed streams. &#x2A;*The transcoding fee is cumulative, depending on the category and type of the output media stream.**

Agora's free-of-charge policy for the first 10,000 minutes does not apply to the transcoding fee.

The transcoding fee includes:

* Audio transcoding fee: occurs when the Agora streaming server transcodes audio streams. Audio transcoding fee = unit price for audio transcoding × total length of transcoded audio streams
* Video transcoding fee: occurs when the Agora streaming server transcodes video streams. Video transcoding fee = unit price for video transcoding × total length of transcoded video streams.

Agora only charges a video transcoding fee when the Agora streaming server transcodes audio and video streams at the same time.

### Unit price for transcoding [#unit-price-for-transcoding]

#### In a multi-hosted interactive streaming use-case: [#in-a-multi-hosted-interactive-streaming-use-case]

| Category           | Pricing ($US/1,000 minutes)                                            |
| :----------------- | :--------------------------------------------------------------------- |
| Audio streams      | 3.99                                                                   |
| H.264 video stream | * High-Definition (HD): 7.99

* Full High-Definition (Full HD): 15.99  |
| H.265 video stream | - High-Definition (HD): 19.99

- Full High-Definition (Full HD): 39.99 |

| Type                           | The resolution of the output video after transcoding           |
| :----------------------------- | :------------------------------------------------------------- |
| High-Definition (HD)           | Up to 921,600 (1280 × 720)                                     |
| Full High-Definition (Full HD) | From greater than 921600 (1280 × 720) to 2073600 (1920 × 1080) |

You can set the resolution of output video in the \`width\` and \`height\` properties of the \`LiveTranscoding\` class. The resolution of output video transcoded by Agora is no higher than 1920 × 1080.

When there is more than one host publishing streams in a channel, the transcoding fee is charged according to **the multi-hosted interactive streaming use-case**. For example, if there are two hosts in a channel, and they choose to only transcode their own media streams, the transcoding fee is calculated based on the **unit price for transcoding streams in a multi-hosted interactive streaming use-case**.

#### In an interactive streaming use-case where there is only one host: [#in-an-interactive-streaming-use-case-where-there-is-only-one-host]

The following table shows the unit price for transcoding streams in an interactive streaming use-case where there is only one host, and the properties (resolution, framerate, and bitrate) of the video streams remain unchanged after transcoding:

| Category           | Pricing ($US/1,000 minutes) |
| :----------------- | :-------------------------- |
| Audio streams      | 1.99                        |
| H.264 video stream | 1.99                        |

When the Agora streaming server transcodes streams in an interactive streaming use-case where there is only one host, and the properties (resolution, framerate, and bitrate) of the video streams need to be changed, the transcoding fee is charged according to the [multi-hosted interactive streaming use-case](#unit-price-for-transcoding).

### Length of time for transcoding streams [#length-of-time-for-transcoding-streams]

Agora monitors the whole process of you pushing media streams to the CDN. The transcoding fee is charged based on the amount of time you use from successfully pushing streams to the end of your push.

Agora calculates the amount of time you use for transcoding in seconds.

The length of time for transcoding is shown in minutes in the Agora Console and in seconds in your billing details. If the length of time you use for transcoding is less than 1 second, Agora calculates it as 1 second; if less than 1 minute, Agora calculates it as 1 minute.

The length of time for transcoding can be divided into the following two types:

* Time for transcoding video streams: the length of time that the Agora streaming server transcodes video streams.
* Time for transcoding audio streams: the length of time that the Agora streaming server transcodes audio streams.

### Examples [#examples]

#### Cohosted audio streaming [#cohosted-audio-streaming]

**Use-case description**: In a cohosted audio streaming use-case, the audio streams are mixed as one stream after transcoding and pushed to the CDN. The cohosted audio streaming lasts for 20 minutes, Subsequently, one host leaves the channel, and the other continues the audio streaming for another 20 minutes.

**Billing plan**: Audio transcoding fee occurs during the first 20 minutes when there is co-hosted audio streaming, and during the last 20 minutes when the host continues the audio streaming and pushes streams.

Transcoding fee = 3.99 ($US/1,000 minutes) × 20/1,000 + 1.99 ($US/1,000 minutes) × 20/1,000

#### Cohosted audio and video streaming [#cohosted-audio-and-video-streaming]

**Use-case description**:In an audio and video streaming cohosted by A and B, the media streams published by these two hosts are processed according to the following settings:

* Host A is the left side of the screen and host B is on the right side of the screen. The Agora streaming server performs the transcoding according to this screen layout, outputs a media stream with a resolution of 1280 × 720, and pushes the stream to a CDN address.
* Host A is on the right side of the screen and host B is on the left side of the screen. The Agora streaming server performs the transcoding according to this screen layout, outputs another media stream with a resolution of 1920 × 1080, and pushes the stream to another CDN address.

H.264 encoding is used when transcoding both of the streams, and the cohosted audio and video streaming lasts for 20 minutes.

**Billing plan**: In the cohosted audio and video streaming, audio and video streams are transcoded at the same time, and Agora only charges a video transcoding fee. One of the output streams is in HD, while the other is in Full HD, and both streams incur transcoding fees.

Transcoding fee = 7.99 ($US/1,000 minutes) × 20/1,000 + 15.99 ($US/1,000 minutes) × 20/1,000
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This article introduces the billing policy for the Media Push service provided by Agora."
  }, {
    heading: undefined,
    content: "Your billing details may differ if you have signed a contract with Agora."
  }, {
    heading: "overview",
    content: "Agora calculates the billing of all projects under your Agora account on a monthly basis."
  }, {
    heading: "overview",
    content: "Billing for Media Push begins once you enable the Media Push service. At present, the Media Push service only charges you for pushing media streams to the CDN, which consists of subscription fees and transcoding fees."
  }, {
    heading: "overview",
    content: "For details, see What are Agora’s policies on billing, fee deductions, and account suspension."
  }, {
    heading: "calculation",
    content: "The procedure for pushing streams to the CDN is as follows:"
  }, {
    heading: "calculation",
    content: "The host publishes audio or video streams, and the streams are transmitted through the Agora SDRTN<sup>®</sup>."
  }, {
    heading: "calculation",
    content: "The Agora streaming server subscribes to the streams transmitted through the Agora SDRTN<sup>®</sup>."
  }, {
    heading: "calculation",
    content: "The Agora streaming server transcodes the subscribed streams."
  }, {
    heading: "calculation",
    content: "The Agora streaming server pushes the transcoded streams to the CDN."
  }, {
    heading: "calculation",
    content: "Agora only charges you for **subscribing** to streams and **transcoding** the subscribed streams."
  }, {
    heading: "subscription-fee",
    content: "The fee you pay for stream subscription is divided into audio stream charges and video stream charges:"
  }, {
    heading: "subscription-fee",
    content: "Audio stream charges = unit price for audio × audio subscription minutes"
  }, {
    heading: "subscription-fee",
    content: "Video stream charges = unit price for video × video subscription minutes"
  }, {
    heading: "subscription-fee",
    content: "When you begin publishing streams in your channel, the Agora streaming server joins your channel as an audience member and subscribes to the streams you publish. This process is the same as an audience member subscribing to the streams published by the host in the channel. You can refer to Pricing for Real-time Communication for more information about subscription fees."
  }, {
    heading: "subscription-fee",
    content: "The subscription minutes for audio and video streams are included in the audio and video service minutes calculated when you implement an RTC SDK function. Agora's free-of-charge policy for the first 10,000 minutes applies to these subscription fees. See Agora's free-of-charge policy for the first 10,000 minutes for details."
  }, {
    heading: "subscription-fee",
    content: "In a dual-stream use-case, Agora only subscribes to the high-quality video streams published by the host. In this case, the subscription fee for video streams is calculated based on the aggregate resolution of the high-quality video."
  }, {
    heading: "transcoding-fee",
    content: "The Agora streaming server charges you when transcoding the subscribed streams. &#x2A;*The transcoding fee is cumulative, depending on the category and type of the output media stream.**"
  }, {
    heading: "transcoding-fee",
    content: "Agora's free-of-charge policy for the first 10,000 minutes does not apply to the transcoding fee."
  }, {
    heading: "transcoding-fee",
    content: "The transcoding fee includes:"
  }, {
    heading: "transcoding-fee",
    content: "Audio transcoding fee: occurs when the Agora streaming server transcodes audio streams. Audio transcoding fee = unit price for audio transcoding × total length of transcoded audio streams"
  }, {
    heading: "transcoding-fee",
    content: "Video transcoding fee: occurs when the Agora streaming server transcodes video streams. Video transcoding fee = unit price for video transcoding × total length of transcoded video streams."
  }, {
    heading: "transcoding-fee",
    content: "Agora only charges a video transcoding fee when the Agora streaming server transcodes audio and video streams at the same time."
  }, {
    heading: "in-a-multi-hosted-interactive-streaming-use-case",
    content: "Category"
  }, {
    heading: "in-a-multi-hosted-interactive-streaming-use-case",
    content: "Pricing ($US/1,000 minutes)"
  }, {
    heading: "in-a-multi-hosted-interactive-streaming-use-case",
    content: "Audio streams"
  }, {
    heading: "in-a-multi-hosted-interactive-streaming-use-case",
    content: "3.99"
  }, {
    heading: "in-a-multi-hosted-interactive-streaming-use-case",
    content: "H.264 video stream"
  }, {
    heading: "in-a-multi-hosted-interactive-streaming-use-case",
    content: `* High-Definition (HD): 7.99

* Full High-Definition (Full HD): 15.99`
  }, {
    heading: "in-a-multi-hosted-interactive-streaming-use-case",
    content: "H.265 video stream"
  }, {
    heading: "in-a-multi-hosted-interactive-streaming-use-case",
    content: `* High-Definition (HD): 19.99

* Full High-Definition (Full HD): 39.99`
  }, {
    heading: "in-a-multi-hosted-interactive-streaming-use-case",
    content: "Type"
  }, {
    heading: "in-a-multi-hosted-interactive-streaming-use-case",
    content: "The resolution of the output video after transcoding"
  }, {
    heading: "in-a-multi-hosted-interactive-streaming-use-case",
    content: "High-Definition (HD)"
  }, {
    heading: "in-a-multi-hosted-interactive-streaming-use-case",
    content: "Up to 921,600 (1280 × 720)"
  }, {
    heading: "in-a-multi-hosted-interactive-streaming-use-case",
    content: "Full High-Definition (Full HD)"
  }, {
    heading: "in-a-multi-hosted-interactive-streaming-use-case",
    content: "From greater than 921600 (1280 × 720) to 2073600 (1920 × 1080)"
  }, {
    heading: "in-a-multi-hosted-interactive-streaming-use-case",
    content: "You can set the resolution of output video in the `width` and `height` properties of the `LiveTranscoding` class. The resolution of output video transcoded by Agora is no higher than 1920 × 1080."
  }, {
    heading: "in-a-multi-hosted-interactive-streaming-use-case",
    content: "When there is more than one host publishing streams in a channel, the transcoding fee is charged according to **the multi-hosted interactive streaming use-case**. For example, if there are two hosts in a channel, and they choose to only transcode their own media streams, the transcoding fee is calculated based on the **unit price for transcoding streams in a multi-hosted interactive streaming use-case**."
  }, {
    heading: "in-an-interactive-streaming-use-case-where-there-is-only-one-host",
    content: "The following table shows the unit price for transcoding streams in an interactive streaming use-case where there is only one host, and the properties (resolution, framerate, and bitrate) of the video streams remain unchanged after transcoding:"
  }, {
    heading: "in-an-interactive-streaming-use-case-where-there-is-only-one-host",
    content: "Category"
  }, {
    heading: "in-an-interactive-streaming-use-case-where-there-is-only-one-host",
    content: "Pricing ($US/1,000 minutes)"
  }, {
    heading: "in-an-interactive-streaming-use-case-where-there-is-only-one-host",
    content: "Audio streams"
  }, {
    heading: "in-an-interactive-streaming-use-case-where-there-is-only-one-host",
    content: "1.99"
  }, {
    heading: "in-an-interactive-streaming-use-case-where-there-is-only-one-host",
    content: "H.264 video stream"
  }, {
    heading: "in-an-interactive-streaming-use-case-where-there-is-only-one-host",
    content: "1.99"
  }, {
    heading: "in-an-interactive-streaming-use-case-where-there-is-only-one-host",
    content: "When the Agora streaming server transcodes streams in an interactive streaming use-case where there is only one host, and the properties (resolution, framerate, and bitrate) of the video streams need to be changed, the transcoding fee is charged according to the multi-hosted interactive streaming use-case."
  }, {
    heading: "length-of-time-for-transcoding-streams",
    content: "Agora monitors the whole process of you pushing media streams to the CDN. The transcoding fee is charged based on the amount of time you use from successfully pushing streams to the end of your push."
  }, {
    heading: "length-of-time-for-transcoding-streams",
    content: "Agora calculates the amount of time you use for transcoding in seconds."
  }, {
    heading: "length-of-time-for-transcoding-streams",
    content: "The length of time for transcoding is shown in minutes in the Agora Console and in seconds in your billing details. If the length of time you use for transcoding is less than 1 second, Agora calculates it as 1 second; if less than 1 minute, Agora calculates it as 1 minute."
  }, {
    heading: "length-of-time-for-transcoding-streams",
    content: "The length of time for transcoding can be divided into the following two types:"
  }, {
    heading: "length-of-time-for-transcoding-streams",
    content: "Time for transcoding video streams: the length of time that the Agora streaming server transcodes video streams."
  }, {
    heading: "length-of-time-for-transcoding-streams",
    content: "Time for transcoding audio streams: the length of time that the Agora streaming server transcodes audio streams."
  }, {
    heading: "cohosted-audio-streaming",
    content: "**Use-case description**: In a cohosted audio streaming use-case, the audio streams are mixed as one stream after transcoding and pushed to the CDN. The cohosted audio streaming lasts for 20 minutes, Subsequently, one host leaves the channel, and the other continues the audio streaming for another 20 minutes."
  }, {
    heading: "cohosted-audio-streaming",
    content: "**Billing plan**: Audio transcoding fee occurs during the first 20 minutes when there is co-hosted audio streaming, and during the last 20 minutes when the host continues the audio streaming and pushes streams."
  }, {
    heading: "cohosted-audio-streaming",
    content: "Transcoding fee = 3.99 ($US/1,000 minutes) × 20/1,000 + 1.99 ($US/1,000 minutes) × 20/1,000"
  }, {
    heading: "cohosted-audio-and-video-streaming",
    content: "**Use-case description**:In an audio and video streaming cohosted by A and B, the media streams published by these two hosts are processed according to the following settings:"
  }, {
    heading: "cohosted-audio-and-video-streaming",
    content: "Host A is the left side of the screen and host B is on the right side of the screen. The Agora streaming server performs the transcoding according to this screen layout, outputs a media stream with a resolution of 1280 × 720, and pushes the stream to a CDN address."
  }, {
    heading: "cohosted-audio-and-video-streaming",
    content: "Host A is on the right side of the screen and host B is on the left side of the screen. The Agora streaming server performs the transcoding according to this screen layout, outputs another media stream with a resolution of 1920 × 1080, and pushes the stream to another CDN address."
  }, {
    heading: "cohosted-audio-and-video-streaming",
    content: "H.264 encoding is used when transcoding both of the streams, and the cohosted audio and video streaming lasts for 20 minutes."
  }, {
    heading: "cohosted-audio-and-video-streaming",
    content: "**Billing plan**: In the cohosted audio and video streaming, audio and video streams are transcoded at the same time, and Agora only charges a video transcoding fee. One of the output streams is in HD, while the other is in Full HD, and both streams incur transcoding fees."
  }, {
    heading: "cohosted-audio-and-video-streaming",
    content: "Transcoding fee = 7.99 ($US/1,000 minutes) × 20/1,000 + 15.99 ($US/1,000 minutes) × 20/1,000"
  }],
  headings: [{
    id: "overview",
    content: "Overview"
  }, {
    id: "calculation",
    content: "Calculation"
  }, {
    id: "subscription-fee",
    content: "Subscription fee"
  }, {
    id: "transcoding-fee",
    content: "Transcoding fee"
  }, {
    id: "unit-price-for-transcoding",
    content: "Unit price for transcoding"
  }, {
    id: "in-a-multi-hosted-interactive-streaming-use-case",
    content: "In a multi-hosted interactive streaming use-case:"
  }, {
    id: "in-an-interactive-streaming-use-case-where-there-is-only-one-host",
    content: "In an interactive streaming use-case where there is only one host:"
  }, {
    id: "length-of-time-for-transcoding-streams",
    content: "Length of time for transcoding streams"
  }, {
    id: "examples",
    content: "Examples"
  }, {
    id: "cohosted-audio-streaming",
    content: "Cohosted audio streaming"
  }, {
    id: "cohosted-audio-and-video-streaming",
    content: "Cohosted audio and video streaming"
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
  url: "#calculation",
  title: _jsx(_Fragment, {
    children: "Calculation"
  })
}, {
  depth: 2,
  url: "#subscription-fee",
  title: _jsx(_Fragment, {
    children: "Subscription fee"
  })
}, {
  depth: 2,
  url: "#transcoding-fee",
  title: _jsx(_Fragment, {
    children: "Transcoding fee"
  })
}, {
  depth: 3,
  url: "#unit-price-for-transcoding",
  title: _jsx(_Fragment, {
    children: "Unit price for transcoding"
  })
}, {
  depth: 4,
  url: "#in-a-multi-hosted-interactive-streaming-use-case",
  title: _jsx(_Fragment, {
    children: "In a multi-hosted interactive streaming use-case:"
  })
}, {
  depth: 4,
  url: "#in-an-interactive-streaming-use-case-where-there-is-only-one-host",
  title: _jsx(_Fragment, {
    children: "In an interactive streaming use-case where there is only one host:"
  })
}, {
  depth: 3,
  url: "#length-of-time-for-transcoding-streams",
  title: _jsx(_Fragment, {
    children: "Length of time for transcoding streams"
  })
}, {
  depth: 3,
  url: "#examples",
  title: _jsx(_Fragment, {
    children: "Examples"
  })
}, {
  depth: 4,
  url: "#cohosted-audio-streaming",
  title: _jsx(_Fragment, {
    children: "Cohosted audio streaming"
  })
}, {
  depth: 4,
  url: "#cohosted-audio-and-video-streaming",
  title: _jsx(_Fragment, {
    children: "Cohosted audio and video streaming"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    div: "div",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
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
    children: [_jsx(_components.p, {
      children: "This article introduces the billing policy for the Media Push service provided by Agora."
    }), `
`, _jsx(_components.p, {
      children: "Your billing details may differ if you have signed a contract with Agora."
    }), `
`, _jsx(_components.h2, {
      id: "overview",
      children: "Overview"
    }), `
`, _jsx(_components.p, {
      children: "Agora calculates the billing of all projects under your Agora account on a monthly basis."
    }), `
`, _jsx(_components.p, {
      children: "Billing for Media Push begins once you enable the Media Push service. At present, the Media Push service only charges you for pushing media streams to the CDN, which consists of subscription fees and transcoding fees."
    }), `
`, _jsxs(_components.p, {
      children: ["For details, see ", _jsx(_components.a, {
        href: "../reference/billing-policies",
        children: "What are Agora’s policies on billing, fee deductions, and account suspension"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "calculation",
      children: "Calculation"
    }), `
`, _jsx(_components.p, {
      children: "The procedure for pushing streams to the CDN is as follows:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["The host publishes audio or video streams, and the streams are transmitted through the Agora SDRTN", "®", "."]
      }), `
`, _jsxs(_components.li, {
        children: ["The Agora streaming server subscribes to the streams transmitted through the Agora SDRTN", "®", "."]
      }), `
`, _jsx(_components.li, {
        children: "The Agora streaming server transcodes the subscribed streams."
      }), `
`, _jsx(_components.li, {
        children: "The Agora streaming server pushes the transcoded streams to the CDN."
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["Agora only charges you for ", _jsx(_components.strong, {
        children: "subscribing"
      }), " to streams and ", _jsx(_components.strong, {
        children: "transcoding"
      }), " the subscribed streams."]
    }), `
`, _jsx(_components.h2, {
      id: "subscription-fee",
      children: "Subscription fee"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1646028221318",
        alt: "1646028221318"
      })
    }), `
`, _jsx(_components.p, {
      children: "The fee you pay for stream subscription is divided into audio stream charges and video stream charges:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Audio stream charges = unit price for audio × audio subscription minutes"
      }), `
`, _jsx(_components.li, {
        children: "Video stream charges = unit price for video × video subscription minutes"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["When you begin publishing streams in your channel, the Agora streaming server joins your channel as an audience member and subscribes to the streams you publish. This process is the same as an audience member subscribing to the streams published by the host in the channel. You can refer to ", _jsx(_components.a, {
        href: "/en/realtime-media/rtc/reference/pricing",
        children: "Pricing for Real-time Communication"
      }), " for more information about subscription fees."]
    }), `
`, _jsxs(_components.p, {
      children: ["The subscription minutes for audio and video streams are included in ", _jsx(_components.a, {
        href: "/en/realtime-media/rtc/reference/pricing",
        children: "the audio and video service minutes"
      }), " calculated when you implement an RTC SDK function. Agora's free-of-charge policy for the first 10,000 minutes applies to these subscription fees. See ", _jsx(_components.a, {
        href: "../reference/billing-policies#free-of-charge-policy",
        children: "Agora's free-of-charge policy for the first 10,000 minutes"
      }), " for details."]
    }), `
`, _jsx(_components.p, {
      children: "In a dual-stream use-case, Agora only subscribes to the high-quality video streams published by the host. In this case, the subscription fee for video streams is calculated based on the aggregate resolution of the high-quality video."
    }), `
`, _jsx(_components.h2, {
      id: "transcoding-fee",
      children: "Transcoding fee"
    }), `
`, _jsxs(_components.p, {
      children: ["The Agora streaming server charges you when transcoding the subscribed streams. ", _jsx(_components.strong, {
        children: "The transcoding fee is cumulative, depending on the category and type of the output media stream."
      })]
    }), `
`, _jsx(_components.p, {
      children: "Agora's free-of-charge policy for the first 10,000 minutes does not apply to the transcoding fee."
    }), `
`, _jsx(_components.p, {
      children: "The transcoding fee includes:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Audio transcoding fee: occurs when the Agora streaming server transcodes audio streams. Audio transcoding fee = unit price for audio transcoding × total length of transcoded audio streams"
      }), `
`, _jsx(_components.li, {
        children: "Video transcoding fee: occurs when the Agora streaming server transcodes video streams. Video transcoding fee = unit price for video transcoding × total length of transcoded video streams."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Agora only charges a video transcoding fee when the Agora streaming server transcodes audio and video streams at the same time."
    }), `
`, _jsx(_components.h3, {
      id: "unit-price-for-transcoding",
      children: "Unit price for transcoding"
    }), `
`, _jsx(_components.h4, {
      id: "in-a-multi-hosted-interactive-streaming-use-case",
      children: "In a multi-hosted interactive streaming use-case:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Category"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Pricing ($US/1,000 minutes)"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Audio streams"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "3.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "H.264 video stream"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "High-Definition (HD): 7.99"
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Full High-Definition (Full HD): 15.99"
                }), `
`]
              }), `
`]
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "H.265 video stream"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "High-Definition (HD): 19.99"
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Full High-Definition (Full HD): 39.99"
                }), `
`]
              }), `
`]
            })
          })]
        })]
      })]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "The resolution of the output video after transcoding"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "High-Definition (HD)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Up to 921,600 (1280 × 720)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Full High-Definition (Full HD)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "From greater than 921600 (1280 × 720) to 2073600 (1920 × 1080)"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["You can set the resolution of output video in the ", _jsx(_components.code, {
        children: "width"
      }), " and ", _jsx(_components.code, {
        children: "height"
      }), " properties of the ", _jsx(_components.code, {
        children: "LiveTranscoding"
      }), " class. The resolution of output video transcoded by Agora is no higher than 1920 × 1080."]
    }), `
`, _jsxs(_components.p, {
      children: ["When there is more than one host publishing streams in a channel, the transcoding fee is charged according to ", _jsx(_components.strong, {
        children: "the multi-hosted interactive streaming use-case"
      }), ". For example, if there are two hosts in a channel, and they choose to only transcode their own media streams, the transcoding fee is calculated based on the ", _jsx(_components.strong, {
        children: "unit price for transcoding streams in a multi-hosted interactive streaming use-case"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "in-an-interactive-streaming-use-case-where-there-is-only-one-host",
      children: "In an interactive streaming use-case where there is only one host:"
    }), `
`, _jsx(_components.p, {
      children: "The following table shows the unit price for transcoding streams in an interactive streaming use-case where there is only one host, and the properties (resolution, framerate, and bitrate) of the video streams remain unchanged after transcoding:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Category"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Pricing ($US/1,000 minutes)"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Audio streams"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "H.264 video stream"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1.99"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["When the Agora streaming server transcodes streams in an interactive streaming use-case where there is only one host, and the properties (resolution, framerate, and bitrate) of the video streams need to be changed, the transcoding fee is charged according to the ", _jsx(_components.a, {
        href: "#unit-price-for-transcoding",
        children: "multi-hosted interactive streaming use-case"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "length-of-time-for-transcoding-streams",
      children: "Length of time for transcoding streams"
    }), `
`, _jsx(_components.p, {
      children: "Agora monitors the whole process of you pushing media streams to the CDN. The transcoding fee is charged based on the amount of time you use from successfully pushing streams to the end of your push."
    }), `
`, _jsx(_components.p, {
      children: "Agora calculates the amount of time you use for transcoding in seconds."
    }), `
`, _jsx(_components.p, {
      children: "The length of time for transcoding is shown in minutes in the Agora Console and in seconds in your billing details. If the length of time you use for transcoding is less than 1 second, Agora calculates it as 1 second; if less than 1 minute, Agora calculates it as 1 minute."
    }), `
`, _jsx(_components.p, {
      children: "The length of time for transcoding can be divided into the following two types:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Time for transcoding video streams: the length of time that the Agora streaming server transcodes video streams."
      }), `
`, _jsx(_components.li, {
        children: "Time for transcoding audio streams: the length of time that the Agora streaming server transcodes audio streams."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "examples",
      children: "Examples"
    }), `
`, _jsx(_components.h4, {
      id: "cohosted-audio-streaming",
      children: "Cohosted audio streaming"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Use-case description"
      }), ": In a cohosted audio streaming use-case, the audio streams are mixed as one stream after transcoding and pushed to the CDN. The cohosted audio streaming lasts for 20 minutes, Subsequently, one host leaves the channel, and the other continues the audio streaming for another 20 minutes."]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Billing plan"
      }), ": Audio transcoding fee occurs during the first 20 minutes when there is co-hosted audio streaming, and during the last 20 minutes when the host continues the audio streaming and pushes streams."]
    }), `
`, _jsx(_components.p, {
      children: "Transcoding fee = 3.99 ($US/1,000 minutes) × 20/1,000 + 1.99 ($US/1,000 minutes) × 20/1,000"
    }), `
`, _jsx(_components.h4, {
      id: "cohosted-audio-and-video-streaming",
      children: "Cohosted audio and video streaming"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Use-case description"
      }), _jsx(_components.div, {}), " an audio and video streaming cohosted by A and B, the media streams published by these two hosts are processed according to the following settings:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Host A is the left side of the screen and host B is on the right side of the screen. The Agora streaming server performs the transcoding according to this screen layout, outputs a media stream with a resolution of 1280 × 720, and pushes the stream to a CDN address."
      }), `
`, _jsx(_components.li, {
        children: "Host A is on the right side of the screen and host B is on the left side of the screen. The Agora streaming server performs the transcoding according to this screen layout, outputs another media stream with a resolution of 1920 × 1080, and pushes the stream to another CDN address."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "H.264 encoding is used when transcoding both of the streams, and the cohosted audio and video streaming lasts for 20 minutes."
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Billing plan"
      }), ": In the cohosted audio and video streaming, audio and video streams are transcoded at the same time, and Agora only charges a video transcoding fee. One of the output streams is in HD, while the other is in Full HD, and both streams incur transcoding fees."]
    }), `
`, _jsx(_components.p, {
      children: "Transcoding fee = 7.99 ($US/1,000 minutes) × 20/1,000 + 15.99 ($US/1,000 minutes) × 20/1,000"
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
