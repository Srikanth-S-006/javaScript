// let Students=[99,11,55,66,77,88];
// let sum=0;
// for(let val of Students){
//     sum=sum+val;
     
// }
// console.log("total class marks:"+sum);
// let avg=sum/Students.length;
// console.log("average marks is:"+avg);




// applying the offer for the given product prices using loops

// let products=[299,122,332,123,234];
// let i=0;
// console.log("befor offer 10% price"+ products);
// console.log("after the offer price:")
// for(let val of products){
//     let offer=val/10;
//     products[i]=products[i] - offer;
//     console.log(products[i]);
//     i++;
// }
// for(let i=0;i<products.length;i++){
//     let offer=products[i]/10;
//     products[i] -=offer;
// }
// console.log(products);



/// Arrays methods 
//array.forEach in Array methods
// let marks =[77,88,99,66,77,88,];
// marks.forEach((val) => {
//     console.log(val**2);

// });
//array.filter
//it will filter the array based on the condition
// let vowels=["a","b","c","e"];
// vowels.filter((val) =>{
//     if(val=='a'||val=='e'||val=='i'||val=='o'||val=='u'){
//         console.log(val);
//     }
// })


//array.map
// it will return the current array value in  a new array
// let  prices=[899,344,566,7888];
// prices.map((val)=>{
//     if(val>=2000){
//         console.log(val);
//     }
// })
 
//array.reduce(accumelator,current value)

// let marks=[99,88,99,88,87,44,78 ];
// marks.reduce((result,currentValue)=>{
//   if(result &currentValue >=70){
//     console.log("gardeA="+result)
//   }
// })
// let toppers=marks.filter((val)=>{
//     // if(val>=90){
//     //     console.log(val)
//     // }
//     return val>=90
// });
// console.log(toppers)



//practice question
// let n=prompt("enter the number:");
// let arr=[];
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr);
// let sum=arr.reduce((prev,curr)=>{
//     return prev+curr;
// })
//  console.log(sum)