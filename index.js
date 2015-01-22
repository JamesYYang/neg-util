var crypto, os;

crypto = require("crypto");

os = require("os");

exports.getLocalIP = function() {
  var interfaces, k, k2, temp;
  interfaces = os.networkInterfaces();
  for (k in interfaces) {
    for (k2 in interfaces[k]) {
      temp = interfaces[k][k2];
      if (temp.family === "IPv4" && !temp.internal) {
        return temp.address;
      }
    }
  }
};

var is = exports.is = function(type, obj) {
  var clas = Object.prototype.toString.call(obj).slice(8, -1);
  return obj != null && clas === type;
};

exports.getHash = function(data) {
  if(is("Object", data)){
    data = JSON.stringify(data);
  }
  else if(!is("String", data)){
    data = data.toString()
  }

  return crypto.createHash("md5").update(data).digest("hex");
};

exports.randomShuffle = function(array) {
  var currentIndex, randomIndex, tempValue;
  currentIndex = array.length;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    tempValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempValue;
  }
  return array;
};

exports.uid = function(len) {
  var buf, charlen, chars, i;
  buf = [];
  chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  charlen = chars.length;
  i = 0;
  while (i < len) {
    buf.push(chars[getRandomInt(0, charlen - 1)]);
    ++i;
  }
  return buf.join('');
};

var getRandomInt = exports.getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
