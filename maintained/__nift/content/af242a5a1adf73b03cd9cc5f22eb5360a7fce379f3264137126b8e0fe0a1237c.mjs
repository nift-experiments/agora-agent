import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Third-party cloud storage regions",
  description: "Configure third-party cloud storage of recording files and screenshot files."
};
export let _markdown = `

When using the custom recording and custom screenshot functions, you configure the third-party cloud storage for recording and screenshot files using \`StorageConfig\`. The \`vendor\` field sets the third-party cloud storage platform. The \`region\` field sets the third-party cloud storage region for the selected \`vendor\`.

This page lists the \`region\` values you can use to configure storage for different vendors.

<Tabs defaultValue="amazon" groupId="platform">
  <TabsList>
    <TabsTrigger value="amazon">
      Amazon S3
    </TabsTrigger>

    <TabsTrigger value="alibaba">
      Alibaba Cloud
    </TabsTrigger>

    <TabsTrigger value="tencent">
      Tencent Cloud
    </TabsTrigger>

    <TabsTrigger value="azure">
      Microsoft Azure
    </TabsTrigger>

    <TabsTrigger value="google">
      Google Cloud
    </TabsTrigger>

    <TabsTrigger value="huawei">
      Huawei Cloud
    </TabsTrigger>

    <TabsTrigger value="baidu">
      Baidu Smart Cloud
    </TabsTrigger>

    <TabsTrigger value="self">
      S3 compatible storage
    </TabsTrigger>
  </TabsList>

  <TabsContent value="amazon">
    * \`vendor\`= 1
    * **\`region\` values**:
      * \`0\`: US\\_EAST\\_1
      * \`1\`: US\\_EAST\\_2
      * \`2\`: US\\_WEST\\_1
      * \`3\`: US\\_WEST\\_2
      * \`4\`: EU\\_WEST\\_1
      * \`5\`: EU\\_WEST\\_2
      * \`6\`: EU\\_WEST\\_3
      * \`7\`: EU\\_CENTRAL\\_1
      * \`8\`: AP\\_SOUTHEAST\\_1
      * \`9\`: AP\\_SOUTHEAST\\_2
      * \`10\`: AP\\_NORTHEAST\\_1
      * \`11\`: AP\\_NORTHEAST\\_2
      * \`12\`: SA\\_EAST\\_1
      * \`13\`: CA\\_CENTRAL\\_1
      * \`14\`: AP\\_SOUTH\\_1
      * \`15\`: CN\\_NORTH\\_1
      * \`16\`: CN\\_NORTHWEST\\_1
      * \`18\`: AF\\_SOUTH\\_1
      * \`19\`: AP\\_EAST\\_1
      * \`20\`: AP\\_NORTHEAST\\_3
      * \`21\`: EU\\_NORTH\\_1
      * \`22\`: ME\\_SOUTH\\_1
      * \`24\`: AP\\_SOUTHEAST\\_3
      * \`25\`: EU\\_SOUTH\\_1
  </TabsContent>

  <TabsContent value="alibaba">
    * \`vendor\`= 2
    * **\`region\` values**:
      * \`0\`: CN\\_Hangzhou
      * \`1\`: CN\\_Shanghai
      * \`2\`: CN\\_Qingdao
      * \`3\`: CN\\_Beijing
      * \`4\`: CN\\_Zhangjiakou
      * \`5\`: CN\\_Huhehaote
      * \`6\`: CN\\_Shenzhen
      * \`7\`: CN\\_Hongkong
      * \`8\`: US\\_West\\_1
      * \`9\`: US\\_East\\_1
      * \`10\`: AP\\_Southeast\\_1
      * \`11\`: AP\\_Southeast\\_2
      * \`12\`: AP\\_Southeast\\_3
      * \`13\`: AP\\_Southeast\\_5
      * \`14\`: AP\\_Northeast\\_1
      * \`15\`: AP\\_South\\_1
      * \`16\`: EU\\_Central\\_1
      * \`17\`: EU\\_West\\_1
      * \`18\`: EU\\_East\\_1
      * \`19\`: AP\\_Southeast\\_6
      * \`20\`: CN\\_Heyuan
      * \`21\`: CN\\_Guangzhou
      * \`22\`: CN\\_Chengdu
      * \`23\`: CN\\_Nanjing
      * \`24\`: CN\\_Fuzhou
      * \`25\`: CN\\_Wulanchabu
      * \`26\`: CN\\_Northeast\\_2
      * \`27\`: CN\\_Southeast\\_7
  </TabsContent>

  <TabsContent value="tencent">
    * \`vendor\`= 3
    * **\`region\` values**:
      * \`0\`: AP\\_Beijing\\_1
      * \`1\`: AP\\_Beijing
      * \`2\`: AP\\_Shanghai
      * \`3\`: AP\\_Guangzhou
      * \`4\`: AP\\_Chengdu
      * \`5\`: AP\\_Chongqing
      * \`6\`: AP\\_Shenzhen\\_FSI
      * \`7\`: AP\\_Shanghai\\_FSI
      * \`8\`: AP\\_Beijing\\_FSI
      * \`9\`: AP\\_Hongkong
      * \`10\`: AP\\_Singapore
      * \`11\`: AP\\_Mumbai
      * \`12\`: AP\\_Seoul
      * \`13\`: AP\\_Bangkok
      * \`14\`: AP\\_Tokyo
      * \`15\`: NA\\_Siliconvalley
      * \`16\`: NA\\_Ashburn
      * \`17\`: NA\\_Toronto
      * \`18\`: EU\\_Frankfurt
      * \`19\`: EU\\_Moscow
  </TabsContent>

  <TabsContent value="azure">
    * \`vendor\`= 5
    * \`region\` = 0
  </TabsContent>

  <TabsContent value="google">
    * \`vendor\`= 6
    * \`region\` = 0
  </TabsContent>

  <TabsContent value="huawei">
    * \`vendor\`= 7
    * **\`region\` values**:
      * \`0\`: CN\\_North\\_1
      * \`1\`: CN\\_North\\_4
      * \`2\`: CN\\_East\\_2
      * \`3\`: CN\\_East\\_3
      * \`4\`: CN\\_South\\_1
      * \`5\`: CN\\_Southwest\\_2
      * \`6\`: AP\\_Southeast\\_1
      * \`7\`: AP\\_Southeast\\_2
      * \`8\`: AP\\_Southeast\\_3
      * \`9\`: AF\\_South\\_1
      * \`10\`: SA\\_Argentina\\_1
      * \`11\`: SA\\_Peru\\_1
      * \`12\`: NA\\_Mexico\\_1
      * \`13\`: SA\\_Brazil\\_1
      * \`14\`: LA\\_South\\_2
      * \`15\`: SA\\_Chile\\_1
  </TabsContent>

  <TabsContent value="baidu">
    * \`vendor\`= 8
    * **\`region\` values**:
      * \`1\`: Baoding
      * \`2\`: Suzhou
      * \`3\`: Guangzhou
      * \`4\`: Hongkong
      * \`5\`: Singapore
      * \`6\`: Wuhan
      * \`7\`: Shanghai
  </TabsContent>

  <TabsContent value="self">
    * \`vendor\`= 11
    * \`region\` = 0

    Specify the domain name of the self-built cloud storage in the \`extensionParams.endpoint\` field.

    \`\`\`json
    "storageConfig": {
      "secretKey": "xxxxx",
      "accessKey": "xxxxx",
      "bucket": "s3-digit-test",
      // highlight-start
      "vendor": 11,
      "region": 0,
      // highlight-end
      "fileNamePrefix": [
        "agora",
        "meituan",
        "test"
      ],
      "extensionParams": {
        // highlight-start
        "endpoint": "xxxxx.xxxxx.com"
        // highlight-end
      }
    }
    \`\`\`
  </TabsContent>
</Tabs>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "When using the custom recording and custom screenshot functions, you configure the third-party cloud storage for recording and screenshot files using `StorageConfig`. The `vendor` field sets the third-party cloud storage platform. The `region` field sets the third-party cloud storage region for the selected `vendor`."
  }, {
    heading: undefined,
    content: "This page lists the `region` values you can use to configure storage for different vendors."
  }, {
    heading: undefined,
    content: "`vendor`= 1"
  }, {
    heading: undefined,
    content: "**`region` values**:"
  }, {
    heading: undefined,
    content: "`0`: US\\_EAST\\_1"
  }, {
    heading: undefined,
    content: "`1`: US\\_EAST\\_2"
  }, {
    heading: undefined,
    content: "`2`: US\\_WEST\\_1"
  }, {
    heading: undefined,
    content: "`3`: US\\_WEST\\_2"
  }, {
    heading: undefined,
    content: "`4`: EU\\_WEST\\_1"
  }, {
    heading: undefined,
    content: "`5`: EU\\_WEST\\_2"
  }, {
    heading: undefined,
    content: "`6`: EU\\_WEST\\_3"
  }, {
    heading: undefined,
    content: "`7`: EU\\_CENTRAL\\_1"
  }, {
    heading: undefined,
    content: "`8`: AP\\_SOUTHEAST\\_1"
  }, {
    heading: undefined,
    content: "`9`: AP\\_SOUTHEAST\\_2"
  }, {
    heading: undefined,
    content: "`10`: AP\\_NORTHEAST\\_1"
  }, {
    heading: undefined,
    content: "`11`: AP\\_NORTHEAST\\_2"
  }, {
    heading: undefined,
    content: "`12`: SA\\_EAST\\_1"
  }, {
    heading: undefined,
    content: "`13`: CA\\_CENTRAL\\_1"
  }, {
    heading: undefined,
    content: "`14`: AP\\_SOUTH\\_1"
  }, {
    heading: undefined,
    content: "`15`: CN\\_NORTH\\_1"
  }, {
    heading: undefined,
    content: "`16`: CN\\_NORTHWEST\\_1"
  }, {
    heading: undefined,
    content: "`18`: AF\\_SOUTH\\_1"
  }, {
    heading: undefined,
    content: "`19`: AP\\_EAST\\_1"
  }, {
    heading: undefined,
    content: "`20`: AP\\_NORTHEAST\\_3"
  }, {
    heading: undefined,
    content: "`21`: EU\\_NORTH\\_1"
  }, {
    heading: undefined,
    content: "`22`: ME\\_SOUTH\\_1"
  }, {
    heading: undefined,
    content: "`24`: AP\\_SOUTHEAST\\_3"
  }, {
    heading: undefined,
    content: "`25`: EU\\_SOUTH\\_1"
  }, {
    heading: undefined,
    content: "`vendor`= 2"
  }, {
    heading: undefined,
    content: "**`region` values**:"
  }, {
    heading: undefined,
    content: "`0`: CN\\_Hangzhou"
  }, {
    heading: undefined,
    content: "`1`: CN\\_Shanghai"
  }, {
    heading: undefined,
    content: "`2`: CN\\_Qingdao"
  }, {
    heading: undefined,
    content: "`3`: CN\\_Beijing"
  }, {
    heading: undefined,
    content: "`4`: CN\\_Zhangjiakou"
  }, {
    heading: undefined,
    content: "`5`: CN\\_Huhehaote"
  }, {
    heading: undefined,
    content: "`6`: CN\\_Shenzhen"
  }, {
    heading: undefined,
    content: "`7`: CN\\_Hongkong"
  }, {
    heading: undefined,
    content: "`8`: US\\_West\\_1"
  }, {
    heading: undefined,
    content: "`9`: US\\_East\\_1"
  }, {
    heading: undefined,
    content: "`10`: AP\\_Southeast\\_1"
  }, {
    heading: undefined,
    content: "`11`: AP\\_Southeast\\_2"
  }, {
    heading: undefined,
    content: "`12`: AP\\_Southeast\\_3"
  }, {
    heading: undefined,
    content: "`13`: AP\\_Southeast\\_5"
  }, {
    heading: undefined,
    content: "`14`: AP\\_Northeast\\_1"
  }, {
    heading: undefined,
    content: "`15`: AP\\_South\\_1"
  }, {
    heading: undefined,
    content: "`16`: EU\\_Central\\_1"
  }, {
    heading: undefined,
    content: "`17`: EU\\_West\\_1"
  }, {
    heading: undefined,
    content: "`18`: EU\\_East\\_1"
  }, {
    heading: undefined,
    content: "`19`: AP\\_Southeast\\_6"
  }, {
    heading: undefined,
    content: "`20`: CN\\_Heyuan"
  }, {
    heading: undefined,
    content: "`21`: CN\\_Guangzhou"
  }, {
    heading: undefined,
    content: "`22`: CN\\_Chengdu"
  }, {
    heading: undefined,
    content: "`23`: CN\\_Nanjing"
  }, {
    heading: undefined,
    content: "`24`: CN\\_Fuzhou"
  }, {
    heading: undefined,
    content: "`25`: CN\\_Wulanchabu"
  }, {
    heading: undefined,
    content: "`26`: CN\\_Northeast\\_2"
  }, {
    heading: undefined,
    content: "`27`: CN\\_Southeast\\_7"
  }, {
    heading: undefined,
    content: "`vendor`= 3"
  }, {
    heading: undefined,
    content: "**`region` values**:"
  }, {
    heading: undefined,
    content: "`0`: AP\\_Beijing\\_1"
  }, {
    heading: undefined,
    content: "`1`: AP\\_Beijing"
  }, {
    heading: undefined,
    content: "`2`: AP\\_Shanghai"
  }, {
    heading: undefined,
    content: "`3`: AP\\_Guangzhou"
  }, {
    heading: undefined,
    content: "`4`: AP\\_Chengdu"
  }, {
    heading: undefined,
    content: "`5`: AP\\_Chongqing"
  }, {
    heading: undefined,
    content: "`6`: AP\\_Shenzhen\\_FSI"
  }, {
    heading: undefined,
    content: "`7`: AP\\_Shanghai\\_FSI"
  }, {
    heading: undefined,
    content: "`8`: AP\\_Beijing\\_FSI"
  }, {
    heading: undefined,
    content: "`9`: AP\\_Hongkong"
  }, {
    heading: undefined,
    content: "`10`: AP\\_Singapore"
  }, {
    heading: undefined,
    content: "`11`: AP\\_Mumbai"
  }, {
    heading: undefined,
    content: "`12`: AP\\_Seoul"
  }, {
    heading: undefined,
    content: "`13`: AP\\_Bangkok"
  }, {
    heading: undefined,
    content: "`14`: AP\\_Tokyo"
  }, {
    heading: undefined,
    content: "`15`: NA\\_Siliconvalley"
  }, {
    heading: undefined,
    content: "`16`: NA\\_Ashburn"
  }, {
    heading: undefined,
    content: "`17`: NA\\_Toronto"
  }, {
    heading: undefined,
    content: "`18`: EU\\_Frankfurt"
  }, {
    heading: undefined,
    content: "`19`: EU\\_Moscow"
  }, {
    heading: undefined,
    content: "`vendor`= 5"
  }, {
    heading: undefined,
    content: "`region` = 0"
  }, {
    heading: undefined,
    content: "`vendor`= 6"
  }, {
    heading: undefined,
    content: "`region` = 0"
  }, {
    heading: undefined,
    content: "`vendor`= 7"
  }, {
    heading: undefined,
    content: "**`region` values**:"
  }, {
    heading: undefined,
    content: "`0`: CN\\_North\\_1"
  }, {
    heading: undefined,
    content: "`1`: CN\\_North\\_4"
  }, {
    heading: undefined,
    content: "`2`: CN\\_East\\_2"
  }, {
    heading: undefined,
    content: "`3`: CN\\_East\\_3"
  }, {
    heading: undefined,
    content: "`4`: CN\\_South\\_1"
  }, {
    heading: undefined,
    content: "`5`: CN\\_Southwest\\_2"
  }, {
    heading: undefined,
    content: "`6`: AP\\_Southeast\\_1"
  }, {
    heading: undefined,
    content: "`7`: AP\\_Southeast\\_2"
  }, {
    heading: undefined,
    content: "`8`: AP\\_Southeast\\_3"
  }, {
    heading: undefined,
    content: "`9`: AF\\_South\\_1"
  }, {
    heading: undefined,
    content: "`10`: SA\\_Argentina\\_1"
  }, {
    heading: undefined,
    content: "`11`: SA\\_Peru\\_1"
  }, {
    heading: undefined,
    content: "`12`: NA\\_Mexico\\_1"
  }, {
    heading: undefined,
    content: "`13`: SA\\_Brazil\\_1"
  }, {
    heading: undefined,
    content: "`14`: LA\\_South\\_2"
  }, {
    heading: undefined,
    content: "`15`: SA\\_Chile\\_1"
  }, {
    heading: undefined,
    content: "`vendor`= 8"
  }, {
    heading: undefined,
    content: "**`region` values**:"
  }, {
    heading: undefined,
    content: "`1`: Baoding"
  }, {
    heading: undefined,
    content: "`2`: Suzhou"
  }, {
    heading: undefined,
    content: "`3`: Guangzhou"
  }, {
    heading: undefined,
    content: "`4`: Hongkong"
  }, {
    heading: undefined,
    content: "`5`: Singapore"
  }, {
    heading: undefined,
    content: "`6`: Wuhan"
  }, {
    heading: undefined,
    content: "`7`: Shanghai"
  }, {
    heading: undefined,
    content: "`vendor`= 11"
  }, {
    heading: undefined,
    content: "`region` = 0"
  }, {
    heading: undefined,
    content: "Specify the domain name of the self-built cloud storage in the `extensionParams.endpoint` field."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { Tabs, TabsContent, TabsList, TabsTrigger } = _components;
  if (!Tabs)
    _missingMdxReference("Tabs", true);
  if (!TabsContent)
    _missingMdxReference("TabsContent", true);
  if (!TabsList)
    _missingMdxReference("TabsList", true);
  if (!TabsTrigger)
    _missingMdxReference("TabsTrigger", true);
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["When using the custom recording and custom screenshot functions, you configure the third-party cloud storage for recording and screenshot files using ", _jsx(_components.code, {
        children: "StorageConfig"
      }), ". The ", _jsx(_components.code, {
        children: "vendor"
      }), " field sets the third-party cloud storage platform. The ", _jsx(_components.code, {
        children: "region"
      }), " field sets the third-party cloud storage region for the selected ", _jsx(_components.code, {
        children: "vendor"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["This page lists the ", _jsx(_components.code, {
        children: "region"
      }), " values you can use to configure storage for different vendors."]
    }), `
`, _jsxs(Tabs, {
      defaultValue: "amazon",
      groupId: "platform",
      persist: true,
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "amazon",
          children: "Amazon S3"
        }), _jsx(TabsTrigger, {
          value: "alibaba",
          children: "Alibaba Cloud"
        }), _jsx(TabsTrigger, {
          value: "tencent",
          children: "Tencent Cloud"
        }), _jsx(TabsTrigger, {
          value: "azure",
          children: "Microsoft Azure"
        }), _jsx(TabsTrigger, {
          value: "google",
          children: "Google Cloud"
        }), _jsx(TabsTrigger, {
          value: "huawei",
          children: "Huawei Cloud"
        }), _jsx(TabsTrigger, {
          value: "baidu",
          children: "Baidu Smart Cloud"
        }), _jsx(TabsTrigger, {
          value: "self",
          children: "S3 compatible storage"
        })]
      }), _jsx(TabsContent, {
        value: "amazon",
        children: _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "vendor"
            }), "= 1"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsxs(_components.strong, {
              children: [_jsx(_components.code, {
                children: "region"
              }), " values"]
            }), ":", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "0"
                }), ": US_EAST_1"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "1"
                }), ": US_EAST_2"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "2"
                }), ": US_WEST_1"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "3"
                }), ": US_WEST_2"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "4"
                }), ": EU_WEST_1"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "5"
                }), ": EU_WEST_2"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "6"
                }), ": EU_WEST_3"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "7"
                }), ": EU_CENTRAL_1"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "8"
                }), ": AP_SOUTHEAST_1"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "9"
                }), ": AP_SOUTHEAST_2"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "10"
                }), ": AP_NORTHEAST_1"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "11"
                }), ": AP_NORTHEAST_2"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "12"
                }), ": SA_EAST_1"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "13"
                }), ": CA_CENTRAL_1"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "14"
                }), ": AP_SOUTH_1"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "15"
                }), ": CN_NORTH_1"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "16"
                }), ": CN_NORTHWEST_1"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "18"
                }), ": AF_SOUTH_1"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "19"
                }), ": AP_EAST_1"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "20"
                }), ": AP_NORTHEAST_3"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "21"
                }), ": EU_NORTH_1"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "22"
                }), ": ME_SOUTH_1"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "24"
                }), ": AP_SOUTHEAST_3"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "25"
                }), ": EU_SOUTH_1"]
              }), `
`]
            }), `
`]
          }), `
`]
        })
      }), _jsx(TabsContent, {
        value: "alibaba",
        children: _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "vendor"
            }), "= 2"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsxs(_components.strong, {
              children: [_jsx(_components.code, {
                children: "region"
              }), " values"]
            }), ":", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "0"
                }), ": CN_Hangzhou"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "1"
                }), ": CN_Shanghai"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "2"
                }), ": CN_Qingdao"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "3"
                }), ": CN_Beijing"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "4"
                }), ": CN_Zhangjiakou"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "5"
                }), ": CN_Huhehaote"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "6"
                }), ": CN_Shenzhen"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "7"
                }), ": CN_Hongkong"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "8"
                }), ": US_West_1"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "9"
                }), ": US_East_1"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "10"
                }), ": AP_Southeast_1"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "11"
                }), ": AP_Southeast_2"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "12"
                }), ": AP_Southeast_3"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "13"
                }), ": AP_Southeast_5"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "14"
                }), ": AP_Northeast_1"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "15"
                }), ": AP_South_1"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "16"
                }), ": EU_Central_1"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "17"
                }), ": EU_West_1"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "18"
                }), ": EU_East_1"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "19"
                }), ": AP_Southeast_6"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "20"
                }), ": CN_Heyuan"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "21"
                }), ": CN_Guangzhou"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "22"
                }), ": CN_Chengdu"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "23"
                }), ": CN_Nanjing"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "24"
                }), ": CN_Fuzhou"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "25"
                }), ": CN_Wulanchabu"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "26"
                }), ": CN_Northeast_2"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "27"
                }), ": CN_Southeast_7"]
              }), `
`]
            }), `
`]
          }), `
`]
        })
      }), _jsx(TabsContent, {
        value: "tencent",
        children: _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "vendor"
            }), "= 3"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsxs(_components.strong, {
              children: [_jsx(_components.code, {
                children: "region"
              }), " values"]
            }), ":", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "0"
                }), ": AP_Beijing_1"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "1"
                }), ": AP_Beijing"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "2"
                }), ": AP_Shanghai"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "3"
                }), ": AP_Guangzhou"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "4"
                }), ": AP_Chengdu"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "5"
                }), ": AP_Chongqing"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "6"
                }), ": AP_Shenzhen_FSI"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "7"
                }), ": AP_Shanghai_FSI"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "8"
                }), ": AP_Beijing_FSI"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "9"
                }), ": AP_Hongkong"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "10"
                }), ": AP_Singapore"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "11"
                }), ": AP_Mumbai"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "12"
                }), ": AP_Seoul"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "13"
                }), ": AP_Bangkok"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "14"
                }), ": AP_Tokyo"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "15"
                }), ": NA_Siliconvalley"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "16"
                }), ": NA_Ashburn"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "17"
                }), ": NA_Toronto"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "18"
                }), ": EU_Frankfurt"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "19"
                }), ": EU_Moscow"]
              }), `
`]
            }), `
`]
          }), `
`]
        })
      }), _jsx(TabsContent, {
        value: "azure",
        children: _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "vendor"
            }), "= 5"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "region"
            }), " = 0"]
          }), `
`]
        })
      }), _jsx(TabsContent, {
        value: "google",
        children: _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "vendor"
            }), "= 6"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "region"
            }), " = 0"]
          }), `
`]
        })
      }), _jsx(TabsContent, {
        value: "huawei",
        children: _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "vendor"
            }), "= 7"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsxs(_components.strong, {
              children: [_jsx(_components.code, {
                children: "region"
              }), " values"]
            }), ":", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "0"
                }), ": CN_North_1"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "1"
                }), ": CN_North_4"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "2"
                }), ": CN_East_2"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "3"
                }), ": CN_East_3"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "4"
                }), ": CN_South_1"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "5"
                }), ": CN_Southwest_2"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "6"
                }), ": AP_Southeast_1"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "7"
                }), ": AP_Southeast_2"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "8"
                }), ": AP_Southeast_3"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "9"
                }), ": AF_South_1"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "10"
                }), ": SA_Argentina_1"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "11"
                }), ": SA_Peru_1"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "12"
                }), ": NA_Mexico_1"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "13"
                }), ": SA_Brazil_1"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "14"
                }), ": LA_South_2"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "15"
                }), ": SA_Chile_1"]
              }), `
`]
            }), `
`]
          }), `
`]
        })
      }), _jsx(TabsContent, {
        value: "baidu",
        children: _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "vendor"
            }), "= 8"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsxs(_components.strong, {
              children: [_jsx(_components.code, {
                children: "region"
              }), " values"]
            }), ":", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "1"
                }), ": Baoding"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "2"
                }), ": Suzhou"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "3"
                }), ": Guangzhou"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "4"
                }), ": Hongkong"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "5"
                }), ": Singapore"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "6"
                }), ": Wuhan"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "7"
                }), ": Shanghai"]
              }), `
`]
            }), `
`]
          }), `
`]
        })
      }), _jsxs(TabsContent, {
        value: "self",
        children: [_jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "vendor"
            }), "= 11"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "region"
            }), " = 0"]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["Specify the domain name of the self-built cloud storage in the ", _jsx(_components.code, {
            children: "extensionParams.endpoint"
          }), " field."]
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
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"storageConfig"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "secretKey"'
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
                  children: '"xxxxx"'
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
                  children: '  "accessKey"'
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
                  children: '"xxxxx"'
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
                  children: '  "bucket"'
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
                  children: '"s3-digit-test"'
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // highlight-start"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "vendor"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "11"
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
                  children: '  "region"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0"
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // highlight-end"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "fileNamePrefix"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": ["
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '    "agora"'
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
                  children: '    "meituan"'
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
                  children: '    "test"'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  ],"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "extensionParams"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "    // highlight-start"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "endpoint"'
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
                  children: '"xxxxx.xxxxx.com"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "    // highlight-end"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  }"
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
