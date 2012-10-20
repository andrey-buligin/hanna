/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    lint: {
      files: ['grunt.js', 'js/skins/hanna/*.js']
    },
    concat: {
      js_custom: {
        src: ['<banner:meta.banner>', 'js/plugins/jquery.easing.1.3.js',
              'js/plugins/innerFade.js', 'js/galleries/horizontal_slider/jquery.imagesloaded.js',
              'js/galleries/horizontal_slider/jquery.elastislide.js', 'js/galleries/horizontal_slider/slider.js', 
              'js/galleries/fancy_thumbnails/*.js', 'js/skins/hanna/*.js'],
        dest: 'js/<%= pkg.name %>_custom.js'
      },
      css: {
        src: ['<banner:meta.banner>', 'css/main.css', 'css/normalize.css', 'css/skins/hanna/*.css'],
        dest: 'css/<%= pkg.name %>.css'
      },
      minified: {
        src: ['js/jquery-1.8.2.min.js', 'js/galleries/horizontal_slider/jquery.tmpl.min.js','js/galleries/horizontal_slider/jquery.touchwipe.min.js', '<config:min.js_custom.dest>'], 
        dest: 'js/<%= pkg.name %>.min.js'
      }
    },
    min: {
      js_custom: {
        src: ['<banner:meta.banner>', '<config:concat.js_custom.dest>'],
        dest: 'js/<%= pkg.name %>_custom.min.js'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true
      }
    },
    uglify: {}
  });

  // Default task.
  grunt.registerTask('default', 'concat:js_custom concat:css min concat:minified');

};
