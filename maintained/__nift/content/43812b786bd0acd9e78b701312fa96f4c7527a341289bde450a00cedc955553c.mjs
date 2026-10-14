import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Quickstart",
  description: "How to integrate the On-Premise Recording SDK."
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="linux-cpp" platforms="[&#x22;linux-cpp&#x22;,&#x22;linux-java&#x22;]" showTabs="true">
  <_PlatformPanel platform="linux-cpp">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="linux-cpp" platform="linux-cpp" />

    This article describes how to use the On-Premise Recording SDK to record real-time audio and video.

    ## Understand the tech [#understand-the-tech]

    Recording audio and video in a channel using the On-Premise Recording SDK works by adding a special user to the RTC SDK channel. This special user captures the audio and video from the channel, transcodes it, and stores it on your Linux server.

    ![On-Premise Recording SDK recording workflow](https://assets-docs.agora.io/images/on-premise-recording/quickstart.svg)

    <CalloutContainer type="info">
      <CalloutDescription>
        Integrate the On-Premise Recording SDK into your Linux server, not your client app. To record audio and video without deploying a Linux server, use Agora [Cloud Recording](/en/realtime-media/cloud-recording).
      </CalloutDescription>
    </CalloutContainer>

    ## Prerequisites [#prerequisites]

    Before you begin, complete the following steps and ensure your environment meets the required specifications:

    * [Create an Agora project](/en/introduction/account#generate-temporary-tokens) in the Agora Console and obtain an App ID and a temporary token.
    * Implement an RTC SDK project that includes basic audio and video interaction.

    **Server hardware requirements:**

    * **CPU**: 8 cores, 1.8 GHz
    * **Memory**: At least 4 GB (recommended)

    **Server software requirements:**

    * **Operating system**: Ubuntu 18.04 or later, or CentOS 7.0 or later
    * **CPU architecture**: arm64 or x86-64
    * **glibc**: version 2.18 or later
    * **gcc**: version 4.8 or later

    **Network requirements:**

    * The server is connected to the public internet and has a public IP address.
    * The server allows access to the following domains:

      * \`*.agora.io\`
      * \`*.agoralab.co\`

    ## Project setup [#project-setup]

    This section shows how to integrate the On-Premise Recording SDK into your app.

    ### Integrate the SDK [#integrate-the-sdk]

    1. Download the latest On-Premise Recording SDK package from the [SDKs](/en/api-reference/sdks?product=on-premise-recording\\&platform=linux) page.

    2. Extract the package. The directory structure should look like this:

       \`\`\`text
       .
       ├── agora_sdk
       │   ├── include
       │   ├── libagora-fdkaac.so
       │   ├── libagora_rtc_sdk.so
       │   └── libaosl.so
       └── example
           ├── CMakeLists.txt
           ├── build.sh
           ├── out
           ├── recorder
           ├── recorder.json
           ├── singleVideo.json
           ├── scripts
           └── third-party
       \`\`\`

    3. Integrate the SDK into your project:

       * Import the header files from \`agora_sdk/include\` into your project.
       * Link the following dynamic library files from the \`agora_sdk\` directory:

         * \`libagora-fdkaac.so\`
         * \`libagora_rtc_sdk.so\`
         * \`libaosl.so\`

    <CalloutContainer type="info">
      <CalloutDescription>
        The \`example\` directory contains a complete sample project for local recording. To run it, see [Test the project](#test-the-project).
      </CalloutDescription>
    </CalloutContainer>

    ## Implement On-Premise Recording [#implement-on-premise-recording]

    This section shows how to implement On-Premise recording in your app, step by step.

    The following figure illustrates the essential steps:

    <details>
      <summary>
        Quickstart sequence diagram
      </summary>

      ![On-Premise Recording quickstart sequence diagram](https://assets-docs.agora.io/images/on-premise-recording/on-premise-recording-quickstart-logic-cpp.svg)
    </details>

    ### Initialize the service [#initialize-the-service]

    Create the Agora service using \`createAgoraService\`. Then initialize it with media configuration options and logging settings.

    \`\`\`cpp
    auto service = createAgoraService();

    agora::base::AgoraServiceConfiguration service_config;
    service_config.enableAudioDevice = false;
    service_config.enableAudioProcessor = true;
    service_config.enableVideo = true;
    service_config.appId = config.appId.c_str();
    service_config.useStringUid = config.UseStringUid;

    service->initialize(service_config);
    service->setLogFile("./io.agora.rtc_sdk/agorasdk.log", 1024 * 1024 * 5);
    \`\`\`

    ### Create the recorder instance [#create-the-recorder-instance]

    Call \`createAgoraMediaComponentFactory\` and use it to create a \`IAgoraMediaRtcRecorder\` instance. Then initialize the recorder with the service and recording mode.

    \`\`\`cpp
    agora::rtc::IMediaComponentFactory* factory = createAgoraMediaComponentFactory();
    agora::agora_refptr<agora::rtc::IAgoraMediaRtcRecorder> recorder = factory->createMediaRtcRecorder();

    // Set the recording mode
    // - false: Record each user's audio and video stream separately (single stream recording)
    // - true: Record all users' audio and video streams together (composite recording)

    bool isMix = false;
    // Initialize recorder
    recorder->initialize(service, isMix);
    \`\`\`

    ### Register the event handler [#register-the-event-handler]

    Call \`registerRecorderEventHandle\` to register a user-defined event handler that receives recorder callbacks.

    \`\`\`cpp
    std::unique_ptr<RecorderEventHandler> eventHandler{new RecorderEventHandler(recorder, config)};
    recorder->registerRecorderEventHandle(eventHandler.get());
    \`\`\`

    ### Subscribe to audio and video streams [#subscribe-to-audio-and-video-streams]

    Call \`subscribeAllAudio\` and \`subscribeAllVideo\` to receive all audio and video streams in the channel.

    \`\`\`cpp
    recorder->subscribeAllAudio();
    recorder->subscribeAllVideo(options);
    \`\`\`

    ### Configure recording [#configure-recording]

    Call \`setRecorderConfig\` to define recording parameters such as resolution, frame rate, audio settings, and the storage location.

    <CalloutContainer type="info">
      <CalloutDescription>
        Ensure that the directory specified in \`storagePath\` exists. If not, the recording will fail.
      </CalloutDescription>
    </CalloutContainer>

    \`\`\`cpp
    // Set recording configuration
    agora::media::MediaRecorderConfiguration recorder_config;

    recorder_config.width = config.video.width;
    recorder_config.height = config.video.height;
    recorder_config.fps = config.video.fps;
    recorder_config.storagePath = config.recorderPath.c_str();
    recorder_config.sample_rate = config.audio.sampleRate;
    recorder_config.channel_num = config.audio.numOfChannels;
    // Set recording stream type: audio stream, video stream, or audio and video stream
    recorder_config.streamType = static_cast<agora::media::MediaRecorderStreamType>(config.recorderStreamType);
    // Set the maximum recording duration
    recorder_config.maxDurationMs = config.maxDuration * 1000;

    recorder->setRecorderConfig(recorder_config);
    \`\`\`

    ### Join the channel and start recording [#join-the-channel-and-start-recording]

    Call \`joinChannel\` to join the specified channel and \`startRecording\` to begin recording.

    \`\`\`cpp
    recorder->joinChannel(config.token.c_str(), config.ChannelName.c_str(), config.UserId.c_str());
    recorder->startRecording();
    \`\`\`

    ### Stop recording and release resources [#stop-recording-and-release-resources]

    Call the cleanup methods to end recording, unsubscribe from streams, and release memory.

    \`\`\`cpp
    recorder->unsubscribeAllAudio();
    recorder->unsubscribeAllVideo();
    recorder->stopRecording();

    recorder->unregisterRecorderEventHandle(eventHandler.get());
    eventHandler = nullptr;

    recorder->leaveChannel();
    recorder = nullptr;

    service->release();
    \`\`\`

    ### Complete sample code [#complete-sample-code]

    The following example shows the full implementation of an On-Premise Recording workflow.

    <details>
      <summary>
        Complete sample code for On-Premise Recording
      </summary>

      \`\`\`cpp
      // Create and initialize the Agora service, and configure logging
      auto service = createAgoraService();
      agora::base::AgoraServiceConfiguration service_config;
      service_config.enableAudioDevice = false;
      service_config.enableAudioProcessor = true;
      service_config.enableVideo = true;
      service_config.appId = config.appId.c_str();
      service_config.useStringUid = config.UseStringUid;
      service->initialize(service_config);
      service->setLogFile("./io.agora.rtc_sdk/agorasdk.log", 1024 * 1024 * 5);

      // Create the media recorder instance
      agora::rtc::IMediaComponentFactory* factory = createAgoraMediaComponentFactory();
      agora::agora_refptr<agora::rtc::IAgoraMediaRtcRecorder> recorder = factory->createMediaRtcRecorder();

      // Initialize the recorder
      // Set to true for mixed recording or false for individual streams
      bool isMix = false;
      recorder->initialize(service, isMix);

      // Register the event handler for recorder callbacks
      std::unique_ptr<RecorderEventHandler> eventHandler{new RecorderEventHandler(recorder, config)};
      recorder->registerRecorderEventHandle(eventHandler.get());

      // Subscribe to all audio and video streams
      recorder->subscribeAllAudio();
      recorder->subscribeAllVideo(options); // 'options' should be properly defined before use

      // Configure recorder settings
      agora::media::MediaRecorderConfiguration recorder_config;
      recorder_config.width = config.video.width;
      recorder_config.height = config.video.height;
      recorder_config.fps = config.video.fps;
      recorder_config.storagePath = config.recorderPath.c_str();
      recorder_config.sample_rate = config.audio.sampleRate;
      recorder_config.channel_num = config.audio.numOfChannels;
      recorder_config.streamType = static_cast<agora::media::MediaRecorderStreamType>(config.recorderStreamType);
      recorder_config.maxDurationMs = config.maxDuration * 1000;

      recorder->setRecorderConfig(recorder_config);

      // Join the channel and start recording
      recorder->joinChannel(config.token.c_str(), config.ChannelName.c_str(), config.UserId.c_str());
      recorder->startRecording();

      // Stop recording and clean up
      recorder->unsubscribeAllAudio();
      recorder->unsubscribeAllVideo();
      recorder->stopRecording();

      recorder->unregisterRecorderEventHandle(eventHandler.get());
      eventHandler = nullptr;

      recorder->leaveChannel();
      recorder = nullptr;

      service->release();
      \`\`\`
    </details>

    ## Test the project [#test-the-project]

    Agora provides a complete sample project in the SDK download package. After downloading and extracting the package, follow these steps to build and run it:

    1. Navigate to the sample project directory:

       \`\`\`sh
       cd agora_rtc_sdk/example
       \`\`\`

    2. Build the sample project:

       \`\`\`sh
       ./build.sh
       \`\`\`

    3. Add the SDK library path to the \`LD_LIBRARY_PATH\` environment variable:

       \`\`\`sh
       export LD_LIBRARY_PATH=../../agora_sdk:$LD_LIBRARY_PATH
       \`\`\`

    4. Choose a configuration file for your recording mode:

       * Use \`recorder.json\` for composite recording.
       * Use \`singleVideo.json\` for individual recording.

       <CalloutContainer type="info">
         <CalloutDescription>
           For more information on the differences between mixed and individual recording modes, see [Individual recording](/en/realtime-media/on-premise-recording/build/record-audio-and-video/individual-mode) and [Composite recording](/en/realtime-media/on-premise-recording/build/record-audio-and-video/composite-mode).
         </CalloutDescription>
       </CalloutContainer>

    5. Run the sample recorder with the selected configuration file:

       \`\`\`sh
       # Example: Run individual recording
       ./out/sample_recorder singleVideo.json
       \`\`\`

    ## Reference [#reference]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference]

    * [\`createAgoraService\`](/en/api-reference/api-ref/on-premise-recording#createagoraservice)
    * [\`initialize\`](/en/api-reference/api-ref/on-premise-recording#initialize)
    * [\`setLogFile\`](/en/api-reference/api-ref/on-premise-recording#setlogfile)
    * [\`createAgoraMediaComponentFactory\`](/en/api-reference/api-ref/on-premise-recording#createagoramediacomponentfactory)
    * [\`registerRecorderEventHandle\`](/en/api-reference/api-ref/on-premise-recording#registerrecordereventhandle)
    * [\`subscribeAllAudio\`](/en/api-reference/api-ref/on-premise-recording#subscribeallaudio)
    * [\`subscribeAllVideo\`](/en/api-reference/api-ref/on-premise-recording#subscribeallvideo)
    * [\`setRecorderConfig\`](/en/api-reference/api-ref/on-premise-recording#setrecorderconfig)
    * [\`joinChannel\`](/en/api-reference/api-ref/on-premise-recording#joinchannel)
    * [\`startRecording\`](/en/api-reference/api-ref/on-premise-recording#startrecording)
    * [\`unsubscribeAllAudio\`](/en/api-reference/api-ref/on-premise-recording#unsubscribeallaudio)
    * [\`unsubscribeAllVideo\`](/en/api-reference/api-ref/on-premise-recording#unsubscribeallvideo)
    * [\`stopRecording\`](/en/api-reference/api-ref/on-premise-recording#stoprecording)
    * [\`unregisterRecorderEventHandle\`](/en/api-reference/api-ref/on-premise-recording#unregisterrecordereventhandle)
    * [\`leaveChannel\`](/en/api-reference/api-ref/on-premise-recording#leavechannel)
    * [\`release\`](/en/api-reference/api-ref/on-premise-recording#release)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="linux-java">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="linux-cpp" platform="linux-java" />

    This article describes how to use the On-Premise Recording SDK to record real-time audio and video.

    ## Understand the tech [#understand-the-tech-1]

    Recording audio and video in a channel using the On-Premise Recording SDK works by adding a special user to the RTC SDK channel. This special user captures the audio and video from the channel, transcodes it, and stores it on your Linux server.

    ![On-Premise Recording SDK recording workflow](https://assets-docs.agora.io/images/on-premise-recording/quickstart.svg)

    <CalloutContainer type="info">
      <CalloutDescription>
        Integrate the On-Premise Recording SDK into your Linux server, not your client app. To record audio and video without deploying a Linux server, use Agora [Cloud Recording](/en/realtime-media/cloud-recording).
      </CalloutDescription>
    </CalloutContainer>

    ## Prerequisites [#prerequisites-1]

    Before you begin, complete the following steps and ensure your environment meets the required specifications:

    * [Create an Agora project](/en/introduction/account#generate-temporary-tokens) in the Agora Console and obtain an App ID and a temporary token.
    * Implement an RTC SDK project that includes basic audio and video interaction.

    **Server hardware requirements:**

    * **CPU**: 8 cores, 1.8 GHz
    * **Memory**: At least 4 GB (recommended)

    **Server software requirements:**

    * **Operating system**: Ubuntu 18.04 or later, or CentOS 7.0 or later
    * **CPU architecture**: arm64 or x86-64
    * **glibc**: version 2.18 or later
    * **gcc**: version 4.8 or later

    **Network requirements:**

    * The server is connected to the public internet and has a public IP address.
    * The server allows access to the following domains:

      * \`*.agora.io\`
      * \`*.agoralab.co\`

    ## Project setup [#project-setup-1]

    This section shows how to integrate the On-Premise Recording SDK into your app.

    <Tabs defaultValue="maven">
      <TabsList>
        <TabsTrigger value="maven">
          Add using Maven
        </TabsTrigger>

        <TabsTrigger value="manual">
          Add manually
        </TabsTrigger>
      </TabsList>

      <TabsContent value="maven">
        Add the following dependencies to your project’s\` pom.xml\` file based on your platform:

        * **For x86\\_64**:

        \`\`\`xml
        <dependency>
            <groupId>io.agora.rtc</groupId>
            <artifactId>linux-recording-java-sdk</artifactId>
            <version>4.4.150.5</version>
          </dependency>
        \`\`\`

        * **For arm64**:

        \`\`\`xml
        <dependency>
            <groupId>io.agora.rtc</groupId>
            <artifactId>linux-recording-java-sdk</artifactId>
            <version>4.4.150.5-aarch64</version>
          </dependency>
        \`\`\`
      </TabsContent>

      <TabsContent value="manual">
        ### Download and unzip [#download-and-unzip]

        1. Download the latest On-Premise Recording SDK package from the [SDKs](/en/api-reference/sdks?product=on-premise-recording\\&platform=linux) page.

        2. Unzip the SDK and you see the following contents:
           \`\`\`txt
           doc/                            JavaDoc documentation
              examples/                       Sample projects and code
              sdk/                            Core SDK files
                sdk/agora-recording-sdk.jar     Java class library
                sdk/agora-recording-sdk-javadoc.jar  JavaDoc (optional, for IDE support)
           \`\`\`

        ### Integrate the SDK [#integrate-the-sdk-1]

        Choose one of the following methods to add the SDK to your project.

        #### Use a local maven repository [#use-a-local-maven-repository]

        1. Install the SDK JAR using Maven:

           To install only the SDK JAR:

        \`\`\`bash
        mvn install:install-file \\\\
            -Dfile=sdk/agora-recording-sdk.jar \\\\
            -DgroupId=io.agora.rtc \\\\
            -DartifactId=linux-recording-java-sdk \\\\
            -Dversion=4.4.150.5 \\\\
            -Dpackaging=jar \\\\
            -DgeneratePom=true
        \`\`\`

        To install both the SDK JAR and JavaDoc:

        \`\`\`bash
        mvn install:install-file \\\\
            -Dfile=sdk/agora-recording-sdk.jar \\\\
            -DgroupId=io.agora.rtc \\\\
            -DartifactId=linux-recording-java-sdk \\\\
            -Dversion=4.4.150.5 \\\\
            -Dpackaging=jar \\\\
            -DgeneratePom=true \\\\
            -Djavadoc=sdk/agora-recording-sdk-javadoc.jar
        \`\`\`

        1. Add the dependency to your \`pom.xml\`:
           \`\`\`xml
           <dependency>
                 <groupId>io.agora.rtc</groupId>
                 <artifactId>linux-recording-java-sdk</artifactId>
                 <version>4.4.150.5</version>
               </dependency>
           \`\`\`

        #### Reference the JAR directly [#reference-the-jar-directly]

        1. Create a \`libs\` directory and copy the JAR files:
           \`\`\`bash
           mkdir -p libs
              cp sdk/agora-recording-sdk.jar libs/
              cp sdk/agora-recording-sdk-javadoc.jar libs/  # Optional, for IDE JavaDoc support
           \`\`\`

        2. Add the JAR file to your classpath when compiling or running:
           \`\`\`xml
           java -cp .:libs/agora-recording-sdk.jar YourMainClass
           \`\`\`

        <CalloutContainer type="info">
          <CalloutTitle>
            info
          </CalloutTitle>

          <CalloutDescription>
            To enable JavaDoc support in your IDE (such as IntelliJ IDEA or Eclipse), attach \`agora-recording-sdk-javadoc.jar\` to the library reference.
          </CalloutDescription>
        </CalloutContainer>

        ### Load native libraries [#load-native-libraries]

        The SDK depends on native \`.so\` libraries written in C++. Whether you integrate the SDK using Maven or manually, you must ensure the Java Virtual Machine (JVM) can locate and load these libraries at runtime.

        #### Extract native \`.so\` files [#extract-native-so-files]

        The native \`.so\` files are bundled inside the \`agora-recording-sdk.jar\` or \`linux-recording-java-sdk-<version>.jar\` file. You need to extract them manually:

        1. Create a directory to store the native library files:
           \`\`\`bash
           mkdir -p libs
              cd libs
           \`\`\`

        2. Use the \`jar\` command to extract contents:

           If you're using the local SDK:

        \`\`\`bash
        jar xvf agora-recording-sdk.jar
        \`\`\`

        If you're using the Maven-installed SDK:

        \`\`\`bash
        jar xvf ~/.m2/repository/io/agora/rtc/linux-recording-java-sdk/4.4.150.5/linux-recording-java-sdk-4.4.150.5.jar
        \`\`\`

        After extraction, you'll find a directory structure like this:

        \`\`\`txt
        libs/
           ├── agora-recording-sdk.jar
           ├── native/
           │   └── linux/
           │       ├── x86_64/
           │       │   ├── libagora_rtc_sdk.so
           │       │   ├── libagora-fdkaac.so
           │       │   ├── libaosl.so
           │       │   └── librecording.so
           │       └── aarch64/   (if available for arm64)
           │            ├── libagora_rtc_sdk.so
           │            ├── libagora-fdkaac.so
           │            ├── libaosl.so
           │            └── librecording.so
        \`\`\`

        #### Configure the library load path [#configure-the-library-load-path]

        The JVM must be configured to locate the extracted \`.so\` files. You can do this in one of two ways:

        * **Option 1: Use \`LD_LIBRARY_PATH\` (Recommended)**

          1. Set the environment variable before launching your app:
             \`\`\`bash
             # Assuming the .so files are in ./libs/native/linux/x86_64
                    LIB_DIR=$(pwd)/libs/native/linux/x86_64
                    export LD_LIBRARY_PATH=$LIB_DIR:$LD_LIBRARY_PATH
             \`\`\`

          2. Run your application:
             \`\`\`xml
             java -jar your-app.jar
                    # Or with classpath:
                    java -cp "your-classpath" YourMainClass
             \`\`\`

        * **Option 2: Use JVM option \`-Djava.library.path\`**

          This method directly tells the JVM where to find the native libraries:

        \`\`\`xml
        java -Djava.library.path=./libs/native/linux/x86_64 -jar your-app.jar
          # Or with classpath:
          java -Djava.library.path=./libs/native/linux/x86_64 -cp "your-classpath" YourMainClass
        \`\`\`

        <CalloutContainer type="info">
          <CalloutTitle>
            info
          </CalloutTitle>

          <CalloutDescription>
            Using \`LD_LIBRARY_PATH\` is more reliable, especially when native libraries depend on each other.
          </CalloutDescription>
        </CalloutContainer>

        #### Automate with a startup script (Optional) [#automate-with-a-startup-script-optional]

        You can create a shell script to automate the setup:

        \`\`\`bash
        #!/bin/bash

        # Get the directory of this script
        SCRIPT_DIR="$(cd "$(dirname "\${BASH_SOURCE[0]}")" && pwd)"

        # Define paths
        LIB_PATH="$SCRIPT_DIR/libs/native/linux/x86_64"
        SDK_JAR="$SCRIPT_DIR/libs/agora-recording-sdk.jar"
        MAIN_CLASS="your.main.Class"
        APP_CP="your-other-classpaths"

        # Set environment variable
        export LD_LIBRARY_PATH=$LIB_PATH:$LD_LIBRARY_PATH

        # Build full classpath
        CLASSPATH=".:$SDK_JAR:$APP_CP"

        # Run Java program
        java -Djava.library.path=$LIB_PATH -cp "$CLASSPATH" $MAIN_CLASS
        \`\`\`

        Make the script executable:

        \`\`\`bash
        chmod +x run.sh
        ./run.sh
        \`\`\`
      </TabsContent>
    </Tabs>

    ## Implement On-Premise Recording [#implement-on-premise-recording-1]

    This section shows how to implement On-Premise recording in your app, step by step.

    The following figure illustrates the essential steps:

    <details>
      <summary>
        Quickstart sequence diagram
      </summary>

      ![On-Premise Recording quickstart sequence diagram](https://assets-docs.agora.io/images/on-premise-recording/on-premise-recording-quickstart-logic-cpp.svg)
    </details>

    ### Initialize the service [#initialize-the-service-1]

    Create an \`AgoraService\` instance and initialize it with your App ID and feature flags.

    \`\`\`java
    // Create and configure the service
    AgoraService agoraService = new AgoraService();
    AgoraServiceConfiguration config = new AgoraServiceConfiguration();
    config.setEnableAudioDevice(false);
    config.setEnableAudioProcessor(true);
    config.setEnableVideo(true);
    config.setAppId(recorderConfig.getAppId());
    config.setUseStringUid(recorderConfig.isUseStringUid());

    // Set up log configuration
    LogConfig logConfig = new LogConfig();
    logConfig.setFileSizeInKB(1024 * 20);
    logConfig.setFilePath("logs/agora_logs/agorasdk.log");
    config.setLogConfig(logConfig);

    // Initialize the Agora service
    int ret = agoraService.initialize(config);
    \`\`\`

    ### Create a recorder instance [#create-a-recorder-instance]

    Call \`createMediaRtcRecorder\` to create a recorder instance,and then use \`AgoraMediaRtcRecorder.initialize\` to initialize it.

    \`\`\`java
    // Create recorder
    AgoraMediaRtcRecorder agoraMediaRtcRecorder = agoraService.createMediaRtcRecorder();

    // Initialize recorder
    // enableMix sets the recording mode
    // - false: Record each user’s audio and video stream separately (individual stream recording)
    // - true: Record all users’ audio and video as a mixed stream (mixed recording)
    boolean enableMix = false;
    // service is the AgoraService object initialized in the previous step
    agoraMediaRtcRecorder.initialize(agoraService, enableMix);
    \`\`\`

    ### Register event handlers [#register-event-handlers]

    Register an event handler to receive recording callbacks.

    \`\`\`java
    // Define the event handler
    private IAgoraMediaRtcRecorderEventHandler eventHandler = new IAgoraMediaRtcRecorderEventHandler() {
        @Override
        public void onConnected(String channelId, String userId) {
            // Handle connection event
        }

        @Override
        public void onDisconnected(String channelId, String userId, Constants.ConnectionChangedReasonType reason) {
            // Handle disconnection event
        }

        // Add more overrides as needed
    };

    // Register the event handler
    agoraMediaRtcRecorder.registerRecorderEventHandler(eventHandler);
    \`\`\`

    ### Subscribe to audio and video streams [#subscribe-to-audio-and-video-streams-1]

    Subscribe to all audio streams and high-quality video streams in the channel.

    \`\`\`java
    // Subscribe to audio
    agoraMediaRtcRecorder.subscribeAllAudio();

    // Subscribe to video
    VideoSubscriptionOptions options = new VideoSubscriptionOptions();
    options.setEncodedFrameOnly(false);
    options.setType(Constants.VideoStreamType.VIDEO_STREAM_HIGH);
    agoraMediaRtcRecorder.subscribeAllVideo(options);
    \`\`\`

    ### Configure the recorder [#configure-the-recorder]

    Set the resolution, frame rate, duration, and file path for the recording.

    \`\`\`java
    // Configure the recorder
    MediaRecorderConfiguration recorderConfig = new MediaRecorderConfiguration();
    recorderConfig.setWidth(width != 0 ? width : recorderConfig.getVideo().getWidth());
    recorderConfig.setHeight(height != 0 ? height : recorderConfig.getVideo().getHeight());
    recorderConfig.setFps(recorderConfig.getVideo().getFps());
    recorderConfig.setMaxDurationMs(recorderConfig.getMaxDuration() * 1000);
    recorderConfig.setStoragePath(recorderConfig.getRecorderPath());
    recorderConfig.setSampleRate(recorderConfig.getAudio().getSampleRate());
    recorderConfig.setChannelNum(recorderConfig.getAudio().getNumOfChannels());
    recorderConfig.setStreamType(Constants.MediaRecorderStreamType.STREAM_TYPE_BOTH);
    recorderConfig.setVideoSourceType(Constants.VideoSourceType.VIDEO_SOURCE_CAMERA_SECONDARY);

    agoraMediaRtcRecorder.setRecorderConfig(recorderConfig);
    \`\`\`

    <CalloutContainer type="info">
      <CalloutDescription>
        Ensure that the \`storagePath\` exists before you start recording. If the directory does not exist, the recording fails.
      </CalloutDescription>
    </CalloutContainer>

    ### Join the channel and start recording [#join-the-channel-and-start-recording-1]

    Use the following code to join a channel and begin recording:

    \`\`\`java
    agoraMediaRtcRecorder.joinChannel(
        recorderConfig.getToken(),
        recorderConfig.getChannelName(),
        recorderConfig.getUserId()
    );
    agoraMediaRtcRecorder.startRecording();
    \`\`\`

    ### Stop and release resources [#stop-and-release-resources]

    Unsubscribe from streams, stop the recording, and release resources.

    \`\`\`java
    agoraMediaRtcRecorder.unsubscribeAllAudio();
    agoraMediaRtcRecorder.unsubscribeAllVideo();
    agoraMediaRtcRecorder.stopRecording();
    agoraMediaRtcRecorder.unregisterRecorderEventHandler(eventHandler);
    agoraMediaRtcRecorder.leaveChannel();
    agoraMediaRtcRecorder.release();
    agoraService.release();
    \`\`\`

    The recorded MP4 file is saved to the storage path you specified in the recording configuration.

    ### Complete sample code [#complete-sample-code-1]

    <details>
      <summary>
        Complete sample code for On-Premise Recording
      </summary>

      \`\`\`java
      // Initialize Service resources and set log
      AgoraService agoraService = new AgoraService();
      AgoraServiceConfiguration config = new AgoraServiceConfiguration();
      config.setEnableAudioDevice(false);
      config.setEnableAudioProcessor(true);
      config.setEnableVideo(true);
      config.setAppId(recorderConfig.getAppId());
      config.setUseStringUid(recorderConfig.isUseStringUid());
      LogConfig logConfig = new LogConfig();
      logConfig.setFileSizeInKB(1024 * 20);
      logConfig.setFilePath("logs/agora_logs/agorasdk.log");
      config.setLogConfig(logConfig);
      int ret = agoraService.initialize(config);

      // Create recorder
      AgoraMediaRtcRecorder agoraMediaRtcRecorder = agoraService.createMediaRtcRecorder();
      // Initialize recorder
      boolean enableMix = false;
      agoraMediaRtcRecorder.initialize(agoraService, enableMix);
      // Register callbacks
      IAgoraMediaRtcRecorderEventHandler eventHandler = new IAgoraMediaRtcRecorderEventHandler() {
          @Override
          public void onConnected(String channelId, String userId) {

          }

          @Override
          public void onDisconnected(String channelId, String userId, Constants.ConnectionChangedReasonType reason) {
          }

          // Other event callbacks
      };
      agoraMediaRtcRecorder.registerRecorderEventHandler(eventHandler);
      // Subscribe to streams
      agoraMediaRtcRecorder.subscribeAllAudio();
      VideoSubscriptionOptions options = new VideoSubscriptionOptions();
      options.setEncodedFrameOnly(false);
      options.setType(Constants.VideoStreamType.VIDEO_STREAM_HIGH);
      agoraMediaRtcRecorder.subscribeAllVideo(options);

      // Set recording-related configurations
      MediaRecorderConfiguration mediaRecorderConfiguration = new MediaRecorderConfiguration();
      mediaRecorderConfiguration.setWidth(width != 0 ? width : recorderConfig.getVideo().getWidth());
      mediaRecorderConfiguration.setHeight(height != 0 ? height : recorderConfig.getVideo().getHeight());
      mediaRecorderConfiguration.setFps(recorderConfig.getVideo().getFps());
      mediaRecorderConfiguration.setStoragePath(recorderConfig.getRecorderPath());
      mediaRecorderConfiguration.setSampleRate(recorderConfig.getAudio().getSampleRate());
      mediaRecorderConfiguration.setChannelNum(recorderConfig.getAudio().getNumOfChannels());
      mediaRecorderConfiguration.setStreamType(Constants.MediaRecorderStreamType.STREAM_TYPE_BOTH);
      mediaRecorderConfiguration.setMaxDurationMs(recorderConfig.getMaxDuration() * 1000);
      agoraMediaRtcRecorder.setRecorderConfig(mediaRecorderConfiguration);
      // Join channel and start recording
      agoraMediaRtcRecorder.joinChannel(recorderConfig.getToken(),
                      recorderConfig.getChannelName(),
                      recorderConfig.getUserId());
      agoraMediaRtcRecorder.startRecording();

      // Stop recording, clean up resources, and leave channel
      agoraMediaRtcRecorder.unsubscribeAllAudio();
      agoraMediaRtcRecorder.unsubscribeAllVideo();
      agoraMediaRtcRecorder.stopRecording();
      agoraMediaRtcRecorder.unregisterRecorderEventHandler(eventHandler);
      agoraMediaRtcRecorder.leaveChannel();
      agoraMediaRtcRecorder.release();
      agoraService.release();
      \`\`\`
    </details>

    ## Test the project [#test-the-project-1]

    Agora provides an open source sample project on GitHub for your reference. Download or view the [Agora Recording Java SDK](https://github.com/AgoraIO-Extensions/Agora-Recording-Java-SDK) project for a more detailed example.

    Follow these steps to compile, configure, and run the Agora recording sample using the Spring Boot project.

    1. **Compile the project**

       Open a terminal and navigate to the \`Examples-Mvn\` directory. Run the following command to build the project:

       \`\`\`bash
       mvn clean package
       \`\`\`

       After the build completes successfully, the output JAR file appears in the \`target/generated\` directory as \`agora-example.jar\`.

    2. **Configure your App ID and token**

       In the \`Examples-Mvn\` directory, create a \`.keys\` file and add your Agora credentials:

       \`\`\`text
       appId=YOUR_APP_ID
       token=YOUR_TOKEN
       \`\`\`

       Replace \`YOUR_APP_ID\` and \`YOUR_TOKEN\` with your actual values.

    3. **Prepare native libraries**

       Ensure that the \`libs/native/linux/x86_64/\` directory contains the following \`.so\` files:

       * \`libagora_rtc_sdk.so\`
       * \`librecording.so\`
       * \`libagora-fdkaac.so\`
       * \`libaosl.so\`

       <CalloutContainer type="info">
         <CalloutDescription>
           These libraries must be available at runtime. If any are missing, the application will fail to load the native dependencies.
         </CalloutDescription>
       </CalloutContainer>

    4. **Run the sample application**

       From the \`Examples-Mvn\` directory, run the following command:

       \`\`\`bash
       LD_LIBRARY_PATH="$LD_LIBRARY_PATH:libs/native/linux/x86_64" \\
       java -Dserver.port=18080 -jar target/agora-example.jar
       \`\`\`

       The Spring Boot server starts and listens on port \`18080\`. To use a different port, update the \`-Dserver.port\` parameter.

    5. **Start and stop a recording session**

       * **Start recording**

         Send an HTTP request to the following endpoint:

         \`\`\`text
         http://<your-server-ip>:18080/api/recording/start?configFileName=mix_stream_recorder_audio_video_water_marks.json
         \`\`\`

       * **Stop recording**

         Replace \`<taskId>\` with the value returned from the start response:

         \`\`\`text
         http://<your-server-ip>:18080/api/recording/stop?taskId=<taskId>
         \`\`\`

       <CalloutContainer type="info">
         <CalloutDescription>
           Place all configuration files (such as \`mix_stream_recorder_audio_video_water_marks.json\`) in the \`Examples-Mvn/src/main/resources/\` directory.
         </CalloutDescription>
       </CalloutContainer>

    ## Reference [#reference-1]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-1]

    * [\`AgoraService\`](/en/api-reference/api-ref/on-premise-recording#agoraservice)
    * [\`AgoraServiceConfiguration\`](/en/api-reference/api-ref/on-premise-recording#agoraserviceconfiguration)
    * [\`LogConfig\`](/en/api-reference/api-ref/on-premise-recording#logconfig)
    * [\`initialize\`](/en/api-reference/api-ref/on-premise-recording#initialize)
    * [\`AgoraMediaRtcRecorder\`](/en/api-reference/api-ref/on-premise-recording#agoramediartcrecorder)
    * [\`registerRecorderEventHandler\`](/en/api-reference/api-ref/on-premise-recording#registerrecordereventhandler)
    * [\`subscribeAllAudio\`](/en/api-reference/api-ref/on-premise-recording#subscribeallaudio)
    * [\`subscribeAllVideo\`](/en/api-reference/api-ref/on-premise-recording#subscribeallvideo)
    * [\`setRecorderConfig\`](/en/api-reference/api-ref/on-premise-recording#setrecorderconfig)
    * [\`joinChannel\`](/en/api-reference/api-ref/on-premise-recording#joinchannel)
    * [\`startRecording\`](/en/api-reference/api-ref/on-premise-recording#startrecording)
    * [\`unsubscribeAllAudio\`](/en/api-reference/api-ref/on-premise-recording#unsubscribeallaudio)
    * [\`unsubscribeAllVideo\`](/en/api-reference/api-ref/on-premise-recording#unsubscribeallvideo)
    * [\`stopRecording\`](/en/api-reference/api-ref/on-premise-recording#stoprecording)
    * [\`unregisterRecorderEventHandler\`](/en/api-reference/api-ref/on-premise-recording#unregisterrecordereventhandler)
    * [\`leaveChannel\`](/en/api-reference/api-ref/on-premise-recording#leavechannel)
    * [\`release\`](/en/api-reference/api-ref/on-premise-recording#release)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This article describes how to use the On-Premise Recording SDK to record real-time audio and video."
  }, {
    heading: "understand-the-tech",
    content: "Recording audio and video in a channel using the On-Premise Recording SDK works by adding a special user to the RTC SDK channel. This special user captures the audio and video from the channel, transcodes it, and stores it on your Linux server."
  }, {
    heading: "understand-the-tech",
    content: "Integrate the On-Premise Recording SDK into your Linux server, not your client app. To record audio and video without deploying a Linux server, use Agora Cloud Recording."
  }, {
    heading: "prerequisites",
    content: "Before you begin, complete the following steps and ensure your environment meets the required specifications:"
  }, {
    heading: "prerequisites",
    content: "Create an Agora project in the Agora Console and obtain an App ID and a temporary token."
  }, {
    heading: "prerequisites",
    content: "Implement an RTC SDK project that includes basic audio and video interaction."
  }, {
    heading: "prerequisites",
    content: "**Server hardware requirements:**"
  }, {
    heading: "prerequisites",
    content: "**CPU**: 8 cores, 1.8 GHz"
  }, {
    heading: "prerequisites",
    content: "**Memory**: At least 4 GB (recommended)"
  }, {
    heading: "prerequisites",
    content: "**Server software requirements:**"
  }, {
    heading: "prerequisites",
    content: "**Operating system**: Ubuntu 18.04 or later, or CentOS 7.0 or later"
  }, {
    heading: "prerequisites",
    content: "**CPU architecture**: arm64 or x86-64"
  }, {
    heading: "prerequisites",
    content: "**glibc**: version 2.18 or later"
  }, {
    heading: "prerequisites",
    content: "**gcc**: version 4.8 or later"
  }, {
    heading: "prerequisites",
    content: "**Network requirements:**"
  }, {
    heading: "prerequisites",
    content: "The server is connected to the public internet and has a public IP address."
  }, {
    heading: "prerequisites",
    content: "The server allows access to the following domains:"
  }, {
    heading: "prerequisites",
    content: "`*.agora.io`"
  }, {
    heading: "prerequisites",
    content: "`*.agoralab.co`"
  }, {
    heading: "project-setup",
    content: "This section shows how to integrate the On-Premise Recording SDK into your app."
  }, {
    heading: "integrate-the-sdk",
    content: "Download the latest On-Premise Recording SDK package from the SDKs page."
  }, {
    heading: "integrate-the-sdk",
    content: "Extract the package. The directory structure should look like this:"
  }, {
    heading: "integrate-the-sdk",
    content: "Integrate the SDK into your project:"
  }, {
    heading: "integrate-the-sdk",
    content: "Import the header files from `agora_sdk/include` into your project."
  }, {
    heading: "integrate-the-sdk",
    content: "Link the following dynamic library files from the `agora_sdk` directory:"
  }, {
    heading: "integrate-the-sdk",
    content: "`libagora-fdkaac.so`"
  }, {
    heading: "integrate-the-sdk",
    content: "`libagora_rtc_sdk.so`"
  }, {
    heading: "integrate-the-sdk",
    content: "`libaosl.so`"
  }, {
    heading: "integrate-the-sdk",
    content: "The `example` directory contains a complete sample project for local recording. To run it, see Test the project."
  }, {
    heading: "implement-on-premise-recording",
    content: "This section shows how to implement On-Premise recording in your app, step by step."
  }, {
    heading: "implement-on-premise-recording",
    content: "The following figure illustrates the essential steps:"
  }, {
    heading: "initialize-the-service",
    content: "Create the Agora service using `createAgoraService`. Then initialize it with media configuration options and logging settings."
  }, {
    heading: "create-the-recorder-instance",
    content: "Call `createAgoraMediaComponentFactory` and use it to create a `IAgoraMediaRtcRecorder` instance. Then initialize the recorder with the service and recording mode."
  }, {
    heading: "register-the-event-handler",
    content: "Call `registerRecorderEventHandle` to register a user-defined event handler that receives recorder callbacks."
  }, {
    heading: "subscribe-to-audio-and-video-streams",
    content: "Call `subscribeAllAudio` and `subscribeAllVideo` to receive all audio and video streams in the channel."
  }, {
    heading: "configure-recording",
    content: "Call `setRecorderConfig` to define recording parameters such as resolution, frame rate, audio settings, and the storage location."
  }, {
    heading: "configure-recording",
    content: "Ensure that the directory specified in `storagePath` exists. If not, the recording will fail."
  }, {
    heading: "join-the-channel-and-start-recording",
    content: "Call `joinChannel` to join the specified channel and `startRecording` to begin recording."
  }, {
    heading: "stop-recording-and-release-resources",
    content: "Call the cleanup methods to end recording, unsubscribe from streams, and release memory."
  }, {
    heading: "complete-sample-code",
    content: "The following example shows the full implementation of an On-Premise Recording workflow."
  }, {
    heading: "test-the-project",
    content: "Agora provides a complete sample project in the SDK download package. After downloading and extracting the package, follow these steps to build and run it:"
  }, {
    heading: "test-the-project",
    content: "Navigate to the sample project directory:"
  }, {
    heading: "test-the-project",
    content: "Build the sample project:"
  }, {
    heading: "test-the-project",
    content: "Add the SDK library path to the `LD_LIBRARY_PATH` environment variable:"
  }, {
    heading: "test-the-project",
    content: "Choose a configuration file for your recording mode:"
  }, {
    heading: "test-the-project",
    content: "Use `recorder.json` for composite recording."
  }, {
    heading: "test-the-project",
    content: "Use `singleVideo.json` for individual recording."
  }, {
    heading: "test-the-project",
    content: "For more information on the differences between mixed and individual recording modes, see Individual recording and Composite recording."
  }, {
    heading: "test-the-project",
    content: "Run the sample recorder with the selected configuration file:"
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference",
    content: "`createAgoraService`"
  }, {
    heading: "api-reference",
    content: "`initialize`"
  }, {
    heading: "api-reference",
    content: "`setLogFile`"
  }, {
    heading: "api-reference",
    content: "`createAgoraMediaComponentFactory`"
  }, {
    heading: "api-reference",
    content: "`registerRecorderEventHandle`"
  }, {
    heading: "api-reference",
    content: "`subscribeAllAudio`"
  }, {
    heading: "api-reference",
    content: "`subscribeAllVideo`"
  }, {
    heading: "api-reference",
    content: "`setRecorderConfig`"
  }, {
    heading: "api-reference",
    content: "`joinChannel`"
  }, {
    heading: "api-reference",
    content: "`startRecording`"
  }, {
    heading: "api-reference",
    content: "`unsubscribeAllAudio`"
  }, {
    heading: "api-reference",
    content: "`unsubscribeAllVideo`"
  }, {
    heading: "api-reference",
    content: "`stopRecording`"
  }, {
    heading: "api-reference",
    content: "`unregisterRecorderEventHandle`"
  }, {
    heading: "api-reference",
    content: "`leaveChannel`"
  }, {
    heading: "api-reference",
    content: "`release`"
  }, {
    heading: "api-reference",
    content: "This article describes how to use the On-Premise Recording SDK to record real-time audio and video."
  }, {
    heading: "understand-the-tech-1",
    content: "Recording audio and video in a channel using the On-Premise Recording SDK works by adding a special user to the RTC SDK channel. This special user captures the audio and video from the channel, transcodes it, and stores it on your Linux server."
  }, {
    heading: "understand-the-tech-1",
    content: "Integrate the On-Premise Recording SDK into your Linux server, not your client app. To record audio and video without deploying a Linux server, use Agora Cloud Recording."
  }, {
    heading: "prerequisites-1",
    content: "Before you begin, complete the following steps and ensure your environment meets the required specifications:"
  }, {
    heading: "prerequisites-1",
    content: "Create an Agora project in the Agora Console and obtain an App ID and a temporary token."
  }, {
    heading: "prerequisites-1",
    content: "Implement an RTC SDK project that includes basic audio and video interaction."
  }, {
    heading: "prerequisites-1",
    content: "**Server hardware requirements:**"
  }, {
    heading: "prerequisites-1",
    content: "**CPU**: 8 cores, 1.8 GHz"
  }, {
    heading: "prerequisites-1",
    content: "**Memory**: At least 4 GB (recommended)"
  }, {
    heading: "prerequisites-1",
    content: "**Server software requirements:**"
  }, {
    heading: "prerequisites-1",
    content: "**Operating system**: Ubuntu 18.04 or later, or CentOS 7.0 or later"
  }, {
    heading: "prerequisites-1",
    content: "**CPU architecture**: arm64 or x86-64"
  }, {
    heading: "prerequisites-1",
    content: "**glibc**: version 2.18 or later"
  }, {
    heading: "prerequisites-1",
    content: "**gcc**: version 4.8 or later"
  }, {
    heading: "prerequisites-1",
    content: "**Network requirements:**"
  }, {
    heading: "prerequisites-1",
    content: "The server is connected to the public internet and has a public IP address."
  }, {
    heading: "prerequisites-1",
    content: "The server allows access to the following domains:"
  }, {
    heading: "prerequisites-1",
    content: "`*.agora.io`"
  }, {
    heading: "prerequisites-1",
    content: "`*.agoralab.co`"
  }, {
    heading: "project-setup-1",
    content: "This section shows how to integrate the On-Premise Recording SDK into your app."
  }, {
    heading: "project-setup-1",
    content: "Add the following dependencies to your project’s` pom.xml` file based on your platform:"
  }, {
    heading: "project-setup-1",
    content: "**For x86\\_64**:"
  }, {
    heading: "project-setup-1",
    content: "**For arm64**:"
  }, {
    heading: "download-and-unzip",
    content: "Download the latest On-Premise Recording SDK package from the SDKs page."
  }, {
    heading: "download-and-unzip",
    content: "Unzip the SDK and you see the following contents:"
  }, {
    heading: "integrate-the-sdk-1",
    content: "Choose one of the following methods to add the SDK to your project."
  }, {
    heading: "use-a-local-maven-repository",
    content: "Install the SDK JAR using Maven:"
  }, {
    heading: "use-a-local-maven-repository",
    content: "To install only the SDK JAR:"
  }, {
    heading: "use-a-local-maven-repository",
    content: "To install both the SDK JAR and JavaDoc:"
  }, {
    heading: "use-a-local-maven-repository",
    content: "Add the dependency to your `pom.xml`:"
  }, {
    heading: "reference-the-jar-directly",
    content: "Create a `libs` directory and copy the JAR files:"
  }, {
    heading: "reference-the-jar-directly",
    content: "Add the JAR file to your classpath when compiling or running:"
  }, {
    heading: "reference-the-jar-directly",
    content: "To enable JavaDoc support in your IDE (such as IntelliJ IDEA or Eclipse), attach `agora-recording-sdk-javadoc.jar` to the library reference."
  }, {
    heading: "load-native-libraries",
    content: "The SDK depends on native `.so` libraries written in C++. Whether you integrate the SDK using Maven or manually, you must ensure the Java Virtual Machine (JVM) can locate and load these libraries at runtime."
  }, {
    heading: "extract-native-so-files",
    content: "The native `.so` files are bundled inside the `agora-recording-sdk.jar` or `linux-recording-java-sdk-<version>.jar` file. You need to extract them manually:"
  }, {
    heading: "extract-native-so-files",
    content: "Create a directory to store the native library files:"
  }, {
    heading: "extract-native-so-files",
    content: "Use the `jar` command to extract contents:"
  }, {
    heading: "extract-native-so-files",
    content: "If you're using the local SDK:"
  }, {
    heading: "extract-native-so-files",
    content: "If you're using the Maven-installed SDK:"
  }, {
    heading: "extract-native-so-files",
    content: "After extraction, you'll find a directory structure like this:"
  }, {
    heading: "configure-the-library-load-path",
    content: "The JVM must be configured to locate the extracted `.so` files. You can do this in one of two ways:"
  }, {
    heading: "configure-the-library-load-path",
    content: "**Option 1: Use `LD_LIBRARY_PATH` (Recommended)**"
  }, {
    heading: "configure-the-library-load-path",
    content: "Set the environment variable before launching your app:"
  }, {
    heading: "configure-the-library-load-path",
    content: "Run your application:"
  }, {
    heading: "configure-the-library-load-path",
    content: "**Option 2: Use JVM option `-Djava.library.path`**"
  }, {
    heading: "configure-the-library-load-path",
    content: "This method directly tells the JVM where to find the native libraries:"
  }, {
    heading: "configure-the-library-load-path",
    content: "Using `LD_LIBRARY_PATH` is more reliable, especially when native libraries depend on each other."
  }, {
    heading: "automate-with-a-startup-script-optional",
    content: "You can create a shell script to automate the setup:"
  }, {
    heading: "automate-with-a-startup-script-optional",
    content: "Make the script executable:"
  }, {
    heading: "implement-on-premise-recording-1",
    content: "This section shows how to implement On-Premise recording in your app, step by step."
  }, {
    heading: "implement-on-premise-recording-1",
    content: "The following figure illustrates the essential steps:"
  }, {
    heading: "initialize-the-service-1",
    content: "Create an `AgoraService` instance and initialize it with your App ID and feature flags."
  }, {
    heading: "create-a-recorder-instance",
    content: "Call `createMediaRtcRecorder` to create a recorder instance,and then use `AgoraMediaRtcRecorder.initialize` to initialize it."
  }, {
    heading: "register-event-handlers",
    content: "Register an event handler to receive recording callbacks."
  }, {
    heading: "subscribe-to-audio-and-video-streams-1",
    content: "Subscribe to all audio streams and high-quality video streams in the channel."
  }, {
    heading: "configure-the-recorder",
    content: "Set the resolution, frame rate, duration, and file path for the recording."
  }, {
    heading: "configure-the-recorder",
    content: "Ensure that the `storagePath` exists before you start recording. If the directory does not exist, the recording fails."
  }, {
    heading: "join-the-channel-and-start-recording-1",
    content: "Use the following code to join a channel and begin recording:"
  }, {
    heading: "stop-and-release-resources",
    content: "Unsubscribe from streams, stop the recording, and release resources."
  }, {
    heading: "stop-and-release-resources",
    content: "The recorded MP4 file is saved to the storage path you specified in the recording configuration."
  }, {
    heading: "test-the-project-1",
    content: "Agora provides an open source sample project on GitHub for your reference. Download or view the Agora Recording Java SDK project for a more detailed example."
  }, {
    heading: "test-the-project-1",
    content: "Follow these steps to compile, configure, and run the Agora recording sample using the Spring Boot project."
  }, {
    heading: "test-the-project-1",
    content: "**Compile the project**"
  }, {
    heading: "test-the-project-1",
    content: "Open a terminal and navigate to the `Examples-Mvn` directory. Run the following command to build the project:"
  }, {
    heading: "test-the-project-1",
    content: "After the build completes successfully, the output JAR file appears in the `target/generated` directory as `agora-example.jar`."
  }, {
    heading: "test-the-project-1",
    content: "**Configure your App ID and token**"
  }, {
    heading: "test-the-project-1",
    content: "In the `Examples-Mvn` directory, create a `.keys` file and add your Agora credentials:"
  }, {
    heading: "test-the-project-1",
    content: "Replace `YOUR_APP_ID` and `YOUR_TOKEN` with your actual values."
  }, {
    heading: "test-the-project-1",
    content: "**Prepare native libraries**"
  }, {
    heading: "test-the-project-1",
    content: "Ensure that the `libs/native/linux/x86_64/` directory contains the following `.so` files:"
  }, {
    heading: "test-the-project-1",
    content: "`libagora_rtc_sdk.so`"
  }, {
    heading: "test-the-project-1",
    content: "`librecording.so`"
  }, {
    heading: "test-the-project-1",
    content: "`libagora-fdkaac.so`"
  }, {
    heading: "test-the-project-1",
    content: "`libaosl.so`"
  }, {
    heading: "test-the-project-1",
    content: "These libraries must be available at runtime. If any are missing, the application will fail to load the native dependencies."
  }, {
    heading: "test-the-project-1",
    content: "**Run the sample application**"
  }, {
    heading: "test-the-project-1",
    content: "From the `Examples-Mvn` directory, run the following command:"
  }, {
    heading: "test-the-project-1",
    content: "The Spring Boot server starts and listens on port `18080`. To use a different port, update the `-Dserver.port` parameter."
  }, {
    heading: "test-the-project-1",
    content: "**Start and stop a recording session**"
  }, {
    heading: "test-the-project-1",
    content: "**Start recording**"
  }, {
    heading: "test-the-project-1",
    content: "Send an HTTP request to the following endpoint:"
  }, {
    heading: "test-the-project-1",
    content: "**Stop recording**"
  }, {
    heading: "test-the-project-1",
    content: "Replace `<taskId>` with the value returned from the start response:"
  }, {
    heading: "test-the-project-1",
    content: "Place all configuration files (such as `mix_stream_recorder_audio_video_water_marks.json`) in the `Examples-Mvn/src/main/resources/` directory."
  }, {
    heading: "reference-1",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-1",
    content: "`AgoraService`"
  }, {
    heading: "api-reference-1",
    content: "`AgoraServiceConfiguration`"
  }, {
    heading: "api-reference-1",
    content: "`LogConfig`"
  }, {
    heading: "api-reference-1",
    content: "`initialize`"
  }, {
    heading: "api-reference-1",
    content: "`AgoraMediaRtcRecorder`"
  }, {
    heading: "api-reference-1",
    content: "`registerRecorderEventHandler`"
  }, {
    heading: "api-reference-1",
    content: "`subscribeAllAudio`"
  }, {
    heading: "api-reference-1",
    content: "`subscribeAllVideo`"
  }, {
    heading: "api-reference-1",
    content: "`setRecorderConfig`"
  }, {
    heading: "api-reference-1",
    content: "`joinChannel`"
  }, {
    heading: "api-reference-1",
    content: "`startRecording`"
  }, {
    heading: "api-reference-1",
    content: "`unsubscribeAllAudio`"
  }, {
    heading: "api-reference-1",
    content: "`unsubscribeAllVideo`"
  }, {
    heading: "api-reference-1",
    content: "`stopRecording`"
  }, {
    heading: "api-reference-1",
    content: "`unregisterRecorderEventHandler`"
  }, {
    heading: "api-reference-1",
    content: "`leaveChannel`"
  }, {
    heading: "api-reference-1",
    content: "`release`"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "project-setup",
    content: "Project setup"
  }, {
    id: "integrate-the-sdk",
    content: "Integrate the SDK"
  }, {
    id: "implement-on-premise-recording",
    content: "Implement On-Premise Recording"
  }, {
    id: "initialize-the-service",
    content: "Initialize the service"
  }, {
    id: "create-the-recorder-instance",
    content: "Create the recorder instance"
  }, {
    id: "register-the-event-handler",
    content: "Register the event handler"
  }, {
    id: "subscribe-to-audio-and-video-streams",
    content: "Subscribe to audio and video streams"
  }, {
    id: "configure-recording",
    content: "Configure recording"
  }, {
    id: "join-the-channel-and-start-recording",
    content: "Join the channel and start recording"
  }, {
    id: "stop-recording-and-release-resources",
    content: "Stop recording and release resources"
  }, {
    id: "complete-sample-code",
    content: "Complete sample code"
  }, {
    id: "test-the-project",
    content: "Test the project"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "api-reference",
    content: "API reference"
  }, {
    id: "understand-the-tech-1",
    content: "Understand the tech"
  }, {
    id: "prerequisites-1",
    content: "Prerequisites"
  }, {
    id: "project-setup-1",
    content: "Project setup"
  }, {
    id: "download-and-unzip",
    content: "Download and unzip"
  }, {
    id: "integrate-the-sdk-1",
    content: "Integrate the SDK"
  }, {
    id: "use-a-local-maven-repository",
    content: "Use a local maven repository"
  }, {
    id: "reference-the-jar-directly",
    content: "Reference the JAR directly"
  }, {
    id: "load-native-libraries",
    content: "Load native libraries"
  }, {
    id: "extract-native-so-files",
    content: "Extract native `.so` files"
  }, {
    id: "configure-the-library-load-path",
    content: "Configure the library load path"
  }, {
    id: "automate-with-a-startup-script-optional",
    content: "Automate with a startup script (Optional)"
  }, {
    id: "implement-on-premise-recording-1",
    content: "Implement On-Premise Recording"
  }, {
    id: "initialize-the-service-1",
    content: "Initialize the service"
  }, {
    id: "create-a-recorder-instance",
    content: "Create a recorder instance"
  }, {
    id: "register-event-handlers",
    content: "Register event handlers"
  }, {
    id: "subscribe-to-audio-and-video-streams-1",
    content: "Subscribe to audio and video streams"
  }, {
    id: "configure-the-recorder",
    content: "Configure the recorder"
  }, {
    id: "join-the-channel-and-start-recording-1",
    content: "Join the channel and start recording"
  }, {
    id: "stop-and-release-resources",
    content: "Stop and release resources"
  }, {
    id: "complete-sample-code-1",
    content: "Complete sample code"
  }, {
    id: "test-the-project-1",
    content: "Test the project"
  }, {
    id: "reference-1",
    content: "Reference"
  }, {
    id: "api-reference-1",
    content: "API reference"
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
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#project-setup",
  title: _jsx(_Fragment, {
    children: "Project setup"
  })
}, {
  depth: 3,
  url: "#integrate-the-sdk",
  title: _jsx(_Fragment, {
    children: "Integrate the SDK"
  })
}, {
  depth: 2,
  url: "#implement-on-premise-recording",
  title: _jsx(_Fragment, {
    children: "Implement On-Premise Recording"
  })
}, {
  depth: 3,
  url: "#initialize-the-service",
  title: _jsx(_Fragment, {
    children: "Initialize the service"
  })
}, {
  depth: 3,
  url: "#create-the-recorder-instance",
  title: _jsx(_Fragment, {
    children: "Create the recorder instance"
  })
}, {
  depth: 3,
  url: "#register-the-event-handler",
  title: _jsx(_Fragment, {
    children: "Register the event handler"
  })
}, {
  depth: 3,
  url: "#subscribe-to-audio-and-video-streams",
  title: _jsx(_Fragment, {
    children: "Subscribe to audio and video streams"
  })
}, {
  depth: 3,
  url: "#configure-recording",
  title: _jsx(_Fragment, {
    children: "Configure recording"
  })
}, {
  depth: 3,
  url: "#join-the-channel-and-start-recording",
  title: _jsx(_Fragment, {
    children: "Join the channel and start recording"
  })
}, {
  depth: 3,
  url: "#stop-recording-and-release-resources",
  title: _jsx(_Fragment, {
    children: "Stop recording and release resources"
  })
}, {
  depth: 3,
  url: "#complete-sample-code",
  title: _jsx(_Fragment, {
    children: "Complete sample code"
  })
}, {
  depth: 2,
  url: "#test-the-project",
  title: _jsx(_Fragment, {
    children: "Test the project"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-reference",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-1",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-1",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#project-setup-1",
  title: _jsx(_Fragment, {
    children: "Project setup"
  })
}, {
  depth: 3,
  url: "#download-and-unzip",
  title: _jsx(_Fragment, {
    children: "Download and unzip"
  })
}, {
  depth: 3,
  url: "#integrate-the-sdk-1",
  title: _jsx(_Fragment, {
    children: "Integrate the SDK"
  })
}, {
  depth: 4,
  url: "#use-a-local-maven-repository",
  title: _jsx(_Fragment, {
    children: "Use a local maven repository"
  })
}, {
  depth: 4,
  url: "#reference-the-jar-directly",
  title: _jsx(_Fragment, {
    children: "Reference the JAR directly"
  })
}, {
  depth: 3,
  url: "#load-native-libraries",
  title: _jsx(_Fragment, {
    children: "Load native libraries"
  })
}, {
  depth: 4,
  url: "#extract-native-so-files",
  title: _jsxs(_Fragment, {
    children: ["Extract native ", _jsx("code", {
      children: ".so"
    }), " files"]
  })
}, {
  depth: 4,
  url: "#configure-the-library-load-path",
  title: _jsx(_Fragment, {
    children: "Configure the library load path"
  })
}, {
  depth: 4,
  url: "#automate-with-a-startup-script-optional",
  title: _jsx(_Fragment, {
    children: "Automate with a startup script (Optional)"
  })
}, {
  depth: 2,
  url: "#implement-on-premise-recording-1",
  title: _jsx(_Fragment, {
    children: "Implement On-Premise Recording"
  })
}, {
  depth: 3,
  url: "#initialize-the-service-1",
  title: _jsx(_Fragment, {
    children: "Initialize the service"
  })
}, {
  depth: 3,
  url: "#create-a-recorder-instance",
  title: _jsx(_Fragment, {
    children: "Create a recorder instance"
  })
}, {
  depth: 3,
  url: "#register-event-handlers",
  title: _jsx(_Fragment, {
    children: "Register event handlers"
  })
}, {
  depth: 3,
  url: "#subscribe-to-audio-and-video-streams-1",
  title: _jsx(_Fragment, {
    children: "Subscribe to audio and video streams"
  })
}, {
  depth: 3,
  url: "#configure-the-recorder",
  title: _jsx(_Fragment, {
    children: "Configure the recorder"
  })
}, {
  depth: 3,
  url: "#join-the-channel-and-start-recording-1",
  title: _jsx(_Fragment, {
    children: "Join the channel and start recording"
  })
}, {
  depth: 3,
  url: "#stop-and-release-resources",
  title: _jsx(_Fragment, {
    children: "Stop and release resources"
  })
}, {
  depth: 3,
  url: "#complete-sample-code-1",
  title: _jsx(_Fragment, {
    children: "Complete sample code"
  })
}, {
  depth: 2,
  url: "#test-the-project-1",
  title: _jsx(_Fragment, {
    children: "Test the project"
  })
}, {
  depth: 2,
  url: "#reference-1",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-reference-1",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CalloutTitle, Tabs, TabsContent, TabsList, TabsTrigger, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  if (!Tabs)
    _missingMdxReference("Tabs", true);
  if (!TabsContent)
    _missingMdxReference("TabsContent", true);
  if (!TabsList)
    _missingMdxReference("TabsList", true);
  if (!TabsTrigger)
    _missingMdxReference("TabsTrigger", true);
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_PlatformTabsGroup, {
    groupMode: "structured",
    canonicalPlatform: "linux-cpp",
    platforms: '["linux-cpp","linux-java"]',
    showTabs: "true",
    children: [_jsxs(_PlatformPanel, {
      platform: "linux-cpp",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "linux-cpp",
        platform: "linux-cpp"
      }), _jsx(_components.p, {
        children: "This article describes how to use the On-Premise Recording SDK to record real-time audio and video."
      }), _jsx(_components.h2, {
        id: "understand-the-tech",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "Recording audio and video in a channel using the On-Premise Recording SDK works by adding a special user to the RTC SDK channel. This special user captures the audio and video from the channel, transcodes it, and stores it on your Linux server."
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/on-premise-recording/quickstart.svg",
          alt: "On-Premise Recording SDK recording workflow"
        })
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["Integrate the On-Premise Recording SDK into your Linux server, not your client app. To record audio and video without deploying a Linux server, use Agora ", _jsx(_components.a, {
              href: "/en/realtime-media/cloud-recording",
              children: "Cloud Recording"
            }), "."]
          })
        })
      }), _jsx(_components.h2, {
        id: "prerequisites",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "Before you begin, complete the following steps and ensure your environment meets the required specifications:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.a, {
            href: "/en/introduction/account#generate-temporary-tokens",
            children: "Create an Agora project"
          }), " in the Agora Console and obtain an App ID and a temporary token."]
        }), `
`, _jsx(_components.li, {
          children: "Implement an RTC SDK project that includes basic audio and video interaction."
        }), `
`]
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Server hardware requirements:"
        })
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "CPU"
          }), ": 8 cores, 1.8 GHz"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "Memory"
          }), ": At least 4 GB (recommended)"]
        }), `
`]
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Server software requirements:"
        })
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "Operating system"
          }), ": Ubuntu 18.04 or later, or CentOS 7.0 or later"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "CPU architecture"
          }), ": arm64 or x86-64"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "glibc"
          }), ": version 2.18 or later"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "gcc"
          }), ": version 4.8 or later"]
        }), `
`]
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Network requirements:"
        })
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "The server is connected to the public internet and has a public IP address."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "The server allows access to the following domains:"
          }), `
`, _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "*.agora.io"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "*.agoralab.co"
              })
            }), `
`]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "project-setup",
        children: "Project setup"
      }), _jsx(_components.p, {
        children: "This section shows how to integrate the On-Premise Recording SDK into your app."
      }), _jsx(_components.h3, {
        id: "integrate-the-sdk",
        children: "Integrate the SDK"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Download the latest On-Premise Recording SDK package from the ", _jsx(_components.a, {
              href: "/en/api-reference/sdks?product=on-premise-recording&platform=linux",
              children: "SDKs"
            }), " page."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Extract the package. The directory structure should look like this:"
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
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "├──"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " agora_sdk"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "│"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "   ├──"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " include"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "│"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "   ├──"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " libagora-fdkaac.so"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "│"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "   ├──"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " libagora_rtc_sdk.so"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "│"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "   └──"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " libaosl.so"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "└──"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " example"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    ├──"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " CMakeLists.txt"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    ├──"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " build.sh"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    ├──"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " out"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    ├──"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " recorder"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    ├──"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " recorder.json"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    ├──"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " singleVideo.json"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    ├──"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " scripts"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    └──"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " third-party"
                  })]
                })]
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Integrate the SDK into your project:"
          }), `
`, _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Import the header files from ", _jsx(_components.code, {
                  children: "agora_sdk/include"
                }), " into your project."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Link the following dynamic library files from the ", _jsx(_components.code, {
                  children: "agora_sdk"
                }), " directory:"]
              }), `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "libagora-fdkaac.so"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "libagora_rtc_sdk.so"
                  })
                }), `
`, _jsx(_components.li, {
                  children: _jsx(_components.code, {
                    children: "libaosl.so"
                  })
                }), `
`]
              }), `
`]
            }), `
`]
          }), `
`]
        }), `
`]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["The ", _jsx(_components.code, {
              children: "example"
            }), " directory contains a complete sample project for local recording. To run it, see ", _jsx(_components.a, {
              href: "#test-the-project",
              children: "Test the project"
            }), "."]
          })
        })
      }), _jsx(_components.h2, {
        id: "implement-on-premise-recording",
        children: "Implement On-Premise Recording"
      }), _jsx(_components.p, {
        children: "This section shows how to implement On-Premise recording in your app, step by step."
      }), _jsx(_components.p, {
        children: "The following figure illustrates the essential steps:"
      }), _jsxs("details", {
        children: [_jsx("summary", {
          children: "Quickstart sequence diagram"
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/on-premise-recording/on-premise-recording-quickstart-logic-cpp.svg",
            alt: "On-Premise Recording quickstart sequence diagram"
          })
        })]
      }), _jsx(_components.h3, {
        id: "initialize-the-service",
        children: "Initialize the service"
      }), _jsxs(_components.p, {
        children: ["Create the Agora service using ", _jsx(_components.code, {
          children: "createAgoraService"
        }), ". Then initialize it with media configuration options and logging settings."]
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
          icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "auto"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " service "
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
                children: " createAgoraService"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line"
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "agora"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "base"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::AgoraServiceConfiguration service_config;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "service_config.enableAudioDevice "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " false"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "service_config.enableAudioProcessor "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " true"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "service_config.enableVideo "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " true"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "service_config.appId "
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
                children: " config.appId."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "c_str"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "service_config.useStringUid "
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
                children: " config.UseStringUid;"
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
                children: "service->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "initialize"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(service_config);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "service->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setLogFile"
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
                children: '"./io.agora.rtc_sdk/agorasdk.log"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "1024"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " *"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " 1024"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " *"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " 5"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ");"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "create-the-recorder-instance",
        children: "Create the recorder instance"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "createAgoraMediaComponentFactory"
        }), " and use it to create a ", _jsx(_components.code, {
          children: "IAgoraMediaRtcRecorder"
        }), " instance. Then initialize the recorder with the service and recording mode."]
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
          icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "agora"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "rtc"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::IMediaComponentFactory"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " factory "
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
                children: " createAgoraMediaComponentFactory"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "agora"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::agora_refptr"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "<"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "agora"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "rtc"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::IAgoraMediaRtcRecorder"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ">"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " recorder "
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
                children: " factory->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "createMediaRtcRecorder"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line"
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Set the recording mode"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// - false: Record each user's audio and video stream separately (single stream recording)"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// - true: Record all users' audio and video streams together (composite recording)"
              })
            }), `
`, _jsx(_components.span, {
              className: "line"
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "bool"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " isMix "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " false"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Initialize recorder"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorder->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "initialize"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(service, isMix);"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "register-the-event-handler",
        children: "Register the event handler"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "registerRecorderEventHandle"
        }), " to register a user-defined event handler that receives recorder callbacks."]
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
          icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "std"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::unique_ptr"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "<"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "RecorderEventHandler"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ">"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " eventHandler{"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " RecorderEventHandler"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(recorder, config)};"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorder->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "registerRecorderEventHandle"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(eventHandler."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "get"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "());"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "subscribe-to-audio-and-video-streams",
        children: "Subscribe to audio and video streams"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "subscribeAllAudio"
        }), " and ", _jsx(_components.code, {
          children: "subscribeAllVideo"
        }), " to receive all audio and video streams in the channel."]
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
          icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorder->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "subscribeAllAudio"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorder->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "subscribeAllVideo"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(options);"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "configure-recording",
        children: "Configure recording"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "setRecorderConfig"
        }), " to define recording parameters such as resolution, frame rate, audio settings, and the storage location."]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["Ensure that the directory specified in ", _jsx(_components.code, {
              children: "storagePath"
            }), " exists. If not, the recording will fail."]
          })
        })
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
          icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Set recording configuration"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "agora"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "media"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::MediaRecorderConfiguration recorder_config;"
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
                children: "recorder_config.width "
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
                children: " config.video.width;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorder_config.height "
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
                children: " config.video.height;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorder_config.fps "
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
                children: " config.video.fps;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorder_config.storagePath "
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
                children: " config.recorderPath."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "c_str"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorder_config.sample_rate "
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
                children: " config.audio.sampleRate;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorder_config.channel_num "
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
                children: " config.audio.numOfChannels;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Set recording stream type: audio stream, video stream, or audio and video stream"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorder_config.streamType "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " static_cast<"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "agora"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "media"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::MediaRecorderStreamType"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ">"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(config.recorderStreamType);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Set the maximum recording duration"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorder_config.maxDurationMs "
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
                children: " config.maxDuration "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " 1000"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
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
                children: "recorder->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setRecorderConfig"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(recorder_config);"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "join-the-channel-and-start-recording",
        children: "Join the channel and start recording"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "joinChannel"
        }), " to join the specified channel and ", _jsx(_components.code, {
          children: "startRecording"
        }), " to begin recording."]
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
          icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorder->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "joinChannel"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(config.token."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "c_str"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(), config.ChannelName."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "c_str"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(), config.UserId."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "c_str"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "());"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorder->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "startRecording"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "stop-recording-and-release-resources",
        children: "Stop recording and release resources"
      }), _jsx(_components.p, {
        children: "Call the cleanup methods to end recording, unsubscribe from streams, and release memory."
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
          icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorder->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "unsubscribeAllAudio"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorder->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "unsubscribeAllVideo"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorder->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "stopRecording"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
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
                children: "recorder->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "unregisterRecorderEventHandle"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(eventHandler."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "get"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "());"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "eventHandler "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " nullptr"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
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
                children: "recorder->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "leaveChannel"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorder "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " nullptr"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
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
                children: "service->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "release"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "complete-sample-code",
        children: "Complete sample code"
      }), _jsx(_components.p, {
        children: "The following example shows the full implementation of an On-Premise Recording workflow."
      }), _jsxs("details", {
        children: [_jsx("summary", {
          children: "Complete sample code for On-Premise Recording"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Create and initialize the Agora service, and configure logging"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "auto"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " service "
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
                  children: " createAgoraService"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "::"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "base"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "::AgoraServiceConfiguration service_config;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "service_config.enableAudioDevice "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " false"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "service_config.enableAudioProcessor "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " true"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "service_config.enableVideo "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " true"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "service_config.appId "
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
                  children: " config.appId."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "c_str"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "service_config.useStringUid "
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
                  children: " config.UseStringUid;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "service->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "initialize"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(service_config);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "service->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setLogFile"
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
                  children: '"./io.agora.rtc_sdk/agorasdk.log"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "1024"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " *"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 1024"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " *"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 5"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Create the media recorder instance"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "::"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "rtc"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "::IMediaComponentFactory"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "*"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " factory "
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
                  children: " createAgoraMediaComponentFactory"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "::agora_refptr"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "::"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "rtc"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "::IAgoraMediaRtcRecorder"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ">"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " recorder "
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
                  children: " factory->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "createMediaRtcRecorder"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Initialize the recorder"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set to true for mixed recording or false for individual streams"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "bool"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " isMix "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " false"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "recorder->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "initialize"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(service, isMix);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Register the event handler for recorder callbacks"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "std"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "::unique_ptr"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "RecorderEventHandler"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ">"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " eventHandler{"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "new"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " RecorderEventHandler"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(recorder, config)};"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "recorder->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "registerRecorderEventHandle"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(eventHandler."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "get"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "());"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Subscribe to all audio and video streams"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "recorder->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "subscribeAllAudio"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "recorder->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "subscribeAllVideo"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(options);"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: " // 'options' should be properly defined before use"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Configure recorder settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "::"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "media"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "::MediaRecorderConfiguration recorder_config;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "recorder_config.width "
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
                  children: " config.video.width;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "recorder_config.height "
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
                  children: " config.video.height;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "recorder_config.fps "
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
                  children: " config.video.fps;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "recorder_config.storagePath "
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
                  children: " config.recorderPath."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "c_str"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "recorder_config.sample_rate "
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
                  children: " config.audio.sampleRate;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "recorder_config.channel_num "
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
                  children: " config.audio.numOfChannels;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "recorder_config.streamType "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " static_cast<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "::"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "media"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "::MediaRecorderStreamType"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ">"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(config.recorderStreamType);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "recorder_config.maxDurationMs "
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
                  children: " config.maxDuration "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "*"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 1000"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
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
                  children: "recorder->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setRecorderConfig"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(recorder_config);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Join the channel and start recording"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "recorder->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "joinChannel"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(config.token."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "c_str"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(), config.ChannelName."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "c_str"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(), config.UserId."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "c_str"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "());"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "recorder->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "startRecording"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Stop recording and clean up"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "recorder->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "unsubscribeAllAudio"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "recorder->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "unsubscribeAllVideo"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "recorder->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "stopRecording"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
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
                  children: "recorder->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "unregisterRecorderEventHandle"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(eventHandler."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "get"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "());"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "eventHandler "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " nullptr"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
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
                  children: "recorder->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "leaveChannel"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "recorder "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " nullptr"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
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
                  children: "service->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "release"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              })]
            })
          })
        })]
      }), _jsx(_components.h2, {
        id: "test-the-project",
        children: "Test the project"
      }), _jsx(_components.p, {
        children: "Agora provides a complete sample project in the SDK download package. After downloading and extracting the package, follow these steps to build and run it:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Navigate to the sample project directory:"
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
                    children: " agora_rtc_sdk/example"
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
            children: "Build the sample project:"
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
                children: _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "./build.sh"
                  })
                })
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Add the SDK library path to the ", _jsx(_components.code, {
              children: "LD_LIBRARY_PATH"
            }), " environment variable:"]
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "export"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " LD_LIBRARY_PATH"
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
                    children: "../../agora_sdk:$LD_LIBRARY_PATH"
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
            children: "Choose a configuration file for your recording mode:"
          }), `
`, _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Use ", _jsx(_components.code, {
                children: "recorder.json"
              }), " for composite recording."]
            }), `
`, _jsxs(_components.li, {
              children: ["Use ", _jsx(_components.code, {
                children: "singleVideo.json"
              }), " for individual recording."]
            }), `
`]
          }), `
`, _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsxs(_components.p, {
                children: ["For more information on the differences between mixed and individual recording modes, see ", _jsx(_components.a, {
                  href: "/en/realtime-media/on-premise-recording/build/record-audio-and-video/individual-mode",
                  children: "Individual recording"
                }), " and ", _jsx(_components.a, {
                  href: "/en/realtime-media/on-premise-recording/build/record-audio-and-video/composite-mode",
                  children: "Composite recording"
                }), "."]
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Run the sample recorder with the selected configuration file:"
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
              children: _jsxs(_components.code, {
                children: [_jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "# Example: Run individual recording"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "./out/sample_recorder"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " singleVideo.json"
                  })]
                })]
              })
            })
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "reference",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsx(_components.h3, {
        id: "api-reference",
        children: "API reference"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#createagoraservice",
            children: _jsx(_components.code, {
              children: "createAgoraService"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#initialize",
            children: _jsx(_components.code, {
              children: "initialize"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#setlogfile",
            children: _jsx(_components.code, {
              children: "setLogFile"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#createagoramediacomponentfactory",
            children: _jsx(_components.code, {
              children: "createAgoraMediaComponentFactory"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#registerrecordereventhandle",
            children: _jsx(_components.code, {
              children: "registerRecorderEventHandle"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#subscribeallaudio",
            children: _jsx(_components.code, {
              children: "subscribeAllAudio"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#subscribeallvideo",
            children: _jsx(_components.code, {
              children: "subscribeAllVideo"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#setrecorderconfig",
            children: _jsx(_components.code, {
              children: "setRecorderConfig"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#joinchannel",
            children: _jsx(_components.code, {
              children: "joinChannel"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#startrecording",
            children: _jsx(_components.code, {
              children: "startRecording"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#unsubscribeallaudio",
            children: _jsx(_components.code, {
              children: "unsubscribeAllAudio"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#unsubscribeallvideo",
            children: _jsx(_components.code, {
              children: "unsubscribeAllVideo"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#stoprecording",
            children: _jsx(_components.code, {
              children: "stopRecording"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#unregisterrecordereventhandle",
            children: _jsx(_components.code, {
              children: "unregisterRecorderEventHandle"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#leavechannel",
            children: _jsx(_components.code, {
              children: "leaveChannel"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#release",
            children: _jsx(_components.code, {
              children: "release"
            })
          })
        }), `
`]
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
        children: "This article describes how to use the On-Premise Recording SDK to record real-time audio and video."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-1",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "Recording audio and video in a channel using the On-Premise Recording SDK works by adding a special user to the RTC SDK channel. This special user captures the audio and video from the channel, transcodes it, and stores it on your Linux server."
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/on-premise-recording/quickstart.svg",
          alt: "On-Premise Recording SDK recording workflow"
        })
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["Integrate the On-Premise Recording SDK into your Linux server, not your client app. To record audio and video without deploying a Linux server, use Agora ", _jsx(_components.a, {
              href: "/en/realtime-media/cloud-recording",
              children: "Cloud Recording"
            }), "."]
          })
        })
      }), _jsx(_components.h2, {
        id: "prerequisites-1",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "Before you begin, complete the following steps and ensure your environment meets the required specifications:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.a, {
            href: "/en/introduction/account#generate-temporary-tokens",
            children: "Create an Agora project"
          }), " in the Agora Console and obtain an App ID and a temporary token."]
        }), `
`, _jsx(_components.li, {
          children: "Implement an RTC SDK project that includes basic audio and video interaction."
        }), `
`]
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Server hardware requirements:"
        })
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "CPU"
          }), ": 8 cores, 1.8 GHz"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "Memory"
          }), ": At least 4 GB (recommended)"]
        }), `
`]
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Server software requirements:"
        })
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "Operating system"
          }), ": Ubuntu 18.04 or later, or CentOS 7.0 or later"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "CPU architecture"
          }), ": arm64 or x86-64"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "glibc"
          }), ": version 2.18 or later"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "gcc"
          }), ": version 4.8 or later"]
        }), `
`]
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Network requirements:"
        })
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "The server is connected to the public internet and has a public IP address."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "The server allows access to the following domains:"
          }), `
`, _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "*.agora.io"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "*.agoralab.co"
              })
            }), `
`]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "project-setup-1",
        children: "Project setup"
      }), _jsx(_components.p, {
        children: "This section shows how to integrate the On-Premise Recording SDK into your app."
      }), _jsxs(Tabs, {
        defaultValue: "maven",
        children: [_jsxs(TabsList, {
          children: [_jsx(TabsTrigger, {
            value: "maven",
            children: "Add using Maven"
          }), _jsx(TabsTrigger, {
            value: "manual",
            children: "Add manually"
          })]
        }), _jsxs(TabsContent, {
          value: "maven",
          children: [_jsxs(_components.p, {
            children: ["Add the following dependencies to your project’s", _jsx(_components.code, {
              children: " pom.xml"
            }), " file based on your platform:"]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.strong, {
                children: "For x86_64"
              }), ":"]
            }), `
`]
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
              icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
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
                    children: ">linux-recording-java-sdk</"
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
                    children: ">4.4.150.5</"
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
                    children: "  </"
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
                })]
              })
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.strong, {
                children: "For arm64"
              }), ":"]
            }), `
`]
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
              icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
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
                    children: ">linux-recording-java-sdk</"
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
                    children: ">4.4.150.5-aarch64</"
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
                    children: "  </"
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
                })]
              })
            })
          })]
        }), _jsxs(TabsContent, {
          value: "manual",
          children: [_jsx(_components.h3, {
            id: "download-and-unzip",
            children: "Download and unzip"
          }), _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Download the latest On-Premise Recording SDK package from the ", _jsx(_components.a, {
                  href: "/en/api-reference/sdks?product=on-premise-recording&platform=linux",
                  children: "SDKs"
                }), " page."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: "Unzip the SDK and you see the following contents:"
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
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "doc/"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: "                            JavaDoc"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " documentation"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "   examples/"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: "                       Sample"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " projects"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " and"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " code"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "   sdk/"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: "                            Core"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " SDK"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " files"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "     sdk/agora-recording-sdk.jar"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: "     Java"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " class"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " library"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "     sdk/agora-recording-sdk-javadoc.jar"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: "  JavaDoc"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " (optional, "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: "for"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " IDE"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " support"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ")"
                      })]
                    })]
                  })
                })
              }), `
`]
            }), `
`]
          }), _jsx(_components.h3, {
            id: "integrate-the-sdk-1",
            children: "Integrate the SDK"
          }), _jsx(_components.p, {
            children: "Choose one of the following methods to add the SDK to your project."
          }), _jsx(_components.h4, {
            id: "use-a-local-maven-repository",
            children: "Use a local maven repository"
          }), _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: "Install the SDK JAR using Maven:"
              }), `
`, _jsx(_components.p, {
                children: "To install only the SDK JAR:"
              }), `
`]
            }), `
`]
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
                    children: "mvn"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " install:install-file"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " \\\\"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "    -Dfile=sdk/agora-recording-sdk.jar"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " \\\\"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "    -DgroupId=io.agora.rtc"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " \\\\"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "    -DartifactId=linux-recording-java-sdk"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " \\\\"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "    -Dversion=4.4.150.5"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " \\\\"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "    -Dpackaging=jar"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " \\\\"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "    -DgeneratePom=true"
                  })
                })]
              })
            })
          }), _jsx(_components.p, {
            children: "To install both the SDK JAR and JavaDoc:"
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
                    children: "mvn"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " install:install-file"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " \\\\"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "    -Dfile=sdk/agora-recording-sdk.jar"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " \\\\"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "    -DgroupId=io.agora.rtc"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " \\\\"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "    -DartifactId=linux-recording-java-sdk"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " \\\\"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "    -Dversion=4.4.150.5"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " \\\\"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "    -Dpackaging=jar"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " \\\\"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "    -DgeneratePom=true"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " \\\\"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "    -Djavadoc=sdk/agora-recording-sdk-javadoc.jar"
                  })
                })]
              })
            })
          }), _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Add the dependency to your ", _jsx(_components.code, {
                children: "pom.xml"
              }), ":", `
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
                        children: "<"
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
                        children: "      <"
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
                        children: "      <"
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
                        children: ">linux-recording-java-sdk</"
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
                        children: "      <"
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
                        children: ">4.4.150.5</"
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
                    })]
                  })
                })
              }), `
`]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "reference-the-jar-directly",
            children: "Reference the JAR directly"
          }), _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Create a ", _jsx(_components.code, {
                  children: "libs"
                }), " directory and copy the JAR files:"]
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
                  children: _jsxs(_components.code, {
                    children: [_jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "mkdir"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: " -p"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " libs"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "   cp"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " sdk/agora-recording-sdk.jar"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " libs/"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "   cp"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " sdk/agora-recording-sdk-javadoc.jar"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " libs/"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6A737D",
                          "--shiki-dark": "#6A737D"
                        },
                        children: "  # Optional, for IDE JavaDoc support"
                      })]
                    })]
                  })
                })
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: "Add the JAR file to your classpath when compiling or running:"
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
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "java -cp .:libs/agora-recording-sdk.jar YourMainClass"
                      })
                    })
                  })
                })
              }), `
`]
            }), `
`]
          }), _jsxs(CalloutContainer, {
            type: "info",
            children: [_jsx(CalloutTitle, {
              children: "info"
            }), _jsx(CalloutDescription, {
              children: _jsxs(_components.p, {
                children: ["To enable JavaDoc support in your IDE (such as IntelliJ IDEA or Eclipse), attach ", _jsx(_components.code, {
                  children: "agora-recording-sdk-javadoc.jar"
                }), " to the library reference."]
              })
            })]
          }), _jsx(_components.h3, {
            id: "load-native-libraries",
            children: "Load native libraries"
          }), _jsxs(_components.p, {
            children: ["The SDK depends on native ", _jsx(_components.code, {
              children: ".so"
            }), " libraries written in C++. Whether you integrate the SDK using Maven or manually, you must ensure the Java Virtual Machine (JVM) can locate and load these libraries at runtime."]
          }), _jsxs(_components.h4, {
            id: "extract-native-so-files",
            children: ["Extract native ", _jsx(_components.code, {
              children: ".so"
            }), " files"]
          }), _jsxs(_components.p, {
            children: ["The native ", _jsx(_components.code, {
              children: ".so"
            }), " files are bundled inside the ", _jsx(_components.code, {
              children: "agora-recording-sdk.jar"
            }), " or ", _jsx(_components.code, {
              children: "linux-recording-java-sdk-<version>.jar"
            }), " file. You need to extract them manually:"]
          }), _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: "Create a directory to store the native library files:"
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
                  children: _jsxs(_components.code, {
                    children: [_jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "mkdir"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: " -p"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " libs"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: "   cd"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " libs"
                      })]
                    })]
                  })
                })
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Use the ", _jsx(_components.code, {
                  children: "jar"
                }), " command to extract contents:"]
              }), `
`, _jsx(_components.p, {
                children: "If you're using the local SDK:"
              }), `
`]
            }), `
`]
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
                    children: "jar"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " xvf"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " agora-recording-sdk.jar"
                  })]
                })
              })
            })
          }), _jsx(_components.p, {
            children: "If you're using the Maven-installed SDK:"
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
                    children: "jar"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " xvf"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " ~/.m2/repository/io/agora/rtc/linux-recording-java-sdk/4.4.150.5/linux-recording-java-sdk-4.4.150.5.jar"
                  })]
                })
              })
            })
          }), _jsx(_components.p, {
            children: "After extraction, you'll find a directory structure like this:"
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
              icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "libs/"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "   ├──"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " agora-recording-sdk.jar"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "   ├──"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " native/"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "   │"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "   └──"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " linux/"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "   │"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "       ├──"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " x86_64/"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "   │"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "       │"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "   ├──"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " libagora_rtc_sdk.so"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "   │"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "       │"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "   ├──"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " libagora-fdkaac.so"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "   │"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "       │"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "   ├──"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " libaosl.so"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "   │"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "       │"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "   └──"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " librecording.so"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "   │"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "       └──"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " aarch64/"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "   (if "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "available"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " for"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " arm64"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ")"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "   │"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "            ├──"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " libagora_rtc_sdk.so"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "   │"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "            ├──"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " libagora-fdkaac.so"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "   │"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "            ├──"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " libaosl.so"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "   │"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "            └──"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " librecording.so"
                  })]
                })]
              })
            })
          }), _jsx(_components.h4, {
            id: "configure-the-library-load-path",
            children: "Configure the library load path"
          }), _jsxs(_components.p, {
            children: ["The JVM must be configured to locate the extracted ", _jsx(_components.code, {
              children: ".so"
            }), " files. You can do this in one of two ways:"]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: _jsxs(_components.strong, {
                  children: ["Option 1: Use ", _jsx(_components.code, {
                    children: "LD_LIBRARY_PATH"
                  }), " (Recommended)"]
                })
              }), `
`, _jsxs(_components.ol, {
                children: [`
`, _jsxs(_components.li, {
                  children: [`
`, _jsx(_components.p, {
                    children: "Set the environment variable before launching your app:"
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
                      children: _jsxs(_components.code, {
                        children: [_jsx(_components.span, {
                          className: "line",
                          children: _jsx(_components.span, {
                            style: {
                              "--shiki-light": "#6A737D",
                              "--shiki-dark": "#6A737D"
                            },
                            children: "# Assuming the .so files are in ./libs/native/linux/x86_64"
                          })
                        }), `
`, _jsxs(_components.span, {
                          className: "line",
                          children: [_jsx(_components.span, {
                            style: {
                              "--shiki-light": "#24292E",
                              "--shiki-dark": "#E1E4E8"
                            },
                            children: "       LIB_DIR"
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
                            children: "$("
                          }), _jsx(_components.span, {
                            style: {
                              "--shiki-light": "#005CC5",
                              "--shiki-dark": "#79B8FF"
                            },
                            children: "pwd"
                          }), _jsx(_components.span, {
                            style: {
                              "--shiki-light": "#24292E",
                              "--shiki-dark": "#E1E4E8"
                            },
                            children: ")"
                          }), _jsx(_components.span, {
                            style: {
                              "--shiki-light": "#032F62",
                              "--shiki-dark": "#9ECBFF"
                            },
                            children: "/libs/native/linux/x86_64"
                          })]
                        }), `
`, _jsxs(_components.span, {
                          className: "line",
                          children: [_jsx(_components.span, {
                            style: {
                              "--shiki-light": "#D73A49",
                              "--shiki-dark": "#F97583"
                            },
                            children: "       export"
                          }), _jsx(_components.span, {
                            style: {
                              "--shiki-light": "#24292E",
                              "--shiki-dark": "#E1E4E8"
                            },
                            children: " LD_LIBRARY_PATH"
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
                            children: "$LIB_DIR:$LD_LIBRARY_PATH"
                          })]
                        })]
                      })
                    })
                  }), `
`]
                }), `
`, _jsxs(_components.li, {
                  children: [`
`, _jsx(_components.p, {
                    children: "Run your application:"
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
                            children: "java -jar your-app.jar"
                          })
                        }), `
`, _jsx(_components.span, {
                          className: "line",
                          children: _jsx(_components.span, {
                            style: {
                              "--shiki-light": "#24292E",
                              "--shiki-dark": "#E1E4E8"
                            },
                            children: "       # Or with classpath:"
                          })
                        }), `
`, _jsx(_components.span, {
                          className: "line",
                          children: _jsx(_components.span, {
                            style: {
                              "--shiki-light": "#24292E",
                              "--shiki-dark": "#E1E4E8"
                            },
                            children: '       java -cp "your-classpath" YourMainClass'
                          })
                        })]
                      })
                    })
                  }), `
`]
                }), `
`]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: _jsxs(_components.strong, {
                  children: ["Option 2: Use JVM option ", _jsx(_components.code, {
                    children: "-Djava.library.path"
                  })]
                })
              }), `
`, _jsx(_components.p, {
                children: "This method directly tells the JVM where to find the native libraries:"
              }), `
`]
            }), `
`]
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
              icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "java -Djava.library.path=./libs/native/linux/x86_64 -jar your-app.jar"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  # Or with classpath:"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: '  java -Djava.library.path=./libs/native/linux/x86_64 -cp "your-classpath" YourMainClass'
                  })
                })]
              })
            })
          }), _jsxs(CalloutContainer, {
            type: "info",
            children: [_jsx(CalloutTitle, {
              children: "info"
            }), _jsx(CalloutDescription, {
              children: _jsxs(_components.p, {
                children: ["Using ", _jsx(_components.code, {
                  children: "LD_LIBRARY_PATH"
                }), " is more reliable, especially when native libraries depend on each other."]
              })
            })]
          }), _jsx(_components.h4, {
            id: "automate-with-a-startup-script-optional",
            children: "Automate with a startup script (Optional)"
          }), _jsx(_components.p, {
            children: "You can create a shell script to automate the setup:"
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
                    children: "#!/bin/bash"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line"
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "# Get the directory of this script"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "SCRIPT_DIR"
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
                    children: '"$('
                  }), _jsx(_components.span, {
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
                    children: ' "$('
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "dirname"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: ' "${'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "BASH_SOURCE"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '[0]}")" && '
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "pwd"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: ')"'
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line"
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "# Define paths"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "LIB_PATH"
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
                    children: '"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "$SCRIPT_DIR"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '/libs/native/linux/x86_64"'
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "SDK_JAR"
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
                    children: '"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "$SCRIPT_DIR"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '/libs/agora-recording-sdk.jar"'
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "MAIN_CLASS"
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
                    children: '"your.main.Class"'
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "APP_CP"
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
                    children: '"your-other-classpaths"'
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line"
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "# Set environment variable"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "export"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " LD_LIBRARY_PATH"
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
                    children: "$LIB_PATH:$LD_LIBRARY_PATH"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line"
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "# Build full classpath"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "CLASSPATH"
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
                    children: '".:'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "$SDK_JAR"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: ":"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "$APP_CP"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"'
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line"
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "# Run Java program"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "java"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " -Djava.library.path="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "$LIB_PATH"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " -cp"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: ' "'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "$CLASSPATH"
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
                    children: " $MAIN_CLASS"
                  })]
                })]
              })
            })
          }), _jsx(_components.p, {
            children: "Make the script executable:"
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
                    children: "chmod"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " +x"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " run.sh"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "./run.sh"
                  })
                })]
              })
            })
          })]
        })]
      }), _jsx(_components.h2, {
        id: "implement-on-premise-recording-1",
        children: "Implement On-Premise Recording"
      }), _jsx(_components.p, {
        children: "This section shows how to implement On-Premise recording in your app, step by step."
      }), _jsx(_components.p, {
        children: "The following figure illustrates the essential steps:"
      }), _jsxs("details", {
        children: [_jsx("summary", {
          children: "Quickstart sequence diagram"
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/on-premise-recording/on-premise-recording-quickstart-logic-cpp.svg",
            alt: "On-Premise Recording quickstart sequence diagram"
          })
        })]
      }), _jsx(_components.h3, {
        id: "initialize-the-service-1",
        children: "Initialize the service"
      }), _jsxs(_components.p, {
        children: ["Create an ", _jsx(_components.code, {
          children: "AgoraService"
        }), " instance and initialize it with your App ID and feature flags."]
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
          icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Create and configure the service"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "AgoraService agoraService "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " AgoraService"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "AgoraServiceConfiguration config "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " AgoraServiceConfiguration"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setEnableAudioDevice"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "false"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ");"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setEnableAudioProcessor"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "true"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ");"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setEnableVideo"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "true"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ");"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setAppId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(recorderConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getAppId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "());"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setUseStringUid"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(recorderConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "isUseStringUid"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "());"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line"
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Set up log configuration"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "LogConfig logConfig "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " LogConfig"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "logConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setFileSizeInKB"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "1024"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " *"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " 20"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ");"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "logConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setFilePath"
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
                children: '"logs/agora_logs/agorasdk.log"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ");"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setLogConfig"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(logConfig);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line"
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Initialize the Agora service"
              })
            }), `
`, _jsxs(_components.span, {
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
                children: " ret "
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
                children: " agoraService."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "initialize"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(config);"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "create-a-recorder-instance",
        children: "Create a recorder instance"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "createMediaRtcRecorder"
        }), " to create a recorder instance,and then use ", _jsx(_components.code, {
          children: "AgoraMediaRtcRecorder.initialize"
        }), " to initialize it."]
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
          icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Create recorder"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "AgoraMediaRtcRecorder agoraMediaRtcRecorder "
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
                children: " agoraService."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "createMediaRtcRecorder"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line"
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Initialize recorder"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// enableMix sets the recording mode"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// - false: Record each user’s audio and video stream separately (individual stream recording)"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// - true: Record all users’ audio and video as a mixed stream (mixed recording)"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "boolean"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " enableMix "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " false"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// service is the AgoraService object initialized in the previous step"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "agoraMediaRtcRecorder."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "initialize"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(agoraService, enableMix);"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "register-event-handlers",
        children: "Register event handlers"
      }), _jsx(_components.p, {
        children: "Register an event handler to receive recording callbacks."
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
          icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Define the event handler"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "private"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " IAgoraMediaRtcRecorderEventHandler eventHandler "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " IAgoraMediaRtcRecorderEventHandler"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "() {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    @"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "Override"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "    public"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " onConnected"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(String "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "channelId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", String "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "userId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        // Handle connection event"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    }"
              })
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
                children: "    @"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "Override"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "    public"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " onDisconnected"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(String "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "channelId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", String "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "userId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", Constants.ConnectionChangedReasonType "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "reason"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        // Handle disconnection event"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    }"
              })
            }), `
`, _jsx(_components.span, {
              className: "line"
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    // Add more overrides as needed"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "};"
              })
            }), `
`, _jsx(_components.span, {
              className: "line"
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Register the event handler"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "agoraMediaRtcRecorder."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "registerRecorderEventHandler"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(eventHandler);"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "subscribe-to-audio-and-video-streams-1",
        children: "Subscribe to audio and video streams"
      }), _jsx(_components.p, {
        children: "Subscribe to all audio streams and high-quality video streams in the channel."
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
          icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Subscribe to audio"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "agoraMediaRtcRecorder."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "subscribeAllAudio"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line"
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Subscribe to video"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "VideoSubscriptionOptions options "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " VideoSubscriptionOptions"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "options."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setEncodedFrameOnly"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "false"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ");"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "options."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setType"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(Constants.VideoStreamType.VIDEO_STREAM_HIGH);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "agoraMediaRtcRecorder."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "subscribeAllVideo"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(options);"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "configure-the-recorder",
        children: "Configure the recorder"
      }), _jsx(_components.p, {
        children: "Set the resolution, frame rate, duration, and file path for the recording."
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
          icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Configure the recorder"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "MediaRecorderConfiguration recorderConfig "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " MediaRecorderConfiguration"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorderConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setWidth"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(width "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "!="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " 0"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " ?"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " width "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " recorderConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getVideo"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "()."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getWidth"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "());"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorderConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setHeight"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(height "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "!="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " 0"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " ?"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " height "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " recorderConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getVideo"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "()."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getHeight"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "());"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorderConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setFps"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(recorderConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getVideo"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "()."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getFps"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "());"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorderConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setMaxDurationMs"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(recorderConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getMaxDuration"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "() "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " 1000"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ");"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorderConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setStoragePath"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(recorderConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getRecorderPath"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "());"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorderConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setSampleRate"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(recorderConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getAudio"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "()."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getSampleRate"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "());"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorderConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setChannelNum"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(recorderConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getAudio"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "()."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getNumOfChannels"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "());"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorderConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setStreamType"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(Constants.MediaRecorderStreamType.STREAM_TYPE_BOTH);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorderConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setVideoSourceType"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(Constants.VideoSourceType.VIDEO_SOURCE_CAMERA_SECONDARY);"
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
                children: "agoraMediaRtcRecorder."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setRecorderConfig"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(recorderConfig);"
              })]
            })]
          })
        })
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["Ensure that the ", _jsx(_components.code, {
              children: "storagePath"
            }), " exists before you start recording. If the directory does not exist, the recording fails."]
          })
        })
      }), _jsx(_components.h3, {
        id: "join-the-channel-and-start-recording-1",
        children: "Join the channel and start recording"
      }), _jsx(_components.p, {
        children: "Use the following code to join a channel and begin recording:"
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
          icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "agoraMediaRtcRecorder."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "joinChannel"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    recorderConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getToken"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(),"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    recorderConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getChannelName"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(),"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    recorderConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getUserId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "()"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ");"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "agoraMediaRtcRecorder."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "startRecording"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "stop-and-release-resources",
        children: "Stop and release resources"
      }), _jsx(_components.p, {
        children: "Unsubscribe from streams, stop the recording, and release resources."
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
          icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "agoraMediaRtcRecorder."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "unsubscribeAllAudio"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "agoraMediaRtcRecorder."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "unsubscribeAllVideo"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "agoraMediaRtcRecorder."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "stopRecording"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "agoraMediaRtcRecorder."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "unregisterRecorderEventHandler"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(eventHandler);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "agoraMediaRtcRecorder."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "leaveChannel"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "agoraMediaRtcRecorder."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "release"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "agoraService."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "release"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            })]
          })
        })
      }), _jsx(_components.p, {
        children: "The recorded MP4 file is saved to the storage path you specified in the recording configuration."
      }), _jsx(_components.h3, {
        id: "complete-sample-code-1",
        children: "Complete sample code"
      }), _jsxs("details", {
        children: [_jsx("summary", {
          children: "Complete sample code for On-Premise Recording"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Initialize Service resources and set log"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "AgoraService agoraService "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " new"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " AgoraService"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "AgoraServiceConfiguration config "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " new"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " AgoraServiceConfiguration"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setEnableAudioDevice"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "false"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setEnableAudioProcessor"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "true"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setEnableVideo"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "true"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setAppId"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(recorderConfig."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getAppId"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "());"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setUseStringUid"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(recorderConfig."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "isUseStringUid"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "());"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "LogConfig logConfig "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " new"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " LogConfig"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "logConfig."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setFileSizeInKB"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "1024"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " *"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 20"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "logConfig."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setFilePath"
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
                  children: '"logs/agora_logs/agorasdk.log"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setLogConfig"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(logConfig);"
                })]
              }), `
`, _jsxs(_components.span, {
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
                  children: " ret "
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
                  children: " agoraService."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "initialize"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(config);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Create recorder"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "AgoraMediaRtcRecorder agoraMediaRtcRecorder "
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
                  children: " agoraService."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "createMediaRtcRecorder"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Initialize recorder"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "boolean"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " enableMix "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " false"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraMediaRtcRecorder."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "initialize"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(agoraService, enableMix);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Register callbacks"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "IAgoraMediaRtcRecorderEventHandler eventHandler "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " new"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " IAgoraMediaRtcRecorderEventHandler"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "() {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    @"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "Override"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    public"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " onConnected"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(String "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "channelId"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", String "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "userId"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ") {"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    }"
                })
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
                  children: "    @"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "Override"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    public"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " onDisconnected"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(String "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "channelId"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", String "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "userId"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", Constants.ConnectionChangedReasonType "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "reason"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ") {"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "    // Other event callbacks"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "};"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraMediaRtcRecorder."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "registerRecorderEventHandler"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(eventHandler);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Subscribe to streams"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraMediaRtcRecorder."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "subscribeAllAudio"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "VideoSubscriptionOptions options "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " new"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " VideoSubscriptionOptions"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "options."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setEncodedFrameOnly"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "false"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "options."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setType"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(Constants.VideoStreamType.VIDEO_STREAM_HIGH);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraMediaRtcRecorder."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "subscribeAllVideo"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(options);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set recording-related configurations"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "MediaRecorderConfiguration mediaRecorderConfiguration "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " new"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " MediaRecorderConfiguration"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "mediaRecorderConfiguration."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setWidth"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(width "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "!="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ?"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " width "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " recorderConfig."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getVideo"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getWidth"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "());"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "mediaRecorderConfiguration."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setHeight"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(height "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "!="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ?"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " height "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " recorderConfig."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getVideo"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getHeight"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "());"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "mediaRecorderConfiguration."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setFps"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(recorderConfig."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getVideo"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getFps"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "());"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "mediaRecorderConfiguration."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setStoragePath"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(recorderConfig."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getRecorderPath"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "());"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "mediaRecorderConfiguration."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setSampleRate"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(recorderConfig."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getAudio"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getSampleRate"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "());"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "mediaRecorderConfiguration."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setChannelNum"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(recorderConfig."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getAudio"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getNumOfChannels"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "());"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "mediaRecorderConfiguration."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setStreamType"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(Constants.MediaRecorderStreamType.STREAM_TYPE_BOTH);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "mediaRecorderConfiguration."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setMaxDurationMs"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(recorderConfig."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getMaxDuration"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "() "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "*"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 1000"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraMediaRtcRecorder."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setRecorderConfig"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(mediaRecorderConfiguration);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Join channel and start recording"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraMediaRtcRecorder."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "joinChannel"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(recorderConfig."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getToken"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(),"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                recorderConfig."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getChannelName"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(),"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                recorderConfig."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getUserId"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "());"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraMediaRtcRecorder."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "startRecording"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Stop recording, clean up resources, and leave channel"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraMediaRtcRecorder."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "unsubscribeAllAudio"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraMediaRtcRecorder."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "unsubscribeAllVideo"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraMediaRtcRecorder."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "stopRecording"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraMediaRtcRecorder."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "unregisterRecorderEventHandler"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(eventHandler);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraMediaRtcRecorder."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "leaveChannel"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraMediaRtcRecorder."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "release"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraService."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "release"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              })]
            })
          })
        })]
      }), _jsx(_components.h2, {
        id: "test-the-project-1",
        children: "Test the project"
      }), _jsxs(_components.p, {
        children: ["Agora provides an open source sample project on GitHub for your reference. Download or view the ", _jsx(_components.a, {
          href: "https://github.com/AgoraIO-Extensions/Agora-Recording-Java-SDK",
          children: "Agora Recording Java SDK"
        }), " project for a more detailed example."]
      }), _jsx(_components.p, {
        children: "Follow these steps to compile, configure, and run the Agora recording sample using the Spring Boot project."
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Compile the project"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["Open a terminal and navigate to the ", _jsx(_components.code, {
              children: "Examples-Mvn"
            }), " directory. Run the following command to build the project:"]
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
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "mvn"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " clean"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " package"
                  })]
                })
              })
            })
          }), `
`, _jsxs(_components.p, {
            children: ["After the build completes successfully, the output JAR file appears in the ", _jsx(_components.code, {
              children: "target/generated"
            }), " directory as ", _jsx(_components.code, {
              children: "agora-example.jar"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Configure your App ID and token"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["In the ", _jsx(_components.code, {
              children: "Examples-Mvn"
            }), " directory, create a ", _jsx(_components.code, {
              children: ".keys"
            }), " file and add your Agora credentials:"]
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
                    children: "appId"
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
                    children: "YOUR_APP_ID"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "token"
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
                    children: "YOUR_TOKEN"
                  })]
                })]
              })
            })
          }), `
`, _jsxs(_components.p, {
            children: ["Replace ", _jsx(_components.code, {
              children: "YOUR_APP_ID"
            }), " and ", _jsx(_components.code, {
              children: "YOUR_TOKEN"
            }), " with your actual values."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Prepare native libraries"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["Ensure that the ", _jsx(_components.code, {
              children: "libs/native/linux/x86_64/"
            }), " directory contains the following ", _jsx(_components.code, {
              children: ".so"
            }), " files:"]
          }), `
`, _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "libagora_rtc_sdk.so"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "librecording.so"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "libagora-fdkaac.so"
              })
            }), `
`, _jsx(_components.li, {
              children: _jsx(_components.code, {
                children: "libaosl.so"
              })
            }), `
`]
          }), `
`, _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsx(_components.p, {
                children: "These libraries must be available at runtime. If any are missing, the application will fail to load the native dependencies."
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Run the sample application"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["From the ", _jsx(_components.code, {
              children: "Examples-Mvn"
            }), " directory, run the following command:"]
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
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "LD_LIBRARY_PATH"
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
                    children: '"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "$LD_LIBRARY_PATH"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: ':libs/native/linux/x86_64"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " \\"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "java "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "-Dserver.port=18080"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " -jar"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " target/agora-example.jar"
                  })]
                })]
              })
            })
          }), `
`, _jsxs(_components.p, {
            children: ["The Spring Boot server starts and listens on port ", _jsx(_components.code, {
              children: "18080"
            }), ". To use a different port, update the ", _jsx(_components.code, {
              children: "-Dserver.port"
            }), " parameter."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Start and stop a recording session"
            })
          }), `
`, _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: _jsx(_components.strong, {
                  children: "Start recording"
                })
              }), `
`, _jsx(_components.p, {
                children: "Send an HTTP request to the following endpoint:"
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
                        children: "http://"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "<your-server-ip>:18080/api/recording/start?configFileName=mix_stream_recorder_audio_video_water_marks.json"
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
                children: _jsx(_components.strong, {
                  children: "Stop recording"
                })
              }), `
`, _jsxs(_components.p, {
                children: ["Replace ", _jsx(_components.code, {
                  children: "<taskId>"
                }), " with the value returned from the start response:"]
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
                        children: "http://"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "<your-server-ip>:18080/api/recording/stop?taskId=<taskId>"
                      })]
                    })
                  })
                })
              }), `
`]
            }), `
`]
          }), `
`, _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsxs(_components.p, {
                children: ["Place all configuration files (such as ", _jsx(_components.code, {
                  children: "mix_stream_recorder_audio_video_water_marks.json"
                }), ") in the ", _jsx(_components.code, {
                  children: "Examples-Mvn/src/main/resources/"
                }), " directory."]
              })
            })
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "reference-1",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsx(_components.h3, {
        id: "api-reference-1",
        children: "API reference"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#agoraservice",
            children: _jsx(_components.code, {
              children: "AgoraService"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#agoraserviceconfiguration",
            children: _jsx(_components.code, {
              children: "AgoraServiceConfiguration"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#logconfig",
            children: _jsx(_components.code, {
              children: "LogConfig"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#initialize",
            children: _jsx(_components.code, {
              children: "initialize"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#agoramediartcrecorder",
            children: _jsx(_components.code, {
              children: "AgoraMediaRtcRecorder"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#registerrecordereventhandler",
            children: _jsx(_components.code, {
              children: "registerRecorderEventHandler"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#subscribeallaudio",
            children: _jsx(_components.code, {
              children: "subscribeAllAudio"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#subscribeallvideo",
            children: _jsx(_components.code, {
              children: "subscribeAllVideo"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#setrecorderconfig",
            children: _jsx(_components.code, {
              children: "setRecorderConfig"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#joinchannel",
            children: _jsx(_components.code, {
              children: "joinChannel"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#startrecording",
            children: _jsx(_components.code, {
              children: "startRecording"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#unsubscribeallaudio",
            children: _jsx(_components.code, {
              children: "unsubscribeAllAudio"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#unsubscribeallvideo",
            children: _jsx(_components.code, {
              children: "unsubscribeAllVideo"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#stoprecording",
            children: _jsx(_components.code, {
              children: "stopRecording"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#unregisterrecordereventhandler",
            children: _jsx(_components.code, {
              children: "unregisterRecorderEventHandler"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#leavechannel",
            children: _jsx(_components.code, {
              children: "leaveChannel"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#release",
            children: _jsx(_components.code, {
              children: "release"
            })
          })
        }), `
`]
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
