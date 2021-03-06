import chalk from 'chalk';

export default class Logger {
  static log(v: string) {
    console.log(`${chalk.cyan('log')}   - ${v}`);
  }

  static info(v: string) {
    console.info(`${chalk.cyan('info')}  - ${v}`);
  }

  static warn(v: string) {
    console.warn(`${chalk.yellow('warn')}  - ${v}`);
  }

  static error(v: string) {
    console.error(`${chalk.red('error')} - ${v}`);
  }
};
