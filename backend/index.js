import express from "express";
import { MongoDbURL, PORT } from "./config.js";
import mongoose from "mongoose";
import bookRoutes from "./routes/bookRoutes.js";
import cors from "cors";

const app = express();

//middleware for parsing request body
app.use(express.json());

//middleware for handling cors policy
app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   }),
// );

//example
app.get("/", (req, res) => {
  return res.status(200).send("Welcome");
});

//handling book routes
app.use("/books", bookRoutes);

mongoose
  .connect(MongoDbURL)
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log("Listening to port", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
