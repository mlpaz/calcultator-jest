
function validNumber (str)  {
  if (!isNumeric(str)){
    throw new Error('Invalid number');
  }
}

function isNumeric (str) {
  if (typeof str != "string") return true;
  return !isNaN(str) && 
         !isNaN(parseFloat(str));
}

module.exports = { validNumber };