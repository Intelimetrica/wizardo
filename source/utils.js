import { magenta, yellow, green, red} from 'chalk';
import {
  readFile,
  readFileSync,
  readdirSync,
  statSync,
  writeFile,
} from 'fs.extra';

import { version } from '../package.json';
import { join } from 'path';
import { snakeToCamelCase } from 'botas';

const copy = (src, target, callback) => {
  readFile(src, 'utf8', function (err,data) {
    if (err) return log.danger(err);

    let result = callback(data);

    writeFile(target, result, 'utf8', function (err) {
      if (err) { return log.danger(err); }
    });

    if (src === target) log.modify(target);
    else log.file(target);
  });
}

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

const replaceVariables = (text, variables) => {
  let ans = text;
  const var_keys = Object.keys(variables);

  if (var_keys.length > 0) {
    var_keys.forEach(key => {
      let value = variables[key];
      if (ans.includes(`<%=${key}=%>`)) {
        ans = ans.replace(RegExp(`<%=${key}=%>`,'gi'), value);
      }
      if (ans.includes(`___${key}___`)) {
        ans = ans.replace(RegExp(`___${key}___`,'gi'), value);
      }
      const key_pascal = snakeToCamelCase(key, true);
      if (ans.includes(`___${key_pascal}___`)) {
        ans = ans.replace(RegExp(`___${key_pascal}___`,'gi'), snakeToCamelCase(value, true));
      }
    });
  }

  return ans;
};

const parseGenerator = (generator, vars) => {
  let gen_text = readFileSync(join('.wizardo', `${generator}.config.json`), 'utf8');

  let json = JSON.parse(gen_text);
  for (let template of json.templates) {
    template['file_name'] = replaceVariables(template.source_template, vars);
    template['final_destination'] = replaceVariables(template.destination, vars);
  }
  for (let modifier of json.modifiers) {
    modifier['regex'] = replaceVariables(modifier["regex"], vars);
    modifier['text_to_insert'] = replaceVariables(modifier["text_to_insert"], vars);
  }

  return json;
}

const insertCode = (complete_text, text_to_insert, regex) => {
  const rgx = RegExp(regex);
  const prefix = rgx.exec(complete_text)[0];
  return complete_text.replace(prefix, `${prefix}${text_to_insert}`);
}

const pascalToSnakeCase = str => {
  if (str.match(/[A-Z]/)) {
    str = str.replace(/([A-Z])/g, "_$1").replace(/_/,'').toLowerCase();
  }
  return str;
}

const log = {
  folder: (path) => console.log(yellow(`  create: ${path}`)),
  modify: (file) => console.log(magenta(`  modify: ${file}`)),
  file: (file) => console.log(green(`  create: ${file}`)),
  command: (cmd) => console.log(magenta(`Wizardo ${version}: ${cmd}`)),
  danger: (msg) => console.log(red(` - ${msg}`)),
  msg: console.log
};

module.exports = {
  copy,
  getFiles,
  getFolders,
  getGenerators,
  insertCode,
  log,
  parseGenerator,
  pascalToSnakeCase,
  replaceVariables,
  wizardoFolderExists,
};

