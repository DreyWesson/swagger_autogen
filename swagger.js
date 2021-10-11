const swaggerAutogen = require("swagger-autogen")();
const doc = require("./src/docs/index.js");

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./src/endpoints.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./index"); // Your project's root file
});
