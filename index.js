import bodyParser from "body-parser";
import express from "express";

import cors from "cors";
import { getAuth } from "firebase-admin/auth";
import { auth } from "./firebaseConfig.js";
import dotevn from "dotenv";
import ProductRouter from "./routers/ProductRouter.js";
import OpenRouter from "./routers/OpenRouter.js";

const app = express();
dotevn.config();
const authorizationJWT = async (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  if (authorizationHeader) {
    const accessToken = authorizationHeader.split(" ")[1];
    getAuth(auth)
      .verifyIdToken(accessToken)
      .then((decodeToken) => {
        res.locals.uid = decodeToken.uid;
        next();
      })
      .catch((err) => {
        console.log(err);
        return res.status(403).json({ message: "Forbidden", error: err });
      });
  } else {
    return res.status(401).json({ message: "Unauthorized" });

  }
};
app.use(cors(),bodyParser.json());
app.use("/", OpenRouter);
app.use(authorizationJWT) ;
app.use("/",ProductRouter)
app.listen(process.env.PORT || 8000, () => {
  console.log("server is running");
});
