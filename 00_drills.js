// Feel free to look things up online!

// How to read the syntax:

// const functionName = (inputs) => {
//   **body of the function**
//   return (output)
// };

// SYNTAX NOTE: on a function with one parameter (input) the parenthesis are omitted

// TODO - write a function which reverses the string
const reverse = (str) => {
  let reversed = "";
  for (let i = str.length-1; i >= 0; i--)
  {
    reversed += str[i];
  }
  return reversed;
};

// TODO - write a function which returns the factorial of a positive integer
// check for when number is = 0 and neg #s
const factorial = (num) => {
  let factorial = 1;
  for (let i = num; i > 1; i--)
  {
    factorial *= i;
  }
  return factorial;

};

// TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
// if the two arrays are of unequal length
// Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
const zip = (arr1, arr2) => {
  if (arr1.length !== arr2.length)
  {
    return (-1);
  }
  let zip = [];
  for (let i = 0; i < arr1.length; i++)
  {
    let tracker = [];
    tracker.push(arr1[i]);
    tracker.push(arr2[i]);
    zip.push(tracker)
  }
  return zip;
};

// TODO - Write a function which does the opposite of `zip()`
const unzip = (arr) => {
    let array = arr[0];
    let ogLen = array.length;
    let unzip = [];
  for (let i = 0; i < ogLen; i++)
  {
    let tracker = [];
    for (let j = 0; j < arr.length; j++)
    {
      tracker.push((arr[j])[i]);
    }
    unzip.push(tracker);
  }
  return unzip;
};

// TODO - write a function which shifts a string `num` characters to the right
// Example = shiftRight("Hello", 3) === "lloHe"
const shiftRight = (str, num) => {
  let shifted = "";
  let connect = Math.abs(str.length - num);
  if (num < str.length)
  {
    shifted = str.substring(connect) + str.substring(0,connect);
  }
  else
  {
    shifted = str.substring(connect+1) + str.substring(0,connect+1);
  }
  return shifted;
};

// CHALLENGE - write a function which returns the current date in the following string format:
// "Today's date is January 7th, 2016. It is 11:37 in the morning."
const announceDate = () => {

  // to get the current month
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const date = new Date();
  currentMonth = month[date.getMonth()];

  // to get the current day and add ordinal
  let dayNum = date.getDate();
  let j = dayNum % 10, k = dayNum % 100;
  if (j == 1 && k != 11) 
  {
    currentDay = dayNum + "st";
  }
  else if (j == 2 && k != 12) 
  {
    currentDay = dayNum  + "nd";
  }
  else if (j == 3 && k != 13) 
  {
    currentDay = dayNum + "rd";
  }
  else
  {
    currentDay = dayNum + "th";
  }

  // to get the full year
  let year = date.getFullYear();

  // to get time 
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let morning = true;
  let currentTime = ""
  if (hours > 0 && hours <= 12) 
  {
    hours =  hours;
  } 
  else if (hours > 12) 
  {
    hours = (hours - 12);
    morning = false;
  } 
  if (morning)
  {
    currentTime = `${hours}` + `:` + `${minutes}` + ` in the morning.`;
  }
  else
  {
    currentTime = `${hours}` + `:` + `${minutes}` + ` in the evening.`;
  }

  return ( `Today's date is ` + `${currentMonth}` + ` ${currentDay}` + `, ` + `${year}. ` + `It is ` + `${currentTime}` );
};

module.exports = {
  reverse,
  factorial,
  zip,
  unzip,
  shiftRight,
  announceDate,
}
