module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss', 'f11p_components/foundation/scss', 'f11p_components/flipeleven/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss',
        }        
      }
    },

    uglify: {
      js: {
        files: { 
          'js/main.js': [
          'bower_components/jquery/jquery.min.js',
          // 'bower_components/foundation/js/foundation.min.js',
          'bower_components/foundation/js/foundation/foundation.js',
          'bower_components/foundation/js/foundation/foundation.orbit.js',
          'bower_components/foundation/js/foundation/foundation.topbar.js',
          'bower_components/foundation/js/foundation/foundation.reveal.js',
          'js/app.js'
          //'bin/public/js/IMPORTANT/**/*.js',
          //'bin/public/js/something.js',
          //'bin/public/js/else.js',
          //'bin/public/js/unimportant/*.js',
          // you can even exclude stuff
          //'bin/public/js/do-not-minify/**/*.js'
          ],
          'js/modernizr.js': [
          'bower_components/modernizr/modernizr.js'
          //'bin/public/js/IMPORTANT/**/*.js',
          //'bin/public/js/something.js',
          //'bin/public/js/else.js',
          //'bin/public/js/unimportant/*.js',

          // you can even exclude stuff
          //'bin/public/js/do-not-minify/**/*.js'
          ]
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: ['scss/**/*.scss', 'bower_components/foundation/scss/**', 'f11p_components/foundation/scss/**', 'f11p_components/f11p/scss/**'],
        tasks: ['sass']
      },
      scripts: {
        files: [
                'bower_components/jquery/jquery.min.js',
                // 'bower_components/foundation/js/foundation.min.js',
                'bower_components/foundation/js/foundation/foundation.js',
                'bower_components/foundation/js/foundation/foundation.orbit.js',
                'bower_components/foundation/js/foundation/foundation.topbar.js',
                'bower_components/foundation/js/foundation/foundation.reveal.js',
                'js/app.js'
                ],
        tasks: ['uglify']
      },
//       scripts: {
//         files: ['js/**/*.js'],
//         tasks: ['uglify']
//       }

    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build', 'watch']);
  grunt.registerTask('build', ['uglify:js']);
}