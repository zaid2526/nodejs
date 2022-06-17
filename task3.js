
//1 & 2..................
array1 = ['apple', 'oranges' , '', 'mango', '' , 'lemon']
let array2=array1.map((arrayData)=>{
    return arrayData;
}).filter((data)=>{
    if(data.length>0){
        return data;
    }
})
console.log(array2);

//3..............
//array is a reffrence type that means array variable is store only memory address
// where the data of array is stored, and we does not change anything in the array 
// variable or refrence when we apply any Header METHODS on the array, even array declaration
// is constants.
const hobbies=['sports','cooking']
hobbies.push('programming');

//4...........
// The JavaScript spread operator (...) allows us to quickly copy of 
// an existing array or object into another array or object.
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log("numbersCombined",numbersCombined);
// The spread operator is often used in combination with destructuring.
const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;
console.log(one);//1
console.log(two);//2
console.log(rest);//[3,4,5,6]
// We can use the spread operator with objects too:
const obj11 = { 'key1': 1 }
const obj21 = { ...obj11 }
console.log(obj21);//{ 'key1': 1 } but in diff memory location


//5.........
// The rest parameter syntax allows a function to 
// accept an indefinite number of arguments as an array
const numbers1 = [1, 2, 3, 4, 5, 6,7];
const [one1, two1, ...rest1] = numbers1;
console.log(one1);//1
console.log(two1);//2
console.log(rest1);//[3,4,5,6,7]

//What will be the output of this....
//1...............
const obj1 = { 'key1': 1 }
const obj2 = { ...obj1 }
// const obj2 =  obj1 
console.log(obj1);
console.log(obj2);
if (obj2 === obj1) {
    console.log('same objects')
}
else {
    console.log('different objects')
}
//output ... different objects because object is refrence type and in this code, obj2 
//is created as a new object.

//2...........
const obj12 = {'key1': 1 , 'key2' : 2}
const obj22 = { ...obj12, key1: 1000}
console.log(obj12)
console.log(obj22)
//oupout is {key1:1000,key2:2}

