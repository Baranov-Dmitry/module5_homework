let map = new Map([
  ["hmyukfk", "srthrth"],
  ["srthsrth", "gukhjhj"],
  ["fjhuyk", 1],
  ["yukmngyj", { a: 55 }],
  ["ytujghm", [1, 2, 3, 4]],
  ["tyjtyj", false],
  ["yughjty", NaN],
  ["rthrsthddg", undefined],
]);

map.forEach((value, key) => {
  console.log(`Ключ - ${key} значение - ${value}`);
});
