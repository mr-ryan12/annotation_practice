// Declare a function named 'buildABear' and pass in 5 arguments
function buildABear(name, age, fur, clothes, specialPower) {
  // Declare a variable named 'greeting' and assign it the value of the string `Hey partner! My name is ${name} - will you be my friend?!`
  // with the variable 'name' interpolated in.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`
  // Declare a variable named 'demographics' and assign it a value of an array with 2 elements.
  var demographics = [name, age]
  // Declare a variable named 'powerSaying' and assign it a value the string "Did you know that I can " + specialPower + " ?"
  // with the 'specialPower' variable concatenated in.
  var powerSaying = "Did you know that I can " + specialPower + " ?"
  // Declare an object named 'builtBear' and assign it 6 key/value pairs.
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  }

  //When this function is called it will return the 'builtBear' object.
  return builtBear
}

// Invoke the 'buildABear' function and pass the arguments ('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares')
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares')
// Invoke the 'buildABear' function and pass the arguments ('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in')
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in')
