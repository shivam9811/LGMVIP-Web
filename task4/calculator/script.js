let n = document.querySelector(".buttons");
let screen = document.querySelector(".screen");
let calculator = document.querySelector(".container");
let ans = document.querySelector(".ans");
let cal = document.querySelector(".cal");
n.addEventListener("click", (evt) => {
  if (evt.target.matches("input")) {
    const key = evt.target;
    const action = key.dataset.action;
    const keyContent = key.value;
    const displayedNum = ans.textContent;
    const calnum = cal.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;
    if (!action) {
      if (displayedNum === "" && calnum === "") {
        ans.textContent = keyContent;
        cal.textContent = keyContent;
      } else {
        // ans.textContent = displayedNum + keyContent;
        cal.textContent += keyContent;
        ans.textContent = eval(cal.textContent);
      }
      calculator.dataset.previousKeyType = "number";
    }
    if (action === "decimal") {
      if (!ans.textContent.includes(".")) {
        ans.textContent += ".";
        cal.textContent += ".";
      }
    }
    if (
      action === "add" ||
      action === "multiply" ||
      action === "subtract" ||
      (action === "divide" && previousKeyType === "number")
    ) {
      console.log(previousKeyType);
      if (previousKeyType !== "operator") {
        cal.textContent += keyContent;
        calculator.dataset.previousKeyType = "operator";
      }
    }

    if (action === "calculate") {
      cal.textContent = ans.textContent;
      ans.textContent = "";
    }
    if (action === "clear") {
      ans.textContent = "";
      cal.textContent = "";
    }
  }
});
