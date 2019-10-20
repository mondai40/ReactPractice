//map/////////////////////////////////////////////////////
const map = new Map();

    // //the data type of key and value is anything
    // map.set("key1", "student1").set(2, 40).set("isHere", true);
    // console.log("Map", map);
    // console.log(map.get(2)); //40
    // console.log(map.has("isHere"));
    // console.log(map.has(4));
    // console.log(map.size); //.size is not function, so no ()
    // map.delete(2);
    // console.log("Map", map);
    // map.clear();
    // console.log("Map", map);

    // const map2 = new Map([
    //     ["Canada", "Vancouver"],
    //     ["Japan", "Tokyo"],
    //     ["Spain", "Madrid"],
    // ]);

    // for (let country of map2.keys()) {
    //     console.log("Country", country);
    // }
    // for (let city of map2.values()) { //values() 
    //     console.log("City", city);
    // }

    // for (let item of map2) {
    //     console.log("Item", item); 
    // }
//map end/////////////////////////////////////////////////////


//set/////////////////////////////////////////////////////
    // let set = new Set();
    // set.add({name: "Shin"}); //if you assign the object to variable, you would get a different result
    // set.add({name: "Nobu"});
    // set.add({name: "Vlad"});

    // console.log("Set", set);
    // set.add({name: "Vlad"}); 
    // console.log("Set", set); 
    // console.log("Size", set.size);

    // set.forEach((val, val2, set) => {
    //     console.log("forEach", val, val2, set);
    // });
//map end/////////////////////////////////////////////////////


//rest parameters/////////////////////////////////////////////////////
    // function addition(className, ...students) {
    //     students.map((student) => {
    //         student.gender === "female" && console.log("Female student:", student.name);
    //     });
    //     console.log(`These are the students for the ${className} class:`, ...students);
    // }

    // addition("Web Dev 2", "Paulo", "Risa", "Gustavo" ,"Nobu");
    // addition(
    //     "Web Dev 2", 
    //     {name: "Paulo", gender: "male"}, 
    //     {name: "Risa", gender: "male"}, 
    //     {name: "Gustavo", gender: "male"}, 
    //     {name: "Nobu", gender: "male"}
    // );
//rest parameters end/////////////////////////////////////////////////////


//spread operator /////////////////////////////////////////////////////
//with array
const numArr = [5, 7, 8, 9, 5, 3];
console.log("Spread numArr", ...numArr);

console.log("add extra element with new array", [...numArr, 7]);
console.log("add extra element with new array", [8, ...numArr]);

//with object
let seagull = {
    color: "white",
    sound: "noisy",
    floats: true
};
console.log("");
console.log("spread obj", {...seagull, beakColor: "yellow"}); //add new property and value
console.log("override value", {...seagull, color: "black"}); //Be careful about the order
console.log("override value", {color: "black", ...seagull}); //Be careful about the order
//spread operator end/////////////////////////////////////////////////////


//setTimeout/////////////////////////////////////////////////////
function alertMe(name) {
    alert("Hello", name);
}
// setTimeout(alertMe, 3000);
// setTimeout(alertMe(), 3000); //This is wrong, alert will be executed right away.
// setTimeout(() => alertMe(), 3000); //This is ok

function tick() {
    console.log(new Date().getSeconds());
}
const tickVar = setInterval(tick, 1000);
setTimeout(() => {clearInterval(tickVar); console.log("finished")}, 10000);
// setTimeout(clearInterval(tickVar), 10000); //it won't work, it should be arrow function
//setTimeout end/////////////////////////////////////////////////////
