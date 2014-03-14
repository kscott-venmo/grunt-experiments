/*
 * grunt-experiments
 * none
 *
 * Copyright (c) 2014 Kevin Scott
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('experiments', 'Keeps experimental prototype files out of the minified bundle.', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

    // var path = require('path');

    //console.log(path.relative('/Users/kevinscott/code/shabu/public/js/lib/react/JSXTransformer','.'));
    // this is totes ugly,sorry 
    var shabuRoot = '/Users/kevinscott/code/shabu';
    var JSXTransformer = require(shabuRoot+'/public/js/lib/react/JSXTransformer');

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      grunt.log.writeln('Working on file: ',file);
      // Concat specified files.
      var src = file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.normalizelf(options.separator));


      var re = /require\(\[\'(.*?)\']/gm;
      var match;
      while (match = re.exec(src)) {
        if ( match[1] ) {
          var fileContents, destPath, srcPath;
          srcPath = options.baseUrl + match[1] + '.js';

          fileContents = grunt.file.read(srcPath);
          destPath = 'tmp/'+srcPath;
          
          // do the react conversion. no minification methinks.
          
          fileContents = JSXTransformer.transform(fileContents);
          
          grunt.file.write(destPath, fileContents.code);
        }
      }     


      // Write the destination file.
      grunt.file.write(file.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

};
