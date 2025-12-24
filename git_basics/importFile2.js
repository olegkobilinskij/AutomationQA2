import {a, b} from "./exportFile2.js";
import {c} from "./exportfile1.js";
import chalk from "chalk";


console.log(chalk.green("Test passed:", a));
console.log(chalk.red("Test filed:", b));
console.log(chalk.blue("Test flaky:", c));