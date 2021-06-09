let decrease = document.querySelector(".button--subtractOnLeft");
let increase = document.querySelector(".button--addOnRight");
let counter = document.querySelector(".input");
let count = 32;

decrease.addEventListener("click", () => {
  count --;
  counter.value = count;
});

increase.addEventListener("click", () => {
  count ++;
  counter.value = count;
});
