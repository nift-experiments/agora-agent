import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Overview",
  description: "Learn the structure, identification, content, and management rules of whiteboard scenes."
};
export let _markdown = `

When you enter a whiteboard room, you see a page that extends infinitely in all directions. Interactive Whiteboard calls this page a scene. On a scene, you can write and draw, insert an image, and present a dynamic PPT slide. In a whiteboard room, you can add multiple scenes, switch between scenes, and move a scene. These capabilities enable you to implement advanced functions such as displaying a complete PPT file on the whiteboard.

This feature is for Web only.

This page introduces the scene structure, scene identification, the contents that can be displayed on a scene, and the rules for adding, deleting, and modifying a scene. Once you grasp these basic concepts, you can build an interactive whiteboard application with multiple scenes according to your business needs.

## Scene structure [#scene-structure]

An Interactive Whiteboard room can have scene directories and scenes, which are organized in a tree structure. A newly created Interactive Whiteboard room contains a root scene directory and an initial scene by default. By using the APIs provided by the Whiteboard SDK, you can insert multiple scene directories or scenes in the room. Under a scene directory there can be subdirectories or scenes.

The whiteboard room supports displaying a specific scene, but not a scene directory. The room can display one scene at a time.

The following schematic diagram shows an example scene structure of an Interactive Whiteboard room:

<details>
  <summary>
    Interactive Whiteboard scene structure example
  </summary>

  ![](https://web-cdn.agora.io/docs-files/1632282998256)
</details>

## Scene identification [#scene-identification]

In an Interactive Whiteboard room, each scene or scene directory has a unique path in string format as its identifier. The path of a scene or scene directory is the path of its direct parent node plus the name of the scene or scene directory. The scene or scene directory path must begin with \`/\` and use \`/\` to separate the scene hierarchy.

Note the following:

* The path of the root scene directory is \`/\`and the path of the initial scene is \`/init\`.
* Scenes and subdirectories under the same scene directory cannot have duplicate names.
* Because \`/\` is used to separate scene directories, do not include any \`/\` symbols in scene names.

For example, if you insert a scene directory named \`Math\` that contains scenes \`ClassA\` and \`ClassB\` in the root directory, then the paths of the new scene directory and scenes are as follows:

* \`/Math\`
* \`/Math/ClassA\`
* \`/Math/ClassB\`

The order of scenes in a scene directory is identified by the index number, which starts from 0. By specifying the index number, you can switch to a specific scene or insert a new scene at a specific location.

## Scene content [#scene-content]

On a whiteboard scene, in addition to writing and drawing by using the whiteboard tools, you can also display images or web pages in the following formats:

* Static images in PNG, JPG/JPEG, and WEBP formats.
* Static images in PNG, JPG/JPEG, and WEBP formats converted from PPT, PPTX, DOC, DOCX, and PDF files. You can convert them yourself or use the [static-file conversion service](/en/api-reference/api-ref/whiteboard/file-conversion) of Interactive Whiteboard.
* HTML web pages converted from PPTX files. You must use the [dynamic-file conversion service](/en/api-reference/api-ref/whiteboard/file-conversion) of Interactive Whiteboard to do the conversion.

## Scene management [#scene-management]

By calling APIs of the Whiteboard SDK, you can add, delete, and move scenes. The rules for managing a scene are as follows:

**Adding scenes**

When you add a new scene, the SDK performs one of the following operations, depending on the path of the new scene:

* If the scene path contains scene directories that do not exist, the SDK automatically creates the scene directories and adds the new scene.
* If the scene directories contained in the scene path already exist and the name of the new scene is unique in the direct parent scene directory, the SDK adds the new scene.
* If the scene path is duplicated with an existing scene, then the SDK fails to add the new scene. Note that the SDK does not trigger an error message for this failure.

**Deleting scenes**

The root directory in a whiteboard room cannot be deleted and each room must have at least one scene. When all scenes and subdirectories in a scene directory are deleted, the scene directory is deleted along with them; when all scenes in a whiteboard room are deleted, the SDK automatically creates an initial scene with the path \`/init\`.

**Moving scenes**

Scenes are ordered, but scene directories are not. You can call the API to move a specified scene, but you cannot change the position of a scene directory through the API.

**Scenes example**

The following example demonstrates the rules for adding and deleting scenes:

Assuming the current whiteboard room is new, it has only the root scene directory / and the scene \`/init\`.

When you add a new scene with the path \`/math/class-A\`, the SDK automatically creates a scene directory with the path \`/math\`.

Subsequently, when you add a new scene with path \`/math/class-B\`, the SDK directly adds the new scene to the \`/math\` scene directory.

When you delete the \`/math/class-A scene\`, the SDK removes the scene \`class-A\` from the \`/math\` scene directory.

After that, when you delete the \`/math/class-B\` scene, the SDK automatically deletes the \`/math\` scene directory because all the scenes in that directory are deleted.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "When you enter a whiteboard room, you see a page that extends infinitely in all directions. Interactive Whiteboard calls this page a scene. On a scene, you can write and draw, insert an image, and present a dynamic PPT slide. In a whiteboard room, you can add multiple scenes, switch between scenes, and move a scene. These capabilities enable you to implement advanced functions such as displaying a complete PPT file on the whiteboard."
  }, {
    heading: undefined,
    content: "This feature is for Web only."
  }, {
    heading: undefined,
    content: "This page introduces the scene structure, scene identification, the contents that can be displayed on a scene, and the rules for adding, deleting, and modifying a scene. Once you grasp these basic concepts, you can build an interactive whiteboard application with multiple scenes according to your business needs."
  }, {
    heading: "scene-structure",
    content: "An Interactive Whiteboard room can have scene directories and scenes, which are organized in a tree structure. A newly created Interactive Whiteboard room contains a root scene directory and an initial scene by default. By using the APIs provided by the Whiteboard SDK, you can insert multiple scene directories or scenes in the room. Under a scene directory there can be subdirectories or scenes."
  }, {
    heading: "scene-structure",
    content: "The whiteboard room supports displaying a specific scene, but not a scene directory. The room can display one scene at a time."
  }, {
    heading: "scene-structure",
    content: "The following schematic diagram shows an example scene structure of an Interactive Whiteboard room:"
  }, {
    heading: "scene-identification",
    content: "In an Interactive Whiteboard room, each scene or scene directory has a unique path in string format as its identifier. The path of a scene or scene directory is the path of its direct parent node plus the name of the scene or scene directory. The scene or scene directory path must begin with `/` and use `/` to separate the scene hierarchy."
  }, {
    heading: "scene-identification",
    content: "Note the following:"
  }, {
    heading: "scene-identification",
    content: "The path of the root scene directory is `/`and the path of the initial scene is `/init`."
  }, {
    heading: "scene-identification",
    content: "Scenes and subdirectories under the same scene directory cannot have duplicate names."
  }, {
    heading: "scene-identification",
    content: "Because `/` is used to separate scene directories, do not include any `/` symbols in scene names."
  }, {
    heading: "scene-identification",
    content: "For example, if you insert a scene directory named `Math` that contains scenes `ClassA` and `ClassB` in the root directory, then the paths of the new scene directory and scenes are as follows:"
  }, {
    heading: "scene-identification",
    content: "`/Math`"
  }, {
    heading: "scene-identification",
    content: "`/Math/ClassA`"
  }, {
    heading: "scene-identification",
    content: "`/Math/ClassB`"
  }, {
    heading: "scene-identification",
    content: "The order of scenes in a scene directory is identified by the index number, which starts from 0. By specifying the index number, you can switch to a specific scene or insert a new scene at a specific location."
  }, {
    heading: "scene-content",
    content: "On a whiteboard scene, in addition to writing and drawing by using the whiteboard tools, you can also display images or web pages in the following formats:"
  }, {
    heading: "scene-content",
    content: "Static images in PNG, JPG/JPEG, and WEBP formats."
  }, {
    heading: "scene-content",
    content: "Static images in PNG, JPG/JPEG, and WEBP formats converted from PPT, PPTX, DOC, DOCX, and PDF files. You can convert them yourself or use the static-file conversion service of Interactive Whiteboard."
  }, {
    heading: "scene-content",
    content: "HTML web pages converted from PPTX files. You must use the dynamic-file conversion service of Interactive Whiteboard to do the conversion."
  }, {
    heading: "scene-management",
    content: "By calling APIs of the Whiteboard SDK, you can add, delete, and move scenes. The rules for managing a scene are as follows:"
  }, {
    heading: "scene-management",
    content: "**Adding scenes**"
  }, {
    heading: "scene-management",
    content: "When you add a new scene, the SDK performs one of the following operations, depending on the path of the new scene:"
  }, {
    heading: "scene-management",
    content: "If the scene path contains scene directories that do not exist, the SDK automatically creates the scene directories and adds the new scene."
  }, {
    heading: "scene-management",
    content: "If the scene directories contained in the scene path already exist and the name of the new scene is unique in the direct parent scene directory, the SDK adds the new scene."
  }, {
    heading: "scene-management",
    content: "If the scene path is duplicated with an existing scene, then the SDK fails to add the new scene. Note that the SDK does not trigger an error message for this failure."
  }, {
    heading: "scene-management",
    content: "**Deleting scenes**"
  }, {
    heading: "scene-management",
    content: "The root directory in a whiteboard room cannot be deleted and each room must have at least one scene. When all scenes and subdirectories in a scene directory are deleted, the scene directory is deleted along with them; when all scenes in a whiteboard room are deleted, the SDK automatically creates an initial scene with the path `/init`."
  }, {
    heading: "scene-management",
    content: "**Moving scenes**"
  }, {
    heading: "scene-management",
    content: "Scenes are ordered, but scene directories are not. You can call the API to move a specified scene, but you cannot change the position of a scene directory through the API."
  }, {
    heading: "scene-management",
    content: "**Scenes example**"
  }, {
    heading: "scene-management",
    content: "The following example demonstrates the rules for adding and deleting scenes:"
  }, {
    heading: "scene-management",
    content: "Assuming the current whiteboard room is new, it has only the root scene directory / and the scene `/init`."
  }, {
    heading: "scene-management",
    content: "When you add a new scene with the path `/math/class-A`, the SDK automatically creates a scene directory with the path `/math`."
  }, {
    heading: "scene-management",
    content: "Subsequently, when you add a new scene with path `/math/class-B`, the SDK directly adds the new scene to the `/math` scene directory."
  }, {
    heading: "scene-management",
    content: "When you delete the `/math/class-A scene`, the SDK removes the scene `class-A` from the `/math` scene directory."
  }, {
    heading: "scene-management",
    content: "After that, when you delete the `/math/class-B` scene, the SDK automatically deletes the `/math` scene directory because all the scenes in that directory are deleted."
  }],
  headings: [{
    id: "scene-structure",
    content: "Scene structure"
  }, {
    id: "scene-identification",
    content: "Scene identification"
  }, {
    id: "scene-content",
    content: "Scene content"
  }, {
    id: "scene-management",
    content: "Scene management"
  }]
};
export let toc = [{
  depth: 2,
  url: "#scene-structure",
  title: _jsx(_Fragment, {
    children: "Scene structure"
  })
}, {
  depth: 2,
  url: "#scene-identification",
  title: _jsx(_Fragment, {
    children: "Scene identification"
  })
}, {
  depth: 2,
  url: "#scene-content",
  title: _jsx(_Fragment, {
    children: "Scene content"
  })
}, {
  depth: 2,
  url: "#scene-management",
  title: _jsx(_Fragment, {
    children: "Scene management"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "When you enter a whiteboard room, you see a page that extends infinitely in all directions. Interactive Whiteboard calls this page a scene. On a scene, you can write and draw, insert an image, and present a dynamic PPT slide. In a whiteboard room, you can add multiple scenes, switch between scenes, and move a scene. These capabilities enable you to implement advanced functions such as displaying a complete PPT file on the whiteboard."
    }), `
`, _jsx(_components.p, {
      children: "This feature is for Web only."
    }), `
`, _jsx(_components.p, {
      children: "This page introduces the scene structure, scene identification, the contents that can be displayed on a scene, and the rules for adding, deleting, and modifying a scene. Once you grasp these basic concepts, you can build an interactive whiteboard application with multiple scenes according to your business needs."
    }), `
`, _jsx(_components.h2, {
      id: "scene-structure",
      children: "Scene structure"
    }), `
`, _jsx(_components.p, {
      children: "An Interactive Whiteboard room can have scene directories and scenes, which are organized in a tree structure. A newly created Interactive Whiteboard room contains a root scene directory and an initial scene by default. By using the APIs provided by the Whiteboard SDK, you can insert multiple scene directories or scenes in the room. Under a scene directory there can be subdirectories or scenes."
    }), `
`, _jsx(_components.p, {
      children: "The whiteboard room supports displaying a specific scene, but not a scene directory. The room can display one scene at a time."
    }), `
`, _jsx(_components.p, {
      children: "The following schematic diagram shows an example scene structure of an Interactive Whiteboard room:"
    }), `
`, _jsxs("details", {
      children: [_jsx("summary", {
        children: "Interactive Whiteboard scene structure example"
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://web-cdn.agora.io/docs-files/1632282998256",
          alt: ""
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "scene-identification",
      children: "Scene identification"
    }), `
`, _jsxs(_components.p, {
      children: ["In an Interactive Whiteboard room, each scene or scene directory has a unique path in string format as its identifier. The path of a scene or scene directory is the path of its direct parent node plus the name of the scene or scene directory. The scene or scene directory path must begin with ", _jsx(_components.code, {
        children: "/"
      }), " and use ", _jsx(_components.code, {
        children: "/"
      }), " to separate the scene hierarchy."]
    }), `
`, _jsx(_components.p, {
      children: "Note the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["The path of the root scene directory is ", _jsx(_components.code, {
          children: "/"
        }), "and the path of the initial scene is ", _jsx(_components.code, {
          children: "/init"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Scenes and subdirectories under the same scene directory cannot have duplicate names."
      }), `
`, _jsxs(_components.li, {
        children: ["Because ", _jsx(_components.code, {
          children: "/"
        }), " is used to separate scene directories, do not include any ", _jsx(_components.code, {
          children: "/"
        }), " symbols in scene names."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["For example, if you insert a scene directory named ", _jsx(_components.code, {
        children: "Math"
      }), " that contains scenes ", _jsx(_components.code, {
        children: "ClassA"
      }), " and ", _jsx(_components.code, {
        children: "ClassB"
      }), " in the root directory, then the paths of the new scene directory and scenes are as follows:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "/Math"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "/Math/ClassA"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "/Math/ClassB"
        })
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The order of scenes in a scene directory is identified by the index number, which starts from 0. By specifying the index number, you can switch to a specific scene or insert a new scene at a specific location."
    }), `
`, _jsx(_components.h2, {
      id: "scene-content",
      children: "Scene content"
    }), `
`, _jsx(_components.p, {
      children: "On a whiteboard scene, in addition to writing and drawing by using the whiteboard tools, you can also display images or web pages in the following formats:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Static images in PNG, JPG/JPEG, and WEBP formats."
      }), `
`, _jsxs(_components.li, {
        children: ["Static images in PNG, JPG/JPEG, and WEBP formats converted from PPT, PPTX, DOC, DOCX, and PDF files. You can convert them yourself or use the ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/whiteboard/file-conversion",
          children: "static-file conversion service"
        }), " of Interactive Whiteboard."]
      }), `
`, _jsxs(_components.li, {
        children: ["HTML web pages converted from PPTX files. You must use the ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/whiteboard/file-conversion",
          children: "dynamic-file conversion service"
        }), " of Interactive Whiteboard to do the conversion."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "scene-management",
      children: "Scene management"
    }), `
`, _jsx(_components.p, {
      children: "By calling APIs of the Whiteboard SDK, you can add, delete, and move scenes. The rules for managing a scene are as follows:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Adding scenes"
      })
    }), `
`, _jsx(_components.p, {
      children: "When you add a new scene, the SDK performs one of the following operations, depending on the path of the new scene:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "If the scene path contains scene directories that do not exist, the SDK automatically creates the scene directories and adds the new scene."
      }), `
`, _jsx(_components.li, {
        children: "If the scene directories contained in the scene path already exist and the name of the new scene is unique in the direct parent scene directory, the SDK adds the new scene."
      }), `
`, _jsx(_components.li, {
        children: "If the scene path is duplicated with an existing scene, then the SDK fails to add the new scene. Note that the SDK does not trigger an error message for this failure."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Deleting scenes"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["The root directory in a whiteboard room cannot be deleted and each room must have at least one scene. When all scenes and subdirectories in a scene directory are deleted, the scene directory is deleted along with them; when all scenes in a whiteboard room are deleted, the SDK automatically creates an initial scene with the path ", _jsx(_components.code, {
        children: "/init"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Moving scenes"
      })
    }), `
`, _jsx(_components.p, {
      children: "Scenes are ordered, but scene directories are not. You can call the API to move a specified scene, but you cannot change the position of a scene directory through the API."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Scenes example"
      })
    }), `
`, _jsx(_components.p, {
      children: "The following example demonstrates the rules for adding and deleting scenes:"
    }), `
`, _jsxs(_components.p, {
      children: ["Assuming the current whiteboard room is new, it has only the root scene directory / and the scene ", _jsx(_components.code, {
        children: "/init"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["When you add a new scene with the path ", _jsx(_components.code, {
        children: "/math/class-A"
      }), ", the SDK automatically creates a scene directory with the path ", _jsx(_components.code, {
        children: "/math"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["Subsequently, when you add a new scene with path ", _jsx(_components.code, {
        children: "/math/class-B"
      }), ", the SDK directly adds the new scene to the ", _jsx(_components.code, {
        children: "/math"
      }), " scene directory."]
    }), `
`, _jsxs(_components.p, {
      children: ["When you delete the ", _jsx(_components.code, {
        children: "/math/class-A scene"
      }), ", the SDK removes the scene ", _jsx(_components.code, {
        children: "class-A"
      }), " from the ", _jsx(_components.code, {
        children: "/math"
      }), " scene directory."]
    }), `
`, _jsxs(_components.p, {
      children: ["After that, when you delete the ", _jsx(_components.code, {
        children: "/math/class-B"
      }), " scene, the SDK automatically deletes the ", _jsx(_components.code, {
        children: "/math"
      }), " scene directory because all the scenes in that directory are deleted."]
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
