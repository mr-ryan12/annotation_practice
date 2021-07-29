// Declare a function named 'getSandwichInfo' without parameters
function getSandwichInfo() {
  // Declare a variable named 'sandwiches' and assign it a value of an array with 6 elements
  var sandwiches = ['Philly cheesesteak', 'Italian sub', 'Reuben', 'Bahn Mi', 'Nashville Hot Chicken', 'Caprese']
  // Declare a variable named 'whatIsShift' and assign it a value of the first element in the array
  var whatIsShift = sandwiches.shift()
  // Delcare a variable named 'whatIsPop' and assign it a value of the last element in the array
  var whatIsPop = sandwiches.pop()
  // Declare a variable named 'whatIsLength' and assign it the value the total number of elements in the sandwiches array
  var whatIsLength = sandwiches.length
  // Declare a variable named 'whatIsIndex' and assign it a value of the element at index 2 in the sandwiches array
  var whatIsIndex = sandwiches[2]

  // Create a for loop that prints the string to the console interpolated with the values of the elements in the sandwiches array
  for (var i = sandwiches.length - 1; i >= 0; i--) {
    console.log(`Hmmmm... Lemme get uh... Ummm... I'll take a ${sandwiches[i]} please. Thanks.`)
  }

  // Declare a variable named 'dinnerSpecial' and assign it the value of an array containing 4 elements
  var dinnerSpecial = [sandwiches[1], sandwiches[sandwiches.length - 1], 'fries', 'two drinks']
  // Print to the console the value of the first element in the dinnerSpecial array
  console.log(dinnerSpecial[0])
  // Assign the element in the third index a value of the string
  dinnerSpecial[3] = 'a coupla Baja Blasts'
  // Print to the console the value of the element in index 2 of the dinnerSpecial array
  console.log(dinnerSpecial[2])
  // Assign the element of index 2 the value of the string
  dinnerSpecial[2] = 'onion rings'

  // Declare a variable named 'dailySpecial' whose value is an array with 3 elements
  var dailySpecial = [sandwiches[0], 'chips', 'drink']
  // Print to the console the value of the element in index 2 of the dailySpecial array
  console.log(dailySpecial[2])
  // Assign the element in the first index the value of the string
  dailySpecial[0] = 'Chesseburkle'
  // Print to the console the 'dailySpecial' array
  console.log(dailySpecial)
  // Assign the element in index 1 of the dailySpecial array the value of the element in index 3 in the sandwiches array
  dailySpecial[1] = sandwiches[3]
}