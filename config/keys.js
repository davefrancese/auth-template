if (process.env.NODE_ENV === "production") {
  //show production keys
  console.log("SET UP PRODUCTION KEYS");
} else {
  // show dev keys
  module.exports = require("./dev.js");
}
