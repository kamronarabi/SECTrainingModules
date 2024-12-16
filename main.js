// console.log("Hello world");
// console.log(typeof "Kamron")
// console.log(typeof 42);
// console.log(typeof true);

//STRING methods
// const myVariable = "Mathematics"
// console.log(myVariable.length)
// console.log(myVariable.charAt(2))
// console.log(myVariable.indexOf("i"))
// console.log(myVariable.lastIndexOf("t")) //last occurrence
// console.log(myVariable.slice(0,4)) //.slice(start,end)
// console.log(myVariable.toUpperCase())
// console.log(myVariable.toLowerCase())
// console.log(myVariable.includes("Math")) //returns bool
// console.log(myVariable.split("e"))//returns array of cut up strings

//NUMBER methods
// const myNum =42;
// const myFloat =42.0;
// console.log(myNum === myFloat);
//casting Number(string) 
// if string cant be number returns NAN
// Number(true) returns 1 and false returns 0
// console.log(Number.isInteger(myNum));
// console.log(Number.parseFloat(myFloat).toFixed(2));
// //toFixed(rounded num) returns string data
// console.log(Number.parseInt("45.00"));
// //.toString() no shit
// console.log(isNaN("42"));

//MATH methods
// console.log(Math.PI);
// console.log(Math.trunc(Math.PI)); //3
// console.log(Math.round(3.5)); //4
// console.log(Math.ceil(3.2)); //4
// console.log(Math.floor(3.8)); //3
// console.log(Math.pow(5,2)); //5 squared
// console.log(Math.min(1,2,3,4)); //1
// console.log(Math.max(9,4,7,2)); //9
// console.log(Math.random());
// console.log(Math.floor(Math.random()*10)+1); //1-10

//coding challenge
//write code that will return a random letter from your name
// const myName = "Kamron";
// let rand = Math.floor(Math.random()*(myName.length));
// console.log(myName.charAt(rand));

//CONDITIONALS
// let customerIsBanned = true;
// let soup = "chicken noodle"
// let reply;
// let crackers=true

// if(customerIsBanned){
//     reply = "No soup for you!"
// }else if(soup && crackers){
//     reply = `Here's your order of ${soup} and crackers.`;

// }else if(soup){
//     reply = `Here's your order of ${soup}`;
// } else{
//     reply = `Sorry, we're out of soup.`;
// }
// console.log(reply)


// let testScore = 89;
// let grade;
// let collegeStudent = True

// if (testScore >= 90) {
//     grade = "A";
// } else if (testScore >= 80){
//     grade = "B";
// } else if (testScore >= 70){
//     grade = "C";
// } else if (testScore >= 60){
//     grade = "D";
// } else {
//     if (collegeStudent){
//         grade ="U"
//     } else {
//         grade ="F"
//     }
// }
// console.log(grade);

//rock paper scissors
// if(playerOne === computer){
//     //tie game
// } else if (playerOne === "rock"){
//     if(computer === "paper"){
//         //computer wins
//     } else{
//         //playerOne wins
//     }
// } else if (playerOne === "paper"){
//     if(computer === "scissors"){
//         //computer wins
//     } else{
//         //playerOne wins
//     }
// } else {
//     if(computer === "rock"){
//         //computer wins
//     } else{
//         //playerOne wins
//     }
// }


//SWITCH statements
// switch (Math.floor(Math.random()*3+1)){
//     case 1:
//         console.log(1)
//         break;
//     case 2:
//         console.log(2)
//         //run diff code
//         break;
//     default:
//         console.log("none")
//         //run if no cases match
// }

// let playerOne = "paper";
// let computer = "paper";

// switch (playerOne){
//     case computer:
//         console.log("Tie")
//         break;
//     case "rock":
//         if(computer ==="paper"){
//             console.log("computer wins")
//         } else {
//             console.log("player wins")
//         }
//         break;
//     case "paper":
//         if(computer ==="scissors"){
//             console.log("computer wins")
//         } else {
//             console.log("player wins")
//         }
//         break;
//     default:
//         if(computer ==="rock"){
//             console.log("computer wins")
//         } else {
//             console.log("player wins")
//         }

    
// }

// TERNARY OPERATORS
//syntax
//condition ? ifTrue : ifFalse;

// let soup = "Tomato"; 
// let response = soup ? "Yes" : "No";
// console.log(response); 

// let soup = "Chicken noodle"; 
// let isBanned = false
// let soupAccess = isBanned 
// ? "Get out"
// : soup
// ? `Yes we have ${soup} soup today` 
// : "No soup";
// console.log(soupAccess);

//USER INPUT
// alert("Hello")
// let myBool = confirm("Ok === true\nCancel === false");
// console.log(myBool)
// let name = prompt("Please enter your name.");
// if (name){
// console.log(name.trim()); //trims whitespace
// } else {
//     console.log("You didn't enter your name");
// }


//FIRST INTERACTIVE GAME
// let playGame = confirm("Do you want to play rock,paper, scissors?");
// if(playGame){
//     //playGame
//     let playerChoice = prompt("Please enter rock, paper, or scissors");
//     if(playerChoice){
//         let playerOne = playerChoice.trim().toLowerCase();
//         if(playerOne === "rock" || playerOne ==="paper" || playerOne === "scissors"){
//              let computerChoice = Math.floor(Math.random()*3+1);
//              let computer = computerChoice === 1 ? "rock"
//              : computerChoice === 2 ? "paper"
//              : "scissors"
//              switch (playerOne){
//                 case computer:
//                     result = ("Tie")
//                     break;
//                 case "rock":
//                     if(computer ==="paper"){
//                         result = ("computer wins")
//                     } else {
//                         result =("player wins")
//                     }
//                     break;
//                 case "paper":
//                     if(computer ==="scissors"){
//                         result =("computer wins")
//                     } else {
//                         result =("player wins")
//                     }
//                     break;
//                 default:
//                     if(computer ==="rock"){
//                         result =("computer wins")
//                     } else {
//                         result =("player wins")
//                     }
                
//             }
//             alert(`Player: ${playerOne} Computer: ${computer}\nResult: ${result}`)
//             let playAgain = confirm("Play Again?");
//             playAgain ? location.reload() : alert("Ok, thanks for playing.");
//         } else {
//             alert("Invalid input.")
//         }
//     } else {
//         alert("I guess you changed your mind. Maybe next time.")
//     }
// } else{
//     alert("Ok, maybe next time.");
// }

//LOOPS
// let num = 1;
// while(num<=50){
//     console.log(num);
//     num++;
// }

// do {                      //executes at least once even if while not met
//         console.log(num);
//         num++;
//     } while(num<50)

// for(let i = 1; i<=10; i++){
//     console.log(i)
// }
// let name = "Kam"
// for(let i = 0; i<=name.length; i++){
//     console.log(name.charAt(i))
// }


//FUNCTIONS
//syntax
// function sum(a, b){
//     return a+b
// }
// console.log(sum(9,10))
// function getUserNameFromEmail(email){
//     return email.slice(0,email.indexOf("@"))
// }
// console.log(getUserNameFromEmail("kamronarabi@gmail.com"))
//anonyous functions
// const getUserNameFromEmail = function (email){
//     return email.slice(0,email.indexOf("@"))
//  }
 //arrow
//  const getUserNameFromEmail = (email) => {
//     return email.slice(0,email.indexOf("@"))
//  }
// const toProperCase = (name) => {
//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
// }
// console.log(toProperCase("kAmRoN"))

//VAR LET AND CONST
//var old dont use it
//let for reassigned
//const for constant variables

//global scope = defined everywhere  local scope= block scope{} or function
//global can be passed down into functions and blocks to be used
//local cant be passed up to global scope
//var is function scoped can be passed from block to function
//let and const are block scoped    DONT USE VAR

//ARRAYS
// const myArray=[];
// //arrays mutable
// myArray[0]= "Kam";
// myArray[1] = 1;
// myArray[2]= true;
// //attributes
// console.log(myArray.length)
// console.log(myArray[myArray.length-1]) // last value
// //methods
// myArray.push("new data")  //push is append returns new length of array
// myArray.pop() //removes last element also return it
// myArray.unshift(42) //puts val on first index  also returns new length of array
// myArray.shift() //first item removed also returns it

// delete myArray[1]; //doesnt remove index just leaves undefined empty space
// myArray.splice(1,1) //.splice(start index,# removed, replace)
// const myArray=["A","B","C","D","E","F"];
// const newArray = myArray.slice(2 , 5)  //.slice(start,stop,step)
// myArray.reverse()
// const newString = myArray.join() // A,B,C,D,E,F new string
// newString.split(",") // back to normal
// const a = [1,2,3];
// const b = [4,5,6];
// const c = a.concat(b); //joins array into arrays (extend in python)
// const d = [...a, ...b]; // spread operator tells it not to nest arrays

//Refactor game with loop and arrays
// let playGame = confirm("Do you want to play rock,paper, scissors?");
// if(playGame){
//     //playGame
//     while(playGame){
//         const playerChoice = prompt("Please enter rock, paper, or scissors");
//         if(playerChoice){
//             const playerOne = playerChoice.trim().toLowerCase();
//             if(playerOne === "rock" || playerOne ==="paper" || playerOne === "scissors"){
//                 const computerChoice = Math.floor(Math.random()*3+1);
//                 const rpsArray = ["rock","paper","scissors"];
//                 const computer = rpsArray[computerChoice];
                // switch (playerOne){
                //     case computer:
                //         result = ("Tie")
                //         break;
                //     case "rock":
                //         if(computer ==="paper"){
                //             result = ("computer wins")
                //         } else {
                //             result =("player wins")
                //         }
                //         break;
                //     case "paper":
                //         if(computer ==="scissors"){
                //             result =("computer wins")
                //         } else {
                //             result =("player wins")
                //         }
                //         break;
                //     default:
                //         if(computer ==="rock"){
                //             result =("computer wins")
                //         } else {
                //             result =("player wins")
                //         }
                    
//                 }
//                 alert(`Player: ${playerOne} Computer: ${computer}\nResult: ${result}`)
//                 playGame = confirm("Play Again?");
//                 if(!playGame) alert("Ok, thanks for playing.");
//                 continue;
//             } else {
//                 alert("Invalid input.")
//                 continue;
//             }
//         } else {
//            alert("I guess you changed your mind. Maybe next time.")
//            break;
//         }
//     }
// } else{
//     alert("Ok, maybe next time.");
// }

//refactored with functions
// const initGame = () => {
//     const startGame = confirm("Do you want to play rock,paper, scissors?");
//     startGame ? playGame() : alert("Ok, maybe next time.");
// }
// //gameflow func
// const playGame = () => {
//     while(true){
//         let playerChoice = getPlayerChoice();
//         playerChoice = formatPlayerChoice(playerChoice);
//         if(playerChoice === ""){
//             invalidChoice();
//             continue;
//         }
//         if(!playerChoice){
//             decideNotToPlay();
//             break;
//         }
//         playerChoice = evaluatePlayerChoice(playerChoice);
//         if(!playerChoice){
//             invalidChoice();
//             continue;
//         }
//         const computerChoice = getComputerChoice();
//         const result = determineWinner(playerChoice, computerChoice);
//         displayResult(result);
//         if(askToPlayAgain()){
//             continue;
//         }else{
//             thanksForPlaying();
//             break;
//         }
//     }  
// }
// function getPlayerChoice(){
//     const playerChoice = prompt("Please enter rock, paper, or scissors");
//     return playerChoice
// }
// function formatPlayerChoice(playerChoice){
//     if(playerChoice || playerChoice === ""){
//         return playerChoice.trim().toLowerCase();
//     } else {
//         return false
//     }
// }
// function invalidChoice(){
//      alert("Invalid input.");
// }
// function decideNotToPlay(){
//     alert("I guess you changed your mind. Maybe next time.");
// }
// function evaluatePlayerChoice(playerChoice){
//     if(
//         playerChoice === "rock" || playerChoice === "paper" || 
//         playerChoice === "scissors"
//     ){
//         return playerChoice
//     }else{
//         return false
//     }
// }
// function getComputerChoice(){
//     const computerChoice = Math.floor(Math.random()*3+1);
//     const rpsArray = ["rock","paper","scissors"];
//     return rpsArray[computerChoice];
// }
// function determineWinner(playerOne, computer){
//     result = "";
//     switch (playerOne){
//         case computer:
//             result = ("Tie")
//             break;
//         case "rock":
//             if(computer ==="paper"){
//                 result = ("computer wins")
//             } else {
//                 result =("player wins")
//             }
//             break;
//         case "paper":
//             if(computer ==="scissors"){
//                 result =("computer wins")
//             } else {
//                 result =("player wins")
//             }
//             break;
//         default:
//             if(computer ==="rock"){
//                 result =("computer wins")
//             } else {
//                 result =("player wins")
//             }
//     }
//     return "Player: "+playerOne+" Computer: "+computer+"\n" +result;
// }
// function displayResult(result){
//      alert(result)
// }
// function askToPlayAgain(){
//     return confirm("Play again?")
// }
// function thanksForPlaying(){
//     alert("Ok, thanks for playing")
// }
// initGame();



//OBJECTS   basically a dictionary
//key val pair
// const myObj = {name: "Kamron"}
// console.log(myObj.name);

// const objecto = {
//     alive: true,
//     answer: 42,
//     hobbies: ["Eat", "Sleep", "Code"],
//     bev: { //nested object
//          morning: "Coffee",
//          afternoon: "Iced Tea"
//     },
//     action: function() {
//         return "Hello World!"
//     },
//     action2: function() {
//         return `time for ${this.bev.morning}`
//     }
// }
// console.log(objecto["answer"]);
// console.log(objecto.hobbies[0]);
// console.log(objecto.bev.morning);
// console.log(objecto.action());
// console.log(objecto.action2());

// delete objecto.answer
// console.log(objecto.hasOwnProperty("alive"))

// const vehicle = {
//     wheels: 4,
//     engine: function(){
//         return "Vrooooom";
//     }
// }

// const truck = Object.create(vehicle); //inheritance
// truck.doors = 2

// const inner = {
//     king: "Ryan",
//     knight: "Kamron",
//     rook: "Constantine"
// }

// console.log(Object.keys(inner)); //returns list of keys
// console.log(Object.values(inner)); //returns list of values

// //for in loop
// for(let piece in inner){
//     console.log(`${inner[piece]} is the ${piece}`)
// }

//destructuring objects



//CLASSES
// class Pizza {
//     constructor(type,size,crust){
//         this.type = type;
//         this.size=size;
//         this.crust = crust;
//         this.toppings=[];
//     }
//     getCrust(){
//         return this.crust;
//     }
//     setCrust(crust){
//         this.crust = crust;
//     }
//     getToppings(){
//         return this.toppings;
//     }
//     setToppings(topping){
//         this.toppings.push(topping);
//     }

//     bake(){
//         console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`)
//     }
// }
// const myPizza = new Pizza("pepperoni","medium","thin");
// myPizza.bake();
// myPizza.setCrust = "original"
// console.log(myPizza.getCrust());
// myPizza.setToppings("sausage");
// myPizza.setToppings("olives");
// console.log(myPizza.getToppings())
// myPizza.bake();

// class Pizza {
//     constructor(size){
//         this._size=size;
//         this._crust = "original";
        
//     }
//     getCrust(){
//         return this._crust;
//     }
//     setCrust(crust){
//         this._crust = crust;
//     }
// }

// class SpecialtyPizza extends Pizza{
//     constructor(size){
//         super(size);
//         this.type = "The works";
//     }
//     slice(){
//         console.log(`Our ${this.type} ${this.size} pizza has 8 slices`)
//     }
// }

// const mySpecialty = new SpecialtyPizza("medium");
// mySpecialty.slice();

// // factory function
// function pizzaFactory(pizzaSize){
//     const crust = "original";
//     const size = pizzaSize;
//     return {
//         bake: () => console.log(`Baking a ${size} ${crust} crust pizza`)
//     }
// }
// const myPizza2 = pizzaFactory("small");
// myPizza2.bake();

//public and private fields
// class Pizza {
// crust = "original";      //public
// #sauce = "traditional";  //private field
// #size;
//     constructor(size){
//         this.#size=size;
        
//     }
//     getCrust(){
//         return this.crust;
//     }
//     setCrust(crust){
//         this.crust = crust;
//     }
//     hereYouGo(){
//         console.log(`Here's your ${this.crust} crust ${this.#sauce} sauce ${this.#size} pizza`)
//     }
// }
// const myPizza = new Pizza("large");
// myPizza.hereYouGo();

//JSON JAVASCRIPT OBJECT NOTATION
/*
used to send and recieve data.
text format that is completely language independent
sends and recieves data in many languages
*/
// const myObj ={
//     name: "Dave",
//     hobbies: ["eat", "sleep", "code"],
//     hello: function () {
//         console.log("Hello!");
//     }
// }

// const sendJSON = JSON.stringify(myObj)
// console.log(sendJSON) //doesnt send functions just key val pairs as string

// const recieveJSON = JSON.parse(sendJSON);//back to object loses function still
// console.log(recieveJSON)
// console.log(typeof recieveJSON)

//ERRORS and ERROR HANDLING
// "use strict";
// const makeError = () => {
    
//         let i = 1;
//         while(i<=5){
//             try{
//                 if(i%2 !== 0){
//                     throw new Error("Odd number!");
//                 }
//                 console.log("Even number");
//             }catch(err){
//                 console.error(err.name);
//                 console.error(err.message);
//                 console.error(err.stack);
//             } finally {
//                 console.log("...finally");
//                 i++;
//             }
//         }
    
// }
// makeError();

// function customError(message){
//     this.message = message;
//     this.name = "custom error";
//     this.stack = `${this.name}: ${this.message}`;
// }

//DOCUMENT OBJECT MODEL - DOM
// const view1 = document.getElementById("view1");
// const view2 = document.querySelector("#view2"); //needs # for id
// view1.style.display = "none";
// view2.style.display = "flex";

// const views = document.getElementsByClassName("view"); //returns html collection
// const sameViiews = document.querySelectorAll('.view'); //needs . for class

// const divs = view1.querySelectorAll("div"); //basically array of dics
// const sameDivs = view1.getElementsByTagName("div");

// const evenDivs= view1.querySelectorAll("div:nth-of-type(2n)");
// for(let i =0; i<evenDivs.length;i++){
//     evenDivs[i].style.backgroundColor = "darkblue";
// }

// const navText = document.querySelector("nav h1");
// navText.textContent = "Hello World";
// const navbar = document.querySelector("nav");
// navbar.innerHTML = "<h1>Hello</h1> <p>This should align right</p>";
// navbar.style.justifyContent = "space-between";
// //dom tree methods (selecting)
// console.log(evenDivs[0]);
// console.log(evenDivs[0].parentElement);
// console.log(evenDivs[0].parentElement.children); //dom tree parent elements->children
// console.log(evenDivs[0].parentElement.childNodes); //.hasChildNodes()
// //.firstElementChild()  .lastElementChild()
// //.nextSibling() .previousSibling()

// //dom tree elements (changing)

// view2.style.display ="flex";
// view2.style.flexDirection = "row";
// view2.style.flexWrap = "row";
// view2.style.margin = "10px";

// while(view1.lastChild){
//     view2.lastChild.remove();
// }

// const createDivs = (parent, iter) => {
//     const newDiv = document.createElement("div");
//     newDiv.textContent = iter;
//     newDiv.style.backgroundColor = "#000";
//     newDiv.style.width = "100px";
//     newDiv.style.height = "100px";
//     newDiv.style.margin = "flex";
//     newDiv.style.justifyContent = "center";
//     newDiv.style.alignItems = "center";
//     parent.append(newDiv);
// }

//EVENT LISTENERS
// const view = document.querySelector("#view2");
// //in html script tag put defer key word to be able to call it
// const div = view.querySelector("div");
// const h2 = div.querySelector("h2");

// //syntax  addEventListener(event, function, useCapture)
// const doSomething = () =>{
//     alert("doing something");

// }
// //click events
// h2.addEventListener("click", doSomething, false);
// h2.removeEventListener("click", doSomething, false);

// h2.addEventListener("click", (event)=>{
//      console.log(event.target);
//      event.target.textContent = "Clicked";
// })
// //readystatechange events
// document.addEventListener("readystatechange", (event)=>{
//     if (event.target.readyState === "complete"){
//         console.log("readyState: complete");
//         initApp();
//     }
// })

// function initApp(){
//     const view = document.querySelector("#view2");
//     const div = view.querySelector("div");
//     const h2 = div.querySelector("h2");
//     view.addEventListener("click", (event)=>{
//         event.stopPropagation();
//         //view.style.backgroundColor= "purple";
//         view.classList.toggle("purple");
//         view.classList.toggle("darkblue");

//     },true) //false propgates up tree, true propogates down tree

//     div.addEventListener("click", (event)=>{
//         div.style.backgroundColor= "blue";
//         view.classList.toggle("blue");
//         view.classList.toggle("black");

//     },true)

//     h2.addEventListener("click", (event)=>{
//         const myText = event.target.textContent;
//         myText === "My 2nd View" ? event.target.textContent = "Clicked" :
//         event.target.textContent = "My 2nd View";
//     }, true)


//     const nav = document.querySelector("nav");
//     nav.addEventListener("mouseOver",(event)=>{
//         event.target.classList.add("height100");
//     })
//     nav.addEventListener("mouseOut",(event)=>{
//         event.target.classList.remove("height100");
//     })

// };
// document.addEventListener("readystatechange", (event)=>{
//     if (event.target.readyState === "complete"){
//         console.log("readyState: complete");
//         initApp();
//     }
// })

// function initApp(){
//     const view3 = document.querySelector("#view3");
//     const myForm = view3.querySelector("#myForm");
//     myForm.addEventListener("submit",(event)=>{
//         event.preventDefault();
//         console.log("submit event");
//     })
// };

//WEB STORAGE API not in dom  global var: window
// window.alert("Ok!");
// window.location //url
// const myObject = {
//     name:"Kam",
//     hobbies:["eat", "sleep", "code"],
//     logName: function(){
//         console.log(this.name)
//     }
// }
// const myArray=["eat", "sleep", "code"];

// window.sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
// const mySessionData = JSON.parse(window.sessionStorage.getItem("mySessionStore"));
// console.log(mySessionData); //only stores string (like json)
// window.sessionStorage.setItem("mySessionStore2",JSON.stringify(myArray));
// const mySessionData2 = JSON.parse(window.sessionStorage.getItem("mySessionStore2"));
// console.log(mySessionData2); 

// localStorage.setItem("myLocalStore", JSON.stringify(myObject));
// const myLocalData = JSON.parse(sessionStorage.getItem("myLocalStore"));
// console.log(myLocalData);

// sessionStorage.removeItem("mySessionStore");
// sessionStorage.removeItem("mySessionStore2");
// console.log(localStorage.key(0));
// console.log(localStorage.length);
// localStorage.clear()

//MODULES   auto defer and strict mode
// import playGuitar from "./guitars.js";
// import{shredding as shred , plucking} from "./guitars.js";
// console.log(shred());
// import * as Guitars from "./guitars.js";
// console.log(Guitars.default());
// console.log(Guitars.shredding());

// import User from "./user.js";
// const me = new User("kamronarabi@gmail.com","Kamron");
// console.log(me.greeting());

//HIGHER ORDER FUNCTIONS
//either takes function as argument or returns function

//for each()
// import {users} from "./user.js";

// users.forEach(user=>{ //loops through all
//     console.log(user.name);
// })
// console.clear();

// const filteredUsers = users.filter(user=>{ //filters
//     return user.id === 1;
// })
// console.log(filteredUsers);

// const mappedUsers = filteredUsers.map(user => {
//     return user.id*10
// })
// console.log(mappedUsers);

// const reducedUsers = mappedUsers.reduce((sum, user)=>{
//     return sum + user;
// })
// console.log(reducedUsers)

//CALLBACKS
// function firstFunc(parameter, callback){
//     //stuff
//     callback();//chain of events
// }

// //PROMISES
// //3 states:  pending,fulfilled,rejected
// const myPromise = new Promise((resolve,reject) => {
//     const error = false;
//     if(!error){
//         resolve("Yes! resolved the promise");
//     }
//     else{
//         reject("No! rejected the promise.");
//     }
// });
// console.log(myPromise);

// //VENEBLES
// myPromise.then(value =>{
//     return value+1; 
// }).then(newValue=>{
//     console.log(newValue);
// }).catch(err=>{
//     console.error(err);
// })

// const myNextPromise = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//          resolve("myNextPromise resolved");
//     }, 3000);
// });

// myNextPromise.then(value=>{
//     console.log(value);
// });

//ASYNC/AWAIT

// const myUsers={
//     userList:[]
// }

// const myCoolFunction = async () => { //FETCH AND .JSON REUTURN PROMISES
    // const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // const jsonUserData = await response.json();
//     console.log(jsonUserData);
//     return jsonUserData;
// };

// const users = fetch("https://jsonplaceholder.typicode.com/users")
// .then(response=>{
//     return response.json();
// }) 
// .then(data=>{
//     data.forEach(user=>{
//         console.log(user);
//     })
// });


// const anotherFunc = async () =>{
//     const data = await myCoolFunction();
//     myUsers.userList = data;
//     console.log(myUsers.userList);

// }
// anotherFunc();

//examples
// const getAllUserEmails = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonUserData = await response.json();
//     const userEmailArray = jsonUserData.map(user=>{
//         return user.email;
//     });
//     postToWebPage(userEmailArray);
// }

// const postToWebPage = (data) =>{
//     console.log(data);
// }

// getAllUserEmails();

//fetch second parameter is an object

// const getDadJoke = async () => {
//     const response = await fetch("https://icanhazdadjoke.com/",{
//         method: "GET",
//         headers:{
//             Accept: "application/json"
//         }
//     });
//     const jsonJokeData = await response.json();

//     console.log(jsonJokeData)
// }
// getDadJoke();


// post method
// const jokeObj = { 
//     id: "oGBIRKuPukb", 
//     joke: `"What time is it?" I don't know... it keeps changing.`
// }

// const postData = async (jokeObj) => {
//     const response = await fetch("https://httpbin.org/post",{
//         method: "POST",
//         headers:{
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(jokeObj)
//     });
//     const jsonResponse = await response.json();

//     console.log(jsonResponse.headers)
// }
// postData(jokeObj);


// const requestJoke = async (firstName, lastName) => {
//     const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]`);
//     const jsonResponse = await response.json();

//     console.log(jsonResponse.value.joke)
// }

//form
// const getDataFromForm = () =>{
//     const requestObj = {
//         firstName: "Bruce",
//         lastName: "Lee",
//         cetegories: ["nerdy"]
//     }
//     return requestObj;
// }

// const buildRequestUrl = (requestData) =>{
//     return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=[${requestData.categories}]`;
// }
// const requestJoke = async (url) => {
// const response = await fetch(url);
// const jsonResponse = await response.json();
// const joke = jsonResponse.value.joke
// postJokeToPage(joke);
// }

// const postJokeToPage = (joke) => {
//     console.log(joke);
// }

// //workflowfunction
// const processJokeRequest = async () =>{
//     const requestData = getDataFromForm();
//     const requestUrl = buildRequestUrl(requestData);
//     await requestJoke(requestUrl);
//     console.log("finished");
// }
// processJokeRequest();

//REGULAR EXPRESSIONS  ex

//takes input based on specifications
// document.getElementById("phoneNum").addEventListener("input", (event)=>{
//     const regex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/g;
//     const input = document.getElementById("phoneNum");
//     const format = document.querySelector(".phoneFormat");
//     const phone = input.value;
//     const found = regex.test(phone);
//     if (!found && phone.length){
//         input.classList.add("invalid");
//         format.classList.add("block");
//     } else{
//         input.classList.remove("invalid");
//         format.classList.remove("block");
//     }
// });
// //when valid input submitted it cleans it for storage
// document.getElementById("phoneForm").addEventListener("submit", (event)=>{
//     event.preventDefault();
//     const input = document.getElementById("phoneNum");
//     const regex = /[()-. ]/g;
//     const savedPhoneNum = input.value.replaceAll(regex, "");
    
// });
// //filters multispace to one space 
// document.getElementById("textForm").addEventListener("submit", (event)=>{
//     event.preventDefault();
//     const input = document. getElementById("textEntry");
//     const regex = / {2,}/g;
//     const newText= input.value.replaceAll(regex, " ").trim();
//     const encodedInputText = encodeURI(input.value);
//     const encodedCleanText = encodeURI(newText);
// });
