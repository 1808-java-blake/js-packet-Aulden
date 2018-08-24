//1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
function getUSA(){
    let tags = document.getElementsByTagName("*");

    for(let i=0; i<tags.length; i++){
        if(tags[i].textContent === "USA"){
            console.log(tags[i].innerHTML);
        }
    }
}

//2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
function getPeopleInSales(){
    let tags = document.getElementsByClassName("empName");

    for(let i=0; i<tags.length; i++){
        let newTags = tags[i].parentElement.getElementsByTagName("td");
        for(let j=0; j<newTags.length; j++){
            if(newTags[j].textContent === "Sales"){
                console.log(tags[i].innerHTML);
            }
        }
    }
}

//3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
function getAnchorChildren(){
    let tags = document.getElementsByTagName("a");

    for(let i=0; i<tags.length; i++){
        let newTags = tags[i].getElementsByTagName("span");

        for(let j=0; j<newTags.length; j++){
            console.log(newTags[j].innerHTML);
        }
    }
}

// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'hobbies' select element.
// Print the value and the contents.
function getHobbies(){
    let tags = document.getElementsByName("hobbies");

    console.log(tags[0].options[tags[0].selectedIndex].value);
}

// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.
function getCustomAttribute(){
    let tags = document.getElementsByTagName("*");

    for(let i=0; i<tags.length; i++){
        if(tags[i].hasAttribute("data-customAttr")){
            console.log(`Value: ${tags[i].getAttribute("data-customAttr")}`);
            console.log(`Contents: ${tags[i].innerHTML}`);
        }
    }
}

// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>

// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element
let chgFunc = function changeSum(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let sum = document.getElementById("sum");

    if(isNaN(+num1 + +num2)){
        sum.innerHTML = "Cannot add";  
    }
    else{
        //discovered the unary plus operator. Very handy
        sum.innerHTML = +num1 + +num2;
    }
}

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
num1.addEventListener("change", chgFunc);
num2.addEventListener("change", chgFunc);

// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.
let slctFunc = function selectAlert(){
    let names = document.getElementsByName("skills");
    alert(`Are you sure ${names[0].options[names[0].selectedIndex].value} is one of your skills?`);
}
let skills = document.getElementsByName("skills")[0].getElementsByTagName("option");
for(let i=0; i<skills.length; i++){
    skills[i].addEventListener("click", slctFunc);
}


// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

//NOTE: Making the background color of radio buttons the new color wasn't visible
//so I made it change the parent element color instead
let faveColor;
setInterval(function() {
    let faveColors = document.getElementsByName("favoriteColor");
    for(let i=0; i<faveColors.length; i++){
        if(faveColors[i].checked){
            faveColor = faveColors[i].value;
            break;
        }
    }
}, 1000);
let ncFunc = function newColor(){
    let names = document.getElementsByName("favoriteColor");
    let newFaveColor;

    for(let i=0; i<names.length; i++){
        if(names[i].checked){
            newFaveColor = names[i].value;
            break;
        }
    }

    if(typeof faveColor !== 'undefined'){
        alert(`So you like ${newFaveColor} more than ${faveColor} now?`);
    }

    for(let i=0; i<names.length; i++){
        names[i].parentElement.style.backgroundColor = newFaveColor;
    }
}
let colors = document.getElementsByName("favoriteColor");
for(let i=0; i<colors.length; i++){
    colors[i].addEventListener("change", ncFunc);
}


// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.
let hideFunc = function hiding(){
    let empNames = document.getElementsByClassName("empName");
    for(let i=0; i<empNames.length; i++){
        if(empNames[i].parentElement.querySelector(':hover') === empNames[i]){
            if(empNames[i].style.opacity == 100){
                empNames[i].style.opacity = 0;
            }
            else{
                empNames[i].style.opacity = 100;
            }
        }
    }
}
let empNames = document.getElementsByClassName("empName");
for(let i=0; i<empNames.length; i++){
    empNames[i].addEventListener("mouseover", hideFunc);
}


// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.
setInterval(function(){
    let time = document.getElementById("currentTime");
    let date = new Date;
    let sec = date.getSeconds();
    let min = date.getMinutes();
    let hour = date.getHours();

    //If time past 12, it's PM
    if(hour>12){
        time.innerText = `${hour%12}:${min}:${sec} PM`;
    }
    //Else, AM
    else{
        time.innerText = `${hour%12}:${min}:${sec} AM`;
    }
}, 1000);

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.
function onHello(){
    let hello = document.getElementById("helloWorld");
    setTimeout(()=>{
        //NOTE: I did not think up this random color generation.
        //got it from the internet
        hello.style.color = "#"+((1<<24)*Math.random()|0).toString(16);
    }, 3000);
}

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).
function walkTheDOM(node, func){
    for(let n in node.childNodes){
        func(node.childNodes[n], func);
    }
}