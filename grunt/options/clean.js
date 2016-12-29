/**
 * Clear files and folders.
 *
 * grunt-contrib-clean <https://github.com/gruntjs/grunt-contrib-clean>
 */

'use strict';

module.exports = {
  build: {
    src: [
      '<%= options.paths.tmp.base %>',
      '<%= options.paths.build.base %>'
    ],
    options: {
      force: true
    }
  }
};