import chalk from 'chalk';
const log = console.log;

log(chalk.blue('Hello world!'));
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));
