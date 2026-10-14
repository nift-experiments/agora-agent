import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "File conversion overview",
  description: "Understand how Interactive Whiteboard converts source files into images or web pages for presentation."
};
export let _markdown = `

Interactive Whiteboard supports file conversion from PPT and PPTX files into dynamic HTML web pages. The generated web pages can be accessed directly or presented on the whiteboard.

Interactive Whiteboard released a new version of file conversion service on July 27, 2022, that greatly improves conversion speed, content parsing, and stability. The new version also adds the ability to integrate with third-party whiteboard SDKs. Agora strongly recommends you use the new version of file conversion. See [File conversion RESTful API reference](/en/api-reference/api-ref/whiteboard/file-conversion).

## Introduction [#introduction]

File conversion is implemented by Agora's server for Interactive Whiteboard service. When an app client requests to convert a file, your app server calls the Interactive Whiteboard RESTful API to send the request to the Agora server. The completes process is illustrated in the following diagram:

<details>
<summary>File conversion process</summary>

![](https://web-cdn.agora.io/docs-files/1618477596512)

</details>

The file-conversion feature supports the following types of file conversion:

* Static-file conversion
* Dynamic-file conversion

### Static-file conversion [#static-file-conversion]

Static-file conversion refers to converting PPT, PPTX, DOC, DOCX, and PDF files to static images in PNG or JPG/JPEG formats. The generated file does not preserve animations present in the source file.

When using static-file conversion, pay attention to the following issues:

* The conversion process works best when the source file is less than 50 pages long. If the source file has more than 100 pages, you may experience a conversion timeout.
* The higher the image resolution in the source file, the slower the conversion.
* PDF files generate the most accurate images when converted. If the generated image differs greatly from the source file in content or formatting, convert the source file to PDF and try again.
* Only valid PDF files are supported, that is, files that conform to PDF standards and have a valid header starting with \`%PDF\`.
* Note that because this feature is implemented with support from [Aspose](https://www.aspose.app/), Agora might not be able to respond to requests for customization as quickly as usual. Agora recommends that you run sufficient tests of the file-conversion feature. If the test result do not meet your expectations, consider using a third-party service.
* The new file conversion currently does not support generating resource packages. However, because the resources path is fixed, users can download resources by themselves.

### Dynamic-file conversion [#dynamic-file-conversion]

Dynamic-file conversion refers to converting PPT/PPTX files edited with Microsoft Office to HTML web pages. The generated file preserves animations present in the source file.

When using dynamic-file conversion, pay attention to the following issues:

* Converting WPS files is not yet supported. You might also encounter problems when using PPTX files converted from WPS files.
* The new file conversion currently does not support generating resource packages. However, because the resources path is fixed, users can download resources by themselves.
* If a font is missing in a generated web page, you can either use the SDK to add a custom font or contact [support@agora.io](mailto\\:support@agora.io).
* Due to inherent constrains in the PPT file format, PPT files are converted into PPTX files at the backend before parsing, which might encounter failure. Therefore, Agora recommends you to upload PPTX files for conversion.
* A generated web page can be rendered into canvas pages via Fastboard SDK (coming soon), [@netless/slide](https://www.npmjs.com/package/@netless/slide), or [@netless/projector-plugin](https://github.com/netless-io/projector-plugin). The differences between these three rendering solutions are as follows:
  * Fastboard SDK is the rendering plan designed for multi-window use-cases in Agora Interactive Whiteboard. Fastboard SDK is coming soon.
  * @netless/slide is a stand-alone document conversion and rendering dependency that does not include such things as whiteboards or state synchronization. Adopting this solution requires you to write extra codes to synchronize states. It is designed for use-cases where PPT is used alone in whiteboard apps.
  * @netless/projector-plugin is a plug-in for Whiteboard SDK that supports state synchronization, but it only works in single-window use-cases.

### Version comparison [#version-comparison]

Compared with the old version, the new file conversion adopts an engine developed by Agora and has the following advantages:

* **Support for stand-alone access**. The new file conversion is no longer bound to Interactive Whiteboard and can be integrated with third-party whiteboard SDKs.
* **Faster conversion speed**. The conversion speed of the new version is increased by 200% to 400%.
* **Stronger content parsing**. The new file conversion supports parsing content that the old version cannot, including additional animations, filters, and other effects. The new version can parse all normal PPTX content.
* **Improved stability**. The new file conversion fixes multiple issues in the old version that could cause conversion failures.
* **New features**. Users can now pause ongoing conversion tasks or adjust task priorities.

The new and the old versions of file conversion are **independent of each other**: The conversion task UUID generated by the new version cannot call the old version to query the progress, while the uuid generated by the old version cannot query the progress through the new version. If you want to query the progress of the old conversion tasks through the new version, contact [support@agora.io](mailto\\:support@agora.io).

Although Agora Interactive Whiteboard continues to maintain the old version of file conversion, some issues could arise due to inherent limits in the architectural design. Agora recommends you choose an appropriate time to switch to the new file conversion. If you need support for the old version of file conversion, see the following resources:

* [Old File Conversion Overview](../../reference/file-conversion-overview-deprecated.mdx)
* [Old File Conversion API Reference](/en/api-reference/api-ref/whiteboard/file-conversion-deprecated)

## Prerequisites [#prerequisites]

Before using file conversion, ensure that you have completed the following steps:

### Create a third-party cloud storage account [#create-a-third-party-cloud-storage-account]

To save files generated by file conversion, you need an account on a third-party cloud storage service such as Amazon S3, Google Cloud platform, or Alibaba.

### Upload the source file [#upload-the-source-file]

Before you launch a file-conversion task, you must upload the source file to a third-party cloud storage space or your Nginx server. This produces a URL address for the file. Make sure that the Interactive Whiteboard can access the file via this URL address.

### Enable file conversion [#enable-file-conversion]

To convert documents on the whiteboard, enable the **Docs to Picture** and **Docs to Web** services for your data centers on the Interactive Whiteboard panel in Agora Console. For details, see [Enable whiteboard server-side features](../set-up-and-build-your-first-app/enable-whiteboard#enable-whiteboard-server-side-features).

## Start file conversion [#start-file-conversion]

Take the following steps:

1. To start a file-conversion task, call the RESTful API and pass in the URL address of the source file along with other parameters. See [Start file conversion](/en/api-reference/api-ref/whiteboard/file-conversion#start-file-conversion).

2. To query the progress of a file-conversion task, pass in the corresponding task UUID and Task Token. See [Query file-conversion progress](/en/api-reference/api-ref/whiteboard/file-conversion#query-the-progress-of-a-file-conversion-task). Agora recommends that you implement an algorithm to regularly query the conversion progress so that your data is up to date.

## PPT Conversion: Supported features, limitations, and troubleshooting [#ppt-conversion-supported-features-limitations-and-troubleshooting]

When converting PPT or PPTX files created in Microsoft PowerPoint into dynamic HTML web pages using [File conversion](/en/api-reference/api-ref/whiteboard/file-conversion), some elements—such as special effects, images, or animations—might not parse correctly. This can result in issues like missing or non-functional effects in the converted output. This section outlines the compatibility of the document conversion service with various PPT features, helping you identify and fix problematic elements in your presentations.

<CalloutContainer type="info">
  <CalloutDescription>
    * These notes are only applicable to PPT or PPTX files made with MS PowerPoint. For PPT files made with WPS, Agora does not guarantee the conversion effect.
    * Some functions and effects are not mentioned in the following list. This is due to functional inconsistencies caused by different versions which require manual testing.
  </CalloutDescription>
</CalloutContainer>

### Supported effects [#supported-effects]

| PPT element     | Effects menu         | Support effect                                                                                                                                                                                                                                                                                                                                                                                                                            | Measures to take                                                                                            |
| :-------------- | :------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------- |
| Word            | Font                 | - Font style: See the list of [Supported fonts](#supported-fonts)<br />- Font size: All<br />- Color and underline: All<br />- Effect: Supports strikethrough, double strikethrough, superscript, subscript, equal-height characters<br />- Character Spacing: All<br />                                                                                                                                                                  | After some fonts are converted, ensure that the font is installed locally for it to be displayed correctly. |
|                 | Paragraph            | - Bullet<br />- Serial number<br />- Text alignment: All<br />- Indentation<br />- Spacing<br />- Chinese version: All<br />- Multi-column layout<br />                                                                                                                                                                                                                                                                                   | -                                                                                                           |
| Shape           | Shape Format         | - Shape Fill: All<br />- Shape Outlines/Lines: All<br />                                                                                                                                                                                                                                                                                                                                                                                  | -                                                                                                           |
| Sheet           | Table Design         | - Table style options: All<br />- Table style:- Subject: All<br />- Shading<br />- Frame<br />- Fill: color fill, picture fill, texture fill, gradient fill, pattern fill<br /><br />                                                                                                                                                                                                                                                     | -                                                                                                           |
|                 | Table Layout         | All                                                                                                                                                                                                                                                                                                                                                                                                                                       | -                                                                                                           |
| Picture         | Image Format         | - Remove background<br />- Adjustments: All<br />- Image style:- Style templates<br />- Frame<br />- Format<br />- Effects: shadow, reflection, glow, soft edge<br /><br />- Arrangement: All<br />- Cropping<br />                                                                                                                                                                                                                       | -                                                                                                           |
| Audio and Video | Audio/Video Format   | - Cropping (progressive cropping)<br />- Add bookmark<br />                                                                                                                                                                                                                                                                                                                                                                               | -                                                                                                           |
| Animation       | Animation Type       | - Page cutting animation: fade in, fade out, push in, erase, split, reveal, cut in, random lines, shapes, uncover, cover, fall, hang, curtain, peel off, dissolve, chessboard, blinds, clock, ripple, switch, rotate, library, cube, box, comb, zoom, pan, carousel<br />- Appearance/disappearance animation: All<br />- Word animation: All<br />- Path Animation: All<br />- Template Animation: All<br />- Animation with sound<br /> | -                                                                                                           |
|                 | Animation Properties | - Timing: start condition, duration, delay, repeat<br />- Trigger: by click, by bookmark<br />- Set text animation and combine text.<br />                                                                                                                                                                                                                                                                                                | -                                                                                                           |
| Other           | Other Menu           | Modify PPT theme, customize theme                                                                                                                                                                                                                                                                                                                                                                                                         | -                                                                                                           |

### Unsupported effects [#unsupported-effects]

| PPT element     | Unsupported effects                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Imperfectly supported effects                                                                                                                                                                                                                                                                                                                                               | Measures to take                                                                                                                                                      |
| :-------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Word            | - Font effect: All Caps, Small Caps<br />- Shape format - Text Options: Shadow, reflection, glow, soft edges, 3D format, 3D rotation<br />                                                                                                                                                                                                                                                                                                                                        | - Text stroke: Cannot perfectly restore the effect in PPT.<br />- Custom fonts: Some font line breaks are inconsistent with the original PPT.<br />- Vertical text: Line spacing that is not single-spaced may be inconsistent with the original PPT, and the horizontal coordinate of the font will be offset.<br />- WordArt: The conversion effect is not perfect.<br /> | - Avoid inserting too much text on one page.<br />- Avoid using line breaks continuously. It is recommended to split large paragraphs into multiple text boxes.<br /> |
| Shape           | Shapes with formulas do not support adding color fill animations.                                                                                                                                                                                                                                                                                                                                                                                                                 | - Shape Format - Effects: When using shadow, reflection, glow, or soft edge effects, the entire shape is displayed first, and the special effects will take effect later.<br />- Shape Format - Shape Outline:- When you select Dashed Line, dashed lines smaller than 1.5 pt are converted to solid lines.<br />- Arrows may shift after conversion.<br /><br />           | Some special graphics should not exceed the graphic boundary, and the part beyond the boundary is not displayed.                                                      |
| Sheet           | - Shape Format - Fill:- Pattern Fill<br />- The option to tile the image as a texture is not supported in image or texture fills.<br /><br />- Shape Format - Effects: Shadow, reflection, glow, soft edge, 3D format, 3D rotation.<br />                                                                                                                                                                                                                                         | -                                                                                                                                                                                                                                                                                                                                                                           | -                                                                                                                                                                     |
| Picture         | Image format-effect: 3D format, 3D rotation.                                                                                                                                                                                                                                                                                                                                                                                                                                      | - Image format - Remove background: Support is not perfect, the converted image may have white edges.<br />- Image format - Image color: Images that are recolored or use color filters may have color differences after conversion.<br />- Image Format - Image Correction: Brightness and contrast adjustment effects are not perfectly restored.<br />                   | -                                                                                                                                                                     |
| Audio and Video | - Option: Play across slides.<br />- Style: Play in the background.<br />                                                                                                                                                                                                                                                                                                                                                                                                         | -                                                                                                                                                                                                                                                                                                                                                                           | -                                                                                                                                                                     |
| Animation       | - Page cutting animation: airplane, origami, fragments, vortex, shining, smooth.<br />- Emphasis animation: Zoom in or zoom out (only for text, not supported)/ brush color, color stretch, color pulse, underline.<br />- Path Animation: Rewind after playback is complete.<br />                                                                                                                                                                                               | - Timing-delay: There may be a small error in the animation delay time.<br />- Advanced Animation triggered by click: Click events penetrate the underlying elements.<br />                                                                                                                                                                                                 | -                                                                                                                                                                     |
| Other           | - Extract annotations<br />- The following effects are not effective in the thumbnails generated after document conversion preview:- All gradient effects<br />- All page switching animations<br />- Animations that involve changes to the inside of a shape do not work, including: blinds, checkerboard, dissolve, random Lines, shapes, splits, stairs, wheels, erase, fade, float<br />- Transparency<br />- Recolor<br />- Shadow, reflection, glow, soft edge<br /><br /> | The hide slide function does not support hiding the first page of the slide.                                                                                                                                                                                                                                                                                                | -                                                                                                                                                                     |

### Best practices for troubleshooting conversion issues [#best-practices-for-troubleshooting-conversion-issues]

If some effects are missing in the converted PPT or are different from the original PPT, refer to the following steps to locate the problematic elements and fix them:

1. Locate the problematic element

   Compare the PPT before and after conversion to find the problematic elements.

2. Deal with problematic elements

   Resolve the problem using one of the following methods:

   * Remove the problematic element directly or remove unsupported effects on the element.
   * Replace the effect that is already supported by other document transformations for the element in question.
   * Save the problematic element as a picture, delete the element, and then reinsert the picture to the original position. If there are many problematic elements, combine those elements first and convert them to pictures.

3. Restart the conversion

   Call the RESTful API again to restart the conversion. After the conversion is successful, compare the PPT effects before and after the conversion. If there are any remaining problems, repeat the previous steps.

## Reference [#reference]

This section contains information that completes the information on this page, or points you to documentation that explains other aspects of this product.

### Google Cloud Storage configuration [#google-cloud-storage-configuration]

To set up cloud storage and obtain configuration information for Google Cloud Platform, take the following steps:

1. Create an account on [Google Cloud](https://cloud.google.com/) and assign permissions on the settings page of Google Cloud storage.
   ![](https://assets-docs.agora.io/images/interactive-whiteboard/gcp-settings.png)

2. After creation, click on the ![](https://assets-docs.agora.io/images/interactive-whiteboard/ellipses.png) button in the upper right corner and select **Project settings**.

3. Under **IAM and Admin**, select **Service Accounts**. In the service account list, click on the ![](https://assets-docs.agora.io/images/interactive-whiteboard/ellipses.png) button for the account just added, and select **Manage keys**.

4. Click **ADD KEY** > **Create new key**. Select **JSON** in the pop-up box and click **CREATE**. A \`json\` file is downloaded with the name format \`projectId-xxxxxxxx.json\`.
   ![](https://assets-docs.agora.io/images/interactive-whiteboard/gcp-create-private-key.png)

5. Open the downloaded json file, which looks like the following example:

   \`\`\`json
   {
       "type": "service_account",
       "project_id": "argon-jetty-395210",
       "private_key_id": "yourprivateidkeyyourprivateidkeyyourprivateidkey",
       "private_key": "-----BEGIN PRIVATE KEY-----\\nThisisYourPrivateKeyThisisYourPrivateKeyThisisYourPrivateKey\\nThisisYourPrivateKey\\nThisisYourPrivateKey\\nThisisYourPrivateKey\\n-----END PRIVATE KEY-----\\n",
       "client_email": "xxxx-111@argon-jetty-395210.iam.gserviceaccount.com",
       "client_id": "123456789012345678901",
       "auth_uri": "https://accounts.google.com/o/oauth2/auth",
       "token_uri": "https://oauth2.googleapis.com/token",
       "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
       "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/xxxx-111%40argon-jetty-395210.iam.gserviceaccount.com",
       "universe_domain": "googleapis.com"
   }
   \`\`\`

6. Use the information in the json file to fill-in the Google Cloud Storage configuration:

   The \`project_id\` in the json file corresponds to the \`projectId\` on Agora Console, \`client_email\` corresponds to \`clientEmail\`, \`private_key\` corresponds to \`privateKey\`, and \`bucket\` is filled with the name of the \`bucket\` to be used. The remaining parameters have the same meaning as for the AWS configuration.
   When copying the \`private_key\`, make sure that your text editor has not added any extra line breaks or \`\\n\` after each \`\\n\`.

7. Ensure that the newly created service account has writable permission for the Google storage bucket.

### Supported fonts [#supported-fonts]

Interactive Whiteboard file conversion supports the following fonts:

* AaManYuShouXieTi, AaManYuShouXieTi
* Alibaba PuHuiTi, Alibaba PuHuiTi, Alibaba PuHuiTi B, Alibaba PuHuiTi B
* Alibaba PuHuiTi, Alibaba PuHuiTi, Alibaba PuHuiTi H, Alibaba PuHuiTi H
* Alibaba PuHuiTi, Alibaba PuHuiTi, Alibaba PuHuiTi Heavy, Alibaba PuHuiTi Heavy
* Alibaba PuHuiTi, Alibaba PuHuiTi, Alibaba PuHuiTi L, Alibaba PuHuiTi L
* Alibaba PuHuiTi, Alibaba PuHuiTi, Alibaba PuHuiTi Light, Alibaba PuHuiTi Light
* Alibaba PuHuiTi, Alibaba PuHuiTi, Alibaba PuHuiTi M, Alibaba PuHuiTi M
* Alibaba PuHuiTi, Alibaba PuHuiTi, Alibaba PuHuiTi Medium, Alibaba PuHuiTi Medium
* Alibaba PuHuiTi, Alibaba PuHuiTi, Alibaba PuHuiTi R, Alibaba PuHuiTi R
* Alimama DongFangDaKai, Alimama DongFangDaKai
* Alimama FangYuanTi VF, Alimama FangYuanTi VF
* Aqua Kana,.Aqua Kana
* Cat chewing assorted black, MaokenAssortedSans
* Do Hyeon
* Dubai
* Gen Shin Gothic, Gen Shin Gothic, Gen Shin Gothic Bold
* Gen Shin Gothic, Gen Shin Gothic Regular
* Georgia Pro
* Gmarket Sans TTF, Gmarket Sans TTF Medium
* HanWang SinSongThin-Gb5, Wang Hanzong's Thin New Song Bamboo Slips, Wang Hanzong's Thin New Song Bamboo Slips
* HanWangGB06, Wang Hanzong's regular script with pen
* HappyZcool-2016, HappyZcool 2016 revised version
* HGMaruGothicMPRO
* HGMinchoE,HGMing DynastyE
* HGPMinchoE,HGP Ming Dynasty E
* HGSMinchoE,HGS Ming Dynasty E
* HuXiaoBo-NanShen, Hu Xiaobo’s male body
* JiangChengYuanTi, JiangChengYuanTi, JiangChengYuanTi 300W
* JiangChengYuanTi, JiangChengYuanTi, JiangChengYuanTi 600W
* Lato
* Lato,Lato Light
* LXGW WenKai,
* MaoKenTangYuan (beta), MaoKenTangYuan (beta)
* Merriweather
* Merriweather,Merriweather Black
* Merriweather,Merriweather Light
* MingLiU\\_HKSCS, MingLiU\\_HKSCS
* Mitr
* Mitr,Mitr ExtraLight
* Mitr,Mitr Light
* Mitr,Mitr Medium
* Mitr,Mitr SemiBold
* Mukta Mahee,Mukta Mahee Bold
* Mukta Mahee,Mukta Mahee ExtraBold
* Mukta Mahee,Mukta Mahee Light
* Mukta Mahee,Mukta Mahee Medium
* Mukta Mahee,MuktaMahee Regular
* Mukta Mahee,MuktaMahee SemiBold
* New York
* Noteworthy
* NoTo Nastaliq Urdu
* Noto Nastaliq Urdu UI
* Noto Sans Armenian
* Noto Sans Armenian,Noto Sans Armenian Blk
* Noto Sans Armenian,Noto Sans Armenian ExtBd
* Noto Sans Armenian,Noto Sans Armenian ExtLt
* Noto Sans Armenian,Noto Sans Armenian Light
* Noto Sans Armenian,Noto Sans Armenian Med
* Noto Sans Armenian,Noto Sans Armenian SemBd
* Noto Sans Armenian,Noto Sans Armenian Thin
* Noto Sans Avestan
* Noto Sans Bamum
* Noto Sans Batak
* Noto Sans Brahmi
* Noto Sans Buginese
* Noto Sans Buhid
* Noto Sans Carian
* Noto Sans Chakma
* Noto Sans Cham
* Noto Sans Coptic
* Noto Sans Cuneiform
* Noto Sans Cypriot
* Noto Sans Egyptian Hieroglyphs,Noto Sans EgyptHiero
* Noto Sans Glagolitic
* Noto Sans Gothic
* Noto Sans Hanunoo
* Noto Sans Imperial Aramaic,Noto Sans ImpAramaic
* Noto Sans Inscriptional Pahlavi,Noto Sans InsPahlav
* Noto Sans Inscriptional Parthian,Noto Sans InsParthi
* Noto Sans Javanese
* Noto Sans Kaithi
* Noto Sans Kannada
* Noto Sans Kannada,Noto Sans Kannada Black
* Noto Sans Kannada,Noto Sans Kannada ExtraBold
* Noto Sans Kannada,Noto Sans Kannada ExtraLight
* Noto Sans Kannada,Noto Sans Kannada Light
* Noto Sans Kannada,Noto Sans Kannada Medium
* Noto Sans Kannada,Noto Sans Kannada SemiBold
* Noto Sans Kannada,Noto Sans Kannada Thin
* Noto Sans Kayah Li
* Noto Sans Kharoshthi
* Noto Sans Lepcha
* Noto Sans Limbu
* Noto Sans Linear B
* Noto Sans Lisu
* Noto Sans Lycian
* Noto Sans Lydian
* Noto Sans Mandaic
* Noto Sans Meetei Mayek
* Noto Sans Mongolian
* Noto Sans Myanmar
* Noto Sans Myanmar,Noto Sans Myanmar Blk
* Noto Sans Myanmar,Noto Sans Myanmar ExtBd
* Noto Sans Myanmar,Noto Sans Myanmar ExtLt
* Noto Sans Myanmar,Noto Sans Myanmar Light
* Noto Sans Myanmar,Noto Sans Myanmar Med
* Noto Sans Myanmar,Noto Sans Myanmar SemBd
* Noto Sans Myanmar,Noto Sans Myanmar Thin
* Noto Sans New Tai Lue
* Noto Sans NKo,Noto Sans N'Ko
* Noto Sans Ogham
* Noto Sans Ol Chiki
* Noto Sans Old Italic
* Noto Sans Old Persian
* Noto Sans Old South Arabian,Noto Sans OldSouArab
* Noto Sans Old Turkish
* Noto Sans Oriya
* Noto Sans Osmanya
* Noto Sans PhagsPa
* Noto Sans Phoenician
* Noto Sans Rejang
* Noto Sans Runic
* Noto Sans Samaritan
* Noto Sans Saurashtra
* Noto Sans SC
* Noto Sans SC,Noto Sans SC Black
* Noto Sans SC,Noto Sans SC Light
* Noto Sans SC,Noto Sans SC Medium
* Noto Sans SC,Noto Sans SC Thin
* Noto Sans Shavian
* Noto Sans Sundanese
* Noto Sans Syloti Nagri
* Noto Sans Syriac
* Noto Sans Tagalog
* Noto Sans Tagbanwa
* Noto Sans Tai Le
* Noto Sans Tai Tham
* Noto Sans Tai Viet
* Noto Sans Thaana
* Noto Sans Tifinagh
* Noto Sans Ugaritic
* Noto Sans Vai
* Noto Sans Yi
* Noto Sans Zawgyi
* Noto Sans Zawgyi,Noto Sans Zawgyi Blk
* Noto Sans Zawgyi,Noto Sans Zawgyi ExtBd
* Noto Sans Zawgyi,Noto Sans Zawgyi ExtLt
* Noto Sans Zawgyi,Noto Sans Zawgyi Light
* Noto Sans Zawgyi,Noto Sans Zawgyi Med
* Noto Sans Zawgyi,Noto Sans Zawgyi SemBd
* Noto Sans Zawgyi,Noto Sans Zawgyi Thin
* Noto Serif Balinese
* Noto Serif Myanmar
* Noto Serif Myanmar,Noto Serif Myanmar Blk
* Noto Serif Myanmar,Noto Serif Myanmar ExtBd
* Noto Serif Myanmar,Noto Serif Myanmar ExtLt
* Noto Serif Myanmar,Noto Serif Myanmar Light
* Noto Serif Myanmar,Noto Serif Myanmar Med
* Noto Serif Myanmar,Noto Serif Myanmar SemBd
* Noto Serif Myanmar,Noto Serif Myanmar Thin
* Noto Serif SC
* Noto Serif SC,Noto Serif SC Black
* Noto Serif SC,Noto Serif SC ExtraLight
* Noto Serif SC,Noto Serif SC Light
* Noto Serif SC,Noto Serif SC Medium
* Noto Serif SC,Noto Serif SC SemiBold
* Open Sans
* Open Sans,Open Sans Extrabold
* Open Sans,Open Sans Light
* Open Sans,Open Sans Semibold
* Oswald
* Pangolin
* PT Mono
* PT Sans
* PT Sans Caption
* PT Serif
* Quicksand
* Quicksand, Quicksand SemiBold
* Quicksand,Quicksand Medium
* Roboto
* Roboto Condensed
* Roboto Slab
* Roboto, Roboto Black
* Roboto, Roboto Medium
* Roboto, Roboto Thin
* shetumodengxiaofangti, photo modern small cube
* Soukou Mincho, Armored Ming Dynasty
* Source Han Sans CN, Source Han Sans CN ExtraLight, Source Han Sans CN ExtraLight
* Source Han Sans CN, Source Han Sans CN Heavy, Source Han Sans CN Heavy
* Source Han Sans CN, Source Han Sans CN Light, Source Han Sans CN Light
* Source Han Sans CN, Source Han Sans CN Medium, Source Han Sans CN Medium
* Source Han Sans CN,Siyuan Bold CN,Source Han Sans CN Regular,Siyuan Bold CN Regular
* Source Han Sans CN,Source Han Sans CN Normal,Source Han Sans CN Normal
* Source Han Sans SC, Source Han Sans SC Heavy, Source Han Sans SC Heavy
* Source Han Sans SC, Source Han Sans SC Light, Source Han Sans SC Light
* Source Han Serif CN, Source Han Serif CN, Source Han Serif CN ExtraLight, Source Han Serif CN ExtraLight
* Source Han Serif CN, Source Han Serif CN, Source Han Serif CN Heavy, Source Han Serif CN Heavy
* Source Han Serif CN, Source Han Serif CN, Source Han Serif CN Light, Source Han Serif CN Light
* Source Han Serif CN, Source Han Serif CN, Source Han Serif CN SemiBold, Source Han Serif CN SemiBold
* Source Han Serif CN,Siyuan Songti CN
* Source Han Serif CN,Siyuan Songti CN,Source Han Serif CN Medium,Siyuan Songti CN Medium
* Source Han Serif K,
* Source Han Serif K, Source Han Serif K ExtraLight
* Source Han Serif K, Source Han Serif K Medium
* Source Han Serif SC
* Source Han Serif SC, Source Han Serif SC ExtraLight, Source Han Serif SC ExtraLight
* Source Han Serif SC, Source Han Serif SC Light, Source Han Serif SC Light
* Source Han Serif SC,Source Han Serif SC Heavy,Source Han Serif SC Heavy
* Source Han Serif SC,Source Han Serif SC Medium,Source Han Serif SC Medium
* Source Han Serif SC,Source Han Serif SC SemiBold,Source Han Serif SC SemiBold
* Source Han Serif TC
* Source Han Serif TC,Source Han Serif TC,Source Han Serif Heavy,Source Han Serif TC Heavy
* Source Han Serif TC,Source Han Serif TC,Source Han Serif Light,Source Han Serif TC Light
* Source Han Serif TC,Source Han Serif TC,Source Han Serif TC ExtraLight,Source Han Serif TC ExtraLight
* Source Han Serif TC,Source Han Serif TC,Source Han Serif TC Medium
* Source Han Serif TC,Source Han Serif TC,Source Han Serif TC SemiBold
* Source Han Serif,Source Han Serif Heavy,Source Han Serif Heavy
* Source Han Serif, Source Han Serif Light
* Source Han Serif, Source Han Serif Medium
* Source Sans Pro
* STIXGeneral
* STIXSizeFourSym
* STIXSizeOneSym
* STIXSizeTwoSym
* STKaiti, Chinese Kaiti
* Sukhumvit Set
* Taipei Sans TC Beta
* Taipei Sans TC Beta,Taipei Sans TC Beta Light
* Webdings
* YRDZST,Yang Rendong Bamboo Stone,YRDZST-Extralight,Yang Rendong Bamboo Stone-Extralight
* YRDZST,Yang Rendong Bamboo Stone,YRDZST-Heavy,Yang Rendong Bamboo Stone-Heavy
* YRDZST,Yang Rendong Bamboo Stone,YRDZST-Light,Yang Rendong Bamboo Stone-Light
* YRDZST,Yang Rendong Bamboo Stone,YRDZST-Medium,Yang Rendong Bamboo Stone-Medium
* YRDZST,Yang Rendong Bamboo Stone,YRDZST-Regular,Yang Rendong Bamboo Stone-Regular
* YRDZST,Yang Rendong Bamboo Stone,YRDZST-Semibold,Yang Rendong Bamboo Stone-Semibold
* Yu Gothic UI
* ZCOOL Addict Italic 01,Lucida Calligraphy
* ZCOOL Addict Italic 02,Lucida Calligraphy
* ZCOOL\\_KuHei, ZCOOL\\_KuHei
* zcool-gdh, zcool high-end black
* zcoolqingkehuangyouti, zcoolqingkehuangyouti
* ZCOOLtongtong
* zcoolwenyiti, zcoolwenyiti
* ZhenyanGB, Ruizi Zhenyan font is free for commercial use

<CalloutContainer type="info">
  <CalloutDescription>
    Don't see your font listed? Contact [support@agora.io](mailto\\:support@agora.io) and provide the font file. Agora can implement a backend change to support more fonts.
  </CalloutDescription>
</CalloutContainer>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Interactive Whiteboard supports file conversion from PPT and PPTX files into dynamic HTML web pages. The generated web pages can be accessed directly or presented on the whiteboard."
  }, {
    heading: undefined,
    content: "Interactive Whiteboard released a new version of file conversion service on July 27, 2022, that greatly improves conversion speed, content parsing, and stability. The new version also adds the ability to integrate with third-party whiteboard SDKs. Agora strongly recommends you use the new version of file conversion. See File conversion RESTful API reference."
  }, {
    heading: "introduction",
    content: "File conversion is implemented by Agora's server for Interactive Whiteboard service. When an app client requests to convert a file, your app server calls the Interactive Whiteboard RESTful API to send the request to the Agora server. The completes process is illustrated in the following diagram:"
  }, {
    heading: "introduction",
    content: "The file-conversion feature supports the following types of file conversion:"
  }, {
    heading: "introduction",
    content: "Static-file conversion"
  }, {
    heading: "introduction",
    content: "Dynamic-file conversion"
  }, {
    heading: "static-file-conversion",
    content: "Static-file conversion refers to converting PPT, PPTX, DOC, DOCX, and PDF files to static images in PNG or JPG/JPEG formats. The generated file does not preserve animations present in the source file."
  }, {
    heading: "static-file-conversion",
    content: "When using static-file conversion, pay attention to the following issues:"
  }, {
    heading: "static-file-conversion",
    content: "The conversion process works best when the source file is less than 50 pages long. If the source file has more than 100 pages, you may experience a conversion timeout."
  }, {
    heading: "static-file-conversion",
    content: "The higher the image resolution in the source file, the slower the conversion."
  }, {
    heading: "static-file-conversion",
    content: "PDF files generate the most accurate images when converted. If the generated image differs greatly from the source file in content or formatting, convert the source file to PDF and try again."
  }, {
    heading: "static-file-conversion",
    content: "Only valid PDF files are supported, that is, files that conform to PDF standards and have a valid header starting with `%PDF`."
  }, {
    heading: "static-file-conversion",
    content: "Note that because this feature is implemented with support from Aspose, Agora might not be able to respond to requests for customization as quickly as usual. Agora recommends that you run sufficient tests of the file-conversion feature. If the test result do not meet your expectations, consider using a third-party service."
  }, {
    heading: "static-file-conversion",
    content: "The new file conversion currently does not support generating resource packages. However, because the resources path is fixed, users can download resources by themselves."
  }, {
    heading: "dynamic-file-conversion",
    content: "Dynamic-file conversion refers to converting PPT/PPTX files edited with Microsoft Office to HTML web pages. The generated file preserves animations present in the source file."
  }, {
    heading: "dynamic-file-conversion",
    content: "When using dynamic-file conversion, pay attention to the following issues:"
  }, {
    heading: "dynamic-file-conversion",
    content: "Converting WPS files is not yet supported. You might also encounter problems when using PPTX files converted from WPS files."
  }, {
    heading: "dynamic-file-conversion",
    content: "The new file conversion currently does not support generating resource packages. However, because the resources path is fixed, users can download resources by themselves."
  }, {
    heading: "dynamic-file-conversion",
    content: "If a font is missing in a generated web page, you can either use the SDK to add a custom font or contact support\\@agora.io."
  }, {
    heading: "dynamic-file-conversion",
    content: "Due to inherent constrains in the PPT file format, PPT files are converted into PPTX files at the backend before parsing, which might encounter failure. Therefore, Agora recommends you to upload PPTX files for conversion."
  }, {
    heading: "dynamic-file-conversion",
    content: "A generated web page can be rendered into canvas pages via Fastboard SDK (coming soon), @netless/slide, or @netless/projector-plugin. The differences between these three rendering solutions are as follows:"
  }, {
    heading: "dynamic-file-conversion",
    content: "Fastboard SDK is the rendering plan designed for multi-window use-cases in Agora Interactive Whiteboard. Fastboard SDK is coming soon."
  }, {
    heading: "dynamic-file-conversion",
    content: "@netless/slide is a stand-alone document conversion and rendering dependency that does not include such things as whiteboards or state synchronization. Adopting this solution requires you to write extra codes to synchronize states. It is designed for use-cases where PPT is used alone in whiteboard apps."
  }, {
    heading: "dynamic-file-conversion",
    content: "@netless/projector-plugin is a plug-in for Whiteboard SDK that supports state synchronization, but it only works in single-window use-cases."
  }, {
    heading: "version-comparison",
    content: "Compared with the old version, the new file conversion adopts an engine developed by Agora and has the following advantages:"
  }, {
    heading: "version-comparison",
    content: "**Support for stand-alone access**. The new file conversion is no longer bound to Interactive Whiteboard and can be integrated with third-party whiteboard SDKs."
  }, {
    heading: "version-comparison",
    content: "**Faster conversion speed**. The conversion speed of the new version is increased by 200% to 400%."
  }, {
    heading: "version-comparison",
    content: "**Stronger content parsing**. The new file conversion supports parsing content that the old version cannot, including additional animations, filters, and other effects. The new version can parse all normal PPTX content."
  }, {
    heading: "version-comparison",
    content: "**Improved stability**. The new file conversion fixes multiple issues in the old version that could cause conversion failures."
  }, {
    heading: "version-comparison",
    content: "**New features**. Users can now pause ongoing conversion tasks or adjust task priorities."
  }, {
    heading: "version-comparison",
    content: "The new and the old versions of file conversion are **independent of each other**: The conversion task UUID generated by the new version cannot call the old version to query the progress, while the uuid generated by the old version cannot query the progress through the new version. If you want to query the progress of the old conversion tasks through the new version, contact support\\@agora.io."
  }, {
    heading: "version-comparison",
    content: "Although Agora Interactive Whiteboard continues to maintain the old version of file conversion, some issues could arise due to inherent limits in the architectural design. Agora recommends you choose an appropriate time to switch to the new file conversion. If you need support for the old version of file conversion, see the following resources:"
  }, {
    heading: "version-comparison",
    content: "Old File Conversion Overview"
  }, {
    heading: "version-comparison",
    content: "Old File Conversion API Reference"
  }, {
    heading: "prerequisites",
    content: "Before using file conversion, ensure that you have completed the following steps:"
  }, {
    heading: "create-a-third-party-cloud-storage-account",
    content: "To save files generated by file conversion, you need an account on a third-party cloud storage service such as Amazon S3, Google Cloud platform, or Alibaba."
  }, {
    heading: "upload-the-source-file",
    content: "Before you launch a file-conversion task, you must upload the source file to a third-party cloud storage space or your Nginx server. This produces a URL address for the file. Make sure that the Interactive Whiteboard can access the file via this URL address."
  }, {
    heading: "enable-file-conversion",
    content: "To convert documents on the whiteboard, enable the **Docs to Picture** and **Docs to Web** services for your data centers on the Interactive Whiteboard panel in Agora Console. For details, see Enable whiteboard server-side features."
  }, {
    heading: "start-file-conversion",
    content: "Take the following steps:"
  }, {
    heading: "start-file-conversion",
    content: "To start a file-conversion task, call the RESTful API and pass in the URL address of the source file along with other parameters. See Start file conversion."
  }, {
    heading: "start-file-conversion",
    content: "To query the progress of a file-conversion task, pass in the corresponding task UUID and Task Token. See Query file-conversion progress. Agora recommends that you implement an algorithm to regularly query the conversion progress so that your data is up to date."
  }, {
    heading: "ppt-conversion-supported-features-limitations-and-troubleshooting",
    content: "When converting PPT or PPTX files created in Microsoft PowerPoint into dynamic HTML web pages using File conversion, some elements—such as special effects, images, or animations—might not parse correctly. This can result in issues like missing or non-functional effects in the converted output. This section outlines the compatibility of the document conversion service with various PPT features, helping you identify and fix problematic elements in your presentations."
  }, {
    heading: "ppt-conversion-supported-features-limitations-and-troubleshooting",
    content: "These notes are only applicable to PPT or PPTX files made with MS PowerPoint. For PPT files made with WPS, Agora does not guarantee the conversion effect."
  }, {
    heading: "ppt-conversion-supported-features-limitations-and-troubleshooting",
    content: "Some functions and effects are not mentioned in the following list. This is due to functional inconsistencies caused by different versions which require manual testing."
  }, {
    heading: "supported-effects",
    content: "PPT element"
  }, {
    heading: "supported-effects",
    content: "Effects menu"
  }, {
    heading: "supported-effects",
    content: "Support effect"
  }, {
    heading: "supported-effects",
    content: "Measures to take"
  }, {
    heading: "supported-effects",
    content: "Word"
  }, {
    heading: "supported-effects",
    content: "Font"
  }, {
    heading: "supported-effects",
    content: "- Font style: See the list of Supported fonts<br />- Font size: All<br />- Color and underline: All<br />- Effect: Supports strikethrough, double strikethrough, superscript, subscript, equal-height characters<br />- Character Spacing: All<br />"
  }, {
    heading: "supported-effects",
    content: "After some fonts are converted, ensure that the font is installed locally for it to be displayed correctly."
  }, {
    heading: "supported-effects",
    content: "Paragraph"
  }, {
    heading: "supported-effects",
    content: "- Bullet<br />- Serial number<br />- Text alignment: All<br />- Indentation<br />- Spacing<br />- Chinese version: All<br />- Multi-column layout<br />"
  }, {
    heading: "supported-effects",
    content: "-"
  }, {
    heading: "supported-effects",
    content: "Shape"
  }, {
    heading: "supported-effects",
    content: "Shape Format"
  }, {
    heading: "supported-effects",
    content: "- Shape Fill: All<br />- Shape Outlines/Lines: All<br />"
  }, {
    heading: "supported-effects",
    content: "-"
  }, {
    heading: "supported-effects",
    content: "Sheet"
  }, {
    heading: "supported-effects",
    content: "Table Design"
  }, {
    heading: "supported-effects",
    content: "- Table style options: All<br />- Table style:- Subject: All<br />- Shading<br />- Frame<br />- Fill: color fill, picture fill, texture fill, gradient fill, pattern fill<br /><br />"
  }, {
    heading: "supported-effects",
    content: "-"
  }, {
    heading: "supported-effects",
    content: "Table Layout"
  }, {
    heading: "supported-effects",
    content: "All"
  }, {
    heading: "supported-effects",
    content: "-"
  }, {
    heading: "supported-effects",
    content: "Picture"
  }, {
    heading: "supported-effects",
    content: "Image Format"
  }, {
    heading: "supported-effects",
    content: "- Remove background<br />- Adjustments: All<br />- Image style:- Style templates<br />- Frame<br />- Format<br />- Effects: shadow, reflection, glow, soft edge<br /><br />- Arrangement: All<br />- Cropping<br />"
  }, {
    heading: "supported-effects",
    content: "-"
  }, {
    heading: "supported-effects",
    content: "Audio and Video"
  }, {
    heading: "supported-effects",
    content: "Audio/Video Format"
  }, {
    heading: "supported-effects",
    content: "- Cropping (progressive cropping)<br />- Add bookmark<br />"
  }, {
    heading: "supported-effects",
    content: "-"
  }, {
    heading: "supported-effects",
    content: "Animation"
  }, {
    heading: "supported-effects",
    content: "Animation Type"
  }, {
    heading: "supported-effects",
    content: "- Page cutting animation: fade in, fade out, push in, erase, split, reveal, cut in, random lines, shapes, uncover, cover, fall, hang, curtain, peel off, dissolve, chessboard, blinds, clock, ripple, switch, rotate, library, cube, box, comb, zoom, pan, carousel<br />- Appearance/disappearance animation: All<br />- Word animation: All<br />- Path Animation: All<br />- Template Animation: All<br />- Animation with sound<br />"
  }, {
    heading: "supported-effects",
    content: "-"
  }, {
    heading: "supported-effects",
    content: "Animation Properties"
  }, {
    heading: "supported-effects",
    content: "- Timing: start condition, duration, delay, repeat<br />- Trigger: by click, by bookmark<br />- Set text animation and combine text.<br />"
  }, {
    heading: "supported-effects",
    content: "-"
  }, {
    heading: "supported-effects",
    content: "Other"
  }, {
    heading: "supported-effects",
    content: "Other Menu"
  }, {
    heading: "supported-effects",
    content: "Modify PPT theme, customize theme"
  }, {
    heading: "supported-effects",
    content: "-"
  }, {
    heading: "unsupported-effects",
    content: "PPT element"
  }, {
    heading: "unsupported-effects",
    content: "Unsupported effects"
  }, {
    heading: "unsupported-effects",
    content: "Imperfectly supported effects"
  }, {
    heading: "unsupported-effects",
    content: "Measures to take"
  }, {
    heading: "unsupported-effects",
    content: "Word"
  }, {
    heading: "unsupported-effects",
    content: "- Font effect: All Caps, Small Caps<br />- Shape format - Text Options: Shadow, reflection, glow, soft edges, 3D format, 3D rotation<br />"
  }, {
    heading: "unsupported-effects",
    content: "- Text stroke: Cannot perfectly restore the effect in PPT.<br />- Custom fonts: Some font line breaks are inconsistent with the original PPT.<br />- Vertical text: Line spacing that is not single-spaced may be inconsistent with the original PPT, and the horizontal coordinate of the font will be offset.<br />- WordArt: The conversion effect is not perfect.<br />"
  }, {
    heading: "unsupported-effects",
    content: "- Avoid inserting too much text on one page.<br />- Avoid using line breaks continuously. It is recommended to split large paragraphs into multiple text boxes.<br />"
  }, {
    heading: "unsupported-effects",
    content: "Shape"
  }, {
    heading: "unsupported-effects",
    content: "Shapes with formulas do not support adding color fill animations."
  }, {
    heading: "unsupported-effects",
    content: "- Shape Format - Effects: When using shadow, reflection, glow, or soft edge effects, the entire shape is displayed first, and the special effects will take effect later.<br />- Shape Format - Shape Outline:- When you select Dashed Line, dashed lines smaller than 1.5 pt are converted to solid lines.<br />- Arrows may shift after conversion.<br /><br />"
  }, {
    heading: "unsupported-effects",
    content: "Some special graphics should not exceed the graphic boundary, and the part beyond the boundary is not displayed."
  }, {
    heading: "unsupported-effects",
    content: "Sheet"
  }, {
    heading: "unsupported-effects",
    content: "- Shape Format - Fill:- Pattern Fill<br />- The option to tile the image as a texture is not supported in image or texture fills.<br /><br />- Shape Format - Effects: Shadow, reflection, glow, soft edge, 3D format, 3D rotation.<br />"
  }, {
    heading: "unsupported-effects",
    content: "-"
  }, {
    heading: "unsupported-effects",
    content: "-"
  }, {
    heading: "unsupported-effects",
    content: "Picture"
  }, {
    heading: "unsupported-effects",
    content: "Image format-effect: 3D format, 3D rotation."
  }, {
    heading: "unsupported-effects",
    content: "- Image format - Remove background: Support is not perfect, the converted image may have white edges.<br />- Image format - Image color: Images that are recolored or use color filters may have color differences after conversion.<br />- Image Format - Image Correction: Brightness and contrast adjustment effects are not perfectly restored.<br />"
  }, {
    heading: "unsupported-effects",
    content: "-"
  }, {
    heading: "unsupported-effects",
    content: "Audio and Video"
  }, {
    heading: "unsupported-effects",
    content: "- Option: Play across slides.<br />- Style: Play in the background.<br />"
  }, {
    heading: "unsupported-effects",
    content: "-"
  }, {
    heading: "unsupported-effects",
    content: "-"
  }, {
    heading: "unsupported-effects",
    content: "Animation"
  }, {
    heading: "unsupported-effects",
    content: "- Page cutting animation: airplane, origami, fragments, vortex, shining, smooth.<br />- Emphasis animation: Zoom in or zoom out (only for text, not supported)/ brush color, color stretch, color pulse, underline.<br />- Path Animation: Rewind after playback is complete.<br />"
  }, {
    heading: "unsupported-effects",
    content: "- Timing-delay: There may be a small error in the animation delay time.<br />- Advanced Animation triggered by click: Click events penetrate the underlying elements.<br />"
  }, {
    heading: "unsupported-effects",
    content: "-"
  }, {
    heading: "unsupported-effects",
    content: "Other"
  }, {
    heading: "unsupported-effects",
    content: "- Extract annotations<br />- The following effects are not effective in the thumbnails generated after document conversion preview:- All gradient effects<br />- All page switching animations<br />- Animations that involve changes to the inside of a shape do not work, including: blinds, checkerboard, dissolve, random Lines, shapes, splits, stairs, wheels, erase, fade, float<br />- Transparency<br />- Recolor<br />- Shadow, reflection, glow, soft edge<br /><br />"
  }, {
    heading: "unsupported-effects",
    content: "The hide slide function does not support hiding the first page of the slide."
  }, {
    heading: "unsupported-effects",
    content: "-"
  }, {
    heading: "best-practices-for-troubleshooting-conversion-issues",
    content: "If some effects are missing in the converted PPT or are different from the original PPT, refer to the following steps to locate the problematic elements and fix them:"
  }, {
    heading: "best-practices-for-troubleshooting-conversion-issues",
    content: "Locate the problematic element"
  }, {
    heading: "best-practices-for-troubleshooting-conversion-issues",
    content: "Compare the PPT before and after conversion to find the problematic elements."
  }, {
    heading: "best-practices-for-troubleshooting-conversion-issues",
    content: "Deal with problematic elements"
  }, {
    heading: "best-practices-for-troubleshooting-conversion-issues",
    content: "Resolve the problem using one of the following methods:"
  }, {
    heading: "best-practices-for-troubleshooting-conversion-issues",
    content: "Remove the problematic element directly or remove unsupported effects on the element."
  }, {
    heading: "best-practices-for-troubleshooting-conversion-issues",
    content: "Replace the effect that is already supported by other document transformations for the element in question."
  }, {
    heading: "best-practices-for-troubleshooting-conversion-issues",
    content: "Save the problematic element as a picture, delete the element, and then reinsert the picture to the original position. If there are many problematic elements, combine those elements first and convert them to pictures."
  }, {
    heading: "best-practices-for-troubleshooting-conversion-issues",
    content: "Restart the conversion"
  }, {
    heading: "best-practices-for-troubleshooting-conversion-issues",
    content: "Call the RESTful API again to restart the conversion. After the conversion is successful, compare the PPT effects before and after the conversion. If there are any remaining problems, repeat the previous steps."
  }, {
    heading: "reference",
    content: "This section contains information that completes the information on this page, or points you to documentation that explains other aspects of this product."
  }, {
    heading: "google-cloud-storage-configuration",
    content: "To set up cloud storage and obtain configuration information for Google Cloud Platform, take the following steps:"
  }, {
    heading: "google-cloud-storage-configuration",
    content: "Create an account on Google Cloud and assign permissions on the settings page of Google Cloud storage."
  }, {
    heading: "google-cloud-storage-configuration",
    content: "After creation, click on the  button in the upper right corner and select **Project settings**."
  }, {
    heading: "google-cloud-storage-configuration",
    content: "Under **IAM and Admin**, select **Service Accounts**. In the service account list, click on the  button for the account just added, and select **Manage keys**."
  }, {
    heading: "google-cloud-storage-configuration",
    content: "Click **ADD KEY** > **Create new key**. Select **JSON** in the pop-up box and click **CREATE**. A `json` file is downloaded with the name format `projectId-xxxxxxxx.json`."
  }, {
    heading: "google-cloud-storage-configuration",
    content: "Open the downloaded json file, which looks like the following example:"
  }, {
    heading: "google-cloud-storage-configuration",
    content: "Use the information in the json file to fill-in the Google Cloud Storage configuration:"
  }, {
    heading: "google-cloud-storage-configuration",
    content: "The `project_id` in the json file corresponds to the `projectId` on Agora Console, `client_email` corresponds to `clientEmail`, `private_key` corresponds to `privateKey`, and `bucket` is filled with the name of the `bucket` to be used. The remaining parameters have the same meaning as for the AWS configuration.\nWhen copying the `private_key`, make sure that your text editor has not added any extra line breaks or `\\n` after each `\\n`."
  }, {
    heading: "google-cloud-storage-configuration",
    content: "Ensure that the newly created service account has writable permission for the Google storage bucket."
  }, {
    heading: "supported-fonts",
    content: "Interactive Whiteboard file conversion supports the following fonts:"
  }, {
    heading: "supported-fonts",
    content: "AaManYuShouXieTi, AaManYuShouXieTi"
  }, {
    heading: "supported-fonts",
    content: "Alibaba PuHuiTi, Alibaba PuHuiTi, Alibaba PuHuiTi B, Alibaba PuHuiTi B"
  }, {
    heading: "supported-fonts",
    content: "Alibaba PuHuiTi, Alibaba PuHuiTi, Alibaba PuHuiTi H, Alibaba PuHuiTi H"
  }, {
    heading: "supported-fonts",
    content: "Alibaba PuHuiTi, Alibaba PuHuiTi, Alibaba PuHuiTi Heavy, Alibaba PuHuiTi Heavy"
  }, {
    heading: "supported-fonts",
    content: "Alibaba PuHuiTi, Alibaba PuHuiTi, Alibaba PuHuiTi L, Alibaba PuHuiTi L"
  }, {
    heading: "supported-fonts",
    content: "Alibaba PuHuiTi, Alibaba PuHuiTi, Alibaba PuHuiTi Light, Alibaba PuHuiTi Light"
  }, {
    heading: "supported-fonts",
    content: "Alibaba PuHuiTi, Alibaba PuHuiTi, Alibaba PuHuiTi M, Alibaba PuHuiTi M"
  }, {
    heading: "supported-fonts",
    content: "Alibaba PuHuiTi, Alibaba PuHuiTi, Alibaba PuHuiTi Medium, Alibaba PuHuiTi Medium"
  }, {
    heading: "supported-fonts",
    content: "Alibaba PuHuiTi, Alibaba PuHuiTi, Alibaba PuHuiTi R, Alibaba PuHuiTi R"
  }, {
    heading: "supported-fonts",
    content: "Alimama DongFangDaKai, Alimama DongFangDaKai"
  }, {
    heading: "supported-fonts",
    content: "Alimama FangYuanTi VF, Alimama FangYuanTi VF"
  }, {
    heading: "supported-fonts",
    content: "Aqua Kana,.Aqua Kana"
  }, {
    heading: "supported-fonts",
    content: "Cat chewing assorted black, MaokenAssortedSans"
  }, {
    heading: "supported-fonts",
    content: "Do Hyeon"
  }, {
    heading: "supported-fonts",
    content: "Dubai"
  }, {
    heading: "supported-fonts",
    content: "Gen Shin Gothic, Gen Shin Gothic, Gen Shin Gothic Bold"
  }, {
    heading: "supported-fonts",
    content: "Gen Shin Gothic, Gen Shin Gothic Regular"
  }, {
    heading: "supported-fonts",
    content: "Georgia Pro"
  }, {
    heading: "supported-fonts",
    content: "Gmarket Sans TTF, Gmarket Sans TTF Medium"
  }, {
    heading: "supported-fonts",
    content: "HanWang SinSongThin-Gb5, Wang Hanzong's Thin New Song Bamboo Slips, Wang Hanzong's Thin New Song Bamboo Slips"
  }, {
    heading: "supported-fonts",
    content: "HanWangGB06, Wang Hanzong's regular script with pen"
  }, {
    heading: "supported-fonts",
    content: "HappyZcool-2016, HappyZcool 2016 revised version"
  }, {
    heading: "supported-fonts",
    content: "HGMaruGothicMPRO"
  }, {
    heading: "supported-fonts",
    content: "HGMinchoE,HGMing DynastyE"
  }, {
    heading: "supported-fonts",
    content: "HGPMinchoE,HGP Ming Dynasty E"
  }, {
    heading: "supported-fonts",
    content: "HGSMinchoE,HGS Ming Dynasty E"
  }, {
    heading: "supported-fonts",
    content: "HuXiaoBo-NanShen, Hu Xiaobo’s male body"
  }, {
    heading: "supported-fonts",
    content: "JiangChengYuanTi, JiangChengYuanTi, JiangChengYuanTi 300W"
  }, {
    heading: "supported-fonts",
    content: "JiangChengYuanTi, JiangChengYuanTi, JiangChengYuanTi 600W"
  }, {
    heading: "supported-fonts",
    content: "Lato"
  }, {
    heading: "supported-fonts",
    content: "Lato,Lato Light"
  }, {
    heading: "supported-fonts",
    content: "LXGW WenKai,"
  }, {
    heading: "supported-fonts",
    content: "MaoKenTangYuan (beta), MaoKenTangYuan (beta)"
  }, {
    heading: "supported-fonts",
    content: "Merriweather"
  }, {
    heading: "supported-fonts",
    content: "Merriweather,Merriweather Black"
  }, {
    heading: "supported-fonts",
    content: "Merriweather,Merriweather Light"
  }, {
    heading: "supported-fonts",
    content: "MingLiU\\_HKSCS, MingLiU\\_HKSCS"
  }, {
    heading: "supported-fonts",
    content: "Mitr"
  }, {
    heading: "supported-fonts",
    content: "Mitr,Mitr ExtraLight"
  }, {
    heading: "supported-fonts",
    content: "Mitr,Mitr Light"
  }, {
    heading: "supported-fonts",
    content: "Mitr,Mitr Medium"
  }, {
    heading: "supported-fonts",
    content: "Mitr,Mitr SemiBold"
  }, {
    heading: "supported-fonts",
    content: "Mukta Mahee,Mukta Mahee Bold"
  }, {
    heading: "supported-fonts",
    content: "Mukta Mahee,Mukta Mahee ExtraBold"
  }, {
    heading: "supported-fonts",
    content: "Mukta Mahee,Mukta Mahee Light"
  }, {
    heading: "supported-fonts",
    content: "Mukta Mahee,Mukta Mahee Medium"
  }, {
    heading: "supported-fonts",
    content: "Mukta Mahee,MuktaMahee Regular"
  }, {
    heading: "supported-fonts",
    content: "Mukta Mahee,MuktaMahee SemiBold"
  }, {
    heading: "supported-fonts",
    content: "New York"
  }, {
    heading: "supported-fonts",
    content: "Noteworthy"
  }, {
    heading: "supported-fonts",
    content: "NoTo Nastaliq Urdu"
  }, {
    heading: "supported-fonts",
    content: "Noto Nastaliq Urdu UI"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Armenian"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Armenian,Noto Sans Armenian Blk"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Armenian,Noto Sans Armenian ExtBd"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Armenian,Noto Sans Armenian ExtLt"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Armenian,Noto Sans Armenian Light"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Armenian,Noto Sans Armenian Med"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Armenian,Noto Sans Armenian SemBd"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Armenian,Noto Sans Armenian Thin"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Avestan"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Bamum"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Batak"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Brahmi"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Buginese"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Buhid"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Carian"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Chakma"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Cham"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Coptic"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Cuneiform"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Cypriot"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Egyptian Hieroglyphs,Noto Sans EgyptHiero"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Glagolitic"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Gothic"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Hanunoo"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Imperial Aramaic,Noto Sans ImpAramaic"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Inscriptional Pahlavi,Noto Sans InsPahlav"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Inscriptional Parthian,Noto Sans InsParthi"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Javanese"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Kaithi"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Kannada"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Kannada,Noto Sans Kannada Black"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Kannada,Noto Sans Kannada ExtraBold"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Kannada,Noto Sans Kannada ExtraLight"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Kannada,Noto Sans Kannada Light"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Kannada,Noto Sans Kannada Medium"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Kannada,Noto Sans Kannada SemiBold"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Kannada,Noto Sans Kannada Thin"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Kayah Li"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Kharoshthi"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Lepcha"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Limbu"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Linear B"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Lisu"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Lycian"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Lydian"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Mandaic"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Meetei Mayek"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Mongolian"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Myanmar"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Myanmar,Noto Sans Myanmar Blk"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Myanmar,Noto Sans Myanmar ExtBd"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Myanmar,Noto Sans Myanmar ExtLt"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Myanmar,Noto Sans Myanmar Light"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Myanmar,Noto Sans Myanmar Med"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Myanmar,Noto Sans Myanmar SemBd"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Myanmar,Noto Sans Myanmar Thin"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans New Tai Lue"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans NKo,Noto Sans N'Ko"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Ogham"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Ol Chiki"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Old Italic"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Old Persian"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Old South Arabian,Noto Sans OldSouArab"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Old Turkish"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Oriya"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Osmanya"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans PhagsPa"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Phoenician"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Rejang"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Runic"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Samaritan"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Saurashtra"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans SC"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans SC,Noto Sans SC Black"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans SC,Noto Sans SC Light"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans SC,Noto Sans SC Medium"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans SC,Noto Sans SC Thin"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Shavian"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Sundanese"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Syloti Nagri"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Syriac"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Tagalog"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Tagbanwa"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Tai Le"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Tai Tham"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Tai Viet"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Thaana"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Tifinagh"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Ugaritic"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Vai"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Yi"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Zawgyi"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Zawgyi,Noto Sans Zawgyi Blk"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Zawgyi,Noto Sans Zawgyi ExtBd"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Zawgyi,Noto Sans Zawgyi ExtLt"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Zawgyi,Noto Sans Zawgyi Light"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Zawgyi,Noto Sans Zawgyi Med"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Zawgyi,Noto Sans Zawgyi SemBd"
  }, {
    heading: "supported-fonts",
    content: "Noto Sans Zawgyi,Noto Sans Zawgyi Thin"
  }, {
    heading: "supported-fonts",
    content: "Noto Serif Balinese"
  }, {
    heading: "supported-fonts",
    content: "Noto Serif Myanmar"
  }, {
    heading: "supported-fonts",
    content: "Noto Serif Myanmar,Noto Serif Myanmar Blk"
  }, {
    heading: "supported-fonts",
    content: "Noto Serif Myanmar,Noto Serif Myanmar ExtBd"
  }, {
    heading: "supported-fonts",
    content: "Noto Serif Myanmar,Noto Serif Myanmar ExtLt"
  }, {
    heading: "supported-fonts",
    content: "Noto Serif Myanmar,Noto Serif Myanmar Light"
  }, {
    heading: "supported-fonts",
    content: "Noto Serif Myanmar,Noto Serif Myanmar Med"
  }, {
    heading: "supported-fonts",
    content: "Noto Serif Myanmar,Noto Serif Myanmar SemBd"
  }, {
    heading: "supported-fonts",
    content: "Noto Serif Myanmar,Noto Serif Myanmar Thin"
  }, {
    heading: "supported-fonts",
    content: "Noto Serif SC"
  }, {
    heading: "supported-fonts",
    content: "Noto Serif SC,Noto Serif SC Black"
  }, {
    heading: "supported-fonts",
    content: "Noto Serif SC,Noto Serif SC ExtraLight"
  }, {
    heading: "supported-fonts",
    content: "Noto Serif SC,Noto Serif SC Light"
  }, {
    heading: "supported-fonts",
    content: "Noto Serif SC,Noto Serif SC Medium"
  }, {
    heading: "supported-fonts",
    content: "Noto Serif SC,Noto Serif SC SemiBold"
  }, {
    heading: "supported-fonts",
    content: "Open Sans"
  }, {
    heading: "supported-fonts",
    content: "Open Sans,Open Sans Extrabold"
  }, {
    heading: "supported-fonts",
    content: "Open Sans,Open Sans Light"
  }, {
    heading: "supported-fonts",
    content: "Open Sans,Open Sans Semibold"
  }, {
    heading: "supported-fonts",
    content: "Oswald"
  }, {
    heading: "supported-fonts",
    content: "Pangolin"
  }, {
    heading: "supported-fonts",
    content: "PT Mono"
  }, {
    heading: "supported-fonts",
    content: "PT Sans"
  }, {
    heading: "supported-fonts",
    content: "PT Sans Caption"
  }, {
    heading: "supported-fonts",
    content: "PT Serif"
  }, {
    heading: "supported-fonts",
    content: "Quicksand"
  }, {
    heading: "supported-fonts",
    content: "Quicksand, Quicksand SemiBold"
  }, {
    heading: "supported-fonts",
    content: "Quicksand,Quicksand Medium"
  }, {
    heading: "supported-fonts",
    content: "Roboto"
  }, {
    heading: "supported-fonts",
    content: "Roboto Condensed"
  }, {
    heading: "supported-fonts",
    content: "Roboto Slab"
  }, {
    heading: "supported-fonts",
    content: "Roboto, Roboto Black"
  }, {
    heading: "supported-fonts",
    content: "Roboto, Roboto Medium"
  }, {
    heading: "supported-fonts",
    content: "Roboto, Roboto Thin"
  }, {
    heading: "supported-fonts",
    content: "shetumodengxiaofangti, photo modern small cube"
  }, {
    heading: "supported-fonts",
    content: "Soukou Mincho, Armored Ming Dynasty"
  }, {
    heading: "supported-fonts",
    content: "Source Han Sans CN, Source Han Sans CN ExtraLight, Source Han Sans CN ExtraLight"
  }, {
    heading: "supported-fonts",
    content: "Source Han Sans CN, Source Han Sans CN Heavy, Source Han Sans CN Heavy"
  }, {
    heading: "supported-fonts",
    content: "Source Han Sans CN, Source Han Sans CN Light, Source Han Sans CN Light"
  }, {
    heading: "supported-fonts",
    content: "Source Han Sans CN, Source Han Sans CN Medium, Source Han Sans CN Medium"
  }, {
    heading: "supported-fonts",
    content: "Source Han Sans CN,Siyuan Bold CN,Source Han Sans CN Regular,Siyuan Bold CN Regular"
  }, {
    heading: "supported-fonts",
    content: "Source Han Sans CN,Source Han Sans CN Normal,Source Han Sans CN Normal"
  }, {
    heading: "supported-fonts",
    content: "Source Han Sans SC, Source Han Sans SC Heavy, Source Han Sans SC Heavy"
  }, {
    heading: "supported-fonts",
    content: "Source Han Sans SC, Source Han Sans SC Light, Source Han Sans SC Light"
  }, {
    heading: "supported-fonts",
    content: "Source Han Serif CN, Source Han Serif CN, Source Han Serif CN ExtraLight, Source Han Serif CN ExtraLight"
  }, {
    heading: "supported-fonts",
    content: "Source Han Serif CN, Source Han Serif CN, Source Han Serif CN Heavy, Source Han Serif CN Heavy"
  }, {
    heading: "supported-fonts",
    content: "Source Han Serif CN, Source Han Serif CN, Source Han Serif CN Light, Source Han Serif CN Light"
  }, {
    heading: "supported-fonts",
    content: "Source Han Serif CN, Source Han Serif CN, Source Han Serif CN SemiBold, Source Han Serif CN SemiBold"
  }, {
    heading: "supported-fonts",
    content: "Source Han Serif CN,Siyuan Songti CN"
  }, {
    heading: "supported-fonts",
    content: "Source Han Serif CN,Siyuan Songti CN,Source Han Serif CN Medium,Siyuan Songti CN Medium"
  }, {
    heading: "supported-fonts",
    content: "Source Han Serif K,"
  }, {
    heading: "supported-fonts",
    content: "Source Han Serif K, Source Han Serif K ExtraLight"
  }, {
    heading: "supported-fonts",
    content: "Source Han Serif K, Source Han Serif K Medium"
  }, {
    heading: "supported-fonts",
    content: "Source Han Serif SC"
  }, {
    heading: "supported-fonts",
    content: "Source Han Serif SC, Source Han Serif SC ExtraLight, Source Han Serif SC ExtraLight"
  }, {
    heading: "supported-fonts",
    content: "Source Han Serif SC, Source Han Serif SC Light, Source Han Serif SC Light"
  }, {
    heading: "supported-fonts",
    content: "Source Han Serif SC,Source Han Serif SC Heavy,Source Han Serif SC Heavy"
  }, {
    heading: "supported-fonts",
    content: "Source Han Serif SC,Source Han Serif SC Medium,Source Han Serif SC Medium"
  }, {
    heading: "supported-fonts",
    content: "Source Han Serif SC,Source Han Serif SC SemiBold,Source Han Serif SC SemiBold"
  }, {
    heading: "supported-fonts",
    content: "Source Han Serif TC"
  }, {
    heading: "supported-fonts",
    content: "Source Han Serif TC,Source Han Serif TC,Source Han Serif Heavy,Source Han Serif TC Heavy"
  }, {
    heading: "supported-fonts",
    content: "Source Han Serif TC,Source Han Serif TC,Source Han Serif Light,Source Han Serif TC Light"
  }, {
    heading: "supported-fonts",
    content: "Source Han Serif TC,Source Han Serif TC,Source Han Serif TC ExtraLight,Source Han Serif TC ExtraLight"
  }, {
    heading: "supported-fonts",
    content: "Source Han Serif TC,Source Han Serif TC,Source Han Serif TC Medium"
  }, {
    heading: "supported-fonts",
    content: "Source Han Serif TC,Source Han Serif TC,Source Han Serif TC SemiBold"
  }, {
    heading: "supported-fonts",
    content: "Source Han Serif,Source Han Serif Heavy,Source Han Serif Heavy"
  }, {
    heading: "supported-fonts",
    content: "Source Han Serif, Source Han Serif Light"
  }, {
    heading: "supported-fonts",
    content: "Source Han Serif, Source Han Serif Medium"
  }, {
    heading: "supported-fonts",
    content: "Source Sans Pro"
  }, {
    heading: "supported-fonts",
    content: "STIXGeneral"
  }, {
    heading: "supported-fonts",
    content: "STIXSizeFourSym"
  }, {
    heading: "supported-fonts",
    content: "STIXSizeOneSym"
  }, {
    heading: "supported-fonts",
    content: "STIXSizeTwoSym"
  }, {
    heading: "supported-fonts",
    content: "STKaiti, Chinese Kaiti"
  }, {
    heading: "supported-fonts",
    content: "Sukhumvit Set"
  }, {
    heading: "supported-fonts",
    content: "Taipei Sans TC Beta"
  }, {
    heading: "supported-fonts",
    content: "Taipei Sans TC Beta,Taipei Sans TC Beta Light"
  }, {
    heading: "supported-fonts",
    content: "Webdings"
  }, {
    heading: "supported-fonts",
    content: "YRDZST,Yang Rendong Bamboo Stone,YRDZST-Extralight,Yang Rendong Bamboo Stone-Extralight"
  }, {
    heading: "supported-fonts",
    content: "YRDZST,Yang Rendong Bamboo Stone,YRDZST-Heavy,Yang Rendong Bamboo Stone-Heavy"
  }, {
    heading: "supported-fonts",
    content: "YRDZST,Yang Rendong Bamboo Stone,YRDZST-Light,Yang Rendong Bamboo Stone-Light"
  }, {
    heading: "supported-fonts",
    content: "YRDZST,Yang Rendong Bamboo Stone,YRDZST-Medium,Yang Rendong Bamboo Stone-Medium"
  }, {
    heading: "supported-fonts",
    content: "YRDZST,Yang Rendong Bamboo Stone,YRDZST-Regular,Yang Rendong Bamboo Stone-Regular"
  }, {
    heading: "supported-fonts",
    content: "YRDZST,Yang Rendong Bamboo Stone,YRDZST-Semibold,Yang Rendong Bamboo Stone-Semibold"
  }, {
    heading: "supported-fonts",
    content: "Yu Gothic UI"
  }, {
    heading: "supported-fonts",
    content: "ZCOOL Addict Italic 01,Lucida Calligraphy"
  }, {
    heading: "supported-fonts",
    content: "ZCOOL Addict Italic 02,Lucida Calligraphy"
  }, {
    heading: "supported-fonts",
    content: "ZCOOL\\_KuHei, ZCOOL\\_KuHei"
  }, {
    heading: "supported-fonts",
    content: "zcool-gdh, zcool high-end black"
  }, {
    heading: "supported-fonts",
    content: "zcoolqingkehuangyouti, zcoolqingkehuangyouti"
  }, {
    heading: "supported-fonts",
    content: "ZCOOLtongtong"
  }, {
    heading: "supported-fonts",
    content: "zcoolwenyiti, zcoolwenyiti"
  }, {
    heading: "supported-fonts",
    content: "ZhenyanGB, Ruizi Zhenyan font is free for commercial use"
  }, {
    heading: "supported-fonts",
    content: "Don't see your font listed? Contact support\\@agora.io and provide the font file. Agora can implement a backend change to support more fonts."
  }],
  headings: [{
    id: "introduction",
    content: "Introduction"
  }, {
    id: "static-file-conversion",
    content: "Static-file conversion"
  }, {
    id: "dynamic-file-conversion",
    content: "Dynamic-file conversion"
  }, {
    id: "version-comparison",
    content: "Version comparison"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "create-a-third-party-cloud-storage-account",
    content: "Create a third-party cloud storage account"
  }, {
    id: "upload-the-source-file",
    content: "Upload the source file"
  }, {
    id: "enable-file-conversion",
    content: "Enable file conversion"
  }, {
    id: "start-file-conversion",
    content: "Start file conversion"
  }, {
    id: "ppt-conversion-supported-features-limitations-and-troubleshooting",
    content: "PPT Conversion: Supported features, limitations, and troubleshooting"
  }, {
    id: "supported-effects",
    content: "Supported effects"
  }, {
    id: "unsupported-effects",
    content: "Unsupported effects"
  }, {
    id: "best-practices-for-troubleshooting-conversion-issues",
    content: "Best practices for troubleshooting conversion issues"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "google-cloud-storage-configuration",
    content: "Google Cloud Storage configuration"
  }, {
    id: "supported-fonts",
    content: "Supported fonts"
  }]
};
export let toc = [{
  depth: 2,
  url: "#introduction",
  title: _jsx(_Fragment, {
    children: "Introduction"
  })
}, {
  depth: 3,
  url: "#static-file-conversion",
  title: _jsx(_Fragment, {
    children: "Static-file conversion"
  })
}, {
  depth: 3,
  url: "#dynamic-file-conversion",
  title: _jsx(_Fragment, {
    children: "Dynamic-file conversion"
  })
}, {
  depth: 3,
  url: "#version-comparison",
  title: _jsx(_Fragment, {
    children: "Version comparison"
  })
}, {
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 3,
  url: "#create-a-third-party-cloud-storage-account",
  title: _jsx(_Fragment, {
    children: "Create a third-party cloud storage account"
  })
}, {
  depth: 3,
  url: "#upload-the-source-file",
  title: _jsx(_Fragment, {
    children: "Upload the source file"
  })
}, {
  depth: 3,
  url: "#enable-file-conversion",
  title: _jsx(_Fragment, {
    children: "Enable file conversion"
  })
}, {
  depth: 2,
  url: "#start-file-conversion",
  title: _jsx(_Fragment, {
    children: "Start file conversion"
  })
}, {
  depth: 2,
  url: "#ppt-conversion-supported-features-limitations-and-troubleshooting",
  title: _jsx(_Fragment, {
    children: "PPT Conversion: Supported features, limitations, and troubleshooting"
  })
}, {
  depth: 3,
  url: "#supported-effects",
  title: _jsx(_Fragment, {
    children: "Supported effects"
  })
}, {
  depth: 3,
  url: "#unsupported-effects",
  title: _jsx(_Fragment, {
    children: "Unsupported effects"
  })
}, {
  depth: 3,
  url: "#best-practices-for-troubleshooting-conversion-issues",
  title: _jsx(_Fragment, {
    children: "Best practices for troubleshooting conversion issues"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#google-cloud-storage-configuration",
  title: _jsx(_Fragment, {
    children: "Google Cloud Storage configuration"
  })
}, {
  depth: 3,
  url: "#supported-fonts",
  title: _jsx(_Fragment, {
    children: "Supported fonts"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
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
      children: "Interactive Whiteboard supports file conversion from PPT and PPTX files into dynamic HTML web pages. The generated web pages can be accessed directly or presented on the whiteboard."
    }), `
`, _jsxs(_components.p, {
      children: ["Interactive Whiteboard released a new version of file conversion service on July 27, 2022, that greatly improves conversion speed, content parsing, and stability. The new version also adds the ability to integrate with third-party whiteboard SDKs. Agora strongly recommends you use the new version of file conversion. See ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/whiteboard/file-conversion",
        children: "File conversion RESTful API reference"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), `
`, _jsx(_components.p, {
      children: "File conversion is implemented by Agora's server for Interactive Whiteboard service. When an app client requests to convert a file, your app server calls the Interactive Whiteboard RESTful API to send the request to the Agora server. The completes process is illustrated in the following diagram:"
    }), `
`, `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1618477596512",
        alt: ""
      })
    }), `
`, `
`, _jsx(_components.p, {
      children: "The file-conversion feature supports the following types of file conversion:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Static-file conversion"
      }), `
`, _jsx(_components.li, {
        children: "Dynamic-file conversion"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "static-file-conversion",
      children: "Static-file conversion"
    }), `
`, _jsx(_components.p, {
      children: "Static-file conversion refers to converting PPT, PPTX, DOC, DOCX, and PDF files to static images in PNG or JPG/JPEG formats. The generated file does not preserve animations present in the source file."
    }), `
`, _jsx(_components.p, {
      children: "When using static-file conversion, pay attention to the following issues:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The conversion process works best when the source file is less than 50 pages long. If the source file has more than 100 pages, you may experience a conversion timeout."
      }), `
`, _jsx(_components.li, {
        children: "The higher the image resolution in the source file, the slower the conversion."
      }), `
`, _jsx(_components.li, {
        children: "PDF files generate the most accurate images when converted. If the generated image differs greatly from the source file in content or formatting, convert the source file to PDF and try again."
      }), `
`, _jsxs(_components.li, {
        children: ["Only valid PDF files are supported, that is, files that conform to PDF standards and have a valid header starting with ", _jsx(_components.code, {
          children: "%PDF"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Note that because this feature is implemented with support from ", _jsx(_components.a, {
          href: "https://www.aspose.app/",
          children: "Aspose"
        }), ", Agora might not be able to respond to requests for customization as quickly as usual. Agora recommends that you run sufficient tests of the file-conversion feature. If the test result do not meet your expectations, consider using a third-party service."]
      }), `
`, _jsx(_components.li, {
        children: "The new file conversion currently does not support generating resource packages. However, because the resources path is fixed, users can download resources by themselves."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "dynamic-file-conversion",
      children: "Dynamic-file conversion"
    }), `
`, _jsx(_components.p, {
      children: "Dynamic-file conversion refers to converting PPT/PPTX files edited with Microsoft Office to HTML web pages. The generated file preserves animations present in the source file."
    }), `
`, _jsx(_components.p, {
      children: "When using dynamic-file conversion, pay attention to the following issues:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Converting WPS files is not yet supported. You might also encounter problems when using PPTX files converted from WPS files."
      }), `
`, _jsx(_components.li, {
        children: "The new file conversion currently does not support generating resource packages. However, because the resources path is fixed, users can download resources by themselves."
      }), `
`, _jsxs(_components.li, {
        children: ["If a font is missing in a generated web page, you can either use the SDK to add a custom font or contact ", _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Due to inherent constrains in the PPT file format, PPT files are converted into PPTX files at the backend before parsing, which might encounter failure. Therefore, Agora recommends you to upload PPTX files for conversion."
      }), `
`, _jsxs(_components.li, {
        children: ["A generated web page can be rendered into canvas pages via Fastboard SDK (coming soon), ", _jsx(_components.a, {
          href: "https://www.npmjs.com/package/@netless/slide",
          children: "@netless/slide"
        }), ", or ", _jsx(_components.a, {
          href: "https://github.com/netless-io/projector-plugin",
          children: "@netless/projector-plugin"
        }), ". The differences between these three rendering solutions are as follows:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Fastboard SDK is the rendering plan designed for multi-window use-cases in Agora Interactive Whiteboard. Fastboard SDK is coming soon."
          }), `
`, _jsx(_components.li, {
            children: "@netless/slide is a stand-alone document conversion and rendering dependency that does not include such things as whiteboards or state synchronization. Adopting this solution requires you to write extra codes to synchronize states. It is designed for use-cases where PPT is used alone in whiteboard apps."
          }), `
`, _jsx(_components.li, {
            children: "@netless/projector-plugin is a plug-in for Whiteboard SDK that supports state synchronization, but it only works in single-window use-cases."
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "version-comparison",
      children: "Version comparison"
    }), `
`, _jsx(_components.p, {
      children: "Compared with the old version, the new file conversion adopts an engine developed by Agora and has the following advantages:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Support for stand-alone access"
        }), ". The new file conversion is no longer bound to Interactive Whiteboard and can be integrated with third-party whiteboard SDKs."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Faster conversion speed"
        }), ". The conversion speed of the new version is increased by 200% to 400%."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Stronger content parsing"
        }), ". The new file conversion supports parsing content that the old version cannot, including additional animations, filters, and other effects. The new version can parse all normal PPTX content."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Improved stability"
        }), ". The new file conversion fixes multiple issues in the old version that could cause conversion failures."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "New features"
        }), ". Users can now pause ongoing conversion tasks or adjust task priorities."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["The new and the old versions of file conversion are ", _jsx(_components.strong, {
        children: "independent of each other"
      }), ": The conversion task UUID generated by the new version cannot call the old version to query the progress, while the uuid generated by the old version cannot query the progress through the new version. If you want to query the progress of the old conversion tasks through the new version, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "Although Agora Interactive Whiteboard continues to maintain the old version of file conversion, some issues could arise due to inherent limits in the architectural design. Agora recommends you choose an appropriate time to switch to the new file conversion. If you need support for the old version of file conversion, see the following resources:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../../reference/file-conversion-overview-deprecated.mdx",
          children: "Old File Conversion Overview"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/whiteboard/file-conversion-deprecated",
          children: "Old File Conversion API Reference"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "Before using file conversion, ensure that you have completed the following steps:"
    }), `
`, _jsx(_components.h3, {
      id: "create-a-third-party-cloud-storage-account",
      children: "Create a third-party cloud storage account"
    }), `
`, _jsx(_components.p, {
      children: "To save files generated by file conversion, you need an account on a third-party cloud storage service such as Amazon S3, Google Cloud platform, or Alibaba."
    }), `
`, _jsx(_components.h3, {
      id: "upload-the-source-file",
      children: "Upload the source file"
    }), `
`, _jsx(_components.p, {
      children: "Before you launch a file-conversion task, you must upload the source file to a third-party cloud storage space or your Nginx server. This produces a URL address for the file. Make sure that the Interactive Whiteboard can access the file via this URL address."
    }), `
`, _jsx(_components.h3, {
      id: "enable-file-conversion",
      children: "Enable file conversion"
    }), `
`, _jsxs(_components.p, {
      children: ["To convert documents on the whiteboard, enable the ", _jsx(_components.strong, {
        children: "Docs to Picture"
      }), " and ", _jsx(_components.strong, {
        children: "Docs to Web"
      }), " services for your data centers on the Interactive Whiteboard panel in Agora Console. For details, see ", _jsx(_components.a, {
        href: "../set-up-and-build-your-first-app/enable-whiteboard#enable-whiteboard-server-side-features",
        children: "Enable whiteboard server-side features"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "start-file-conversion",
      children: "Start file conversion"
    }), `
`, _jsx(_components.p, {
      children: "Take the following steps:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["To start a file-conversion task, call the RESTful API and pass in the URL address of the source file along with other parameters. See ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/whiteboard/file-conversion#start-file-conversion",
            children: "Start file conversion"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["To query the progress of a file-conversion task, pass in the corresponding task UUID and Task Token. See ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/whiteboard/file-conversion#query-the-progress-of-a-file-conversion-task",
            children: "Query file-conversion progress"
          }), ". Agora recommends that you implement an algorithm to regularly query the conversion progress so that your data is up to date."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "ppt-conversion-supported-features-limitations-and-troubleshooting",
      children: "PPT Conversion: Supported features, limitations, and troubleshooting"
    }), `
`, _jsxs(_components.p, {
      children: ["When converting PPT or PPTX files created in Microsoft PowerPoint into dynamic HTML web pages using ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/whiteboard/file-conversion",
        children: "File conversion"
      }), ", some elements—such as special effects, images, or animations—might not parse correctly. This can result in issues like missing or non-functional effects in the converted output. This section outlines the compatibility of the document conversion service with various PPT features, helping you identify and fix problematic elements in your presentations."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "These notes are only applicable to PPT or PPTX files made with MS PowerPoint. For PPT files made with WPS, Agora does not guarantee the conversion effect."
          }), `
`, _jsx(_components.li, {
            children: "Some functions and effects are not mentioned in the following list. This is due to functional inconsistencies caused by different versions which require manual testing."
          }), `
`]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "supported-effects",
      children: "Supported effects"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "PPT element"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Effects menu"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Support effect"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Measures to take"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Word"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Font"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["- Font style: See the list of ", _jsx(_components.a, {
              href: "#supported-fonts",
              children: "Supported fonts"
            }), "- Font size: All", "- Color and underline: All", "- Effect: Supports strikethrough, double strikethrough, superscript, subscript, equal-height characters", "- Character Spacing: All"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "After some fonts are converted, ensure that the font is installed locally for it to be displayed correctly."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Paragraph"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["- Bullet", "- Serial number", "- Text alignment: All", "- Indentation", "- Spacing", "- Chinese version: All", "- Multi-column layout"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "-"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Shape"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Shape Format"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["- Shape Fill: All", "- Shape Outlines/Lines: All"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "-"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Sheet"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Table Design"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["- Table style options: All", "- Table style:- Subject: All", "- Shading", "- Frame", "- Fill: color fill, picture fill, texture fill, gradient fill, pattern fill"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "-"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Table Layout"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "All"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "-"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Picture"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Image Format"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["- Remove background", "- Adjustments: All", "- Image style:- Style templates", "- Frame", "- Format", "- Effects: shadow, reflection, glow, soft edge", "- Arrangement: All", "- Cropping"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "-"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Audio and Video"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Audio/Video Format"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["- Cropping (progressive cropping)", "- Add bookmark"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "-"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Animation"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Animation Type"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["- Page cutting animation: fade in, fade out, push in, erase, split, reveal, cut in, random lines, shapes, uncover, cover, fall, hang, curtain, peel off, dissolve, chessboard, blinds, clock, ripple, switch, rotate, library, cube, box, comb, zoom, pan, carousel", "- Appearance/disappearance animation: All", "- Word animation: All", "- Path Animation: All", "- Template Animation: All", "- Animation with sound"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "-"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Animation Properties"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["- Timing: start condition, duration, delay, repeat", "- Trigger: by click, by bookmark", "- Set text animation and combine text."]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "-"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Other"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Other Menu"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Modify PPT theme, customize theme"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "-"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "unsupported-effects",
      children: "Unsupported effects"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "PPT element"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Unsupported effects"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Imperfectly supported effects"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Measures to take"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Word"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["- Font effect: All Caps, Small Caps", "- Shape format - Text Options: Shadow, reflection, glow, soft edges, 3D format, 3D rotation"]
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["- Text stroke: Cannot perfectly restore the effect in PPT.", "- Custom fonts: Some font line breaks are inconsistent with the original PPT.", "- Vertical text: Line spacing that is not single-spaced may be inconsistent with the original PPT, and the horizontal coordinate of the font will be offset.", "- WordArt: The conversion effect is not perfect."]
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["- Avoid inserting too much text on one page.", "- Avoid using line breaks continuously. It is recommended to split large paragraphs into multiple text boxes."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Shape"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Shapes with formulas do not support adding color fill animations."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["- Shape Format - Effects: When using shadow, reflection, glow, or soft edge effects, the entire shape is displayed first, and the special effects will take effect later.", "- Shape Format - Shape Outline:- When you select Dashed Line, dashed lines smaller than 1.5 pt are converted to solid lines.", "- Arrows may shift after conversion."]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Some special graphics should not exceed the graphic boundary, and the part beyond the boundary is not displayed."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Sheet"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["- Shape Format - Fill:- Pattern Fill", "- The option to tile the image as a texture is not supported in image or texture fills.", "- Shape Format - Effects: Shadow, reflection, glow, soft edge, 3D format, 3D rotation."]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "-"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "-"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Picture"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Image format-effect: 3D format, 3D rotation."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["- Image format - Remove background: Support is not perfect, the converted image may have white edges.", "- Image format - Image color: Images that are recolored or use color filters may have color differences after conversion.", "- Image Format - Image Correction: Brightness and contrast adjustment effects are not perfectly restored."]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "-"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Audio and Video"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["- Option: Play across slides.", "- Style: Play in the background."]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "-"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "-"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Animation"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["- Page cutting animation: airplane, origami, fragments, vortex, shining, smooth.", "- Emphasis animation: Zoom in or zoom out (only for text, not supported)/ brush color, color stretch, color pulse, underline.", "- Path Animation: Rewind after playback is complete."]
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["- Timing-delay: There may be a small error in the animation delay time.", "- Advanced Animation triggered by click: Click events penetrate the underlying elements."]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "-"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Other"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["- Extract annotations", "- The following effects are not effective in the thumbnails generated after document conversion preview:- All gradient effects", "- All page switching animations", "- Animations that involve changes to the inside of a shape do not work, including: blinds, checkerboard, dissolve, random Lines, shapes, splits, stairs, wheels, erase, fade, float", "- Transparency", "- Recolor", "- Shadow, reflection, glow, soft edge"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The hide slide function does not support hiding the first page of the slide."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "-"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "best-practices-for-troubleshooting-conversion-issues",
      children: "Best practices for troubleshooting conversion issues"
    }), `
`, _jsx(_components.p, {
      children: "If some effects are missing in the converted PPT or are different from the original PPT, refer to the following steps to locate the problematic elements and fix them:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Locate the problematic element"
        }), `
`, _jsx(_components.p, {
          children: "Compare the PPT before and after conversion to find the problematic elements."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Deal with problematic elements"
        }), `
`, _jsx(_components.p, {
          children: "Resolve the problem using one of the following methods:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Remove the problematic element directly or remove unsupported effects on the element."
          }), `
`, _jsx(_components.li, {
            children: "Replace the effect that is already supported by other document transformations for the element in question."
          }), `
`, _jsx(_components.li, {
            children: "Save the problematic element as a picture, delete the element, and then reinsert the picture to the original position. If there are many problematic elements, combine those elements first and convert them to pictures."
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Restart the conversion"
        }), `
`, _jsx(_components.p, {
          children: "Call the RESTful API again to restart the conversion. After the conversion is successful, compare the PPT effects before and after the conversion. If there are any remaining problems, repeat the previous steps."
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.p, {
      children: "This section contains information that completes the information on this page, or points you to documentation that explains other aspects of this product."
    }), `
`, _jsx(_components.h3, {
      id: "google-cloud-storage-configuration",
      children: "Google Cloud Storage configuration"
    }), `
`, _jsx(_components.p, {
      children: "To set up cloud storage and obtain configuration information for Google Cloud Platform, take the following steps:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Create an account on ", _jsx(_components.a, {
            href: "https://cloud.google.com/",
            children: "Google Cloud"
          }), ` and assign permissions on the settings page of Google Cloud storage.
`, _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/interactive-whiteboard/gcp-settings.png",
            alt: ""
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["After creation, click on the ", _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/interactive-whiteboard/ellipses.png",
            alt: ""
          }), " button in the upper right corner and select ", _jsx(_components.strong, {
            children: "Project settings"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Under ", _jsx(_components.strong, {
            children: "IAM and Admin"
          }), ", select ", _jsx(_components.strong, {
            children: "Service Accounts"
          }), ". In the service account list, click on the ", _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/interactive-whiteboard/ellipses.png",
            alt: ""
          }), " button for the account just added, and select ", _jsx(_components.strong, {
            children: "Manage keys"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Click ", _jsx(_components.strong, {
            children: "ADD KEY"
          }), " > ", _jsx(_components.strong, {
            children: "Create new key"
          }), ". Select ", _jsx(_components.strong, {
            children: "JSON"
          }), " in the pop-up box and click ", _jsx(_components.strong, {
            children: "CREATE"
          }), ". A ", _jsx(_components.code, {
            children: "json"
          }), " file is downloaded with the name format ", _jsx(_components.code, {
            children: "projectId-xxxxxxxx.json"
          }), `.
`, _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/interactive-whiteboard/gcp-create-private-key.png",
            alt: ""
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Open the downloaded json file, which looks like the following example:"
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
                  children: "{"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "type"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"service_account"'
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "project_id"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"argon-jetty-395210"'
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "private_key_id"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"yourprivateidkeyyourprivateidkeyyourprivateidkey"'
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "private_key"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"-----BEGIN PRIVATE KEY-----'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "\\n"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "ThisisYourPrivateKeyThisisYourPrivateKeyThisisYourPrivateKey"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "\\n"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "ThisisYourPrivateKey"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "\\n"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "ThisisYourPrivateKey"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "\\n"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "ThisisYourPrivateKey"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "\\n"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "-----END PRIVATE KEY-----"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "\\n"
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
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "client_email"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"xxxx-111@argon-jetty-395210.iam.gserviceaccount.com"'
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "client_id"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"123456789012345678901"'
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "auth_uri"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"https://accounts.google.com/o/oauth2/auth"'
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "token_uri"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"https://oauth2.googleapis.com/token"'
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "auth_provider_x509_cert_url"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"https://www.googleapis.com/oauth2/v1/certs"'
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "client_x509_cert_url"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"https://www.googleapis.com/robot/v1/metadata/x509/xxxx-111%40argon-jetty-395210.iam.gserviceaccount.com"'
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "universe_domain"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"googleapis.com"'
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
`, _jsx(_components.p, {
          children: "Use the information in the json file to fill-in the Google Cloud Storage configuration:"
        }), `
`, _jsxs(_components.p, {
          children: ["The ", _jsx(_components.code, {
            children: "project_id"
          }), " in the json file corresponds to the ", _jsx(_components.code, {
            children: "projectId"
          }), " on Agora Console, ", _jsx(_components.code, {
            children: "client_email"
          }), " corresponds to ", _jsx(_components.code, {
            children: "clientEmail"
          }), ", ", _jsx(_components.code, {
            children: "private_key"
          }), " corresponds to ", _jsx(_components.code, {
            children: "privateKey"
          }), ", and ", _jsx(_components.code, {
            children: "bucket"
          }), " is filled with the name of the ", _jsx(_components.code, {
            children: "bucket"
          }), ` to be used. The remaining parameters have the same meaning as for the AWS configuration.
When copying the `, _jsx(_components.code, {
            children: "private_key"
          }), ", make sure that your text editor has not added any extra line breaks or ", _jsx(_components.code, {
            children: "\\n"
          }), " after each ", _jsx(_components.code, {
            children: "\\n"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Ensure that the newly created service account has writable permission for the Google storage bucket."
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "supported-fonts",
      children: "Supported fonts"
    }), `
`, _jsx(_components.p, {
      children: "Interactive Whiteboard file conversion supports the following fonts:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "AaManYuShouXieTi, AaManYuShouXieTi"
      }), `
`, _jsx(_components.li, {
        children: "Alibaba PuHuiTi, Alibaba PuHuiTi, Alibaba PuHuiTi B, Alibaba PuHuiTi B"
      }), `
`, _jsx(_components.li, {
        children: "Alibaba PuHuiTi, Alibaba PuHuiTi, Alibaba PuHuiTi H, Alibaba PuHuiTi H"
      }), `
`, _jsx(_components.li, {
        children: "Alibaba PuHuiTi, Alibaba PuHuiTi, Alibaba PuHuiTi Heavy, Alibaba PuHuiTi Heavy"
      }), `
`, _jsx(_components.li, {
        children: "Alibaba PuHuiTi, Alibaba PuHuiTi, Alibaba PuHuiTi L, Alibaba PuHuiTi L"
      }), `
`, _jsx(_components.li, {
        children: "Alibaba PuHuiTi, Alibaba PuHuiTi, Alibaba PuHuiTi Light, Alibaba PuHuiTi Light"
      }), `
`, _jsx(_components.li, {
        children: "Alibaba PuHuiTi, Alibaba PuHuiTi, Alibaba PuHuiTi M, Alibaba PuHuiTi M"
      }), `
`, _jsx(_components.li, {
        children: "Alibaba PuHuiTi, Alibaba PuHuiTi, Alibaba PuHuiTi Medium, Alibaba PuHuiTi Medium"
      }), `
`, _jsx(_components.li, {
        children: "Alibaba PuHuiTi, Alibaba PuHuiTi, Alibaba PuHuiTi R, Alibaba PuHuiTi R"
      }), `
`, _jsx(_components.li, {
        children: "Alimama DongFangDaKai, Alimama DongFangDaKai"
      }), `
`, _jsx(_components.li, {
        children: "Alimama FangYuanTi VF, Alimama FangYuanTi VF"
      }), `
`, _jsx(_components.li, {
        children: "Aqua Kana,.Aqua Kana"
      }), `
`, _jsx(_components.li, {
        children: "Cat chewing assorted black, MaokenAssortedSans"
      }), `
`, _jsx(_components.li, {
        children: "Do Hyeon"
      }), `
`, _jsx(_components.li, {
        children: "Dubai"
      }), `
`, _jsx(_components.li, {
        children: "Gen Shin Gothic, Gen Shin Gothic, Gen Shin Gothic Bold"
      }), `
`, _jsx(_components.li, {
        children: "Gen Shin Gothic, Gen Shin Gothic Regular"
      }), `
`, _jsx(_components.li, {
        children: "Georgia Pro"
      }), `
`, _jsx(_components.li, {
        children: "Gmarket Sans TTF, Gmarket Sans TTF Medium"
      }), `
`, _jsx(_components.li, {
        children: "HanWang SinSongThin-Gb5, Wang Hanzong's Thin New Song Bamboo Slips, Wang Hanzong's Thin New Song Bamboo Slips"
      }), `
`, _jsx(_components.li, {
        children: "HanWangGB06, Wang Hanzong's regular script with pen"
      }), `
`, _jsx(_components.li, {
        children: "HappyZcool-2016, HappyZcool 2016 revised version"
      }), `
`, _jsx(_components.li, {
        children: "HGMaruGothicMPRO"
      }), `
`, _jsx(_components.li, {
        children: "HGMinchoE,HGMing DynastyE"
      }), `
`, _jsx(_components.li, {
        children: "HGPMinchoE,HGP Ming Dynasty E"
      }), `
`, _jsx(_components.li, {
        children: "HGSMinchoE,HGS Ming Dynasty E"
      }), `
`, _jsx(_components.li, {
        children: "HuXiaoBo-NanShen, Hu Xiaobo’s male body"
      }), `
`, _jsx(_components.li, {
        children: "JiangChengYuanTi, JiangChengYuanTi, JiangChengYuanTi 300W"
      }), `
`, _jsx(_components.li, {
        children: "JiangChengYuanTi, JiangChengYuanTi, JiangChengYuanTi 600W"
      }), `
`, _jsx(_components.li, {
        children: "Lato"
      }), `
`, _jsx(_components.li, {
        children: "Lato,Lato Light"
      }), `
`, _jsx(_components.li, {
        children: "LXGW WenKai,"
      }), `
`, _jsx(_components.li, {
        children: "MaoKenTangYuan (beta), MaoKenTangYuan (beta)"
      }), `
`, _jsx(_components.li, {
        children: "Merriweather"
      }), `
`, _jsx(_components.li, {
        children: "Merriweather,Merriweather Black"
      }), `
`, _jsx(_components.li, {
        children: "Merriweather,Merriweather Light"
      }), `
`, _jsx(_components.li, {
        children: "MingLiU_HKSCS, MingLiU_HKSCS"
      }), `
`, _jsx(_components.li, {
        children: "Mitr"
      }), `
`, _jsx(_components.li, {
        children: "Mitr,Mitr ExtraLight"
      }), `
`, _jsx(_components.li, {
        children: "Mitr,Mitr Light"
      }), `
`, _jsx(_components.li, {
        children: "Mitr,Mitr Medium"
      }), `
`, _jsx(_components.li, {
        children: "Mitr,Mitr SemiBold"
      }), `
`, _jsx(_components.li, {
        children: "Mukta Mahee,Mukta Mahee Bold"
      }), `
`, _jsx(_components.li, {
        children: "Mukta Mahee,Mukta Mahee ExtraBold"
      }), `
`, _jsx(_components.li, {
        children: "Mukta Mahee,Mukta Mahee Light"
      }), `
`, _jsx(_components.li, {
        children: "Mukta Mahee,Mukta Mahee Medium"
      }), `
`, _jsx(_components.li, {
        children: "Mukta Mahee,MuktaMahee Regular"
      }), `
`, _jsx(_components.li, {
        children: "Mukta Mahee,MuktaMahee SemiBold"
      }), `
`, _jsx(_components.li, {
        children: "New York"
      }), `
`, _jsx(_components.li, {
        children: "Noteworthy"
      }), `
`, _jsx(_components.li, {
        children: "NoTo Nastaliq Urdu"
      }), `
`, _jsx(_components.li, {
        children: "Noto Nastaliq Urdu UI"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Armenian"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Armenian,Noto Sans Armenian Blk"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Armenian,Noto Sans Armenian ExtBd"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Armenian,Noto Sans Armenian ExtLt"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Armenian,Noto Sans Armenian Light"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Armenian,Noto Sans Armenian Med"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Armenian,Noto Sans Armenian SemBd"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Armenian,Noto Sans Armenian Thin"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Avestan"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Bamum"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Batak"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Brahmi"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Buginese"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Buhid"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Carian"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Chakma"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Cham"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Coptic"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Cuneiform"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Cypriot"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Egyptian Hieroglyphs,Noto Sans EgyptHiero"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Glagolitic"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Gothic"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Hanunoo"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Imperial Aramaic,Noto Sans ImpAramaic"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Inscriptional Pahlavi,Noto Sans InsPahlav"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Inscriptional Parthian,Noto Sans InsParthi"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Javanese"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Kaithi"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Kannada"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Kannada,Noto Sans Kannada Black"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Kannada,Noto Sans Kannada ExtraBold"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Kannada,Noto Sans Kannada ExtraLight"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Kannada,Noto Sans Kannada Light"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Kannada,Noto Sans Kannada Medium"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Kannada,Noto Sans Kannada SemiBold"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Kannada,Noto Sans Kannada Thin"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Kayah Li"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Kharoshthi"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Lepcha"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Limbu"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Linear B"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Lisu"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Lycian"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Lydian"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Mandaic"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Meetei Mayek"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Mongolian"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Myanmar"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Myanmar,Noto Sans Myanmar Blk"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Myanmar,Noto Sans Myanmar ExtBd"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Myanmar,Noto Sans Myanmar ExtLt"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Myanmar,Noto Sans Myanmar Light"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Myanmar,Noto Sans Myanmar Med"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Myanmar,Noto Sans Myanmar SemBd"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Myanmar,Noto Sans Myanmar Thin"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans New Tai Lue"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans NKo,Noto Sans N'Ko"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Ogham"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Ol Chiki"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Old Italic"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Old Persian"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Old South Arabian,Noto Sans OldSouArab"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Old Turkish"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Oriya"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Osmanya"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans PhagsPa"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Phoenician"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Rejang"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Runic"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Samaritan"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Saurashtra"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans SC"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans SC,Noto Sans SC Black"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans SC,Noto Sans SC Light"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans SC,Noto Sans SC Medium"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans SC,Noto Sans SC Thin"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Shavian"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Sundanese"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Syloti Nagri"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Syriac"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Tagalog"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Tagbanwa"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Tai Le"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Tai Tham"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Tai Viet"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Thaana"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Tifinagh"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Ugaritic"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Vai"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Yi"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Zawgyi"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Zawgyi,Noto Sans Zawgyi Blk"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Zawgyi,Noto Sans Zawgyi ExtBd"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Zawgyi,Noto Sans Zawgyi ExtLt"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Zawgyi,Noto Sans Zawgyi Light"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Zawgyi,Noto Sans Zawgyi Med"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Zawgyi,Noto Sans Zawgyi SemBd"
      }), `
`, _jsx(_components.li, {
        children: "Noto Sans Zawgyi,Noto Sans Zawgyi Thin"
      }), `
`, _jsx(_components.li, {
        children: "Noto Serif Balinese"
      }), `
`, _jsx(_components.li, {
        children: "Noto Serif Myanmar"
      }), `
`, _jsx(_components.li, {
        children: "Noto Serif Myanmar,Noto Serif Myanmar Blk"
      }), `
`, _jsx(_components.li, {
        children: "Noto Serif Myanmar,Noto Serif Myanmar ExtBd"
      }), `
`, _jsx(_components.li, {
        children: "Noto Serif Myanmar,Noto Serif Myanmar ExtLt"
      }), `
`, _jsx(_components.li, {
        children: "Noto Serif Myanmar,Noto Serif Myanmar Light"
      }), `
`, _jsx(_components.li, {
        children: "Noto Serif Myanmar,Noto Serif Myanmar Med"
      }), `
`, _jsx(_components.li, {
        children: "Noto Serif Myanmar,Noto Serif Myanmar SemBd"
      }), `
`, _jsx(_components.li, {
        children: "Noto Serif Myanmar,Noto Serif Myanmar Thin"
      }), `
`, _jsx(_components.li, {
        children: "Noto Serif SC"
      }), `
`, _jsx(_components.li, {
        children: "Noto Serif SC,Noto Serif SC Black"
      }), `
`, _jsx(_components.li, {
        children: "Noto Serif SC,Noto Serif SC ExtraLight"
      }), `
`, _jsx(_components.li, {
        children: "Noto Serif SC,Noto Serif SC Light"
      }), `
`, _jsx(_components.li, {
        children: "Noto Serif SC,Noto Serif SC Medium"
      }), `
`, _jsx(_components.li, {
        children: "Noto Serif SC,Noto Serif SC SemiBold"
      }), `
`, _jsx(_components.li, {
        children: "Open Sans"
      }), `
`, _jsx(_components.li, {
        children: "Open Sans,Open Sans Extrabold"
      }), `
`, _jsx(_components.li, {
        children: "Open Sans,Open Sans Light"
      }), `
`, _jsx(_components.li, {
        children: "Open Sans,Open Sans Semibold"
      }), `
`, _jsx(_components.li, {
        children: "Oswald"
      }), `
`, _jsx(_components.li, {
        children: "Pangolin"
      }), `
`, _jsx(_components.li, {
        children: "PT Mono"
      }), `
`, _jsx(_components.li, {
        children: "PT Sans"
      }), `
`, _jsx(_components.li, {
        children: "PT Sans Caption"
      }), `
`, _jsx(_components.li, {
        children: "PT Serif"
      }), `
`, _jsx(_components.li, {
        children: "Quicksand"
      }), `
`, _jsx(_components.li, {
        children: "Quicksand, Quicksand SemiBold"
      }), `
`, _jsx(_components.li, {
        children: "Quicksand,Quicksand Medium"
      }), `
`, _jsx(_components.li, {
        children: "Roboto"
      }), `
`, _jsx(_components.li, {
        children: "Roboto Condensed"
      }), `
`, _jsx(_components.li, {
        children: "Roboto Slab"
      }), `
`, _jsx(_components.li, {
        children: "Roboto, Roboto Black"
      }), `
`, _jsx(_components.li, {
        children: "Roboto, Roboto Medium"
      }), `
`, _jsx(_components.li, {
        children: "Roboto, Roboto Thin"
      }), `
`, _jsx(_components.li, {
        children: "shetumodengxiaofangti, photo modern small cube"
      }), `
`, _jsx(_components.li, {
        children: "Soukou Mincho, Armored Ming Dynasty"
      }), `
`, _jsx(_components.li, {
        children: "Source Han Sans CN, Source Han Sans CN ExtraLight, Source Han Sans CN ExtraLight"
      }), `
`, _jsx(_components.li, {
        children: "Source Han Sans CN, Source Han Sans CN Heavy, Source Han Sans CN Heavy"
      }), `
`, _jsx(_components.li, {
        children: "Source Han Sans CN, Source Han Sans CN Light, Source Han Sans CN Light"
      }), `
`, _jsx(_components.li, {
        children: "Source Han Sans CN, Source Han Sans CN Medium, Source Han Sans CN Medium"
      }), `
`, _jsx(_components.li, {
        children: "Source Han Sans CN,Siyuan Bold CN,Source Han Sans CN Regular,Siyuan Bold CN Regular"
      }), `
`, _jsx(_components.li, {
        children: "Source Han Sans CN,Source Han Sans CN Normal,Source Han Sans CN Normal"
      }), `
`, _jsx(_components.li, {
        children: "Source Han Sans SC, Source Han Sans SC Heavy, Source Han Sans SC Heavy"
      }), `
`, _jsx(_components.li, {
        children: "Source Han Sans SC, Source Han Sans SC Light, Source Han Sans SC Light"
      }), `
`, _jsx(_components.li, {
        children: "Source Han Serif CN, Source Han Serif CN, Source Han Serif CN ExtraLight, Source Han Serif CN ExtraLight"
      }), `
`, _jsx(_components.li, {
        children: "Source Han Serif CN, Source Han Serif CN, Source Han Serif CN Heavy, Source Han Serif CN Heavy"
      }), `
`, _jsx(_components.li, {
        children: "Source Han Serif CN, Source Han Serif CN, Source Han Serif CN Light, Source Han Serif CN Light"
      }), `
`, _jsx(_components.li, {
        children: "Source Han Serif CN, Source Han Serif CN, Source Han Serif CN SemiBold, Source Han Serif CN SemiBold"
      }), `
`, _jsx(_components.li, {
        children: "Source Han Serif CN,Siyuan Songti CN"
      }), `
`, _jsx(_components.li, {
        children: "Source Han Serif CN,Siyuan Songti CN,Source Han Serif CN Medium,Siyuan Songti CN Medium"
      }), `
`, _jsx(_components.li, {
        children: "Source Han Serif K,"
      }), `
`, _jsx(_components.li, {
        children: "Source Han Serif K, Source Han Serif K ExtraLight"
      }), `
`, _jsx(_components.li, {
        children: "Source Han Serif K, Source Han Serif K Medium"
      }), `
`, _jsx(_components.li, {
        children: "Source Han Serif SC"
      }), `
`, _jsx(_components.li, {
        children: "Source Han Serif SC, Source Han Serif SC ExtraLight, Source Han Serif SC ExtraLight"
      }), `
`, _jsx(_components.li, {
        children: "Source Han Serif SC, Source Han Serif SC Light, Source Han Serif SC Light"
      }), `
`, _jsx(_components.li, {
        children: "Source Han Serif SC,Source Han Serif SC Heavy,Source Han Serif SC Heavy"
      }), `
`, _jsx(_components.li, {
        children: "Source Han Serif SC,Source Han Serif SC Medium,Source Han Serif SC Medium"
      }), `
`, _jsx(_components.li, {
        children: "Source Han Serif SC,Source Han Serif SC SemiBold,Source Han Serif SC SemiBold"
      }), `
`, _jsx(_components.li, {
        children: "Source Han Serif TC"
      }), `
`, _jsx(_components.li, {
        children: "Source Han Serif TC,Source Han Serif TC,Source Han Serif Heavy,Source Han Serif TC Heavy"
      }), `
`, _jsx(_components.li, {
        children: "Source Han Serif TC,Source Han Serif TC,Source Han Serif Light,Source Han Serif TC Light"
      }), `
`, _jsx(_components.li, {
        children: "Source Han Serif TC,Source Han Serif TC,Source Han Serif TC ExtraLight,Source Han Serif TC ExtraLight"
      }), `
`, _jsx(_components.li, {
        children: "Source Han Serif TC,Source Han Serif TC,Source Han Serif TC Medium"
      }), `
`, _jsx(_components.li, {
        children: "Source Han Serif TC,Source Han Serif TC,Source Han Serif TC SemiBold"
      }), `
`, _jsx(_components.li, {
        children: "Source Han Serif,Source Han Serif Heavy,Source Han Serif Heavy"
      }), `
`, _jsx(_components.li, {
        children: "Source Han Serif, Source Han Serif Light"
      }), `
`, _jsx(_components.li, {
        children: "Source Han Serif, Source Han Serif Medium"
      }), `
`, _jsx(_components.li, {
        children: "Source Sans Pro"
      }), `
`, _jsx(_components.li, {
        children: "STIXGeneral"
      }), `
`, _jsx(_components.li, {
        children: "STIXSizeFourSym"
      }), `
`, _jsx(_components.li, {
        children: "STIXSizeOneSym"
      }), `
`, _jsx(_components.li, {
        children: "STIXSizeTwoSym"
      }), `
`, _jsx(_components.li, {
        children: "STKaiti, Chinese Kaiti"
      }), `
`, _jsx(_components.li, {
        children: "Sukhumvit Set"
      }), `
`, _jsx(_components.li, {
        children: "Taipei Sans TC Beta"
      }), `
`, _jsx(_components.li, {
        children: "Taipei Sans TC Beta,Taipei Sans TC Beta Light"
      }), `
`, _jsx(_components.li, {
        children: "Webdings"
      }), `
`, _jsx(_components.li, {
        children: "YRDZST,Yang Rendong Bamboo Stone,YRDZST-Extralight,Yang Rendong Bamboo Stone-Extralight"
      }), `
`, _jsx(_components.li, {
        children: "YRDZST,Yang Rendong Bamboo Stone,YRDZST-Heavy,Yang Rendong Bamboo Stone-Heavy"
      }), `
`, _jsx(_components.li, {
        children: "YRDZST,Yang Rendong Bamboo Stone,YRDZST-Light,Yang Rendong Bamboo Stone-Light"
      }), `
`, _jsx(_components.li, {
        children: "YRDZST,Yang Rendong Bamboo Stone,YRDZST-Medium,Yang Rendong Bamboo Stone-Medium"
      }), `
`, _jsx(_components.li, {
        children: "YRDZST,Yang Rendong Bamboo Stone,YRDZST-Regular,Yang Rendong Bamboo Stone-Regular"
      }), `
`, _jsx(_components.li, {
        children: "YRDZST,Yang Rendong Bamboo Stone,YRDZST-Semibold,Yang Rendong Bamboo Stone-Semibold"
      }), `
`, _jsx(_components.li, {
        children: "Yu Gothic UI"
      }), `
`, _jsx(_components.li, {
        children: "ZCOOL Addict Italic 01,Lucida Calligraphy"
      }), `
`, _jsx(_components.li, {
        children: "ZCOOL Addict Italic 02,Lucida Calligraphy"
      }), `
`, _jsx(_components.li, {
        children: "ZCOOL_KuHei, ZCOOL_KuHei"
      }), `
`, _jsx(_components.li, {
        children: "zcool-gdh, zcool high-end black"
      }), `
`, _jsx(_components.li, {
        children: "zcoolqingkehuangyouti, zcoolqingkehuangyouti"
      }), `
`, _jsx(_components.li, {
        children: "ZCOOLtongtong"
      }), `
`, _jsx(_components.li, {
        children: "zcoolwenyiti, zcoolwenyiti"
      }), `
`, _jsx(_components.li, {
        children: "ZhenyanGB, Ruizi Zhenyan font is free for commercial use"
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["Don't see your font listed? Contact ", _jsx(_components.a, {
            href: "mailto:support@agora.io",
            children: "support@agora.io"
          }), " and provide the font file. Agora can implement a backend change to support more fonts."]
        })
      })
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
