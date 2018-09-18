#!/usr/bin/env node

import program from 'commander';
import prompt  from 'co-prompt';
import { magenta, yellow, green, red} from 'chalk';
import { wizardoFolderExists, log, getGenerators } from './utils';
import {mkdirSync} from 'fs.extra';

import { version as v} from '../package.json';
import { stage5 } from './pipeline';
import config from './wizgenerator.config.json';

program
  .version(v, '-v, --version')

/**
 * init
 *
 * Verify that .wizardo doesn't exist
 * Create .wizardo folder
 * Create .wizardo/templates folder
 *
 */
program
  .command('init')
  .description('create the initial boilerplate for wizardo generator')
  .action(() => {
    log.command('init');
    if (wizardoFolderExists()) {
      console.log(' - A Wizardo project already exists in this folder');
    } else {
      [ './.wizardo', './.wizardo/templates' ]
        .forEach(e => {
          mkdirSync(e);
          log.folder(e)
        });
    }
  });

/**
 * create
 *
 * Verify the uniqueness of the generator name
 * Add .wizardo/<generator>.config.json
 *
 * @param {string} generator - Name of generator. It should be in snake_case
 */
program
  .command('create <generator>')
  .description('create a new generator into .wizardo/<generator>.config.json')
  .action(generator => {
    log.command('create');

    // TODO: verify that init has being set first

    let generators = getGenerators();
    if (generators.includes(generator)) {
      log.danger('Generator name already taken. Existing generators are:');
      log.msg(generators.reduce((acc, f) => `${acc}   + ${f}\n`, ''));
    } else {
      //run wizgenerator.config.json
      console.log(yellow(`New generator \`${generator}\` created`));
      /* exect only stage 5
       * stage 5 - Copy templates & Replace variables in created templates
       * Note: stage 4 is not needed since it was handled at the beginning
       * of the script
       **/
      let response = stage5('wizgenerator', {generator: generator});
      console.log(response);
    }
  });

/**
 * run
 *
 * Run pipeline described in pipeline
 *
 * @param {string} generator - Name of generator. It should be in snake_case
 */
program
  .command('run <generator>')
  .description('run generator given .wizardo/<generator>.config.json')
  .action(generator => {
    log.command('run');
    console.log(green(`Run pipeline.js rules with \`${generator}\` rules `));

  });

/**
 * list
 *
 * Extract generators from .wizardo/<generator>.config.json's and list them bonito
 *
 */
program
  .command('list')
  .alias('ls')
  .description('list all available generators')
  .action(() => {
    log.command('list');
    // Extract generators from .wizardo/<generator>.config.json's and list them bonito
  })


program
  .command('*')
  .description('not a command')
  .action(function(cmd) {
    console.log(red(`Wizardo ${v}: command \`${cmd}\` not found`));
  });

program
  .parse(process.argv);
