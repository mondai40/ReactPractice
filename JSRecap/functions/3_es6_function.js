const students = ["Gustavo", "Ronan", "James", "Jun"];

//map//////////////////////////////////////////////////////////////////////////
    // //parameter name can be anything
    // students.map((student) => {console.log(`Hi, ${student}`)});

    // //You don't have to put parenthesis if there is only 1 parameter.
    // const greetings = students.map(student => `Hi, ${student}`);
    // console.log("greetings", greetings);

    // const greetingsReturn = students.map((student, index) => {
    //     //....more calculations
    //     return `Hi, ${student}, No. ${index}`
    // });
    // console.log(greetingsReturn);

    // const getStudentGreetings = (student) => `Hi, ${student}`;
    // const greetingsReturn2 = students.map((student) =>getStudentGreetings(student));
    // //shorthand way of passing parameters inside a function
    // // greetingsReturn2 = students.map(getStudentGreetings);
    // console.log("greetingsReturn2", greetingsReturn2);
//map end//////////////////////////////////////////////////////////////////////////


//filter//////////////////////////////////////////////////////////////////////////
    //longer way
    // const filteredResult = students.filter((student) => {
    //     return student.length > 4;
    // });
    //shorter way
    // const filteredResult = students.filter(student => student.length > 4);
    // console.log(filteredResult);

    // const filteredResult = students.filter((student, index) => student.length < 4);
    // console.log(filteredResult);
//filter end//////////////////////////////////////////////////////////////////////////


//splice//////////////////////////////////////////////////////////////////////////
    // let sweets = ["chocolate", "cake", "mousse", "chips"];
    // console.log(sweets);
    // sweets.splice(0, 1); //delete 1 element from index 0
    // console.log(sweets); //splice manipulate original array

    // //replace the 1 element to pudding and return replaced element
    // const deletedElement = sweets.splice(0, 1, "pudding"); 
    // console.log(sweets);
    // console.log(deletedElement);
//splice end//////////////////////////////////////////////////////////////////////////


//slice//////////////////////////////////////////////////////////////////////////
    let animals = ["lion", "mink", "parrots", "cats", "racoon"];
    // const leftOverAnimals = animals.slice(2, 4); //2 is starting point, 4 is ending point but isn't included
    // console.log(animals); //slice() don't manipulate original array
    // console.log(leftOverAnimals);
//slice end//////////////////////////////////////////////////////////////////////////


//forEach//////////////////////////////////////////////////////////////////////////
// animals.forEach((animal) => console.log(`I love ${animal}`)); //This is like loop, no return

//forEach end//////////////////////////////////////////////////////////////////////////


//reduce//////////////////////////////////////////////////////////////////////////
    // let numbers = [2, 5, 7, 8, 9, 10];
    // let totalNum = numbers.reduce((total, currentNum) => total + currentNum);
    // console.log(numbers); //reduce doesn't manipulate original array
    // console.log(totalNum);

//reduce end//////////////////////////////////////////////////////////////////////////


//sort//////////////////////////////////////////////////////////////////////////
    // let numbers = [2, 5, 7, 8, 9, 10];
    // console.log(numbers);
    // // numbers.sort(); //sort numbers lexical order
    // // console.log(numbers);
    // numbers.sort((number1, number2) => {
    //     return number1 - number2;
    // });
    // console.log(numbers);
//sort end//////////////////////////////////////////////////////////////////////////


//find//////////////////////////////////////////////////////////////////////////
    let cars = ["toyota", "mitsubishi", "ford", "honda", "tesla"];
    // let found = cars.find((car) => car === "ford");
    // console.log(`found ${found}`);
//find end//////////////////////////////////////////////////////////////////////////


//includes (returns a boolean)//////////////////////////////////////////////////////////////////////////
    // console.log(`Is there a volkswagen?`, cars.includes("volkswagen"));
    // console.log(`Is there a toyota?`, cars.includes("toyota"));
//inclues end//////////////////////////////////////////////////////////////////////////


//some//////////////////////////////////////////////////////////////////////////
    // let isFound = cars.some(car => car === "ford");
    // console.log("isFound", isFound);
//some end//////////////////////////////////////////////////////////////////////////


//indexOf//////////////////////////////////////////////////////////////////////////
let indexOfTesla = cars.indexOf("tesla");
console.log(indexOfTesla);
let indexOfFerrari = cars.indexOf("ferrari");
console.log(indexOfFerrari);

//indexOf end//////////////////////////////////////////////////////////////////////////


//join//////////////////////////////////////////////////////////////////////////
const joinText = cars.join(",");
console.log(joinText);
//join end//////////////////////////////////////////////////////////////////////////


//split//////////////////////////////////////////////////////////////////////////
const splitText = joinText.split(",");
console.log(splitText);
//split end//////////////////////////////////////////////////////////////////////////


//class//////////////////////////////////////////////////////////////////////////
class Student {
    static studentClassName = "React";

    constructor(name, age) {
        //if you declare this: global variable inside a class
        this.name = name;
        this.age = age;
        //private variable: cannot use it outside constructor
        const studentName = name;
    }
    greetStudent() {
        return `Hi, ${this.name}`;
    }
    // greetStudentError() {
    //     return `Hi, ${studentName}`;
    // }
}

const firstStudent = new Student("Shin", 32);
console.log(firstStudent.greetStudent(), firstStudent.age);
// console.log(firstStudent.greetStudentError());
console.log(Student.studentClassName);
//class end//////////////////////////////////////////////////////////////////////////

