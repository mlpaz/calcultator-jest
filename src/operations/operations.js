const operationMap = {
  '+': function (x,y) { return x + y },
  '-': function (x,y) { return x - y },
  '*': function (x,y) { return x * y },
  '/': function (x,y) { return x / y },
}


function validOperation (operation) {
  if (!operationMap[operation]) {
    throw new Error(`Invalid operation, valid operation ${Object.keys(operationMap)}`);
  }
}
function resolveOperation (x,operation,y) {
  return operationMap[operation](x,y);
}

module.exports = { resolveOperation, validOperation, operationMap };
exports.operationMap = operationMap;