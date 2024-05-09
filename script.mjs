// import {
//   sum as sumNum,
//   a,
//   usProf,
// } from './script2.mjs'

// const {name,age,sex} = usProf

// Object.keys(usProf).forEach((el)=>{
//   const val = usProf[el]
//   console.log(`${el} : ${val}`);
// })

// console.log(a);
// const res = sumNum(2,5)


// let nameU = null;
// let passU = null;
// let dickSize = null;
// const userList = {
//   name: nameU,
//   password: passU,
//   dick: dickSize,
// }
// console.log(userList.name)

// const people = {
//   name: 'alex',
//   age: 22,
//   dick: 12,
// }
// people['ass'] = 11

// // создания нового обьекта с скопированого обьекта
// const people2 = Object.assign({}, people)
// const people3 = {...people2}


// people.dick = 'suck'
// people2.age = 26
// delete people3.dick 
// delete people3.ass 
// delete people3.name


// console.log(people);
// console.log(people2);
// console.log(people3);

// console.log('0000');
// let a = 21
// console.dir(a)

// let a = 20
// let b = 'suckl'
  
// function sex() {
//   a = 'true'
//   b = 20
//   b = 'sex'
  
// }
// sex()
// console.log(a, b);

// let a =0;
// console.log(!!a);



// let array = [1,2,3]
// console.log(array);

// array.push('piska')
// console.log(array);

// array.push(true)
// console.log(array);

// const removedArr = array.pop()
// console.log(array);

// array.unshift('sosat')
// console.log(array);

// array.shift()
// console.log(array);

// const newArr = array.map(el => el*2)
// console.log(newArr);

// array.map(el => el*3)
// console.log(array);



// const userProfile = {
//   name : 'bogdan',
//   comments: 23,
//   has: true,
// }

// const {name, comments} = userProfile // деструктуризация обьектов

// // const userInfo = ({name,comments,has}) - можно и так деструктизировать

// const userInfo = (userProfile) => {
//   if (!comments) {
//     console.log(`user ${name} has no comments`)
// }
//   console.log(`user ${name} has ${comments} comments`) 
// }
// userInfo(userProfile)






// let a = 10

// let b = 20


// // console.log(condition ? true : false);
// console.log(a > b ? 10 : 20);




// const arr = [1,2,3]

// for ( qwe in arr ) {
//   console.log(qwe);
// }

// const my = {
//   x:20,
//   y:true,
//   z: 'qwe'
// }

// // value - значения keys - ключи
// // Object.keys/values(nameObject).forEach(el => {...})

// Object.values(my).forEach(el => {
//   console.log(el);
// });

// const arr = [1,2,3]

// // for ( el of string/massive) {...}
// for ( el of arr ) {
//   console.log(el);
// }


// class Comment {
//   constructor(text) {
//     this.text = text
//     this.votes = 0
//   }

//   upvote() {
//     this.votes +=1
//     console.log(this.votes);
//   }
//   static mergeComments(first,second){
//     return `${first} ${second}`
//   }
// }
// // static - делает классу свойство функцию в доступе не для екземпляров а для класа
// console.log(Comment.mergeComments('first comment', 'second comment'))

// const first = new Comment('First Comment')
// const second = new Comment('second Comment')
// const third = new Comment('third Comment')
// // console.log(first);
// // first.upvote()
// first.hasOwnProperty('text') // возвращает логическое значение, указывающее, содержит ли объект указанное свойство
// console.log(first.text);

// console.log(first instanceof Object); // принадлежит ли объект к определённому классу



// extends Name - используется в объявлении класса или в выражениях класса для создания дочернего класса.
// class NumbersArr extends Array {
//   sum() {
//     return this.reduce((el,acc) => acc += el,0)
//   }
// }

// const myArr = new NumbersArr(2,5,7)
// console.log(myArr);
// myArr.sum()


// function descendingOrder(n){
//   let numS = n.toString();
//   let arr = numS.split('').map(Number);
//   arr = arr.sort().reverse().join('');;
//   arr = parseInt(arr)
//   return arr

// }

// descendingOrder(123456789)


// if ( el === 'n' || el === 'e' ) {
//         num += 1;
//       } else if ( el === 'w' || el === 's') {
//         num -= 1;
//       } else {
//         return false;
//       }



// function isValidWalk(walk) {
//   let arr = walk.join('');
//   let num = 0;
//   if ( arr.length === 10 ) {
//     for ( el of arr ) {
//         if ( el === 'n' || el === 'e' ) {
//           num += 1;
//         } else if ( el === 'w' || el === 's' ) {
//           num -= 1;
//         } else {
//           return false;
//         }
//       }
//     if ( num === 0 ) {
//       return true;
//     } else {
//       return false;
//     }
//   } else if ( arr.length != 10 ) {
//     return false;
//   } else {
//     return true;
//   }
// }

// function longest(s1, s2) {
//   let arr = [];
//   arr.push(s1);
//   arr.push(s2)
//   arr = arr.join('')
//   arr = arr.split('').sort()
//   let newArr = [];
//   for ( let i = 0; i < arr.length; i++ ) {
//     if ( arr[i] != arr[i+1]) {
//       newArr.push(arr[i])
//     }
//   }
//   console.log([newArr.join('')]);
// }
// longest('qqqqwwweee', 'aaasssddd')

// adesqw






// function disemvowel(str) {
//   let a = [];
//   let fullA = [];
//   for (let i = 0; i < str.length; i++) {
//     a.push(str[i])
//   }
//   console.log(a);
//   a.forEach( (el) => {
//     if ( el != 'a' && el != 'A' && el != 'e' && el != 'E'&& el != 'i' && el != 'I' && el != 'o' && el != 'O' && el != 'u' && el != 'U' && el != 'y' && el != 'Y') {
//       fullA.push(el)
//     }
//   })
//   return fullA.join('')
// }
// disemvowel('aawaa')


// let a = 'AbA';


// console.log(a.replace(/A/i, ''));



// function divisors(integer) {
//   let a = [];
//   for ( let i = 2; i < integer; i++) {
//     if ( Number.isInteger( integer/i )) {
//       a.push(i)
//     }
//   }
//   if ( a.length === 0 ) {
//     console.log(`${integer} is prime`);
//   } else {
//     console.log(a);
//   }
// };
// divisors(13)
// divisors(100)

// resolve - удачная фукнция
// reject - неудачная функция ( фейл )
// const chlen = new Promise((resolve, reject) => {
  
// });

// chlen 
//   .then(value => {
//     // описываем если промис удачный ( resolve )
//   })
//   .catch(error => {
//     // описываем если промис неудачный ( reject )
//   })



// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(error => console.error(error))


//   const getData = (url) => 
//     new Promise((resolve, reject) => {
//       fetch(url)
//         .then(response => response.json())
//         .then(json => resolve(json))
//         .catch(error => reject(error))

//     })
// getData('https://jsonplaceholder.typicode.com/todos')
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))

// async function as() {
//   //всегда возвращает Промис
// }

// const as = async () => {
//   return 'success!'
// }
// as();
//   .then(value => console.log(value));
//   .catch(error => console.log(error.message));


// const timerPromise = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//   console.log(response);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, 2000);
//   });
// };

// const asyncFn = async () => {
//   console.log('timer start');
//   await timerPromise();
//   console.log('timer end');
// };
// asyncFn();

// let a;

// const getData = async (url) => {
//   await fetch(url)
//     .then(response => {
//       a = response
//       console.log(a);
//     })
//   console.log(33);
// }

// getData('https://jsonplaceholder.typicode.com/todos')

// const getData = async (url) => {
//   const res = await fetch(url)
//   const json = await res.json()
//   console.log(json);
// }
// const url = 'https://jsonplaceholder.typicode.com/todos'
// const data = getData(url)


// console.log('req');

// setTimeout(() => {
//   console.log('preparing');

//   const back = {
//     server: 'avs',
//     port:2000,
//     status:'working'
//   }


//   setTimeout(() => {
//     back.modified = true
//     console.log('recieved', back);
//   }, 2000);
// }, 2000);

// const p = new Promise((resolve, reject) => {
//   console.log('req');
//   setTimeout(() => {
//     console.log('preparing...');
//     const back = {
//       server: 'avs',
//       port:2000,
//       status:'working',
//     }
//     resolve(back)
//   }, 2000);
// })

// p.then( data => {
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.mod = true
//       resolve(data)
//     }, 2000);
//   })

//   p2.then(dataw => {
//     console.log('res', dataw);
//   })
// })

const sleep = ms => new Promise(resolve => {
  setTimeout(() => resolve(), ms);
})

sleep(2000).then( () => { console.log('chull'); })

Promise.all( [sleep(2000), sleep(4000)]).then(() => {
  console.log('good');
})