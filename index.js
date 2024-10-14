function sortNumber(randomNumber) {
 // Loop through each element in the array starting from the second element (i = 1)
  for (let i = 1; i < randomNumber.length; i++) {
    // Store the current element we're trying to position correctly
    let currentNumber = randomNumber[i];

    // Set the index of the element just before the current element
    let endNumber = i - 1;

    // Shift elements of randomNumber[0...i-1], that are greater than currentNumber, one position to the right
    // Keep shifting as long as endNumber is greater than or equal to 0 and the element is greater than currentNumber
    while (endNumber >= 0 && randomNumber[endNumber] > currentNumber) {
      // Move the element one position to the right
      randomNumber[endNumber + 1] = randomNumber[endNumber];

      // Decrement endNumber to keep checking the next element to the left
      endNumber--;
    }

    // Insert the currentNumber in its correct position
    randomNumber[endNumber + 1] = currentNumber;
  }

  // Return the sorted array
  return randomNumber;
}

// Test the function by sorting an array of numbers
console.log(sortNumber([4, 5, 3, 1, 2, 6, 9, 8, 7]));
