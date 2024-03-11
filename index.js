// console.log(`test`); (just testing to make sure js was connected)

/* 
1. creat a user prompt to enter order
2. turn that list into an array and split the answers
3. create a function to count the input from prompt
4. create object that uses array items to display order/count
5. return a table of the order
*/

const flavorSelect = prompt(`enter a comma-seperated froyo flavor list for what order you would like. ex if you want two vanilla scoops, one chocolate, and one mint you would enter vanilla,vanilla,chocolate,mint` ).split`,`;

// console.log(flavorSelect) (just testing to make sure prompt and split work)

// created a function that would intake the prompt
const order = (flavorsOrder) => {
  // had to declare an empty object so that we can put the input in it
  let finalOrder = {};
  // made a for loop to run throught the prompt
  for(let i = 0; i < flavorsOrder.length; i++){
    // this will declare the individual answers as inputFlavors
    const inputFlavor = flavorsOrder[i];
    // this if statement will recognize if the same value was entered in the prompt. this took me a ton of trial and error/googling to figure out lol
    if(finalOrder[inputFlavor]){
      // this adds a tally to the flavor every time it was entered in prompt
      finalOrder[inputFlavor]++;
    } 
    // this will make it so that if the flavor is entered only one time it is 1
    else {
      finalOrder[inputFlavor] = 1;
    }
  }
  // this returns the new object with its contents
  return finalOrder
}

// i used console.table to introduce the answer to the console using the function and the prompt
console.table(order(flavorSelect));