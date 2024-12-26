//loops are used to execute a piece of code again and again.

//for loops
let sum=0;
for(let i =1;i<=10;i++){
    sum=sum+i;
    console.log(sum);

}

// while loop

//print sum of 10 numbers
let num=0;
let i=1;
while(i<=10){
    num+=i;
    i++
    
}
console.log("sum of 10 numbers",num);

//for-of loop is used to iterate the each and every value in str or arr.
//for-in loop is used for objects.

let student={
    name:'srikanth',
    age:21,
    ispass:true

};
for(let key in student){
    console.log("key",key,"value",student[key]);
}//example od for-in loop
//problem-print all even nums from 0 to 100;
// let number=0;
// for(let i=0;i<=100;i=i+2){
//     number=i;
//     console.log(number);
// }

//Strings
// let a='12'+"";
// console.log(a);
let fullname=prompt("enter your fullname:");
let _fullname=`@${fullname}${fullname.length}`;
console.log(_fullname);