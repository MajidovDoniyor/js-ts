let num1 = document.querySelector("#one")! as HTMLInputElement;
let num2 = document.querySelector("#two")! as HTMLInputElement;
let btn = document.querySelector("button")! as HTMLInputElement;

function sum(one:number, two:number) {
  return one + two;
}

btn.addEventListener("click", () => {
  console.log(sum(+num1.value, +num2.value));
}); 