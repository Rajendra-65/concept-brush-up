// Shallow copy vs full copy

// const obj ={
//     test:'value1'
// }

// const obj2 = {...obj}

// obj2.test = "value2"

// console.log(obj)
// console.log(obj2)

// Example of every and some in an array

// const arr = [1,2,3,4]

// const result = arr.some((val)=>{
//     // Return True if one of the element from the array specify the condition otherwise false
//     return val > 3 
// })

// console.log(result)

// const every_result = arr.every((val)=>{
//     // Return true if every element of the array should satisfy the conditioin otherwise false
//     return val > 3
// })

// console.log(every_result)

// Example of Not A Number
// console.log(0/0)
// console.log(1-'a')

// Finding an duplicate element in an array.

// const arr = [1,2,3,4,5,3,2,4]

// let seen = new Set()

// let dup = []

// for (let i =0;i<arr.length;i++){
//     if (seen.has(arr[i])){
//         dup.push(arr[i])
//     }else{
//         seen.add(arr[i])
//     }
// }

// console.log(dup)

let my_str = "RajendraBehera"
if(my_str[0]= my_str[0].toUpperCase()){
    console.log('Yes it is Upper Case')
}else{
    console.log('No it is not an upper case')
}
