import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Connect with Cloud Proxy",
  description: "Use Agora's cloud proxy service to run IoT SDK in network environments that restrict direct access to Agora's SDRTN®."
};
export let _markdown = `

If your device runs inside a network that restricts direct access to Agora SDRTN® (Software-Defined Real-Time Network), such as one behind a restrictive corporate or industrial firewall, use Agora's cloud proxy service to relay traffic through a set of Agora-owned IP addresses and ports that you add to your firewall allowlist.

## Understand the tech [#understand-the-tech]

When cloud proxy is enabled, IoT SDK sends and receives data through the following flow:

1. IoT SDK requests proxy information from the Agora cloud proxy service.
2. IoT SDK sends data to the cloud proxy, which relays it to Agora SDRTN®.
3. Agora SDRTN® returns data to the cloud proxy, which relays it back to IoT SDK.

## Enable cloud proxy [#enable-cloud-proxy]

Call \`agora_rtc_set_cloud_proxy\` before you join a channel to set the cloud proxy mode:

\`\`\`cpp
int rval = agora_rtc_set_cloud_proxy(CLOUD_PROXY_UDP);
if (rval < 0) {
    printf("Failed to set cloud proxy, reason: %s\\n", agora_rtc_err_2_str(rval));
    return -1;
}
\`\`\`

\`type\` accepts the following values:

| Value              | Description                                               |
| :----------------- | :-------------------------------------------------------- |
| \`CLOUD_PROXY_NONE\` | Disables cloud proxy.                                     |
| \`CLOUD_PROXY_UDP\`  | Sends and receives data through the cloud proxy over UDP. |

Bandwidth through a cloud proxy is limited compared to a direct connection to Agora SDRTN®, so only enable cloud proxy for devices that need it.

## Allowlist IP addresses and ports [#allowlist-ip-addresses-and-ports]

Before you enable cloud proxy, add the IP addresses and ports for your target regions to your firewall allowlist.

### North America [#north-america]

| Service type      | IP addresses                                                                                                                                                                                                                                                                     | Protocol | Port                     |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------ |
| Signaling Service | \`106.14.12.130\`, \`118.190.148.38\`, \`184.72.16.87\`, \`35.168.106.53\`, \`35.156.231.150\`, \`15.237.134.178\`, \`54.178.26.110\`, \`52.221.23.86\`, \`13.230.60.35\`, \`15.206.47.129\`, \`13.127.149.196\`, \`13.209.247.137\`, \`13.124.182.235\`, \`23.98.43.152\`, \`107.155.14.132\`, \`69.28.51.142\` | UDP      | \`8443\`                   |
| Cloud Proxy       | \`128.14.195.192/28\`, \`128.14.245.16/28\`, \`128.14.72.80/28\`, \`128.14.200.208/28\`                                                                                                                                                                                                  | UDP      | \`4590-4600\`, \`8001-8010\` |

### Europe [#europe]

| Service type      | IP addresses                                                                                                                                                                                                                                                                     | Protocol | Port                     |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------ |
| Signaling Service | \`106.14.12.130\`, \`118.190.148.38\`, \`184.72.16.87\`, \`35.168.106.53\`, \`35.156.231.150\`, \`15.237.134.178\`, \`54.178.26.110\`, \`52.221.23.86\`, \`13.230.60.35\`, \`15.206.47.129\`, \`13.127.149.196\`, \`13.209.247.137\`, \`13.124.182.235\`, \`23.98.43.152\`, \`107.155.14.132\`, \`69.28.51.142\` | UDP      | \`8443\`                   |
| Cloud Proxy       | \`104.166.160.208/28\`, \`23.236.110.32/28\`, \`104.166.142.134\`, \`104.166.161.4\`                                                                                                                                                                                                     | UDP      | \`4590-4600\`, \`8001-8010\` |

### Asia, excluding Mainland China [#asia-excluding-mainland-china]

| Service type      | IP addresses                                                                                                                                                                                                                                                                     | Protocol | Port                     |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------ |
| Signaling Service | \`106.14.12.130\`, \`118.190.148.38\`, \`184.72.16.87\`, \`35.168.106.53\`, \`35.156.231.150\`, \`15.237.134.178\`, \`54.178.26.110\`, \`52.221.23.86\`, \`13.230.60.35\`, \`15.206.47.129\`, \`13.127.149.196\`, \`13.209.247.137\`, \`13.124.182.235\`, \`23.98.43.152\`, \`107.155.14.132\`, \`69.28.51.142\` | UDP      | \`8443\`                   |
| Cloud Proxy       | \`128.1.186.240/28\`, \`129.227.73.32/28\`, \`103.193.127.208/28\`                                                                                                                                                                                                                     | UDP      | \`4590-4600\`, \`8001-8010\` |

### Japan [#japan]

| Service type      | IP addresses                                                                                                                                                                                                                                                                     | Protocol | Port                     |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------ |
| Signaling Service | \`106.14.12.130\`, \`118.190.148.38\`, \`184.72.16.87\`, \`35.168.106.53\`, \`35.156.231.150\`, \`15.237.134.178\`, \`54.178.26.110\`, \`52.221.23.86\`, \`13.230.60.35\`, \`15.206.47.129\`, \`13.127.149.196\`, \`13.209.247.137\`, \`13.124.182.235\`, \`23.98.43.152\`, \`107.155.14.132\`, \`69.28.51.142\` | UDP      | \`8443\`                   |
| Cloud Proxy       | \`129.227.113.112/28\`, \`129.227.55.96/28\`, \`122.10.153.74\`, \`129.227.234.123\`                                                                                                                                                                                                     | UDP      | \`4590-4600\`, \`8001-8010\` |

### India [#india]

| Service type      | IP addresses                                                                                                                                                                                                                                                                     | Protocol | Port                     |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------ |
| Signaling Service | \`106.14.12.130\`, \`118.190.148.38\`, \`184.72.16.87\`, \`35.168.106.53\`, \`35.156.231.150\`, \`15.237.134.178\`, \`54.178.26.110\`, \`52.221.23.86\`, \`13.230.60.35\`, \`15.206.47.129\`, \`13.127.149.196\`, \`13.209.247.137\`, \`13.124.182.235\`, \`23.98.43.152\`, \`107.155.14.132\`, \`69.28.51.142\` | UDP      | \`8443\`                   |
| Cloud Proxy       | \`129.227.217.128/28\`, \`129.227.108.208/28\`, \`128.1.105.112/28\`                                                                                                                                                                                                                   | UDP      | \`4590-4600\`, \`8001-8010\` |

### Mainland China [#mainland-china]

| Service type      | IP addresses                                                                                                                                                                     | Protocol | Port                     |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------ |
| Signaling Service | \`106.14.12.130\`, \`118.190.148.38\`                                                                                                                                                | UDP      | \`8443\`                   |
| Cloud Proxy       | \`14.29.38.144/28\`, \`27.45.161.144/28\`, \`183.232.200.144/28\`, \`115.238.206.0/28\`, \`106.3.209.0/28\`, \`112.13.216.0/28\`, \`219.153.111.128/28\`, \`221.178.42.0/28\`, \`113.207.12.0/28\` | UDP      | \`4590-4600\`, \`8001-8010\` |

## Best practices [#best-practices]

* If you're uncertain which region your devices connect from, allowlist the IP addresses for all regions.
* Open UDP port \`53\` for DNS resolution in addition to the ports listed above.

## Validate your configuration [#validate-your-configuration]

Before deploying to production:

1. Enable cloud proxy in your app.
2. Join a channel and confirm the connection succeeds.
3. Monitor network quality metrics from multiple geographic locations, if possible.

## Reference [#reference]

* [agora\\_rtc\\_set\\_cloud\\_proxy](https://api-ref.agora.io/en/iot-sdk/linux/1.x/agora__rtc__api_8h.html)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "If your device runs inside a network that restricts direct access to Agora SDRTN® (Software-Defined Real-Time Network), such as one behind a restrictive corporate or industrial firewall, use Agora's cloud proxy service to relay traffic through a set of Agora-owned IP addresses and ports that you add to your firewall allowlist."
  }, {
    heading: "understand-the-tech",
    content: "When cloud proxy is enabled, IoT SDK sends and receives data through the following flow:"
  }, {
    heading: "understand-the-tech",
    content: "IoT SDK requests proxy information from the Agora cloud proxy service."
  }, {
    heading: "understand-the-tech",
    content: "IoT SDK sends data to the cloud proxy, which relays it to Agora SDRTN®."
  }, {
    heading: "understand-the-tech",
    content: "Agora SDRTN® returns data to the cloud proxy, which relays it back to IoT SDK."
  }, {
    heading: "enable-cloud-proxy",
    content: "Call `agora_rtc_set_cloud_proxy` before you join a channel to set the cloud proxy mode:"
  }, {
    heading: "enable-cloud-proxy",
    content: "`type` accepts the following values:"
  }, {
    heading: "enable-cloud-proxy",
    content: "Value"
  }, {
    heading: "enable-cloud-proxy",
    content: "Description"
  }, {
    heading: "enable-cloud-proxy",
    content: "`CLOUD_PROXY_NONE`"
  }, {
    heading: "enable-cloud-proxy",
    content: "Disables cloud proxy."
  }, {
    heading: "enable-cloud-proxy",
    content: "`CLOUD_PROXY_UDP`"
  }, {
    heading: "enable-cloud-proxy",
    content: "Sends and receives data through the cloud proxy over UDP."
  }, {
    heading: "enable-cloud-proxy",
    content: "Bandwidth through a cloud proxy is limited compared to a direct connection to Agora SDRTN®, so only enable cloud proxy for devices that need it."
  }, {
    heading: "allowlist-ip-addresses-and-ports",
    content: "Before you enable cloud proxy, add the IP addresses and ports for your target regions to your firewall allowlist."
  }, {
    heading: "north-america",
    content: "Service type"
  }, {
    heading: "north-america",
    content: "IP addresses"
  }, {
    heading: "north-america",
    content: "Protocol"
  }, {
    heading: "north-america",
    content: "Port"
  }, {
    heading: "north-america",
    content: "Signaling Service"
  }, {
    heading: "north-america",
    content: "`106.14.12.130`, `118.190.148.38`, `184.72.16.87`, `35.168.106.53`, `35.156.231.150`, `15.237.134.178`, `54.178.26.110`, `52.221.23.86`, `13.230.60.35`, `15.206.47.129`, `13.127.149.196`, `13.209.247.137`, `13.124.182.235`, `23.98.43.152`, `107.155.14.132`, `69.28.51.142`"
  }, {
    heading: "north-america",
    content: "UDP"
  }, {
    heading: "north-america",
    content: "`8443`"
  }, {
    heading: "north-america",
    content: "Cloud Proxy"
  }, {
    heading: "north-america",
    content: "`128.14.195.192/28`, `128.14.245.16/28`, `128.14.72.80/28`, `128.14.200.208/28`"
  }, {
    heading: "north-america",
    content: "UDP"
  }, {
    heading: "north-america",
    content: "`4590-4600`, `8001-8010`"
  }, {
    heading: "europe",
    content: "Service type"
  }, {
    heading: "europe",
    content: "IP addresses"
  }, {
    heading: "europe",
    content: "Protocol"
  }, {
    heading: "europe",
    content: "Port"
  }, {
    heading: "europe",
    content: "Signaling Service"
  }, {
    heading: "europe",
    content: "`106.14.12.130`, `118.190.148.38`, `184.72.16.87`, `35.168.106.53`, `35.156.231.150`, `15.237.134.178`, `54.178.26.110`, `52.221.23.86`, `13.230.60.35`, `15.206.47.129`, `13.127.149.196`, `13.209.247.137`, `13.124.182.235`, `23.98.43.152`, `107.155.14.132`, `69.28.51.142`"
  }, {
    heading: "europe",
    content: "UDP"
  }, {
    heading: "europe",
    content: "`8443`"
  }, {
    heading: "europe",
    content: "Cloud Proxy"
  }, {
    heading: "europe",
    content: "`104.166.160.208/28`, `23.236.110.32/28`, `104.166.142.134`, `104.166.161.4`"
  }, {
    heading: "europe",
    content: "UDP"
  }, {
    heading: "europe",
    content: "`4590-4600`, `8001-8010`"
  }, {
    heading: "asia-excluding-mainland-china",
    content: "Service type"
  }, {
    heading: "asia-excluding-mainland-china",
    content: "IP addresses"
  }, {
    heading: "asia-excluding-mainland-china",
    content: "Protocol"
  }, {
    heading: "asia-excluding-mainland-china",
    content: "Port"
  }, {
    heading: "asia-excluding-mainland-china",
    content: "Signaling Service"
  }, {
    heading: "asia-excluding-mainland-china",
    content: "`106.14.12.130`, `118.190.148.38`, `184.72.16.87`, `35.168.106.53`, `35.156.231.150`, `15.237.134.178`, `54.178.26.110`, `52.221.23.86`, `13.230.60.35`, `15.206.47.129`, `13.127.149.196`, `13.209.247.137`, `13.124.182.235`, `23.98.43.152`, `107.155.14.132`, `69.28.51.142`"
  }, {
    heading: "asia-excluding-mainland-china",
    content: "UDP"
  }, {
    heading: "asia-excluding-mainland-china",
    content: "`8443`"
  }, {
    heading: "asia-excluding-mainland-china",
    content: "Cloud Proxy"
  }, {
    heading: "asia-excluding-mainland-china",
    content: "`128.1.186.240/28`, `129.227.73.32/28`, `103.193.127.208/28`"
  }, {
    heading: "asia-excluding-mainland-china",
    content: "UDP"
  }, {
    heading: "asia-excluding-mainland-china",
    content: "`4590-4600`, `8001-8010`"
  }, {
    heading: "japan",
    content: "Service type"
  }, {
    heading: "japan",
    content: "IP addresses"
  }, {
    heading: "japan",
    content: "Protocol"
  }, {
    heading: "japan",
    content: "Port"
  }, {
    heading: "japan",
    content: "Signaling Service"
  }, {
    heading: "japan",
    content: "`106.14.12.130`, `118.190.148.38`, `184.72.16.87`, `35.168.106.53`, `35.156.231.150`, `15.237.134.178`, `54.178.26.110`, `52.221.23.86`, `13.230.60.35`, `15.206.47.129`, `13.127.149.196`, `13.209.247.137`, `13.124.182.235`, `23.98.43.152`, `107.155.14.132`, `69.28.51.142`"
  }, {
    heading: "japan",
    content: "UDP"
  }, {
    heading: "japan",
    content: "`8443`"
  }, {
    heading: "japan",
    content: "Cloud Proxy"
  }, {
    heading: "japan",
    content: "`129.227.113.112/28`, `129.227.55.96/28`, `122.10.153.74`, `129.227.234.123`"
  }, {
    heading: "japan",
    content: "UDP"
  }, {
    heading: "japan",
    content: "`4590-4600`, `8001-8010`"
  }, {
    heading: "india",
    content: "Service type"
  }, {
    heading: "india",
    content: "IP addresses"
  }, {
    heading: "india",
    content: "Protocol"
  }, {
    heading: "india",
    content: "Port"
  }, {
    heading: "india",
    content: "Signaling Service"
  }, {
    heading: "india",
    content: "`106.14.12.130`, `118.190.148.38`, `184.72.16.87`, `35.168.106.53`, `35.156.231.150`, `15.237.134.178`, `54.178.26.110`, `52.221.23.86`, `13.230.60.35`, `15.206.47.129`, `13.127.149.196`, `13.209.247.137`, `13.124.182.235`, `23.98.43.152`, `107.155.14.132`, `69.28.51.142`"
  }, {
    heading: "india",
    content: "UDP"
  }, {
    heading: "india",
    content: "`8443`"
  }, {
    heading: "india",
    content: "Cloud Proxy"
  }, {
    heading: "india",
    content: "`129.227.217.128/28`, `129.227.108.208/28`, `128.1.105.112/28`"
  }, {
    heading: "india",
    content: "UDP"
  }, {
    heading: "india",
    content: "`4590-4600`, `8001-8010`"
  }, {
    heading: "mainland-china",
    content: "Service type"
  }, {
    heading: "mainland-china",
    content: "IP addresses"
  }, {
    heading: "mainland-china",
    content: "Protocol"
  }, {
    heading: "mainland-china",
    content: "Port"
  }, {
    heading: "mainland-china",
    content: "Signaling Service"
  }, {
    heading: "mainland-china",
    content: "`106.14.12.130`, `118.190.148.38`"
  }, {
    heading: "mainland-china",
    content: "UDP"
  }, {
    heading: "mainland-china",
    content: "`8443`"
  }, {
    heading: "mainland-china",
    content: "Cloud Proxy"
  }, {
    heading: "mainland-china",
    content: "`14.29.38.144/28`, `27.45.161.144/28`, `183.232.200.144/28`, `115.238.206.0/28`, `106.3.209.0/28`, `112.13.216.0/28`, `219.153.111.128/28`, `221.178.42.0/28`, `113.207.12.0/28`"
  }, {
    heading: "mainland-china",
    content: "UDP"
  }, {
    heading: "mainland-china",
    content: "`4590-4600`, `8001-8010`"
  }, {
    heading: "best-practices",
    content: "If you're uncertain which region your devices connect from, allowlist the IP addresses for all regions."
  }, {
    heading: "best-practices",
    content: "Open UDP port `53` for DNS resolution in addition to the ports listed above."
  }, {
    heading: "validate-your-configuration",
    content: "Before deploying to production:"
  }, {
    heading: "validate-your-configuration",
    content: "Enable cloud proxy in your app."
  }, {
    heading: "validate-your-configuration",
    content: "Join a channel and confirm the connection succeeds."
  }, {
    heading: "validate-your-configuration",
    content: "Monitor network quality metrics from multiple geographic locations, if possible."
  }, {
    heading: "reference",
    content: "agora\\_rtc\\_set\\_cloud\\_proxy"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "enable-cloud-proxy",
    content: "Enable cloud proxy"
  }, {
    id: "allowlist-ip-addresses-and-ports",
    content: "Allowlist IP addresses and ports"
  }, {
    id: "north-america",
    content: "North America"
  }, {
    id: "europe",
    content: "Europe"
  }, {
    id: "asia-excluding-mainland-china",
    content: "Asia, excluding Mainland China"
  }, {
    id: "japan",
    content: "Japan"
  }, {
    id: "india",
    content: "India"
  }, {
    id: "mainland-china",
    content: "Mainland China"
  }, {
    id: "best-practices",
    content: "Best practices"
  }, {
    id: "validate-your-configuration",
    content: "Validate your configuration"
  }, {
    id: "reference",
    content: "Reference"
  }]
};
export let toc = [{
  depth: 2,
  url: "#understand-the-tech",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#enable-cloud-proxy",
  title: _jsx(_Fragment, {
    children: "Enable cloud proxy"
  })
}, {
  depth: 2,
  url: "#allowlist-ip-addresses-and-ports",
  title: _jsx(_Fragment, {
    children: "Allowlist IP addresses and ports"
  })
}, {
  depth: 3,
  url: "#north-america",
  title: _jsx(_Fragment, {
    children: "North America"
  })
}, {
  depth: 3,
  url: "#europe",
  title: _jsx(_Fragment, {
    children: "Europe"
  })
}, {
  depth: 3,
  url: "#asia-excluding-mainland-china",
  title: _jsx(_Fragment, {
    children: "Asia, excluding Mainland China"
  })
}, {
  depth: 3,
  url: "#japan",
  title: _jsx(_Fragment, {
    children: "Japan"
  })
}, {
  depth: 3,
  url: "#india",
  title: _jsx(_Fragment, {
    children: "India"
  })
}, {
  depth: 3,
  url: "#mainland-china",
  title: _jsx(_Fragment, {
    children: "Mainland China"
  })
}, {
  depth: 2,
  url: "#best-practices",
  title: _jsx(_Fragment, {
    children: "Best practices"
  })
}, {
  depth: 2,
  url: "#validate-your-configuration",
  title: _jsx(_Fragment, {
    children: "Validate your configuration"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
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
    children: [_jsx(_components.p, {
      children: "If your device runs inside a network that restricts direct access to Agora SDRTN® (Software-Defined Real-Time Network), such as one behind a restrictive corporate or industrial firewall, use Agora's cloud proxy service to relay traffic through a set of Agora-owned IP addresses and ports that you add to your firewall allowlist."
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsx(_components.p, {
      children: "When cloud proxy is enabled, IoT SDK sends and receives data through the following flow:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "IoT SDK requests proxy information from the Agora cloud proxy service."
      }), `
`, _jsx(_components.li, {
        children: "IoT SDK sends data to the cloud proxy, which relays it to Agora SDRTN®."
      }), `
`, _jsx(_components.li, {
        children: "Agora SDRTN® returns data to the cloud proxy, which relays it back to IoT SDK."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "enable-cloud-proxy",
      children: "Enable cloud proxy"
    }), `
`, _jsxs(_components.p, {
      children: ["Call ", _jsx(_components.code, {
        children: "agora_rtc_set_cloud_proxy"
      }), " before you join a channel to set the cloud proxy mode:"]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " rval "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " agora_rtc_set_cloud_proxy"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(CLOUD_PROXY_UDP);"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "if"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (rval "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "    printf"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"Failed to set cloud proxy, reason: '
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "%s\\n"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "agora_rtc_err_2_str"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(rval));"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " -"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
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
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "type"
      }), " accepts the following values:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Value"
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
              children: "CLOUD_PROXY_NONE"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Disables cloud proxy."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "CLOUD_PROXY_UDP"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Sends and receives data through the cloud proxy over UDP."
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "Bandwidth through a cloud proxy is limited compared to a direct connection to Agora SDRTN®, so only enable cloud proxy for devices that need it."
    }), `
`, _jsx(_components.h2, {
      id: "allowlist-ip-addresses-and-ports",
      children: "Allowlist IP addresses and ports"
    }), `
`, _jsx(_components.p, {
      children: "Before you enable cloud proxy, add the IP addresses and ports for your target regions to your firewall allowlist."
    }), `
`, _jsx(_components.h3, {
      id: "north-america",
      children: "North America"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Service type"
          }), _jsx(_components.th, {
            children: "IP addresses"
          }), _jsx(_components.th, {
            children: "Protocol"
          }), _jsx(_components.th, {
            children: "Port"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Signaling Service"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "106.14.12.130"
            }), ", ", _jsx(_components.code, {
              children: "118.190.148.38"
            }), ", ", _jsx(_components.code, {
              children: "184.72.16.87"
            }), ", ", _jsx(_components.code, {
              children: "35.168.106.53"
            }), ", ", _jsx(_components.code, {
              children: "35.156.231.150"
            }), ", ", _jsx(_components.code, {
              children: "15.237.134.178"
            }), ", ", _jsx(_components.code, {
              children: "54.178.26.110"
            }), ", ", _jsx(_components.code, {
              children: "52.221.23.86"
            }), ", ", _jsx(_components.code, {
              children: "13.230.60.35"
            }), ", ", _jsx(_components.code, {
              children: "15.206.47.129"
            }), ", ", _jsx(_components.code, {
              children: "13.127.149.196"
            }), ", ", _jsx(_components.code, {
              children: "13.209.247.137"
            }), ", ", _jsx(_components.code, {
              children: "13.124.182.235"
            }), ", ", _jsx(_components.code, {
              children: "23.98.43.152"
            }), ", ", _jsx(_components.code, {
              children: "107.155.14.132"
            }), ", ", _jsx(_components.code, {
              children: "69.28.51.142"
            })]
          }), _jsx(_components.td, {
            children: "UDP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "8443"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Cloud Proxy"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "128.14.195.192/28"
            }), ", ", _jsx(_components.code, {
              children: "128.14.245.16/28"
            }), ", ", _jsx(_components.code, {
              children: "128.14.72.80/28"
            }), ", ", _jsx(_components.code, {
              children: "128.14.200.208/28"
            })]
          }), _jsx(_components.td, {
            children: "UDP"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "4590-4600"
            }), ", ", _jsx(_components.code, {
              children: "8001-8010"
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "europe",
      children: "Europe"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Service type"
          }), _jsx(_components.th, {
            children: "IP addresses"
          }), _jsx(_components.th, {
            children: "Protocol"
          }), _jsx(_components.th, {
            children: "Port"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Signaling Service"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "106.14.12.130"
            }), ", ", _jsx(_components.code, {
              children: "118.190.148.38"
            }), ", ", _jsx(_components.code, {
              children: "184.72.16.87"
            }), ", ", _jsx(_components.code, {
              children: "35.168.106.53"
            }), ", ", _jsx(_components.code, {
              children: "35.156.231.150"
            }), ", ", _jsx(_components.code, {
              children: "15.237.134.178"
            }), ", ", _jsx(_components.code, {
              children: "54.178.26.110"
            }), ", ", _jsx(_components.code, {
              children: "52.221.23.86"
            }), ", ", _jsx(_components.code, {
              children: "13.230.60.35"
            }), ", ", _jsx(_components.code, {
              children: "15.206.47.129"
            }), ", ", _jsx(_components.code, {
              children: "13.127.149.196"
            }), ", ", _jsx(_components.code, {
              children: "13.209.247.137"
            }), ", ", _jsx(_components.code, {
              children: "13.124.182.235"
            }), ", ", _jsx(_components.code, {
              children: "23.98.43.152"
            }), ", ", _jsx(_components.code, {
              children: "107.155.14.132"
            }), ", ", _jsx(_components.code, {
              children: "69.28.51.142"
            })]
          }), _jsx(_components.td, {
            children: "UDP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "8443"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Cloud Proxy"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "104.166.160.208/28"
            }), ", ", _jsx(_components.code, {
              children: "23.236.110.32/28"
            }), ", ", _jsx(_components.code, {
              children: "104.166.142.134"
            }), ", ", _jsx(_components.code, {
              children: "104.166.161.4"
            })]
          }), _jsx(_components.td, {
            children: "UDP"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "4590-4600"
            }), ", ", _jsx(_components.code, {
              children: "8001-8010"
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "asia-excluding-mainland-china",
      children: "Asia, excluding Mainland China"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Service type"
          }), _jsx(_components.th, {
            children: "IP addresses"
          }), _jsx(_components.th, {
            children: "Protocol"
          }), _jsx(_components.th, {
            children: "Port"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Signaling Service"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "106.14.12.130"
            }), ", ", _jsx(_components.code, {
              children: "118.190.148.38"
            }), ", ", _jsx(_components.code, {
              children: "184.72.16.87"
            }), ", ", _jsx(_components.code, {
              children: "35.168.106.53"
            }), ", ", _jsx(_components.code, {
              children: "35.156.231.150"
            }), ", ", _jsx(_components.code, {
              children: "15.237.134.178"
            }), ", ", _jsx(_components.code, {
              children: "54.178.26.110"
            }), ", ", _jsx(_components.code, {
              children: "52.221.23.86"
            }), ", ", _jsx(_components.code, {
              children: "13.230.60.35"
            }), ", ", _jsx(_components.code, {
              children: "15.206.47.129"
            }), ", ", _jsx(_components.code, {
              children: "13.127.149.196"
            }), ", ", _jsx(_components.code, {
              children: "13.209.247.137"
            }), ", ", _jsx(_components.code, {
              children: "13.124.182.235"
            }), ", ", _jsx(_components.code, {
              children: "23.98.43.152"
            }), ", ", _jsx(_components.code, {
              children: "107.155.14.132"
            }), ", ", _jsx(_components.code, {
              children: "69.28.51.142"
            })]
          }), _jsx(_components.td, {
            children: "UDP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "8443"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Cloud Proxy"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "128.1.186.240/28"
            }), ", ", _jsx(_components.code, {
              children: "129.227.73.32/28"
            }), ", ", _jsx(_components.code, {
              children: "103.193.127.208/28"
            })]
          }), _jsx(_components.td, {
            children: "UDP"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "4590-4600"
            }), ", ", _jsx(_components.code, {
              children: "8001-8010"
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "japan",
      children: "Japan"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Service type"
          }), _jsx(_components.th, {
            children: "IP addresses"
          }), _jsx(_components.th, {
            children: "Protocol"
          }), _jsx(_components.th, {
            children: "Port"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Signaling Service"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "106.14.12.130"
            }), ", ", _jsx(_components.code, {
              children: "118.190.148.38"
            }), ", ", _jsx(_components.code, {
              children: "184.72.16.87"
            }), ", ", _jsx(_components.code, {
              children: "35.168.106.53"
            }), ", ", _jsx(_components.code, {
              children: "35.156.231.150"
            }), ", ", _jsx(_components.code, {
              children: "15.237.134.178"
            }), ", ", _jsx(_components.code, {
              children: "54.178.26.110"
            }), ", ", _jsx(_components.code, {
              children: "52.221.23.86"
            }), ", ", _jsx(_components.code, {
              children: "13.230.60.35"
            }), ", ", _jsx(_components.code, {
              children: "15.206.47.129"
            }), ", ", _jsx(_components.code, {
              children: "13.127.149.196"
            }), ", ", _jsx(_components.code, {
              children: "13.209.247.137"
            }), ", ", _jsx(_components.code, {
              children: "13.124.182.235"
            }), ", ", _jsx(_components.code, {
              children: "23.98.43.152"
            }), ", ", _jsx(_components.code, {
              children: "107.155.14.132"
            }), ", ", _jsx(_components.code, {
              children: "69.28.51.142"
            })]
          }), _jsx(_components.td, {
            children: "UDP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "8443"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Cloud Proxy"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "129.227.113.112/28"
            }), ", ", _jsx(_components.code, {
              children: "129.227.55.96/28"
            }), ", ", _jsx(_components.code, {
              children: "122.10.153.74"
            }), ", ", _jsx(_components.code, {
              children: "129.227.234.123"
            })]
          }), _jsx(_components.td, {
            children: "UDP"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "4590-4600"
            }), ", ", _jsx(_components.code, {
              children: "8001-8010"
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "india",
      children: "India"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Service type"
          }), _jsx(_components.th, {
            children: "IP addresses"
          }), _jsx(_components.th, {
            children: "Protocol"
          }), _jsx(_components.th, {
            children: "Port"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Signaling Service"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "106.14.12.130"
            }), ", ", _jsx(_components.code, {
              children: "118.190.148.38"
            }), ", ", _jsx(_components.code, {
              children: "184.72.16.87"
            }), ", ", _jsx(_components.code, {
              children: "35.168.106.53"
            }), ", ", _jsx(_components.code, {
              children: "35.156.231.150"
            }), ", ", _jsx(_components.code, {
              children: "15.237.134.178"
            }), ", ", _jsx(_components.code, {
              children: "54.178.26.110"
            }), ", ", _jsx(_components.code, {
              children: "52.221.23.86"
            }), ", ", _jsx(_components.code, {
              children: "13.230.60.35"
            }), ", ", _jsx(_components.code, {
              children: "15.206.47.129"
            }), ", ", _jsx(_components.code, {
              children: "13.127.149.196"
            }), ", ", _jsx(_components.code, {
              children: "13.209.247.137"
            }), ", ", _jsx(_components.code, {
              children: "13.124.182.235"
            }), ", ", _jsx(_components.code, {
              children: "23.98.43.152"
            }), ", ", _jsx(_components.code, {
              children: "107.155.14.132"
            }), ", ", _jsx(_components.code, {
              children: "69.28.51.142"
            })]
          }), _jsx(_components.td, {
            children: "UDP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "8443"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Cloud Proxy"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "129.227.217.128/28"
            }), ", ", _jsx(_components.code, {
              children: "129.227.108.208/28"
            }), ", ", _jsx(_components.code, {
              children: "128.1.105.112/28"
            })]
          }), _jsx(_components.td, {
            children: "UDP"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "4590-4600"
            }), ", ", _jsx(_components.code, {
              children: "8001-8010"
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "mainland-china",
      children: "Mainland China"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Service type"
          }), _jsx(_components.th, {
            children: "IP addresses"
          }), _jsx(_components.th, {
            children: "Protocol"
          }), _jsx(_components.th, {
            children: "Port"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Signaling Service"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "106.14.12.130"
            }), ", ", _jsx(_components.code, {
              children: "118.190.148.38"
            })]
          }), _jsx(_components.td, {
            children: "UDP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "8443"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Cloud Proxy"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "14.29.38.144/28"
            }), ", ", _jsx(_components.code, {
              children: "27.45.161.144/28"
            }), ", ", _jsx(_components.code, {
              children: "183.232.200.144/28"
            }), ", ", _jsx(_components.code, {
              children: "115.238.206.0/28"
            }), ", ", _jsx(_components.code, {
              children: "106.3.209.0/28"
            }), ", ", _jsx(_components.code, {
              children: "112.13.216.0/28"
            }), ", ", _jsx(_components.code, {
              children: "219.153.111.128/28"
            }), ", ", _jsx(_components.code, {
              children: "221.178.42.0/28"
            }), ", ", _jsx(_components.code, {
              children: "113.207.12.0/28"
            })]
          }), _jsx(_components.td, {
            children: "UDP"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "4590-4600"
            }), ", ", _jsx(_components.code, {
              children: "8001-8010"
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "best-practices",
      children: "Best practices"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "If you're uncertain which region your devices connect from, allowlist the IP addresses for all regions."
      }), `
`, _jsxs(_components.li, {
        children: ["Open UDP port ", _jsx(_components.code, {
          children: "53"
        }), " for DNS resolution in addition to the ports listed above."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "validate-your-configuration",
      children: "Validate your configuration"
    }), `
`, _jsx(_components.p, {
      children: "Before deploying to production:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "Enable cloud proxy in your app."
      }), `
`, _jsx(_components.li, {
        children: "Join a channel and confirm the connection succeeds."
      }), `
`, _jsx(_components.li, {
        children: "Monitor network quality metrics from multiple geographic locations, if possible."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/iot-sdk/linux/1.x/agora__rtc__api_8h.html",
          children: "agora_rtc_set_cloud_proxy"
        })
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
