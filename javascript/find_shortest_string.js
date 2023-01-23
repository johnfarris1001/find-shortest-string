function findShortestString(arr) {
  // type your code here
  let lengths = []
  for (let i = 0; i < arr.length; i++) {
    lengths.push(arr[i].length)
  }
  return arr[lengths.indexOf(Math.min(...lengths))]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'houston'");
  console.log("=>", findShortestString(['scranton', 'philadelphia', 'west lafayette', 'houston']));

  console.log("");

  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['a']));

  console.log("");

  console.log("Expecting: 'tily'");
  console.log("=>", findShortestString(['floatilla', 'tortilla', 'manilla', 'caterpilla', 'tily', 'stella', 'walnut', 'creek', 'afls']));

  console.log("");

  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
  const startTime = Date.now()
  const smallInput = ['cecy', 'tilly', 'stella']

  const longInput = []

  for (let i = 0; i < 1000; i++) {
    let str = ''
    for (let j = 0; j < 1000; j++) {
      if (Math.random() < 0.1) {
        str = str + 'a'
      }
    }

    longInput.push(str)
  }
  console.log(longInput)

  for (let i = 0; i < 10000; i++) {
    findShortestString(smallInput)
    findShortestString(longInput)
  }

  const averageTime = (Date.now() - startTime) / 2000

  console.log(averageTime)

}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
