import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "IP addresses for Cloud Proxy",
  description: "If your app is running inside a restricted network, clear one of the following IP addresses for Cloud Proxy to work effectively."
};
export let _markdown = `

This guide provides configuration details you need to set up NAME Cloud Proxy services across all supported regions. Cloud Proxy enables secure communication through firewalls by using designated IP addresses and ports.

<CalloutContainer type="info">
  <CalloutDescription>
    If you configured cloud proxy settings using an older version of this guide, you may need to update your firewall rules. Refer to the [Cloud proxy migration guide](/en/realtime-media/rtc/reference/cloud-proxy-migration-guide).
  </CalloutDescription>
</CalloutContainer>

## Understand the tech [#understand-the-tech]

Agora deploys dedicated servers to run the cloud proxy service. Agora owns the IP addresses and fully controls the traffic on these addresses. The following network infrastructure components support your deployment:

* **Access point networks**: Each access point uses a single cloud-hosted IP address.
* **Cloud machine networks**: Use single-point IPs for better security.
* **Physical machine networks**: Use a /28 subnet mask for each network segment.
* **Regional deployment**: Includes configurations for North America, Europe, India, Japan, Southeast Asia, and China.

## Implementation guidelines [#implementation-guidelines]

Follow these guidelines to configure cloud proxy settings.

* **Check your SDK version**: Configuration requirements vary depending on the SDK version you're using.

* **Configure regional IPs**: Add the correct IP addresses for your target regions.

  <CalloutContainer type="info">
    <CalloutDescription>
      When adding IP addresses:

      * If you use cloud proxy with [Restricted media zones](/en/realtime-media/rtc/build/manage-connection-and-quality/geofencing), add only the IP addresses dedicated to your specified region.
      * If you do not restrict media zones, add all IP addresses to ensure connectivity.
    </CalloutDescription>
  </CalloutContainer>

* **Open required ports**: Make sure all necessary firewall ports are accessible.

* **Test connectivity**: Validate your configuration before deploying to production.

To use Agora Cloud Proxy, your end users must first configure their firewall to trust the following IP address and port ranges.

### Native RTC Force UDP mode [#native-rtc-force-udp-mode]

#### North America [#north-america]

| Service type      | IP addresses                                                                                                                                                                                                                                                                     | Protocol | Port                     |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------ |
| Signaling Service | \`106.14.12.130\`, \`118.190.148.38\`, \`184.72.16.87\`, \`35.168.106.53\`, \`35.156.231.150\`, \`15.237.134.178\`, \`54.178.26.110\`, \`52.221.23.86\`, \`13.230.60.35\`, \`15.206.47.129\`, \`13.127.149.196\`, \`13.209.247.137\`, \`13.124.182.235\`, \`23.98.43.152\`, \`107.155.14.132\`, \`69.28.51.142\` | UDP      | \`8443\`                   |
| Cloud Proxy       | \`128.14.195.192/28\`, \`128.14.245.16/28\`, \`128.14.72.80/28\`, \`128.14.200.208/28\`                                                                                                                                                                                                  | UDP      | \`4590-4600\`, \`8001-8010\` |

#### Europe [#europe]

| Service type      | IP addresses                                                                                                                                                                                                                                                                     | Protocol | Port                     |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------ |
| Signaling Service | \`106.14.12.130\`, \`118.190.148.38\`, \`184.72.16.87\`, \`35.168.106.53\`, \`35.156.231.150\`, \`15.237.134.178\`, \`54.178.26.110\`, \`52.221.23.86\`, \`13.230.60.35\`, \`15.206.47.129\`, \`13.127.149.196\`, \`13.209.247.137\`, \`13.124.182.235\`, \`23.98.43.152\`, \`107.155.14.132\`, \`69.28.51.142\` | UDP      | \`8443\`                   |
| Cloud Proxy       | \`104.166.160.208/28\`, \`23.236.110.32/28\`, \`104.166.142.134\`, \`104.166.161.4\`                                                                                                                                                                                                     | UDP      | \`4590-4600\`, \`8001-8010\` |

#### Asia, excluding Mainland China [#asia-excluding-mainland-china]

| Service type      | IP addresses                                                                                                                                                                                                                                                                     | Protocol | Port                     |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------ |
| Signaling Service | \`106.14.12.130\`, \`118.190.148.38\`, \`184.72.16.87\`, \`35.168.106.53\`, \`35.156.231.150\`, \`15.237.134.178\`, \`54.178.26.110\`, \`52.221.23.86\`, \`13.230.60.35\`, \`15.206.47.129\`, \`13.127.149.196\`, \`13.209.247.137\`, \`13.124.182.235\`, \`23.98.43.152\`, \`107.155.14.132\`, \`69.28.51.142\` | UDP      | \`8443\`                   |
| Cloud Proxy       | \`128.1.186.240/28\`, \`129.227.73.32/28\`, \`103.193.127.208/28\`                                                                                                                                                                                                                     | UDP      | \`4590-4600\`, \`8001-8010\` |

#### Japan [#japan]

| Service type      | IP addresses                                                                                                                                                                                                                                                                     | Protocol | Port                     |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------ |
| Signaling Service | \`106.14.12.130\`, \`118.190.148.38\`, \`184.72.16.87\`, \`35.168.106.53\`, \`35.156.231.150\`, \`15.237.134.178\`, \`54.178.26.110\`, \`52.221.23.86\`, \`13.230.60.35\`, \`15.206.47.129\`, \`13.127.149.196\`, \`13.209.247.137\`, \`13.124.182.235\`, \`23.98.43.152\`, \`107.155.14.132\`, \`69.28.51.142\` | UDP      | \`8443\`                   |
| Cloud Proxy       | \`129.227.113.112/28\`, \`129.227.55.96/28\`, \`122.10.153.74\`, \`129.227.234.123\`                                                                                                                                                                                                     | UDP      | \`4590-4600\`, \`8001-8010\` |

#### India [#india]

| Service type      | IP addresses                                                                                                                                                                                                                                                                     | Protocol | Port                     |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------ |
| Signaling Service | \`106.14.12.130\`, \`118.190.148.38\`, \`184.72.16.87\`, \`35.168.106.53\`, \`35.156.231.150\`, \`15.237.134.178\`, \`54.178.26.110\`, \`52.221.23.86\`, \`13.230.60.35\`, \`15.206.47.129\`, \`13.127.149.196\`, \`13.209.247.137\`, \`13.124.182.235\`, \`23.98.43.152\`, \`107.155.14.132\`, \`69.28.51.142\` | UDP      | \`8443\`                   |
| Cloud Proxy       | \`129.227.217.128/28\`, \`129.227.108.208/28\`, \`128.1.105.112/28\`                                                                                                                                                                                                                   | UDP      | \`4590-4600\`, \`8001-8010\` |

#### Mainland China [#mainland-china]

| Service type      | IP addresses                                                                                                                                                                     | Protocol | Port                     |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------ |
| Signaling Service | \`106.14.12.130\`, \`118.190.148.38\`                                                                                                                                                | UDP      | \`8443\`                   |
| Cloud Proxy       | \`14.29.38.144/28\`, \`27.45.161.144/28\`, \`183.232.200.144/28\`, \`115.238.206.0/28\`, \`106.3.209.0/28\`, \`112.13.216.0/28\`, \`219.153.111.128/28\`, \`221.178.42.0/28\`, \`113.207.12.0/28\` | UDP      | \`4590-4600\`, \`8001-8010\` |

### Native RTC Force TCP mode [#native-rtc-force-tcp-mode]

#### North America [#north-america-1]

| Service type      | IP addresses                                                                                                                                                                                                                                                                    | Protocol | Port  |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----- |
| Signaling Service | \`101.132.108.165\`, \`123.56.235.221\`, \`52.54.85.111\`, \`184.72.18.217\`, \`52.28.239.238\`, \`3.9.120.239\`, \`13.250.89.184\`, \`18.176.162.64\`, \`168.138.214.216\`, \`20.193.241.143\`, \`3.109.116.108\`, \`3.36.161.253\`, \`15.164.88.208\`, \`164.52.43.58\`, \`54.205.123.178\`, \`50.18.20.222\` | TCP      | \`443\` |
| Cloud Proxy       | \`128.14.195.192/28\`, \`128.14.245.16/28\`, \`128.14.72.80/28\`, \`128.14.200.208/28\`                                                                                                                                                                                                 | TCP      | \`443\` |

#### Europe [#europe-1]

| Service type      | IP addresses                                                                                                                                                                                                                                                                    | Protocol | Port  |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----- |
| Signaling Service | \`101.132.108.165\`, \`123.56.235.221\`, \`52.54.85.111\`, \`184.72.18.217\`, \`52.28.239.238\`, \`3.9.120.239\`, \`13.250.89.184\`, \`18.176.162.64\`, \`168.138.214.216\`, \`20.193.241.143\`, \`3.109.116.108\`, \`3.36.161.253\`, \`15.164.88.208\`, \`164.52.43.58\`, \`54.205.123.178\`, \`50.18.20.222\` | TCP      | \`443\` |
| Cloud Proxy       | \`104.166.160.208/28\`, \`23.236.110.32/28\`, \`104.166.142.134\`, \`104.166.161.4\`                                                                                                                                                                                                    | TCP      | \`443\` |

#### Asia, excluding Mainland China [#asia-excluding-mainland-china-1]

| Service type      | IP addresses                                                                                                                                                                                                                                                                    | Protocol | Port  |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----- |
| Signaling Service | \`101.132.108.165\`, \`123.56.235.221\`, \`52.54.85.111\`, \`184.72.18.217\`, \`52.28.239.238\`, \`3.9.120.239\`, \`13.250.89.184\`, \`18.176.162.64\`, \`168.138.214.216\`, \`20.193.241.143\`, \`3.109.116.108\`, \`3.36.161.253\`, \`15.164.88.208\`, \`164.52.43.58\`, \`54.205.123.178\`, \`50.18.20.222\` | TCP      | \`443\` |
| Cloud Proxy       | \`128.1.186.240/28\`, \`129.227.73.32/28\`, \`103.193.127.208/28\`                                                                                                                                                                                                                    | TCP      | \`443\` |

#### Japan [#japan-1]

| Service type      | IP addresses                                                                                                                                                                                                                                                                    | Protocol | Port  |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----- |
| Signaling Service | \`101.132.108.165\`, \`123.56.235.221\`, \`52.54.85.111\`, \`184.72.18.217\`, \`52.28.239.238\`, \`3.9.120.239\`, \`13.250.89.184\`, \`18.176.162.64\`, \`168.138.214.216\`, \`20.193.241.143\`, \`3.109.116.108\`, \`3.36.161.253\`, \`15.164.88.208\`, \`164.52.43.58\`, \`54.205.123.178\`, \`50.18.20.222\` | TCP      | \`443\` |
| Cloud Proxy       | \`129.227.113.112/28\`, \`129.227.55.96/28\`, \`122.10.153.74\`, \`129.227.234.123\`                                                                                                                                                                                                    | TCP      | \`443\` |

#### India [#india-1]

| Service type      | IP addresses                                                                                                                                                                                                                                                                    | Protocol | Port  |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----- |
| Signaling Service | \`101.132.108.165\`, \`123.56.235.221\`, \`52.54.85.111\`, \`184.72.18.217\`, \`52.28.239.238\`, \`3.9.120.239\`, \`13.250.89.184\`, \`18.176.162.64\`, \`168.138.214.216\`, \`20.193.241.143\`, \`3.109.116.108\`, \`3.36.161.253\`, \`15.164.88.208\`, \`164.52.43.58\`, \`54.205.123.178\`, \`50.18.20.222\` | TCP      | \`443\` |
| Cloud Proxy       | \`129.227.217.128/28\`, \`129.227.108.208/28\`, \`128.1.105.112/28\`                                                                                                                                                                                                                  | TCP      | \`443\` |

#### Mainland China [#mainland-china-1]

| Service type      | IP addresses                                                                                                                                                                     | Protocol | Port  |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----- |
| Signaling Service | \`101.132.108.165\`, \`123.56.235.221\`                                                                                                                                              | TCP      | \`443\` |
| Cloud Proxy       | \`14.29.38.144/28\`, \`27.45.161.144/28\`, \`183.232.200.144/28\`, \`115.238.206.0/28\`, \`106.3.209.0/28\`, \`112.13.216.0/28\`, \`219.153.111.128/28\`, \`221.178.42.0/28\`, \`113.207.12.0/28\` | TCP      | \`443\` |

### Web RTC Cloud Proxy [#web-rtc-cloud-proxy]

#### North America [#north-america-2]

| Service type      | IP addresses                                                                    | Protocol | Port  |
| ----------------- | ------------------------------------------------------------------------------- | -------- | ----- |
| Signaling Service | \`47.252.17.251\`, \`170.106.135.177\`                                              | UDP/TCP  | \`443\` |
| Cloud Proxy       | \`128.14.195.192/28\`, \`128.14.245.16/28\`, \`128.14.72.80/28\`, \`128.14.200.208/28\` | UDP/TCP  | \`443\` |

#### Europe [#europe-2]

| Service type      | IP addresses                                                                                                                                                                                                            | Protocol | Port  |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----- |
| Signaling Service | \`47.254.149.145\`, \`162.62.220.8\`                                                                                                                                                                                        | UDP/TCP  | \`443\` |
| Cloud Proxy       | \`104.166.160.208/28\`, \`23.236.110.32/28\`, \`148.153.25.149\`, \`148.153.25.148\`, \`148.153.25.147\`, \`148.153.25.146\`, \`148.153.25.184\`, \`148.153.93.18\`, \`148.153.93.19\`, \`148.153.93.24\`, \`148.153.93.25\`, \`148.153.93.27\` | UDP/TCP  | \`443\` |

#### India [#india-2]

| Service type      | IP addresses                                                   | Protocol | Port  |
| ----------------- | -------------------------------------------------------------- | -------- | ----- |
| Signaling Service | \`147.139.34.215\`, \`129.226.26.104\`                             | UDP/TCP  | \`443\` |
| Cloud Proxy       | \`129.227.217.128/28\`, \`129.227.108.208/28\`, \`128.1.105.112/28\` | UDP/TCP  | \`443\` |

#### Japan [#japan-2]

| Service type      | IP addresses                                                                                                                                                                                     | Protocol | Port  |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ----- |
| Signaling Service | \`47.245.7.250\`, \`43.128.248.97\`                                                                                                                                                                  | UDP/TCP  | \`443\` |
| Cloud Proxy       | \`129.227.113.112/28\`, \`129.227.55.96/28\`, \`164.52.24.41\`, \`164.52.6.29\`, \`164.52.24.44\`, \`164.52.24.43\`, \`103.101.125.21\`, \`103.101.125.26\`, \`103.101.125.20\`, \`103.101.125.22\`, \`122.10.153.90\` | UDP/TCP  | \`443\` |

#### Asia, excluding Mainland China [#asia-excluding-mainland-china-2]

| Service type      | IP addresses                                                 | Protocol | Port  |
| ----------------- | ------------------------------------------------------------ | -------- | ----- |
| Signaling Service | \`161.117.177.218\`, \`104.250.52.195\`                          | UDP/TCP  | \`443\` |
| Cloud Proxy       | \`128.1.186.240/28\`, \`129.227.73.32/28\`, \`103.193.127.208/28\` | UDP/TCP  | \`443\` |

#### Mainland China [#mainland-china-2]

| Service type      | IP addresses                                                                                                                                                                     | Protocol | Port  |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----- |
| Signaling Service | \`139.196.42.124\`, \`123.56.57.206\`                                                                                                                                                | UDP/TCP  | \`443\` |
| Cloud Proxy       | \`14.29.38.144/28\`, \`27.45.161.144/28\`, \`183.232.200.144/28\`, \`115.238.206.0/28\`, \`106.3.209.0/28\`, \`112.13.216.0/28\`, \`219.153.111.128/28\`, \`221.178.42.0/28\`, \`113.207.12.0/28\` | UDP/TCP  | \`443\` |

### Web Signaling Cloud Proxy [#web-signaling-cloud-proxy]

#### North America [#north-america-3]

| Service type             | IP addresses                                                                    | Protocol | Port  |
| ------------------------ | ------------------------------------------------------------------------------- | -------- | ----- |
| Signaling and AP Service | \`35.169.70.181\`, \`107.155.14.132\`, \`52.52.84.170\`                               | UDP/TCP  | \`443\` |
| Cloud Proxy              | \`128.14.195.192/28\`, \`128.14.245.16/28\`, \`128.14.72.80/28\`, \`128.14.200.208/28\` | UDP/TCP  | \`443\` |

#### Europe [#europe-3]

| Service type             | IP addresses                                                                 | Protocol | Port  |
| ------------------------ | ---------------------------------------------------------------------------- | -------- | ----- |
| Signaling and AP Service | \`128.1.78.146\`, \`35.178.208.187\`                                             | UDP/TCP  | \`443\` |
| Cloud Proxy              | \`104.166.160.208/28\`, \`23.236.110.32/28\`, \`104.166.142.134\`, \`104.166.161.4\` | UDP/TCP  | \`443\` |

#### India [#india-3]

| Service type             | IP addresses                                                   | Protocol | Port  |
| ------------------------ | -------------------------------------------------------------- | -------- | ----- |
| Signaling and AP Service | \`129.227.98.170\`, \`129.154.38.143\`                             | UDP/TCP  | \`443\` |
| Cloud Proxy              | \`129.227.217.128/28\`, \`129.227.108.208/28\`, \`128.1.105.112/28\` | UDP/TCP  | \`443\` |

#### Japan [#japan-3]

| Service type             | IP addresses                                                                 | Protocol | Port  |
| ------------------------ | ---------------------------------------------------------------------------- | -------- | ----- |
| Signaling and AP Service | \`52.68.71.190\`, \`168.138.222.84\`                                             | UDP/TCP  | \`443\` |
| Cloud Proxy              | \`129.227.113.112/28\`, \`129.227.55.96/28\`, \`122.10.153.74\`, \`129.227.234.123\` | UDP/TCP  | \`443\` |

#### Asia, excluding Mainland China [#asia-excluding-mainland-china-3]

| Service type                    | IP addresses                                                                                     | Protocol | Port  |
| ------------------------------- | ------------------------------------------------------------------------------------------------ | -------- | ----- |
| Signaling and AP Service - Asia | \`47.74.211.17\`, \`52.221.23.86\`, \`23.98.43.152\`, \`47.244.4.122\`, \`164.52.43.59\`, \`13.124.182.235\` | UDP/TCP  | \`443\` |
| Cloud Proxy                     | \`128.1.186.240/28\`, \`129.227.73.32/28\`, \`103.193.127.208/28\`                                     | UDP/TCP  | \`443\` |

#### Mainland China [#mainland-china-3]

| Service type             | IP addresses                                                                                                                                                                     | Protocol | Port  |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----- |
| Signaling and AP Service | \`52.80.192.229\`, \`47.96.234.219\`                                                                                                                                                 | UDP/TCP  | \`443\` |
| Cloud Proxy              | \`14.29.38.144/28\`, \`27.45.161.144/28\`, \`183.232.200.144/28\`, \`115.238.206.0/28\`, \`106.3.209.0/28\`, \`112.13.216.0/28\`, \`219.153.111.128/28\`, \`221.178.42.0/28\`, \`113.207.12.0/28\` | UDP/TCP  | \`443\` |

## Best practices [#best-practices]

### Regional deployment [#regional-deployment]

* **Global deployments**:
  * Open network segments for all overseas regions to ensure service availability
  * Especially important for deployments without specific region requirements

### Domain vs IP whitelisting [#domain-vs-ip-whitelisting]

* **AP and Signaling**:
  Consider the following options
  * Enable domain name whitelisting (eliminates need for HTTPS/WSS IP whitelists)
  * Configure IP whitelisting

* **Media**:
  * Can only use IP whitelisting. Domain whitelisting is not available.

* **DNS requirements**:
  * Open DNS resolution port \`53\` in addition to port \`443\`
  * Verify connectivity by pinging the provided domain names

### Port configuration requirements [#port-configuration-requirements]

* **TCP/UDP requirements**:
  * TCP port \`443\`: Required for all configurations
  * UDP port \`443\`: Required for Proxy3 only (proxy4/5 only need TCP \`443\`)

* **Regional considerations**:
  * If your region is uncertain, configure all whitelists
  * For region-specific deployments like Japan, consider opening the entire region, such as Asia

## Validation and testing [#validation-and-testing]

Validate and test your configuration before rolling it out to production.

### Validate configuration [#validate-configuration]

To verify that your Cloud Proxy configuration is working correctly:

1. Enable Cloud Proxy mode in your application (for example, UDP Cloud Proxy)
2. Join a channel and check for successful connection
3. Monitor the network quality metrics in your application
4. Test from multiple geographic locations if possible

### Test performance [#test-performance]

To test your configuration:

1. **Identify SDK version**:
   Use the SDK's version identification method to confirm your current version.

2. **Test connectivity**:
   Configure the Cloud Proxy UDP mode and enable the lastmile test to check connectivity.

3. **Monitor performance**:
   * Track latency, packet loss, and jitter
   * Test across all targeted regions

### Get support [#get-support]

For implementation assistance, contact [support@agora.io](mailto\\:support@agora.io) with your specific SDK version and region requirements.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This guide provides configuration details you need to set up NAME Cloud Proxy services across all supported regions. Cloud Proxy enables secure communication through firewalls by using designated IP addresses and ports."
  }, {
    heading: undefined,
    content: "If you configured cloud proxy settings using an older version of this guide, you may need to update your firewall rules. Refer to the Cloud proxy migration guide."
  }, {
    heading: "understand-the-tech",
    content: "Agora deploys dedicated servers to run the cloud proxy service. Agora owns the IP addresses and fully controls the traffic on these addresses. The following network infrastructure components support your deployment:"
  }, {
    heading: "understand-the-tech",
    content: "**Access point networks**: Each access point uses a single cloud-hosted IP address."
  }, {
    heading: "understand-the-tech",
    content: "**Cloud machine networks**: Use single-point IPs for better security."
  }, {
    heading: "understand-the-tech",
    content: "**Physical machine networks**: Use a /28 subnet mask for each network segment."
  }, {
    heading: "understand-the-tech",
    content: "**Regional deployment**: Includes configurations for North America, Europe, India, Japan, Southeast Asia, and China."
  }, {
    heading: "implementation-guidelines",
    content: "Follow these guidelines to configure cloud proxy settings."
  }, {
    heading: "implementation-guidelines",
    content: "**Check your SDK version**: Configuration requirements vary depending on the SDK version you're using."
  }, {
    heading: "implementation-guidelines",
    content: "**Configure regional IPs**: Add the correct IP addresses for your target regions."
  }, {
    heading: "implementation-guidelines",
    content: "When adding IP addresses:"
  }, {
    heading: "implementation-guidelines",
    content: "If you use cloud proxy with Restricted media zones, add only the IP addresses dedicated to your specified region."
  }, {
    heading: "implementation-guidelines",
    content: "If you do not restrict media zones, add all IP addresses to ensure connectivity."
  }, {
    heading: "implementation-guidelines",
    content: "**Open required ports**: Make sure all necessary firewall ports are accessible."
  }, {
    heading: "implementation-guidelines",
    content: "**Test connectivity**: Validate your configuration before deploying to production."
  }, {
    heading: "implementation-guidelines",
    content: "To use Agora Cloud Proxy, your end users must first configure their firewall to trust the following IP address and port ranges."
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
    heading: "north-america-1",
    content: "Service type"
  }, {
    heading: "north-america-1",
    content: "IP addresses"
  }, {
    heading: "north-america-1",
    content: "Protocol"
  }, {
    heading: "north-america-1",
    content: "Port"
  }, {
    heading: "north-america-1",
    content: "Signaling Service"
  }, {
    heading: "north-america-1",
    content: "`101.132.108.165`, `123.56.235.221`, `52.54.85.111`, `184.72.18.217`, `52.28.239.238`, `3.9.120.239`, `13.250.89.184`, `18.176.162.64`, `168.138.214.216`, `20.193.241.143`, `3.109.116.108`, `3.36.161.253`, `15.164.88.208`, `164.52.43.58`, `54.205.123.178`, `50.18.20.222`"
  }, {
    heading: "north-america-1",
    content: "TCP"
  }, {
    heading: "north-america-1",
    content: "`443`"
  }, {
    heading: "north-america-1",
    content: "Cloud Proxy"
  }, {
    heading: "north-america-1",
    content: "`128.14.195.192/28`, `128.14.245.16/28`, `128.14.72.80/28`, `128.14.200.208/28`"
  }, {
    heading: "north-america-1",
    content: "TCP"
  }, {
    heading: "north-america-1",
    content: "`443`"
  }, {
    heading: "europe-1",
    content: "Service type"
  }, {
    heading: "europe-1",
    content: "IP addresses"
  }, {
    heading: "europe-1",
    content: "Protocol"
  }, {
    heading: "europe-1",
    content: "Port"
  }, {
    heading: "europe-1",
    content: "Signaling Service"
  }, {
    heading: "europe-1",
    content: "`101.132.108.165`, `123.56.235.221`, `52.54.85.111`, `184.72.18.217`, `52.28.239.238`, `3.9.120.239`, `13.250.89.184`, `18.176.162.64`, `168.138.214.216`, `20.193.241.143`, `3.109.116.108`, `3.36.161.253`, `15.164.88.208`, `164.52.43.58`, `54.205.123.178`, `50.18.20.222`"
  }, {
    heading: "europe-1",
    content: "TCP"
  }, {
    heading: "europe-1",
    content: "`443`"
  }, {
    heading: "europe-1",
    content: "Cloud Proxy"
  }, {
    heading: "europe-1",
    content: "`104.166.160.208/28`, `23.236.110.32/28`, `104.166.142.134`, `104.166.161.4`"
  }, {
    heading: "europe-1",
    content: "TCP"
  }, {
    heading: "europe-1",
    content: "`443`"
  }, {
    heading: "asia-excluding-mainland-china-1",
    content: "Service type"
  }, {
    heading: "asia-excluding-mainland-china-1",
    content: "IP addresses"
  }, {
    heading: "asia-excluding-mainland-china-1",
    content: "Protocol"
  }, {
    heading: "asia-excluding-mainland-china-1",
    content: "Port"
  }, {
    heading: "asia-excluding-mainland-china-1",
    content: "Signaling Service"
  }, {
    heading: "asia-excluding-mainland-china-1",
    content: "`101.132.108.165`, `123.56.235.221`, `52.54.85.111`, `184.72.18.217`, `52.28.239.238`, `3.9.120.239`, `13.250.89.184`, `18.176.162.64`, `168.138.214.216`, `20.193.241.143`, `3.109.116.108`, `3.36.161.253`, `15.164.88.208`, `164.52.43.58`, `54.205.123.178`, `50.18.20.222`"
  }, {
    heading: "asia-excluding-mainland-china-1",
    content: "TCP"
  }, {
    heading: "asia-excluding-mainland-china-1",
    content: "`443`"
  }, {
    heading: "asia-excluding-mainland-china-1",
    content: "Cloud Proxy"
  }, {
    heading: "asia-excluding-mainland-china-1",
    content: "`128.1.186.240/28`, `129.227.73.32/28`, `103.193.127.208/28`"
  }, {
    heading: "asia-excluding-mainland-china-1",
    content: "TCP"
  }, {
    heading: "asia-excluding-mainland-china-1",
    content: "`443`"
  }, {
    heading: "japan-1",
    content: "Service type"
  }, {
    heading: "japan-1",
    content: "IP addresses"
  }, {
    heading: "japan-1",
    content: "Protocol"
  }, {
    heading: "japan-1",
    content: "Port"
  }, {
    heading: "japan-1",
    content: "Signaling Service"
  }, {
    heading: "japan-1",
    content: "`101.132.108.165`, `123.56.235.221`, `52.54.85.111`, `184.72.18.217`, `52.28.239.238`, `3.9.120.239`, `13.250.89.184`, `18.176.162.64`, `168.138.214.216`, `20.193.241.143`, `3.109.116.108`, `3.36.161.253`, `15.164.88.208`, `164.52.43.58`, `54.205.123.178`, `50.18.20.222`"
  }, {
    heading: "japan-1",
    content: "TCP"
  }, {
    heading: "japan-1",
    content: "`443`"
  }, {
    heading: "japan-1",
    content: "Cloud Proxy"
  }, {
    heading: "japan-1",
    content: "`129.227.113.112/28`, `129.227.55.96/28`, `122.10.153.74`, `129.227.234.123`"
  }, {
    heading: "japan-1",
    content: "TCP"
  }, {
    heading: "japan-1",
    content: "`443`"
  }, {
    heading: "india-1",
    content: "Service type"
  }, {
    heading: "india-1",
    content: "IP addresses"
  }, {
    heading: "india-1",
    content: "Protocol"
  }, {
    heading: "india-1",
    content: "Port"
  }, {
    heading: "india-1",
    content: "Signaling Service"
  }, {
    heading: "india-1",
    content: "`101.132.108.165`, `123.56.235.221`, `52.54.85.111`, `184.72.18.217`, `52.28.239.238`, `3.9.120.239`, `13.250.89.184`, `18.176.162.64`, `168.138.214.216`, `20.193.241.143`, `3.109.116.108`, `3.36.161.253`, `15.164.88.208`, `164.52.43.58`, `54.205.123.178`, `50.18.20.222`"
  }, {
    heading: "india-1",
    content: "TCP"
  }, {
    heading: "india-1",
    content: "`443`"
  }, {
    heading: "india-1",
    content: "Cloud Proxy"
  }, {
    heading: "india-1",
    content: "`129.227.217.128/28`, `129.227.108.208/28`, `128.1.105.112/28`"
  }, {
    heading: "india-1",
    content: "TCP"
  }, {
    heading: "india-1",
    content: "`443`"
  }, {
    heading: "mainland-china-1",
    content: "Service type"
  }, {
    heading: "mainland-china-1",
    content: "IP addresses"
  }, {
    heading: "mainland-china-1",
    content: "Protocol"
  }, {
    heading: "mainland-china-1",
    content: "Port"
  }, {
    heading: "mainland-china-1",
    content: "Signaling Service"
  }, {
    heading: "mainland-china-1",
    content: "`101.132.108.165`, `123.56.235.221`"
  }, {
    heading: "mainland-china-1",
    content: "TCP"
  }, {
    heading: "mainland-china-1",
    content: "`443`"
  }, {
    heading: "mainland-china-1",
    content: "Cloud Proxy"
  }, {
    heading: "mainland-china-1",
    content: "`14.29.38.144/28`, `27.45.161.144/28`, `183.232.200.144/28`, `115.238.206.0/28`, `106.3.209.0/28`, `112.13.216.0/28`, `219.153.111.128/28`, `221.178.42.0/28`, `113.207.12.0/28`"
  }, {
    heading: "mainland-china-1",
    content: "TCP"
  }, {
    heading: "mainland-china-1",
    content: "`443`"
  }, {
    heading: "north-america-2",
    content: "Service type"
  }, {
    heading: "north-america-2",
    content: "IP addresses"
  }, {
    heading: "north-america-2",
    content: "Protocol"
  }, {
    heading: "north-america-2",
    content: "Port"
  }, {
    heading: "north-america-2",
    content: "Signaling Service"
  }, {
    heading: "north-america-2",
    content: "`47.252.17.251`, `170.106.135.177`"
  }, {
    heading: "north-america-2",
    content: "UDP/TCP"
  }, {
    heading: "north-america-2",
    content: "`443`"
  }, {
    heading: "north-america-2",
    content: "Cloud Proxy"
  }, {
    heading: "north-america-2",
    content: "`128.14.195.192/28`, `128.14.245.16/28`, `128.14.72.80/28`, `128.14.200.208/28`"
  }, {
    heading: "north-america-2",
    content: "UDP/TCP"
  }, {
    heading: "north-america-2",
    content: "`443`"
  }, {
    heading: "europe-2",
    content: "Service type"
  }, {
    heading: "europe-2",
    content: "IP addresses"
  }, {
    heading: "europe-2",
    content: "Protocol"
  }, {
    heading: "europe-2",
    content: "Port"
  }, {
    heading: "europe-2",
    content: "Signaling Service"
  }, {
    heading: "europe-2",
    content: "`47.254.149.145`, `162.62.220.8`"
  }, {
    heading: "europe-2",
    content: "UDP/TCP"
  }, {
    heading: "europe-2",
    content: "`443`"
  }, {
    heading: "europe-2",
    content: "Cloud Proxy"
  }, {
    heading: "europe-2",
    content: "`104.166.160.208/28`, `23.236.110.32/28`, `148.153.25.149`, `148.153.25.148`, `148.153.25.147`, `148.153.25.146`, `148.153.25.184`, `148.153.93.18`, `148.153.93.19`, `148.153.93.24`, `148.153.93.25`, `148.153.93.27`"
  }, {
    heading: "europe-2",
    content: "UDP/TCP"
  }, {
    heading: "europe-2",
    content: "`443`"
  }, {
    heading: "india-2",
    content: "Service type"
  }, {
    heading: "india-2",
    content: "IP addresses"
  }, {
    heading: "india-2",
    content: "Protocol"
  }, {
    heading: "india-2",
    content: "Port"
  }, {
    heading: "india-2",
    content: "Signaling Service"
  }, {
    heading: "india-2",
    content: "`147.139.34.215`, `129.226.26.104`"
  }, {
    heading: "india-2",
    content: "UDP/TCP"
  }, {
    heading: "india-2",
    content: "`443`"
  }, {
    heading: "india-2",
    content: "Cloud Proxy"
  }, {
    heading: "india-2",
    content: "`129.227.217.128/28`, `129.227.108.208/28`, `128.1.105.112/28`"
  }, {
    heading: "india-2",
    content: "UDP/TCP"
  }, {
    heading: "india-2",
    content: "`443`"
  }, {
    heading: "japan-2",
    content: "Service type"
  }, {
    heading: "japan-2",
    content: "IP addresses"
  }, {
    heading: "japan-2",
    content: "Protocol"
  }, {
    heading: "japan-2",
    content: "Port"
  }, {
    heading: "japan-2",
    content: "Signaling Service"
  }, {
    heading: "japan-2",
    content: "`47.245.7.250`, `43.128.248.97`"
  }, {
    heading: "japan-2",
    content: "UDP/TCP"
  }, {
    heading: "japan-2",
    content: "`443`"
  }, {
    heading: "japan-2",
    content: "Cloud Proxy"
  }, {
    heading: "japan-2",
    content: "`129.227.113.112/28`, `129.227.55.96/28`, `164.52.24.41`, `164.52.6.29`, `164.52.24.44`, `164.52.24.43`, `103.101.125.21`, `103.101.125.26`, `103.101.125.20`, `103.101.125.22`, `122.10.153.90`"
  }, {
    heading: "japan-2",
    content: "UDP/TCP"
  }, {
    heading: "japan-2",
    content: "`443`"
  }, {
    heading: "asia-excluding-mainland-china-2",
    content: "Service type"
  }, {
    heading: "asia-excluding-mainland-china-2",
    content: "IP addresses"
  }, {
    heading: "asia-excluding-mainland-china-2",
    content: "Protocol"
  }, {
    heading: "asia-excluding-mainland-china-2",
    content: "Port"
  }, {
    heading: "asia-excluding-mainland-china-2",
    content: "Signaling Service"
  }, {
    heading: "asia-excluding-mainland-china-2",
    content: "`161.117.177.218`, `104.250.52.195`"
  }, {
    heading: "asia-excluding-mainland-china-2",
    content: "UDP/TCP"
  }, {
    heading: "asia-excluding-mainland-china-2",
    content: "`443`"
  }, {
    heading: "asia-excluding-mainland-china-2",
    content: "Cloud Proxy"
  }, {
    heading: "asia-excluding-mainland-china-2",
    content: "`128.1.186.240/28`, `129.227.73.32/28`, `103.193.127.208/28`"
  }, {
    heading: "asia-excluding-mainland-china-2",
    content: "UDP/TCP"
  }, {
    heading: "asia-excluding-mainland-china-2",
    content: "`443`"
  }, {
    heading: "mainland-china-2",
    content: "Service type"
  }, {
    heading: "mainland-china-2",
    content: "IP addresses"
  }, {
    heading: "mainland-china-2",
    content: "Protocol"
  }, {
    heading: "mainland-china-2",
    content: "Port"
  }, {
    heading: "mainland-china-2",
    content: "Signaling Service"
  }, {
    heading: "mainland-china-2",
    content: "`139.196.42.124`, `123.56.57.206`"
  }, {
    heading: "mainland-china-2",
    content: "UDP/TCP"
  }, {
    heading: "mainland-china-2",
    content: "`443`"
  }, {
    heading: "mainland-china-2",
    content: "Cloud Proxy"
  }, {
    heading: "mainland-china-2",
    content: "`14.29.38.144/28`, `27.45.161.144/28`, `183.232.200.144/28`, `115.238.206.0/28`, `106.3.209.0/28`, `112.13.216.0/28`, `219.153.111.128/28`, `221.178.42.0/28`, `113.207.12.0/28`"
  }, {
    heading: "mainland-china-2",
    content: "UDP/TCP"
  }, {
    heading: "mainland-china-2",
    content: "`443`"
  }, {
    heading: "north-america-3",
    content: "Service type"
  }, {
    heading: "north-america-3",
    content: "IP addresses"
  }, {
    heading: "north-america-3",
    content: "Protocol"
  }, {
    heading: "north-america-3",
    content: "Port"
  }, {
    heading: "north-america-3",
    content: "Signaling and AP Service"
  }, {
    heading: "north-america-3",
    content: "`35.169.70.181`, `107.155.14.132`, `52.52.84.170`"
  }, {
    heading: "north-america-3",
    content: "UDP/TCP"
  }, {
    heading: "north-america-3",
    content: "`443`"
  }, {
    heading: "north-america-3",
    content: "Cloud Proxy"
  }, {
    heading: "north-america-3",
    content: "`128.14.195.192/28`, `128.14.245.16/28`, `128.14.72.80/28`, `128.14.200.208/28`"
  }, {
    heading: "north-america-3",
    content: "UDP/TCP"
  }, {
    heading: "north-america-3",
    content: "`443`"
  }, {
    heading: "europe-3",
    content: "Service type"
  }, {
    heading: "europe-3",
    content: "IP addresses"
  }, {
    heading: "europe-3",
    content: "Protocol"
  }, {
    heading: "europe-3",
    content: "Port"
  }, {
    heading: "europe-3",
    content: "Signaling and AP Service"
  }, {
    heading: "europe-3",
    content: "`128.1.78.146`, `35.178.208.187`"
  }, {
    heading: "europe-3",
    content: "UDP/TCP"
  }, {
    heading: "europe-3",
    content: "`443`"
  }, {
    heading: "europe-3",
    content: "Cloud Proxy"
  }, {
    heading: "europe-3",
    content: "`104.166.160.208/28`, `23.236.110.32/28`, `104.166.142.134`, `104.166.161.4`"
  }, {
    heading: "europe-3",
    content: "UDP/TCP"
  }, {
    heading: "europe-3",
    content: "`443`"
  }, {
    heading: "india-3",
    content: "Service type"
  }, {
    heading: "india-3",
    content: "IP addresses"
  }, {
    heading: "india-3",
    content: "Protocol"
  }, {
    heading: "india-3",
    content: "Port"
  }, {
    heading: "india-3",
    content: "Signaling and AP Service"
  }, {
    heading: "india-3",
    content: "`129.227.98.170`, `129.154.38.143`"
  }, {
    heading: "india-3",
    content: "UDP/TCP"
  }, {
    heading: "india-3",
    content: "`443`"
  }, {
    heading: "india-3",
    content: "Cloud Proxy"
  }, {
    heading: "india-3",
    content: "`129.227.217.128/28`, `129.227.108.208/28`, `128.1.105.112/28`"
  }, {
    heading: "india-3",
    content: "UDP/TCP"
  }, {
    heading: "india-3",
    content: "`443`"
  }, {
    heading: "japan-3",
    content: "Service type"
  }, {
    heading: "japan-3",
    content: "IP addresses"
  }, {
    heading: "japan-3",
    content: "Protocol"
  }, {
    heading: "japan-3",
    content: "Port"
  }, {
    heading: "japan-3",
    content: "Signaling and AP Service"
  }, {
    heading: "japan-3",
    content: "`52.68.71.190`, `168.138.222.84`"
  }, {
    heading: "japan-3",
    content: "UDP/TCP"
  }, {
    heading: "japan-3",
    content: "`443`"
  }, {
    heading: "japan-3",
    content: "Cloud Proxy"
  }, {
    heading: "japan-3",
    content: "`129.227.113.112/28`, `129.227.55.96/28`, `122.10.153.74`, `129.227.234.123`"
  }, {
    heading: "japan-3",
    content: "UDP/TCP"
  }, {
    heading: "japan-3",
    content: "`443`"
  }, {
    heading: "asia-excluding-mainland-china-3",
    content: "Service type"
  }, {
    heading: "asia-excluding-mainland-china-3",
    content: "IP addresses"
  }, {
    heading: "asia-excluding-mainland-china-3",
    content: "Protocol"
  }, {
    heading: "asia-excluding-mainland-china-3",
    content: "Port"
  }, {
    heading: "asia-excluding-mainland-china-3",
    content: "Signaling and AP Service - Asia"
  }, {
    heading: "asia-excluding-mainland-china-3",
    content: "`47.74.211.17`, `52.221.23.86`, `23.98.43.152`, `47.244.4.122`, `164.52.43.59`, `13.124.182.235`"
  }, {
    heading: "asia-excluding-mainland-china-3",
    content: "UDP/TCP"
  }, {
    heading: "asia-excluding-mainland-china-3",
    content: "`443`"
  }, {
    heading: "asia-excluding-mainland-china-3",
    content: "Cloud Proxy"
  }, {
    heading: "asia-excluding-mainland-china-3",
    content: "`128.1.186.240/28`, `129.227.73.32/28`, `103.193.127.208/28`"
  }, {
    heading: "asia-excluding-mainland-china-3",
    content: "UDP/TCP"
  }, {
    heading: "asia-excluding-mainland-china-3",
    content: "`443`"
  }, {
    heading: "mainland-china-3",
    content: "Service type"
  }, {
    heading: "mainland-china-3",
    content: "IP addresses"
  }, {
    heading: "mainland-china-3",
    content: "Protocol"
  }, {
    heading: "mainland-china-3",
    content: "Port"
  }, {
    heading: "mainland-china-3",
    content: "Signaling and AP Service"
  }, {
    heading: "mainland-china-3",
    content: "`52.80.192.229`, `47.96.234.219`"
  }, {
    heading: "mainland-china-3",
    content: "UDP/TCP"
  }, {
    heading: "mainland-china-3",
    content: "`443`"
  }, {
    heading: "mainland-china-3",
    content: "Cloud Proxy"
  }, {
    heading: "mainland-china-3",
    content: "`14.29.38.144/28`, `27.45.161.144/28`, `183.232.200.144/28`, `115.238.206.0/28`, `106.3.209.0/28`, `112.13.216.0/28`, `219.153.111.128/28`, `221.178.42.0/28`, `113.207.12.0/28`"
  }, {
    heading: "mainland-china-3",
    content: "UDP/TCP"
  }, {
    heading: "mainland-china-3",
    content: "`443`"
  }, {
    heading: "regional-deployment",
    content: "**Global deployments**:"
  }, {
    heading: "regional-deployment",
    content: "Open network segments for all overseas regions to ensure service availability"
  }, {
    heading: "regional-deployment",
    content: "Especially important for deployments without specific region requirements"
  }, {
    heading: "domain-vs-ip-whitelisting",
    content: `**AP and Signaling**:
Consider the following options`
  }, {
    heading: "domain-vs-ip-whitelisting",
    content: "Enable domain name whitelisting (eliminates need for HTTPS/WSS IP whitelists)"
  }, {
    heading: "domain-vs-ip-whitelisting",
    content: "Configure IP whitelisting"
  }, {
    heading: "domain-vs-ip-whitelisting",
    content: "**Media**:"
  }, {
    heading: "domain-vs-ip-whitelisting",
    content: "Can only use IP whitelisting. Domain whitelisting is not available."
  }, {
    heading: "domain-vs-ip-whitelisting",
    content: "**DNS requirements**:"
  }, {
    heading: "domain-vs-ip-whitelisting",
    content: "Open DNS resolution port `53` in addition to port `443`"
  }, {
    heading: "domain-vs-ip-whitelisting",
    content: "Verify connectivity by pinging the provided domain names"
  }, {
    heading: "port-configuration-requirements",
    content: "**TCP/UDP requirements**:"
  }, {
    heading: "port-configuration-requirements",
    content: "TCP port `443`: Required for all configurations"
  }, {
    heading: "port-configuration-requirements",
    content: "UDP port `443`: Required for Proxy3 only (proxy4/5 only need TCP `443`)"
  }, {
    heading: "port-configuration-requirements",
    content: "**Regional considerations**:"
  }, {
    heading: "port-configuration-requirements",
    content: "If your region is uncertain, configure all whitelists"
  }, {
    heading: "port-configuration-requirements",
    content: "For region-specific deployments like Japan, consider opening the entire region, such as Asia"
  }, {
    heading: "validation-and-testing",
    content: "Validate and test your configuration before rolling it out to production."
  }, {
    heading: "validate-configuration",
    content: "To verify that your Cloud Proxy configuration is working correctly:"
  }, {
    heading: "validate-configuration",
    content: "Enable Cloud Proxy mode in your application (for example, UDP Cloud Proxy)"
  }, {
    heading: "validate-configuration",
    content: "Join a channel and check for successful connection"
  }, {
    heading: "validate-configuration",
    content: "Monitor the network quality metrics in your application"
  }, {
    heading: "validate-configuration",
    content: "Test from multiple geographic locations if possible"
  }, {
    heading: "test-performance",
    content: "To test your configuration:"
  }, {
    heading: "test-performance",
    content: `**Identify SDK version**:
Use the SDK's version identification method to confirm your current version.`
  }, {
    heading: "test-performance",
    content: `**Test connectivity**:
Configure the Cloud Proxy UDP mode and enable the lastmile test to check connectivity.`
  }, {
    heading: "test-performance",
    content: "**Monitor performance**:"
  }, {
    heading: "test-performance",
    content: "Track latency, packet loss, and jitter"
  }, {
    heading: "test-performance",
    content: "Test across all targeted regions"
  }, {
    heading: "get-support",
    content: "For implementation assistance, contact support\\@agora.io with your specific SDK version and region requirements."
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "implementation-guidelines",
    content: "Implementation guidelines"
  }, {
    id: "native-rtc-force-udp-mode",
    content: "Native RTC Force UDP mode"
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
    id: "native-rtc-force-tcp-mode",
    content: "Native RTC Force TCP mode"
  }, {
    id: "north-america-1",
    content: "North America"
  }, {
    id: "europe-1",
    content: "Europe"
  }, {
    id: "asia-excluding-mainland-china-1",
    content: "Asia, excluding Mainland China"
  }, {
    id: "japan-1",
    content: "Japan"
  }, {
    id: "india-1",
    content: "India"
  }, {
    id: "mainland-china-1",
    content: "Mainland China"
  }, {
    id: "web-rtc-cloud-proxy",
    content: "Web RTC Cloud Proxy"
  }, {
    id: "north-america-2",
    content: "North America"
  }, {
    id: "europe-2",
    content: "Europe"
  }, {
    id: "india-2",
    content: "India"
  }, {
    id: "japan-2",
    content: "Japan"
  }, {
    id: "asia-excluding-mainland-china-2",
    content: "Asia, excluding Mainland China"
  }, {
    id: "mainland-china-2",
    content: "Mainland China"
  }, {
    id: "web-signaling-cloud-proxy",
    content: "Web Signaling Cloud Proxy"
  }, {
    id: "north-america-3",
    content: "North America"
  }, {
    id: "europe-3",
    content: "Europe"
  }, {
    id: "india-3",
    content: "India"
  }, {
    id: "japan-3",
    content: "Japan"
  }, {
    id: "asia-excluding-mainland-china-3",
    content: "Asia, excluding Mainland China"
  }, {
    id: "mainland-china-3",
    content: "Mainland China"
  }, {
    id: "best-practices",
    content: "Best practices"
  }, {
    id: "regional-deployment",
    content: "Regional deployment"
  }, {
    id: "domain-vs-ip-whitelisting",
    content: "Domain vs IP whitelisting"
  }, {
    id: "port-configuration-requirements",
    content: "Port configuration requirements"
  }, {
    id: "validation-and-testing",
    content: "Validation and testing"
  }, {
    id: "validate-configuration",
    content: "Validate configuration"
  }, {
    id: "test-performance",
    content: "Test performance"
  }, {
    id: "get-support",
    content: "Get support"
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
  url: "#implementation-guidelines",
  title: _jsx(_Fragment, {
    children: "Implementation guidelines"
  })
}, {
  depth: 3,
  url: "#native-rtc-force-udp-mode",
  title: _jsx(_Fragment, {
    children: "Native RTC Force UDP mode"
  })
}, {
  depth: 4,
  url: "#north-america",
  title: _jsx(_Fragment, {
    children: "North America"
  })
}, {
  depth: 4,
  url: "#europe",
  title: _jsx(_Fragment, {
    children: "Europe"
  })
}, {
  depth: 4,
  url: "#asia-excluding-mainland-china",
  title: _jsx(_Fragment, {
    children: "Asia, excluding Mainland China"
  })
}, {
  depth: 4,
  url: "#japan",
  title: _jsx(_Fragment, {
    children: "Japan"
  })
}, {
  depth: 4,
  url: "#india",
  title: _jsx(_Fragment, {
    children: "India"
  })
}, {
  depth: 4,
  url: "#mainland-china",
  title: _jsx(_Fragment, {
    children: "Mainland China"
  })
}, {
  depth: 3,
  url: "#native-rtc-force-tcp-mode",
  title: _jsx(_Fragment, {
    children: "Native RTC Force TCP mode"
  })
}, {
  depth: 4,
  url: "#north-america-1",
  title: _jsx(_Fragment, {
    children: "North America"
  })
}, {
  depth: 4,
  url: "#europe-1",
  title: _jsx(_Fragment, {
    children: "Europe"
  })
}, {
  depth: 4,
  url: "#asia-excluding-mainland-china-1",
  title: _jsx(_Fragment, {
    children: "Asia, excluding Mainland China"
  })
}, {
  depth: 4,
  url: "#japan-1",
  title: _jsx(_Fragment, {
    children: "Japan"
  })
}, {
  depth: 4,
  url: "#india-1",
  title: _jsx(_Fragment, {
    children: "India"
  })
}, {
  depth: 4,
  url: "#mainland-china-1",
  title: _jsx(_Fragment, {
    children: "Mainland China"
  })
}, {
  depth: 3,
  url: "#web-rtc-cloud-proxy",
  title: _jsx(_Fragment, {
    children: "Web RTC Cloud Proxy"
  })
}, {
  depth: 4,
  url: "#north-america-2",
  title: _jsx(_Fragment, {
    children: "North America"
  })
}, {
  depth: 4,
  url: "#europe-2",
  title: _jsx(_Fragment, {
    children: "Europe"
  })
}, {
  depth: 4,
  url: "#india-2",
  title: _jsx(_Fragment, {
    children: "India"
  })
}, {
  depth: 4,
  url: "#japan-2",
  title: _jsx(_Fragment, {
    children: "Japan"
  })
}, {
  depth: 4,
  url: "#asia-excluding-mainland-china-2",
  title: _jsx(_Fragment, {
    children: "Asia, excluding Mainland China"
  })
}, {
  depth: 4,
  url: "#mainland-china-2",
  title: _jsx(_Fragment, {
    children: "Mainland China"
  })
}, {
  depth: 3,
  url: "#web-signaling-cloud-proxy",
  title: _jsx(_Fragment, {
    children: "Web Signaling Cloud Proxy"
  })
}, {
  depth: 4,
  url: "#north-america-3",
  title: _jsx(_Fragment, {
    children: "North America"
  })
}, {
  depth: 4,
  url: "#europe-3",
  title: _jsx(_Fragment, {
    children: "Europe"
  })
}, {
  depth: 4,
  url: "#india-3",
  title: _jsx(_Fragment, {
    children: "India"
  })
}, {
  depth: 4,
  url: "#japan-3",
  title: _jsx(_Fragment, {
    children: "Japan"
  })
}, {
  depth: 4,
  url: "#asia-excluding-mainland-china-3",
  title: _jsx(_Fragment, {
    children: "Asia, excluding Mainland China"
  })
}, {
  depth: 4,
  url: "#mainland-china-3",
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
  depth: 3,
  url: "#regional-deployment",
  title: _jsx(_Fragment, {
    children: "Regional deployment"
  })
}, {
  depth: 3,
  url: "#domain-vs-ip-whitelisting",
  title: _jsx(_Fragment, {
    children: "Domain vs IP whitelisting"
  })
}, {
  depth: 3,
  url: "#port-configuration-requirements",
  title: _jsx(_Fragment, {
    children: "Port configuration requirements"
  })
}, {
  depth: 2,
  url: "#validation-and-testing",
  title: _jsx(_Fragment, {
    children: "Validation and testing"
  })
}, {
  depth: 3,
  url: "#validate-configuration",
  title: _jsx(_Fragment, {
    children: "Validate configuration"
  })
}, {
  depth: 3,
  url: "#test-performance",
  title: _jsx(_Fragment, {
    children: "Test performance"
  })
}, {
  depth: 3,
  url: "#get-support",
  title: _jsx(_Fragment, {
    children: "Get support"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This guide provides configuration details you need to set up NAME Cloud Proxy services across all supported regions. Cloud Proxy enables secure communication through firewalls by using designated IP addresses and ports."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["If you configured cloud proxy settings using an older version of this guide, you may need to update your firewall rules. Refer to the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/reference/cloud-proxy-migration-guide",
            children: "Cloud proxy migration guide"
          }), "."]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsx(_components.p, {
      children: "Agora deploys dedicated servers to run the cloud proxy service. Agora owns the IP addresses and fully controls the traffic on these addresses. The following network infrastructure components support your deployment:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Access point networks"
        }), ": Each access point uses a single cloud-hosted IP address."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Cloud machine networks"
        }), ": Use single-point IPs for better security."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Physical machine networks"
        }), ": Use a /28 subnet mask for each network segment."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Regional deployment"
        }), ": Includes configurations for North America, Europe, India, Japan, Southeast Asia, and China."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "implementation-guidelines",
      children: "Implementation guidelines"
    }), `
`, _jsx(_components.p, {
      children: "Follow these guidelines to configure cloud proxy settings."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Check your SDK version"
          }), ": Configuration requirements vary depending on the SDK version you're using."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Configure regional IPs"
          }), ": Add the correct IP addresses for your target regions."]
        }), `
`, _jsx(CalloutContainer, {
          type: "info",
          children: _jsxs(CalloutDescription, {
            children: [_jsx(_components.p, {
              children: "When adding IP addresses:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["If you use cloud proxy with ", _jsx(_components.a, {
                  href: "/en/realtime-media/rtc/build/manage-connection-and-quality/geofencing",
                  children: "Restricted media zones"
                }), ", add only the IP addresses dedicated to your specified region."]
              }), `
`, _jsx(_components.li, {
                children: "If you do not restrict media zones, add all IP addresses to ensure connectivity."
              }), `
`]
            })]
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Open required ports"
          }), ": Make sure all necessary firewall ports are accessible."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Test connectivity"
          }), ": Validate your configuration before deploying to production."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "To use Agora Cloud Proxy, your end users must first configure their firewall to trust the following IP address and port ranges."
    }), `
`, _jsx(_components.h3, {
      id: "native-rtc-force-udp-mode",
      children: "Native RTC Force UDP mode"
    }), `
`, _jsx(_components.h4, {
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
`, _jsx(_components.h4, {
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
`, _jsx(_components.h4, {
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
`, _jsx(_components.h4, {
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
`, _jsx(_components.h4, {
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
`, _jsx(_components.h4, {
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
`, _jsx(_components.h3, {
      id: "native-rtc-force-tcp-mode",
      children: "Native RTC Force TCP mode"
    }), `
`, _jsx(_components.h4, {
      id: "north-america-1",
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
              children: "101.132.108.165"
            }), ", ", _jsx(_components.code, {
              children: "123.56.235.221"
            }), ", ", _jsx(_components.code, {
              children: "52.54.85.111"
            }), ", ", _jsx(_components.code, {
              children: "184.72.18.217"
            }), ", ", _jsx(_components.code, {
              children: "52.28.239.238"
            }), ", ", _jsx(_components.code, {
              children: "3.9.120.239"
            }), ", ", _jsx(_components.code, {
              children: "13.250.89.184"
            }), ", ", _jsx(_components.code, {
              children: "18.176.162.64"
            }), ", ", _jsx(_components.code, {
              children: "168.138.214.216"
            }), ", ", _jsx(_components.code, {
              children: "20.193.241.143"
            }), ", ", _jsx(_components.code, {
              children: "3.109.116.108"
            }), ", ", _jsx(_components.code, {
              children: "3.36.161.253"
            }), ", ", _jsx(_components.code, {
              children: "15.164.88.208"
            }), ", ", _jsx(_components.code, {
              children: "164.52.43.58"
            }), ", ", _jsx(_components.code, {
              children: "54.205.123.178"
            }), ", ", _jsx(_components.code, {
              children: "50.18.20.222"
            })]
          }), _jsx(_components.td, {
            children: "TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
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
            children: "TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "europe-1",
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
              children: "101.132.108.165"
            }), ", ", _jsx(_components.code, {
              children: "123.56.235.221"
            }), ", ", _jsx(_components.code, {
              children: "52.54.85.111"
            }), ", ", _jsx(_components.code, {
              children: "184.72.18.217"
            }), ", ", _jsx(_components.code, {
              children: "52.28.239.238"
            }), ", ", _jsx(_components.code, {
              children: "3.9.120.239"
            }), ", ", _jsx(_components.code, {
              children: "13.250.89.184"
            }), ", ", _jsx(_components.code, {
              children: "18.176.162.64"
            }), ", ", _jsx(_components.code, {
              children: "168.138.214.216"
            }), ", ", _jsx(_components.code, {
              children: "20.193.241.143"
            }), ", ", _jsx(_components.code, {
              children: "3.109.116.108"
            }), ", ", _jsx(_components.code, {
              children: "3.36.161.253"
            }), ", ", _jsx(_components.code, {
              children: "15.164.88.208"
            }), ", ", _jsx(_components.code, {
              children: "164.52.43.58"
            }), ", ", _jsx(_components.code, {
              children: "54.205.123.178"
            }), ", ", _jsx(_components.code, {
              children: "50.18.20.222"
            })]
          }), _jsx(_components.td, {
            children: "TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
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
            children: "TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "asia-excluding-mainland-china-1",
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
              children: "101.132.108.165"
            }), ", ", _jsx(_components.code, {
              children: "123.56.235.221"
            }), ", ", _jsx(_components.code, {
              children: "52.54.85.111"
            }), ", ", _jsx(_components.code, {
              children: "184.72.18.217"
            }), ", ", _jsx(_components.code, {
              children: "52.28.239.238"
            }), ", ", _jsx(_components.code, {
              children: "3.9.120.239"
            }), ", ", _jsx(_components.code, {
              children: "13.250.89.184"
            }), ", ", _jsx(_components.code, {
              children: "18.176.162.64"
            }), ", ", _jsx(_components.code, {
              children: "168.138.214.216"
            }), ", ", _jsx(_components.code, {
              children: "20.193.241.143"
            }), ", ", _jsx(_components.code, {
              children: "3.109.116.108"
            }), ", ", _jsx(_components.code, {
              children: "3.36.161.253"
            }), ", ", _jsx(_components.code, {
              children: "15.164.88.208"
            }), ", ", _jsx(_components.code, {
              children: "164.52.43.58"
            }), ", ", _jsx(_components.code, {
              children: "54.205.123.178"
            }), ", ", _jsx(_components.code, {
              children: "50.18.20.222"
            })]
          }), _jsx(_components.td, {
            children: "TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
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
            children: "TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "japan-1",
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
              children: "101.132.108.165"
            }), ", ", _jsx(_components.code, {
              children: "123.56.235.221"
            }), ", ", _jsx(_components.code, {
              children: "52.54.85.111"
            }), ", ", _jsx(_components.code, {
              children: "184.72.18.217"
            }), ", ", _jsx(_components.code, {
              children: "52.28.239.238"
            }), ", ", _jsx(_components.code, {
              children: "3.9.120.239"
            }), ", ", _jsx(_components.code, {
              children: "13.250.89.184"
            }), ", ", _jsx(_components.code, {
              children: "18.176.162.64"
            }), ", ", _jsx(_components.code, {
              children: "168.138.214.216"
            }), ", ", _jsx(_components.code, {
              children: "20.193.241.143"
            }), ", ", _jsx(_components.code, {
              children: "3.109.116.108"
            }), ", ", _jsx(_components.code, {
              children: "3.36.161.253"
            }), ", ", _jsx(_components.code, {
              children: "15.164.88.208"
            }), ", ", _jsx(_components.code, {
              children: "164.52.43.58"
            }), ", ", _jsx(_components.code, {
              children: "54.205.123.178"
            }), ", ", _jsx(_components.code, {
              children: "50.18.20.222"
            })]
          }), _jsx(_components.td, {
            children: "TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
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
            children: "TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "india-1",
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
              children: "101.132.108.165"
            }), ", ", _jsx(_components.code, {
              children: "123.56.235.221"
            }), ", ", _jsx(_components.code, {
              children: "52.54.85.111"
            }), ", ", _jsx(_components.code, {
              children: "184.72.18.217"
            }), ", ", _jsx(_components.code, {
              children: "52.28.239.238"
            }), ", ", _jsx(_components.code, {
              children: "3.9.120.239"
            }), ", ", _jsx(_components.code, {
              children: "13.250.89.184"
            }), ", ", _jsx(_components.code, {
              children: "18.176.162.64"
            }), ", ", _jsx(_components.code, {
              children: "168.138.214.216"
            }), ", ", _jsx(_components.code, {
              children: "20.193.241.143"
            }), ", ", _jsx(_components.code, {
              children: "3.109.116.108"
            }), ", ", _jsx(_components.code, {
              children: "3.36.161.253"
            }), ", ", _jsx(_components.code, {
              children: "15.164.88.208"
            }), ", ", _jsx(_components.code, {
              children: "164.52.43.58"
            }), ", ", _jsx(_components.code, {
              children: "54.205.123.178"
            }), ", ", _jsx(_components.code, {
              children: "50.18.20.222"
            })]
          }), _jsx(_components.td, {
            children: "TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
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
            children: "TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "mainland-china-1",
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
              children: "101.132.108.165"
            }), ", ", _jsx(_components.code, {
              children: "123.56.235.221"
            })]
          }), _jsx(_components.td, {
            children: "TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
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
            children: "TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "web-rtc-cloud-proxy",
      children: "Web RTC Cloud Proxy"
    }), `
`, _jsx(_components.h4, {
      id: "north-america-2",
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
              children: "47.252.17.251"
            }), ", ", _jsx(_components.code, {
              children: "170.106.135.177"
            })]
          }), _jsx(_components.td, {
            children: "UDP/TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
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
            children: "UDP/TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "europe-2",
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
              children: "47.254.149.145"
            }), ", ", _jsx(_components.code, {
              children: "162.62.220.8"
            })]
          }), _jsx(_components.td, {
            children: "UDP/TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
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
              children: "148.153.25.149"
            }), ", ", _jsx(_components.code, {
              children: "148.153.25.148"
            }), ", ", _jsx(_components.code, {
              children: "148.153.25.147"
            }), ", ", _jsx(_components.code, {
              children: "148.153.25.146"
            }), ", ", _jsx(_components.code, {
              children: "148.153.25.184"
            }), ", ", _jsx(_components.code, {
              children: "148.153.93.18"
            }), ", ", _jsx(_components.code, {
              children: "148.153.93.19"
            }), ", ", _jsx(_components.code, {
              children: "148.153.93.24"
            }), ", ", _jsx(_components.code, {
              children: "148.153.93.25"
            }), ", ", _jsx(_components.code, {
              children: "148.153.93.27"
            })]
          }), _jsx(_components.td, {
            children: "UDP/TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "india-2",
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
              children: "147.139.34.215"
            }), ", ", _jsx(_components.code, {
              children: "129.226.26.104"
            })]
          }), _jsx(_components.td, {
            children: "UDP/TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
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
            children: "UDP/TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "japan-2",
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
              children: "47.245.7.250"
            }), ", ", _jsx(_components.code, {
              children: "43.128.248.97"
            })]
          }), _jsx(_components.td, {
            children: "UDP/TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
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
              children: "164.52.24.41"
            }), ", ", _jsx(_components.code, {
              children: "164.52.6.29"
            }), ", ", _jsx(_components.code, {
              children: "164.52.24.44"
            }), ", ", _jsx(_components.code, {
              children: "164.52.24.43"
            }), ", ", _jsx(_components.code, {
              children: "103.101.125.21"
            }), ", ", _jsx(_components.code, {
              children: "103.101.125.26"
            }), ", ", _jsx(_components.code, {
              children: "103.101.125.20"
            }), ", ", _jsx(_components.code, {
              children: "103.101.125.22"
            }), ", ", _jsx(_components.code, {
              children: "122.10.153.90"
            })]
          }), _jsx(_components.td, {
            children: "UDP/TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "asia-excluding-mainland-china-2",
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
              children: "161.117.177.218"
            }), ", ", _jsx(_components.code, {
              children: "104.250.52.195"
            })]
          }), _jsx(_components.td, {
            children: "UDP/TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
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
            children: "UDP/TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "mainland-china-2",
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
              children: "139.196.42.124"
            }), ", ", _jsx(_components.code, {
              children: "123.56.57.206"
            })]
          }), _jsx(_components.td, {
            children: "UDP/TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
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
            children: "UDP/TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "web-signaling-cloud-proxy",
      children: "Web Signaling Cloud Proxy"
    }), `
`, _jsx(_components.h4, {
      id: "north-america-3",
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
            children: "Signaling and AP Service"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "35.169.70.181"
            }), ", ", _jsx(_components.code, {
              children: "107.155.14.132"
            }), ", ", _jsx(_components.code, {
              children: "52.52.84.170"
            })]
          }), _jsx(_components.td, {
            children: "UDP/TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
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
            children: "UDP/TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "europe-3",
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
            children: "Signaling and AP Service"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "128.1.78.146"
            }), ", ", _jsx(_components.code, {
              children: "35.178.208.187"
            })]
          }), _jsx(_components.td, {
            children: "UDP/TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
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
            children: "UDP/TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "india-3",
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
            children: "Signaling and AP Service"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "129.227.98.170"
            }), ", ", _jsx(_components.code, {
              children: "129.154.38.143"
            })]
          }), _jsx(_components.td, {
            children: "UDP/TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
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
            children: "UDP/TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "japan-3",
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
            children: "Signaling and AP Service"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "52.68.71.190"
            }), ", ", _jsx(_components.code, {
              children: "168.138.222.84"
            })]
          }), _jsx(_components.td, {
            children: "UDP/TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
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
            children: "UDP/TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "asia-excluding-mainland-china-3",
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
            children: "Signaling and AP Service - Asia"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "47.74.211.17"
            }), ", ", _jsx(_components.code, {
              children: "52.221.23.86"
            }), ", ", _jsx(_components.code, {
              children: "23.98.43.152"
            }), ", ", _jsx(_components.code, {
              children: "47.244.4.122"
            }), ", ", _jsx(_components.code, {
              children: "164.52.43.59"
            }), ", ", _jsx(_components.code, {
              children: "13.124.182.235"
            })]
          }), _jsx(_components.td, {
            children: "UDP/TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
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
            children: "UDP/TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "mainland-china-3",
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
            children: "Signaling and AP Service"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "52.80.192.229"
            }), ", ", _jsx(_components.code, {
              children: "47.96.234.219"
            })]
          }), _jsx(_components.td, {
            children: "UDP/TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
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
            children: "UDP/TCP"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "443"
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "best-practices",
      children: "Best practices"
    }), `
`, _jsx(_components.h3, {
      id: "regional-deployment",
      children: "Regional deployment"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Global deployments"
        }), ":", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Open network segments for all overseas regions to ensure service availability"
          }), `
`, _jsx(_components.li, {
            children: "Especially important for deployments without specific region requirements"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "domain-vs-ip-whitelisting",
      children: "Domain vs IP whitelisting"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "AP and Signaling"
          }), `:
Consider the following options`]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Enable domain name whitelisting (eliminates need for HTTPS/WSS IP whitelists)"
          }), `
`, _jsx(_components.li, {
            children: "Configure IP whitelisting"
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Media"
          }), ":"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Can only use IP whitelisting. Domain whitelisting is not available."
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "DNS requirements"
          }), ":"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Open DNS resolution port ", _jsx(_components.code, {
              children: "53"
            }), " in addition to port ", _jsx(_components.code, {
              children: "443"
            })]
          }), `
`, _jsx(_components.li, {
            children: "Verify connectivity by pinging the provided domain names"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "port-configuration-requirements",
      children: "Port configuration requirements"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "TCP/UDP requirements"
          }), ":"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["TCP port ", _jsx(_components.code, {
              children: "443"
            }), ": Required for all configurations"]
          }), `
`, _jsxs(_components.li, {
            children: ["UDP port ", _jsx(_components.code, {
              children: "443"
            }), ": Required for Proxy3 only (proxy4/5 only need TCP ", _jsx(_components.code, {
              children: "443"
            }), ")"]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Regional considerations"
          }), ":"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "If your region is uncertain, configure all whitelists"
          }), `
`, _jsx(_components.li, {
            children: "For region-specific deployments like Japan, consider opening the entire region, such as Asia"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "validation-and-testing",
      children: "Validation and testing"
    }), `
`, _jsx(_components.p, {
      children: "Validate and test your configuration before rolling it out to production."
    }), `
`, _jsx(_components.h3, {
      id: "validate-configuration",
      children: "Validate configuration"
    }), `
`, _jsx(_components.p, {
      children: "To verify that your Cloud Proxy configuration is working correctly:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "Enable Cloud Proxy mode in your application (for example, UDP Cloud Proxy)"
      }), `
`, _jsx(_components.li, {
        children: "Join a channel and check for successful connection"
      }), `
`, _jsx(_components.li, {
        children: "Monitor the network quality metrics in your application"
      }), `
`, _jsx(_components.li, {
        children: "Test from multiple geographic locations if possible"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "test-performance",
      children: "Test performance"
    }), `
`, _jsx(_components.p, {
      children: "To test your configuration:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Identify SDK version"
          }), `:
Use the SDK's version identification method to confirm your current version.`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Test connectivity"
          }), `:
Configure the Cloud Proxy UDP mode and enable the lastmile test to check connectivity.`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Monitor performance"
          }), ":"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Track latency, packet loss, and jitter"
          }), `
`, _jsx(_components.li, {
            children: "Test across all targeted regions"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "get-support",
      children: "Get support"
    }), `
`, _jsxs(_components.p, {
      children: ["For implementation assistance, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), " with your specific SDK version and region requirements."]
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
