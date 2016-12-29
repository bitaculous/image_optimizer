/**
 * Minify PNG and JPEG images.
 *
 * grunt-contrib-imagemin <https://github.com/gruntjs/grunt-contrib-imagemin>
 */

'use strict';

module.exports = {
  build: {
    options: {
      cache: false,
      pngquant: false,
      optimizationLevel: 3
    },

    files: [{
      expand: true,
      cwd: '<%= options.paths.source.images.base %>',
      src: '**/*.{jpeg,jpg,png,svg}',
      dest: '<%= options.paths.build.base %>'
    }]
  }
};