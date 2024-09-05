let logo = 'Razu is good student';
console.log(logo);

let greeting = 'Good Morning';
let razu = "how are you";
console.log(greeting+ " " +razu)

//concatenation - join two or more strings
// let output = greeting.concat(razu);
// console.log(", output")

//trim() - to remove odd spacing
// let user = prompt ("Enter your name:");
// let notification = alert("You are learning JS");
// console.log(sentence.trim)

// let fox = prompt("Enter your name");
// console.log(fox.trim())

// let name = "razu";
// let roll = "19";
// let classs = 10;

// let output1 = `My name is a ${name}. my class ${classs}. my class roll ${roll}. `;
// console.log(output1)

// const user = 'my name is ';
// const roll = prompt('What is your name?');  // corrected prompt message
// const output = user.concat(roll.trim());
// console.log(output);

// let text = "hello word";
// console.log(text.length)
// console.log(text.indexOf('w'))
// console.log("index of word:", text.lastIndexOf("r"))


let sive = "Razu is a good student razu is enjoy";
let search = "Enjoy"

let text = sive.search(search);

console.log(text);

if( text === -1){
    console.log(search, "Not found!")
}else{
    console.log(search, "has been found")
}