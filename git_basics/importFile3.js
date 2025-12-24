import * as variabless from "./exportFile3.js";
import chalk from "chalk";


console.log(chalk.green("Test passed:", variabless.a));
console.log(chalk.red("Test filed:", variabless.b));
console.log(chalk.blue("Test flaky:", variabless.c));