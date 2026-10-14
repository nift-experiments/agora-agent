import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How do I handle issues when integrating the Signaling SDK and Video/Voice SDK simultaneously?"
};
export let _markdown = `

When integrating Signaling SDK version 2.2.0 and above with Video/Voice SDK version 4.5.0 or higher, the following errors may appear in the IDE:

<CodeBlockTabs defaultValue="Android">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="Android">
      Android
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="iOS/macOS">
      iOS/macOS
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="Android">
    \`\`\`java  tabGroup="platform"
    com.android.builder.merge.DuplicateRelativeFileException: More than one file was found with OS independent path 'lib/x86/libaosl.so'
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="iOS/macOS">
    \`\`\`bash  tabGroup="platform"
    Unexpected duplicate tasks
    Multiple commands produce <your_app_build_path>/Contents/Frameworks/aosl.framework/Versions/A'

    The 'XXX' target has frameworks with conflicting names: aosl.xcframework.
    \`\`\`
  </CodeBlockTab>
</CodeBlockTabs>

## Why this happens [#why-this-happens]

Both Signaling SDK versions 2.2.0 and above and Video/Voice SDK versions 4.5.0 and above use the same library:

* **Android**: \`libaosl.so\`
* **iOS/macOS**: \`aosl.xcframework\`
* **Windows**: \`libaosl.dll\`

As a result, the IDE detects multiple files with the same path during the build process, leading to errors.

## Solution [#solution]

Follow these steps to resolve the issue:

### Signaling version 2.2.8 or later [#signaling-version-228-or-later]

For Signaling SDK version 2.2.8 or later, compare the versions of the \`aosl\` libraries used in the Video/Voice SDK and Signaling SDK. Choose the subsequent operations based on the two.

<CalloutContainer type="info">
  <CalloutDescription>
    You can find the \`aosl\` library version for the SDKs in the [RTC SDK](/en/realtime-media/rtc/reference/release-notes) or [Voice SDK](/en/realtime-media/rtc/reference/release-notes) release notes and [Signaling release notes](/en/realtime-media/rtm/reference/release-notes).
  </CalloutDescription>
</CalloutContainer>

<Tabs defaultValue="android" groupId="platform">
  <TabsList>
    <TabsTrigger value="android">
      Android
    </TabsTrigger>

    <TabsTrigger value="ios">
      iOS/macOS
    </TabsTrigger>
  </TabsList>

  <TabsContent value="android">
    * If the Signaling \`aosl\` version is lower, integrate the \`lite\` SDK:

      \`\`\`text
      dependencies {
          // If you are using RTM SDK version 2.2.8 or later
          // Replace x.y.z with the specific SDK version number, such as 2.2.8
          // You can obtain the latest version number from the release notes.
          implementation 'io.agora.rtm:rtm-sdk-lite:2.2.8'
      }
      \`\`\`

    * If the Signaling \`aosl\` version is higher, integrate the latest \`aosl\` component and use \`pickFirst\` to ensure the higher-version \`aosl\` library is prioritized during the build process.

    <Tabs defaultValue="groovy" groupId="build-script">
      <TabsList>
        <TabsTrigger value="groovy">
          Groovy
        </TabsTrigger>

        <TabsTrigger value="kotlin">
          Kotlin DSL
        </TabsTrigger>
      </TabsList>

      <TabsContent value="groovy">
        * **Android Gradle Plugin \\< 7.x**

          \`\`\`text
          android {
              packagingOptions {
                  pickFirst 'lib/**/libaosl.so'
              }
          }

          dependencies {
              implementation 'io.agora.infra:aosl:x.y.z'
              // implementation RTM sdk
              // implementation RTC sdk
          }
          \`\`\`

          * **Android Gradle Plugin 7.x or later (Recommended)**

            \`\`\`text
            android {
                packaging {
                    jniLibs {
                        pickFirsts += ["lib/**/libaosl.so"]
                    }
                }
            }

            dependencies {
                implementation 'io.agora.infra:aosl:x.y.z'
                // implementation RTM sdk
                // implementation RTC sdk
            }
            \`\`\`
      </TabsContent>

      <TabsContent value="kotlin">
        * **Android Gradle Plugin \\< 7.x**

          \`\`\`kotlin
          android {
              packagingOptions {
                  pickFirst("lib/**/libaosl.so")
              }
          }

          dependencies {
              implementation("io.agora.infra:aosl:x.y.z")
              // implementation RTM sdk
              // implementation RTC sdk
          }
          \`\`\`

          * **Android Gradle Plugin 7.x or later (Recommended)**

            \`\`\`kotlin
            android {
                packaging {
                    jniLibs {
                        pickFirsts += setOf("lib/**/libaosl.so")
                    }
                }
            }

            dependencies {
                implementation("io.agora.infra:aosl:x.y.z")
                // implementation RTM sdk
                // implementation RTC sdk
            }
            \`\`\`
      </TabsContent>
    </Tabs>
  </TabsContent>

  <TabsContent value="ios">
    * If the Signaling \`aosl\` version is lower, integrate the \`lite\` SDK:

      \`\`\`ruby
      platform :ios, '11.0'
      target 'Your App' do
        # If you are using RTM SDK version 2.2.8 or later
        # Replace x.y.z with the specific SDK version number, such as 2.2.8
        # You can obtain the latest version number from the release notes.
        pod 'AgoraRtm', 'x.y.z', :subspecs => ['RtmKit']
      end
      \`\`\`

    * If the Signaling \`aosl\` version is higher, add the following script to your \`Podfile\`:

    <CalloutContainer type="info">
      <CalloutDescription>
        The following code uses the RTC SDK with the package name \`AgoraRtcEngine_iOS\` as an example. Use the actual platform and version for your integration.
      </CalloutDescription>
    </CalloutContainer>

    \`\`\`ruby
    pre_install do |installer|
      # Define the path to the RTC framework
      rtc_pod_path = File.join(installer.sandbox.root, 'AgoraRtcEngine_iOS')

      # Full path to aosl.xcframework
      aosl_xcframework_path = File.join(rtc_pod_path, 'aosl.xcframework')

      # Check if the file exists, and delete it if so
      if File.exist?(aosl_xcframework_path)
        puts "Deleting aosl.xcframework from #{aosl_xcframework_path}"
        FileUtils.rm_rf(aosl_xcframework_path)
      else
        puts "aosl.xcframework not found, skipping deletion."
      end
    end
    \`\`\`
  </TabsContent>
</Tabs>

### Signaling version 2.2.2 to 2.2.6 [#signaling-version-222-to-226]

For Signaling SDK versions between 2.2.2 and 2.2.6, compare the versions of the \`aosl\` libraries used in the Video/Voice SDK and Signaling SDK, then delete the library file with the lower version.

<CalloutContainer type="info">
  <CalloutDescription>
    You can find the \`aosl\` library version for the SDKs in the [RTC SDK](/en/realtime-media/rtc/reference/release-notes) or [Voice SDK](/en/realtime-media/rtc/reference/release-notes) release notes and [Signaling release notes](/en/realtime-media/rtm/reference/release-notes).
  </CalloutDescription>
</CalloutContainer>

If the version of the \`aosl\` library included in the Video/Voice SDK package is lower, delete the outdated library file based on the target platform:

* **Android**: Delete the older-version \`libaosl.so\` file from the SDK package.
* **iOS/macOS**: Delete the older-version \`aosl.xcframework\` file from the SDK package.
* **Windows**: Delete the older-version \`libaosl.dll\` file from the SDK package.

If the version of the \`aosl\` library in the Signaling SDK package is lower, integrate the lite SDK, then clean and rebuild your project to resolve the library conflict.

<CodeBlockTabs defaultValue="Android">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="Android">
      Android
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="iOS/macOS">
      iOS/macOS
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="Android">
    \`\`\`text  tabGroup="platform"
    // ...
    dependencies {
        // If you are using RTM SDK version 2.2.2 to 2.2.6
        // Replace x.y.z with the specific SDK version number, such as 2.2.2
        // You can obtain the latest version number from the release notes.
        implementation 'io.agora:agora-rtm-lite:x.y.z'
    }
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="iOS/macOS">
    \`\`\`ruby  tabGroup="platform"
    platform :ios, '11.0'
    target 'Your App' do
      # If you are using RTM SDK version 2.2.2 to 2.2.6
      # Replace x.y.z with the specific SDK version number, such as 2.2.2
      # You can obtain the latest version number from the release notes.
      pod 'AgoraRtm', 'x.y.z', :subspecs => ['RtmKit']
    end
    \`\`\`
  </CodeBlockTab>
</CodeBlockTabs>

### Signaling versions prior to 2.2.2 [#signaling-versions-prior-to-222]

If you are using a Signaling SDK version prior to 2.2.2, refer to the following solutions based on your platform.

<Tabs defaultValue="android" groupId="platform">
  <TabsList>
    <TabsTrigger value="android">
      Android
    </TabsTrigger>

    <TabsTrigger value="ios">
      iOS/macOS
    </TabsTrigger>

    <TabsTrigger value="flutter">
      Flutter
    </TabsTrigger>
  </TabsList>

  <TabsContent value="android">
    * Using CDN

      1. Manually delete the following files from the SDK package:

      * \`lib/x86/libaosl.so\`
      * \`lib/x86_64/libaosl.so\`
      * \`lib/armeabi-v7a/libaosl.so\`
      * \`lib/arm64-v8a/libaosl.so\`

      1. Rebuild the project

    * Using Maven

      1. Add a \`packagingOptions\` block to the \`android\` block of your \`build.gradle\` file to ensure the first matching native library is prioritized during the build process:

         <Tabs defaultValue="groovy" groupId="build-script">
           <TabsList>
             <TabsTrigger value="groovy">
               Groovy
             </TabsTrigger>

             <TabsTrigger value="kotlin">
               Kotlin DSL
             </TabsTrigger>
           </TabsList>

           <TabsContent value="groovy">
             * **Android Gradle Plugin \\< 7.x**

               \`\`\`text
               android {
                   packagingOptions {
                       pickFirst 'lib/x86/libaosl.so'
                       pickFirst 'lib/x86_64/libaosl.so'
                       pickFirst 'lib/armeabi-v7a/libaosl.so'
                       pickFirst 'lib/arm64-v8a/libaosl.so'
                   }
               }
               \`\`\`

               * **Android Gradle Plugin 7.x or later (Recommended)**

                 \`\`\`text
                 android {
                     packaging {
                         jniLibs {
                             pickFirsts += [
                                 "lib/x86/libaosl.so",
                                 "lib/x86_64/libaosl.so",
                                 "lib/armeabi-v7a/libaosl.so",
                                 "lib/arm64-v8a/libaosl.so"
                             ]
                         }
                     }
                 }
                 \`\`\`
           </TabsContent>

           <TabsContent value="kotlin">
             * **Android Gradle Plugin \\< 7.x**

               \`\`\`kotlin
               android {
                   packagingOptions {
                       pickFirst("lib/x86/libaosl.so")
                       pickFirst("lib/x86_64/libaosl.so")
                       pickFirst("lib/armeabi-v7a/libaosl.so")
                       pickFirst("lib/arm64-v8a/libaosl.so")
                   }
               }
               \`\`\`

               * **Android Gradle Plugin 7.x or later (Recommended)**

                 \`\`\`kotlin
                 android {
                     packaging {
                         jniLibs {
                             pickFirsts += setOf(
                                 "lib/x86/libaosl.so",
                                 "lib/x86_64/libaosl.so",
                                 "lib/armeabi-v7a/libaosl.so",
                                 "lib/arm64-v8a/libaosl.so"
                             )
                         }
                     }
                 }
                 \`\`\`
           </TabsContent>
         </Tabs>

      2. After the Gradle files are synchronized, rebuild the project.
  </TabsContent>

  <TabsContent value="ios">
    * Using CDN

      1. Manually delete the \`libs/aosl.xcframework\` file from the SDK package.

      2. Rebuild the project.

    * Using Cocoapods

      1. Add the following script to the end of your project \`podfile\`:

         \`\`\`ruby
         pre_install do |installer|
           # Define the path to the AgoraRtm framework
           rtm_pod_path = File.join(installer.sandbox.root, 'AgoraRtm')

           # The full path to \`aosl.xcframework\`
           aosl_xcframework_path = File.join(rtm_pod_path, 'aosl.xcframework')

           # Check if the file exists; delete it if it does.
           if File.exist?(aosl_xcframework_path)
             puts "Deleting aosl.xcframework from #{aosl_xcframework_path}"
             FileUtils.rm_rf(aosl_xcframework_path)
           else
             puts "aosl.xcframework not found, skipping deletion."
           end
         end
         \`\`\`

      2. Run \`pod install\` to re-integrate the Signaling and Video/Voice SDK.

      3. Rebuild the project.
  </TabsContent>

  <TabsContent value="flutter">
    Select the solution based on your target platform:

    * **Android**

      1. Add the dependency to the \`build.gradle\` file in the project root directory:

         \`\`\`text
         dependencies {
             api 'io.agora.infra:aosl:1.2.13'
             // ...
         }
         \`\`\`

      2. When integrating through Maven, add a \`packagingOptions\` block to the \`android\` block of your \`build.gradle\` file to ensure the first matching native library is prioritized during the build process:

         <Tabs defaultValue="groovy" groupId="build-script">
           <TabsList>
             <TabsTrigger value="groovy">
               Groovy
             </TabsTrigger>

             <TabsTrigger value="kotlin">
               Kotlin DSL
             </TabsTrigger>
           </TabsList>

           <TabsContent value="groovy">
             * **Android Gradle Plugin \\< 7.x**

               \`\`\`text
               android {
                   packagingOptions {
                       pickFirst 'lib/x86/libaosl.so'
                       pickFirst 'lib/x86_64/libaosl.so'
                       pickFirst 'lib/armeabi-v7a/libaosl.so'
                       pickFirst 'lib/arm64-v8a/libaosl.so'
                   }
               }
               \`\`\`

               * **Android Gradle Plugin 7.x or later (Recommended)**

                 \`\`\`text
                 android {
                     packaging {
                         jniLibs {
                             pickFirsts += [
                                 "lib/x86/libaosl.so",
                                 "lib/x86_64/libaosl.so",
                                 "lib/armeabi-v7a/libaosl.so",
                                 "lib/arm64-v8a/libaosl.so"
                             ]
                         }
                     }
                 }
                 \`\`\`
           </TabsContent>

           <TabsContent value="kotlin">
             * **Android Gradle Plugin \\< 7.x**

               \`\`\`kotlin
               android {
                   packagingOptions {
                       pickFirst("lib/x86/libaosl.so")
                       pickFirst("lib/x86_64/libaosl.so")
                       pickFirst("lib/armeabi-v7a/libaosl.so")
                       pickFirst("lib/arm64-v8a/libaosl.so")
                   }
               }
               \`\`\`

               * **Android Gradle Plugin 7.x or later (Recommended)**

                 \`\`\`kotlin
                 android {
                     packaging {
                         jniLibs {
                             pickFirsts += setOf(
                                 "lib/x86/libaosl.so",
                                 "lib/x86_64/libaosl.so",
                                 "lib/armeabi-v7a/libaosl.so",
                                 "lib/arm64-v8a/libaosl.so"
                             )
                         }
                     }
                 }
                 \`\`\`
           </TabsContent>
         </Tabs>

      3. After the Gradle files are synchronized, rebuild the project.

    * **iOS**

      1. When integrating via CocoaPods, add the following script to the end of your project's \`Podfile\`:

         \`\`\`ruby
         pre_install do |installer|
           # Define the path to the AgoraRtm framework
           rtm_pod_path = File.join(installer.sandbox.root, 'AgoraRtm')

           # The full path to \`aosl.xcframework\`
           aosl_xcframework_path = File.join(rtm_pod_path, 'aosl.xcframework')

           # Check if the file exists; delete it if it does.
           if File.exist?(aosl_xcframework_path)
             puts "Deleting aosl.xcframework from #{aosl_xcframework_path}"
             FileUtils.rm_rf(aosl_xcframework_path)
           else
             puts "aosl.xcframework not found, skipping deletion."
           end
         end
         \`\`\`

      2. Run \`pod install\` to re-integrate the Signaling and Video/Voice SDK.

      3. Rebuild the project.
  </TabsContent>
</Tabs>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "When integrating Signaling SDK version 2.2.0 and above with Video/Voice SDK version 4.5.0 or higher, the following errors may appear in the IDE:"
  }, {
    heading: "why-this-happens",
    content: "Both Signaling SDK versions 2.2.0 and above and Video/Voice SDK versions 4.5.0 and above use the same library:"
  }, {
    heading: "why-this-happens",
    content: "**Android**: `libaosl.so`"
  }, {
    heading: "why-this-happens",
    content: "**iOS/macOS**: `aosl.xcframework`"
  }, {
    heading: "why-this-happens",
    content: "**Windows**: `libaosl.dll`"
  }, {
    heading: "why-this-happens",
    content: "As a result, the IDE detects multiple files with the same path during the build process, leading to errors."
  }, {
    heading: "solution",
    content: "Follow these steps to resolve the issue:"
  }, {
    heading: "signaling-version-228-or-later",
    content: "For Signaling SDK version 2.2.8 or later, compare the versions of the `aosl` libraries used in the Video/Voice SDK and Signaling SDK. Choose the subsequent operations based on the two."
  }, {
    heading: "signaling-version-228-or-later",
    content: "You can find the `aosl` library version for the SDKs in the RTC SDK or Voice SDK release notes and Signaling release notes."
  }, {
    heading: "signaling-version-228-or-later",
    content: "If the Signaling `aosl` version is lower, integrate the `lite` SDK:"
  }, {
    heading: "signaling-version-228-or-later",
    content: "If the Signaling `aosl` version is higher, integrate the latest `aosl` component and use `pickFirst` to ensure the higher-version `aosl` library is prioritized during the build process."
  }, {
    heading: "signaling-version-228-or-later",
    content: "**Android Gradle Plugin \\< 7.x**"
  }, {
    heading: "signaling-version-228-or-later",
    content: "**Android Gradle Plugin 7.x or later (Recommended)**"
  }, {
    heading: "signaling-version-228-or-later",
    content: "**Android Gradle Plugin \\< 7.x**"
  }, {
    heading: "signaling-version-228-or-later",
    content: "**Android Gradle Plugin 7.x or later (Recommended)**"
  }, {
    heading: "signaling-version-228-or-later",
    content: "If the Signaling `aosl` version is lower, integrate the `lite` SDK:"
  }, {
    heading: "signaling-version-228-or-later",
    content: "If the Signaling `aosl` version is higher, add the following script to your `Podfile`:"
  }, {
    heading: "signaling-version-228-or-later",
    content: "The following code uses the RTC SDK with the package name `AgoraRtcEngine_iOS` as an example. Use the actual platform and version for your integration."
  }, {
    heading: "signaling-version-222-to-226",
    content: "For Signaling SDK versions between 2.2.2 and 2.2.6, compare the versions of the `aosl` libraries used in the Video/Voice SDK and Signaling SDK, then delete the library file with the lower version."
  }, {
    heading: "signaling-version-222-to-226",
    content: "You can find the `aosl` library version for the SDKs in the RTC SDK or Voice SDK release notes and Signaling release notes."
  }, {
    heading: "signaling-version-222-to-226",
    content: "If the version of the `aosl` library included in the Video/Voice SDK package is lower, delete the outdated library file based on the target platform:"
  }, {
    heading: "signaling-version-222-to-226",
    content: "**Android**: Delete the older-version `libaosl.so` file from the SDK package."
  }, {
    heading: "signaling-version-222-to-226",
    content: "**iOS/macOS**: Delete the older-version `aosl.xcframework` file from the SDK package."
  }, {
    heading: "signaling-version-222-to-226",
    content: "**Windows**: Delete the older-version `libaosl.dll` file from the SDK package."
  }, {
    heading: "signaling-version-222-to-226",
    content: "If the version of the `aosl` library in the Signaling SDK package is lower, integrate the lite SDK, then clean and rebuild your project to resolve the library conflict."
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "If you are using a Signaling SDK version prior to 2.2.2, refer to the following solutions based on your platform."
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "Using CDN"
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "Manually delete the following files from the SDK package:"
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "`lib/x86/libaosl.so`"
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "`lib/x86_64/libaosl.so`"
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "`lib/armeabi-v7a/libaosl.so`"
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "`lib/arm64-v8a/libaosl.so`"
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "Rebuild the project"
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "Using Maven"
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "Add a `packagingOptions` block to the `android` block of your `build.gradle` file to ensure the first matching native library is prioritized during the build process:"
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "**Android Gradle Plugin \\< 7.x**"
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "**Android Gradle Plugin 7.x or later (Recommended)**"
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "**Android Gradle Plugin \\< 7.x**"
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "**Android Gradle Plugin 7.x or later (Recommended)**"
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "After the Gradle files are synchronized, rebuild the project."
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "Using CDN"
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "Manually delete the `libs/aosl.xcframework` file from the SDK package."
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "Rebuild the project."
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "Using Cocoapods"
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "Add the following script to the end of your project `podfile`:"
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "Run `pod install` to re-integrate the Signaling and Video/Voice SDK."
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "Rebuild the project."
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "Select the solution based on your target platform:"
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "**Android**"
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "Add the dependency to the `build.gradle` file in the project root directory:"
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "When integrating through Maven, add a `packagingOptions` block to the `android` block of your `build.gradle` file to ensure the first matching native library is prioritized during the build process:"
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "**Android Gradle Plugin \\< 7.x**"
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "**Android Gradle Plugin 7.x or later (Recommended)**"
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "**Android Gradle Plugin \\< 7.x**"
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "**Android Gradle Plugin 7.x or later (Recommended)**"
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "After the Gradle files are synchronized, rebuild the project."
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "**iOS**"
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "When integrating via CocoaPods, add the following script to the end of your project's `Podfile`:"
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "Run `pod install` to re-integrate the Signaling and Video/Voice SDK."
  }, {
    heading: "signaling-versions-prior-to-222",
    content: "Rebuild the project."
  }],
  headings: [{
    id: "why-this-happens",
    content: "Why this happens"
  }, {
    id: "solution",
    content: "Solution"
  }, {
    id: "signaling-version-228-or-later",
    content: "Signaling version 2.2.8 or later"
  }, {
    id: "signaling-version-222-to-226",
    content: "Signaling version 2.2.2 to 2.2.6"
  }, {
    id: "signaling-versions-prior-to-222",
    content: "Signaling versions prior to 2.2.2"
  }]
};
export let toc = [{
  depth: 2,
  url: "#why-this-happens",
  title: _jsx(_Fragment, {
    children: "Why this happens"
  })
}, {
  depth: 2,
  url: "#solution",
  title: _jsx(_Fragment, {
    children: "Solution"
  })
}, {
  depth: 3,
  url: "#signaling-version-228-or-later",
  title: _jsx(_Fragment, {
    children: "Signaling version 2.2.8 or later"
  })
}, {
  depth: 3,
  url: "#signaling-version-222-to-226",
  title: _jsx(_Fragment, {
    children: "Signaling version 2.2.2 to 2.2.6"
  })
}, {
  depth: 3,
  url: "#signaling-versions-prior-to-222",
  title: _jsx(_Fragment, {
    children: "Signaling versions prior to 2.2.2"
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
  }, { CalloutContainer, CalloutDescription, CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger, Tabs, TabsContent, TabsList, TabsTrigger } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CodeBlockTab)
    _missingMdxReference("CodeBlockTab", true);
  if (!CodeBlockTabs)
    _missingMdxReference("CodeBlockTabs", true);
  if (!CodeBlockTabsList)
    _missingMdxReference("CodeBlockTabsList", true);
  if (!CodeBlockTabsTrigger)
    _missingMdxReference("CodeBlockTabsTrigger", true);
  if (!Tabs)
    _missingMdxReference("Tabs", true);
  if (!TabsContent)
    _missingMdxReference("TabsContent", true);
  if (!TabsList)
    _missingMdxReference("TabsList", true);
  if (!TabsTrigger)
    _missingMdxReference("TabsTrigger", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "When integrating Signaling SDK version 2.2.0 and above with Video/Voice SDK version 4.5.0 or higher, the following errors may appear in the IDE:"
    }), `
`, _jsxs(CodeBlockTabs, {
      defaultValue: "Android",
      children: [_jsxs(CodeBlockTabsList, {
        children: [_jsx(CodeBlockTabsTrigger, {
          value: "Android",
          children: "Android"
        }), _jsx(CodeBlockTabsTrigger, {
          value: "iOS/macOS",
          children: "iOS/macOS"
        })]
      }), _jsx(CodeBlockTab, {
        value: "Android",
        children: _jsx(_Fragment, {
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "com.android.builder.merge.DuplicateRelativeFileException"
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
                  children: " More than one file was found with OS independent path "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'lib/x86/libaosl.so'"
                })]
              })
            })
          })
        })
      }), _jsx(CodeBlockTab, {
        value: "iOS/macOS",
        children: _jsx(_Fragment, {
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
                  children: "Unexpected"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " duplicate"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " tasks"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Multiple"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " commands"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " produce"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " <"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "your_app_build_pat"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "h"
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
                  children: "/Contents/Frameworks/aosl.framework/Versions/A'"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "The 'XXX' target has frameworks with conflicting names: aosl.xcframework."
                })
              })]
            })
          })
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "why-this-happens",
      children: "Why this happens"
    }), `
`, _jsx(_components.p, {
      children: "Both Signaling SDK versions 2.2.0 and above and Video/Voice SDK versions 4.5.0 and above use the same library:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Android"
        }), ": ", _jsx(_components.code, {
          children: "libaosl.so"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "iOS/macOS"
        }), ": ", _jsx(_components.code, {
          children: "aosl.xcframework"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Windows"
        }), ": ", _jsx(_components.code, {
          children: "libaosl.dll"
        })]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "As a result, the IDE detects multiple files with the same path during the build process, leading to errors."
    }), `
`, _jsx(_components.h2, {
      id: "solution",
      children: "Solution"
    }), `
`, _jsx(_components.p, {
      children: "Follow these steps to resolve the issue:"
    }), `
`, _jsx(_components.h3, {
      id: "signaling-version-228-or-later",
      children: "Signaling version 2.2.8 or later"
    }), `
`, _jsxs(_components.p, {
      children: ["For Signaling SDK version 2.2.8 or later, compare the versions of the ", _jsx(_components.code, {
        children: "aosl"
      }), " libraries used in the Video/Voice SDK and Signaling SDK. Choose the subsequent operations based on the two."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["You can find the ", _jsx(_components.code, {
            children: "aosl"
          }), " library version for the SDKs in the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/reference/release-notes",
            children: "RTC SDK"
          }), " or ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/reference/release-notes",
            children: "Voice SDK"
          }), " release notes and ", _jsx(_components.a, {
            href: "/en/realtime-media/rtm/reference/release-notes",
            children: "Signaling release notes"
          }), "."]
        })
      })
    }), `
`, _jsxs(Tabs, {
      defaultValue: "android",
      groupId: "platform",
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "android",
          children: "Android"
        }), _jsx(TabsTrigger, {
          value: "ios",
          children: "iOS/macOS"
        })]
      }), _jsxs(TabsContent, {
        value: "android",
        children: [_jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["If the Signaling ", _jsx(_components.code, {
                children: "aosl"
              }), " version is lower, integrate the ", _jsx(_components.code, {
                children: "lite"
              }), " SDK:"]
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
                      children: "dependencies"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "    //"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " If"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " you"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " are"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " using"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " RTM"
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
                      children: " version"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 2.2.8"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " or"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " later"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "    //"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " Replace"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " x.y.z"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " with"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " the"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " specific"
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
                      children: " version"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " number,"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " such"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " as"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 2.2.8"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "    //"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " You"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " can"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " obtain"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " the"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " latest"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " version"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " number"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " from"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " the"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " release"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " notes."
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "    implementation"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " 'io.agora.rtm:rtm-sdk-lite:2.2.8'"
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
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["If the Signaling ", _jsx(_components.code, {
                children: "aosl"
              }), " version is higher, integrate the latest ", _jsx(_components.code, {
                children: "aosl"
              }), " component and use ", _jsx(_components.code, {
                children: "pickFirst"
              }), " to ensure the higher-version ", _jsx(_components.code, {
                children: "aosl"
              }), " library is prioritized during the build process."]
            }), `
`]
          }), `
`]
        }), _jsxs(Tabs, {
          defaultValue: "groovy",
          groupId: "build-script",
          children: [_jsxs(TabsList, {
            children: [_jsx(TabsTrigger, {
              value: "groovy",
              children: "Groovy"
            }), _jsx(TabsTrigger, {
              value: "kotlin",
              children: "Kotlin DSL"
            })]
          }), _jsx(TabsContent, {
            value: "groovy",
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "Android Gradle Plugin < 7.x"
                  })
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
                          children: "android"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: " {"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "    packagingOptions"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: " {"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "        pickFirst"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: " 'lib/**/libaosl.so'"
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
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "}"
                        })
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
                          children: "dependencies"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: " {"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "    implementation"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: " 'io.agora.infra:aosl:x.y.z'"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "    //"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: " implementation"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: " RTM"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: " sdk"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "    //"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: " implementation"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: " RTC"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: " sdk"
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
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [`
`, _jsx(_components.p, {
                      children: _jsx(_components.strong, {
                        children: "Android Gradle Plugin 7.x or later (Recommended)"
                      })
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
                              children: "android"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#032F62",
                                "--shiki-dark": "#9ECBFF"
                              },
                              children: " {"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "    packaging"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#032F62",
                                "--shiki-dark": "#9ECBFF"
                              },
                              children: " {"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "        jniLibs"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#032F62",
                                "--shiki-dark": "#9ECBFF"
                              },
                              children: " {"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "            pickFirsts"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#032F62",
                                "--shiki-dark": "#9ECBFF"
                              },
                              children: " +="
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " ["
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#032F62",
                                "--shiki-dark": "#9ECBFF"
                              },
                              children: '"lib/**/libaosl.so"'
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "]"
                            })]
                          }), `
`, _jsx(_components.span, {
                            className: "line",
                            children: _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "        }"
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
                            className: "line",
                            children: _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "}"
                            })
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
                              children: "dependencies"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#032F62",
                                "--shiki-dark": "#9ECBFF"
                              },
                              children: " {"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "    implementation"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#032F62",
                                "--shiki-dark": "#9ECBFF"
                              },
                              children: " 'io.agora.infra:aosl:x.y.z'"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "    //"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#032F62",
                                "--shiki-dark": "#9ECBFF"
                              },
                              children: " implementation"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#032F62",
                                "--shiki-dark": "#9ECBFF"
                              },
                              children: " RTM"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#032F62",
                                "--shiki-dark": "#9ECBFF"
                              },
                              children: " sdk"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "    //"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#032F62",
                                "--shiki-dark": "#9ECBFF"
                              },
                              children: " implementation"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#032F62",
                                "--shiki-dark": "#9ECBFF"
                              },
                              children: " RTC"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#032F62",
                                "--shiki-dark": "#9ECBFF"
                              },
                              children: " sdk"
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
`]
                  }), `
`]
                }), `
`]
              }), `
`]
            })
          }), _jsx(TabsContent, {
            value: "kotlin",
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "Android Gradle Plugin < 7.x"
                  })
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
                    icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                    children: _jsxs(_components.code, {
                      children: [_jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "android"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " {"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "    packagingOptions"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " {"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "        pickFirst"
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
                          children: '"lib/**/libaosl.so"'
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ")"
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
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "}"
                        })
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
                          children: "dependencies"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " {"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "    implementation"
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
                          children: '"io.agora.infra:aosl:x.y.z"'
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ")"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "    // implementation RTM sdk"
                        })
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "    // implementation RTC sdk"
                        })
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
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [`
`, _jsx(_components.p, {
                      children: _jsx(_components.strong, {
                        children: "Android Gradle Plugin 7.x or later (Recommended)"
                      })
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
                        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                        children: _jsxs(_components.code, {
                          children: [_jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "android"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " {"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "    packaging"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " {"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "        jniLibs"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " {"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "            pickFirsts "
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#D73A49",
                                "--shiki-dark": "#F97583"
                              },
                              children: "+="
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: " setOf"
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
                              children: '"lib/**/libaosl.so"'
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: ")"
                            })]
                          }), `
`, _jsx(_components.span, {
                            className: "line",
                            children: _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "        }"
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
                            className: "line",
                            children: _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: "}"
                            })
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
                              children: "dependencies"
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: " {"
                            })]
                          }), `
`, _jsxs(_components.span, {
                            className: "line",
                            children: [_jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6F42C1",
                                "--shiki-dark": "#B392F0"
                              },
                              children: "    implementation"
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
                              children: '"io.agora.infra:aosl:x.y.z"'
                            }), _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#24292E",
                                "--shiki-dark": "#E1E4E8"
                              },
                              children: ")"
                            })]
                          }), `
`, _jsx(_components.span, {
                            className: "line",
                            children: _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6A737D",
                                "--shiki-dark": "#6A737D"
                              },
                              children: "    // implementation RTM sdk"
                            })
                          }), `
`, _jsx(_components.span, {
                            className: "line",
                            children: _jsx(_components.span, {
                              style: {
                                "--shiki-light": "#6A737D",
                                "--shiki-dark": "#6A737D"
                              },
                              children: "    // implementation RTC sdk"
                            })
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
`]
                  }), `
`]
                }), `
`]
              }), `
`]
            })
          })]
        })]
      }), _jsxs(TabsContent, {
        value: "ios",
        children: [_jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["If the Signaling ", _jsx(_components.code, {
                children: "aosl"
              }), " version is lower, integrate the ", _jsx(_components.code, {
                children: "lite"
              }), " SDK:"]
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
                icon: '<svg viewBox="0 0 24 24"><path d="M20.156.083c3.033.525 3.893 2.598 3.829 4.77L24 4.822 22.635 22.71 4.89 23.926h.016C3.433 23.864.15 23.729 0 19.139l1.645-3 2.819 6.586.503 1.172 2.805-9.144-.03.007.016-.03 9.255 2.956-1.396-5.431-.99-3.9 8.82-.569-.615-.51L16.5 2.114 20.159.073l-.003.01zM0 19.089zM5.13 5.073c3.561-3.533 8.157-5.621 9.922-3.84 1.762 1.777-.105 6.105-3.673 9.636-3.563 3.532-8.103 5.734-9.864 3.957-1.766-1.777.045-6.217 3.612-9.75l.003-.003z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "platform "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: ":ios"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "'11.0'"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "target "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "'Your App'"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " do"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  # If you are using RTM SDK version 2.2.8 or later"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  # Replace x.y.z with the specific SDK version number, such as 2.2.8"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  # You can obtain the latest version number from the release notes."
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  pod "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "'AgoraRtm'"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "'x.y.z'"
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
                      children: ":subspecs"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " => ["
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "'RtmKit'"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "]"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "end"
                    })
                  })]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["If the Signaling ", _jsx(_components.code, {
                children: "aosl"
              }), " version is higher, add the following script to your ", _jsx(_components.code, {
                children: "Podfile"
              }), ":"]
            }), `
`]
          }), `
`]
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["The following code uses the RTC SDK with the package name ", _jsx(_components.code, {
                children: "AgoraRtcEngine_iOS"
              }), " as an example. Use the actual platform and version for your integration."]
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
            icon: '<svg viewBox="0 0 24 24"><path d="M20.156.083c3.033.525 3.893 2.598 3.829 4.77L24 4.822 22.635 22.71 4.89 23.926h.016C3.433 23.864.15 23.729 0 19.139l1.645-3 2.819 6.586.503 1.172 2.805-9.144-.03.007.016-.03 9.255 2.956-1.396-5.431-.99-3.9 8.82-.569-.615-.51L16.5 2.114 20.159.073l-.003.01zM0 19.089zM5.13 5.073c3.561-3.533 8.157-5.621 9.922-3.84 1.762 1.777-.105 6.105-3.673 9.636-3.563 3.532-8.103 5.734-9.864 3.957-1.766-1.777.045-6.217 3.612-9.75l.003-.003z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "pre_install "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "do"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " |installer|"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  # Define the path to the RTC framework"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "  rtc_pod_path"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " File"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "join"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(installer."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "sandbox"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "root"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'AgoraRtcEngine_iOS'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
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
                  children: "  # Full path to aosl.xcframework"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "  aosl_xcframework_path"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " File"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "join"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(rtc_pod_path, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'aosl.xcframework'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
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
                  children: "  # Check if the file exists, and delete it if so"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  if"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " File"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "exist?"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(aosl_xcframework_path)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    puts"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' "Deleting aosl.xcframework from '
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "#{aosl_xcframework_path}"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    FileUtils"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "rm_rf"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(aosl_xcframework_path)"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  else"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    puts"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' "aosl.xcframework not found, skipping deletion."'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  end"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "end"
                })
              })]
            })
          })
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "signaling-version-222-to-226",
      children: "Signaling version 2.2.2 to 2.2.6"
    }), `
`, _jsxs(_components.p, {
      children: ["For Signaling SDK versions between 2.2.2 and 2.2.6, compare the versions of the ", _jsx(_components.code, {
        children: "aosl"
      }), " libraries used in the Video/Voice SDK and Signaling SDK, then delete the library file with the lower version."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["You can find the ", _jsx(_components.code, {
            children: "aosl"
          }), " library version for the SDKs in the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/reference/release-notes",
            children: "RTC SDK"
          }), " or ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/reference/release-notes",
            children: "Voice SDK"
          }), " release notes and ", _jsx(_components.a, {
            href: "/en/realtime-media/rtm/reference/release-notes",
            children: "Signaling release notes"
          }), "."]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["If the version of the ", _jsx(_components.code, {
        children: "aosl"
      }), " library included in the Video/Voice SDK package is lower, delete the outdated library file based on the target platform:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Android"
        }), ": Delete the older-version ", _jsx(_components.code, {
          children: "libaosl.so"
        }), " file from the SDK package."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "iOS/macOS"
        }), ": Delete the older-version ", _jsx(_components.code, {
          children: "aosl.xcframework"
        }), " file from the SDK package."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Windows"
        }), ": Delete the older-version ", _jsx(_components.code, {
          children: "libaosl.dll"
        }), " file from the SDK package."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["If the version of the ", _jsx(_components.code, {
        children: "aosl"
      }), " library in the Signaling SDK package is lower, integrate the lite SDK, then clean and rebuild your project to resolve the library conflict."]
    }), `
`, _jsxs(CodeBlockTabs, {
      defaultValue: "Android",
      children: [_jsxs(CodeBlockTabsList, {
        children: [_jsx(CodeBlockTabsTrigger, {
          value: "Android",
          children: "Android"
        }), _jsx(CodeBlockTabsTrigger, {
          value: "iOS/macOS",
          children: "iOS/macOS"
        })]
      }), _jsx(CodeBlockTab, {
        value: "Android",
        children: _jsx(_Fragment, {
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
                  children: "//"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " ..."
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "dependencies"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "    //"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " If"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " you"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " are"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " using"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " RTM"
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
                  children: " version"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 2.2.2"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " to"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 2.2.6"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "    //"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " Replace"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " x.y.z"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " with"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " the"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " specific"
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
                  children: " version"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " number,"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " such"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " as"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 2.2.2"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "    //"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " You"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " can"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " obtain"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " the"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " latest"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " version"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " number"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " from"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " the"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " release"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " notes."
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "    implementation"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'io.agora:agora-rtm-lite:x.y.z'"
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
        })
      }), _jsx(CodeBlockTab, {
        value: "iOS/macOS",
        children: _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M20.156.083c3.033.525 3.893 2.598 3.829 4.77L24 4.822 22.635 22.71 4.89 23.926h.016C3.433 23.864.15 23.729 0 19.139l1.645-3 2.819 6.586.503 1.172 2.805-9.144-.03.007.016-.03 9.255 2.956-1.396-5.431-.99-3.9 8.82-.569-.615-.51L16.5 2.114 20.159.073l-.003.01zM0 19.089zM5.13 5.073c3.561-3.533 8.157-5.621 9.922-3.84 1.762 1.777-.105 6.105-3.673 9.636-3.563 3.532-8.103 5.734-9.864 3.957-1.766-1.777.045-6.217 3.612-9.75l.003-.003z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "platform "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: ":ios"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'11.0'"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "target "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'Your App'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " do"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  # If you are using RTM SDK version 2.2.2 to 2.2.6"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  # Replace x.y.z with the specific SDK version number, such as 2.2.2"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  # You can obtain the latest version number from the release notes."
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  pod "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'AgoraRtm'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'x.y.z'"
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
                  children: ":subspecs"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " => ["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'RtmKit'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "]"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "end"
                })
              })]
            })
          })
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "signaling-versions-prior-to-222",
      children: "Signaling versions prior to 2.2.2"
    }), `
`, _jsx(_components.p, {
      children: "If you are using a Signaling SDK version prior to 2.2.2, refer to the following solutions based on your platform."
    }), `
`, _jsxs(Tabs, {
      defaultValue: "android",
      groupId: "platform",
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "android",
          children: "Android"
        }), _jsx(TabsTrigger, {
          value: "ios",
          children: "iOS/macOS"
        }), _jsx(TabsTrigger, {
          value: "flutter",
          children: "Flutter"
        })]
      }), _jsx(TabsContent, {
        value: "android",
        children: _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Using CDN"
            }), `
`, _jsxs(_components.ol, {
              children: [`
`, _jsx(_components.li, {
                children: "Manually delete the following files from the SDK package:"
              }), `
`]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "lib/x86/libaosl.so"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "lib/x86_64/libaosl.so"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "lib/armeabi-v7a/libaosl.so"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "lib/arm64-v8a/libaosl.so"
                })
              }), `
`]
            }), `
`, _jsxs(_components.ol, {
              children: [`
`, _jsx(_components.li, {
                children: "Rebuild the project"
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Using Maven"
            }), `
`, _jsxs(_components.ol, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Add a ", _jsx(_components.code, {
                    children: "packagingOptions"
                  }), " block to the ", _jsx(_components.code, {
                    children: "android"
                  }), " block of your ", _jsx(_components.code, {
                    children: "build.gradle"
                  }), " file to ensure the first matching native library is prioritized during the build process:"]
                }), `
`, _jsxs(Tabs, {
                  defaultValue: "groovy",
                  groupId: "build-script",
                  children: [_jsxs(TabsList, {
                    children: [_jsx(TabsTrigger, {
                      value: "groovy",
                      children: "Groovy"
                    }), _jsx(TabsTrigger, {
                      value: "kotlin",
                      children: "Kotlin DSL"
                    })]
                  }), _jsx(TabsContent, {
                    value: "groovy",
                    children: _jsxs(_components.ul, {
                      children: [`
`, _jsxs(_components.li, {
                        children: [`
`, _jsx(_components.p, {
                          children: _jsx(_components.strong, {
                            children: "Android Gradle Plugin < 7.x"
                          })
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
                                  children: "android"
                                }), _jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#032F62",
                                    "--shiki-dark": "#9ECBFF"
                                  },
                                  children: " {"
                                })]
                              }), `
`, _jsxs(_components.span, {
                                className: "line",
                                children: [_jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#6F42C1",
                                    "--shiki-dark": "#B392F0"
                                  },
                                  children: "    packagingOptions"
                                }), _jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#032F62",
                                    "--shiki-dark": "#9ECBFF"
                                  },
                                  children: " {"
                                })]
                              }), `
`, _jsxs(_components.span, {
                                className: "line",
                                children: [_jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#6F42C1",
                                    "--shiki-dark": "#B392F0"
                                  },
                                  children: "        pickFirst"
                                }), _jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#032F62",
                                    "--shiki-dark": "#9ECBFF"
                                  },
                                  children: " 'lib/x86/libaosl.so'"
                                })]
                              }), `
`, _jsxs(_components.span, {
                                className: "line",
                                children: [_jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#6F42C1",
                                    "--shiki-dark": "#B392F0"
                                  },
                                  children: "        pickFirst"
                                }), _jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#032F62",
                                    "--shiki-dark": "#9ECBFF"
                                  },
                                  children: " 'lib/x86_64/libaosl.so'"
                                })]
                              }), `
`, _jsxs(_components.span, {
                                className: "line",
                                children: [_jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#6F42C1",
                                    "--shiki-dark": "#B392F0"
                                  },
                                  children: "        pickFirst"
                                }), _jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#032F62",
                                    "--shiki-dark": "#9ECBFF"
                                  },
                                  children: " 'lib/armeabi-v7a/libaosl.so'"
                                })]
                              }), `
`, _jsxs(_components.span, {
                                className: "line",
                                children: [_jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#6F42C1",
                                    "--shiki-dark": "#B392F0"
                                  },
                                  children: "        pickFirst"
                                }), _jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#032F62",
                                    "--shiki-dark": "#9ECBFF"
                                  },
                                  children: " 'lib/arm64-v8a/libaosl.so'"
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
`, _jsxs(_components.ul, {
                          children: [`
`, _jsxs(_components.li, {
                            children: [`
`, _jsx(_components.p, {
                              children: _jsx(_components.strong, {
                                children: "Android Gradle Plugin 7.x or later (Recommended)"
                              })
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
                                      children: "android"
                                    }), _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#032F62",
                                        "--shiki-dark": "#9ECBFF"
                                      },
                                      children: " {"
                                    })]
                                  }), `
`, _jsxs(_components.span, {
                                    className: "line",
                                    children: [_jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#6F42C1",
                                        "--shiki-dark": "#B392F0"
                                      },
                                      children: "    packaging"
                                    }), _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#032F62",
                                        "--shiki-dark": "#9ECBFF"
                                      },
                                      children: " {"
                                    })]
                                  }), `
`, _jsxs(_components.span, {
                                    className: "line",
                                    children: [_jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#6F42C1",
                                        "--shiki-dark": "#B392F0"
                                      },
                                      children: "        jniLibs"
                                    }), _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#032F62",
                                        "--shiki-dark": "#9ECBFF"
                                      },
                                      children: " {"
                                    })]
                                  }), `
`, _jsxs(_components.span, {
                                    className: "line",
                                    children: [_jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#6F42C1",
                                        "--shiki-dark": "#B392F0"
                                      },
                                      children: "            pickFirsts"
                                    }), _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#032F62",
                                        "--shiki-dark": "#9ECBFF"
                                      },
                                      children: " +="
                                    }), _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#24292E",
                                        "--shiki-dark": "#E1E4E8"
                                      },
                                      children: " ["
                                    })]
                                  }), `
`, _jsxs(_components.span, {
                                    className: "line",
                                    children: [_jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#6F42C1",
                                        "--shiki-dark": "#B392F0"
                                      },
                                      children: '                "lib/x86/libaosl.so"'
                                    }), _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#6F42C1",
                                        "--shiki-dark": "#B392F0"
                                      },
                                      children: ","
                                    })]
                                  }), `
`, _jsxs(_components.span, {
                                    className: "line",
                                    children: [_jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#6F42C1",
                                        "--shiki-dark": "#B392F0"
                                      },
                                      children: '                "lib/x86_64/libaosl.so"'
                                    }), _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#6F42C1",
                                        "--shiki-dark": "#B392F0"
                                      },
                                      children: ","
                                    })]
                                  }), `
`, _jsxs(_components.span, {
                                    className: "line",
                                    children: [_jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#6F42C1",
                                        "--shiki-dark": "#B392F0"
                                      },
                                      children: '                "lib/armeabi-v7a/libaosl.so"'
                                    }), _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#6F42C1",
                                        "--shiki-dark": "#B392F0"
                                      },
                                      children: ","
                                    })]
                                  }), `
`, _jsx(_components.span, {
                                    className: "line",
                                    children: _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#6F42C1",
                                        "--shiki-dark": "#B392F0"
                                      },
                                      children: '                "lib/arm64-v8a/libaosl.so"'
                                    })
                                  }), `
`, _jsx(_components.span, {
                                    className: "line",
                                    children: _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#24292E",
                                        "--shiki-dark": "#E1E4E8"
                                      },
                                      children: "            ]"
                                    })
                                  }), `
`, _jsx(_components.span, {
                                    className: "line",
                                    children: _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#24292E",
                                        "--shiki-dark": "#E1E4E8"
                                      },
                                      children: "        }"
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
`]
                          }), `
`]
                        }), `
`]
                      }), `
`]
                    })
                  }), _jsx(TabsContent, {
                    value: "kotlin",
                    children: _jsxs(_components.ul, {
                      children: [`
`, _jsxs(_components.li, {
                        children: [`
`, _jsx(_components.p, {
                          children: _jsx(_components.strong, {
                            children: "Android Gradle Plugin < 7.x"
                          })
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
                            icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                            children: _jsxs(_components.code, {
                              children: [_jsxs(_components.span, {
                                className: "line",
                                children: [_jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#6F42C1",
                                    "--shiki-dark": "#B392F0"
                                  },
                                  children: "android"
                                }), _jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#24292E",
                                    "--shiki-dark": "#E1E4E8"
                                  },
                                  children: " {"
                                })]
                              }), `
`, _jsxs(_components.span, {
                                className: "line",
                                children: [_jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#6F42C1",
                                    "--shiki-dark": "#B392F0"
                                  },
                                  children: "    packagingOptions"
                                }), _jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#24292E",
                                    "--shiki-dark": "#E1E4E8"
                                  },
                                  children: " {"
                                })]
                              }), `
`, _jsxs(_components.span, {
                                className: "line",
                                children: [_jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#6F42C1",
                                    "--shiki-dark": "#B392F0"
                                  },
                                  children: "        pickFirst"
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
                                  children: '"lib/x86/libaosl.so"'
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
                                  children: "        pickFirst"
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
                                  children: '"lib/x86_64/libaosl.so"'
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
                                  children: "        pickFirst"
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
                                  children: '"lib/armeabi-v7a/libaosl.so"'
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
                                  children: "        pickFirst"
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
                                  children: '"lib/arm64-v8a/libaosl.so"'
                                }), _jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#24292E",
                                    "--shiki-dark": "#E1E4E8"
                                  },
                                  children: ")"
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
`, _jsxs(_components.ul, {
                          children: [`
`, _jsxs(_components.li, {
                            children: [`
`, _jsx(_components.p, {
                              children: _jsx(_components.strong, {
                                children: "Android Gradle Plugin 7.x or later (Recommended)"
                              })
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
                                icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                                children: _jsxs(_components.code, {
                                  children: [_jsxs(_components.span, {
                                    className: "line",
                                    children: [_jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#6F42C1",
                                        "--shiki-dark": "#B392F0"
                                      },
                                      children: "android"
                                    }), _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#24292E",
                                        "--shiki-dark": "#E1E4E8"
                                      },
                                      children: " {"
                                    })]
                                  }), `
`, _jsxs(_components.span, {
                                    className: "line",
                                    children: [_jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#6F42C1",
                                        "--shiki-dark": "#B392F0"
                                      },
                                      children: "    packaging"
                                    }), _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#24292E",
                                        "--shiki-dark": "#E1E4E8"
                                      },
                                      children: " {"
                                    })]
                                  }), `
`, _jsxs(_components.span, {
                                    className: "line",
                                    children: [_jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#6F42C1",
                                        "--shiki-dark": "#B392F0"
                                      },
                                      children: "        jniLibs"
                                    }), _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#24292E",
                                        "--shiki-dark": "#E1E4E8"
                                      },
                                      children: " {"
                                    })]
                                  }), `
`, _jsxs(_components.span, {
                                    className: "line",
                                    children: [_jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#24292E",
                                        "--shiki-dark": "#E1E4E8"
                                      },
                                      children: "            pickFirsts "
                                    }), _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#D73A49",
                                        "--shiki-dark": "#F97583"
                                      },
                                      children: "+="
                                    }), _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#6F42C1",
                                        "--shiki-dark": "#B392F0"
                                      },
                                      children: " setOf"
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
                                        "--shiki-light": "#032F62",
                                        "--shiki-dark": "#9ECBFF"
                                      },
                                      children: '                "lib/x86/libaosl.so"'
                                    }), _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#24292E",
                                        "--shiki-dark": "#E1E4E8"
                                      },
                                      children: ","
                                    })]
                                  }), `
`, _jsxs(_components.span, {
                                    className: "line",
                                    children: [_jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#032F62",
                                        "--shiki-dark": "#9ECBFF"
                                      },
                                      children: '                "lib/x86_64/libaosl.so"'
                                    }), _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#24292E",
                                        "--shiki-dark": "#E1E4E8"
                                      },
                                      children: ","
                                    })]
                                  }), `
`, _jsxs(_components.span, {
                                    className: "line",
                                    children: [_jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#032F62",
                                        "--shiki-dark": "#9ECBFF"
                                      },
                                      children: '                "lib/armeabi-v7a/libaosl.so"'
                                    }), _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#24292E",
                                        "--shiki-dark": "#E1E4E8"
                                      },
                                      children: ","
                                    })]
                                  }), `
`, _jsx(_components.span, {
                                    className: "line",
                                    children: _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#032F62",
                                        "--shiki-dark": "#9ECBFF"
                                      },
                                      children: '                "lib/arm64-v8a/libaosl.so"'
                                    })
                                  }), `
`, _jsx(_components.span, {
                                    className: "line",
                                    children: _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#24292E",
                                        "--shiki-dark": "#E1E4E8"
                                      },
                                      children: "            )"
                                    })
                                  }), `
`, _jsx(_components.span, {
                                    className: "line",
                                    children: _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#24292E",
                                        "--shiki-dark": "#E1E4E8"
                                      },
                                      children: "        }"
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
`]
                          }), `
`]
                        }), `
`]
                      }), `
`]
                    })
                  })]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "After the Gradle files are synchronized, rebuild the project."
                }), `
`]
              }), `
`]
            }), `
`]
          }), `
`]
        })
      }), _jsx(TabsContent, {
        value: "ios",
        children: _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Using CDN"
            }), `
`, _jsxs(_components.ol, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Manually delete the ", _jsx(_components.code, {
                    children: "libs/aosl.xcframework"
                  }), " file from the SDK package."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Rebuild the project."
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
              children: "Using Cocoapods"
            }), `
`, _jsxs(_components.ol, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Add the following script to the end of your project ", _jsx(_components.code, {
                    children: "podfile"
                  }), ":"]
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
                    icon: '<svg viewBox="0 0 24 24"><path d="M20.156.083c3.033.525 3.893 2.598 3.829 4.77L24 4.822 22.635 22.71 4.89 23.926h.016C3.433 23.864.15 23.729 0 19.139l1.645-3 2.819 6.586.503 1.172 2.805-9.144-.03.007.016-.03 9.255 2.956-1.396-5.431-.99-3.9 8.82-.569-.615-.51L16.5 2.114 20.159.073l-.003.01zM0 19.089zM5.13 5.073c3.561-3.533 8.157-5.621 9.922-3.84 1.762 1.777-.105 6.105-3.673 9.636-3.563 3.532-8.103 5.734-9.864 3.957-1.766-1.777.045-6.217 3.612-9.75l.003-.003z" fill="currentColor" /></svg>',
                    children: _jsxs(_components.code, {
                      children: [_jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "pre_install "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "do"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " |installer|"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "  # Define the path to the AgoraRtm framework"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#E36209",
                            "--shiki-dark": "#FFAB70"
                          },
                          children: "  rtm_pod_path"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: " ="
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: " File"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "join"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(installer."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "sandbox"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "root"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ", "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: "'AgoraRtm'"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ")"
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
                          children: "  # The full path to `aosl.xcframework`"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#E36209",
                            "--shiki-dark": "#FFAB70"
                          },
                          children: "  aosl_xcframework_path"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: " ="
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: " File"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "join"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(rtm_pod_path, "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: "'aosl.xcframework'"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ")"
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
                          children: "  # Check if the file exists; delete it if it does."
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "  if"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: " File"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "exist?"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(aosl_xcframework_path)"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: "    puts"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: ' "Deleting aosl.xcframework from '
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: "#{aosl_xcframework_path}"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: '"'
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: "    FileUtils"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "rm_rf"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(aosl_xcframework_path)"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "  else"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: "    puts"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: ' "aosl.xcframework not found, skipping deletion."'
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "  end"
                        })
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "end"
                        })
                      })]
                    })
                  })
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Run ", _jsx(_components.code, {
                    children: "pod install"
                  }), " to re-integrate the Signaling and Video/Voice SDK."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Rebuild the project."
                }), `
`]
              }), `
`]
            }), `
`]
          }), `
`]
        })
      }), _jsxs(TabsContent, {
        value: "flutter",
        children: [_jsx(_components.p, {
          children: "Select the solution based on your target platform:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Android"
              })
            }), `
`, _jsxs(_components.ol, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Add the dependency to the ", _jsx(_components.code, {
                    children: "build.gradle"
                  }), " file in the project root directory:"]
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
                          children: "dependencies"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: " {"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "    api"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: " 'io.agora.infra:aosl:1.2.13'"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "    //"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: " ..."
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
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["When integrating through Maven, add a ", _jsx(_components.code, {
                    children: "packagingOptions"
                  }), " block to the ", _jsx(_components.code, {
                    children: "android"
                  }), " block of your ", _jsx(_components.code, {
                    children: "build.gradle"
                  }), " file to ensure the first matching native library is prioritized during the build process:"]
                }), `
`, _jsxs(Tabs, {
                  defaultValue: "groovy",
                  groupId: "build-script",
                  children: [_jsxs(TabsList, {
                    children: [_jsx(TabsTrigger, {
                      value: "groovy",
                      children: "Groovy"
                    }), _jsx(TabsTrigger, {
                      value: "kotlin",
                      children: "Kotlin DSL"
                    })]
                  }), _jsx(TabsContent, {
                    value: "groovy",
                    children: _jsxs(_components.ul, {
                      children: [`
`, _jsxs(_components.li, {
                        children: [`
`, _jsx(_components.p, {
                          children: _jsx(_components.strong, {
                            children: "Android Gradle Plugin < 7.x"
                          })
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
                                  children: "android"
                                }), _jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#032F62",
                                    "--shiki-dark": "#9ECBFF"
                                  },
                                  children: " {"
                                })]
                              }), `
`, _jsxs(_components.span, {
                                className: "line",
                                children: [_jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#6F42C1",
                                    "--shiki-dark": "#B392F0"
                                  },
                                  children: "    packagingOptions"
                                }), _jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#032F62",
                                    "--shiki-dark": "#9ECBFF"
                                  },
                                  children: " {"
                                })]
                              }), `
`, _jsxs(_components.span, {
                                className: "line",
                                children: [_jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#6F42C1",
                                    "--shiki-dark": "#B392F0"
                                  },
                                  children: "        pickFirst"
                                }), _jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#032F62",
                                    "--shiki-dark": "#9ECBFF"
                                  },
                                  children: " 'lib/x86/libaosl.so'"
                                })]
                              }), `
`, _jsxs(_components.span, {
                                className: "line",
                                children: [_jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#6F42C1",
                                    "--shiki-dark": "#B392F0"
                                  },
                                  children: "        pickFirst"
                                }), _jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#032F62",
                                    "--shiki-dark": "#9ECBFF"
                                  },
                                  children: " 'lib/x86_64/libaosl.so'"
                                })]
                              }), `
`, _jsxs(_components.span, {
                                className: "line",
                                children: [_jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#6F42C1",
                                    "--shiki-dark": "#B392F0"
                                  },
                                  children: "        pickFirst"
                                }), _jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#032F62",
                                    "--shiki-dark": "#9ECBFF"
                                  },
                                  children: " 'lib/armeabi-v7a/libaosl.so'"
                                })]
                              }), `
`, _jsxs(_components.span, {
                                className: "line",
                                children: [_jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#6F42C1",
                                    "--shiki-dark": "#B392F0"
                                  },
                                  children: "        pickFirst"
                                }), _jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#032F62",
                                    "--shiki-dark": "#9ECBFF"
                                  },
                                  children: " 'lib/arm64-v8a/libaosl.so'"
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
`, _jsxs(_components.ul, {
                          children: [`
`, _jsxs(_components.li, {
                            children: [`
`, _jsx(_components.p, {
                              children: _jsx(_components.strong, {
                                children: "Android Gradle Plugin 7.x or later (Recommended)"
                              })
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
                                      children: "android"
                                    }), _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#032F62",
                                        "--shiki-dark": "#9ECBFF"
                                      },
                                      children: " {"
                                    })]
                                  }), `
`, _jsxs(_components.span, {
                                    className: "line",
                                    children: [_jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#6F42C1",
                                        "--shiki-dark": "#B392F0"
                                      },
                                      children: "    packaging"
                                    }), _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#032F62",
                                        "--shiki-dark": "#9ECBFF"
                                      },
                                      children: " {"
                                    })]
                                  }), `
`, _jsxs(_components.span, {
                                    className: "line",
                                    children: [_jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#6F42C1",
                                        "--shiki-dark": "#B392F0"
                                      },
                                      children: "        jniLibs"
                                    }), _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#032F62",
                                        "--shiki-dark": "#9ECBFF"
                                      },
                                      children: " {"
                                    })]
                                  }), `
`, _jsxs(_components.span, {
                                    className: "line",
                                    children: [_jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#6F42C1",
                                        "--shiki-dark": "#B392F0"
                                      },
                                      children: "            pickFirsts"
                                    }), _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#032F62",
                                        "--shiki-dark": "#9ECBFF"
                                      },
                                      children: " +="
                                    }), _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#24292E",
                                        "--shiki-dark": "#E1E4E8"
                                      },
                                      children: " ["
                                    })]
                                  }), `
`, _jsxs(_components.span, {
                                    className: "line",
                                    children: [_jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#6F42C1",
                                        "--shiki-dark": "#B392F0"
                                      },
                                      children: '                "lib/x86/libaosl.so"'
                                    }), _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#6F42C1",
                                        "--shiki-dark": "#B392F0"
                                      },
                                      children: ","
                                    })]
                                  }), `
`, _jsxs(_components.span, {
                                    className: "line",
                                    children: [_jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#6F42C1",
                                        "--shiki-dark": "#B392F0"
                                      },
                                      children: '                "lib/x86_64/libaosl.so"'
                                    }), _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#6F42C1",
                                        "--shiki-dark": "#B392F0"
                                      },
                                      children: ","
                                    })]
                                  }), `
`, _jsxs(_components.span, {
                                    className: "line",
                                    children: [_jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#6F42C1",
                                        "--shiki-dark": "#B392F0"
                                      },
                                      children: '                "lib/armeabi-v7a/libaosl.so"'
                                    }), _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#6F42C1",
                                        "--shiki-dark": "#B392F0"
                                      },
                                      children: ","
                                    })]
                                  }), `
`, _jsx(_components.span, {
                                    className: "line",
                                    children: _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#6F42C1",
                                        "--shiki-dark": "#B392F0"
                                      },
                                      children: '                "lib/arm64-v8a/libaosl.so"'
                                    })
                                  }), `
`, _jsx(_components.span, {
                                    className: "line",
                                    children: _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#24292E",
                                        "--shiki-dark": "#E1E4E8"
                                      },
                                      children: "            ]"
                                    })
                                  }), `
`, _jsx(_components.span, {
                                    className: "line",
                                    children: _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#24292E",
                                        "--shiki-dark": "#E1E4E8"
                                      },
                                      children: "        }"
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
`]
                          }), `
`]
                        }), `
`]
                      }), `
`]
                    })
                  }), _jsx(TabsContent, {
                    value: "kotlin",
                    children: _jsxs(_components.ul, {
                      children: [`
`, _jsxs(_components.li, {
                        children: [`
`, _jsx(_components.p, {
                          children: _jsx(_components.strong, {
                            children: "Android Gradle Plugin < 7.x"
                          })
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
                            icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                            children: _jsxs(_components.code, {
                              children: [_jsxs(_components.span, {
                                className: "line",
                                children: [_jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#6F42C1",
                                    "--shiki-dark": "#B392F0"
                                  },
                                  children: "android"
                                }), _jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#24292E",
                                    "--shiki-dark": "#E1E4E8"
                                  },
                                  children: " {"
                                })]
                              }), `
`, _jsxs(_components.span, {
                                className: "line",
                                children: [_jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#6F42C1",
                                    "--shiki-dark": "#B392F0"
                                  },
                                  children: "    packagingOptions"
                                }), _jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#24292E",
                                    "--shiki-dark": "#E1E4E8"
                                  },
                                  children: " {"
                                })]
                              }), `
`, _jsxs(_components.span, {
                                className: "line",
                                children: [_jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#6F42C1",
                                    "--shiki-dark": "#B392F0"
                                  },
                                  children: "        pickFirst"
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
                                  children: '"lib/x86/libaosl.so"'
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
                                  children: "        pickFirst"
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
                                  children: '"lib/x86_64/libaosl.so"'
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
                                  children: "        pickFirst"
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
                                  children: '"lib/armeabi-v7a/libaosl.so"'
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
                                  children: "        pickFirst"
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
                                  children: '"lib/arm64-v8a/libaosl.so"'
                                }), _jsx(_components.span, {
                                  style: {
                                    "--shiki-light": "#24292E",
                                    "--shiki-dark": "#E1E4E8"
                                  },
                                  children: ")"
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
`, _jsxs(_components.ul, {
                          children: [`
`, _jsxs(_components.li, {
                            children: [`
`, _jsx(_components.p, {
                              children: _jsx(_components.strong, {
                                children: "Android Gradle Plugin 7.x or later (Recommended)"
                              })
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
                                icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                                children: _jsxs(_components.code, {
                                  children: [_jsxs(_components.span, {
                                    className: "line",
                                    children: [_jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#6F42C1",
                                        "--shiki-dark": "#B392F0"
                                      },
                                      children: "android"
                                    }), _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#24292E",
                                        "--shiki-dark": "#E1E4E8"
                                      },
                                      children: " {"
                                    })]
                                  }), `
`, _jsxs(_components.span, {
                                    className: "line",
                                    children: [_jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#6F42C1",
                                        "--shiki-dark": "#B392F0"
                                      },
                                      children: "    packaging"
                                    }), _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#24292E",
                                        "--shiki-dark": "#E1E4E8"
                                      },
                                      children: " {"
                                    })]
                                  }), `
`, _jsxs(_components.span, {
                                    className: "line",
                                    children: [_jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#6F42C1",
                                        "--shiki-dark": "#B392F0"
                                      },
                                      children: "        jniLibs"
                                    }), _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#24292E",
                                        "--shiki-dark": "#E1E4E8"
                                      },
                                      children: " {"
                                    })]
                                  }), `
`, _jsxs(_components.span, {
                                    className: "line",
                                    children: [_jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#24292E",
                                        "--shiki-dark": "#E1E4E8"
                                      },
                                      children: "            pickFirsts "
                                    }), _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#D73A49",
                                        "--shiki-dark": "#F97583"
                                      },
                                      children: "+="
                                    }), _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#6F42C1",
                                        "--shiki-dark": "#B392F0"
                                      },
                                      children: " setOf"
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
                                        "--shiki-light": "#032F62",
                                        "--shiki-dark": "#9ECBFF"
                                      },
                                      children: '                "lib/x86/libaosl.so"'
                                    }), _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#24292E",
                                        "--shiki-dark": "#E1E4E8"
                                      },
                                      children: ","
                                    })]
                                  }), `
`, _jsxs(_components.span, {
                                    className: "line",
                                    children: [_jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#032F62",
                                        "--shiki-dark": "#9ECBFF"
                                      },
                                      children: '                "lib/x86_64/libaosl.so"'
                                    }), _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#24292E",
                                        "--shiki-dark": "#E1E4E8"
                                      },
                                      children: ","
                                    })]
                                  }), `
`, _jsxs(_components.span, {
                                    className: "line",
                                    children: [_jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#032F62",
                                        "--shiki-dark": "#9ECBFF"
                                      },
                                      children: '                "lib/armeabi-v7a/libaosl.so"'
                                    }), _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#24292E",
                                        "--shiki-dark": "#E1E4E8"
                                      },
                                      children: ","
                                    })]
                                  }), `
`, _jsx(_components.span, {
                                    className: "line",
                                    children: _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#032F62",
                                        "--shiki-dark": "#9ECBFF"
                                      },
                                      children: '                "lib/arm64-v8a/libaosl.so"'
                                    })
                                  }), `
`, _jsx(_components.span, {
                                    className: "line",
                                    children: _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#24292E",
                                        "--shiki-dark": "#E1E4E8"
                                      },
                                      children: "            )"
                                    })
                                  }), `
`, _jsx(_components.span, {
                                    className: "line",
                                    children: _jsx(_components.span, {
                                      style: {
                                        "--shiki-light": "#24292E",
                                        "--shiki-dark": "#E1E4E8"
                                      },
                                      children: "        }"
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
`]
                          }), `
`]
                        }), `
`]
                      }), `
`]
                    })
                  })]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "After the Gradle files are synchronized, rebuild the project."
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
              children: _jsx(_components.strong, {
                children: "iOS"
              })
            }), `
`, _jsxs(_components.ol, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["When integrating via CocoaPods, add the following script to the end of your project's ", _jsx(_components.code, {
                    children: "Podfile"
                  }), ":"]
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
                    icon: '<svg viewBox="0 0 24 24"><path d="M20.156.083c3.033.525 3.893 2.598 3.829 4.77L24 4.822 22.635 22.71 4.89 23.926h.016C3.433 23.864.15 23.729 0 19.139l1.645-3 2.819 6.586.503 1.172 2.805-9.144-.03.007.016-.03 9.255 2.956-1.396-5.431-.99-3.9 8.82-.569-.615-.51L16.5 2.114 20.159.073l-.003.01zM0 19.089zM5.13 5.073c3.561-3.533 8.157-5.621 9.922-3.84 1.762 1.777-.105 6.105-3.673 9.636-3.563 3.532-8.103 5.734-9.864 3.957-1.766-1.777.045-6.217 3.612-9.75l.003-.003z" fill="currentColor" /></svg>',
                    children: _jsxs(_components.code, {
                      children: [_jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "pre_install "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "do"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: " |installer|"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "  # Define the path to the AgoraRtm framework"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#E36209",
                            "--shiki-dark": "#FFAB70"
                          },
                          children: "  rtm_pod_path"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: " ="
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: " File"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "join"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(installer."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "sandbox"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "root"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ", "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: "'AgoraRtm'"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ")"
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
                          children: "  # The full path to `aosl.xcframework`"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#E36209",
                            "--shiki-dark": "#FFAB70"
                          },
                          children: "  aosl_xcframework_path"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: " ="
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: " File"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "join"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(rtm_pod_path, "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: "'aosl.xcframework'"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: ")"
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
                          children: "  # Check if the file exists; delete it if it does."
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "  if"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: " File"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "exist?"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(aosl_xcframework_path)"
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: "    puts"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: ' "Deleting aosl.xcframework from '
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: "#{aosl_xcframework_path}"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: '"'
                        })]
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: "    FileUtils"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "rm_rf"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(aosl_xcframework_path)"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "  else"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: "    puts"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#032F62",
                            "--shiki-dark": "#9ECBFF"
                          },
                          children: ' "aosl.xcframework not found, skipping deletion."'
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "  end"
                        })
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#D73A49",
                            "--shiki-dark": "#F97583"
                          },
                          children: "end"
                        })
                      })]
                    })
                  })
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Run ", _jsx(_components.code, {
                    children: "pod install"
                  }), " to re-integrate the Signaling and Video/Voice SDK."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Rebuild the project."
                }), `
`]
              }), `
`]
            }), `
`]
          }), `
`]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
