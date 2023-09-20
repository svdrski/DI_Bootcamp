import {program} from 'commander'
import { read } from './commands/read.js';
import {greet} from './commands/greet.js'
import {news} from './commands/fetch.js'


//program
//  .command('read')
//  .description('Read the contents of a file')
//  .action(('./commands/info.txt') => {
//      read('./commands/info.txt');
//  });
program
  .command('read')
  .action(() => {
      read('./commands/info.txt');
  });

program
  .command('greet')
  .action(() => {
      greet('Alex');
  });

program
  .command('news')
  .action(() => {
      news();
  });

program.parse(process.argv);
