import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "What PowerPoint features are not supported by the dynamic file conversion function?"
};
export let _markdown = `

Agora Interactive Whiteboard provides the dynamic file conversion function for converting PPTX files edited with Microsoft PowerPoint to HTML web pages. The generated files preserve animations present in the source files.

However, this function is not available for certain objects, formats, and effects in PPTX files. These objects, formats, or effects either disappear or display incorrectly in the converted files.

This page lists the PowerPoint features that are not supported or not well supported by the dynamic file conversion function. To achieve the best results, Agora recommends that you keep these limitations in mind when preparing your PPTX files intended for later conversion.

### Slides [#slides]

The dynamic file conversion function does not support the following features for slides:

* Add Section: Organize slides into sections
* Hide Slide

### Shapes [#shapes]

The dynamic file conversion function supports most shapes in PPTX files. However, the following shapes can display incorrectly in converted files:

| Column 1                                      | Column 2                               |
| --------------------------------------------- | -------------------------------------- |
| **Basic Shapes**                              |                                        |
| Vertical Text Box                             | Heptagon                               |
| Octagon                                       | Decagon                                |
| Dodecagon                                     | Smiley Face                            |
| **Stars and Banners**                         |                                        |
| Star: 8 Points                                | Star: 10 Points                        |
| Star: 12 Points                               | Star: 16 Points                        |
| Star: 24 Points                               | Star: 32 Points                        |
| **Callouts**                                  |                                        |
| Line                                          | Bent Line                              |
| Line with Accent Bar                          | Bent Line with Accent Bar              |
| Double Bent Line with Accent Bar              | Line with No Border                    |
| Bent Line with No Border                      | Double Bent Line with No Border        |
| Line with Boarder and Accent Line             | Bent Line with Boarder and Accent Line |
| Double Bent Line with Boarder and Accent Line |                                        |
| **Action Buttons**                            |                                        |
| Go Back or Previous                           | Go Forward or Next                     |
| Go to Beginning                               | Go to End                              |
| Go Home                                       | Get Information                        |
| Return                                        | Video                                  |
| Document                                      | Sound                                  |
| Help                                          | Blank                                  |

### Pictures [#pictures]

The dynamic file conversion function does not support the following features for pictures:

* Adjust color
* Compress pictures
* Picture effects:
  * Rotated, White
  * Relaxed Perspective, White
  * Bevel Rectangle
  * Bevel Perspective
  * Reflected Perspective Right

The following picture effects are not well supported and might display incorrectly in converted files:

| Column 1                       | Column 2                    |
| ------------------------------ | --------------------------- |
| Simple Frame, White            | Beveled Matte, White        |
| Drop Shadow Rectangle          | Reflected Rounded Rectangle |
| Beveled Shadow, Black          | Compound Frame, Black       |
| Rounded Diagonal Corner, White | Snip Diagonal Corner, White |
| Moderate Frame, White          | Perspective Shadow, White   |
| Bevel Perspective Left, White  | Reflected Bevel, White      |

### Text [#text]

The dynamic file conversion function does not support the following features for text:

* WordArt
* Alt text
* Tabs
* All text effects except Square
* All text directions except for Horizontal and Vertical
* The By Paragraph animation effect, which makes the paragraphs of text appear one at a time
* Bullets and numbering with customized size and color
* Font effects: Double Strikethrough, Small Caps, All Caps, and Equalize Character Height
* Underlined text
* Text fill: Gradient fill, Picture or texture fill, and Pattern fill
* Arrange > Selection pane

### Media [#media]

The dynamic file conversion function also works for PPTX files that contain embedded audio and video. You can do some basic editing to the embedded media, for example, trimming the length of audio and video or adjusting the height and width of video. However, the dynamic file conversion function does not support most of the playback and format options for the inserted audio and video.

The following options under the **Playback** tab for an embedded audio or video file are not supported:

| Column 1             | Column 2             |
| -------------------- | -------------------- |
| Bookmarks            | Fade In and Fade Out |
| Volume               | Play Across Slides   |
| Loop until Stopped   | Hide During Showing  |
| Rewind after Playing |                      |

The following options under the **Format** tab for an embedded video file are not supported:

| Column 1          | Column 2     |
| ----------------- | ------------ |
| Adjust            | Video Styles |
| Rotate in Arrange | Crop         |

### Animations [#animations]

The dynamic file conversion function does not support the following features for animations:

* **Entrance > Exciting**: Flip, Whip, Credits, and Drop
* **Emphasis**: Brush Color, Font Color, Underline, Bold Flash, Bold Reveal, and Wave
* **Exit > Exciting:** Flip, Whip, Credits, and Drop

The following animations can display incorrectly in converted files:

* **Entrance**: Blinds, Box, Checkerboard, Circle, Diamond, Dissolve In, Peek In, Plus, Random Bars, Split, Strips, Wedge, Wheel, Wipe, Basic Swivel, Boomerang, Curve Down, Float, Pinwheel, and Spiral In
* **Emphasis**: Fill Color, Line Color, Complementary Color, Darken, Desaturate, Object Color, and Color Pulse
* **Exit**: Blinds, Box, Checkerboard, Circle, Diamond, Dissolve Out, Peek Out, Plus, Random Bars, Split, Strips, Wedge, Wheel, Wipe, Basic Swivel, Boomerang, Curve Down, Float, Pinwheel, and Spiral In

### Backgrounds [#backgrounds]

The dynamic file conversion function does not support the following background format settings:

* Picture or texture fill
* Pattern fill
* Hide background graphics
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora Interactive Whiteboard provides the dynamic file conversion function for converting PPTX files edited with Microsoft PowerPoint to HTML web pages. The generated files preserve animations present in the source files."
  }, {
    heading: undefined,
    content: "However, this function is not available for certain objects, formats, and effects in PPTX files. These objects, formats, or effects either disappear or display incorrectly in the converted files."
  }, {
    heading: undefined,
    content: "This page lists the PowerPoint features that are not supported or not well supported by the dynamic file conversion function. To achieve the best results, Agora recommends that you keep these limitations in mind when preparing your PPTX files intended for later conversion."
  }, {
    heading: "slides",
    content: "The dynamic file conversion function does not support the following features for slides:"
  }, {
    heading: "slides",
    content: "Add Section: Organize slides into sections"
  }, {
    heading: "slides",
    content: "Hide Slide"
  }, {
    heading: "shapes",
    content: "The dynamic file conversion function supports most shapes in PPTX files. However, the following shapes can display incorrectly in converted files:"
  }, {
    heading: "shapes",
    content: "Column 1"
  }, {
    heading: "shapes",
    content: "Column 2"
  }, {
    heading: "shapes",
    content: "**Basic Shapes**"
  }, {
    heading: "shapes",
    content: "Vertical Text Box"
  }, {
    heading: "shapes",
    content: "Heptagon"
  }, {
    heading: "shapes",
    content: "Octagon"
  }, {
    heading: "shapes",
    content: "Decagon"
  }, {
    heading: "shapes",
    content: "Dodecagon"
  }, {
    heading: "shapes",
    content: "Smiley Face"
  }, {
    heading: "shapes",
    content: "**Stars and Banners**"
  }, {
    heading: "shapes",
    content: "Star: 8 Points"
  }, {
    heading: "shapes",
    content: "Star: 10 Points"
  }, {
    heading: "shapes",
    content: "Star: 12 Points"
  }, {
    heading: "shapes",
    content: "Star: 16 Points"
  }, {
    heading: "shapes",
    content: "Star: 24 Points"
  }, {
    heading: "shapes",
    content: "Star: 32 Points"
  }, {
    heading: "shapes",
    content: "**Callouts**"
  }, {
    heading: "shapes",
    content: "Line"
  }, {
    heading: "shapes",
    content: "Bent Line"
  }, {
    heading: "shapes",
    content: "Line with Accent Bar"
  }, {
    heading: "shapes",
    content: "Bent Line with Accent Bar"
  }, {
    heading: "shapes",
    content: "Double Bent Line with Accent Bar"
  }, {
    heading: "shapes",
    content: "Line with No Border"
  }, {
    heading: "shapes",
    content: "Bent Line with No Border"
  }, {
    heading: "shapes",
    content: "Double Bent Line with No Border"
  }, {
    heading: "shapes",
    content: "Line with Boarder and Accent Line"
  }, {
    heading: "shapes",
    content: "Bent Line with Boarder and Accent Line"
  }, {
    heading: "shapes",
    content: "Double Bent Line with Boarder and Accent Line"
  }, {
    heading: "shapes",
    content: "**Action Buttons**"
  }, {
    heading: "shapes",
    content: "Go Back or Previous"
  }, {
    heading: "shapes",
    content: "Go Forward or Next"
  }, {
    heading: "shapes",
    content: "Go to Beginning"
  }, {
    heading: "shapes",
    content: "Go to End"
  }, {
    heading: "shapes",
    content: "Go Home"
  }, {
    heading: "shapes",
    content: "Get Information"
  }, {
    heading: "shapes",
    content: "Return"
  }, {
    heading: "shapes",
    content: "Video"
  }, {
    heading: "shapes",
    content: "Document"
  }, {
    heading: "shapes",
    content: "Sound"
  }, {
    heading: "shapes",
    content: "Help"
  }, {
    heading: "shapes",
    content: "Blank"
  }, {
    heading: "pictures",
    content: "The dynamic file conversion function does not support the following features for pictures:"
  }, {
    heading: "pictures",
    content: "Adjust color"
  }, {
    heading: "pictures",
    content: "Compress pictures"
  }, {
    heading: "pictures",
    content: "Picture effects:"
  }, {
    heading: "pictures",
    content: "Rotated, White"
  }, {
    heading: "pictures",
    content: "Relaxed Perspective, White"
  }, {
    heading: "pictures",
    content: "Bevel Rectangle"
  }, {
    heading: "pictures",
    content: "Bevel Perspective"
  }, {
    heading: "pictures",
    content: "Reflected Perspective Right"
  }, {
    heading: "pictures",
    content: "The following picture effects are not well supported and might display incorrectly in converted files:"
  }, {
    heading: "pictures",
    content: "Column 1"
  }, {
    heading: "pictures",
    content: "Column 2"
  }, {
    heading: "pictures",
    content: "Simple Frame, White"
  }, {
    heading: "pictures",
    content: "Beveled Matte, White"
  }, {
    heading: "pictures",
    content: "Drop Shadow Rectangle"
  }, {
    heading: "pictures",
    content: "Reflected Rounded Rectangle"
  }, {
    heading: "pictures",
    content: "Beveled Shadow, Black"
  }, {
    heading: "pictures",
    content: "Compound Frame, Black"
  }, {
    heading: "pictures",
    content: "Rounded Diagonal Corner, White"
  }, {
    heading: "pictures",
    content: "Snip Diagonal Corner, White"
  }, {
    heading: "pictures",
    content: "Moderate Frame, White"
  }, {
    heading: "pictures",
    content: "Perspective Shadow, White"
  }, {
    heading: "pictures",
    content: "Bevel Perspective Left, White"
  }, {
    heading: "pictures",
    content: "Reflected Bevel, White"
  }, {
    heading: "text",
    content: "The dynamic file conversion function does not support the following features for text:"
  }, {
    heading: "text",
    content: "WordArt"
  }, {
    heading: "text",
    content: "Alt text"
  }, {
    heading: "text",
    content: "Tabs"
  }, {
    heading: "text",
    content: "All text effects except Square"
  }, {
    heading: "text",
    content: "All text directions except for Horizontal and Vertical"
  }, {
    heading: "text",
    content: "The By Paragraph animation effect, which makes the paragraphs of text appear one at a time"
  }, {
    heading: "text",
    content: "Bullets and numbering with customized size and color"
  }, {
    heading: "text",
    content: "Font effects: Double Strikethrough, Small Caps, All Caps, and Equalize Character Height"
  }, {
    heading: "text",
    content: "Underlined text"
  }, {
    heading: "text",
    content: "Text fill: Gradient fill, Picture or texture fill, and Pattern fill"
  }, {
    heading: "text",
    content: "Arrange > Selection pane"
  }, {
    heading: "media",
    content: "The dynamic file conversion function also works for PPTX files that contain embedded audio and video. You can do some basic editing to the embedded media, for example, trimming the length of audio and video or adjusting the height and width of video. However, the dynamic file conversion function does not support most of the playback and format options for the inserted audio and video."
  }, {
    heading: "media",
    content: "The following options under the **Playback** tab for an embedded audio or video file are not supported:"
  }, {
    heading: "media",
    content: "Column 1"
  }, {
    heading: "media",
    content: "Column 2"
  }, {
    heading: "media",
    content: "Bookmarks"
  }, {
    heading: "media",
    content: "Fade In and Fade Out"
  }, {
    heading: "media",
    content: "Volume"
  }, {
    heading: "media",
    content: "Play Across Slides"
  }, {
    heading: "media",
    content: "Loop until Stopped"
  }, {
    heading: "media",
    content: "Hide During Showing"
  }, {
    heading: "media",
    content: "Rewind after Playing"
  }, {
    heading: "media",
    content: "The following options under the **Format** tab for an embedded video file are not supported:"
  }, {
    heading: "media",
    content: "Column 1"
  }, {
    heading: "media",
    content: "Column 2"
  }, {
    heading: "media",
    content: "Adjust"
  }, {
    heading: "media",
    content: "Video Styles"
  }, {
    heading: "media",
    content: "Rotate in Arrange"
  }, {
    heading: "media",
    content: "Crop"
  }, {
    heading: "animations",
    content: "The dynamic file conversion function does not support the following features for animations:"
  }, {
    heading: "animations",
    content: "**Entrance > Exciting**: Flip, Whip, Credits, and Drop"
  }, {
    heading: "animations",
    content: "**Emphasis**: Brush Color, Font Color, Underline, Bold Flash, Bold Reveal, and Wave"
  }, {
    heading: "animations",
    content: "**Exit > Exciting:** Flip, Whip, Credits, and Drop"
  }, {
    heading: "animations",
    content: "The following animations can display incorrectly in converted files:"
  }, {
    heading: "animations",
    content: "**Entrance**: Blinds, Box, Checkerboard, Circle, Diamond, Dissolve In, Peek In, Plus, Random Bars, Split, Strips, Wedge, Wheel, Wipe, Basic Swivel, Boomerang, Curve Down, Float, Pinwheel, and Spiral In"
  }, {
    heading: "animations",
    content: "**Emphasis**: Fill Color, Line Color, Complementary Color, Darken, Desaturate, Object Color, and Color Pulse"
  }, {
    heading: "animations",
    content: "**Exit**: Blinds, Box, Checkerboard, Circle, Diamond, Dissolve Out, Peek Out, Plus, Random Bars, Split, Strips, Wedge, Wheel, Wipe, Basic Swivel, Boomerang, Curve Down, Float, Pinwheel, and Spiral In"
  }, {
    heading: "backgrounds",
    content: "The dynamic file conversion function does not support the following background format settings:"
  }, {
    heading: "backgrounds",
    content: "Picture or texture fill"
  }, {
    heading: "backgrounds",
    content: "Pattern fill"
  }, {
    heading: "backgrounds",
    content: "Hide background graphics"
  }],
  headings: [{
    id: "slides",
    content: "Slides"
  }, {
    id: "shapes",
    content: "Shapes"
  }, {
    id: "pictures",
    content: "Pictures"
  }, {
    id: "text",
    content: "Text"
  }, {
    id: "media",
    content: "Media"
  }, {
    id: "animations",
    content: "Animations"
  }, {
    id: "backgrounds",
    content: "Backgrounds"
  }]
};
export let toc = [{
  depth: 3,
  url: "#slides",
  title: _jsx(_Fragment, {
    children: "Slides"
  })
}, {
  depth: 3,
  url: "#shapes",
  title: _jsx(_Fragment, {
    children: "Shapes"
  })
}, {
  depth: 3,
  url: "#pictures",
  title: _jsx(_Fragment, {
    children: "Pictures"
  })
}, {
  depth: 3,
  url: "#text",
  title: _jsx(_Fragment, {
    children: "Text"
  })
}, {
  depth: 3,
  url: "#media",
  title: _jsx(_Fragment, {
    children: "Media"
  })
}, {
  depth: 3,
  url: "#animations",
  title: _jsx(_Fragment, {
    children: "Animations"
  })
}, {
  depth: 3,
  url: "#backgrounds",
  title: _jsx(_Fragment, {
    children: "Backgrounds"
  })
}];
function _createMdxContent(props) {
  const _components = {
    h3: "h3",
    li: "li",
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
      children: "Agora Interactive Whiteboard provides the dynamic file conversion function for converting PPTX files edited with Microsoft PowerPoint to HTML web pages. The generated files preserve animations present in the source files."
    }), `
`, _jsx(_components.p, {
      children: "However, this function is not available for certain objects, formats, and effects in PPTX files. These objects, formats, or effects either disappear or display incorrectly in the converted files."
    }), `
`, _jsx(_components.p, {
      children: "This page lists the PowerPoint features that are not supported or not well supported by the dynamic file conversion function. To achieve the best results, Agora recommends that you keep these limitations in mind when preparing your PPTX files intended for later conversion."
    }), `
`, _jsx(_components.h3, {
      id: "slides",
      children: "Slides"
    }), `
`, _jsx(_components.p, {
      children: "The dynamic file conversion function does not support the following features for slides:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Add Section: Organize slides into sections"
      }), `
`, _jsx(_components.li, {
        children: "Hide Slide"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "shapes",
      children: "Shapes"
    }), `
`, _jsx(_components.p, {
      children: "The dynamic file conversion function supports most shapes in PPTX files. However, the following shapes can display incorrectly in converted files:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Column 1"
          }), _jsx(_components.th, {
            children: "Column 2"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Basic Shapes"
            })
          }), _jsx(_components.td, {})]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Vertical Text Box"
          }), _jsx(_components.td, {
            children: "Heptagon"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Octagon"
          }), _jsx(_components.td, {
            children: "Decagon"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Dodecagon"
          }), _jsx(_components.td, {
            children: "Smiley Face"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Stars and Banners"
            })
          }), _jsx(_components.td, {})]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Star: 8 Points"
          }), _jsx(_components.td, {
            children: "Star: 10 Points"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Star: 12 Points"
          }), _jsx(_components.td, {
            children: "Star: 16 Points"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Star: 24 Points"
          }), _jsx(_components.td, {
            children: "Star: 32 Points"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Callouts"
            })
          }), _jsx(_components.td, {})]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Line"
          }), _jsx(_components.td, {
            children: "Bent Line"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Line with Accent Bar"
          }), _jsx(_components.td, {
            children: "Bent Line with Accent Bar"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Double Bent Line with Accent Bar"
          }), _jsx(_components.td, {
            children: "Line with No Border"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Bent Line with No Border"
          }), _jsx(_components.td, {
            children: "Double Bent Line with No Border"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Line with Boarder and Accent Line"
          }), _jsx(_components.td, {
            children: "Bent Line with Boarder and Accent Line"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Double Bent Line with Boarder and Accent Line"
          }), _jsx(_components.td, {})]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Action Buttons"
            })
          }), _jsx(_components.td, {})]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Go Back or Previous"
          }), _jsx(_components.td, {
            children: "Go Forward or Next"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Go to Beginning"
          }), _jsx(_components.td, {
            children: "Go to End"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Go Home"
          }), _jsx(_components.td, {
            children: "Get Information"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Return"
          }), _jsx(_components.td, {
            children: "Video"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Document"
          }), _jsx(_components.td, {
            children: "Sound"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Help"
          }), _jsx(_components.td, {
            children: "Blank"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "pictures",
      children: "Pictures"
    }), `
`, _jsx(_components.p, {
      children: "The dynamic file conversion function does not support the following features for pictures:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Adjust color"
      }), `
`, _jsx(_components.li, {
        children: "Compress pictures"
      }), `
`, _jsxs(_components.li, {
        children: ["Picture effects:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Rotated, White"
          }), `
`, _jsx(_components.li, {
            children: "Relaxed Perspective, White"
          }), `
`, _jsx(_components.li, {
            children: "Bevel Rectangle"
          }), `
`, _jsx(_components.li, {
            children: "Bevel Perspective"
          }), `
`, _jsx(_components.li, {
            children: "Reflected Perspective Right"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The following picture effects are not well supported and might display incorrectly in converted files:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Column 1"
          }), _jsx(_components.th, {
            children: "Column 2"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Simple Frame, White"
          }), _jsx(_components.td, {
            children: "Beveled Matte, White"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Drop Shadow Rectangle"
          }), _jsx(_components.td, {
            children: "Reflected Rounded Rectangle"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Beveled Shadow, Black"
          }), _jsx(_components.td, {
            children: "Compound Frame, Black"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Rounded Diagonal Corner, White"
          }), _jsx(_components.td, {
            children: "Snip Diagonal Corner, White"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Moderate Frame, White"
          }), _jsx(_components.td, {
            children: "Perspective Shadow, White"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Bevel Perspective Left, White"
          }), _jsx(_components.td, {
            children: "Reflected Bevel, White"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "text",
      children: "Text"
    }), `
`, _jsx(_components.p, {
      children: "The dynamic file conversion function does not support the following features for text:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "WordArt"
      }), `
`, _jsx(_components.li, {
        children: "Alt text"
      }), `
`, _jsx(_components.li, {
        children: "Tabs"
      }), `
`, _jsx(_components.li, {
        children: "All text effects except Square"
      }), `
`, _jsx(_components.li, {
        children: "All text directions except for Horizontal and Vertical"
      }), `
`, _jsx(_components.li, {
        children: "The By Paragraph animation effect, which makes the paragraphs of text appear one at a time"
      }), `
`, _jsx(_components.li, {
        children: "Bullets and numbering with customized size and color"
      }), `
`, _jsx(_components.li, {
        children: "Font effects: Double Strikethrough, Small Caps, All Caps, and Equalize Character Height"
      }), `
`, _jsx(_components.li, {
        children: "Underlined text"
      }), `
`, _jsx(_components.li, {
        children: "Text fill: Gradient fill, Picture or texture fill, and Pattern fill"
      }), `
`, _jsx(_components.li, {
        children: "Arrange > Selection pane"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "media",
      children: "Media"
    }), `
`, _jsx(_components.p, {
      children: "The dynamic file conversion function also works for PPTX files that contain embedded audio and video. You can do some basic editing to the embedded media, for example, trimming the length of audio and video or adjusting the height and width of video. However, the dynamic file conversion function does not support most of the playback and format options for the inserted audio and video."
    }), `
`, _jsxs(_components.p, {
      children: ["The following options under the ", _jsx(_components.strong, {
        children: "Playback"
      }), " tab for an embedded audio or video file are not supported:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Column 1"
          }), _jsx(_components.th, {
            children: "Column 2"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Bookmarks"
          }), _jsx(_components.td, {
            children: "Fade In and Fade Out"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Volume"
          }), _jsx(_components.td, {
            children: "Play Across Slides"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Loop until Stopped"
          }), _jsx(_components.td, {
            children: "Hide During Showing"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Rewind after Playing"
          }), _jsx(_components.td, {})]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["The following options under the ", _jsx(_components.strong, {
        children: "Format"
      }), " tab for an embedded video file are not supported:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Column 1"
          }), _jsx(_components.th, {
            children: "Column 2"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Adjust"
          }), _jsx(_components.td, {
            children: "Video Styles"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Rotate in Arrange"
          }), _jsx(_components.td, {
            children: "Crop"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "animations",
      children: "Animations"
    }), `
`, _jsx(_components.p, {
      children: "The dynamic file conversion function does not support the following features for animations:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Entrance > Exciting"
        }), ": Flip, Whip, Credits, and Drop"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Emphasis"
        }), ": Brush Color, Font Color, Underline, Bold Flash, Bold Reveal, and Wave"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Exit > Exciting:"
        }), " Flip, Whip, Credits, and Drop"]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The following animations can display incorrectly in converted files:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Entrance"
        }), ": Blinds, Box, Checkerboard, Circle, Diamond, Dissolve In, Peek In, Plus, Random Bars, Split, Strips, Wedge, Wheel, Wipe, Basic Swivel, Boomerang, Curve Down, Float, Pinwheel, and Spiral In"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Emphasis"
        }), ": Fill Color, Line Color, Complementary Color, Darken, Desaturate, Object Color, and Color Pulse"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Exit"
        }), ": Blinds, Box, Checkerboard, Circle, Diamond, Dissolve Out, Peek Out, Plus, Random Bars, Split, Strips, Wedge, Wheel, Wipe, Basic Swivel, Boomerang, Curve Down, Float, Pinwheel, and Spiral In"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "backgrounds",
      children: "Backgrounds"
    }), `
`, _jsx(_components.p, {
      children: "The dynamic file conversion function does not support the following background format settings:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Picture or texture fill"
      }), `
`, _jsx(_components.li, {
        children: "Pattern fill"
      }), `
`, _jsx(_components.li, {
        children: "Hide background graphics"
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
