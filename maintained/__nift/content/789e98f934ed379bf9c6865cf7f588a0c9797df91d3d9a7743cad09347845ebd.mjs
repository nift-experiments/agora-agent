import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How to choose the appropriate cloud storage bucket region and address cross-region upload challenges?"
};
export let _markdown = `

Currently, cloud recording supports the following cloud storage vendors:

* Amazon S3
* Alibaba Cloud
* Tencent Cloud
* Microsoft Azure
* Google Cloud
* Huawei Cloud
* Baidu Smart Cloud

Before initiating cloud recording, ensure that you have activated cloud storage services from one of the listed vendors and created a storage bucket. Fill in the relevant cloud storage information in the \`storageConfig\` parameter of the [Start Cloud Recording API](/en/api-reference/api-ref/cloud-recording/start) request. When selecting the \`region\` for your bucket, choose one that is closest to the server initiating the cloud recording request. For a specific vendor region comparison, see [Third-Party Storage Regions](/en/realtime-media/cloud-recording/reference/region-vendor).

Files uploaded during cloud recording are stored on machines close to the server that initiated the request. If the cloud storage is in a region different from the server, for example, if the server is in the United States and the selected bucket region is in Beijing, uploads may be slow or could even fail. While Agora backup cloud can back up some files that fail to upload, cloud recording only waits for a limited time after the recording is complete. If the upload does not finish within this timeout period, the task is terminated, and the recorded file is lost. Therefore, cross-region uploading can significantly impact upload times and outcomes.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Currently, cloud recording supports the following cloud storage vendors:"
  }, {
    heading: undefined,
    content: "Amazon S3"
  }, {
    heading: undefined,
    content: "Alibaba Cloud"
  }, {
    heading: undefined,
    content: "Tencent Cloud"
  }, {
    heading: undefined,
    content: "Microsoft Azure"
  }, {
    heading: undefined,
    content: "Google Cloud"
  }, {
    heading: undefined,
    content: "Huawei Cloud"
  }, {
    heading: undefined,
    content: "Baidu Smart Cloud"
  }, {
    heading: undefined,
    content: "Before initiating cloud recording, ensure that you have activated cloud storage services from one of the listed vendors and created a storage bucket. Fill in the relevant cloud storage information in the `storageConfig` parameter of the Start Cloud Recording API request. When selecting the `region` for your bucket, choose one that is closest to the server initiating the cloud recording request. For a specific vendor region comparison, see Third-Party Storage Regions."
  }, {
    heading: undefined,
    content: "Files uploaded during cloud recording are stored on machines close to the server that initiated the request. If the cloud storage is in a region different from the server, for example, if the server is in the United States and the selected bucket region is in Beijing, uploads may be slow or could even fail. While Agora backup cloud can back up some files that fail to upload, cloud recording only waits for a limited time after the recording is complete. If the upload does not finish within this timeout period, the task is terminated, and the recorded file is lost. Therefore, cross-region uploading can significantly impact upload times and outcomes."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Currently, cloud recording supports the following cloud storage vendors:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Amazon S3"
      }), `
`, _jsx(_components.li, {
        children: "Alibaba Cloud"
      }), `
`, _jsx(_components.li, {
        children: "Tencent Cloud"
      }), `
`, _jsx(_components.li, {
        children: "Microsoft Azure"
      }), `
`, _jsx(_components.li, {
        children: "Google Cloud"
      }), `
`, _jsx(_components.li, {
        children: "Huawei Cloud"
      }), `
`, _jsx(_components.li, {
        children: "Baidu Smart Cloud"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["Before initiating cloud recording, ensure that you have activated cloud storage services from one of the listed vendors and created a storage bucket. Fill in the relevant cloud storage information in the ", _jsx(_components.code, {
        children: "storageConfig"
      }), " parameter of the ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording/start",
        children: "Start Cloud Recording API"
      }), " request. When selecting the ", _jsx(_components.code, {
        children: "region"
      }), " for your bucket, choose one that is closest to the server initiating the cloud recording request. For a specific vendor region comparison, see ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/reference/region-vendor",
        children: "Third-Party Storage Regions"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "Files uploaded during cloud recording are stored on machines close to the server that initiated the request. If the cloud storage is in a region different from the server, for example, if the server is in the United States and the selected bucket region is in Beijing, uploads may be slow or could even fail. While Agora backup cloud can back up some files that fail to upload, cloud recording only waits for a limited time after the recording is complete. If the upload does not finish within this timeout period, the task is terminated, and the recorded file is lost. Therefore, cross-region uploading can significantly impact upload times and outcomes."
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
