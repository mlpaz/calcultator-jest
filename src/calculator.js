const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const validations = require('./tools/validations');
const operations = require('./operations/operations');


readline.question(`Write an equation \n`, equation => {
  const res = resolve(equation);
  console.log(`${res}`);
  readline.close();
});

const resolve = (equation) => {
  const split = equation.split(' ');
  validations.validNumber(split[0]);
  let res = parseInt(split[0]);

  for(let i = 1; i < split.length; i += 2 ){
    // validations
    operations.validOperation(split[i]);
    validations.validNumber(split[i + 1]);
    // parse
    const operation = split[i];
    const x = parseInt(split[i+ 1]);
    // resolve
    res = operations.resolveOperation(res,operation,x);
  } 
  return res;
}
