var util = require("../");

console.log(util.getLocalIP());

var a = {
  name: "hello"
};

console.log(util.getHash(a));

console.log(util.getHash("hello"));

console.log(util.getHash(123));

var b = [1,2,3,4,5,6,7,8,9,10];

console.dir(util.randomShuffle(b));

console.log(util.uid(30));