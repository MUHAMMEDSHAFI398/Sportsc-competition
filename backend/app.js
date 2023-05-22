const express = require("express")
const app = express()
const Router = require('./routes/routes')
const dotenv = require("dotenv");
const cors = require("cors");
const dbconnect = require('./config/databaseConnection')
const errorHandler =require('./middlewares/errorhandler')

dbconnect.dbconnect();
dotenv.config()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/backend", Router);
app.use(errorHandler)

app.listen(process.env.PORTNO, () => {
    console.log("server started listening to port 5000");
});