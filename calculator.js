const display = document.querySelector("#display");
const buttonContainer = document.querySelector("#buttonContainer");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const point = document.querySelector("#point");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const times = document.querySelector("#times");
const division = document.querySelector("#division");
const squared = document.querySelector("#squared");
const clear = document.querySelector("#clear");
const equals = document.querySelector("#equals");
const factorial = document.querySelector("#factorial");
const back = document.querySelector("#back");
const displayMini = document.querySelector("#displayMini");
let op = "";
let num1;
let num2;
let result;

function add(num1, num2) {
  return (num1 + num2);
}

function subtract(num1, num2) {
  return (num1 - num2);
}

function multiply(num1, num2) {
  return (num1 * num2);
}

function divide(num1, num2) {
  if (num2 > 0 || num2 < 0) {
    return (num1 / num2);
  } else {
    return "NICE TRY";
  }
}

function power(num1, num2) {
  if (Number.isInteger(num1) && Number.isInteger(num2)) {
    return (num1 ** num2);
  } else {
    return "Error";
  }
}

function factor(num1) {
  if (Number.isInteger(num1)) {
    let asdf = Array(num1);
    let arr = [...asdf];
    for (let i = 0; i < num1; i++) {
      arr[i] = num1 - i;
    }
    return arr.reduce((accumulator, currentValue) => {
      return accumulator * currentValue;
    }, 1);
  } else {
    return "Error";
  }
}

function operate(op, num1, num2) {
  if (op === "+") {
    result = add(num1, num2);
  } else if (op === "-") {
    result = subtract(num1, num2);
  } else if (op === "*") {
    result = multiply(num1, num2);
  } else if (op === "^") {
    result = power(num1, num2);
  } else if (op === "/") {
    result = divide(num1, num2);
  } else if (op === "!") {
    result = factor(num1);
  }
}
function clearAll() {
  display.innerText = "";
  displayMini.innerText = "";
  num1 = 0;
  num2 = 0;
  result = 0;
}

one.addEventListener("click", function () {
  display.innerText += this.innerText;
  displayMini.innerText += this.innerText;
});
two.addEventListener("click", function () {
  display.innerText += this.innerText;
  displayMini.innerText += this.innerText;
});
three.addEventListener("click", function () {
  display.innerText += this.innerText;
  displayMini.innerText += this.innerText;
});
four.addEventListener("click", function () {
  display.innerText += this.innerText;
  displayMini.innerText += this.innerText;
});
five.addEventListener("click", function () {
  display.innerText += this.innerText;
  displayMini.innerText += this.innerText;
});
six.addEventListener("click", function () {
  display.innerText += this.innerText;
  displayMini.innerText += this.innerText;
});
seven.addEventListener("click", function () {
  display.innerText += this.innerText;
  displayMini.innerText += this.innerText;
});
eight.addEventListener("click", function () {
  display.innerText += this.innerText;
  displayMini.innerText += this.innerText;
});
nine.addEventListener("click", function () {
  display.innerText += this.innerText;
  displayMini.innerText += this.innerText;
});
zero.addEventListener("click", function () {
  display.innerText += this.innerText;
  displayMini.innerText += this.innerText;
});
clear.addEventListener("click", function () {
  clearAll();
});
back.addEventListener("click", function () {
  const editedText1 = displayMini.innerText.slice(0, -1);
  const editedText2 = display.innerText.slice(0, -1);
  displayMini.innerText = editedText1;
  display.innerText = editedText2;
  num1 = +editedText1;
});
point.addEventListener("click", function () {
  let lastChar = displayMini.innerText.charAt(displayMini.innerText.length - 1);
  if (
    lastChar === "." ||
    lastChar === "+" ||
    lastChar === "-" ||
    lastChar === "*" ||
    lastChar === "/" ||
    lastChar === "^" ||
    lastChar === "!"
  ) {
    return "Error";
  }
  if (display.innerText.includes(".")) {
    return "Error";
  }

  display.innerText += ".";
  displayMini.innerText += ".";
  num1 = +display.innerText;
});

plus.addEventListener("click", function () {
  /* Prevents the user from entering multiple operations in succession */
  let lastChar = displayMini.innerText.charAt(displayMini.innerText.length - 1);
  if (
    lastChar === "+" ||
    lastChar === "-" ||
    lastChar === "*" ||
    lastChar === "/" ||
    lastChar === "^" ||
    lastChar === "!"
  ) {
    return "Error";
  }
  /* Prevents the operator from being displayed if the user clicks it when the screen */
  if (displayMini.innerText === "") {
    return "Error";
  }
  /* this entire if else block below is a template used for each operation. It looks at the operation used in the previous calculation, performs the calculation, then changes the op variable to prepare for the next calculation */
  if (displayMini.innerText.includes("+")) {
    op = "+";
    num2 = +display.innerText;
    console.log(num2);
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "+";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("-")) {
    op = "-";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "+";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("*")) {
    op = "*";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "+";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("/")) {
    op = "/";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "+";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("^")) {
    op = "^";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "+";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("!")) {
    op = "!";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "+";
    num1 = result;
    display.innerText = "";
  } else {
    op = "+";
    displayMini.innerText += "+";
    num1 = +display.innerText;
    console.log(num1);
    display.innerText = "";
  }
});

minus.addEventListener("click", function () {
  let lastChar = displayMini.innerText.charAt(displayMini.innerText.length - 1);
  if (
    lastChar === "+" ||
    lastChar === "-" ||
    lastChar === "*" ||
    lastChar === "/" ||
    lastChar === "^" ||
    lastChar === "!"
  ) {
    return "Error";
  }
  if (displayMini.innerText === "") {
    return "Error";
  }
  if (displayMini.innerText.includes("+")) {
    op = "+";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "-";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("-")) {
    op = "-";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "-";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("*")) {
    op = "*";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "-";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("/")) {
    op = "/";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "-";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("^")) {
    op = "^";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "-";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("!")) {
    op = "!";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "-";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else {
    op = "-";
    displayMini.innerText += "-";
    num1 = +display.innerText;
    display.innerText = "";
  }
});

times.addEventListener("click", function () {
  let lastChar = displayMini.innerText.charAt(displayMini.innerText.length - 1);
  if (
    lastChar === "+" ||
    lastChar === "-" ||
    lastChar === "*" ||
    lastChar === "/" ||
    lastChar === "^" ||
    lastChar === "!"
  ) {
    return "Error";
  }
  if (displayMini.innerText === "") {
    return "Error";
  }
  if (displayMini.innerText.includes("+")) {
    op = "+";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "*";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("-")) {
    op = "-";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "*";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("*")) {
    op = "*";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "*";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("/")) {
    op = "/";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "*";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("^")) {
    op = "^";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "*";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("!")) {
    op = "!";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "*";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else {
    op = "*";
    displayMini.innerText += "*";
    num1 = +display.innerText;
    display.innerText = "";
  }
});

division.addEventListener("click", function () {
  let lastChar = displayMini.innerText.charAt(displayMini.innerText.length - 1);
  if (
    lastChar === "+" ||
    lastChar === "-" ||
    lastChar === "*" ||
    lastChar === "/" ||
    lastChar === "^" ||
    lastChar === "!"
  ) {
    return "Error";
  }
  if (displayMini.innerText === "") {
    return "Error";
  }
  if (displayMini.innerText.includes("+")) {
    op = "+";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "/";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("-")) {
    op = "-";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "/";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("*")) {
    op = "*";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "/";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("/")) {
    op = "/";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "/";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("^")) {
    op = "^";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "/";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("!")) {
    op = "!";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "/";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else {
    op = "/";
    displayMini.innerText += "/";
    num1 = +display.innerText;
    display.innerText = "";
  }
});

squared.addEventListener("click", function () {
  let lastChar = displayMini.innerText.charAt(displayMini.innerText.length - 1);
  if (
    lastChar === "+" ||
    lastChar === "-" ||
    lastChar === "*" ||
    lastChar === "/" ||
    lastChar === "^" ||
    lastChar === "!"
  ) {
    return "Error";
  }
  if (displayMini.innerText === "") {
    return "Error";
  }
  if (displayMini.innerText.includes("+")) {
    op = "+";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "^";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("-")) {
    op = "-";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "^";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("*")) {
    op = "*";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "^";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("/")) {
    op = "/";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "^";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("^")) {
    op = "^";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "^";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("!")) {
    op = "!";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "^";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else {
    op = "^";
    displayMini.innerText += "^";
    num1 = +display.innerText;
    display.innerText = "";
  }
});

factorial.addEventListener("click", function () {
  let lastChar = displayMini.innerText.charAt(displayMini.innerText.length - 1);
  if (
    lastChar === "+" ||
    lastChar === "-" ||
    lastChar === "*" ||
    lastChar === "/" ||
    lastChar === "^" ||
    lastChar === "!"
  ) {
    return "Error";
  }
  if (displayMini.innerText === "") {
    return "Error";
  }
  if (displayMini.innerText.includes("+")) {
    op = "+";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "!";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("-")) {
    op = "-";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "!";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("*")) {
    op = "*";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "!";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("/")) {
    op = "/";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "!";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("^")) {
    op = "^";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "!";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("!")) {
    op = "!";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "!";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else {
    op = "!";
    displayMini.innerText += "!";
    num1 = +display.innerText;
    display.innerText = "";
  }
});

equals.addEventListener("click", function () {
  let lastChar = displayMini.innerText.charAt(displayMini.innerText.length - 1);
  if (
    lastChar === "+" ||
    lastChar === "-" ||
    lastChar === "*" ||
    lastChar === "/" ||
    lastChar === "^"
  ) {
    return "Error";
  }
  if (displayMini.innerText === "") {
    return "Error";
  }
  if (displayMini.innerText.includes("!") && lastChar !== "!") {
    return (display.innerText = "Error");
  }
  if (displayMini.innerText.includes("+")) {
    op = "+";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("-")) {
    op = "-";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("*")) {
    op = "*";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("/")) {
    op = "/";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("^")) {
    op = "^";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  } else if (displayMini.innerText.includes("!")) {
    op = "!";
    num2 = +display.innerText;
    operate(op, num1, num2);
    display.innerText = result;
    displayMini.innerText = result;
    displayMini.innerText += "";
    num1 = result;
    num2 = 0;
    display.innerText = "";
  }
  display.innerText = result;
});
