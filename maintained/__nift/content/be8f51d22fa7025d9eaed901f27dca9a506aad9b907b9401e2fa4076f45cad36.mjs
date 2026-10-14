import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Integrate the SDK",
  description: "Shows how to integrate the Server Gateway SDK and run the sample project."
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="linux-cpp" platforms="[&#x22;linux-cpp&#x22;,&#x22;linux-java&#x22;,&#x22;python&#x22;,&#x22;go&#x22;]" showTabs="true">
  <_PlatformPanel platform="linux-cpp">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="linux-cpp" platform="linux-cpp" />

    This article shows how to integrate the Server Gateway C++ SDK and run the sample project.

    ## Set up the development environment [#set-up-the-development-environment]

    Make sure your server meets the following requirements.

    ### Hardware environment [#hardware-environment]

    **Operating system**

    * Ubuntu 14.04 or higher
    * CentOS: 7.0 or higher

    **CPU architecture**

    * arm64
    * x86-64

    If you need to run the SDK on other architectures, [submit a ticket](https://agora-ticket.agora.io/) to contact technical support.

    **Performance**

    * CPU：8-core, 1.8 GHz or higher.
    * 2 GB of RAM or higher. 4 GB or higher is recommended.

    **Network**

    * The server is connected to the internet and has an internet IP.
    * The server can access \`*.agora.io\` and \`*.agoralab.co\`.

    ### Software environment [#software-environment]

    * glibc 2.18 or later
    * gcc 4.8 or later

    If you are using Ubuntu, taking Ubuntu 20.04.3 LTS as an example, install the following dependencies in your server:

    \`\`\`bash
    # Install aptitude
    sudo apt install aptitude
    # Install build-essential libx11-dev libxcomposite-dev libxext-dev libxfixes-dev libxdamage-dev cmake
    sudo aptitude install libx11-dev libxcomposite-dev libxext-dev libxfixes-dev libxdamage-dev cmake
    \`\`\`

    If you are using CentOS, taking CentOS 7.9.2009 as an example, install the following dependencies in your server:

    \`\`\`bash
    sudo yum groupinstall "Development Tools"
    sudo yum install wget
    sudo yum groupinstall X11
    \`\`\`

    ## Get your app ID and an RTC token [#get-your-app-id-and-an-rtc-token]

    See [Account](/en/introduction/account) to learn how to get your Agora App ID and a temporary RTC token.

    ## Get the SDK [#get-the-sdk]

    [Download](/en/api-reference/sdks?product=server-gateway\\&platform=linux) the latest x86-64 SDK package and decompress the file. If you need the SDK build for other architectures, [submit a ticket](https://agora-ticket.agora.io/) to technical support.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="linux-java">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="linux-cpp" platform="linux-java" />

    This article shows how to create a simple Maven project, integrate the Server Gateway Java SDK, and run the app.

    ## Set up the development environment [#set-up-the-development-environment-1]

    Make sure your server meets the following requirements.

    ### Hardware environment [#hardware-environment-1]

    **Operating system**

    * Ubuntu 18.04 or higher
    * CentOS: 7.0 or higher

    **CPU architecture**

    * arm64
    * x86-64

    If you need to run the SDK on other architectures, [submit a ticket](https://agora-ticket.agora.io/) to contact technical support.

    **Performance**

    * CPU：8-core, 1.8 GHz or higher.
    * 2 GB of RAM or higher. 4 GB or higher is recommended.

    **Network**

    * The server is connected to the internet and has an internet IP.
    * The server can access \`*.agora.io\` and \`*.agoralab.co\`.

    ### Software environment [#software-environment-1]

    * [Apache Maven](https://maven.apache.org/download.cgi) or other build tools. This page uses Apache Maven as an example.
    * JDK 8

    ## Get your app ID and an RTC token [#get-your-app-id-and-an-rtc-token-1]

    See [Account](/en/introduction/account) to learn how to get your Agora App ID and a temporary RTC token.

    ## Create a Maven project [#create-a-maven-project]

    See [Maven in Five Minutes](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html) to create a Maven project.

    \`\`\`bash
    mvn archetype:generate -DgroupId=com.mycompany.app -DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.4 -DinteractiveMode=false
    \`\`\`

    ## Integrate the SDK [#integrate-the-sdk]

    1. Navigate to the \`my-app\` folder.

       \`\`\`bash
       cd my-app
       \`\`\`

    2. Open \`pom.xml\` and replace the content with the following:

       \`\`\`xml
       <?xml version="1.0" encoding="UTF-8"?>
       <project xmlns="http://maven.apache.org/POM/4.0.0"
           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
       <modelVersion>4.0.0</modelVersion>

       <groupId>org.example</groupId>
       <artifactId>agora-rtc-linux-java</artifactId>
       <version>1.0-SNAPSHOT</version>

       <dependencies>
           <dependency>
           <groupId>io.agora.rtc</groupId>
           <artifactId>linux-sdk</artifactId>
           <version>3.7.200.21</version>
           </dependency>
       </dependencies>

       <properties>
           <maven.compiler.source>1.8</maven.compiler.source>
           <maven.compiler.target>1.8</maven.compiler.target>
       </properties>

       <build>
           <plugins>
           <plugin>
               <groupId>org.apache.maven.plugins</groupId>
               <artifactId>maven-shade-plugin</artifactId>
               <version>2.3</version>
               <configuration>
               <createDependencyReducedPom>true</createDependencyReducedPom>
               </configuration>
               <executions>
               <execution>
                   <phase>package</phase>
                   <goals>
                   <goal>shade</goal>
                   </goals>
                   <configuration>
                   <transformers>
                       <transformer
                           implementation="org.apache.maven.plugins.shade.resource.ManifestResourceTransformer">
                       <mainClass>App</mainClass>
                       </transformer>
                   </transformers>
                   </configuration>
               </execution>
               </executions>
           </plugin>
           </plugins>
       </build>
       </project>
       \`\`\`

    <CalloutContainer type="info">
      <CalloutDescription>
        Refer to [mvnrepository](https://mvnrepository.com/artifact/io.agora.rtc/linux-sdk) for other integration methods, such as Gradle.
      </CalloutDescription>
    </CalloutContainer>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="python">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="linux-cpp" platform="python" />

    This article shows how to integrate the Server Gateway Python SDK and run the sample project.

    ## Set up the development environment [#set-up-the-development-environment-2]

    Make sure your server meets the following requirements.

    ### Hardware environment [#hardware-environment-2]

    **Operating system**

    * Ubuntu 18.04 or higher
    * CentOS: 7.0 or higher

    **CPU architecture**

    * x86-64

    If you need to run the SDK on other architectures, [submit a ticket](https://agora-ticket.agora.io/) to contact technical support.

    **Performance**

    * CPU：8 cores, 1.8 GHz or higher.
    * 2 GB of RAM or higher. 4 GB or higher is recommended.

    **Network**

    * The server is connected to the internet and has an internet IP.
    * The server can access \`*.agora.io\` and \`*.agoralab.co\`.

    ### Software environment [#software-environment-2]

    * An IDE that supports Python, such as PyCharm or Visual Studio Code.
    * Python 3.10 or above

    ## Get your app ID and an RTC token [#get-your-app-id-and-an-rtc-token-2]

    See [Account](/en/introduction/account) to learn how to get your Agora App ID and a temporary RTC token.

    ## Download and install the SDK [#download-and-install-the-sdk]

    Run the following command to get the latest SDK.

    \`\`\`bash
    pip install agora_python_server_sdk
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="go">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="linux-cpp" platform="go" />

    This article shows how to integrate the Server Gateway Go SDK and run the sample project.

    ## Set up the development environment [#set-up-the-development-environment-3]

    Make sure your server meets the following requirements.

    ### Hardware environment [#hardware-environment-3]

    **Operating system**

    * Ubuntu 18.04 or higher
    * CentOS: 7.0 or higher

    **CPU architecture**

    * x86-64

    If you need to run the SDK on other architectures, [submit a ticket](https://agora-ticket.agora.io/) to contact technical support.

    **Performance**

    * CPU：8-core, 1.8 GHz or higher.
    * 2 GB of RAM or higher. 4 GB or higher is recommended.

    **Network**

    * The server is connected to the internet and has an internet IP.
    * The server can access \`*.agora.io\` and \`*.agoralab.co\`.

    ### Software environment [#software-environment-3]

    * Go 1.21 or above

    ## Get your app ID and an RTC token [#get-your-app-id-and-an-rtc-token-3]

    See [Account](/en/introduction/account) to learn how to get your Agora App ID and a temporary RTC token.

    ## Get the SDK [#get-the-sdk-1]

    Run the following command to get the latest SDK.

    \`\`\`bash
    git clone https://github.com/AgoraIO-Extensions/Agora-Golang-Server-SDK.git go_rtc_sdk
    \`\`\`

    ## Compile the sample project [#compile-the-sample-project]

    Run the following commands to compile the sample project:

    \`\`\`bash
    # Enter the SDK directory
    cd go_rtc_sdk
    # Execute the build
    make build
    \`\`\`

    ## Add the required dependencies [#add-the-required-dependencies]

    In the project’s \`go.mod\` or builds file, add the following lines to include the required SDK dependencies.

    \`\`\`bash
    # Replace /path/to/go_rtc_sdk with the actual path of the SDK you downloaded in Step 1
    replace github.com/AgoraIO-Extensions/Agora-Golang-Server-SDK/v2 => /path/to/go_rtc_sdk
    # Replace version_number with the actual SDK version number, which you can find in the release notes, e.g., v2.1.0
    require github.com/AgoraIO-Extensions/Agora-Golang-Server-SDK/v2 version_number
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This article shows how to integrate the Server Gateway C++ SDK and run the sample project."
  }, {
    heading: "set-up-the-development-environment",
    content: "Make sure your server meets the following requirements."
  }, {
    heading: "hardware-environment",
    content: "**Operating system**"
  }, {
    heading: "hardware-environment",
    content: "Ubuntu 14.04 or higher"
  }, {
    heading: "hardware-environment",
    content: "CentOS: 7.0 or higher"
  }, {
    heading: "hardware-environment",
    content: "**CPU architecture**"
  }, {
    heading: "hardware-environment",
    content: "arm64"
  }, {
    heading: "hardware-environment",
    content: "x86-64"
  }, {
    heading: "hardware-environment",
    content: "If you need to run the SDK on other architectures, submit a ticket to contact technical support."
  }, {
    heading: "hardware-environment",
    content: "**Performance**"
  }, {
    heading: "hardware-environment",
    content: "CPU：8-core, 1.8 GHz or higher."
  }, {
    heading: "hardware-environment",
    content: "2 GB of RAM or higher. 4 GB or higher is recommended."
  }, {
    heading: "hardware-environment",
    content: "**Network**"
  }, {
    heading: "hardware-environment",
    content: "The server is connected to the internet and has an internet IP."
  }, {
    heading: "hardware-environment",
    content: "The server can access `*.agora.io` and `*.agoralab.co`."
  }, {
    heading: "software-environment",
    content: "glibc 2.18 or later"
  }, {
    heading: "software-environment",
    content: "gcc 4.8 or later"
  }, {
    heading: "software-environment",
    content: "If you are using Ubuntu, taking Ubuntu 20.04.3 LTS as an example, install the following dependencies in your server:"
  }, {
    heading: "software-environment",
    content: "If you are using CentOS, taking CentOS 7.9.2009 as an example, install the following dependencies in your server:"
  }, {
    heading: "get-your-app-id-and-an-rtc-token",
    content: "See Account to learn how to get your Agora App ID and a temporary RTC token."
  }, {
    heading: "get-the-sdk",
    content: "Download the latest x86-64 SDK package and decompress the file. If you need the SDK build for other architectures, submit a ticket to technical support."
  }, {
    heading: "get-the-sdk",
    content: "This article shows how to create a simple Maven project, integrate the Server Gateway Java SDK, and run the app."
  }, {
    heading: "set-up-the-development-environment-1",
    content: "Make sure your server meets the following requirements."
  }, {
    heading: "hardware-environment-1",
    content: "**Operating system**"
  }, {
    heading: "hardware-environment-1",
    content: "Ubuntu 18.04 or higher"
  }, {
    heading: "hardware-environment-1",
    content: "CentOS: 7.0 or higher"
  }, {
    heading: "hardware-environment-1",
    content: "**CPU architecture**"
  }, {
    heading: "hardware-environment-1",
    content: "arm64"
  }, {
    heading: "hardware-environment-1",
    content: "x86-64"
  }, {
    heading: "hardware-environment-1",
    content: "If you need to run the SDK on other architectures, submit a ticket to contact technical support."
  }, {
    heading: "hardware-environment-1",
    content: "**Performance**"
  }, {
    heading: "hardware-environment-1",
    content: "CPU：8-core, 1.8 GHz or higher."
  }, {
    heading: "hardware-environment-1",
    content: "2 GB of RAM or higher. 4 GB or higher is recommended."
  }, {
    heading: "hardware-environment-1",
    content: "**Network**"
  }, {
    heading: "hardware-environment-1",
    content: "The server is connected to the internet and has an internet IP."
  }, {
    heading: "hardware-environment-1",
    content: "The server can access `*.agora.io` and `*.agoralab.co`."
  }, {
    heading: "software-environment-1",
    content: "Apache Maven or other build tools. This page uses Apache Maven as an example."
  }, {
    heading: "software-environment-1",
    content: "JDK 8"
  }, {
    heading: "get-your-app-id-and-an-rtc-token-1",
    content: "See Account to learn how to get your Agora App ID and a temporary RTC token."
  }, {
    heading: "create-a-maven-project",
    content: "See Maven in Five Minutes to create a Maven project."
  }, {
    heading: "integrate-the-sdk",
    content: "Navigate to the `my-app` folder."
  }, {
    heading: "integrate-the-sdk",
    content: "Open `pom.xml` and replace the content with the following:"
  }, {
    heading: "integrate-the-sdk",
    content: "Refer to mvnrepository for other integration methods, such as Gradle."
  }, {
    heading: "integrate-the-sdk",
    content: "This article shows how to integrate the Server Gateway Python SDK and run the sample project."
  }, {
    heading: "set-up-the-development-environment-2",
    content: "Make sure your server meets the following requirements."
  }, {
    heading: "hardware-environment-2",
    content: "**Operating system**"
  }, {
    heading: "hardware-environment-2",
    content: "Ubuntu 18.04 or higher"
  }, {
    heading: "hardware-environment-2",
    content: "CentOS: 7.0 or higher"
  }, {
    heading: "hardware-environment-2",
    content: "**CPU architecture**"
  }, {
    heading: "hardware-environment-2",
    content: "x86-64"
  }, {
    heading: "hardware-environment-2",
    content: "If you need to run the SDK on other architectures, submit a ticket to contact technical support."
  }, {
    heading: "hardware-environment-2",
    content: "**Performance**"
  }, {
    heading: "hardware-environment-2",
    content: "CPU：8 cores, 1.8 GHz or higher."
  }, {
    heading: "hardware-environment-2",
    content: "2 GB of RAM or higher. 4 GB or higher is recommended."
  }, {
    heading: "hardware-environment-2",
    content: "**Network**"
  }, {
    heading: "hardware-environment-2",
    content: "The server is connected to the internet and has an internet IP."
  }, {
    heading: "hardware-environment-2",
    content: "The server can access `*.agora.io` and `*.agoralab.co`."
  }, {
    heading: "software-environment-2",
    content: "An IDE that supports Python, such as PyCharm or Visual Studio Code."
  }, {
    heading: "software-environment-2",
    content: "Python 3.10 or above"
  }, {
    heading: "get-your-app-id-and-an-rtc-token-2",
    content: "See Account to learn how to get your Agora App ID and a temporary RTC token."
  }, {
    heading: "download-and-install-the-sdk",
    content: "Run the following command to get the latest SDK."
  }, {
    heading: "download-and-install-the-sdk",
    content: "This article shows how to integrate the Server Gateway Go SDK and run the sample project."
  }, {
    heading: "set-up-the-development-environment-3",
    content: "Make sure your server meets the following requirements."
  }, {
    heading: "hardware-environment-3",
    content: "**Operating system**"
  }, {
    heading: "hardware-environment-3",
    content: "Ubuntu 18.04 or higher"
  }, {
    heading: "hardware-environment-3",
    content: "CentOS: 7.0 or higher"
  }, {
    heading: "hardware-environment-3",
    content: "**CPU architecture**"
  }, {
    heading: "hardware-environment-3",
    content: "x86-64"
  }, {
    heading: "hardware-environment-3",
    content: "If you need to run the SDK on other architectures, submit a ticket to contact technical support."
  }, {
    heading: "hardware-environment-3",
    content: "**Performance**"
  }, {
    heading: "hardware-environment-3",
    content: "CPU：8-core, 1.8 GHz or higher."
  }, {
    heading: "hardware-environment-3",
    content: "2 GB of RAM or higher. 4 GB or higher is recommended."
  }, {
    heading: "hardware-environment-3",
    content: "**Network**"
  }, {
    heading: "hardware-environment-3",
    content: "The server is connected to the internet and has an internet IP."
  }, {
    heading: "hardware-environment-3",
    content: "The server can access `*.agora.io` and `*.agoralab.co`."
  }, {
    heading: "software-environment-3",
    content: "Go 1.21 or above"
  }, {
    heading: "get-your-app-id-and-an-rtc-token-3",
    content: "See Account to learn how to get your Agora App ID and a temporary RTC token."
  }, {
    heading: "get-the-sdk-1",
    content: "Run the following command to get the latest SDK."
  }, {
    heading: "compile-the-sample-project",
    content: "Run the following commands to compile the sample project:"
  }, {
    heading: "add-the-required-dependencies",
    content: "In the project’s `go.mod` or builds file, add the following lines to include the required SDK dependencies."
  }],
  headings: [{
    id: "set-up-the-development-environment",
    content: "Set up the development environment"
  }, {
    id: "hardware-environment",
    content: "Hardware environment"
  }, {
    id: "software-environment",
    content: "Software environment"
  }, {
    id: "get-your-app-id-and-an-rtc-token",
    content: "Get your app ID and an RTC token"
  }, {
    id: "get-the-sdk",
    content: "Get the SDK"
  }, {
    id: "set-up-the-development-environment-1",
    content: "Set up the development environment"
  }, {
    id: "hardware-environment-1",
    content: "Hardware environment"
  }, {
    id: "software-environment-1",
    content: "Software environment"
  }, {
    id: "get-your-app-id-and-an-rtc-token-1",
    content: "Get your app ID and an RTC token"
  }, {
    id: "create-a-maven-project",
    content: "Create a Maven project"
  }, {
    id: "integrate-the-sdk",
    content: "Integrate the SDK"
  }, {
    id: "set-up-the-development-environment-2",
    content: "Set up the development environment"
  }, {
    id: "hardware-environment-2",
    content: "Hardware environment"
  }, {
    id: "software-environment-2",
    content: "Software environment"
  }, {
    id: "get-your-app-id-and-an-rtc-token-2",
    content: "Get your app ID and an RTC token"
  }, {
    id: "download-and-install-the-sdk",
    content: "Download and install the SDK"
  }, {
    id: "set-up-the-development-environment-3",
    content: "Set up the development environment"
  }, {
    id: "hardware-environment-3",
    content: "Hardware environment"
  }, {
    id: "software-environment-3",
    content: "Software environment"
  }, {
    id: "get-your-app-id-and-an-rtc-token-3",
    content: "Get your app ID and an RTC token"
  }, {
    id: "get-the-sdk-1",
    content: "Get the SDK"
  }, {
    id: "compile-the-sample-project",
    content: "Compile the sample project"
  }, {
    id: "add-the-required-dependencies",
    content: "Add the required dependencies"
  }]
};
export let toc = [{
  depth: 2,
  url: "#set-up-the-development-environment",
  title: _jsx(_Fragment, {
    children: "Set up the development environment"
  })
}, {
  depth: 3,
  url: "#hardware-environment",
  title: _jsx(_Fragment, {
    children: "Hardware environment"
  })
}, {
  depth: 3,
  url: "#software-environment",
  title: _jsx(_Fragment, {
    children: "Software environment"
  })
}, {
  depth: 2,
  url: "#get-your-app-id-and-an-rtc-token",
  title: _jsx(_Fragment, {
    children: "Get your app ID and an RTC token"
  })
}, {
  depth: 2,
  url: "#get-the-sdk",
  title: _jsx(_Fragment, {
    children: "Get the SDK"
  })
}, {
  depth: 2,
  url: "#set-up-the-development-environment-1",
  title: _jsx(_Fragment, {
    children: "Set up the development environment"
  })
}, {
  depth: 3,
  url: "#hardware-environment-1",
  title: _jsx(_Fragment, {
    children: "Hardware environment"
  })
}, {
  depth: 3,
  url: "#software-environment-1",
  title: _jsx(_Fragment, {
    children: "Software environment"
  })
}, {
  depth: 2,
  url: "#get-your-app-id-and-an-rtc-token-1",
  title: _jsx(_Fragment, {
    children: "Get your app ID and an RTC token"
  })
}, {
  depth: 2,
  url: "#create-a-maven-project",
  title: _jsx(_Fragment, {
    children: "Create a Maven project"
  })
}, {
  depth: 2,
  url: "#integrate-the-sdk",
  title: _jsx(_Fragment, {
    children: "Integrate the SDK"
  })
}, {
  depth: 2,
  url: "#set-up-the-development-environment-2",
  title: _jsx(_Fragment, {
    children: "Set up the development environment"
  })
}, {
  depth: 3,
  url: "#hardware-environment-2",
  title: _jsx(_Fragment, {
    children: "Hardware environment"
  })
}, {
  depth: 3,
  url: "#software-environment-2",
  title: _jsx(_Fragment, {
    children: "Software environment"
  })
}, {
  depth: 2,
  url: "#get-your-app-id-and-an-rtc-token-2",
  title: _jsx(_Fragment, {
    children: "Get your app ID and an RTC token"
  })
}, {
  depth: 2,
  url: "#download-and-install-the-sdk",
  title: _jsx(_Fragment, {
    children: "Download and install the SDK"
  })
}, {
  depth: 2,
  url: "#set-up-the-development-environment-3",
  title: _jsx(_Fragment, {
    children: "Set up the development environment"
  })
}, {
  depth: 3,
  url: "#hardware-environment-3",
  title: _jsx(_Fragment, {
    children: "Hardware environment"
  })
}, {
  depth: 3,
  url: "#software-environment-3",
  title: _jsx(_Fragment, {
    children: "Software environment"
  })
}, {
  depth: 2,
  url: "#get-your-app-id-and-an-rtc-token-3",
  title: _jsx(_Fragment, {
    children: "Get your app ID and an RTC token"
  })
}, {
  depth: 2,
  url: "#get-the-sdk-1",
  title: _jsx(_Fragment, {
    children: "Get the SDK"
  })
}, {
  depth: 2,
  url: "#compile-the-sample-project",
  title: _jsx(_Fragment, {
    children: "Compile the sample project"
  })
}, {
  depth: 2,
  url: "#add-the-required-dependencies",
  title: _jsx(_Fragment, {
    children: "Add the required dependencies"
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
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_PlatformTabsGroup, {
    groupMode: "structured",
    canonicalPlatform: "linux-cpp",
    platforms: '["linux-cpp","linux-java","python","go"]',
    showTabs: "true",
    children: [_jsxs(_PlatformPanel, {
      platform: "linux-cpp",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "linux-cpp",
        platform: "linux-cpp"
      }), _jsx(_components.p, {
        children: "This article shows how to integrate the Server Gateway C++ SDK and run the sample project."
      }), _jsx(_components.h2, {
        id: "set-up-the-development-environment",
        children: "Set up the development environment"
      }), _jsx(_components.p, {
        children: "Make sure your server meets the following requirements."
      }), _jsx(_components.h3, {
        id: "hardware-environment",
        children: "Hardware environment"
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Operating system"
        })
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Ubuntu 14.04 or higher"
        }), `
`, _jsx(_components.li, {
          children: "CentOS: 7.0 or higher"
        }), `
`]
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "CPU architecture"
        })
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "arm64"
        }), `
`, _jsx(_components.li, {
          children: "x86-64"
        }), `
`]
      }), _jsxs(_components.p, {
        children: ["If you need to run the SDK on other architectures, ", _jsx(_components.a, {
          href: "https://agora-ticket.agora.io/",
          children: "submit a ticket"
        }), " to contact technical support."]
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Performance"
        })
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "CPU：8-core, 1.8 GHz or higher."
        }), `
`, _jsx(_components.li, {
          children: "2 GB of RAM or higher. 4 GB or higher is recommended."
        }), `
`]
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Network"
        })
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "The server is connected to the internet and has an internet IP."
        }), `
`, _jsxs(_components.li, {
          children: ["The server can access ", _jsx(_components.code, {
            children: "*.agora.io"
          }), " and ", _jsx(_components.code, {
            children: "*.agoralab.co"
          }), "."]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "software-environment",
        children: "Software environment"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "glibc 2.18 or later"
        }), `
`, _jsx(_components.li, {
          children: "gcc 4.8 or later"
        }), `
`]
      }), _jsx(_components.p, {
        children: "If you are using Ubuntu, taking Ubuntu 20.04.3 LTS as an example, install the following dependencies in your server:"
      }), _jsx(_Fragment, {
        children: _jsx(_components.pre, {
          className: "shiki shiki-themes github-light github-dark",
          style: {
            "--shiki-light": "#24292e",
            "--shiki-dark": "#e1e4e8",
            "--shiki-light-bg": "#fff",
            "--shiki-dark-bg": "#24292e"
          },
          tabIndex: "0",
          icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "# Install aptitude"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "sudo"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " apt"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " install"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " aptitude"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "# Install build-essential libx11-dev libxcomposite-dev libxext-dev libxfixes-dev libxdamage-dev cmake"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "sudo"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " aptitude"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " install"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " libx11-dev"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " libxcomposite-dev"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " libxext-dev"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " libxfixes-dev"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " libxdamage-dev"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " cmake"
              })]
            })]
          })
        })
      }), _jsx(_components.p, {
        children: "If you are using CentOS, taking CentOS 7.9.2009 as an example, install the following dependencies in your server:"
      }), _jsx(_Fragment, {
        children: _jsx(_components.pre, {
          className: "shiki shiki-themes github-light github-dark",
          style: {
            "--shiki-light": "#24292e",
            "--shiki-dark": "#e1e4e8",
            "--shiki-light-bg": "#fff",
            "--shiki-dark-bg": "#24292e"
          },
          tabIndex: "0",
          icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "sudo"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " yum"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " groupinstall"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' "Development Tools"'
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "sudo"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " yum"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " install"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " wget"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "sudo"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " yum"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " groupinstall"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " X11"
              })]
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "get-your-app-id-and-an-rtc-token",
        children: "Get your app ID and an RTC token"
      }), _jsxs(_components.p, {
        children: ["See ", _jsx(_components.a, {
          href: "/en/introduction/account",
          children: "Account"
        }), " to learn how to get your Agora App ID and a temporary RTC token."]
      }), _jsx(_components.h2, {
        id: "get-the-sdk",
        children: "Get the SDK"
      }), _jsxs(_components.p, {
        children: [_jsx(_components.a, {
          href: "/en/api-reference/sdks?product=server-gateway&platform=linux",
          children: "Download"
        }), " the latest x86-64 SDK package and decompress the file. If you need the SDK build for other architectures, ", _jsx(_components.a, {
          href: "https://agora-ticket.agora.io/",
          children: "submit a ticket"
        }), " to technical support."]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "linux-java",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "linux-cpp",
        platform: "linux-java"
      }), _jsx(_components.p, {
        children: "This article shows how to create a simple Maven project, integrate the Server Gateway Java SDK, and run the app."
      }), _jsx(_components.h2, {
        id: "set-up-the-development-environment-1",
        children: "Set up the development environment"
      }), _jsx(_components.p, {
        children: "Make sure your server meets the following requirements."
      }), _jsx(_components.h3, {
        id: "hardware-environment-1",
        children: "Hardware environment"
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Operating system"
        })
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Ubuntu 18.04 or higher"
        }), `
`, _jsx(_components.li, {
          children: "CentOS: 7.0 or higher"
        }), `
`]
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "CPU architecture"
        })
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "arm64"
        }), `
`, _jsx(_components.li, {
          children: "x86-64"
        }), `
`]
      }), _jsxs(_components.p, {
        children: ["If you need to run the SDK on other architectures, ", _jsx(_components.a, {
          href: "https://agora-ticket.agora.io/",
          children: "submit a ticket"
        }), " to contact technical support."]
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Performance"
        })
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "CPU：8-core, 1.8 GHz or higher."
        }), `
`, _jsx(_components.li, {
          children: "2 GB of RAM or higher. 4 GB or higher is recommended."
        }), `
`]
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Network"
        })
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "The server is connected to the internet and has an internet IP."
        }), `
`, _jsxs(_components.li, {
          children: ["The server can access ", _jsx(_components.code, {
            children: "*.agora.io"
          }), " and ", _jsx(_components.code, {
            children: "*.agoralab.co"
          }), "."]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "software-environment-1",
        children: "Software environment"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.a, {
            href: "https://maven.apache.org/download.cgi",
            children: "Apache Maven"
          }), " or other build tools. This page uses Apache Maven as an example."]
        }), `
`, _jsx(_components.li, {
          children: "JDK 8"
        }), `
`]
      }), _jsx(_components.h2, {
        id: "get-your-app-id-and-an-rtc-token-1",
        children: "Get your app ID and an RTC token"
      }), _jsxs(_components.p, {
        children: ["See ", _jsx(_components.a, {
          href: "/en/introduction/account",
          children: "Account"
        }), " to learn how to get your Agora App ID and a temporary RTC token."]
      }), _jsx(_components.h2, {
        id: "create-a-maven-project",
        children: "Create a Maven project"
      }), _jsxs(_components.p, {
        children: ["See ", _jsx(_components.a, {
          href: "https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html",
          children: "Maven in Five Minutes"
        }), " to create a Maven project."]
      }), _jsx(_Fragment, {
        children: _jsx(_components.pre, {
          className: "shiki shiki-themes github-light github-dark",
          style: {
            "--shiki-light": "#24292e",
            "--shiki-dark": "#e1e4e8",
            "--shiki-light-bg": "#fff",
            "--shiki-dark-bg": "#24292e"
          },
          tabIndex: "0",
          icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
          children: _jsx(_components.code, {
            children: _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "mvn"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " archetype:generate"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " -DgroupId=com.mycompany.app"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " -DartifactId=my-app"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " -DarchetypeArtifactId=maven-archetype-quickstart"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " -DarchetypeVersion=1.4"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " -DinteractiveMode=false"
              })]
            })
          })
        })
      }), _jsx(_components.h2, {
        id: "integrate-the-sdk",
        children: "Integrate the SDK"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Navigate to the ", _jsx(_components.code, {
              children: "my-app"
            }), " folder."]
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
              icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
              children: _jsx(_components.code, {
                children: _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "cd"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " my-app"
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
            children: ["Open ", _jsx(_components.code, {
              children: "pom.xml"
            }), " and replace the content with the following:"]
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
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "<?"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "xml"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " version"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"1.0"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " encoding"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"UTF-8"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "?>"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "<"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "project"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " xmlns"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"http://maven.apache.org/POM/4.0.0"'
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    xmlns:xsi"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"http://www.w3.org/2001/XMLSchema-instance"'
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    xsi:schemaLocation"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "<"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "modelVersion"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">4.0.0</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "modelVersion"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line"
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "<"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "groupId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">org.example</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "groupId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "<"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "artifactId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">agora-rtc-linux-java</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "artifactId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "<"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "version"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">1.0-SNAPSHOT</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "version"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line"
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "<"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "dependencies"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "dependency"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "groupId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">io.agora.rtc</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "groupId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "artifactId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">linux-sdk</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "artifactId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "version"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">3.7.200.21</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "version"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "dependency"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "dependencies"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line"
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "<"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "properties"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "maven.compiler.source"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">1.8</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "maven.compiler.source"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "maven.compiler.target"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">1.8</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "maven.compiler.target"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "properties"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line"
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "<"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "build"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "plugins"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "plugin"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "groupId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">org.apache.maven.plugins</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "groupId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "artifactId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">maven-shade-plugin</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "artifactId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "version"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">2.3</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "version"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "configuration"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "createDependencyReducedPom"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">true</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "createDependencyReducedPom"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "configuration"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "executions"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "execution"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "phase"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">package</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "phase"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "goals"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "goal"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">shade</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "goal"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "goals"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "configuration"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "transformers"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "transformer"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "                    implementation"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"org.apache.maven.plugins.shade.resource.ManifestResourceTransformer"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "mainClass"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">App</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "mainClass"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "                </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "transformer"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "transformers"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "configuration"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "execution"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "executions"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "plugin"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "plugins"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "build"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "project"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                })]
              })
            })
          }), `
`]
        }), `
`]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["Refer to ", _jsx(_components.a, {
              href: "https://mvnrepository.com/artifact/io.agora.rtc/linux-sdk",
              children: "mvnrepository"
            }), " for other integration methods, such as Gradle."]
          })
        })
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "python",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "linux-cpp",
        platform: "python"
      }), _jsx(_components.p, {
        children: "This article shows how to integrate the Server Gateway Python SDK and run the sample project."
      }), _jsx(_components.h2, {
        id: "set-up-the-development-environment-2",
        children: "Set up the development environment"
      }), _jsx(_components.p, {
        children: "Make sure your server meets the following requirements."
      }), _jsx(_components.h3, {
        id: "hardware-environment-2",
        children: "Hardware environment"
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Operating system"
        })
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Ubuntu 18.04 or higher"
        }), `
`, _jsx(_components.li, {
          children: "CentOS: 7.0 or higher"
        }), `
`]
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "CPU architecture"
        })
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "x86-64"
        }), `
`]
      }), _jsxs(_components.p, {
        children: ["If you need to run the SDK on other architectures, ", _jsx(_components.a, {
          href: "https://agora-ticket.agora.io/",
          children: "submit a ticket"
        }), " to contact technical support."]
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Performance"
        })
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "CPU：8 cores, 1.8 GHz or higher."
        }), `
`, _jsx(_components.li, {
          children: "2 GB of RAM or higher. 4 GB or higher is recommended."
        }), `
`]
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Network"
        })
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "The server is connected to the internet and has an internet IP."
        }), `
`, _jsxs(_components.li, {
          children: ["The server can access ", _jsx(_components.code, {
            children: "*.agora.io"
          }), " and ", _jsx(_components.code, {
            children: "*.agoralab.co"
          }), "."]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "software-environment-2",
        children: "Software environment"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "An IDE that supports Python, such as PyCharm or Visual Studio Code."
        }), `
`, _jsx(_components.li, {
          children: "Python 3.10 or above"
        }), `
`]
      }), _jsx(_components.h2, {
        id: "get-your-app-id-and-an-rtc-token-2",
        children: "Get your app ID and an RTC token"
      }), _jsxs(_components.p, {
        children: ["See ", _jsx(_components.a, {
          href: "/en/introduction/account",
          children: "Account"
        }), " to learn how to get your Agora App ID and a temporary RTC token."]
      }), _jsx(_components.h2, {
        id: "download-and-install-the-sdk",
        children: "Download and install the SDK"
      }), _jsx(_components.p, {
        children: "Run the following command to get the latest SDK."
      }), _jsx(_Fragment, {
        children: _jsx(_components.pre, {
          className: "shiki shiki-themes github-light github-dark",
          style: {
            "--shiki-light": "#24292e",
            "--shiki-dark": "#e1e4e8",
            "--shiki-light-bg": "#fff",
            "--shiki-dark-bg": "#24292e"
          },
          tabIndex: "0",
          icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
          children: _jsx(_components.code, {
            children: _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "pip"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " install"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " agora_python_server_sdk"
              })]
            })
          })
        })
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "go",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "linux-cpp",
        platform: "go"
      }), _jsx(_components.p, {
        children: "This article shows how to integrate the Server Gateway Go SDK and run the sample project."
      }), _jsx(_components.h2, {
        id: "set-up-the-development-environment-3",
        children: "Set up the development environment"
      }), _jsx(_components.p, {
        children: "Make sure your server meets the following requirements."
      }), _jsx(_components.h3, {
        id: "hardware-environment-3",
        children: "Hardware environment"
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Operating system"
        })
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Ubuntu 18.04 or higher"
        }), `
`, _jsx(_components.li, {
          children: "CentOS: 7.0 or higher"
        }), `
`]
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "CPU architecture"
        })
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "x86-64"
        }), `
`]
      }), _jsxs(_components.p, {
        children: ["If you need to run the SDK on other architectures, ", _jsx(_components.a, {
          href: "https://agora-ticket.agora.io/",
          children: "submit a ticket"
        }), " to contact technical support."]
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Performance"
        })
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "CPU：8-core, 1.8 GHz or higher."
        }), `
`, _jsx(_components.li, {
          children: "2 GB of RAM or higher. 4 GB or higher is recommended."
        }), `
`]
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Network"
        })
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "The server is connected to the internet and has an internet IP."
        }), `
`, _jsxs(_components.li, {
          children: ["The server can access ", _jsx(_components.code, {
            children: "*.agora.io"
          }), " and ", _jsx(_components.code, {
            children: "*.agoralab.co"
          }), "."]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "software-environment-3",
        children: "Software environment"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Go 1.21 or above"
        }), `
`]
      }), _jsx(_components.h2, {
        id: "get-your-app-id-and-an-rtc-token-3",
        children: "Get your app ID and an RTC token"
      }), _jsxs(_components.p, {
        children: ["See ", _jsx(_components.a, {
          href: "/en/introduction/account",
          children: "Account"
        }), " to learn how to get your Agora App ID and a temporary RTC token."]
      }), _jsx(_components.h2, {
        id: "get-the-sdk-1",
        children: "Get the SDK"
      }), _jsx(_components.p, {
        children: "Run the following command to get the latest SDK."
      }), _jsx(_Fragment, {
        children: _jsx(_components.pre, {
          className: "shiki shiki-themes github-light github-dark",
          style: {
            "--shiki-light": "#24292e",
            "--shiki-dark": "#e1e4e8",
            "--shiki-light-bg": "#fff",
            "--shiki-dark-bg": "#24292e"
          },
          tabIndex: "0",
          icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
          children: _jsx(_components.code, {
            children: _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "git"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " clone"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " https://github.com/AgoraIO-Extensions/Agora-Golang-Server-SDK.git"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " go_rtc_sdk"
              })]
            })
          })
        })
      }), _jsx(_components.h2, {
        id: "compile-the-sample-project",
        children: "Compile the sample project"
      }), _jsx(_components.p, {
        children: "Run the following commands to compile the sample project:"
      }), _jsx(_Fragment, {
        children: _jsx(_components.pre, {
          className: "shiki shiki-themes github-light github-dark",
          style: {
            "--shiki-light": "#24292e",
            "--shiki-dark": "#e1e4e8",
            "--shiki-light-bg": "#fff",
            "--shiki-dark-bg": "#24292e"
          },
          tabIndex: "0",
          icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "# Enter the SDK directory"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "cd"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " go_rtc_sdk"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "# Execute the build"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "make"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " build"
              })]
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "add-the-required-dependencies",
        children: "Add the required dependencies"
      }), _jsxs(_components.p, {
        children: ["In the project’s ", _jsx(_components.code, {
          children: "go.mod"
        }), " or builds file, add the following lines to include the required SDK dependencies."]
      }), _jsx(_Fragment, {
        children: _jsx(_components.pre, {
          className: "shiki shiki-themes github-light github-dark",
          style: {
            "--shiki-light": "#24292e",
            "--shiki-dark": "#e1e4e8",
            "--shiki-light-bg": "#fff",
            "--shiki-dark-bg": "#24292e"
          },
          tabIndex: "0",
          icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "# Replace /path/to/go_rtc_sdk with the actual path of the SDK you downloaded in Step 1"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "replace"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " github.com/AgoraIO-Extensions/Agora-Golang-Server-SDK/v2"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ">"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " /path/to/go_rtc_sdk"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "# Replace version_number with the actual SDK version number, which you can find in the release notes, e.g., v2.1.0"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "require"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " github.com/AgoraIO-Extensions/Agora-Golang-Server-SDK/v2"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " version_number"
              })]
            })]
          })
        })
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
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
