import chalk from "chalk";
import validator from "validator";
const res = validator.isEmail('safik786@gmail.com')
console.log(res);
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));