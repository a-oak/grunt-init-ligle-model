"use strict";

var path = require("path");
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};


// Basic template description.
exports.description = "Create a project that has Node package and " +
  " jshint, jscs, mocha+chai tests, jsdoc, watch, blanket.";

// Template-specific notes to be displayed before question prompts.
exports.notes = "_Project name_ shouldn't contain \"node\" or \"js\" and should " +
  "be a unique ID not already in use at npm.hijack.moe.";

// Template-specific notes to be displayed after question prompts.
exports.after = 
  "You may execute project tasks with _grunt_. For " +
  "more information about installing and configuring Grunt, please see " +
  "the Getting Started guide:" +
  "\n\n" +
  "http://gruntjs.com/getting-started";

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = "*";

// The actual init template.
exports.template = function(grunt, init, done) {
  /*jshint camelcase:false, laxbreak:true, quotmark:false*/
  
  var yesRegExp = /^\s*y[es\s]*/i,
      spaceRegExp = /\s+/,
      trimRegExp = /^\s+|\s+$/g;

  // Sanitize function for Yes/No values
  function convertYesNo(value, data, done) {
    done( false, value !== 'y/N' && yesRegExp.test(value) );
  }
  
  // Return object describing prompt with specified options
  function getPrompt(options) {
    var prompt = init.prompt(options.name),
        sName;
    for (sName in options) {
      if (! (sName in prompt)) {
        prompt[sName] = options[sName];
      }
    }
    return prompt;
  }
  
  init.process(
    {type: "node"}, 
    [
      // Prompt for these values.
      init.prompt("name"),
      getPrompt({
        name: 'model_name',
        message: "Model to create (use lowercase)",
        'default': function(value, data, done){
          var names = data.name.split('-');
          done(null,names[names.length-1]);
        }
      }),
      init.prompt("description"),
      getPrompt({
        name: "keywords",
        message: "Project keywords (separated by space)",
        sanitize: function(value, data, done) { 
          done(false, value 
               ? value.replace(trimRegExp, "")
               .split(spaceRegExp)
               : []); 
        }
      }),
      init.prompt("author_name"),
      init.prompt("author_email"),
      init.prompt("author_url"),
      init.prompt("version"),
      init.prompt("repository"),
      init.prompt("homepage"),
      init.prompt("bugs"),
      getPrompt({
        name: "license",
        message: "Project license(s) (should be SPDX expression)",
        "default": "MIT"
      }),
      init.prompt("node_version", ">= 0.12.0"),
      init.prompt("npm_test", "grunt test"),
      getPrompt({
        name: "npm_install",
        message: "Would you like to run `npm install` command automatically after initialization of the project?",
        "default": "Y/n",
        sanitize: convertYesNo
      })
    ], 
    function(err, props) {
      var renameMap = init.renames;

      props.source_dir = 'lib/';
      props.main = props.source_dir+'index.js';
      props.model = capitalizeFirstLetter(props.model_name);
      props.copyright = grunt.template.process(
        grunt.file.read( init.srcpath("../snippet/copyright.tmpl") ), 
        {data: props, delimiters: 'init'});

      var devDepend = props.devDependencies = {
        "chai": "^3.0.0",
        "grunt": "^0.4.5",
        "grunt-bump": "^0.6.0",
        "grunt-changelog": "^0.3.1",
        "grunt-contrib-clean": "^0.6.0",
        "grunt-contrib-concat": "^0.5.1",
        "grunt-contrib-copy": "^0.8.1",
        "grunt-contrib-jshint": "^0.11.3",
        "grunt-contrib-watch": "^0.6.1",
        "grunt-env": "^0.4.4",
        "grunt-git": "^0.3.5",
        "grunt-istanbul": "^0.6.1",
        "grunt-jscs": "^2.1.0",
        "grunt-mocha-test": "^0.12.7",
        "istanbul": "^0.3.22",
        "semver": "^5.0.3",
        "mocha": "^2.3.2",
      };

      var peerDepend = props.peerDependencies = {
        "ligle-engine": "~0.4.0",
      };

      if (props.license !== "MIT") {
        delete files["LICENSE"];
      }
      
      var files = init.filesToCopy(props);
      
      // Actually copy (and process) files.
      init.copyAndProcess(files, props);
      
      // Generate package.json file.
      init.writePackageJSON("package.json", props, function(pkg, props) {
        if (props.license) {
          pkg.license = props.license;
        }
        return pkg;
      });
      
      if (props.npm_install) {
        console.log("\nnpm install...\n");
        // Run npm install in project's directory
        grunt.util.spawn({cmd: 'npm',
                          args: ['install'], 
                          opts: {cwd: init.destpath, stdio: "inherit"}}, 
                         function(error, result, code) {
                           // All done!
                           done();
                         });
      }
      else {
        // All done!
        done();
      }
      
    });
};
