import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/types/config";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
  uri: String(process.env.MONGO_URL),
  collection: "sessions",
});

/** 1-ENTRANCE **/

const app = express();
console.log("__dirname: ", __dirname);

app.use(express.static(path.join(__dirname, "public"))); // papkani static folder qildik
app.use(express.urlencoded({ extended: true })); //  middleware integratsiya
app.use(express.json()); // restAPI sifatida request bolayotgan datalarni bodysida kelayotgan json datani otqazishga ruxsat berish
app.use(morgan(MORGAN_FORMAT));

/** 2-SESSIONS**/

app.use(
  session({
    secret: String(process.env.SESSION_SECRET),
    cookie: {
      maxAge: 1000 * 60 * 60 * 3, // 1 week
    },
    store: store,
    resave: true,
    saveUninitialized: true,
  }),
);

/** 3-VIEWS **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
/** 4-ROUTERS **/
app.use("/admin", routerAdmin); // BSSR: EJS
app.use("/", router); // SPA: ReaCt // Middleware Design Pattern => faqatgina "/" manzil bilan ishlamoqda

export default app; // module.exports = app
