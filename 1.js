// problem 1 mindGame 


function mindGame(number) {

  const loop = typeof number;
  if (loop == "number")
  {

  let multipule = number * 3;
  let add = multipule + 10;
  let divide = add / 2;
  let minus = divide - 5;
  const final = minus;
  return final;
  }
  else {
    return "Error Input is Not a number";
  }
}

mindGame(number);

//                               function work 

// 1.1st check validation if  type of return number then go inside or retrun Error 

// then we multiple the number with 3 then with that value we add 10 then we divide with 2 and then we divide 5 and then final value we return . 

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------


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


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------




// problem 3 isLGSeven 


function isLGSeven(value) {
  const loop = typeof value;
  if (loop == "number") {
    if (value <= 7) {
      return value - 7;
    } else {
      return value * 2;
    }
  } else {
    return "Error Input is Not number";
  }
}

isLGSeven(value);


//                              function work 

// 1.1st check validation if  type of return number then go inside or retrun Error 
// then if value less then 7 we return value -7  else return multiple two value.




// ----------------------------------------------------------------------------------------------------------------------------------------------------------------



// Problem 4 findingBadData 

function findingBadData(arr) {
  const loop = Array.isArray(arr);
  if (loop === true) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        count++;
      }
    }
    return count;
  } else {
    return "Error Input is Not Array";
  }
}


findingBadData(arr);


//                     Function Work 
// 1.vali check if array then true and inside the loop.Or return error. 
// 2.inside loop count start in zero and find array length. 
// 3.then if array value less then zero then count one. 
// 4.Then loop finished and return count value . 





// ----------------------------------------------------------------------------------------------------------------------------------------------------------------



// problem 5 gemsToDiamonds

function gemsToDiamonds(gems1, gems2, gems3) {
  const loop = typeof (gems1, gems2, gems3);

  if (loop === "number") {
    const power1 = 21;
    const power2 = 32;
    const power3 = 43;
    const totalPower = gems1 * power1 + gems2 * power2 + gems3 * power3;
    let totalDiamonds = totalPower;
    if (totalDiamonds > 1000 * 2) {
      totalDiamonds -= 2000;
    }
    return totalDiamonds;
  } else {
    return "Error Input is Not Number";
  }
}

gemsToDiamonds(gems1, gems2, gems3);


                    // function work
// 1.   1st check validation if  type of return number then go inside or retrun Error ,then 3 power we total multiple with input gems .then if total diamond power  greater than 2000 then we return total diamonds -2000 or if less than total diamond we return just value.   



// ----------------------------------------------------------------------------------------------------------------------------------------------------------------









