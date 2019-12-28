const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(keys.MONGO_URI);

require("./routes/auth")(app);

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
