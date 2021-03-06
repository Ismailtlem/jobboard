//defining the libraries needed
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

//connection to MongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//Routes : Jobs route and Candidates route
const jobsRouter = require("./routes/jobs");
//const candidatesRouter = require("./routes/candidates");

app.use("/", jobsRouter);
//app.use("/users", candidatesRouter);

app.listen(port, () => {
  console.log(`server is running on port:${port}`);
});
