import exportList from './exportfile1.js';
import chalk from "chalk";

console.log(chalk.green("Test passed:", exportList.a));
console.log(chalk.red("Test filed:", exportList.b));
console.log(chalk.blue("Test flaky:", exportList.c));