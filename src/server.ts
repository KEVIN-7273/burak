import dotenv from "dotenv";
dotenv.config();

console.log("PORT: ", process.env.PORT);
console.log("PORT: ", process.env.MONGO_URL);

// CLUSTER => DATABASE => COLLECTION => DOCUMENT
