//Standard JavaScript
//Define a variable with var keyword
var name = "Shin"
console.log("1:name", name);
name = "Ali";
console.log("1:name", name);

//ES6
//Define a variable with let keyword
let animal = "cat";
console.log("1:animal", animal);
animal = "dog";
console.log("1:animal", animal);

//Define a variable with const keyword
const age = 32;
console.log("1:age",age);
//age = 40; // Can not do this, because it's immutable
//console.log("1:age",age);

//Data Type
const count = "1";
console.log("1:count is", typeof(count));
const updatedNumber = parseInt(count);
console.log("2:updatedNumber is", typeof(updatedNumber));

//Template Literal function
console.log(`3: template literal I'm ${age} years old.`);

//Destructuring for array -> like dictionary?, 連想配列?
const students = ["Vlad", "Isao", "Nobu"];
const [firstStudent, secondStudent, thirdStudent] = students;
console.log(firstStudent);      //Vlad
console.log(secondStudent);     //Isao
console.log(thirdStudent);      //Nobu

//Object
const Object1 = {
    name: "Shin",
    age: 31,
    country: "Japan",
    food: ["egg", "tomato"]
};
console.log("5:dot notation", Object1.country);
console.log("5:square brackets notation with a string", Object1["name"]);
const namae = "name";
console.log("5:square brackets notation with a variable", Object1[namae]);

const keyName = "webDev";
let Object2 = {
    [keyName]: "This is webdev"
};
console.log(Object2[keyName]);
console.log(Object2.webDev);


//Destructuring for object
const {country} = Object1;
console.log(country);


//computed properties use a variable for object's key

//Triominal operator
const number1 = 3;
const number2 = 5;
number1 > number2 ? console.log(`number1 is bigger than number2`): console.log(`number1 is smaller than number2`);