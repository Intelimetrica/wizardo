#!/usr/bin/env node

import program from 'commander';
import prompt  from 'co-prompt';
import { magenta, yellow, green, red} from 'chalk';

import { version as v} from '../package.json';

program
  .version(v, '-v, --version')

program
  .command('init')
  .description('create the initial boilerplate for wizardo generator')
  .action(() => {
    console.log(magenta(`Wizardo ${v}: init`));
    console.log('setup');
    // verify that .wizardo doesn't exist
    // Create .wizardo folder
    // Create .wizardo/templates folder
  });

program
  .command('create <generator>')
  .description('create a new generator into .wizardo/<generator>.config.json')
  .action(generator => {
    console.log(magenta(`Wizardo ${v}: create`));
    console.log(yellow(`New generator \`${generator}\` created`));
    // Verify the uniqueness of the generator name
    // Add .wizardo/<generator>.config.json
  });

program
  .command('run <generator>')
  .description('run generator given .wizardo/<generator>.config.json')
  .action(generator => {
    console.log(magenta(`Wizardo ${v}: run`));
    console.log(green(`Run pipeline.js rules with \`${generator}\` rules `));

  });

program
  .command('list')
  .alias('ls')
  .description('list all available generators')
  .action(() => {
    console.log(magenta(`Wizardo ${v}: list`));
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
