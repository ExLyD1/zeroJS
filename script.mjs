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

