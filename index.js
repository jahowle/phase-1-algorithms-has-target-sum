

function hasTargetSum(array, target) {
  // Write your algorithm here
  let sums = []
  for (i = 0; i < array.length; i++) {
    for (a = i + 1; a < array.length; a++) {
      sums.push(array[i] + array[a])
    }
  }
  if (sums.includes(target)) {
    return true
  } else {
    return false
  }
  }

/* 
  Write the Big O time complexity of your function here
  0(n^2)
*/

/* 
  Get the first element of the array
  Add that first element to the second element of the array and check to see if its the same as the target
  If not, add the first element of the array to next element and so on
  If all additions fail, get the second element of the array and add 

*/

/*
  I initialized an array to hold the sums of the additions that were created by looping over the array
  I create a FOR loop that took the first index of the array and ran another FOR loop over it adding
  the next number in the array, and then the next making sure to start that iteration from
  the next index in the array from the current selected index
  I then looked though the resulting array to find out if the target value existed in it
  if it did i returned true, if not i returned false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  // console.log("Expecting: true");
  // console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  // console.log("");

  // console.log("Expecting: true");
  // console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  // console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  //should be [3, 6, 7]
}

module.exports = hasTargetSum;
