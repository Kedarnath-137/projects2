function startTime() {
  var today = new Date();
  var hour = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  //time format
  if (hour <= 12) {
    hour = hour;
  } else {
    hour = hour - 12;
  }

  //add zero if less than 10
  hour = concatZero(hour);
  minutes = concatZero(minutes);
  seconds = concatZero(seconds);

  document.getElementById('time').innerText =
    hour + ':' + minutes + ':' + seconds;
  setTimeout(startTime, 0);
}

function concatZero(value) {
  if (value < 10) {
    value = '0' + value;
  }
  return value;
}

//screen;
let screen = document.getElementById('screen');

// type to display screen;
function press(numValue) {
  // if (screen.value == 0) {
  //   screen.value = '';
  // }
  screen.value += numValue;
}

//clear screen

function clearScreen(val) {
  screen.value = val;
}

// delete key;
function backSpace() {
  // const space = screen;
  screen.value = screen.value.slice(0, screen.value.length - 1); // substring(strtidx, endidx) // slice(startidx, lastindx)
}

// calculation function;
function calculate() {
  if (screen.value != '') {
    try {
      clearScreen(eval(screen.value));
    } catch {
      clearScreen('bad expression');
    }
  }
}

// function to calculate the sine, cosine, and tan
function sine() {
  screen.value = Math.sin((screen.value * Math.PI) / 180); // math.pi convert angle to degree.
}

function cosine() {
  screen.value = Math.cos((screen.value * Math.PI) / 180);
}

function tan() {
  screen.value = Math.tan((screen.value * Math.PI) / 180);
}

// function to calculate the asin, acos, and atan
function invsine() {
  screen.value = Math.asin(screen.value) * (180 / Math.PI);
}

function invcosine() {
  screen.value = Math.acos(screen.value) * (180 / Math.PI);
}

function invtan() {
  screen.value = Math.invtan(screen.value) * (180 / Math.PI);
}

// function to calculate the natural logarithm
function ln() {
  screen.value = Math.log(screen.value);
}

function log() {
  screen.value = Math.log10(screen.value);
}

// function for percentage
function percent() {
  screen.value = screen.value / 100;
}

// function for square, cube and square root
function square() {
  screen.value = Math.pow(screen.value, 2);
}

function cube() {
  screen.value = Math.pow(screen.value, 3);
}

function sqrt() {
  screen.value = Math.sqrt(screen.value);
}

// function for +/- (plusMinus)
function plusMinus() {
  var x = screen;
  var y = x.value;
  y = y * -1;
  x.value = y;
}

// Exp
function Exp() {
  screen.value = Math.pow(10, screen.value); // rasing power to the current value
}
