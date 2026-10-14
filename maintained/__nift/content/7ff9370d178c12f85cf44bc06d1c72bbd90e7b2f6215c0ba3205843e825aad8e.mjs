import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Why can't I upload courseware?"
};
export let _markdown = `

### What should I do if there is an error in uploading courseware? [#what-should-i-do-if-there-is-an-error-in-uploading-courseware]

If you receive the \`403 Forbidden\` error when uploading courseware, please check whether the [whiteboard function has been configured](/en/realtime-media/flexible-classroom/build/set-up-your-account-and-authentication/enable-flexible-classroom#whiteboard) correctly and make sure that Agora can access your cloud storage space.

Similarly, if you receive a \`600005\` or \`100004 "service not enable", "messages": "region":"sg"\` error codes, it means that you have not enabled the corresponding whiteboard supporting service in the service area. If you need to use PPT, DOC, PDF, or other courseware in the classroom, [enable the interactive whiteboard supporting service](/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/enable-whiteboard#get-security-credentials-for-your-whiteboard-project).

### If the above configurations are correct, what should I do if I still get the \`403\` error when uploading courseware to Alibaba Cloud? [#if-the-above-configurations-are-correct-what-should-i-do-if-i-still-get-the-403-error-when-uploading-courseware-to-alibaba-cloud]

![1680084185700](https://web-cdn.agora.io/docs-files/1680084185700)

This error is because you have not activated the corresponding permissions in your Alibaba Cloud storage account, which resulted in Alibaba Cloud not allowing you to upload. Please add the \`oss:PutObject\` authorization operation to your Alibaba Cloud storage account. For more information, see [Alibaba Cloud Bucket Policy](https://help.aliyun.com/document_detail/430203.html).

### What is the limit on the upload size of courseware? [#what-is-the-limit-on-the-upload-size-of-courseware]

The size limits for courseware uploads are as follows:

* The courseware size cannot exceed 100M.
* The actual transcoding time is affected by the size and dimensions of the courseware, the number of animations included in the courseware, the resolution of the visible pictures included, the number of pages of the courseware, the transcoding queue, and others. The higher the resolution of the included image, the slower the conversion. The number of pages should preferably be within 50; conversion timeout may occur if there are more than 100 pages.

### What are the reasons for courseware upload failure? [#what-are-the-reasons-for-courseware-upload-failure]

The following reasons may cause the courseware upload to fail:

* Supported file formats include: \`PPT\`, \`PPTX\`, \`DOC\`, \`DOCX\`, \`PDF\`, \`MP3\`, \`MP4\`, \`PNG\`, \`JPG\`, and \`GIF\`.
* There should be no special symbols in the courseware name, it can only contain Chinese, English, and numbers.
* The courseware edited with WPS software may fail to upload or transcode. Save such courseware in the \`PPTX\` or \`PDF\` format and try to upload again.
`;
export let structuredData = {
  contents: [{
    heading: "what-should-i-do-if-there-is-an-error-in-uploading-courseware",
    content: "If you receive the `403 Forbidden` error when uploading courseware, please check whether the whiteboard function has been configured correctly and make sure that Agora can access your cloud storage space."
  }, {
    heading: "what-should-i-do-if-there-is-an-error-in-uploading-courseware",
    content: 'Similarly, if you receive a `600005` or `100004 "service not enable", "messages": "region":"sg"` error codes, it means that you have not enabled the corresponding whiteboard supporting service in the service area. If you need to use PPT, DOC, PDF, or other courseware in the classroom, enable the interactive whiteboard supporting service.'
  }, {
    heading: "if-the-above-configurations-are-correct-what-should-i-do-if-i-still-get-the-403-error-when-uploading-courseware-to-alibaba-cloud",
    content: "This error is because you have not activated the corresponding permissions in your Alibaba Cloud storage account, which resulted in Alibaba Cloud not allowing you to upload. Please add the `oss:PutObject` authorization operation to your Alibaba Cloud storage account. For more information, see Alibaba Cloud Bucket Policy."
  }, {
    heading: "what-is-the-limit-on-the-upload-size-of-courseware",
    content: "The size limits for courseware uploads are as follows:"
  }, {
    heading: "what-is-the-limit-on-the-upload-size-of-courseware",
    content: "The courseware size cannot exceed 100M."
  }, {
    heading: "what-is-the-limit-on-the-upload-size-of-courseware",
    content: "The actual transcoding time is affected by the size and dimensions of the courseware, the number of animations included in the courseware, the resolution of the visible pictures included, the number of pages of the courseware, the transcoding queue, and others. The higher the resolution of the included image, the slower the conversion. The number of pages should preferably be within 50; conversion timeout may occur if there are more than 100 pages."
  }, {
    heading: "what-are-the-reasons-for-courseware-upload-failure",
    content: "The following reasons may cause the courseware upload to fail:"
  }, {
    heading: "what-are-the-reasons-for-courseware-upload-failure",
    content: "Supported file formats include: `PPT`, `PPTX`, `DOC`, `DOCX`, `PDF`, `MP3`, `MP4`, `PNG`, `JPG`, and `GIF`."
  }, {
    heading: "what-are-the-reasons-for-courseware-upload-failure",
    content: "There should be no special symbols in the courseware name, it can only contain Chinese, English, and numbers."
  }, {
    heading: "what-are-the-reasons-for-courseware-upload-failure",
    content: "The courseware edited with WPS software may fail to upload or transcode. Save such courseware in the `PPTX` or `PDF` format and try to upload again."
  }],
  headings: [{
    id: "what-should-i-do-if-there-is-an-error-in-uploading-courseware",
    content: "What should I do if there is an error in uploading courseware?"
  }, {
    id: "if-the-above-configurations-are-correct-what-should-i-do-if-i-still-get-the-403-error-when-uploading-courseware-to-alibaba-cloud",
    content: "If the above configurations are correct, what should I do if I still get the `403` error when uploading courseware to Alibaba Cloud?"
  }, {
    id: "what-is-the-limit-on-the-upload-size-of-courseware",
    content: "What is the limit on the upload size of courseware?"
  }, {
    id: "what-are-the-reasons-for-courseware-upload-failure",
    content: "What are the reasons for courseware upload failure?"
  }]
};
export let toc = [{
  depth: 3,
  url: "#what-should-i-do-if-there-is-an-error-in-uploading-courseware",
  title: _jsx(_Fragment, {
    children: "What should I do if there is an error in uploading courseware?"
  })
}, {
  depth: 3,
  url: "#if-the-above-configurations-are-correct-what-should-i-do-if-i-still-get-the-403-error-when-uploading-courseware-to-alibaba-cloud",
  title: _jsxs(_Fragment, {
    children: ["If the above configurations are correct, what should I do if I still get the ", _jsx("code", {
      children: "403"
    }), " error when uploading courseware to Alibaba Cloud?"]
  })
}, {
  depth: 3,
  url: "#what-is-the-limit-on-the-upload-size-of-courseware",
  title: _jsx(_Fragment, {
    children: "What is the limit on the upload size of courseware?"
  })
}, {
  depth: 3,
  url: "#what-are-the-reasons-for-courseware-upload-failure",
  title: _jsx(_Fragment, {
    children: "What are the reasons for courseware upload failure?"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h3, {
      id: "what-should-i-do-if-there-is-an-error-in-uploading-courseware",
      children: "What should I do if there is an error in uploading courseware?"
    }), `
`, _jsxs(_components.p, {
      children: ["If you receive the ", _jsx(_components.code, {
        children: "403 Forbidden"
      }), " error when uploading courseware, please check whether the ", _jsx(_components.a, {
        href: "/en/realtime-media/flexible-classroom/build/set-up-your-account-and-authentication/enable-flexible-classroom#whiteboard",
        children: "whiteboard function has been configured"
      }), " correctly and make sure that Agora can access your cloud storage space."]
    }), `
`, _jsxs(_components.p, {
      children: ["Similarly, if you receive a ", _jsx(_components.code, {
        children: "600005"
      }), " or ", _jsx(_components.code, {
        children: '100004 "service not enable", "messages": "region":"sg"'
      }), " error codes, it means that you have not enabled the corresponding whiteboard supporting service in the service area. If you need to use PPT, DOC, PDF, or other courseware in the classroom, ", _jsx(_components.a, {
        href: "/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/enable-whiteboard#get-security-credentials-for-your-whiteboard-project",
        children: "enable the interactive whiteboard supporting service"
      }), "."]
    }), `
`, _jsxs(_components.h3, {
      id: "if-the-above-configurations-are-correct-what-should-i-do-if-i-still-get-the-403-error-when-uploading-courseware-to-alibaba-cloud",
      children: ["If the above configurations are correct, what should I do if I still get the ", _jsx(_components.code, {
        children: "403"
      }), " error when uploading courseware to Alibaba Cloud?"]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1680084185700",
        alt: "1680084185700"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["This error is because you have not activated the corresponding permissions in your Alibaba Cloud storage account, which resulted in Alibaba Cloud not allowing you to upload. Please add the ", _jsx(_components.code, {
        children: "oss:PutObject"
      }), " authorization operation to your Alibaba Cloud storage account. For more information, see ", _jsx(_components.a, {
        href: "https://help.aliyun.com/document_detail/430203.html",
        children: "Alibaba Cloud Bucket Policy"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "what-is-the-limit-on-the-upload-size-of-courseware",
      children: "What is the limit on the upload size of courseware?"
    }), `
`, _jsx(_components.p, {
      children: "The size limits for courseware uploads are as follows:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The courseware size cannot exceed 100M."
      }), `
`, _jsx(_components.li, {
        children: "The actual transcoding time is affected by the size and dimensions of the courseware, the number of animations included in the courseware, the resolution of the visible pictures included, the number of pages of the courseware, the transcoding queue, and others. The higher the resolution of the included image, the slower the conversion. The number of pages should preferably be within 50; conversion timeout may occur if there are more than 100 pages."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "what-are-the-reasons-for-courseware-upload-failure",
      children: "What are the reasons for courseware upload failure?"
    }), `
`, _jsx(_components.p, {
      children: "The following reasons may cause the courseware upload to fail:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Supported file formats include: ", _jsx(_components.code, {
          children: "PPT"
        }), ", ", _jsx(_components.code, {
          children: "PPTX"
        }), ", ", _jsx(_components.code, {
          children: "DOC"
        }), ", ", _jsx(_components.code, {
          children: "DOCX"
        }), ", ", _jsx(_components.code, {
          children: "PDF"
        }), ", ", _jsx(_components.code, {
          children: "MP3"
        }), ", ", _jsx(_components.code, {
          children: "MP4"
        }), ", ", _jsx(_components.code, {
          children: "PNG"
        }), ", ", _jsx(_components.code, {
          children: "JPG"
        }), ", and ", _jsx(_components.code, {
          children: "GIF"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "There should be no special symbols in the courseware name, it can only contain Chinese, English, and numbers."
      }), `
`, _jsxs(_components.li, {
        children: ["The courseware edited with WPS software may fail to upload or transcode. Save such courseware in the ", _jsx(_components.code, {
          children: "PPTX"
        }), " or ", _jsx(_components.code, {
          children: "PDF"
        }), " format and try to upload again."]
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
