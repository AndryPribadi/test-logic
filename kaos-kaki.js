function kaos(k) {
  // Write your code here
  let pasang = 0;
  k.sort();
  for (let i = 0; i < k.length; i++) {
    if (k[i] == k[i]) {
      pasang++;
    }
  }
  return pasang;
}
console.log(kaos([10, 20, 20, 10, 10, 30, 50, 10, 20]));
console.log(kaos([6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]));
console.log(kaos([1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));
