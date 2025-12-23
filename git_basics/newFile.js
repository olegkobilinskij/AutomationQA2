import chalk from 'chalk'
import {passed, flaky, failed} from "./constants.js";

console.log(chalk.green('Test passed: ', passed));
console.log(chalk.red('Test failed: ', failed));
console.log(chalk.yellow('Test flaky: ', flaky));
