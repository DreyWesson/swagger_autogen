const basicInfo = require("./basicInfo.js");
const securityDef = require("./securityDefinitions.js");
const def = require("./definitions.js");
const tags = require("./tags");
// const todos = require('./todos');

module.exports = {
  ...basicInfo,
  ...securityDef,
  ...def,
  ...tags,
  //     ...todos
};
