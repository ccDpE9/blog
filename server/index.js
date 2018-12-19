// entry point to our back-end

/** dependencies **/
const express = require("express")
const routes = require("./routes/")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")
const helmet = require("helmet")
const cloudinary = require("cloudinary")
const passportConfig = require("./services/passport") 

const app = express()


/** configure cloudinary **/
cloudinary.config({
  cloud_name: "cloudinary_name",
  api_key: "cloudinary_api",
  api_secret: "cloudinary_api_secret",
})

/** connect to MongoDB **/
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/"
try {
  mongoose.connect(url, {
    // useMongoClient: true
  })
} catch (err) {
}
// get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
// get the default connection
var db = mongoose.connection;


let port = 5000 || process.env.PORT


/** set routes **/
const router = app.Router()
routes(router)


/** set up middleware **/
// prevents cross-origin request errors
app.use(cors())
// used to parse formdata in POST requests into req.body object
app.use(bodyParser.json())
// armours our API to prevent attacks
app.use(helmet())

app.use("/api", router)


/** start server **/
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});

