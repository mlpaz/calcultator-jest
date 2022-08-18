const operationExpectMap = {
  '+' : { x:5, y:6, expect:11 },
  '-' : { x:6, y:5, expect:1 },
  '*' : { x:5, y:6, expect:30 },
  '/' : { x:6, y:2, expect:3 }
}

module.exports = { operationExpectMap };
exports.operationExpectMap = operationExpectMap;