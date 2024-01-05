// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

const port = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Err: ", error);
    });
    app.listen(port, () => {
      console.log(`💽 Server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection FAILED!!!", error);
  });
