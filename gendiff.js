// const { Command } = require('commander');
// const program = new Command();

// program
//   .name('gendiff')
//   .description('Compares two configuration files and shows a difference.')
//   .version('0.8.0')
//   .option('-f, --format <type>', 'output format')
//   .argument('<filepath1> <filepath2>');
// program.parse();
import { program } from 'commander';
import cli from '../frontend-project-46/diffHandler.js'

program
  .name('gendiff')
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action(cli)
  .parse(process.argv);