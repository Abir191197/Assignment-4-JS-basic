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