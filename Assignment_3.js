/*1.
let sum=0;
for(let i=1;i<101;i++)
sum+=i;
console.log(sum);
*/

/*2.
let oddSum=0,evenSum=0;
for(let i=1;i<=100;i++)
{
    if(i&1)  
    oddSum+=i;
    else
    evenSum+=i;
}
console.log(oddSum,evenSum);
*/

/*3.
let str='ApqrstuvwxyB012345CDEFGHIJKLMNOPQRSTUVVWXYZabcdefghijkkmnoz6789';
let str_length=str.length;
let random_string = "";
for(let i=0;i<12;i++)
{
    let rnum=Math.floor(Math.random()*str_length);
    console.log(rnum);
    random_string+=str.substring(rnum,rnum+1);
}
console.log(random_string);*/

/*4.
let countries=['finland','thailand','new zealand','india','dubai','america'];
let newCount=countries.filter((country)=>country.includes('land'));
console.log(newCount);*/

/*5.
let fruit=['banana','orange','mango','lemon'];
for(let x=0; x<fruit.length-1; x++)
{
    for(let y=0; y<fruit.length-1-x;y++)
    {
        let temp="";
        temp=fruit[y];
        fruit[y]=fruit[y+1];
        fruit[y+1]=temp;
    }
}
console.log(fruit);*/

/*6.
function capitalizeArray(x)
{
    x.forEach((item)=> console.log(item.toUpperCase()));
    return x
}
let array=['sallu','salman','babu','bestu'];
capitalizeArray(array);*/

/*7.
function sumofArraysItems(x)
{
    
    x.forEach(e => { if (typeof(e) != 'number') flag=0; else flag=1;})
    if(flag==1)
    return   x.reduce((acc,curr)=>acc+curr);
    return 'All elements are not number type';
}

console.log(sumofArraysItems([9,1,2,4]));*/

/*8.
function modifyArray(x=[])
{
    return x ? x.length>3 ?
        x[4]=21:'Invalid Index';
}
console.log(modifyArray([1,2,3,4,5,6]));*/

/*9.
function isSame(x=[])
{
    for(let e=0;e<x.length-1;e++)
        if(typeof(x[e])!=typeof(x[e+1]))
        return -1;
    return 1;
}
console.log(isSame([10,120]));*/
