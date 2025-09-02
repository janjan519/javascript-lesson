// Q1
let nickname = "ごっしー";
let age = 28;

console.log(
  "私のニックネームは" + nickname + "です。年齢は" + age + "歳です。"
);

// Q2
let languages = ["JavaScript", "PHP", "Ruby", "Python", "Go"];

console.log(
  `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`
);

// Q3
let user = {
  name: "John",
  age: 26,
  bloodType: "A",
  favorite: "card",
};

console.log(user.age);

// Q4
let playerList = [
  {
    name: "John",
    age: 26,
    favorites: ["Card Game", "Basket Ball", "Programming"],
  },
  {
    name: "Bob",
    age: 33,
    favorites: ["Tinder", "The Legend of Zelda"],
  },
  {
    name: "Michael",
    age: 22,
    favorites: ["Football", "Smash Bros."],
  },
];

console.log(playerList[1].favorites[1]);

// Q5
let ageList = playerList.map((player) => player.age);
let ageAvg = ageList.reduce((acc, cur) => acc + cur, 0) / ageList.length;

console.log(ageAvg);

// Q6
function sayHello() {
  console.log("Hello");
}

sayHello();

let sayWorld = () => console.log("World");

sayWorld();

// Q7
user.birthday = "2000-09-27";

user.sayHello = () => {
  console.log("Hello!");
};

user.sayHello();

// Q8
let calc = {
  add(x, y) {
    console.log(x + y);
  },
  subtract(x, y) {
    console.log(x - y);
  },
  multiply(x, y) {
    console.log(x * y);
  },
  divide(x, y) {
    console.log(x / y);
  },
};

calc.add(1, 6);
calc.subtract(20, 10);
calc.multiply(7, 7);
calc.divide(40, 8);

// Q9
function remainder(x, y) {
  return x % y;
}

console.log("5 を 3 で割った余りは " + remainder(5, 3) + " です。");

// Q10
// foo関数のスコープ外からxは参照できないため
