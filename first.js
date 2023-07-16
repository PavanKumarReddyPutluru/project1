// console.log("hello world")
// console.log(2*2)

// let num=4
// console.log(num+10)

// let userName="pavan"
// console.log(userName)  //userName  ---> camelCase rule

// let $user_Nam="pavan's phone"
// console.log($user_Nam)      // user_Nam   ----> snakecase rule

// let r = 7
// const pi =3.14

// r = 4
// //pi = 13.88  it throws assigning to constant error

// let area = pi * r * r
// console.log( typeof area)


// let firstName = "pavan"
// let lastName = "kumar"
// let  user = firstName + " " + lastName
// console.log(user)

// console.log("pavan \"kumar\" ")

// let num = 4
// //let result = Math.pow(num , 3)
// let result = 4 ** 3
// console.log("result =", result)


// let x=5, y=10, z=8
// // res= x<y && x<z
// let res= x<y && x>z
// let not = !res
// console.log(res,not)

// let x=10, y=5

// res = x < y
// if(res)
// console.log("x is less than y");
// else{
// console.log("y is greater than x");
// console.log("x is less than y");
// }

// let num = 101

// let result = num%2===0 ? "even" : "odd" ;

// console.log(result); 

// let day ='holiday'

// switch(day){
//     case 'monday':
//     console.log("8 AM");
//     break;
//     case 'tuesday':
//     console.log("5 AM");
//     break;
//     case 'wednesday':
//     console.log("4 AM");
//     break;
//     case 'thursday':
//     console.log("9 AM");
//     break;
//     case 'friday':
//     console.log("10 AM");
//     break;
//     case 'satuday':
//     console.log("12 AM");
//     break;
//     case 'sunday':
//     console.log("11 AM");
//     break;
//     default:
//         console.log("no day match")
// }

 // template literals
// let x = 10 , y = 20
// res = x + y
// console.log(`addition of ${x} and ${y} is ${res}`);
// console.log(`my name is
// pavan`);

// looops

// let i = 1
// while(i<=20){
//     console.log("hi.. ");
//     i++ 
// }

// for(i=1;i<=5;i++){
//     console.log("abcd" , i);
//     for(j=1;j<=5;j++){
//         console.log("hlo" , j)
//     }
// }

// let num = 203455

// while(num > 0){
//     console.log(num%10);
//     num = parseInt(num/10)

// }
// let arr = [1,2,3,4,5]
// let chunkSize = 4;
// function (arr,chunkSize){

// }


// const chunk = (arr, size) =>
//   Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
//     arr.slice(i * size, i * size + size)
//   );
// console.log(chunk([1, 2, 3, 4, 5], 3 ));

// let m1={
//    name : 'pavan',
//    age : 25,
//    love : 'yes but dont know',
//    laptop :{
//     ram : '4gb ',
//     brand : 'hp',
//     ssd : 512
//    }
// }
// console.log(m1.love)
// delete m1.laptop.ssd
// console.log(m1['name'])
// console.log(m1.laptop.ssd)
// console.log(m1.laptop.processor?.length)

// for (let key in m1){
//   console.log(key , m1[key]); 
// }

// function print(){
//   return `hello ${name}`
// }
// let name = "pavan"
// let str = print();
// console.log(str);

// let sum = function(a,b){  //anynomous function
//   return a+b;
// }
// let res = sum(10,-10)
// console.log(res);

// let greet = (name) => {   //arrow function
//   console.log("love you " + name);
//   return "i love you too";
// }
// console.log(greet('pavan'));

// let abc = {     // fucntions are nothing but methods
//   name : 'pavan',
//   branch : 'eee',
    
//   about : function(){
//     console.log(`my name is ${this.name} and i am from ${this.branch} branch.`);
//   }
// }

// abc.about();
 
// function Details(name , clg ){    
//   this.name = name;  //constructor is like function it starts with caps
//   this.clg = clg;

//   this.work = function(){
//           console.log("hi i am basically from gates college");
//   }
// }
// let details1 = new Details('pavan' , 'gates');
// let details2 = new Details('unknown' , 'srit');

// console.log(details1 , details2);

// let values = [];

// values.push(5,7,8);
// console.log(values[2]);
// console.log(values);

// let names = ['pavan','lucky','kumar'];
// names[3] = 'reddy';
// console.log(names);

// let data = ['andjfd', 4 , {name : 'pavan'}, function(){console.log('hi pavan');}];
//  console.log(data)
//   data[3]();
 
//array methods

// let a = [2,3,5,9];  

// console.log(a.push(7));  //added element to last 
// console.log(a);

// console.log(a.unshift(8));   //added element to first
// console.log(a);  

// console.log(a.pop());    // remove element from last
// console.log(a);

// console.log(a.shift());  // remove element from first
// console.log(a);

// console.log(a.splice(2,1,12,14));  // remove elements from given index to next no of elements remove
// console.log(a);

// let n =[];

// n[0]=3;
// n[30]=5;
// n[15]=8;

// console.log(n);

// for(let i of n){  //for of is used for actual data
//   console.log(i);
// }

// for(let key in n){   //for in is used for index
//   console.log(n[key]);
// }

//array destructring

// let nums = [2,5,7,8];
// console.log(nums);

// //let [a,b,c,d] = nums  //nums are destructing(assigning) to another variables
// let [a,b,,d] = nums  //if we dont want assigning just skip that variable and place , in between them
// console.log(b)

// let a = 5;
// let b = 6;
// let c = 7;

// [a,b,c] = [c,a,b]  //swapping the numbers by array destructring

// console.log(a,b,c);

// let sentense = "i am pavan lucky lipstic spoiler"
//  let words = sentense.split(' ')
//  let [a,b,...c] = words  //in this c is assigned to rest of the elements in that array
//  console.log(words);
//  console.log(c); //by using ...c(rest operator) we got all remaining elements


// let nums = [23,4,5,55,334,44,86]

// console.log(nums.filter(n => n%2===0)); //filter is used for filterig(seperating the data by conditions) the dare from array

// console.log(nums.map(n => n * 2 ));  // map 

// console.log(nums.reduce((a,b) => a + b )); //reduce 

// nums.forEach(n => {      // forEach method is used to seperate the data individually
//   console.log(n * 2);
// });

//set

// let word = new Set("liril i am using") //set eliminates duplicate values, index values are not there in set
// word.add(3);
// word.add('pav');
// word.add(3);
// word.add('abcd')
// word.add(5);

// word.forEach((value) => {
//   console.log(value);
// });
// console.log(word);
// console.log(word.has('pavan'));

// let map =new Map();

// map.set("pavan", "react");
// map.set("rajesh", "java");
// map.set("sankar", "testing");
// map.set("pavan", "html");

// for(let[k,v] of map){
//   console.log(k," : ",v);
// }

//recursion is calling the function itself inside the same function

function fact(n){
  if(n==0)
  return 1
  else
  return n * fact(n-1) ;
}
 let num = 10;
 let result = fact(num);
 console.log(result);




