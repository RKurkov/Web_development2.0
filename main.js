let kmh = 36, ms = 20;

console.log(`> ${kmh} км/ч соответствует ${kmh/3.6} м/с`);
console.log(`> ${ms} м/с соответствует ${ms*3.6} км/ч`);


let a = 3, b = 4, c = 5;
const p = a + b + c;
const s = Math.sqrt(p * (p - a) * (p - b) * (p - c));

if (a + b > c && a + c > b && b + c > a) {
    console.log(`> треугольник существует`);
    console.log(`> периметр = ${p}`);
    console.log(`> площадь = ${s}`);
    console.log(`> отношение = ${s/p}`);
} else {
    console.log(`> треугольника не существует`);
}


/* let number = prompt('Введите число', [0]);

while (isNaN(number)) {
    number = prompt('Введите число', [0]);
}
for (let i = 0; i <= number; i++) {
    if (i % 2 != 0 && i % 5 != 0) {
        console.log(`> "${i} fizz"`);
    } else if (i % 2 != 0 && i % 5 == 0){
        console.log(`> "${i} fizz buzz"`);
    }
    if (i % 2 == 0 && i % 5 != 0) {
        console.log(`> "${i} buzz"`);
    } else if (i % 2 == 0 && i % 5 == 0){
        console.log(`> "${i} fizz buzz"`); 
    }
} */


let tree = '', symbol = 0;
const lvlTree = 12;

for (let i = 1; i < lvlTree + 1; i++) {
    if (i % 2 != 0) {
        while (symbol < i) {
            tree += '*';
            symbol++;
        }
        tree += '\n';
        symbol = 0;
    } else {
        while (symbol < i) {
            tree += '#';
            symbol++;
        }
        tree += '\n';
        symbol = 0;
    }
}
tree += '||';
console.log(`> \n${tree}`);


/* let userNum = 0;
const num = 36;

while (userNum != num) {
    userNum = prompt('Введите число', [0]);
    while (isNaN(userNum)) {
        userNum = prompt('Введите число', [0]);
    }
    if (userNum > num) {
        console.log(`> "ваше число больше"`);
    } else if (userNum < num) {
        console.log(`> "ваше число меньше"`);
    } else {
        break;
    }

}
console.log(`> "угадано"`); */

/* let n = prompt('Введите число n', [0]);
let x = prompt('Введите число x', [0]);
let y = prompt('Введите число y', [0]);
let result = '';

while (isNaN(n) || isNaN(x) || isNaN(y)) {
    n = nprompt('Введите число n', [0]);
    x = prompt('Введите число x', [0]);
    y = prompt('Введите число y', [0]);
}
if (n % x == 0 && n % y == 0) {
    result = 'true'
} else {
    result = 'false'
}
console.log(`> n = ${n}, x = ${x}, y = ${y} => ${result}`); */

let month = prompt('Задайте месяц как число', [0]);
let quarter = 0;

while (isNaN(month)) {
    month = prompt('Задайте месяц как число', [0]);
}
if (month > 0 && month < 4) {
    qarter = 1;
} else if (month > 3 && month < 7) {
    quarter = 2;
} else if (month > 6 && month < 10) {
    quarter = 3;
} else {
    quarter = 4;
}
console.log(`> месяц ${month} => ${quarter} квартал`);
console.log(`> месяц ${month} => ${Math.floor(month / 4) + 1} квартал`);