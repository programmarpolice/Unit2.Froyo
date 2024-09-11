// A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors.
// They type vanilla,vanilla,vanilla,strawberry,coffee,coffee.
//  When they view the browser console, they observe a table listing how many of each flavor they have ordered.
// In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.

// Prompt the user for list of flavors separated by commas.
const userInputString = prompt(
  "Please enter your desired flavors separated by commas.",
  "vanilla,strawberry,coffee"
);
console.log("flavors", userInputString);

// Convert input into array
const froyoOrderArray = userInputString.split(",");
console.log(froyoOrderArray);
console.log(froyoOrderArray.length);

// Create an object
const flavorsObject = {};
for (let i = 0; i < froyoOrderArray.length; i++) {
  // i = 2
  const flavor = froyoOrderArray[i]; // flavors = "coffee"
  console.log(flavor); // log coffee in the browser console
  flavorsObject[flavor] = 1; // flavorsObject = { "vanilla" : 1, "strawberry" : 1 "coffee" : 1}
  if (flavorsObject[flavor]) {
    flavorsObject[flavor] += 1;
    //   } else {
    //     flavorsObject[flavor] = 1;
  }
  // Check to see IF the flavor exist and increment the flavor by one
  // Else the flavor does not exist define it and set it to one
}

console.log("Total of each flavor: ", flavorsObject);
