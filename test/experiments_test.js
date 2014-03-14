'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.experiments = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  default_options: function (test) {
    test.expect(1);
    var actual, expected;

    /*
    actual = grunt.file.read('tmp/sample_app_file.js');
    expected = grunt.file.read('test/expected/sample_app_file.js');
    test.equal(actual, expected, 'should preserve required files');

    // check experiment 1
    actual = grunt.file.read('tmp/js/components/experiment.js');
    expected = grunt.file.read('test/expected/experiment.js');
    test.equal(actual, expected, 'should copy file over');

   */
    // check experiment 2
    actual = grunt.file.read('tmp/js/experiment2.js');
    expected = grunt.file.read('test/expected/experiment2.js');
    test.equal(actual, expected, 'should copy file over');

    test.done();
  },
  // custom_options: function (test) {
  //   test.expect(1);

  //   var actual = grunt.file.read('tmp/custom_options');
  //   var expected = grunt.file.read('test/expected/custom_options');
  //   test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

  //   test.done();
  // }
};
