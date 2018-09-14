import { magenta, yellow, green, red} from 'chalk';
import { version as v} from '../package.json';
let fs     = require('fs');

const cp = (src, target, callback) => {
  fs.readFile(src, 'utf8', function (err,data) {
      if (err) return console.log(err);

      let result = callback(data);

      fs.writeFile(target, result, 'utf8', function (err) {
            if (err) return console.log(err);
          });

      if (src === target) log.modify(target);
      else log.file(target);
    });
}

const rplc_mod = (name, placeholder) => {
  let ans = placeholder;
  if (ans.indexOf("<%=module_name%>") !== -1) {
      ans = ans.replace(/<%=module_name%>/gi, name);
    }
    if (ans.indexOf("__module_name__") !== -1) {
          ans = ans.replace(/__module_name__/gi, name);
        }
    if (ans.indexOf("__ModuleName__") !== -1) {
          let classed = name.split("_").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join("");
          ans = ans.replace(/__ModuleName__/gi, classed);
        }
    return ans;
};

const rplc_view = (name, placeholder) => {
  let ans = placeholder;
  if (ans.indexOf("__view_name__") !== -1) {
      ans = ans.replace(/__view_name__/gi, name);
    }
    if (ans.indexOf("__ViewName__") !== -1) {
          let classed = name.split("_").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join("");
          ans = ans.replace(/__ViewName__/gi, classed);
        }
    return ans;
};

const insert_code = (complete_text, text_to_insert, insert_after) => {
  let prefix = insert_after;

  if (typeof insert_after === "object") {
      prefix = insert_after.exec(complete_text)[0];
    }
    let ans = complete_text.replace(prefix, `${prefix}${text_to_insert}`);
    return ans;
}

const verify_module_exists = (mod_name) => {
  let modules = get_existing_modules();
  return modules.reduce((acc, el) => ((mod_name === el) || acc), false);
}

const view_already_exists = (mod_name, view_name) => {
  let vn = rplc_view(view_name, "__ViewName__");
  let views = get_existing_views(mod_name);
  return views.reduce((acc, el) => ((`${vn}.js` === el) || acc), false);
}

const get_existing_modules = () => {
  return fs.readdirSync('assets/client/').filter(e => e !== 'common' && e !== 'general');
}

const get_existing_views = (mod_name) => {
  let views = fs.readdirSync(`assets/client/${mod_name}/scripts/`).filter(
    e => e.endsWith(".js") && e !== 'configureStore.js' && e !== rplc_mod(mod_name, 'Root__ModuleName__.js')
  );
  return views;
}

const possible_files = [ ".css", ".scss", ".js", ".ex", ".exs", ".eex" ];
const isFile = (path) => possible_files.reduce((acc, el) => (path.endsWith(el) || acc), false);


const { readdirSync, statSync } = require('fs');
const { join } = require('path');

const getFolders = (path=".") =>
  readdirSync(path).filter(f => statSync(join(path, f)).isDirectory());

const wizardoFolderExists = () => getFolders().includes(".wizardo");

const getFiles = (path_to_folder=".") => {
  return readdirSync(path_to_folder)
    .filter(f => statSync(join(path_to_folder, f)).isFile());
};

const getGenerators = () => {
  return getFiles(".wizardo/")
    .filter(f => f.endsWith('config.json'))
    .map(f => f.replace('.config.json', ''));
};

const log = {
  folder: (path) => console.log(yellow(`  create: ${path}`)),
  modify: (file) => console.log(magenta(`  modify: ${file}`)),
  file: (file) => console.log(green(`  create: ${file}`)),
  command: (cmd) => console.log(magenta(`Wizardo ${v}: ${cmd}`)),
  danger: (msg) => console.log(red(` - ${msg}`)),
  msg: console.log
};

module.exports = {
  cp: cp,
  getGenerators: getGenerators,
  get_existing_modules: get_existing_modules,
  get_existing_views: get_existing_views,
  insert_code: insert_code,
  isFile: isFile,
  log: log,
  rplc_mod: rplc_mod,
  rplc_view: rplc_view,
  verify_module_exists: verify_module_exists,
  view_already_exists: view_already_exists,
  wizardoFolderExists: wizardoFolderExists
};


/* *
 * Useful links
 *
 * https://medium.com/zenkit/a-beginners-guide-to-getting-things-done-3cc1a5123b98
 * https://developer.atlassian.com/blog/2015/11/scripting-with-node/
 * https://docs.npmjs.com/cli/link
 * https://nodejs.org/api/fs.html#fs_class_fs_stats
 *
 * */
