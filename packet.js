//1. Fibonacci
// Define function: fib(n) 
// Return the nth number in the fibonacci sequence.
function fib(n){
    if(n === 0 || n === 1){
        return 1;
    }
    else{
        return fib(n-1)+fib(n-2);
    }
}

// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.
function bubbleSort(numArray){
    let len = numArray.length;

    for(let i = 0; i<len-1; i++){
        for(let j = 0; j<len-i-1; j++){
            if(numArray[j]>numArray[j+1]){
                let temp = numArray[j];
                numArray[j] = numArray[j+1];
                numArray[j+1] = temp;
            }
        }
    }

    return numArray;
}

// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.
function reverseStr(someStr){
    let arr = someStr.split("");
    let newStr = "";

    for(let i=arr.length-1; i>=0; i--){
        newStr += arr[i];
    }

    return newStr;
}

// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.
function factorial(someNum){
    if(someNum === 1){
        return 1;
    }
    else{
        return someNum * factorial(someNum-1);
    }
}

// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.
function substring(someStr, length, offset){
    if(length<1 || offset<1){
        alert("Error: Negative Input!");
    }
    else if(someStr.length<1){
        alert("Error: String length too short!");
    }
    else if(length+offset > someStr.length){
        alert("Error: length+offset too long!");
    }
    else{
        return someStr.substring(offset, offset+length);
    }
}

// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.
function isEven(someNum){
    let z = someNum/2;
    return (z - Math.floor(z)) === 0;
}

// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false
function isPalindrome(someStr){
    let i=0, j=someStr.length-1;
    while(i<=j){
        if(someStr[i] !== someStr[j]){
            return false;
        }
        i++;
        j--
    }

    return true;
}

// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *
function printShape(shape, height, character){
    let out = "";

    switch (shape) {
        case "Square":
            for(let i=0; i<height; i++){
                for(let j=0; j<height; j++){
                    out += character;
                }
                out += "\n";
            }
            console.log(out);
            break;
        case "Triangle":
            for(let i=0; i<height; i++){
                for(let j=0; j<=i; j++){
                    out += character;
                }
                out += "\n";
            }
            console.log(out);
            break;
        case "Diamond":
            //make correct height
           
                //first half
                for(let amt=1; amt<=height; amt+=2){
                    for(let j=0; j<amt; j++){
                        out += character;
                    }
                    out += "\n";
                }
            

            
                //first half
                for(let amt=height-2; amt>0; amt-=2){
                    for(let j=0; j<amt; j++){
                        out += character;
                    }
                    out += "\n";
                }
            
            
            console.log(out);
            break;
        default:
            break;
    }
}

// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.
function traverseObject(someObj){
    for(let key in someObj){
        console.log(`${key}: ${someObj[key]}`);
    }
}

// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.
function deleteElement(someArr){
    console.log(someArr.length);
    delete someArr[2];
    console.log(someArr.length);
}

// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.
function spliceElement(someArr){
    console.log(someArr.length);
    someArr.splice(2, 1);
    console.log(someArr.length);
}

// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	var john = new Person("John", 30);
function Person(name, age){
    this.name = name;
    this.age = age;
}

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	var john = getPerson("John", 30);
function getPerson(name, age){
    return {name: name, age: age};
}