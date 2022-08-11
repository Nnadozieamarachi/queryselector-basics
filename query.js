// let h2 = document.querySelector(".displayBox");
// function display1(val) {
//   let displayBox = document.getElementById("displayBox");
//   //   let result1 = 0 + 1;
//   displayBox.innerHTML = val;
//   //   alert("result1");
// }
// document.querySelector(".number1").addEventListener("onclick", display1);

// let number2 = document.querySelector(".number2");
// let number3 = document.querySelector(".number3");
function display1(val) {
  let displayBox = document.getElementById("displayBox");
  displayBox.innerHTML = val;
}
document.querySelector(".numbers").addEventListener("onclick", display1);
