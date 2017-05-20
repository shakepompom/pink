"use strict";

module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt);

  grunt.initConfig({

    // в папку build

    // less: {
    //   style: {
    //     files: {
    //       "build/css/style.css": "less/style.less"
    //     }
    //   }
    // },
    //
    // postcss: {
    //   style: {
    //     options: {
    //       processors: [
    //         require("autoprefixer")({browsers: [
    //           "last 1 versions",
    //           "last 2 Chrome versions",
    //           "last 2 Firefox versions",
    //           "last 2 Opera versions",
    //           "last 2 Edge versions",
    //         ]}),
    //       ]
    //     },
    //     src: "build/css/*.css"
    //   }
    // },
    //
    // csso: {
    //   style: {
    //     options: {
    //       report: "gzip"
    //     },
    //     files: {
    //       "build/css/style.min.css": ["build/css/style.css"]
    //     }
    //   }
    // },
    //
    // imagemin: {
    //   images: {
    //     options: {
    //       optimizationLevel: 3
    //     },
    //     files: [{
    //       expand: true,
    //       src: ["build/images/**/*.{png,jpg,gif}"]
    //     }]
    //   }
    // },
    //
    // svgmin: {
    //   symbols: {
    //     files: [{
    //       expand: true,
    //       src: ["build/images/icons/*.svg"]
    //     }]
    //   }
    // },
    //
    // browserSync: {
    //   server: {
    //     bsFiles: {
    //       src: [
    //         "build/*.html",
    //         "build/css/*.css"
    //       ]
    //     },
    //     options: {
    //       server: "build",
    //       watchTask: true,
    //       notify: false,
    //       open: true,
    //       cors: true,
    //       ui: false
    //     }
    //   }
    // },
    //
    // watch: {
    //   html: {
    //     files: ["*.html"],
    //     tasks: ["copy:html"]
    //   },
    //   style: {
    //     files: ["less/**/*.less"],
    //     tasks: ["less", "postcss", "csso"]
    //   }
    // },
    //
    // copy: {
    //   build: {
    //     files: [{
    //       expand: true,
    //       src: [
    //         "fonts/**/*.{woff,woff2}",
    //         "images/**/*.{png,jpg,gif,svg}",
    //         "js/**/*.js",
    //         "*.html"
    //       ],
    //       dest: "build"
    //     }]
    //   },
    //   html: {
    //     files: [{
    //       expand: true,
    //       src: ["*.html"],
    //       dest: "build"
    //     }]
    //   }
    // },
    //
    // clean: {
    //   build: ["build"]
    // }


    // для тестов

    less: {
      style: {
        files: {
          "css/style.css": "less/style.less"
        }
      }
    },

    postcss: {
      style: {
        options: {
          processors: [
            require("autoprefixer")({browsers: [
              "last 1 versions",
              "last 2 Chrome versions",
              "last 2 Firefox versions",
              "last 2 Opera versions",
              "last 2 Edge versions",
            ]}),
          ]
        },
        src: "css/*.css"
      }
    },

    csso: {
      style: {
        options: {
          report: "gzip"
        },
        files: {
          "css/style.min.css": ["css/style.css"]
        }
      }
    },

    svgstore: {
      symbols: {
        options: {
          svg: {
            style: "display: none",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg"
          }
        },
        files: {
          "images/symbols.svg": ["images/icons/*.svg"]
        }
      }
    },

    browserSync: {
      server: {
        bsFiles: {
          src: [
            "*.html",
            "css/*.css"
          ]
        },
        options: {
          server: ".",
          watchTask: true,
          notify: false,
          open: true,
          cors: true,
          ui: false
        }
      }
    },

    watch: {
      style: {
        files: ["less/**/*.less"],
        tasks: ["less", "postcss", "csso"]
      }
    },
  });

  grunt.registerTask("serve", ["browserSync", "watch"]);
  grunt.registerTask("build", [
    // для билда
    // "clean",
    // "copy",
    // "less",
    // "postcss",
    // "csso",
    // "imagemin"

    //для тестов
    "less",
    "postcss",
    // "csso",
  ])
};
