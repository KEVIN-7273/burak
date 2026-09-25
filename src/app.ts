import express from "express";
import path from "path";
import router from "./router";

/** 1-ENTRANCE **/

const app = express();
console.log("__dirname: ", __dirname);

app.use(express.static(path.join(__dirname, "public"))); // papkani static folder qildik
app.use(express.urlencoded({ extended: true })); //  middleware integratsiya
app.use(express.json()); // restAPI sifatida request bolayotgan datalarni bodysida kelayotgan json datani otqazishga ruxsat berish

/** 2-SESSIONS**/

/** 3-VIEWS **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
/** 4-ROUTERS **/
app.use("/", router); // Middleware Design Pattern => faqatgina "/" manzil bilan ishlamoqda

export default app; // module.exports = app
