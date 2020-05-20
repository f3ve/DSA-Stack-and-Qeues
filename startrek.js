const Stack = require('./Stack')
const stackHelpers = require('./stack-helpers')

const starTrek = new Stack()

console.log(stackHelpers.isEmpty(starTrek))

starTrek.push('Kirk')
starTrek.push('Spock')
starTrek.push('McCoy')
starTrek.push('Scotty')

console.log(stackHelpers.peek(starTrek))

console.log(stackHelpers.isEmpty(starTrek))
// console.log(stackHelpers.display(starTrek))
starTrek.pop()
console.log(stackHelpers.display(starTrek))