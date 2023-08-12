function greeting(someone) {
  if (someone === null || someone === "") {
    const msg = "hello, guest";
    return msg;
  } else if (typeof someone === "undefined") {
    const msg = "hello, guest";
    return msg;
  } else {
    const msg = `hello, ${someone}`;
    return msg;
  }
}

const result = greeting("everyone");
const result2 = greeting(null);
const result3 = greeting("");

console.log(result);
console.log(result2);
console.log(result3);

module.exports = greeting;
