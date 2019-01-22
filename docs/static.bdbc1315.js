(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/wizardo/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _antd = __webpack_require__(2);

var _reactHighlight = __webpack_require__(9);

var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

var InlineCode = function InlineCode(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(
      'code',
      null,
      children
    )
  );
};
exports.default = (0, _reactStatic.withRouteData)(function (props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _antd.Layout,
      null,
      _react2.default.createElement(
        _antd.Layout.Header,
        null,
        _react2.default.createElement(
          'h1',
          { className: 'maxWidthContainer' },
          'GUIDES'
        )
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _antd.Layout.Content,
          { className: 'maxWidthContainer' },
          _react2.default.createElement(
            'section',
            { id: 'first-steps' },
            _react2.default.createElement(
              'h1',
              null,
              'First steps'
            ),
            _react2.default.createElement(
              'h2',
              { id: 'first-steps-installation' },
              'Installation'
            ),
            _react2.default.createElement(
              'p',
              null,
              'In order for you to have Wizardo CLI available in your computer, you need to have node installed in your system in a version equal or greater than v6.0.0. To install node here is the ',
              _react2.default.createElement(
                'a',
                { href: 'https://nodejs.org/en/download/', target: '_blank' },
                'link'
              ),
              '.',
              _react2.default.createElement('br', null),
              'You can install Wizardo through npm as following:'
            ),
            _react2.default.createElement(
              _reactHighlight2.default,
              { className: 'bash' },
              "$ npm install -g wizardo"
            ),
            _react2.default.createElement(
              'p',
              null,
              'This will install Wizardo CLI globally in your system. ',
              _react2.default.createElement('br', null),
              'You can see Wizardo\'s options by executing ',
              _react2.default.createElement(
                InlineCode,
                null,
                '$ wizardo --help'
              ),
              ' '
            ),
            _react2.default.createElement(
              _reactHighlight2.default,
              { className: 'bash' },
              '$ wizardo --help\n   Usage: wizardo [options] [command]\n\n   Options:\n     -v, --version       output the version number\n     -h, --help          output usage information\n\n   Commands:\n     init                create the initial boilerplate for wizardo generator\n     create <generator>  create a new generator into .wizardo/<generator>.config.json\n     run <generator>     run generator given .wizardo/<generator>.config.json\n     list|ls             list all available generators\n     *                   not a command'
            ),
            _react2.default.createElement(
              'h2',
              { id: 'first-steps-init' },
              'Wizardo init'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Wizardo is intended to be used for particular projects. So you might want configure it in different ways according to your needs. ',
              _react2.default.createElement('br', null),
              'For that reason, Wizardo offers a command that adds a folder called ',
              _react2.default.createElement(
                InlineCode,
                null,
                '.wizardo'
              ),
              ' in the root of your project in which you can dump all the configuration needed.',
              _react2.default.createElement('br', null),
              'To execute the command you need to run:'
            ),
            _react2.default.createElement(
              _reactHighlight2.default,
              { className: 'bash' },
              '$ wizardo init '
            ),
            _react2.default.createElement(
              'p',
              null,
              'As a result of this command, the root of your project will have a ',
              _react2.default.createElement(
                InlineCode,
                null,
                '.wizardo'
              ),
              ' folder with a ',
              _react2.default.createElement(
                InlineCode,
                null,
                'templates'
              ),
              ' folder inside of it.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'A project with generators would look like the following:'
            ),
            _react2.default.createElement(
              _reactHighlight2.default,
              { className: 'bash' },
              ' app/\n  \u251C .wizardo/\n  \u2502 \u251C\u2500 sample_generator.config.json\n  \u2502 \u2514\u2500 templates/\n  \u2502    \u2514\u2500 sample_template.js\n  \u2514 other_files/ '
            ),
            _react2.default.createElement(
              'p',
              null,
              'The content of a ',
              _react2.default.createElement(
                InlineCode,
                null,
                '.wizardo'
              ),
              ' folder is made out of two parts: ',
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/guides#generators' },
                _react2.default.createElement(
                  'em',
                  null,
                  'generators config files'
                )
              ),
              ' and ',
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/guides#templates' },
                _react2.default.createElement(
                  'em',
                  null,
                  'templates'
                )
              ),
              '. Later in this guide, we will go in depth on each of the previous topics. But as a highlevel explanation, ',
              _react2.default.createElement(
                InlineCode,
                null,
                '<generators>.config.json'
              ),
              ' files, describe the steps your generators will execute and ',
              _react2.default.createElement(
                InlineCode,
                null,
                'templates'
              ),
              ' folder contain all the templates used by the config files.'
            ),
            _react2.default.createElement(
              'h3',
              { id: 'first-steps-about-git' },
              'Should I commit this folder in git?'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Yes.',
              _react2.default.createElement('br', null),
              'Specially if you want your generators to be available to other developers in your project.',
              _react2.default.createElement('br', null),
              'Actually Wizardo works tighly coupled with git and you cannot run a generator without have it commited in your repo.'
            ),
            _react2.default.createElement(
              'h3',
              { id: 'first-steps-cant-find-wizardo' },
              'I can\'t find .wizardo folder in my file explorer'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Most of file explorers hide folders and files starting with ',
              _react2.default.createElement(
                InlineCode,
                null,
                '.'
              ),
              ' and that is the reason why we create wizardo\'s configuration folder starting with dot. The root of your project shouldn\'t be contaminated with configuration files. Anyways, you might want to use the folder.',
              _react2.default.createElement('br', null),
              'Most of file explorers offer the option to ',
              _react2.default.createElement(
                InlineCode,
                null,
                'Show Hidden Files'
              ),
              ' when you ',
              _react2.default.createElement(
                InlineCode,
                null,
                'rightClick'
              ),
              ' in the root of your project and you can do it the same way with your text editor. ',
              _react2.default.createElement('br', null),
              'In the terminal, you might run ',
              _react2.default.createElement(
                InlineCode,
                null,
                '$ ls -a'
              ),
              ' to show all, even hidden files, available in the current path.'
            )
          ),
          _react2.default.createElement(
            'section',
            { id: 'generators' },
            _react2.default.createElement(
              'h1',
              null,
              'Generators'
            ),
            _react2.default.createElement(
              'p',
              null,
              'In this section we are going to go through different aspects of a generator using a simple example. We will create a plain html based website using Wizardo.'
            ),
            _react2.default.createElement(
              'h2',
              { id: 'generators-setup' },
              '1. Setup'
            ),
            _react2.default.createElement(
              'p',
              null,
              'To start with this example, create a folder ',
              _react2.default.createElement(
                InlineCode,
                null,
                'website/'
              ),
              ' to hold our project. ',
              _react2.default.createElement(
                InlineCode,
                null,
                'cd'
              ),
              ' into our folder and execute ',
              _react2.default.createElement(
                InlineCode,
                null,
                '$ wizardo init'
              )
            ),
            _react2.default.createElement(
              _reactHighlight2.default,
              { className: 'bash' },
              ' ~$ mkdir website\n ~$ cd website\n ~/website$ wizardo init\n ~/website$ ls -a\n .  ..  .wizardo '
            ),
            _react2.default.createElement(
              'p',
              null,
              'Next, we will insert an index page in the root of our website'
            ),
            _react2.default.createElement(
              _reactHighlight2.default,
              { className: 'bash' },
              ' ~/website$ touch index.html'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Copy the following html template inside ',
              _react2.default.createElement(
                InlineCode,
                null,
                'index.html'
              ),
              ' using your favorite text editor: '
            ),
            _react2.default.createElement(
              _reactHighlight2.default,
              { className: 'html' },
              ' <!DOCTYPE html>\n <html lang="en">\n   <head>\n     <meta charset="UTF-8">\n     <title>index</title>\n   </head>\n   <body>\n     My website\n   </body>\n </html> '
            ),
            _react2.default.createElement(
              'h2',
              { id: 'generators-create-command' },
              '2. Create command'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Now we will execute the ',
              _react2.default.createElement(
                InlineCode,
                null,
                'create'
              ),
              ' command that will add into our ',
              _react2.default.createElement(
                InlineCode,
                null,
                '.wizardo'
              ),
              ' folder a config file for our new generator.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Lets say that we want a generator to create new pages into our website. So lets run the command by:'
            ),
            _react2.default.createElement(
              _reactHighlight2.default,
              { className: 'bash' },
              ' ~/website$ wizardo create page_generator'
            ),
            _react2.default.createElement(
              'p',
              null,
              'This command will add ',
              _react2.default.createElement(
                InlineCode,
                null,
                'page_generator.config.json'
              ),
              ' into our ',
              _react2.default.createElement(
                InlineCode,
                null,
                '.wizardo/'
              ),
              ' folder with the following json:'
            ),
            _react2.default.createElement(
              _reactHighlight2.default,
              { className: 'json' },
              '{\n  "generator": "page_generator",\n  "templates": [\n    {\n      "source_template": "<%=example.js=%>",\n      "destination": "path/to/<%=destination=%>"\n    }\n  ],\n  "modifiers": [\n    {\n      "path_to_file": "path/to/existing/existing_file.js",\n      "regex": "Hello World ___view___\\n",\n      "text_to_insert": "Just matched with `___view___`\\n"\n    }\n  ]\n}'
            ),
            _react2.default.createElement(
              'p',
              null,
              'The config file contain 3 main sections, that are ',
              _react2.default.createElement(
                InlineCode,
                null,
                'generator'
              ),
              ' with the name of our generator, ',
              _react2.default.createElement(
                InlineCode,
                null,
                'templates'
              ),
              ' and ',
              _react2.default.createElement(
                InlineCode,
                null,
                'modifiers'
              ),
              ' that we are going to discuss in the following sections ',
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/guides#templates' },
                _react2.default.createElement(
                  'em',
                  null,
                  'templates'
                )
              ),
              ' and ',
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/guides#modifiers' },
                _react2.default.createElement(
                  'em',
                  null,
                  'modifiers'
                )
              ),
              '.'
            ),
            _react2.default.createElement(
              'h2',
              { id: 'generators-list-command' },
              '3. List command'
            ),
            _react2.default.createElement(
              'p',
              null,
              'The existance of ',
              _react2.default.createElement(
                InlineCode,
                null,
                'page_generator.config.json'
              ),
              ' file, tells Wizardo that we have a generator under the name ',
              _react2.default.createElement(
                InlineCode,
                null,
                'page_generator'
              ),
              '.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'To verify so, we can run the ',
              _react2.default.createElement(
                InlineCode,
                null,
                'list'
              ),
              ' command to list all the available generators in our project.'
            ),
            _react2.default.createElement(
              _reactHighlight2.default,
              { className: 'bash' },
              ' ~/website$ wizardo ls\n    - page_generator '
            )
          ),
          _react2.default.createElement(
            'section',
            { id: 'templates' },
            _react2.default.createElement(
              'h1',
              null,
              'Templates'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Templates in Wizardo are the way of creating new files in your project, based on existing ones. In this section, we will go on with our tutorial by creating a template and reviewing the related parts'
            ),
            _react2.default.createElement(
              'h2',
              { id: 'templates-folder' },
              '1. Templates folder '
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                InlineCode,
                null,
                '.wizardo/'
              ),
              ' folder has a folder called ',
              _react2.default.createElement(
                InlineCode,
                null,
                'templates/'
              ),
              ' in which we need to place our templates.',
              _react2.default.createElement('br', null),
              'This is the place where Wizardo looks for templates. So lets go and copy our ',
              _react2.default.createElement(
                InlineCode,
                null,
                'index.html'
              ),
              ' into that location by:'
            ),
            _react2.default.createElement(
              _reactHighlight2.default,
              { className: 'bash' },
              ' ~/website$ cp index.html .wizardo/templates/\n ~/website$ ls .wizardo/templates/\n   index.html '
            ),
            _react2.default.createElement(
              'h2',
              { id: 'templates-structure-in-config' },
              '2. Templates structure in config file'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Great, now that we have a template in ',
              _react2.default.createElement(
                InlineCode,
                null,
                '.wizardo/templates/'
              ),
              ' we need to let know our generator (',
              _react2.default.createElement(
                InlineCode,
                null,
                'page_generator.config.json'
              ),
              ') that whenever it runs, we are going to create a new file based on our template '
            ),
            _react2.default.createElement(
              'p',
              null,
              'The content of ',
              _react2.default.createElement(
                InlineCode,
                null,
                'templates'
              ),
              ' key of the configuration file for a generator is really simple. It contains an array of sources and destinations. The ',
              _react2.default.createElement(
                InlineCode,
                null,
                'source_template'
              ),
              ' key indicates the name of our template inside the ',
              _react2.default.createElement(
                InlineCode,
                null,
                'templates/'
              ),
              ' folder, and the ',
              _react2.default.createElement(
                InlineCode,
                null,
                'destination'
              ),
              ' key, is the path in which is going to reside the file that wizardo will generate.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Lets say that in our website we will have folder ',
              _react2.default.createElement(
                InlineCode,
                null,
                'pages/'
              ),
              ' to hold all of our pages. So lets go and modify ',
              _react2.default.createElement(
                InlineCode,
                null,
                'page_generator.config.json'
              ),
              ' to indicate our intention:'
            ),
            _react2.default.createElement(
              _reactHighlight2.default,
              { className: 'json' },
              '{\n  "generator": "page_generator",\n  "templates": [\n    {\n      "source_template": "index.html",\n      "destination": "pages"\n    }\n  ],\n  "modifiers": []\n}'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'strong',
                null,
                'Note'
              ),
              ' that we removed the content of ',
              _react2.default.createElement(
                InlineCode,
                null,
                'modifiers'
              ),
              ' key. ',
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/guides#modifiers' },
                _react2.default.createElement(
                  'em',
                  null,
                  'Later'
                )
              ),
              ' on this guide we will go on to this part, but for now, just the array empty so we can see wizardo in action.'
            ),
            _react2.default.createElement(
              'h2',
              { id: 'templates-run-generator' },
              '3. Run generator to test templates'
            ),
            _react2.default.createElement(
              'p',
              null,
              'To run the ',
              _react2.default.createElement(
                InlineCode,
                null,
                'page_generator'
              ),
              ' execute:'
            ),
            _react2.default.createElement(
              _reactHighlight2.default,
              { className: 'bash' },
              ' ~/website$ wizardo run page_generator\n Wizardo: run page_generator\n   - Wizardo is tightly coupled with git.\n     It seems that you dont have a git repo initialized in this directory.\n   + Create a git repo and commit all your changes before running a generator'
            ),
            _react2.default.createElement(
              'p',
              null,
              'As the error messages says, wizardo rely on git to execute the rollbacks. So first we need to create a git repo and commit our changes'
            ),
            _react2.default.createElement(
              _reactHighlight2.default,
              { className: 'bash' },
              ' ~/website$ git init\n ~/website$ git add .\n ~/website$ git commit -m "Initialize wizardo"'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Once we have that down, we can proceed to try running the ',
              _react2.default.createElement(
                InlineCode,
                null,
                'page_generator'
              ),
              ' again.'
            ),
            _react2.default.createElement(
              _reactHighlight2.default,
              { className: 'bash' },
              ' ~/website$ wizardo run page_generator\n Wizardo: run page_generator\n   create: pages\n Wizardo: run page_generator - DONE!\n   create: pages/index.html'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'strong',
                null,
                'Note'
              ),
              ' that wizardo created the ',
              _react2.default.createElement(
                InlineCode,
                null,
                'pages/'
              ),
              ' folder for us and it also created a copy of the ',
              _react2.default.createElement(
                InlineCode,
                null,
                'index.html'
              ),
              ' from our templates.'
            ),
            _react2.default.createElement(
              _reactHighlight2.default,
              { className: 'bash' },
              ' website/\n  \u251C .wizardo/\n  \u2502 \u251C\u2500 page_generator.config.json\n  \u2502 \u2514\u2500 templates/\n  \u2502    \u2514\u2500 index.html\n  \u251C pages/\n  \u2502 \u2514\u2500 index.html\n  \u2514 index.html '
            ),
            _react2.default.createElement(
              'p',
              null,
              'Cool! Now that we learned how to generate files given a template, in the following section we will learn how to add some dynamism to our templates so we can generate files with names other than ',
              _react2.default.createElement(
                InlineCode,
                null,
                'index.html'
              ),
              ' \uD83D\uDC4D '
            )
          ),
          _react2.default.createElement(
            'section',
            { id: 'variables' },
            _react2.default.createElement(
              'h1',
              null,
              'Variables'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Variables are words that follow a special pattern that will be replaced with a given input at run time.'
            ),
            _react2.default.createElement(
              'h2',
              { id: 'variables-types' },
              '1. Variables types'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Wizardo has three types of identifiers for variables: ',
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                InlineCode,
                null,
                '___var_name___'
              ),
              ', which is the most common used. It is given by three underscores followed by the variable name in snake_case and ending with other three underscores.',
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                InlineCode,
                null,
                '___VarName___'
              ),
              ', which is used similar to the previous one but uses PascalCase. This allow to use the same variables but print them in the generated files using PascalCase.',
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                InlineCode,
                null,
                "<%=var_name=%>"
              ),
              ', composed with ',
              _react2.default.createElement(
                InlineCode,
                null,
                "<%="
              ),
              ' followed by the variable name in ',
              _react2.default.createElement(
                InlineCode,
                null,
                'snake_case'
              ),
              ' and ending with ',
              _react2.default.createElement(
                InlineCode,
                null,
                "=%>"
              ),
              '. This option is available to be used in the same line as one of the previous types.',
              _react2.default.createElement('br', null),
              'We will see an example each of the previous variable types in the following steps of this section'
            ),
            _react2.default.createElement(
              'h2',
              { id: 'variables-in-config' },
              '2. Variables in config file'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Wizardo takes variables found in the config file and prompt for their values, so at run time they are replaced with their corresponding values.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'It makes sense in our example that generate pages with other names, such as ',
              _react2.default.createElement(
                InlineCode,
                null,
                'about'
              ),
              ', ',
              _react2.default.createElement(
                InlineCode,
                null,
                'products'
              ),
              ' or ',
              _react2.default.createElement(
                InlineCode,
                null,
                'FAQ'
              ),
              '.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'So lets modify the ',
              _react2.default.createElement(
                InlineCode,
                null,
                'page_generator.config.json'
              ),
              ' file to allow dynamic page names'
            ),
            _react2.default.createElement(
              _reactHighlight2.default,
              { className: 'json' },
              '{\n  "generator": "page_generator",\n  "templates": [\n    {\n      "source_template": "___page_name___.html",\n      "destination": "pages"\n    }\n  ],\n  "modifiers": []\n}'
            ),
            _react2.default.createElement(
              'p',
              null,
              'This will cause the generator to fail if we run wizardo, because ',
              _react2.default.createElement(
                InlineCode,
                null,
                '___page_name___.html'
              ),
              ' does not exist in the templates. ',
              _react2.default.createElement('br', null),
              'To fix this, lets change ',
              _react2.default.createElement(
                InlineCode,
                null,
                'index.html'
              ),
              ' name from the ',
              _react2.default.createElement(
                InlineCode,
                null,
                'templates/'
              ),
              ' folder to ',
              _react2.default.createElement(
                InlineCode,
                null,
                '___page_name___.html'
              )
            ),
            _react2.default.createElement(
              _reactHighlight2.default,
              { className: 'bash' },
              " ~/website$ mv .wizardo/templates/index.html .wizardo/templates/___page_name___.html"
            ),
            _react2.default.createElement(
              'h2',
              { id: 'variables-run-generator' },
              '3. Run the generator'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Let see how wizardo prompts for ',
              _react2.default.createElement(
                InlineCode,
                null,
                'page_name'
              ),
              ' variables. Remember that in order to run a Wizardo generator, you need to have all the changes commited first.'
            ),
            _react2.default.createElement(
              _reactHighlight2.default,
              { className: 'bash' },
              ' ~/website$ git add .\n ~/website$ git commit -m "Modify source_template to take a variable"\n                       -m "and created another index page in pages"\n\n ~/website$ wizardo run page_generator\n Wizardo: run page_generator\n   Enter the value for the following variables in your config file\n    page_name: products <-------- Insert the new page name here!'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Insert ',
              _react2.default.createElement(
                InlineCode,
                null,
                'products'
              ),
              ' when asked for and hit ',
              _react2.default.createElement(
                InlineCode,
                null,
                'Enter'
              ),
              '. You will receive the following message:'
            ),
            _react2.default.createElement(
              _reactHighlight2.default,
              { className: 'bash' },
              ' Wizardo: run page_generator - DONE!\n  create: pages/products.html '
            ),
            _react2.default.createElement(
              'p',
              null,
              'And you can check the file creation in your file system. It should look something like the following:'
            ),
            _react2.default.createElement(
              _reactHighlight2.default,
              { className: 'bash' },
              ' website/\n   \u251C .wizardo/\n   \u2502 \u251C\u2500 page_generator.config.json\n   \u2502 \u2514\u2500 templates/\n   \u2502    \u2514\u2500 ___page_name___.html\n   \u251C pages/\n   \u2502 \u251C\u2500 products.html\n   \u2502 \u2514\u2500 index.html\n   \u2514 index.html '
            ),
            _react2.default.createElement(
              'h2',
              { id: 'variables-in-templates' },
              '4. Variables in templates'
            ),
            _react2.default.createElement(
              'p',
              null,
              'You can also add variables inside templates, so everytime you generate a new view based on a template, it is not just a copy, but a customized new file.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'To demonstrate this, go to ',
              _react2.default.createElement(
                InlineCode,
                null,
                '___page_name___.html'
              ),
              ' and modify the content with the following:'
            ),
            _react2.default.createElement(
              _reactHighlight2.default,
              { className: 'html' },
              ' <!DOCTYPE html>\n <html lang="en">\n   <head>\n     <meta charset="UTF-8">\n     <title>___page_name___</title>\n   </head>\n   <body>\n     ___PageName___\n   </body>\n </html> '
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'strong',
                null,
                'Note'
              ),
              ' that we are inserting the variable ',
              _react2.default.createElement(
                InlineCode,
                null,
                '___page_name___'
              ),
              ' two time. One in ',
              _react2.default.createElement(
                InlineCode,
                null,
                'snake_case'
              ),
              ' notation and another one in ',
              _react2.default.createElement(
                InlineCode,
                null,
                'PascalCase'
              ),
              ' notation.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'An important point with variables in wizardo is that you should declare its content in ',
              _react2.default.createElement(
                InlineCode,
                null,
                'snake_case'
              ),
              ' only, and it will transform them into ',
              _react2.default.createElement(
                InlineCode,
                null,
                'PascalCase'
              ),
              ' if needed.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Lets run the generator again, this time use ',
              _react2.default.createElement(
                InlineCode,
                null,
                'about_us'
              ),
              ' as value the of ',
              _react2.default.createElement(
                InlineCode,
                null,
                '___page_name___'
              ),
              ' so we can see the ',
              _react2.default.createElement(
                InlineCode,
                null,
                'PascalCase'
              ),
              ' transformation in action. (Remember to commit the changes before running a generator).'
            ),
            _react2.default.createElement(
              _reactHighlight2.default,
              { className: 'bash' },
              ' ~/website$ wizardo run page_generator\n Wizardo: run page_generator\n\n Enter the value for the following variables in your config file\n   page_name: about_us\n Wizardo: run page_generator - DONE!\n   create: pages/about_us.html '
            ),
            _react2.default.createElement(
              'p',
              null,
              'Great. Now lets take a look to ',
              _react2.default.createElement(
                InlineCode,
                null,
                'pages/about_us.html'
              ),
              ' file'
            ),
            _react2.default.createElement(
              _reactHighlight2.default,
              { className: 'html' },
              ' <!DOCTYPE html>\n <html lang="en">\n   <head>\n     <meta charset="UTF-8">\n     <title>about_us</title>\n   </head>\n   <body>\n     AboutUs\n   </body>\n </html> '
            ),
            _react2.default.createElement(
              'h2',
              { id: 'variables-limitations' },
              '5. Limitations and workaround'
            ),
            _react2.default.createElement(
              'p',
              null,
              'At the moment wizardo look for variables only in the config file, if the variable to be replaced exists in a template but not in the generator\'s config file, wizardo won\'t prompt for that variable and you will probably end up with an un-replaced variable in the final file. ',
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'strong',
                null,
                'This is a limitation'
              ),
              ' that the team has in mind and we are planning to improve it in future releases.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'A ',
              _react2.default.createElement(
                'strong',
                null,
                'workaround'
              ),
              ' to this, is add an extra key ',
              _react2.default.createElement(
                InlineCode,
                null,
                'variables'
              ),
              ' with an array of ',
              _react2.default.createElement(
                InlineCode,
                null,
                'variables'
              ),
              ' to the ',
              _react2.default.createElement(
                InlineCode,
                null,
                'generator'
              ),
              '\'s config file. As the following:'
            ),
            _react2.default.createElement(
              _reactHighlight2.default,
              { className: 'json' },
              '{\n  "generator": "page_generator",\n  "templates": [\n    {\n      "source_template": "___page_name___.html",\n      "destination": "pages"\n    }\n  ],\n  "modifiers": [],\n  "variables": [\n    "___these_variables___",\n    "___exist_only_in___",\n    "___template_files___"\n  ]\n}'
            ),
            _react2.default.createElement(
              'p',
              null,
              'This workaround tells wizardo to ask for these variables and to use the values given at runtime.'
            )
          ),
          _react2.default.createElement(
            'section',
            { id: 'modifiers' },
            _react2.default.createElement(
              'h1',
              null,
              'Modifiers'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Modifiers are the way of looking for a pattern in existing files and adding new content to them.',
              _react2.default.createElement('br', null),
              'They work with ',
              _react2.default.createElement(
                InlineCode,
                null,
                'Regular Expressions'
              ),
              ' so if you are unfamiliar with those, we recommend you to go take a look at them in ',
              _react2.default.createElement(
                'a',
                { href: 'https://regexone.com/', target: '_blank' },
                'regexone.com'
              ),
              ' or the resource of your choice.'
            ),
            _react2.default.createElement(
              'h2',
              { id: 'modifiers-structure' },
              '1. Modifiers structure'
            ),
            _react2.default.createElement(
              'p',
              null,
              'The content of ',
              _react2.default.createElement(
                InlineCode,
                null,
                'modifiers'
              ),
              ' key in the configuration file is made of an ',
              _react2.default.createElement(
                InlineCode,
                null,
                'array'
              ),
              ' of ',
              _react2.default.createElement(
                InlineCode,
                null,
                'path_to_file'
              ),
              ', ',
              _react2.default.createElement(
                InlineCode,
                null,
                'regex'
              ),
              ' and ',
              _react2.default.createElement(
                InlineCode,
                null,
                'text_to_insert'
              ),
              '.'
            ),
            _react2.default.createElement(
              'p',
              null,
              ' - ',
              _react2.default.createElement(
                InlineCode,
                null,
                'path_to_file'
              ),
              ' indicates the path from the root of the project to the file that the modifier is going to work on.',
              _react2.default.createElement('br', null),
              '- ',
              _react2.default.createElement(
                InlineCode,
                null,
                'regex'
              ),
              ' is the regular expression that will be found in the the given file and will be used to insert after it. A way of validation the patterns created is to use ',
              _react2.default.createElement(
                'a',
                { href: 'https://regex101.com', target: '_blank' },
                'regex101.com'
              ),
              ' in ',
              _react2.default.createElement(
                InlineCode,
                null,
                'javascript'
              ),
              ' mode.',
              _react2.default.createElement('br', null),
              '- ',
              _react2.default.createElement(
                InlineCode,
                null,
                'text_to_insert'
              ),
              ' is what is going to be inserted after the match in the regex.',
              _react2.default.createElement('br', null)
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'strong',
                null,
                'Note'
              ),
              ' that at the moment, ',
              _react2.default.createElement(
                InlineCode,
                null,
                'modifiers'
              ),
              ' don\'t respect identation, so ',
              _react2.default.createElement(
                InlineCode,
                null,
                'text_to_insert'
              ),
              ' needs take that into consideration.'
            ),
            _react2.default.createElement(
              'h2',
              { id: 'modifiers-use' },
              '2. Use modifiers'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Following with the tutorial, lets create a navbar into the ',
              _react2.default.createElement(
                InlineCode,
                null,
                'index.html'
              ),
              ' of root, so whenever we add a new page with the ',
              _react2.default.createElement(
                InlineCode,
                null,
                'page_generator'
              ),
              ', the modifier adds the corresponding route to the navbar.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'First, modify ',
              _react2.default.createElement(
                InlineCode,
                null,
                'index.html'
              ),
              ' to match the following code. We are basically adding a navbar with routes to each of the files we have created so far.'
            ),
            _react2.default.createElement(
              _reactHighlight2.default,
              { className: 'html' },
              '\n<!DOCTYPE html>\n<html lang="en">\n <head>\n   <meta charset="UTF-8">\n   <title>index</title>\n   <style>\n     body { padding: 0; margin: 0; }\n     nav { background: #efefef; padding: 15px 50px; }\n     nav a { color: black; padding: 10px 15px; }\n   </style>\n </head>\n <body>\n   <nav>\n      <a href="pages/about_us.html"> AboutUs </a>\n      <a href="pages/index.html">    Index   </a>\n      <a href="pages/products.html"> Products</a>\n    </nav>\n  My website\n  </body>\n  </html>'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Our ',
              _react2.default.createElement(
                InlineCode,
                null,
                'modifier'
              ),
              ' is going to insert an anchor for the new page right after the ',
              _react2.default.createElement(
                InlineCode,
                null,
                '<nav>'
              ),
              ' tag.',
              _react2.default.createElement('br', null),
              'Modify the ',
              _react2.default.createElement(
                InlineCode,
                null,
                'page_generator.config.json'
              ),
              ' file to include the following modifier:'
            ),
            _react2.default.createElement(
              'div',
              { style: { fontSize: '0.9em' } },
              _react2.default.createElement(
                _reactHighlight2.default,
                { className: 'json' },
                '{\n  "generator": "page_generator",\n  "templates": [\n    {\n      "source_template": "___page_name___.html",\n      "destination": "pages"\n    }\n  ],\n  "modifiers": [\n     {\n       "path_to_file": "index.html",\n       "regex": "<nav>\\n",\n       "text_to_insert": "     <a href=\\"pages/<%=page_name=%>.html\\">___PageName___</a>\\n"\n     }\n  ]\n}'
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              'We are going to work in the ',
              _react2.default.createElement(
                InlineCode,
                null,
                '"index.html"'
              ),
              ' file of root using ',
              _react2.default.createElement(
                InlineCode,
                null,
                'path_to_file'
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              'We are matching ',
              _react2.default.createElement(
                InlineCode,
                null,
                '"<nav>\\n"'
              ),
              ' using ',
              _react2.default.createElement(
                InlineCode,
                null,
                'regex'
              ),
              '.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'And we are inserting the new anchor right after the match using ',
              _react2.default.createElement(
                InlineCode,
                null,
                'text_to_insert'
              ),
              '.'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'strong',
                null,
                'Note'
              ),
              ' that we are using variables in ',
              _react2.default.createElement(
                InlineCode,
                null,
                'text_to_insert'
              ),
              ' key. You can also use variables inside the ',
              _react2.default.createElement(
                InlineCode,
                null,
                'regex'
              ),
              ' and ',
              _react2.default.createElement(
                InlineCode,
                null,
                'path_to_file'
              ),
              ' keys.'
            ),
            _react2.default.createElement(
              'h2',
              { id: 'modifiers-execute' },
              '3. Execute the modifier'
            ),
            _react2.default.createElement(
              'p',
              null,
              'To test the modifier we just need to run our ',
              _react2.default.createElement(
                InlineCode,
                null,
                'page_generator'
              ),
              '.'
            ),
            _react2.default.createElement(
              _reactHighlight2.default,
              { className: 'bash' },
              ' ~/website$ wizardo run page_generator\nWizardo: run page_generator\n\n  Enter the value for the following variables in your config file\n    page_name: faqs\nWizardo: run page_generator - DONE!\n  create: pages/faqs.html\n  modify: index.html '
            ),
            _react2.default.createElement(
              'p',
              null,
              'As the last line of the response states, ',
              _react2.default.createElement(
                InlineCode,
                null,
                'index.html'
              ),
              ' was modified and now it contains an anchor to the recently created ',
              _react2.default.createElement(
                InlineCode,
                null,
                'faqs.html'
              ),
              ' page.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'The index now looks like:'
            ),
            _react2.default.createElement(
              _reactHighlight2.default,
              { className: 'html' },
              '\n<!DOCTYPE html>\n<html lang="en">\n <head>\n   <meta charset="UTF-8">\n   <title>index</title>\n   <style>\n     body { padding: 0; margin: 0; }\n     nav { background: #efefef; padding: 15px 50px; }\n     nav a { color: black; padding: 10px 15px; }\n   </style>\n </head>\n <body>\n   <nav>\n      <a href="pages/faqs.html">Faqs</a>\n      <a href="pages/about_us.html"> AboutUs </a>\n      <a href="pages/index.html">    Index   </a>\n      <a href="pages/products.html"> Products</a>\n    </nav>\n  My website\n  </body>\n  </html>'
            ),
            _react2.default.createElement(
              'h2',
              { id: 'modifiers-warning' },
              '4. Don\'t modify files that you just created'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Wizardo is currently built with the async file system api of node. So if you try writing to the same file in the ',
              _react2.default.createElement(
                InlineCode,
                null,
                'modifiers'
              ),
              ' and the ',
              _react2.default.createElement(
                InlineCode,
                null,
                'templates'
              ),
              ', you could come across a couple WTFs.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'If you need to do something like that, you can always create a new generator that leaves the templates empty, ',
              _react2.default.createElement(
                InlineCode,
                null,
                '"templates": []'
              ),
              ', and run it manually after the one that create files with templates.'
            )
          )
        )
      )
    )
  );
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _antd = __webpack_require__(2);

var _logo_vertical = __webpack_require__(24);

var _logo_vertical2 = _interopRequireDefault(_logo_vertical);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Jumbotron = function Jumbotron(props) {
  return _react2.default.createElement(
    'section',
    { className: 'jumbotron' },
    _react2.default.createElement('img', { src: _logo_vertical2.default, alt: '', style: { maxHeight: 250, display: 'block', margin: '0 auto' } }),
    _react2.default.createElement(
      'h1',
      null,
      'The language agnostic code generator tool'
    )
  );
};
//


var Installation = function Installation(props) {
  return _react2.default.createElement(
    'section',
    { className: 'installation' },
    _react2.default.createElement(
      'div',
      { className: 'code-snippet' },
      _react2.default.createElement(_antd.Icon, { type: 'download', theme: 'outlined' }),
      _react2.default.createElement(
        'pre',
        null,
        _react2.default.createElement(
          'code',
          null,
          '$ npm install -g wizardo'
        )
      )
    )
  );
};

var WhatIsIt = function WhatIsIt(props) {
  return _react2.default.createElement(
    'section',
    { className: 'what-is-it' },
    _react2.default.createElement(
      _antd.Row,
      { type: 'flex', justify: 'space-around' },
      _react2.default.createElement(
        _antd.Col,
        { md: 8, sm: 20 },
        _react2.default.createElement(
          'div',
          { className: 'explanation' },
          _react2.default.createElement(
            'h1',
            null,
            'What is Wizardo?'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Wizardo is a tool that allows you to create code generators to bootstrap new projects or new features in existing ones.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'With Wizardo generators, you can also modify existing files to insert snippets of code whenever is needed.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'It uses templates to generate new files and a configuration file to execute all the steps required to run a scaffold. Its variables based CLI adds dynamism to generators.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Go to ',
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/guides' },
              _react2.default.createElement(
                _antd.Button,
                { type: 'default', size: 'small' },
                'Guides ',
                _react2.default.createElement(_antd.Icon, { type: 'right' })
              )
            ),
            ' to start building your first Wizardo Generator.'
          )
        )
      ),
      _react2.default.createElement(
        _antd.Col,
        { md: 11, sm: 20 },
        _react2.default.createElement('img', { src: _logo_vertical2.default, alt: '' })
      )
    )
  );
};

exports.default = (0, _reactStatic.withSiteData)(function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(Jumbotron, null),
    _react2.default.createElement(Installation, null),
    _react2.default.createElement(WhatIsIt, null)
  );
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _antd = __webpack_require__(2);

var _reactHighlight = __webpack_require__(9);

var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function (props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _antd.Layout,
      null,
      _react2.default.createElement(
        _antd.Layout.Header,
        null,
        _react2.default.createElement(
          'h1',
          { className: 'maxWidthContainer' },
          'CONTRIBUTE'
        )
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        _antd.Layout.Content,
        { className: 'maxWidthContainer' },
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'We need help!'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Submit your PR in ',
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/Intelimetrica/wizardo/pulls' },
              'Github'
            ),
            ' or submit the issues you come across while using the tool.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Thank you!'
          )
        )
      )
    )
  );
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-highlight");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      '404 - Oh no\'s! We couldn\'t find that page :('
    )
  );
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(13);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(14);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactStaticRoutes = __webpack_require__(15);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _reactHotLoader = __webpack_require__(25);

var _antd = __webpack_require__(2);

var _Navbar = __webpack_require__(26);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _MenuIcon = __webpack_require__(27);

var _MenuIcon2 = _interopRequireDefault(_MenuIcon);

var _Guides = __webpack_require__(4);

var _Guides2 = _interopRequireDefault(_Guides);

var _logo_horizontal = __webpack_require__(28);

var _logo_horizontal2 = _interopRequireDefault(_logo_horizontal);

__webpack_require__(29);

__webpack_require__(30);

__webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sider = _antd.Layout.Sider,
    Content = _antd.Layout.Content,
    Footer = _antd.Layout.Footer;

//;

/* TODO: remove blog and request of blogs in compilation */

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isMenuHide: true
    }, _this.onClickIcon = function () {
      _this.setState({ isMenuHide: !_this.state.isMenuHide });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var isMenuHide = this.state.isMenuHide;

      return _react2.default.createElement(
        _reactStatic.Router,
        null,
        _react2.default.createElement(
          _antd.Layout,
          null,
          _react2.default.createElement(_MenuIcon2.default, {
            isMenuHide: this.state.isMenuHide,
            onClick: this.onClickIcon
          }),
          _react2.default.createElement(
            Sider,
            {
              width: 250,
              className: (isMenuHide && "sider") + " " + (!isMenuHide && "js-sider")
            },
            _react2.default.createElement(
              _reactStatic.Link,
              { to: "/" },
              _react2.default.createElement("img", { className: "logo", src: _logo_horizontal2.default, alt: "logo" })
            ),
            _react2.default.createElement(_Navbar2.default, null)
          ),
          _react2.default.createElement(
            _antd.Layout,
            { className: "layout" },
            _react2.default.createElement(
              Content,
              { style: { minHeight: "calc(100vh - 70px)" } },
              _react2.default.createElement(
                _reactStatic.Router,
                null,
                _react2.default.createElement(
                  _reactStatic.Switch,
                  null,
                  _react2.default.createElement(_reactStatic.Route, { path: "/guides", component: _Guides2.default }),
                  _react2.default.createElement(_reactStaticRoutes2.default, null)
                )
              )
            ),
            _react2.default.createElement(
              Footer,
              { style: { textAlign: "center" } },
              "Wizardo \xA9" + new Date().getFullYear() + " Created by Intelim\xE9trica"
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(16);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(17);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(18);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(19);

var _reactUniversalComponent = __webpack_require__(20);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Home',
  file: '/home/iburgos/Documents/wizardo/docs_source/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 7)), (0, _importCss3.default)('src/containers/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(7);
  },
  chunkName: function chunkName() {
    return 'src/containers/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Contribute',
  file: '/home/iburgos/Documents/wizardo/docs_source/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 8)), (0, _importCss3.default)('src/containers/Contribute', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Contribute');
  },
  resolve: function resolve() {
    return /*require.resolve*/(8);
  },
  chunkName: function chunkName() {
    return 'src/containers/Contribute';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Guides',
  file: '/home/iburgos/Documents/wizardo/docs_source/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 4)), (0, _importCss3.default)('src/containers/Guides', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Guides');
  },
  resolve: function resolve() {
    return /*require.resolve*/(4);
  },
  chunkName: function chunkName() {
    return 'src/containers/Guides';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404',
  file: '/home/iburgos/Documents/wizardo/docs_source/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 10)), (0, _importCss3.default)('src/containers/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(10);
  },
  chunkName: function chunkName() {
    return 'src/containers/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 3

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(21);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(22);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(23);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(5);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDgwIDU0MC42OSI+CiAgICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICM0NDQ7CiAgICAgIH0KICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjMTUwYWYyOwogICAgICB9CiAgICAgIC5jbHMtMyB7CiAgICAgICAgb3BhY2l0eTogMC40OwogICAgICB9CiAgICAgIC5jbHMtNCB7CiAgICAgICAgZmlsbDogIzBlMGU5YjsKICAgICAgfQogICAgICAuY2xzLTUgewogICAgICAgIGZpbGw6ICNmMmQ4MjA7CiAgICAgIH0KICAgICAgLmNscy02IHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICB9CiAgICAgIC5jbHMtNyB7CiAgICAgICAgZmlsbDogIzQzMGU4ZTsKICAgICAgfQogICAgPC9zdHlsZT4KICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00NjEuMDcsNjU1LjUybDI2LDk3LjU2LDMyLjA1LTk3LjU2aDMxLjI1bDMyLjA1LDk3LjU2LDI2LTk3LjU2aDQxLjA3TDYwNC41MSw4MDYuNThINTY0LjQ0TDUzNC43OSw3MTlsLTI5LjY1LDg3LjU1SDQ2NS4wOEw0MjAsNjU1LjUyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQyMCAtMjcwLjEpIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNzA0LjY4LDY1NS41MlY4MDYuNThINjY1LjQxVjY1NS41MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MjAgLTI3MC4xKSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTc4OS40Miw3NzMuMzJoNjMuMzF2MzMuMjZINzIzLjUxTDc5NSw2ODguNzhoLTU5LjVWNjU1LjUyaDEyNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MjAgLTI3MC4xKSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTk3MS45Miw3ODAuMzNIOTE1LjgybC05LDI2LjI0SDg2NC45NGw1Ny41LTE1MS4wNWg0Mi44N2w1Ny41LDE1MS4wNUg5ODAuOTNaTTk2MS41LDc1MC40OCw5NDMuODcsNzAwLjJsLTE3LjYzLDUwLjI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQyMCAtMjcwLjEpIi8+PHBhdGgKICAgIGNsYXNzPSJjbHMtMSIKICAgIGQ9Ik0xMTY1LjY0LDgwNi41OGgtNDguODhsLTM3LjQ2LTU4LjF2NTguMUgxMDQwVjY1NS41Mmg2MS4xYTYwLDYwLDAsMCwxLDIyLDMuNzEsNDEuNDgsNDEuNDgsMCwwLDEsMjQuNzQsMjQuOTQsNTEuNjYsNTEuNjYsMCwwLDEsMy4xMSwxOHEwLDE3LjIzLTguMzEsMjcuOTV0LTI0LjU0LDE0LjUyWk0xMDc5LjI5LDcyM2g3LjQxcTExLjYyLDAsMTcuODMtNC44MXQ2LjIxLTEzLjgycTAtOS02LjIxLTEzLjgzdC0xNy44My00LjgxaC03LjQxWiIKICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MjAgLTI3MC4xKSIvPjxwYXRoCiAgICBjbGFzcz0iY2xzLTEiCiAgICBkPSJNMTE4Mi4wNyw2NTUuNTJoNTguMWE2OC41NSw2OC41NSwwLDAsMSwyOC45NSw2LjIxLDc4LjkxLDc4LjkxLDAsMCwxLDIzLjY0LDE2LjUzLDc2Ljc4LDc2Ljc4LDAsMCwxLDE1LjkzLDI0LDc0LjEyLDc0LjEyLDAsMCwxLC4xLDU3LjNBNzYuNDQsNzYuNDQsMCwwLDEsMTI5Myw3ODMuNzRhNzgsNzgsMCwwLDEtMjMuNjQsMTYuNjMsNjksNjksMCwwLDEtMjkuMTUsNi4yMWgtNTguMVptMzkuMjYsMTE3LjhoOWE0OC43OCw0OC43OCwwLDAsMCwxOC4yMy0zLjIsMzguOTMsMzguOTMsMCwwLDAsMTMuNTItOC44MiwzNy43NCwzNy43NCwwLDAsMCw4LjQxLTEzLjMyLDQ3LjcxLDQ3LjcxLDAsMCwwLDIuOS0xNi45Myw0Ni41LDQ2LjUsMCwwLDAtMy0xNi44MywzNy43NCwzNy43NCwwLDAsMC0yMi0yMi4yNCw0OC4yMSw0OC4yMSwwLDAsMC0xOC0zLjIxaC05WiIKICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MjAgLTI3MC4xKSIvPjxwYXRoCiAgICBjbGFzcz0iY2xzLTEiCiAgICBkPSJNMTMzMi43Miw3MzEuMDVhNzcuODMsNzcuODMsMCwwLDEsNDkuNzgtNzMuNjIsOTYsOTYsMCwwLDEsNjcuNDEsMCw3OS41OSw3OS41OSwwLDAsMSwyNi41NCwxNi45Myw3Ny40OCw3Ny40OCwwLDAsMSwxNy4zMywyNS4zNCw4Mi4yMyw4Mi4yMywwLDAsMSwwLDYyLjcxLDc3LjQ5LDc3LjQ5LDAsMCwxLTE3LjMzLDI1LjM0LDc5LjYzLDc5LjYzLDAsMCwxLTI2LjU0LDE2LjkzLDk2LjA2LDk2LjA2LDAsMCwxLTY3LjQxLDAsNzguMTIsNzguMTIsMCwwLDEtNDkuNzgtNzMuNjJabTQxLjA3LDBhNDAuMjMsNDAuMjMsMCwwLDAsMy40LDE2LjYzLDQxLjU5LDQxLjU5LDAsMCwwLDIyLjc0LDIxLjk0LDQzLjcsNDMuNywwLDAsMCw0Ni4yOC04LjcxLDQxLjI0LDQxLjI0LDAsMCwwLDkuMzEtMTMuMjIsNDIuMzEsNDIuMzEsMCwwLDAsMC0zMy4yNiw0MS4zNiw0MS4zNiwwLDAsMC05LjMxLTEzLjIyLDQ0LjA1LDQ0LjA1LDAsMCwwLTQ2LjI4LTguNzEsNDEuNTksNDEuNTksMCwwLDAtMjIuNzQsMjEuOTRBNDAuMjUsNDAuMjUsMCwwLDAsMTM3My43OSw3MzEuMDVaIgogICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQyMCAtMjcwLjEpIi8+PGNpcmNsZSBjbGFzcz0iY2xzLTIiIGN4PSI1NDAiIGN5PSIxNjguMjEiIHI9IjE2OC4yMSIvPgogIDxnIGNsYXNzPSJjbHMtMyI+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNOTYwLDI3MC4xYTE2Ny42OCwxNjcuNjgsMCwwLDAtMTE4Ljk0LDQ5LjI3bDIzNy44OCwyMzcuODhBMTY4LjIxLDE2OC4yMSwwLDAsMCw5NjAsMjcwLjFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDIwIC0yNzAuMSkiLz48L2c+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNOTc1LjcxLDM1NnMtMTYuNDctMTEuMjItMTcuMDctMjguMjZjLS43NCwxNy0xNy4yOSwyOC4xMy0xNy4yOSwyOC4xM2E1NS41NCw1NS41NCwwLDAsMSwxNywzNy4zN0E1NS41NCw1NS41NCwwLDAsMSw5NzUuNzEsMzU2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQyMCAtMjcwLjEpIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNOTY0LjYxLDQ3NS41OWwtMTcuMTQsMzYuOUg5MjcuODVMODgwLDQwOC44NWgyOS44NWwyOS4zLDYzLjQzLDE5Ljc2LTQzLjEyaDExLjQ3bDE5Ljc2LDQzLjEyLDI5LjQ0LTYzLjQzaDI5Ljg1bC00OCwxMDMuNjRIOTgxLjg5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQyMCAtMjcwLjEpIi8+PHBhdGggY2xhc3M9ImNscy01IiBkPSJNOTY5LjE2LDM1NnMtMTYuNDctMTEuMjItMTcuMDctMjguMjZjLS43NCwxNy0xNy4yOSwyOC4xMy0xNy4yOSwyOC4xM2E1NS41NCw1NS41NCwwLDAsMSwxNywzNy4zN0E1NS41NCw1NS41NCwwLDAsMSw5NjkuMTYsMzU2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQyMCAtMjcwLjEpIi8+PHBhdGggY2xhc3M9ImNscy02IiBkPSJNOTU1LjExLDQ3NS41OSw5MzgsNTEyLjQ5SDkxOC4zNUw4NzAuNTQsNDA4Ljg1aDI5Ljg1bDI5LjMsNjMuNDMsMTkuNzYtNDMuMTJoMTEuNDdsMTkuNzYsNDMuMTIsMjkuNDQtNjMuNDNIMTA0MEw5OTIsNTEyLjQ5SDk3Mi4zOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MjAgLTI3MC4xKSIvPjxwYXRoIGNsYXNzPSJjbHMtNyIgZD0iTTkwNC42OCw0MDkuMjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MjAgLTI3MC4xKSIvPjwvc3ZnPgo="

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _antd = __webpack_require__(2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubMenu = _antd.Menu.SubMenu,
    Item = _antd.Menu.Item;

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _antd.Menu,
        {
          defaultSelectedKeys: ['1'],
          defaultOpenKeys: ['sub1'],
          mode: 'inline',
          theme: 'dark'
        },
        _react2.default.createElement(
          _antd.Menu.Item,
          { key: '1' },
          ' ',
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '/' },
            'Home'
          ),
          ' '
        ),
        _react2.default.createElement(
          SubMenu,
          { key: 'sub1', title: _react2.default.createElement(
              _reactStatic.Link,
              { to: '/guides' },
              'Guides'
            ) },
          _react2.default.createElement(
            SubMenu,
            { key: 'g1', title: _react2.default.createElement(
                _reactStatic.Link,
                { to: '/guides#first-steps' },
                'First steps      '
              ) },
            _react2.default.createElement(
              Item,
              { key: 'gg11' },
              ' ',
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/guides#first-steps-installation' },
                'Installation'
              ),
              ' '
            ),
            _react2.default.createElement(
              Item,
              { key: 'gg12' },
              ' ',
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/guides#first-steps-init' },
                'Wizardo Init'
              ),
              ' '
            ),
            _react2.default.createElement(
              Item,
              { key: 'gg13' },
              ' ',
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/guides#first-steps-about-git' },
                'About Git & Wizardo'
              ),
              ' '
            ),
            _react2.default.createElement(
              Item,
              { key: 'gg14' },
              ' ',
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/guides#first-steps-cant-find-wizardo' },
                'Can\'t find .wizardo'
              ),
              ' '
            )
          ),
          _react2.default.createElement(
            SubMenu,
            { key: 'g2', title: _react2.default.createElement(
                _reactStatic.Link,
                { to: '/guides#generators' },
                'Create a generator'
              ) },
            _react2.default.createElement(
              Item,
              { key: 'gg21' },
              ' ',
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/guides#generators-setup' },
                'Setup'
              ),
              ' '
            ),
            _react2.default.createElement(
              Item,
              { key: 'gg22' },
              ' ',
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/guides#generators-create-command' },
                'Create command'
              ),
              ' '
            ),
            _react2.default.createElement(
              Item,
              { key: 'gg23' },
              ' ',
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/guides#generators-list-command' },
                'List command'
              ),
              ' '
            )
          ),
          _react2.default.createElement(
            SubMenu,
            { key: 'g3', title: _react2.default.createElement(
                _reactStatic.Link,
                { to: '/guides#templates' },
                'Templates'
              ) },
            _react2.default.createElement(
              Item,
              { key: 'gg31' },
              ' ',
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/guides#templates-folder' },
                'Templates Folder'
              ),
              ' '
            ),
            _react2.default.createElement(
              Item,
              { key: 'gg32' },
              ' ',
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/guides#templates-structure-in-config' },
                'Templates structure in config file'
              ),
              ' '
            ),
            _react2.default.createElement(
              Item,
              { key: 'gg33' },
              ' ',
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/guides#templates-run-generator' },
                'Run generator '
              ),
              ' '
            )
          ),
          _react2.default.createElement(
            SubMenu,
            { key: 'g4', title: _react2.default.createElement(
                _reactStatic.Link,
                { to: '/guides#variables' },
                'Variables'
              ) },
            _react2.default.createElement(
              Item,
              { key: 'gg41' },
              ' ',
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/guides#variables-types' },
                'Variable types'
              ),
              ' '
            ),
            _react2.default.createElement(
              Item,
              { key: 'gg42' },
              ' ',
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/guides#variables-in-config' },
                'Variables in config'
              ),
              ' '
            ),
            _react2.default.createElement(
              Item,
              { key: 'gg43' },
              ' ',
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/guides#variables-run-generator' },
                'Run generator '
              ),
              ' '
            ),
            _react2.default.createElement(
              Item,
              { key: 'gg44' },
              ' ',
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/guides#variables-in-templates' },
                'Variables in templates '
              ),
              ' '
            ),
            _react2.default.createElement(
              Item,
              { key: 'gg45' },
              ' ',
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/guides#variables-limitations' },
                'Limitations and workaround'
              ),
              ' '
            )
          ),
          _react2.default.createElement(
            SubMenu,
            { key: 'g5', title: _react2.default.createElement(
                _reactStatic.Link,
                { to: '/guides#modifiers' },
                'Modifiers'
              ) },
            _react2.default.createElement(
              Item,
              { key: 'gg51' },
              ' ',
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/guides#modifiers-structure' },
                'Modifiers structure'
              ),
              ' '
            ),
            _react2.default.createElement(
              Item,
              { key: 'gg52' },
              ' ',
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/guides#modifiers-use' },
                'Use modifiers'
              ),
              ' '
            ),
            _react2.default.createElement(
              Item,
              { key: 'gg53' },
              ' ',
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/guides#modifiers-execute' },
                'Execute modifiers '
              ),
              ' '
            ),
            _react2.default.createElement(
              Item,
              { key: 'gg54' },
              ' ',
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/guides#modifiers-warning' },
                'Warning on modifiers'
              ),
              ' '
            )
          )
        ),
        _react2.default.createElement(
          _antd.Menu.Item,
          { key: '4' },
          ' ',
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '/contribute' },
            'Contribute'
          ),
          ' '
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;


{/*
       <MenuItemGroup key='7'  title={<Link to='/guides#variables'>Variables          </Link>} >
         <Menu.Item key='4'> <Link to='/contribute'>Contribute</Link> </Menu.Item>
       </MenuItemGroup>
       <MenuItemGroup key='9'  title={<Link to='/guides#modifiers'>Modifiers          </Link>} >
         <Menu.Item key='4'> <Link to='/contribute'>Contribute</Link> </Menu.Item>
       </MenuItemGroup>
  */}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuIcon = function MenuIcon(props) {
  var isMenuHide = props.isMenuHide,
      onClick = props.onClick;


  return _react2.default.createElement(
    "section",
    { id: "menu-icon", onClick: onClick },
    _react2.default.createElement("div", { className: "line " + (!isMenuHide && "js-rotate-1") }),
    _react2.default.createElement("div", { className: "line " + (!isMenuHide && "js-opacity") }),
    _react2.default.createElement("div", { className: "line " + (!isMenuHide && "js-rotate-2") })
  );
};

exports.default = MenuIcon;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjI3Ljc3IDI0OCI+CiAgPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KICAgIC5jbHMtMSB7CiAgICAgIGZpbGw6ICMxNTBhZjI7CiAgICB9CiAgICAuY2xzLTIgewogICAgICBvcGFjaXR5OiAwLjQ7CiAgICB9CiAgICAuY2xzLTMgewogICAgICBmaWxsOiAjMGUwZTliOwogICAgfQogICAgLmNscy00IHsKICAgICAgZmlsbDogI2YyZDgyMDsKICAgIH0KICAgIC5jbHMtNSB7CiAgICAgIGZpbGw6ICNmZmY7CiAgICB9CiAgICAuY2xzLTYgewogICAgICBmaWxsOiAjNDMwZThlOwogICAgfQogICAgLmNscy03IHsKICAgICAgZmlsbDogIzQ0NDsKICAgIH0KICA8L3N0eWxlPgogIDxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iMTI0IiBjeT0iMTI0IiByPSIxMjQiLz4KICA8ZyBjbGFzcz0iY2xzLTIiPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTQ3MC4xMSw0MTZhMTIzLjYxLDEyMy42MSwwLDAsMC04Ny42OCwzNi4zMkw1NTcuOCw2MjcuNjhBMTI0LDEyNCwwLDAsMCw0NzAuMTEsNDE2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0Ni4xMSAtNDE2KSIvPjwvZz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik00ODEuNjksNDc5LjMycy0xMi4xNC04LjI3LTEyLjU5LTIwLjgzYy0uNTQsMTIuNTYtMTIuNzUsMjAuNzQtMTIuNzUsMjAuNzRhNDEsNDEsMCwwLDEsMTIuNTYsMjcuNTVBNDEsNDEsMCwwLDEsNDgxLjY5LDQ3OS4zMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNDYuMTEgLTQxNikiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik00NzMuNTEsNTY3LjQ5bC0xMi42MywyNy4ySDQ0Ni40MmwtMzUuMjUtNzYuNDFoMjJMNDU0Ljc3LDU2NWwxNC41Ny0zMS43OWg4LjQ2TDQ5Mi4zNiw1NjVsMjEuNy00Ni43NmgyMmwtMzUuMzUsNzYuNDFINDg2LjI1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0Ni4xMSAtNDE2KSIvPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTQ3Ni44Nyw0NzkuMzJzLTEyLjE0LTguMjctMTIuNTktMjAuODNjLS41NCwxMi41Ni0xMi43NSwyMC43NC0xMi43NSwyMC43NGE0MSw0MSwwLDAsMSwxMi41NiwyNy41NUE0MSw0MSwwLDAsMSw0NzYuODcsNDc5LjMyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0Ni4xMSAtNDE2KSIvPjxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTQ2Ni41MSw1NjcuNDlsLTEyLjYzLDI3LjJINDM5LjQxbC0zNS4yNS03Ni40MWgyMkw0NDcuNzcsNTY1bDE0LjU3LTMxLjc5aDguNDZMNDg1LjM2LDU2NWwyMS43LTQ2Ljc2aDIybC0zNS4zNSw3Ni40MUg0NzkuMjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzQ2LjExIC00MTYpIi8+PHBhdGggY2xhc3M9ImNscy02IiBkPSJNNDI5LjMzLDUxOC41OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0Ni4xMSAtNDE2KSIvPjxwYXRoIGNsYXNzPSJjbHMtNyIgZD0iTTY4NC40Niw0ODAuMzRsMjIuMyw4My41MiwyNy40NC04My41Mkg3NjFsMjcuNDQsODMuNTIsMjIuMy04My41MmgzNS4xNkw4MDcuMjYsNjA5LjY2SDc3M2wtMjUuMzgtNzQuOTUtMjUuMzgsNzQuOTVoLTM0LjNMNjQ5LjMsNDgwLjM0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0Ni4xMSAtNDE2KSIvPjxwYXRoIGNsYXNzPSJjbHMtNyIgZD0iTTg5Myw0ODAuMzRWNjA5LjY2SDg1OS40VjQ4MC4zNFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNDYuMTEgLTQxNikiLz48cGF0aCBjbGFzcz0iY2xzLTciIGQ9Ik05NjUuNTYsNTgxLjE5aDU0LjJ2MjguNDdIOTA5LjEzbDYxLjIzLTEwMC44NUg5MTkuNDJWNDgwLjM0aDEwN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNDYuMTEgLTQxNikiLz48cGF0aCBjbGFzcz0iY2xzLTciIGQ9Ik0xMTIxLjgsNTg3LjE5aC00OGwtNy43MiwyMi40N2gtMzUuODRsNDkuMjItMTI5LjMyaDM2LjdsNDkuMjIsMTI5LjMyaC0zNS44NFptLTguOTItMjUuNTYtMTUuMDktNDMtMTUuMDksNDNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzQ2LjExIC00MTYpIi8+PHBhdGgKICAgIGNsYXNzPSJjbHMtNyIKICAgIGQ9Ik0xMjg3LjY0LDYwOS42NmgtNDEuODVsLTMyLjA3LTQ5Ljc0djQ5Ljc0aC0zMy42MVY0ODAuMzRoNTIuMzFhNTEuMzcsNTEuMzcsMCwwLDEsMTguODcsMy4xNywzNS41MSwzNS41MSwwLDAsMSwyMS4xOCwyMS4zNSw0NC4yMyw0NC4yMywwLDAsMSwyLjY2LDE1LjQ0cTAsMTQuNzUtNy4xMiwyMy45MnQtMjEsMTIuNDNabS03My45Mi03MS41Mmg2LjM1cTkuOTQsMCwxNS4yNi00LjEydDUuMzItMTEuODNxMC03LjcyLTUuMzItMTEuODR0LTE1LjI2LTQuMTJoLTYuMzVaIgogICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0Ni4xMSAtNDE2KSIvPjxwYXRoCiAgICBjbGFzcz0iY2xzLTciCiAgICBkPSJNMTMwMS43MSw0ODAuMzRoNDkuNzRhNTguNjksNTguNjksMCwwLDEsMjQuNzgsNS4zMiw2Ny41NSw2Ny41NSwwLDAsMSwyMC4yNCwxNC4xNSw2NS43Myw2NS43MywwLDAsMSwxMy42NCwyMC41OCw2My40NSw2My40NSwwLDAsMSwuMDgsNDkuMDUsNjUuNDQsNjUuNDQsMCwwLDEtMTMuNTUsMjAuNjcsNjYuNzcsNjYuNzcsMCwwLDEtMjAuMjQsMTQuMjMsNTksNTksMCwwLDEtMjUsNS4zMmgtNDkuNzRabTMzLjYxLDEwMC44NUgxMzQzYTQxLjc2LDQxLjc2LDAsMCwwLDE1LjYxLTIuNzQsMzMuMzMsMzMuMzMsMCwwLDAsMTEuNTgtNy41NSwzMi4zMSwzMi4zMSwwLDAsMCw3LjItMTEuNCw0MC44NCw0MC44NCwwLDAsMCwyLjQ5LTE0LjQ5LDM5LjgxLDM5LjgxLDAsMCwwLTIuNTctMTQuNDEsMzIuMzEsMzIuMzEsMCwwLDAtMTguODctMTksNDEuMjcsNDEuMjcsMCwwLDAtMTUuNDMtMi43NGgtNy43MloiCiAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzQ2LjExIC00MTYpIi8+PHBhdGgKICAgIGNsYXNzPSJjbHMtNyIKICAgIGQ9Ik0xNDMwLjY4LDU0NWE2Ni42Myw2Ni42MywwLDAsMSw0Mi42Mi02Myw4Mi4yLDgyLjIsMCwwLDEsNTcuNzEsMCw2OC4xNCw2OC4xNCwwLDAsMSwyMi43MiwxNC40OSw2Ni4zMyw2Ni4zMywwLDAsMSwxNC44MywyMS42OSw3MC40LDcwLjQsMCwwLDEsMCw1My42OCw2Ni4zNCw2Ni4zNCwwLDAsMS0xNC44MywyMS43QTY4LjE3LDY4LjE3LDAsMCwxLDE1MzEsNjA4YTgyLjIzLDgyLjIzLDAsMCwxLTU3LjcxLDAsNjYuODgsNjYuODgsMCwwLDEtNDIuNjItNjNabTM1LjE2LDBhMzQuNDQsMzQuNDQsMCwwLDAsMi45MSwxNC4yM0EzNS42MSwzNS42MSwwLDAsMCwxNDg4LjIyLDU3OGEzNy40MSwzNy40MSwwLDAsMCwzOS42Mi03LjQ2LDM1LjMxLDM1LjMxLDAsMCwwLDgtMTEuMzIsMzYuMjIsMzYuMjIsMCwwLDAsMC0yOC40NywzNS40MSwzNS40MSwwLDAsMC04LTExLjMyLDM3LjcxLDM3LjcxLDAsMCwwLTM5LjYyLTcuNDYsMzUuNjEsMzUuNjEsMCwwLDAtMTkuNDcsMTguNzhBMzQuNDYsMzQuNDYsMCwwLDAsMTQ2NS44NCw1NDVaIgogICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0Ni4xMSAtNDE2KSIvPgogIDwvc3ZnPgo="

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("antd/dist/antd.css");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "body{font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;font-weight:300;font-size:16px;margin:0;padding:0}pre{font-family:monospace;border-radius:5px;font-size:.8em}h1,h2,h3,h4,h5,h6{color:#444}img{max-width:100%}strong{font-weight:700}section{padding:50px;font-size:1.2em;line-height:1.7}section p{margin:20px 60px 0 30px}section h1{font-weight:700;font-size:2em}section h2{font-weight:700;font-size:1.2em;margin:15px}section h3{font-weight:700;font-size:1.1em;margin:30px 0 0 30px}section pre{margin:30px}span code{border:1px solid #dedede;border-radius:5px;background:#ececec;padding:4px;font-size:.7em}.maxWidthContainer{max-width:1000px;margin:0 auto}.content{padding:1rem}.logo{padding:16px;background:#f0f2f4}.jumbotron{-ms-flex-direction:column;flex-direction:column;padding:40px;position:relative;text-align:center;-webkit-box-shadow:0 0 5px 0 rgba(0,0,0,.75);box-shadow:0 0 5px 0 rgba(0,0,0,.75)}.installation,.jumbotron{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.installation{background:#dcdcdc;height:300px;padding:50px;-ms-flex-pack:center;justify-content:center}.installation .anticon{font-size:100px}.installation .code-snippet{width:100%;padding:25px;background:#f0f2f4;display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;max-width:1000px;-webkit-box-shadow:0 0 5px 0 rgba(0,0,0,.75);box-shadow:0 0 5px 0 rgba(0,0,0,.75)}.installation pre{font-family:monospace;height:100px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:0 0 0 50px;font-size:1.25em}.ant-layout-header{height:77px}.ant-layout-header h1{color:#fff;font-size:2.5em;line-height:2em}.ant-menu-item-group-list .ant-menu-item a{padding-left:20px}#menu-icon{display:none;position:absolute;top:20px;right:25px;width:35px;padding:0;cursor:pointer;z-index:100}#menu-icon .line{width:35px;height:4px;margin:6.5px 0;background:#00008b;border-radius:1.5px;opacity:1;-webkit-transition-duration:.7s;-o-transition-duration:.7s;transition-duration:.7s;-webkit-transition-timing-function:ease-in-out;-o-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;-o-transition-property:opacity,transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}#menu-icon .js-rotate-1{-webkit-transform:rotate(-45deg) translate(-7.3px,6.5px);-ms-transform:rotate(-45deg) translate(-7.3px,6.5px);transform:rotate(-45deg) translate(-7.3px,6.5px)}#menu-icon .js-rotate-2{-webkit-transform:rotate(45deg) translate(-7.3px,-6.5px);-ms-transform:rotate(45deg) translate(-7.3px,-6.5px);transform:rotate(45deg) translate(-7.3px,-6.5px)}#menu-icon .js-opacity{opacity:0}.sider{height:100%;overflow-y:scroll;position:fixed;left:0;-webkit-transition:left .7s ease-in-out;-o-transition:left ease-in-out .7s;transition:left .7s ease-in-out;z-index:99}.sider::-webkit-scrollbar{width:8px;background-color:#fff}.sider::-webkit-scrollbar-track{border-radius:8px;background-color:#d1d1d1}.sider::-webkit-scrollbar-thumb{border-radius:8px;background-color:#6d6e71}.layout{margin-left:250px;-webkit-transition:margin .7s ease-in-out;-o-transition:margin ease-in-out .7s;transition:margin .7s ease-in-out}@media (max-width:885px){.sider{left:-100%}.js-sider,.js-sider-left{left:0}.layout{margin-left:0}#menu-icon{display:block}.installation i{display:none}.installation pre{margin-left:10px}}", ""]);

// exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, ".hljs{display:block;overflow-x:auto;padding:.5em;color:#abb2bf;background:#282c34}.hljs-comment,.hljs-quote{color:#5c6370;font-style:italic}.hljs-doctag,.hljs-formula,.hljs-keyword{color:#c678dd}.hljs-deletion,.hljs-name,.hljs-section,.hljs-selector-tag,.hljs-subst{color:#e06c75}.hljs-literal{color:#56b6c2}.hljs-addition,.hljs-attribute,.hljs-meta-string,.hljs-regexp,.hljs-string{color:#98c379}.hljs-built_in,.hljs-class .hljs-title{color:#e6c07b}.hljs-attr,.hljs-number,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-pseudo,.hljs-template-variable,.hljs-type,.hljs-variable{color:#d19a66}.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-symbol,.hljs-title{color:#61aeee}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-link{text-decoration:underline}", ""]);

// exports


/***/ })
/******/ ]);
});
//# sourceMappingURL=static.bdbc1315.js.map