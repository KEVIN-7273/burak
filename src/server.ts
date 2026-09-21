import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import app from "./app";

// CLUSTER => DATABASE => COLLECTION => DOCUMENT

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB conncection succeed");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function () {
      console.log(`The server is running successfully on port: ${PORT}`);
    });
  })
  .catch((err) => console.log("Error on connection MongoDB", err));
