'use strict';

/**
 * The defaults.
 *
 * @return {object} The defaults
 */

let defaults = {
  paths: {
    source: {
      base: './source',

      images: {
        base: './source/images',

        samples: {
          base: './source/images/samples'
        }
      }
    },

    build: {
      base: './build'
    },

    tmp: {
      base: './.tmp',

      build: {
        base: './.tmp/build'
      }
    }
  },

  plugins: {
    // ...
  }
};

/**
 * Loads configuration files for Grunt.
 *
 * @param  {string} path The Path to the tasks folder
 * @return {object} All options
 */
let loadConfig = function(path) {
  let glob   = require('glob');
  let object = {};
  let key;

  glob.sync('*', {cwd: path}).forEach(function(option) {
    key         = option.replace(/\.js$/, '');
    object[key] = require(path + option);
  });

  return object;
};

/**
 * Exports the Grunt configuration.
 */
module.exports = function(grunt) {
  // Show elapsed time at the end
  require('time-grunt')(grunt);

  let config = {
    // Read npm package configuration
    pkg: grunt.file.readJSON('package.json'),

    options: defaults
  };

  grunt.util._.extend(config, loadConfig('./grunt/options/'));

  grunt.initConfig(config);

  // Load all npm tasks through `jit-grunt`
  require('jit-grunt')(grunt, {});

  // Set `make` task as the default task
  grunt.registerTask('default', 'Alias for `make` task', 'make');

  // Make task, invoked with `grunt make`
  grunt.registerTask('make', 'Make images load faster', function(/* target */) {
    grunt.task.run([
      // Cleanup via `grunt-contrib-clean`
      'clean:build',

      // Optimized images via `grunt-contrib-imagemin`
      'imagemin:build'
    ]);
  });

  // Alias for `make` task
  grunt.registerTask('build', 'Alias for `make` task', 'make');
};