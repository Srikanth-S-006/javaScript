//Arithmetic Operators
let a=10;
let b=10;
console.log(a,b);
console.log(a**b);
console.log(a+b,a-b,a*b,a/b);
//Assignment operators
// =,+=,-=,*=,%=,**=


//Comparison operators
//==,===,!=,!==,<,>,<=,>=


//Logical operators
//&&,||,!
let c=2;
let d=5;
let con=c<d;
let con2=d>c;
console.log(con && con2,con || con2,!(c ==d));
//!(c==d) is false but in logical operator it will convert true to false and if false to true.
   


//Conditinal Statements:
//if statements
if(1==1){
    console.log(true);
}

//if-else
let num=10;
if(num%2==0){
    console.log("even");
}else{
    console.log("odd")
}

//else-if
let age=20;
if(age<18){
    console.log("junior");
}else if(age<=24){
    console.log("adult");
}else{
console.log("senior");
}

//Ternary operator
//condition ? true : false
let result=age >=18 ? "adult" :"not adult"; // simplier and compact if-else.
console.log(result);
