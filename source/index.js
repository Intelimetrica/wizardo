#!/usr/bin/env node

import program from 'commander';
import prompt  from 'co-prompt';
import { magenta, yellow, green, red} from 'chalk';
import { wizardoFolderExists, log } from './utils';
import {mkdirSync} from 'fs.extra';

import { version as v} from '../package.json';

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

    log.command(`init`);
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
    log.command(`create`);
    console.log(yellow(`New generator \`${generator}\` created`));
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
    log.command(`run`);
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
    log.command(`list`);
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
