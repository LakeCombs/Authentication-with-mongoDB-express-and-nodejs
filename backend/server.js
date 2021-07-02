require("dotenv").config({ path: "./config.env" });
const express = require("express");
const cors = require("cors");
const authroutes = require("./routes/auth");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/error");

//connect dB
connectDB();
const app = express();

app.use(express.json());
app.use(cors);
app.use("/api/auth", authroutes);

//Error handlers
app.use(errorHandler);

const PORT = process.env.PORT || 1000;

const server = app.listen(PORT, () => {
  console.log(`app is running on PORT ${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`logged error : ${err}`);
  server.close(() => process.exit(1));
});
