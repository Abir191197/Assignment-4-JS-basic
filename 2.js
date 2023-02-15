// problem 2 evenOdd 


function evenOdd(input) {
  const loop = typeof input;

  if (loop == "string") {
    const total = input.length;

    if (total % 2 == 0) {
      return "even";
    } else {
      return "odd";
    }
  } else {
    return "Error Input is Not a Number";
  }
}

evenOdd(input);

//                          function work 

// 1.1st check validation if  type of return string then go inside or retrun Error .then  we count index of length then if length mod true that means even or return Odd.
