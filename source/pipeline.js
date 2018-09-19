/* stage 1 - checkConfigFile - Check if config file exists
 * stage 2 - gitIsClean - Check that git is empty
 * stage 3 - Prompt for variables
 * stage 4 - Generate needed folders
 * stage 5 - Copy templates & Replace variables in created templates
 * stage 6 - Modify existing files
 **/

/* PIPELINE - stage 1
 * Ask for config file
 *
 * 1. Look for .wizardo folder
 * 2. Find <generator>.config.json
 *
 **/

import { getFolders, getFiles, log} from './utils';

import { getGenerators, wizardoFolderExists } from './utils';

const checkConfigFile = generator => {
  if (!wizardoFolderExists()) {
    log.danger('A Wizardo project was not found in the current directory');
    log.msg('   + Run `wizardo init` to create a wizardo project');
    process.exit(1);
  } else {
    let generators = getGenerators();
    if (generators.length <= 0) {
      log.danger(`There are no generators in this Wizardo project, so \`${generator}.config.json\` was not found`);
      log.msg('   + Run `wizardo create <generator_name>` to create a new generator');
      process.exit(1);
    } else if (!getGenerators().includes(generator)) {
      log.danger(`Config file ${generator}.config.json was not found`);
      log.msg('   + The available generators are:');
      log.msg(getGenerators().reduce((acc, f) => `${acc}   - ${f}\n`, ''));
      process.exit(1);
    } else return true;
  }
};


/* PIPELINE - stage 2
 * Verify it is working on a clean git repo
 *
 * Git needs to be clean, so a rollback can be done easily
 *
 **/

import { spawnSync } from 'child_process';

const gitIsClean = () => {
  let response = false;

  if (!getFolders().includes('.git')) {
    log.danger(`Wizardo is tightly coupled with git. It seems that you don't have a git repo initialized in this directory.`)
    log.msg('   + Create a git repo and commit all your changes before running a generator')
    process.exit(1);
  }

  let uncommitted = spawnSync('git', ['status', '--porcelain'])
    .stdout
    .toString('utf8')
    .split('\n');
  if (uncommitted != "") {
    log.danger(`You have uncommitted files in this repo.`)
    uncommitted.forEach(e => {if (e != '') log.danger(`\b\b  ${e}`)});
    log.msg('   + Please, commit your changes before running a generator');
    process.exit(1);
  } else {
    return true;
  }
}

/* PIPELINE - stage 3
 * Prompt for script variables. For example:
 *    Insert module_name >
 *
 * 1. Look for variable names inside folder/file names
 * 2. Look for variable names in content of templates
 * 3. Once we have all variable_names, we need to scanf them
 *    - Verify that names are in snake_case and contains only valid characters
 *    - Break if inserted variable_name is already taken. For example:
 *      Suppose say our generator create components into the path
 *        client/assets/components/<%=component%>.js.
 *
 *        Let say that the user inserts `app`:
 *        Insert component > app
 *
 *        But client/assets/components/* contains:
 *          - app.js
 *          - container.js
 *          - button.js
 *          - headline.js
 *
 *        The Pipeline should break at this point, because the component
 *        provided already exists
 *
 **/

import { readFileSync } from 'fs.extra';
import { join } from 'path';
const prompt = require('prompt-sync')();

const promptForVariables = generator => {
  // TODO: extract variables inside templates
  let gen_text = readFileSync(join('.wizardo', `${generator}.config.json`), 'utf8');

  let var_keys = [];
  let simpleMatch = gen_text.match(/<%=(\w+)=%>/g);
  let underscoreMatch = gen_text.match(/___(\w+)___/g);

  if (simpleMatch) {
    var_keys.push(...simpleMatch.map(e =>
      e
      .replace('<%=','')
      .replace('=%>', '')
    ));
  }
  if (underscoreMatch) {
    var_keys.push(...underscoreMatch.map(e =>
      e.replace(/___/g,'')
    ));
  }

  let vars = {};
  log.msg('   * Enter the value for the following variables in your config file')
  for (let k of var_keys) {
    vars[k] = prompt(` ${k}: `);
  }

  return vars;
}

/* PIPELINE - stage 4
 * Given config file paths, generate all necessary paths
 * Paths to files may or may not exist. Create all necessary paths.
 *
 * 1. Get all paths from config file
 * 2. Iterate over them verifying their existance
 * 3. Create the path if it does not exist.
 *    Path creation should replace variable names inside paths. For example:
 *
 *      client/assets/<%=ModuleName%>/index.js
 *      The path client/assets/<%=ModuleName%>/ does not exist.
 *      Supposing the user wants to create the module payment, then the path
 *      client/assets/Payment/ should be created at this stage.
 *
 **/



/* PIPELINE - stage 5
 * Given configfile files with their respective templates, generate all files
 * and replace all variable names.
 *
 * 1. Get all paths from config file
 * 2. Iterate over them creating the files and inserting content of templates
 * 3. Go inside of recently created file and replace variable names
 *
 **/

import config from './wizgenerator.config.json';
const stage5 = (generator_name, vars) => {
  const create_view = (mod_name, view_name) => {

    // get destinations
    // for each
    //   generate the needed path
    //   copy template & replace variables

    for (let i = 0; i < dirs.length; i++){
      let dir = h.rplc_mod(mod_name, dirs[i]);
      dir = h.rplc_view(view_name, dir);

      if(h.isFile(dir)){
        let src = "scripts/generators/templates/view/" + dirs[i].split("/").pop();

        h.cp(src, dir, function(data) {
          let result = h.rplc_view(view_name, data);
          return result;
        });
      } else {
        try {
          fs.mkdirSync(dir)
          h.print_create_path(dir);
        } catch(e) {
          throw e;
        }
      }
    }
  }
  return true;
}


/* PIPELINE - stage 6
 * Modify existing files
 *
 * Sometimes existing files need to be modified to reflect our newly created
 * files. For example importing the new component, or adding the respective route
 *
 * This is the stage that execute modifications defined in the configfile
 *
 * Steps to be defined
 *
 **/

module.exports = { stage5, checkConfigFile, gitIsClean, promptForVariables };
