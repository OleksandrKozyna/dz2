var userObj = {
  age: 20,
  firstName: 'Name',
  lastName: 'Last',
  fullName() {
    return `${userObj.firstName} ${userObj.lastName}`;}};

function defUpperStr(up) {
    return (up  || 'Default text').toUpperCase();}

console.log(defUpperStr('My text'));
console.log(defUpperStr());
function evenFn(n) {
    var arr = [];

    for (var i = 1; i <= n; i++) 
    if (i % 2 === 0) 
    arr.push(i);

    return arr;
  }
console.log(evenFn(10));
console.log(evenFn(15));
console.log(evenFn(20));


function weekFn(n) {
    var str = '';
  
    switch (n) {
      case 1:
        str = 'Понедельник';
        break;
      case 2:
        str = 'Вторник';
        break;
      case 3:
        str = 'Среда';
        break;
      case 4:
        str = 'Четверг';
        break;
      case 5:
        str = 'Пятница';
        break;
      case 6:
        str = 'Суббота';
        break;
      case 7:
        str = 'Воскресенье';
        break;
      default:
        str = null;
    }
    return str;
  }

function (num) {
  return num > 0
    ? num > 24
      ? num > 44
        ? num > 65
          ? num > 75
            ? num > 90
              ? num > 122
                ? null
                : 'долгожители'
              : 'старческий возраст'
            : 'пожилой возраст'
          : 'средний возраст'
        : 'молодой возраст'
      : 'детский возраст'
    : null;
}
function oddFn(n) {
var arr = [];
var i = 0;
while (i++ < n) 
if (i % 2 == 1) arr.push(i);
return arr; 
};
function mainFunc (a, b, func) {
if (cb && typeof cb === 'function') 
return cb(a, b);
return false;
}
function cbRandom(min, max) {
  return Math.ceil(Math.random() * (max - min + 1)) + min;
}
function cbPow(num, pow) {
  return Math.pow(num, pow);
}
function cbAdd(a, b) {
  return a + b;
}
function mainFunc(a, b, cb) {
  if (cb && typeof cb === 'function') return cb(a, b);

  return false;
}
function cbRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
mainFunc(2, 5, cbRandom)
}
function cbPow(num, pow) {
  return Math.pow(num, pow);
mainFunc(2, 5, cbPow)
}
function cbAdd(a, b) {
  return a + b;
mainFunc(2, 5, cbAdd) 
}
