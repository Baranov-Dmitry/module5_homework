function arrLog(arr) {
  console.log(arr);
  if (!arr.length) return;

  console.log("length = " + arr.length);

  arr.forEach((item) => {
    console.log(item);
  });
}

arrLog([432, 42, 423, 3, 5, 4, 3, 56, 7, "dgdg", "srgsr", { a: 1 }]);
