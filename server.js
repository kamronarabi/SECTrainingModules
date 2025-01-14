require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const corsOptions = require("./config/corsOptions")
const {logger} = require("./middleware/logEvents")
const errorHandler = require("./middleware/errorHandler")
const credentials = require("./middleware/credentials")
const verifyJWT = require("./middleware/verifyJWT");
const cookieParser =require("cookie-parser");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn")
const PORT = process.env.PORT || 3500;

//Connect to Mongo
connectDB();

//3 types of middleware built in, custom, and 3rd party

//custom middleware logger
app.use(logger);

// app.use(credentials);
app.use(cors(corsOptions));//cross origin resource sharing
//builtin
app.use(express.urlencoded({extended: false}));//handles url encoded data
app.use(express.json());//middleware for json

//middleware for cookies
app.use(cookieParser())


//serves static files
app.use(express.static(path.join(__dirname, '/public')));
app.use("/subdir",express.static(path.join(__dirname, '/public')));

//routes
app.use("/", require("./routes/root"));
app.use("/register", require("./routes/register"));
app.use("/auth", require("./routes/auth"));
app.use("/subdir", require("./routes/subdir"));
app.use("/refresh", require("./routes/refresh"));
app.use("/logout", require("./routes/logout"));

app.use(verifyJWT);
app.use("/employees", require("./routes/api/employees"));


//app.use() for middleware- all uses regex for routing
app.all("*", (req,res)=>{
    res.status(404);
    if (req.accepts("html")){
       res.sendFile(path.join(__dirname, "views","404.html")); 
    }
    else if (req.accepts("json")){
        res.json({error: "404 not found"});
    } else{
        res.type("txt").send("404 Not Found")
    }

});

//Route handlers
app.get("/hello(.html)?",(req,res,next)=>{
    console.log("attempted to load hello.html");
    next()
}, (req,res)=>{
    res.send("Hello World!");
});

// provide route hnadlers ex: one two and three
// app.get("/chain(.html)?", [one,two,three]);

app.use(errorHandler);

mongoose.connection.once("open", ()=>{
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
})
