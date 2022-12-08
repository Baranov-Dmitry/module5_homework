const value = +prompt("Введите число");

if (typeof value === "number" && !isNaN(value)) {
  if (value % 2 === 0) {
    console.log("чётное");
  } else {
    console.log("нечётное");
  }
} else {
  console.log("Упс, кажется, вы ошиблись");
}
