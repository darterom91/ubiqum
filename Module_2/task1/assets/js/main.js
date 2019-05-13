var myName = "David";
var age = 27;
var ageIgnasi = 32;
var ageLimit = 21;
var lst = ["Victor","Alejandro", "Andrea", "Joan", "Didac", "Marina", "Carlota", "Alberto", "Roger", "Cristina"];
var ages = [21,22,29,24,30,27,18,16,24,29];
var agesMed = 0;
var ageRes = 0;
var aux = 0;
var valorTotal;
var i = 0, j = 0;

//Writing expressions with variables

//Exercise 1: In your JavaScript file create a variable called myName with your name as the value. Put your name inside string quotes, e.g., "my name". Then add a line of code to print the variable name to the console after the previous message.
console.log("My name is "+myName);

//Exercise 2: Create a variable called age with a number that is your age. Do not use string quotes for numbers.
console.log("I have "+age+" ages");

//Exercise 3: Create a variable called ignasiAge with a value 32. Create another variable called ageDiff and set it to an expression that calculates your age minus Ignasi's age.  Print the value of ageDiff.
console.log("Diferens of ages ignasi and me is: "+(ageIgnasi-age));

// Writing code with conditionals

//Exercise 4: Write a conditional that compares the variable with your age with the number 21. It should print either "You are older than 21" or "You are not older than 21", appropriately, depending on your age.
if (ageLimit < age) {
  console.log("You are older than 21");
}else{
  console.log("You are not older than 21");
}

if (age > ageIgnasi) {
  console.log("you are older that Ingnasi");
} else if (age < ageIgnasi) {
  console.log("you are younger that Ingnasi")
} else{
  console.log("Ingnasi and me are same age");
}

//Sorting an Array

//Exercise 1: Create an array with all the names of your class (including mentors).  Sort the array alphabetically.  Print the first element of the array in the console.  Print the last element of the array in the console.  Print all the elements of the array in the console.  Use a "for" loop.

lst.sort();
console.log(lst.length);

console.log("The first name is "+lst[0]);

for(i = 0;i < lst.length;i++){
  console.log("The name "+(i+1)+" is :"+lst[i]);
}

//Looping over an array 

//Exercise 2: Create an array with all the ages of the students in your class.  Iterate the array using a while loop, and then print every age in the console.  Add a conditional inside the while loop to only print even numbers.  Change the loop to use a "for" loop instead of a "while" loop.
i=0;
while(i<ages.length){
  console.log("the age "+(i+1)+" is: "+ages[i]);
  i++;
}

//Functions that use arrays
//Exercise 3: Write a function which receives an array as a parameter and prints the lowest number in the array to the console.
aux = 0;
for(i=0;i<ages.length;i++){
  aux = aux + ages[i];
  valorTotal = aux;
  console.log(aux + " + " + ages[i] + " = " + valorTotal);
}
console.log("El resultado\n");
console.log("-- ---------");
console.log("-  La suma de todas las edades es: " + valorTotal);

agesMed = valorTotal / ages.length;

console.log("- La media de todas las edades es: "+agesMed);

//Show lowest numbers
console.log(lowestNumber(ages));
function lowestNumber(ages) {
  i = 0;
  console.log("The lowest number in the array of ages");
  console.log("--- ------ ------ -- --- ----- -- ----");
  while (i < ages.length) {
    if (ages[i] < agesMed) {
      console.log("the age " + i + " is: " + ages[i]);
    }
    i++;
  };
}

//Exercise 4: Write a function which receives an array as a parameter and prints the biggest number in the array to the console.

//Show biggest numbers
console.log(biggestNumber(ages));

function biggestNumber(ages) {
  i = 0;
  console.log("The biggest number in the array of ages");
  console.log("--- ------- ------ -- --- ----- -- ----");
  while (i < ages.length){
    if (ages[i] > agesMed) {
      console.log("the age " + i + " is: " + ages[i]);
    }
    i++;
  };
}

//Exercise 5: Write a function which receives two parameters, an array and an index.  The function will print the value of the element at the given position (one-based) to the console

var index = 5;
i=0;

indexValue(ages, index);
function indexValue(age, index) {
  do {
      if( index == i){
        console.log("The value "+index+" is "+ages[i]);
      }
    i++;
  } while (i<ages.length);
}

//Exercise 6: Write a function which receives an array and only prints the values that repeat.
var values = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
equalsAge(values);
function equalsAge(values) {
  for (i = 0; i < values.length; i++) {
    for (j = 0; j < values.length; j++) {
      if (values[i] == values[j]){
        if (i<j && i!=j) {
          console.log("El value[" + i + "] " + values[i] + " == value[" + j + "] " + values[j]);
        }
      }
    }
  }
}

//Exercise 7: Write a simple JavaScript function to join all elements of the following array into a string. 
var myColors =["Red", "Green", "White", "Black"];
indexValue(myColors);
function indexValue(myColors) {
  console.log("\""+myColors[0]+"\", \""+myColors[1]+"\", \""+myColors[2]+"\", \""+myColors[3]+"\"");
}