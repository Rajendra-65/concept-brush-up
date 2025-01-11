// This is the object Destructuring

// obj = {
//     a:1,
//     b:2
// }
// const {a,b} = obj

// console.log(a,b)

// Array Destructuring

// Simple Syntax

// const [a,b,c] = [1,2,3]

// console.log(a,b,c)

// Skipping the value

// const [a, ,c] = [1,2,3]

// console.log(a,c)

// Using the spread or rest operator

// const [a,b,c,...d] = [1,2,3,4,5,6,7,8]

// console.log(a,b,c,`the value of d is ${d}`)

// Destructuring the nesting values

// const [a,b,[c,d,e],f,g] = [1,2,[3,4,5],6,7]

// console.log(a,b,c,d,e,f,g)

// Destructuring the nested array

// const [a,b,[c,d],f,g] = [1,2,[3,4,5],6,7]

// console.log(a,b,c,d,f,g)

// var a = 1;
// var b = 2

// [a,b] = [b,a]

// console.log(a,b)

// const [a,...b,c] = [1,2,3,4] # Rest Element must be the last element.

// function myFun(a,...b){
//     console.log('hello')
//     console.log(b)
//     return a
//     console.log(a+b)
// }

// console.log(myFun(1,2,3,4))

// console.log('My Marks is',marks)

// let marks = 400

// console.log('my Marks is ',marks)

// function one(a,b){
//     console.log(a+b)
// }

// one(undefined,20)

// function two(a,b){
//     console.log(a+b)
// }

// two(null,20)

// function two(a=5,b=7){
//     console.log(a+b)
// }

// two(null,20)


// var  sum = 100 + score;
// score = 500

// console.log(sum)

// console.log(100+undefined);

console.log('2' - '2')