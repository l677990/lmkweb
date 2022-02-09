// 包的入口文件

const date = require("./src/dateFormat");
const htmlStr = require("./src/htmlEscape");
const rule = require("./src/rule");
const func = require("./src/func");

module.exports = {
  ...date,
  ...htmlStr,
  ...rule,
  ...func,
};
