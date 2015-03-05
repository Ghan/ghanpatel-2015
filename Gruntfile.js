module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    bowerDir: 'bower_components',
    tmpDir: 'tmp',
    concat: {
      options: {
        separator: ';'
      },
      vendor: {
        files: {
          '<%= tmpDir %>/js/vendor.js': [
            '<%= bowerDir %>/react/JSXTransformer.js',
            '<%= bowerDir %>/react/react-with-addons.min.js',
            '<%= bowerDir %>/jquery/dist/jquery.js',
            '<%= bowerDir %>/showdown/src/showdown.js',
            '<%= bowerDir %>/vivus/dist/vivus.js'
          ]
        }
      },
      dist: {
        files: {
          '<%= tmpDir %>/js/script.js': [
            'js/*.js',
            'js/**/*.js',
          ]
        }
      }
    },
    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
    //   },
    //   dist: {
    //     files: {
    //       'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
    //     }
    //   }
    // },
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "<%= tmpDir %>/css/main.css": "style/less/main.less" // destination file and source file
        }
      }
    },
    watch: {
      styles: {
        files: [
          'style/less/**/*.less',
          'js/*.js',
          'js/**/*.js'], // which files to watch
        tasks: ['concat', 'less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // TO DO: Implement test framework and uglify for production distribution
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-qunit');
  // grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('default', ['concat', 'less', 'watch']);
};