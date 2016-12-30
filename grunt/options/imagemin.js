/**
 * Minify PNG and JPEG images.
 *
 * grunt-contrib-imagemin <https://github.com/gruntjs/grunt-contrib-imagemin>
 */

'use strict';

module.exports = {
  build: {
    options: {
      // Optimization level between `0` and `7`, defaults is `3`
      optimizationLevel: 5,

      // Lossless conversion to progressive, defaults to `true`
      progressive: true
    },

    files: [{
      expand: true,
      cwd: '<%= options.paths.source.images.base %>',
      src: '**/*.{jpeg,jpg,png,svg}',
      dest: '<%= options.paths.build.images.base %>'
    }]
  }
};