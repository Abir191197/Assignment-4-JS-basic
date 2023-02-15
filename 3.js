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


