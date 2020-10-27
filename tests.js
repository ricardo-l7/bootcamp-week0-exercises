const assert = require('assert')
const {
  reverse,
  factorial,
  zip,
  unzip,
  shiftRight,
  announceDate,
} = require('./00_drills')
const {
  getArchae,
  getHumans,
  addHuman,
  getBestDomain,
  setGetBestDomain,
  getRanks,
  noEukaryotes,
  TreeOfLife,
} = require('./01_objects')
const myForEach = require('./02_myForEach')
const myFilter = require('./03_myFilter')
const myMap = require('./04_myMap')
const myReduce = require('./05_myReduce')

const RED = '\x1b[31m'
const GREEN = '\x1b[32m'
const END_COLOR = '\x1b[0m'

let totalTests = 0
let totalPassed = 0

const test = (testNumber, result, input, expected) => {
  try {
    assert.deepEqual(result, expected)
    totalPassed += 1
    console.log(`test ${testNumber}: ${GREEN}%s${END_COLOR}`, 'PASSED')
  } catch {
    console.log(`test ${testNumber}: ${RED}%s${END_COLOR}`, 'FAILED')
    console.log(`Input: ${JSON.stringify(input)}`)
    console.log(`Expect: ${JSON.stringify(expected)}`)
    console.log(`Result: ${JSON.stringify(result)}`)
  }
  totalTests += 1
}

// reverse
const reverseTests = [
  ['', ''],
  ['abcde', 'edcba'],
  ['1234', '4321'],
]
console.log('Testing reverse')
reverseTests.forEach(([input, output], i) =>
  test(i, reverse(input), input, output)
)
console.log('\n')

// factorial
const factorialTests = [
  [0, 1],
  [1, 1],
  [2, 2],
  [3, 6],
  [4, 24],
  [5, 120],
]
console.log('Testing factorial')
factorialTests.forEach(([input, output], i) =>
  test(i, factorial(input), input, output)
)
console.log('\n')

// zip
console.log('Testing zip')
const zipTests = [
  [
    [
      [1, 2, 3],
      [4, 5, 6],
    ],
    [
      [1, 4],
      [2, 5],
      [3, 6],
    ],
  ],
  [[[], [1]], -1],
  [[[], []], []],
]
zipTests.forEach(([input, output], i) => test(i, zip(...input), input, output))
console.log('\n')

// unzip
console.log('Testing unzip')
const unzipTests = [
  [
    [
      [1, 4],
      [2, 5],
      [3, 6],
    ],
    [
      [1, 2, 3],
      [4, 5, 6],
    ],
  ],
]
unzipTests.forEach(([input, output], i) => test(i, unzip(input), input, output))
console.log('\n')

// shiftRight
console.log('Testing shiftRight')
const shiftRightTests = [
  [['hello', 0], 'hello'],
  [['hello', 2], 'lohel'],
  [['world', 7], 'ldwor'],
]
shiftRightTests.forEach(([input, output], i) =>
  test(i, shiftRight(...input), input, output)
)
console.log('\n')

// announceDate
console.log('Testing announceDate')
const announceRegex = /^Today's date is .+. It is .+ in the .+\.$/
const dateCorrect = announceRegex.test(announceDate())
if (dateCorrect) {
  totalPassed += 1
  console.log(`test 0: ${GREEN}%s${END_COLOR}`, 'PROBABLY PASSED ;)')
} else {
  console.log(`test 0: ${RED}%s${END_COLOR}`, 'FAILED')
  console.log(`Got: ${announceDate()}`)
}
totalTests += 1
console.log('\n')

// getArchae
console.log('Testing getArachae')
test(0, getArchae(), null, TreeOfLife.archae)
console.log('\n')

// getHumans
console.log('Testing getHumans')
test(0, getHumans(), null, TreeOfLife.eukarya.animalia.humans)
console.log('\n')

// addHuman
console.log('Testing addHuman')
addHuman('paul')
test(0, TreeOfLife.eukarya.animalia.humans, null, [
  'you',
  'me',
  'us',
  'them',
  'everyone!',
  'paul',
])
console.log('\n')

// getBestDomain
console.log('Testing getBestDomain')
test(0, getBestDomain(), null, 'archaebacteria')
console.log('\n')

// setGetBestDomain
console.log('Testing setGetBestDomain')
test(0, setGetBestDomain('eukarya'), null, TreeOfLife.eukarya)
console.log('\n')

// getRanks
console.log('Testing getRanks')
test(0, getRanks(), null, ['domain', 'kingdom', 'phylum'])
console.log('\n')

// noEukaryotes
console.log('Testing noEukaryotes')
const { eukarya, ...rest } = TreeOfLife
test(0, noEukaryotes(), null, rest)
console.log('\n')

// myForEach
console.log('Testing myForEach')
let forEachSum = 0
const forEachTest = [1, 2, 3, 4]
myForEach(forEachTest, (v) => {
  forEachSum += v
})
test(0, forEachSum, null, null)

// myFilter
console.log('Testing myFilter')
const filterTests = [
  [
    [[1, 2, 3, 4], (v) => v % 2 === 1],
    [1, 3],
  ],
  [
    [['', 1, 'here', null], (v) => !!v],
    [1, 'here'],
  ],
]
filterTests.forEach(([input, output], i) =>
  test(i, myFilter(...input), input, output)
)
console.log('\n')

// myMap
console.log('Testing myMap')
const mapTests = [
  [
    [[1, 2, 3, 4], (v) => v * 2],
    [2, 4, 6, 8],
  ],
  [
    [['', 1, 'here', null], (v) => !!v],
    [false, true, true, false],
  ],
]
mapTests.forEach(([input, output], i) =>
  test(i, myMap(...input), input, output)
)
console.log('\n')

// myReduce
console.log('Testing myReduce')
const reduceTests = [
  [[[1, 2, 3, 4], (acc, cur) => acc + cur, 0], 10],
  [[[1, 2, 3, 4], (acc, cur) => acc + cur, 5], 15],
]
filterTests.forEach(([input, output], i) =>
  test(i, myReduce(...input), input, output)
)
console.log('\n')

console.log(`Tests passed: ${totalPassed}/${totalTests}`)
if (totalTests === totalPassed) {
  console.log(`${GREEN}GREAT JOB!${END_COLOR}`)
}
