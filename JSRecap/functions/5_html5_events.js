function handleClick() {
    console.log("Clicked");
}

function handleFormClick(event) {
    event.preventDefault();

    const target = event.target;
    console.log("target", target);

    const tagName = event.target.tagName;
    console.log("tagName", tagName);

    const inputValue = document.getElementById("nameInput").value; //get value from input tag
    console.log("input", inputValue);

    const newLine = document.createElement("li");  //make a new element
    newLine.textContent = inputValue;

    const list = document.getElementById("NameLists"); //add element(tag)
    list.appendChild(newLine);

    document.getElementById("nameInput").value = ""; //clear input
    document.getElementById("nameInput").value = ""; //clear input
}

const handleInputChange = (event) => {
    console.log("handleInputChange", event.target.value);
}

function handleFocus() {
    console.log("focused");
}
function handleBlur() {
    console.log("blur");
}

const handleMouseOver = () => {
    console.log("mouse over");
}
const handleMouseOut = () => {
    console.log("mouse out");
}