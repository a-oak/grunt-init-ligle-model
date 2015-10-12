
# grunt-init-ligle-model

[grunt-init](http://gruntjs.com/project-scaffolding) template for a project that can have Node package.

this template is mainly for writing model addon for [ligle-engine](https://github.com/a-oak/ligle-engine), here is an example:[ligle-model-member](https://github.com/a-oak/ligle-model-member)


devDependencies :
- [Mocha](http://visionmedia.github.io/mocha/)+[Chai](http://chaijs.com) tests,
- [JSHint](jshint.com),
- [JSCS](http://jscs.info/overview)
- [watch](https://github.com/gruntjs/grunt-contrib-watch),
- [copy](https://www.npmjs.com/package/grunt-contrib-copy),
- [clean](https://www.npmjs.com/package/grunt-contrib-clean),
- [concat](https://www.npmjs.com/package/grunt-contrib-concat),
- [grunt-bump](https://github.com/vojtajina/grunt-bump),
- [grunt-changelog](https://github.com/ericmatthys/grunt-changelog),
- [grunt-env](https://github.com/jsoverson/grunt-env),
- [grunt-git](https://github.com/rubenv/grunt-git),
- [grunt-istanbul](https://github.com/taichi/grunt-istanbul),


## Getting started

### Installation

If you haven't already done so, install [grunt-init](http://gruntjs.com/project-scaffolding).

```bash
npm install -g grunt-init
```

Once [grunt-init](http://gruntjs.com/project-scaffolding) is installed, place this template in your `~/.grunt-init/` directory.
It's recommended that you use `git clone` to install this template into that directory as follows:

```bash
git clone https://git.hijack.moe/crackhopper/grunt-init-ligle-model.git ~/.grunt-init/ligle-model
```

_(Windows users should use %USERPROFILE%\\.grunt-init\ligle-model as the correct destination directory path)_

To force `grunt-init` to use custom default values, move the `defaults.json` file to your `~/.grunt-init/` directory,
and customize the values in that file.

**Note**: you can make the template available as any name you choose by simply changing the name of the folder
that the template is installed into. So instead of `~/.grunt-init/ligle-model`, you may change the name to `~/.grunt-init/foo`
so that the template can be used with the following command: `grunt-init foo`.
Also you can clone the template into any subdirectory outside of `~/.grunt-init/` directory. For example:
```bash
git clone https://github.com/gamtiq/grunt-init-ligle-model.git path/to/grunt-init/templates/ligle-model
```
In this case you will have to specify path to the template when running `grunt-init` (see below).

### Usage

At the command-line, cd into an empty directory, run this command and follow the prompts.

```bash
grunt-init ligle-model
```
Or
```bash
grunt-init path/to/grunt-init/templates/ligle-model
```
when the template was placed in subdirectory outside of `~/.grunt-init/` directory.

_Note that this template will generate files in the current directory, so be sure to change to a new directory first
if you don't want to overwrite existing files._

You might want to test that it works before you begin customizing the project:

* run `grunt` to test the project

## Redefining default prompt answers

You can redefine default prompt answers using `defaults.json` file
(see [here](http://gruntjs.com/project-scaffolding#specifying-default-prompt-answers) for details).
Below supported prompt names are listed:

* `name` - project name
* `description` - project description
* `keywords` - project keywords
* `version` - initial version
* `repository` - project repository
* `homepage` - URL of project home page
* `bugs` - URL of project issues tracker
* `license` - project licenses
* `author_name` - author name
* `author_email` - author email
* `author_url` - URL of author's site
* `node_version` - minimal Node.js version
* `main` - main file
* `npm_test` - NPM test command
* `npm_install` - to run or not `npm install` command automatically

## License
Copyright (c) 2015 A-Oak Co. Ltd.

under MIT license
