const aboutMe = require("./information");
const cowsay = require("cowsay");

console.log(cowsay.say({text:`Hey there, I'm ${aboutMe.name} and I'm from ${aboutMe.campus}`}));