import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Profile performance",
  description: "Profile CPU usage and memory consumption in TEN applications using gperftools for C++ and pprof for Go projects."
};
export let _markdown = `

Performance profiling helps identify bottlenecks and optimize resource usage in TEN applications. This guide covers how to profile CPU usage and memory consumption in TEN projects using profiling tools and analyze the resulting performance data.

## Go projects [#go-projects]

TEN supports profiling for Go projects using the following tools:

* \`gperftools\`: Google Performance Tools for detailed CPU and heap memory profiling
* \`pprof\`: Go's built-in profiler for CPU and memory analysis

These tools provide detailed performance insights through data collection, analysis, and visualization options to help you optimize your TEN Go applications effectively.

### Install gperftools [#install-gperftools]

Set up \`gperftools\` and create the required library links on Ubuntu:

\`\`\`bash
apt update && apt install -y google-perftools

ln -s /usr/lib/x86_64-linux-gnu/libtcmalloc.so.4 /usr/lib/libtcmalloc.so

ln -s /usr/lib/x86_64-linux-gnu/libprofiler.so.0 /usr/lib/libprofiler.so
\`\`\`

The symbolic links ensure that the profiling libraries are accessible in standard locations for your applications.

### Profile CPU usage with gperftools [#profile-cpu-usage-with-gperftools]

To profile your program's CPU usage, follow these steps:

1. **Set up environment variables and run your program:**

   \`\`\`bash
   export LD_PRELOAD=/usr/lib/libtcmalloc.so
   export CPUPROFILE=/path/to/cpu

   exec /path/to/program
   \`\`\`

   When the program exits, CPU performance data is generated and saved to the \`/path/to/cpu.0001.prof\` file.

2. **Generate CPU performance data periodically (optional):**

   To generate CPU profiling data at regular intervals, set the \`CPUPROFILE_FREQUENCY\` environment variable. For example, to collect data every 30 seconds:

   \`\`\`bash
   LD_PRELOAD=/usr/lib/libtcmalloc.so CPUPROFILE=/path/to/cpu CPUPROFILE_FREQUENCY=30 exec /path/to/program
   \`\`\`

#### Analyze CPU performance data [#analyze-cpu-performance-data]

To analyze CPU performance data, run the following commands:

\`\`\`bash
google-pprof --text /.../program /.../cpu.0001.prof > /.../cpu.0001.prof.txt

google-pprof --text --base=/.../cpu.0001.prof /.../program /.../cpu.0002.prof > /.../diff.txt
\`\`\`

### Profile heap memory usage with gperftools [#profile-heap-memory-usage-with-gperftools]

To profile your program's heap memory usage, run the following commands:

\`\`\`bash
export LD_PRELOAD=/usr/lib/libtcmalloc.so
export HEAPPROFILE=/.../heap
export HEAP_PROFILE_TIME_INTERVAL=30

exec /.../program
\`\`\`

Set the \`HEAP_PROFILE_TIME_INTERVAL\` environment variable to periodically generate heap memory profiling data. All data is stored in the directory specified by \`HEAPPROFILE\`.

#### Analyze heap memory performance data [#analyze-heap-memory-performance-data]

Each generated heap memory performance data file has a \`.heap\` extension. To analyze the data, convert the \`.heap\` files to a human-readable text format. For example, to convert a \`.heap\` file in \`/.../heap\` to text format, run the following command:

\`\`\`bash
google-pprof --text /.../program /.../heap.0001.heap > /.../heap.0001.heap.txt
\`\`\`

The performance data looks like this:

\`\`\`text
Total: 19.7 MB
16.0  81.3%  81.3%     16.0  81.3% lws_zalloc
2.9  14.6%  95.9%      3.3   16.7% setAgoraStreamChannelParameters
...
\`\`\`

You can also convert the \`.heap\` file to other formats such as PDF or SVG. For example, to convert a \`.heap\` file in \`/.../heap\` to PDF format, run the following command:

\`\`\`bash
google-pprof --pdf /.../program /.../heap.0001.heap > /.../heap.0001.heap.pdf
\`\`\`

The PDF output contains the same performance data as the text format but presented graphically.

You can also compare two sets of heap memory performance data. For example, to compare the data in \`/.../heap.0001.heap\` and \`/.../heap.0002.heap\`, run the following command:

\`\`\`bash
google-pprof --pdf --base=/.../heap.0001.heap /.../program /.../heap.0002.heap > /.../diff.pdf
\`\`\`

The PDF shows the differences in heap memory usage between the two data sets.

If you generate heap memory performance data periodically, use the \`dump_heap_info_to_excel.py\` script to analyze all heap memory performance data in a directory and generate an Excel file showing the memory usage trends. For example, to analyze all heap memory performance data in \`/.../heap\`, run the following command:

\`\`\`bash
python3 tools/profiler/gperftools/dump_heap_info_to_excel.py -heap_dir=/.../heap -bin=/.../program -output=/.../heap.xlsx -sample_interval=30
\`\`\`

The script generates raw performance data with symbols in the \`/.../raw\` directory, human-readable text performance data in the \`/.../text\` directory, and an Excel file in \`/.../heap.xlsx\`.

To plot a line chart to display the heap memory usage trends, use:

\`\`\`bash
python3 tools/profiler/gperftools/draw_line_chart.py -excel_file=/.../heap.xlsx -output_file=/.../heap_line_chart.png -title=HEAP_MEM -x=time/s -y=total_heap_size/MB
\`\`\`

### Profile with pprof [#profile-with-pprof]

Use \`pprof\` to profile programs written in Go. The simplest way to profile a Go program is to use \`pprof_app_go\` as your TEN application. When activated, the app reads environment variables to decide whether to activate the \`pprof\` server and heap profiler.

\`\`\`bash
export TEN_HEAP_DUMP_DIR=/data/prof
export HEAP_PROFILE_TIME_INTERVAL=30
export TEN_PROFILER_SERVER_PORT=6060
\`\`\`

### Analyze pprof performance data [#analyze-pprof-performance-data]

To convert heap performance data to a text format, use the following command:

\`\`\`bash
python3 tools/profiler/pprof/dump_heap_files_to_text.py -heap_dir=/data/prof -text_dir=/data/text
\`\`\`

To analyze all heap performance data and generate an Excel file, run:

\`\`\`bash
python3 tools/profiler/pprof/dump_heap_info_to_excel.py -heap_dir=/data/prof -output=/data/heap.xlsx
\`\`\`

To see a visual representation of Go heap performance data trends, plot a line chart:

\`\`\`bash
python3 tools/profiler/gperftools/draw_line_chart.py -excel_file=/data/heap.xlsx -output_file=/data/heap_line_chart.png -title=HEAP_MEM -x=time/s -y=total_heap_size/MB
\`\`\`
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Performance profiling helps identify bottlenecks and optimize resource usage in TEN applications. This guide covers how to profile CPU usage and memory consumption in TEN projects using profiling tools and analyze the resulting performance data."
  }, {
    heading: "go-projects",
    content: "TEN supports profiling for Go projects using the following tools:"
  }, {
    heading: "go-projects",
    content: "`gperftools`: Google Performance Tools for detailed CPU and heap memory profiling"
  }, {
    heading: "go-projects",
    content: "`pprof`: Go's built-in profiler for CPU and memory analysis"
  }, {
    heading: "go-projects",
    content: "These tools provide detailed performance insights through data collection, analysis, and visualization options to help you optimize your TEN Go applications effectively."
  }, {
    heading: "install-gperftools",
    content: "Set up `gperftools` and create the required library links on Ubuntu:"
  }, {
    heading: "install-gperftools",
    content: "The symbolic links ensure that the profiling libraries are accessible in standard locations for your applications."
  }, {
    heading: "profile-cpu-usage-with-gperftools",
    content: "To profile your program's CPU usage, follow these steps:"
  }, {
    heading: "profile-cpu-usage-with-gperftools",
    content: "**Set up environment variables and run your program:**"
  }, {
    heading: "profile-cpu-usage-with-gperftools",
    content: "When the program exits, CPU performance data is generated and saved to the `/path/to/cpu.0001.prof` file."
  }, {
    heading: "profile-cpu-usage-with-gperftools",
    content: "**Generate CPU performance data periodically (optional):**"
  }, {
    heading: "profile-cpu-usage-with-gperftools",
    content: "To generate CPU profiling data at regular intervals, set the `CPUPROFILE_FREQUENCY` environment variable. For example, to collect data every 30 seconds:"
  }, {
    heading: "analyze-cpu-performance-data",
    content: "To analyze CPU performance data, run the following commands:"
  }, {
    heading: "profile-heap-memory-usage-with-gperftools",
    content: "To profile your program's heap memory usage, run the following commands:"
  }, {
    heading: "profile-heap-memory-usage-with-gperftools",
    content: "Set the `HEAP_PROFILE_TIME_INTERVAL` environment variable to periodically generate heap memory profiling data. All data is stored in the directory specified by `HEAPPROFILE`."
  }, {
    heading: "analyze-heap-memory-performance-data",
    content: "Each generated heap memory performance data file has a `.heap` extension. To analyze the data, convert the `.heap` files to a human-readable text format. For example, to convert a `.heap` file in `/.../heap` to text format, run the following command:"
  }, {
    heading: "analyze-heap-memory-performance-data",
    content: "The performance data looks like this:"
  }, {
    heading: "analyze-heap-memory-performance-data",
    content: "You can also convert the `.heap` file to other formats such as PDF or SVG. For example, to convert a `.heap` file in `/.../heap` to PDF format, run the following command:"
  }, {
    heading: "analyze-heap-memory-performance-data",
    content: "The PDF output contains the same performance data as the text format but presented graphically."
  }, {
    heading: "analyze-heap-memory-performance-data",
    content: "You can also compare two sets of heap memory performance data. For example, to compare the data in `/.../heap.0001.heap` and `/.../heap.0002.heap`, run the following command:"
  }, {
    heading: "analyze-heap-memory-performance-data",
    content: "The PDF shows the differences in heap memory usage between the two data sets."
  }, {
    heading: "analyze-heap-memory-performance-data",
    content: "If you generate heap memory performance data periodically, use the `dump_heap_info_to_excel.py` script to analyze all heap memory performance data in a directory and generate an Excel file showing the memory usage trends. For example, to analyze all heap memory performance data in `/.../heap`, run the following command:"
  }, {
    heading: "analyze-heap-memory-performance-data",
    content: "The script generates raw performance data with symbols in the `/.../raw` directory, human-readable text performance data in the `/.../text` directory, and an Excel file in `/.../heap.xlsx`."
  }, {
    heading: "analyze-heap-memory-performance-data",
    content: "To plot a line chart to display the heap memory usage trends, use:"
  }, {
    heading: "profile-with-pprof",
    content: "Use `pprof` to profile programs written in Go. The simplest way to profile a Go program is to use `pprof_app_go` as your TEN application. When activated, the app reads environment variables to decide whether to activate the `pprof` server and heap profiler."
  }, {
    heading: "analyze-pprof-performance-data",
    content: "To convert heap performance data to a text format, use the following command:"
  }, {
    heading: "analyze-pprof-performance-data",
    content: "To analyze all heap performance data and generate an Excel file, run:"
  }, {
    heading: "analyze-pprof-performance-data",
    content: "To see a visual representation of Go heap performance data trends, plot a line chart:"
  }],
  headings: [{
    id: "go-projects",
    content: "Go projects"
  }, {
    id: "install-gperftools",
    content: "Install gperftools"
  }, {
    id: "profile-cpu-usage-with-gperftools",
    content: "Profile CPU usage with gperftools"
  }, {
    id: "analyze-cpu-performance-data",
    content: "Analyze CPU performance data"
  }, {
    id: "profile-heap-memory-usage-with-gperftools",
    content: "Profile heap memory usage with gperftools"
  }, {
    id: "analyze-heap-memory-performance-data",
    content: "Analyze heap memory performance data"
  }, {
    id: "profile-with-pprof",
    content: "Profile with pprof"
  }, {
    id: "analyze-pprof-performance-data",
    content: "Analyze pprof performance data"
  }]
};
export let toc = [{
  depth: 2,
  url: "#go-projects",
  title: _jsx(_Fragment, {
    children: "Go projects"
  })
}, {
  depth: 3,
  url: "#install-gperftools",
  title: _jsx(_Fragment, {
    children: "Install gperftools"
  })
}, {
  depth: 3,
  url: "#profile-cpu-usage-with-gperftools",
  title: _jsx(_Fragment, {
    children: "Profile CPU usage with gperftools"
  })
}, {
  depth: 4,
  url: "#analyze-cpu-performance-data",
  title: _jsx(_Fragment, {
    children: "Analyze CPU performance data"
  })
}, {
  depth: 3,
  url: "#profile-heap-memory-usage-with-gperftools",
  title: _jsx(_Fragment, {
    children: "Profile heap memory usage with gperftools"
  })
}, {
  depth: 4,
  url: "#analyze-heap-memory-performance-data",
  title: _jsx(_Fragment, {
    children: "Analyze heap memory performance data"
  })
}, {
  depth: 3,
  url: "#profile-with-pprof",
  title: _jsx(_Fragment, {
    children: "Profile with pprof"
  })
}, {
  depth: 3,
  url: "#analyze-pprof-performance-data",
  title: _jsx(_Fragment, {
    children: "Analyze pprof performance data"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Performance profiling helps identify bottlenecks and optimize resource usage in TEN applications. This guide covers how to profile CPU usage and memory consumption in TEN projects using profiling tools and analyze the resulting performance data."
    }), `
`, _jsx(_components.h2, {
      id: "go-projects",
      children: "Go projects"
    }), `
`, _jsx(_components.p, {
      children: "TEN supports profiling for Go projects using the following tools:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "gperftools"
        }), ": Google Performance Tools for detailed CPU and heap memory profiling"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "pprof"
        }), ": Go's built-in profiler for CPU and memory analysis"]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "These tools provide detailed performance insights through data collection, analysis, and visualization options to help you optimize your TEN Go applications effectively."
    }), `
`, _jsx(_components.h3, {
      id: "install-gperftools",
      children: "Install gperftools"
    }), `
`, _jsxs(_components.p, {
      children: ["Set up ", _jsx(_components.code, {
        children: "gperftools"
      }), " and create the required library links on Ubuntu:"]
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
              children: "apt"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " update"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " && "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "apt"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " install"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -y"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " google-perftools"
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
              children: "ln"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -s"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /usr/lib/x86_64-linux-gnu/libtcmalloc.so.4"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /usr/lib/libtcmalloc.so"
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
              children: "ln"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -s"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /usr/lib/x86_64-linux-gnu/libprofiler.so.0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /usr/lib/libprofiler.so"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "The symbolic links ensure that the profiling libraries are accessible in standard locations for your applications."
    }), `
`, _jsx(_components.h3, {
      id: "profile-cpu-usage-with-gperftools",
      children: "Profile CPU usage with gperftools"
    }), `
`, _jsx(_components.p, {
      children: "To profile your program's CPU usage, follow these steps:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Set up environment variables and run your program:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
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
                  children: " LD_PRELOAD"
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
                  children: "/usr/lib/libtcmalloc.so"
                })]
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
                  children: " CPUPROFILE"
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
                  children: "/path/to/cpu"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "exec"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " /path/to/program"
                })]
              })]
            })
          })
        }), `
`, _jsxs(_components.p, {
          children: ["When the program exits, CPU performance data is generated and saved to the ", _jsx(_components.code, {
            children: "/path/to/cpu.0001.prof"
          }), " file."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Generate CPU performance data periodically (optional):"
          })
        }), `
`, _jsxs(_components.p, {
          children: ["To generate CPU profiling data at regular intervals, set the ", _jsx(_components.code, {
            children: "CPUPROFILE_FREQUENCY"
          }), " environment variable. For example, to collect data every 30 seconds:"]
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "LD_PRELOAD"
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
                  children: "/usr/lib/libtcmalloc.so"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " CPUPROFILE"
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
                  children: "/path/to/cpu"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " CPUPROFILE_FREQUENCY"
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
                  children: "30"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " exec"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " /path/to/program"
                })]
              })
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "analyze-cpu-performance-data",
      children: "Analyze CPU performance data"
    }), `
`, _jsx(_components.p, {
      children: "To analyze CPU performance data, run the following commands:"
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
              children: "google-pprof"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --text"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /.../program"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /.../cpu.0001.prof"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " >"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /.../cpu.0001.prof.txt"
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
              children: "google-pprof"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --text"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --base=/.../cpu.0001.prof"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /.../program"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /.../cpu.0002.prof"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " >"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /.../diff.txt"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "profile-heap-memory-usage-with-gperftools",
      children: "Profile heap memory usage with gperftools"
    }), `
`, _jsx(_components.p, {
      children: "To profile your program's heap memory usage, run the following commands:"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " LD_PRELOAD"
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
              children: "/usr/lib/libtcmalloc.so"
            })]
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
              children: " HEAPPROFILE"
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
              children: "/.../heap"
            })]
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
              children: " HEAP_PROFILE_TIME_INTERVAL"
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
              children: "30"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "exec"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /.../program"
            })]
          })]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Set the ", _jsx(_components.code, {
        children: "HEAP_PROFILE_TIME_INTERVAL"
      }), " environment variable to periodically generate heap memory profiling data. All data is stored in the directory specified by ", _jsx(_components.code, {
        children: "HEAPPROFILE"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "analyze-heap-memory-performance-data",
      children: "Analyze heap memory performance data"
    }), `
`, _jsxs(_components.p, {
      children: ["Each generated heap memory performance data file has a ", _jsx(_components.code, {
        children: ".heap"
      }), " extension. To analyze the data, convert the ", _jsx(_components.code, {
        children: ".heap"
      }), " files to a human-readable text format. For example, to convert a ", _jsx(_components.code, {
        children: ".heap"
      }), " file in ", _jsx(_components.code, {
        children: "/.../heap"
      }), " to text format, run the following command:"]
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
              children: "google-pprof"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --text"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /.../program"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /.../heap.0001.heap"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " >"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /.../heap.0001.heap.txt"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "The performance data looks like this:"
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
              children: "Total:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 19.7"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " MB"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "16.0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  81.3%"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  81.3%"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "     16.0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  81.3%"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " lws_zalloc"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "2.9"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  14.6%"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  95.9%"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "      3.3"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "   16.7%"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " setAgoraStreamChannelParameters"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "..."
            })
          })]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["You can also convert the ", _jsx(_components.code, {
        children: ".heap"
      }), " file to other formats such as PDF or SVG. For example, to convert a ", _jsx(_components.code, {
        children: ".heap"
      }), " file in ", _jsx(_components.code, {
        children: "/.../heap"
      }), " to PDF format, run the following command:"]
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
              children: "google-pprof"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --pdf"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /.../program"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /.../heap.0001.heap"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " >"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /.../heap.0001.heap.pdf"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "The PDF output contains the same performance data as the text format but presented graphically."
    }), `
`, _jsxs(_components.p, {
      children: ["You can also compare two sets of heap memory performance data. For example, to compare the data in ", _jsx(_components.code, {
        children: "/.../heap.0001.heap"
      }), " and ", _jsx(_components.code, {
        children: "/.../heap.0002.heap"
      }), ", run the following command:"]
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
              children: "google-pprof"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --pdf"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --base=/.../heap.0001.heap"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /.../program"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /.../heap.0002.heap"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " >"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /.../diff.pdf"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "The PDF shows the differences in heap memory usage between the two data sets."
    }), `
`, _jsxs(_components.p, {
      children: ["If you generate heap memory performance data periodically, use the ", _jsx(_components.code, {
        children: "dump_heap_info_to_excel.py"
      }), " script to analyze all heap memory performance data in a directory and generate an Excel file showing the memory usage trends. For example, to analyze all heap memory performance data in ", _jsx(_components.code, {
        children: "/.../heap"
      }), ", run the following command:"]
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
              children: "python3"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " tools/profiler/gperftools/dump_heap_info_to_excel.py"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -heap_dir=/.../heap"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -bin=/.../program"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -output=/.../heap.xlsx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -sample_interval=30"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["The script generates raw performance data with symbols in the ", _jsx(_components.code, {
        children: "/.../raw"
      }), " directory, human-readable text performance data in the ", _jsx(_components.code, {
        children: "/.../text"
      }), " directory, and an Excel file in ", _jsx(_components.code, {
        children: "/.../heap.xlsx"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "To plot a line chart to display the heap memory usage trends, use:"
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
              children: "python3"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " tools/profiler/gperftools/draw_line_chart.py"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -excel_file=/.../heap.xlsx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -output_file=/.../heap_line_chart.png"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -title=HEAP_MEM"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -x=time/s"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -y=total_heap_size/MB"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "profile-with-pprof",
      children: "Profile with pprof"
    }), `
`, _jsxs(_components.p, {
      children: ["Use ", _jsx(_components.code, {
        children: "pprof"
      }), " to profile programs written in Go. The simplest way to profile a Go program is to use ", _jsx(_components.code, {
        children: "pprof_app_go"
      }), " as your TEN application. When activated, the app reads environment variables to decide whether to activate the ", _jsx(_components.code, {
        children: "pprof"
      }), " server and heap profiler."]
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " TEN_HEAP_DUMP_DIR"
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
              children: "/data/prof"
            })]
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
              children: " HEAP_PROFILE_TIME_INTERVAL"
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
              children: "30"
            })]
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
              children: " TEN_PROFILER_SERVER_PORT"
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
              children: "6060"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "analyze-pprof-performance-data",
      children: "Analyze pprof performance data"
    }), `
`, _jsx(_components.p, {
      children: "To convert heap performance data to a text format, use the following command:"
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
              children: "python3"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " tools/profiler/pprof/dump_heap_files_to_text.py"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -heap_dir=/data/prof"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -text_dir=/data/text"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "To analyze all heap performance data and generate an Excel file, run:"
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
              children: "python3"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " tools/profiler/pprof/dump_heap_info_to_excel.py"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -heap_dir=/data/prof"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -output=/data/heap.xlsx"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "To see a visual representation of Go heap performance data trends, plot a line chart:"
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
              children: "python3"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " tools/profiler/gperftools/draw_line_chart.py"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -excel_file=/data/heap.xlsx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -output_file=/data/heap_line_chart.png"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -title=HEAP_MEM"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -x=time/s"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -y=total_heap_size/MB"
            })]
          })
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
