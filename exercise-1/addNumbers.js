// Declare function named addNumbers without parameters
function addNumbers() {
  // Declare a variable named firstNum and assign it a value of 9
  var firstNum = 9
  // Declare a variable named secondNum and assign it a value of 14
  var secondNum = 14

  // Reassign the firstNum variable to a value of 3
  firstNum = 3
  // Reassign the secondNum variable to a value of 4
  secondNum = 4

  // Declare a variable named nums and assign it a value of an array consisting of the variables firstNum and secondNum
  var nums = [firstNum, secondNum]

  // Declare a variable named product and assign it a value of the variable firstNum multiplied by secondNum
  var product = firstNum * secondNum
  // Declare a value of sum and assign it the value of the variable firstNum added to the variable secondNum
  var sum = firstNum + secondNum
  // Declare a variable named average and assign it a value of the variable sum divided by the length of the nums array
  var average = sum / nums.length

  // Print to the console the value of the element in the first index in the nums array
  console.log(nums[0])
  // Print to the console the value of the element in the second index in the nums array
  console.log(nums[1])

  // Print to the console the string with the values num1 and num2 interpolated if num1 and num2 existed
  console.log(`The first number is ${num1} and the second number is ${num2}!`)

  // When the function is called, it will return the value of the variable 'sum'
  return sum
}