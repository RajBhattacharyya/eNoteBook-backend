require('dotenv').config()
const express = require("express");
const cors = require("cors");
const corsOptions = require('./config/corsOptions')
const connectDB = require('./config/dbConn')



connectDB();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors(corsOptions));
app.use(express.json());

//Routes
app.use("/api/auth", require("./routes/auth"))
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`eNotebook backend listening on port ${port}`);
});
