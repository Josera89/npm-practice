var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");

var msg1 = chalk.blue.bgRed.bold('Hello world!');
var msg3 = chalk.red('Hello', chalk.underline.bgBlue('world') + '!');

console.log(message);
console.log(msg1);
console.log(msg3);