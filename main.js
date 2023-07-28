require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(cors());

const PORT = process.env.PORT || 4000;
app.use(compression());


// // databse connection
mongoose.connect('mongodb+srv://Adhiraj:kFgiYvaQ0i5mFET9@riyo.y5dtqha.mongodb.net/riyoDB');
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to the database!"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    session({
        secret: "my secret key",
        saveUninitialized: true,
        resave: false,
    })
);
app.use(bodyParser.text({type: '/'}));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(bodyParser.urlencoded({
//     limit: "150mb",
//     extended: true,
// }))

app.use((req, res, next) => {
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
});

app.set("view engine", "ejs");

app.use("", require("./routes/paarivarRoutes"));
app.use("", require("./routes/surakshaRoutes"));

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
