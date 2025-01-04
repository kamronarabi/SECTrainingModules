// node runs on server js runs on browser
//console is terminal

//common core modules   commonJS 
// const os =require("os");
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// const path = require("path");
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));

// const math = require("./math");
// console.log(math.add(2,2));
// destructured
// const {add , sub, mult, div} = require("./math");
// console.log(add(2,2));

//FILES
// const fs = require("fs");
// const path = require("path");

// fs.readFile(path.join("starter.txt"), "utf8", (err, data)=>{
//     if(err) throw err;
//     console.log(data);//without utf8 needs toString
// });
// console.log("Hello...")  //readFile is asyncronous

// process.on("uncaughtException", err => {
//     console.error(`There was an uncaught error: ${err}`);
//     process.exit(1);
// });

// //write creates new file
// fs.writeFile(path.join("reply.txt"), "Nice to meet you" ,(err)=>{
//     if(err) throw err;
//     console.log("Operation Write Complete");
// });

// //append creates and adds to current files
// fs.appendFile(path.join("test.txt"), "Testing text" ,(err)=>{
//     if(err) throw err;
//     console.log("Operation Append Complete");
// });

// fs.writeFile(path.join("reply.txt"), "Nice to meet You", (err)=>{
//     if(err) throw err;
//     console.log("Write complete");

//     fs.appendFile(path.join("reply.txt"), "\n\nYes it is", (err)=>{
//         if(err) throw err;
//         console.log("Append complete");

//         fs.rename(path.join("reply.txt"), path.join("newReply.txt"), (err)=>{
//             if(err) throw err;
//             console.log("Rename complete");
//         })
//     })
// })

//WITH PROMISES
// const fsPromises = require("fs").promises;
// const path = require("path");

// const fileOps = async () =>{
//     try{
//         const data = await fsPromises.readFile(path.join("promiseComplete.txt"), "utf8");
//         console.log(data);
//         await fsPromises.unlink(path.join("promiseComplete.txt"));
//         await fsPromises.writeFile(path.join("promiseWrite.txt"), data);
//         await fsPromises.appendFile(path.join("promiseWrite.txt"), '\n\nNice to meet you');
//         await fsPromises.rename(path.join("promiseWrite.txt"), path.join("promiseComplete.txt"));
//         const newData = await fsPromises.readFile(path.join("promiseComplete.txt"), 'utf8');
//         console.log(newData);
//     } catch(err){
//         console.error(err);
//     }
// }
// fileOps()


//NPM

// const {format} = require("date-fns");
// const{v4: uuid } = require("uuid");

// console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss"))

// console.log(uuid());

//OLD SERVER

// const http = require("http");
// const path = require("path");
// const fs = require("fs");
// const fsPromises = require("fs").promises;
// const logEvents = require("./logEvents");
// const EventEmitter = require("events");
// class Emitter extends EventEmitter {};
// const myEmitter = new Emitter();
// myEmitter.on("log", (msg, fileName) => logEvents(msg, fileName));
// const PORT = process.env.PORT || 3500;

// const serveFile = async (filePath, contentType, response) => {
//     try {
//         const rawData = await fsPromises.readFile(filePath,!contentType.includes("image")?"utf8" : "");
//         const data = contentType === "application/json" ? JSON.parse(rawData)
//  : rawData
//          response.writeHead(filePath.includes("404.html")?404:200, {"Content-Type" : contentType});
//         response.end(contentType === "application/json" ? JSON.stringify(data): data);
//     }catch(err){
//         console.log(err);
//         myEmitter.emit("log",`${error.name}: ${error.message}`, "errorLog.txt");
//         response.statustCode = 500;
//         response.end();
//     }
// }

// const server = http.createServer((req, res)=>{
//     console.log(req.url, req.method);
//     myEmitter.emit("log",`${req.url}\t${req.method}`, "reqLog.txt");

//     const extension = path.extname(req.url);

//     let contentType;
// switch(extension){
//     case ".css":
//         contentType = "text/css";
//         break;
//     case ".js":
//         contentType = "text/javascript";
//         break;
//     case ".json":
//         contentType = "application/json";
//         break;
//     case ".jpg":
//         contentType = "image/jpeg";
//         break;
//     case ".png":
//         contentType = "image.png";
//         break;
//     case ".txt":
//         contentType = "text/plain";
//     default:
//         contentType = "text/html";
// }


//     let filePath =
//         contentType === "text/html" && req.url === "/" 
//             ? path.join(__dirname, "views","index.html")
//             :contentType === "text/html" && req.url.slice(-1) === "/"
//                 ? path.join(__dirname, "views",req.url, "index.html")
//                 : contentType === "text/html" 
//                     ? path.join(__dirname, "views", req.url)
//                     : path.join(__dirname, req.url);



//     if (!extension && req.url.slice(-1)!=="/") filePath += ".html";

//     const fileExists = fs.existsSync(filePath);

//     if(fileExists){
//         serveFile(filePath, contentType, res);
//     } else {
//         switch (path.parse(filePath).base){
//             case "old-page.html":
//                 res.writeHead(301, {"Location": "/new-page.html"});
//                 res.end();
//                 break;
//             case "www-page.html":
//                 res.writeHead(301, {"Location": "/"});
//                 res.end();
//                 break;
//             default:
//                 serveFile(path.join(__dirname,"views","404.html"), "text/html",res);

//         }
//     }
// });
// server.listen(PORT, () => console.log(`Server running on port: ${PORT}`))

