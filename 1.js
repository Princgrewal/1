function findDivisors(userInput) {
    if (isNaN(userInput) || userInput <= 0) {
      console.log("Please enter a positive integer greater than 0.");
      return;
    }
  
    console.log("Numbers divisible by", userInput, "between 1 and 100 are:");

    for (let i = 1; i <= 100; i++) {

      if (i % userInput === 0) {
        console.log(i);
      }
    }
  }
  
  const userInput = parseInt(prompt("Enter a number:"));
  
  findDivisors(userInput);