// var, let, const

// let name = 'Ahmet';
// name = 'Mehmet';

// console.log(name);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log('i nin son değeri:' + i);

// const colors = ['red', 'green', 'blue'];
// colors.push('gray');

// spread operator

// let user1 = {
//   id: 1,
//   name: 'Okan',
//   surname: 'Çetin',
//   location: {
//     city: 'Istanbul',
//     country: 'Turkiye',
//   },
// };

// let id = user1.id;
// let name = user1.name;
// let surname = user1.surname;

// let {
//   location: { city: sehir, country: ulke },
// } = user1;

// console.log(sehir, ulke);

// let colors = ['#000000', '#FFFFFF', '#DDDDDD', '#FFFF00', '#999999'];

// // let black = colors[0];
// // let white = colors[1];
// // let gray = colors[2];

// let [black, white, gray, ...rest] = colors;

// console.log(black, white, gray, rest);

// function Hello() {
//   console.log('Merhaba');
// }

// const Hello = function (text) {
//   console.log(text);
// };

// const Hello = name => 'Hello ' + name;

// console.log(Hello('Ahmet'));

// const logUser = ({ name }, callback) => {
//   console.log(name);
//   callback();
// };

// logUser({ name: 'Ayşe' }, () => {
//   console.log('Fonksiyon çalıştı ve bitti.');
// });

const users = [
  {
    id: 1,
    name: 'Ahmet',
    age: 25,
  },
  {
    id: 2,
    name: 'Ayşe',
    age: 30,
  },
  {
    id: 3,
    name: 'Kenan',
    age: 40,
  },
  {
    id: 4,
    name: 'Fatma',
    age: 20,
  },
];

// users.map((user) => {
//   console.log(user.name + ' ' + user.age);
// });

// const filtered = users.filter((user) => user.age < 25);

console.log(filtered);
