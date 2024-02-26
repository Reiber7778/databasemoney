import express from "express";

//* This is routers
import { router } from "../routers/routers.mjs";

//? This is middleware
import { data, value } from "../middleware/validation.mjs";

import { errorsGlobal } from "../errors/error.mjs";

const app = express();

// remove is the head
app.disable("x-powered-by");

// Use template 
app.set('view engine','ejs');

//Can't is function
app.use(express.urlencoded());

// Can read the data, of urls 
app.use(express.json());

//* routers of sever

// this is the main page
app.use("/api/users/v1/page/admin",router);

app.use("/api/users/v1/page/admin",router);

// router for create new users
app.use("/api/users/v1/page/admin", data(value), router);

// router for remover users
app.use("/api/users/v1/admin", router);


// error global 
app.use(errorsGlobal);


app.listen(3000, () => console.log("http://localhost:3000"));
