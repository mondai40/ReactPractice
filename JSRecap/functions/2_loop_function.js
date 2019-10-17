//null and undefined
const classObj = [
    {
        name: "Shin",
        type: "student",
        age: 32,
    }, 
    {
        name: "Risa",
        type: "student",
        age: 22,
    }, 
    {
        name: "Nobu",
        type: "student",
        age: 27,
    },
    null
];

let isYoung = classObj[2].age < 30;

// console.log("classObj1", classObj[3]);
// console.table(classObj);
// //null and undefined are "false" when using as a boolean
// console.log("classObj2", classObj[3]? "This exists": "This doesn't exist");
// console.log("classObj3", isYoung? "The person is young.": "The person is not young.");
// console.log("classObj4", !isYoung? "The person is young.": "The person is not young.");
// console.log("classObj5", isYoung && "The person is young.");
// //if the value exists and use that valuable, it would be boolean
// console.log(!!classObj[0].age);
// console.log("classObj6", classObj[0].age? "age exits": "age doesn't exist");

//Standard JavaScript
// function sayHello(name) {
//     return `Hello, ${name}`
//}

//ES6
    // const sayHello = (name) => {
    //     return `Hello, ${name}`;
    // }
    //shorter way
    const sayHello = (name) => `Hello, ${name}`;

console.log('sayHello', sayHello('Shin'));

//pop(), push(), shift(), unshift()
// let animalAll = [];
// animalAll.push("dog");  //add dog on the end
// animalAll.push("lion"); //add lion on the end
// animalAll.push("cat");  //add cat on the end
// console.log("Animall All: ", animalAll);
// animalAll.pop();        //remove the last value from the end 
// console.log("Animall All: ", animalAll);
// animalAll.shift();      //remove the value from the top
// console.log("Animall All: ", animalAll);
// animalAll.unshift("bird");  //add the value on the top
// console.log("Animall All: ", animalAll);

//
let deviceAll = ["iPhone", "Android", "iPad", "Pixel"];
console.log("There are", deviceAll.length, "devices.");
deviceAll.length = 2;
console.log("There are", deviceAll.length, "devices.");
console.log(deviceAll);
deviceAll.length = 5;
console.log(deviceAll);

//for
let houseType =["bachelor", "studio", "apartment", "basement"];
// for convention way
// for (let i = 0; i < houseType.length; i++) {
//     console.log(`housetype no.${i}. ${houseType[i]}`);
// }

// ES6 for of  -> get the value
for (let type of houseType) {
    console.log(type);
}
// ES6 for in -> get the index or key
for (let typeIndex in houseType) {
    console.log(`housetype no.${typeIndex}. ${houseType[typeIndex]}`);
}
// ES for in with Object
// Object loop for in give s you the key
let weather = {
    temprature: "30celcius",
    city: "vancouver",
    date: "Nov 16th"
};
for (let key in weather) {
    console.log(key, weather[key]);
}