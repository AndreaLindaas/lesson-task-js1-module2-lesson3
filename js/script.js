const btn = document.querySelector(".btn");

// btn.onclick = function () {
//   console.log("I'm a button");
// };

btn.addEventListener("click", () => {
  console.log("button clicked");
});

//

const button = document.querySelector("form button");
const input = document.querySelector("form input");
const count = document.querySelector(".count");

button.addEventListener("click", () => {
  let inputLength = input.value.trim().length;
  count.innerHTML = inputLength;
});
