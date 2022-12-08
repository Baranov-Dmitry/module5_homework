const x = -100;

const typeOfX = typeof x;

if (typeOfX === "string") {
  console.log("x — строка");
} else if (typeOfX === "number" && !isNaN(x)) {
  console.log("x — число");
} else if (typeOfX === "boolean") {
  console.log("x — логический тип");
} else {
  console.log("Тип x не определён");
}
