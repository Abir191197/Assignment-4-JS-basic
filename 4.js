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
