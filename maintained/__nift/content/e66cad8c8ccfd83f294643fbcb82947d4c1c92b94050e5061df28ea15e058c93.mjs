import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Cloud Recording overview",
  description: "Record video and voice calls or streams in the cloud for storage or on-demand viewing."
};
export let _markdown = `

Agora's Cloud Recording is a RESTful API-based solution for recording real-time voice, video, and interactive streaming sessions directly to your cloud storage. It supports leading CDN and cloud hosting providers, offers customizable recording layouts, and supports multiple file formats for playback and distribution.

Easily launch multiple recorders within a single channel to ensure redundancy or to capture different layouts and formats simultaneously. This makes Cloud Recording a flexible and reliable solution for recording and preserving real-time communication.

## Features [#features]

<CardGrid>
  <FeatureCard title="High reliability">
    Supports globally distributed cluster deployment and automatically backs up files on Agora’s cloud server when the third-party cloud storage fails.
  </FeatureCard>

  <FeatureCard title="Advanced security">
    End-to-end security mechanisms for voice and video calls, data transmission, and storage.
  </FeatureCard>

  <FeatureCard title="Broad compatibility">
    Supports third-party cloud storage, including Amazon S3, Alibaba Cloud, Tencent Cloud, Kingsoft Cloud, Qiniu Cloud, Microsoft Azure, Google Cloud, Huawei Cloud, and Baidu AI Cloud.
  </FeatureCard>

  <FeatureCard title="Ease of use">
    Simple implementation and easy to learn with RESTful API calls that allow you to start, stop, and query the recording.
  </FeatureCard>
</CardGrid>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora's Cloud Recording is a RESTful API-based solution for recording real-time voice, video, and interactive streaming sessions directly to your cloud storage. It supports leading CDN and cloud hosting providers, offers customizable recording layouts, and supports multiple file formats for playback and distribution."
  }, {
    heading: undefined,
    content: "Easily launch multiple recorders within a single channel to ensure redundancy or to capture different layouts and formats simultaneously. This makes Cloud Recording a flexible and reliable solution for recording and preserving real-time communication."
  }, {
    heading: "features",
    content: "Supports globally distributed cluster deployment and automatically backs up files on Agora’s cloud server when the third-party cloud storage fails."
  }, {
    heading: "features",
    content: "End-to-end security mechanisms for voice and video calls, data transmission, and storage."
  }, {
    heading: "features",
    content: "Supports third-party cloud storage, including Amazon S3, Alibaba Cloud, Tencent Cloud, Kingsoft Cloud, Qiniu Cloud, Microsoft Azure, Google Cloud, Huawei Cloud, and Baidu AI Cloud."
  }, {
    heading: "features",
    content: "Simple implementation and easy to learn with RESTful API calls that allow you to start, stop, and query the recording."
  }],
  headings: [{
    id: "features",
    content: "Features"
  }]
};
export let toc = [{
  depth: 2,
  url: "#features",
  title: _jsx(_Fragment, {
    children: "Features"
  })
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  }, { CardGrid, FeatureCard } = _components;
  if (!CardGrid)
    _missingMdxReference("CardGrid", true);
  if (!FeatureCard)
    _missingMdxReference("FeatureCard", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Agora's Cloud Recording is a RESTful API-based solution for recording real-time voice, video, and interactive streaming sessions directly to your cloud storage. It supports leading CDN and cloud hosting providers, offers customizable recording layouts, and supports multiple file formats for playback and distribution."
    }), `
`, _jsx(_components.p, {
      children: "Easily launch multiple recorders within a single channel to ensure redundancy or to capture different layouts and formats simultaneously. This makes Cloud Recording a flexible and reliable solution for recording and preserving real-time communication."
    }), `
`, _jsx(_components.h2, {
      id: "features",
      children: "Features"
    }), `
`, _jsxs(CardGrid, {
      children: [_jsx(FeatureCard, {
        title: "High reliability",
        children: _jsx(_components.p, {
          children: "Supports globally distributed cluster deployment and automatically backs up files on Agora’s cloud server when the third-party cloud storage fails."
        })
      }), _jsx(FeatureCard, {
        title: "Advanced security",
        children: _jsx(_components.p, {
          children: "End-to-end security mechanisms for voice and video calls, data transmission, and storage."
        })
      }), _jsx(FeatureCard, {
        title: "Broad compatibility",
        children: _jsx(_components.p, {
          children: "Supports third-party cloud storage, including Amazon S3, Alibaba Cloud, Tencent Cloud, Kingsoft Cloud, Qiniu Cloud, Microsoft Azure, Google Cloud, Huawei Cloud, and Baidu AI Cloud."
        })
      }), _jsx(FeatureCard, {
        title: "Ease of use",
        children: _jsx(_components.p, {
          children: "Simple implementation and easy to learn with RESTful API calls that allow you to start, stop, and query the recording."
        })
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
