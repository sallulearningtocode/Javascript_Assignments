/*1.
const shoppingCart=['Milk','Coffee','Tea','Honey'];
const allergicToHoney=true;
if(!shoppingCart.includes('Sugar'))
shoppingCart.push('Sugar');
if(allergicToHoney)
shoppingCart.splice(shoppingCart.indexOf('Honey'),shoppingCart.indexOf('Honey')+1)
if(!shoppingCart.includes('Meat'))
shoppingCart.unshift('Meat');
shoppingCart[shoppingCart.indexOf('Tea')]="Green Tea";
console.log(shoppingCart);
*/

/*3.
let webTechs=['Sass'];
if(webTechs.includes('Sass'))
console.log('Sass is a CSS Preprocess');
else
{
    webTechs.push('Sass');
    console.log(webTechs);
}*/


/*4.
let ages=[19,22,19,24,20,25,26,24,25,24];
let max=ages[ages.length-1],min=ages[0],average=0,total=0,median=0;
ages.sort();
for(let num of ages)
    total=total+num;

    if(ages.length%2==0)
        median=ages[ages.length/2-1]/2;
    else
        median=(ages[ages.length/2-1]+ages[ages.length%2])/2;
        average=(total/ages.length).toFixed()
console.log(`All Students Age ${ages}`);
console.log(`Minimum Age is ${ages[0]}`);
console.log(`Maximum Age is ${max}`);
console.log(`Average Age is ${average}`);
console.log(`Median is ${median}`);
console.log(`Range is ${ages[max]-ages[0]}`);
console.log(`Comparing min and average ${Math.abs(min-average)}`,`Comparing max and average ${Math.abs(max-average)}`); 
*/

/*5.
let sen=['Facebook','Google','Micosoft','Apple','IBM','Oracle','and','Amazon','are big IT companies'];
console.log(`${sen}`.replaceAll(',',' '));
*/

/*5.
let sen=['Facebook','Google','Micosoft','Apple','IBM','Oracle','Amazon'];
for(let x=0;x<sen.length;x++)
    console.log(`${sen[x]=sen[x].toUpperCase()}`);
*/

/*8.
let fruits=['banana','orange','mango','lemon'];
for(let i = 0; i<fruits.length-1; i++)
{
    for(let j=0; j<fruits.length-1-i;j++)
    {
        temp=fruits[j];
        fruits[j]=fruits[j+1];
        fruits[j+1]=temp;
    }
}
console.log(fruits);
*/

/*9.
let arr= ["HTML", "CSS", "JS", "React", "Redux", "Node",
"Express", "MongoDB"];
for(let x of arr)
console.log(x);
*/

/*10.
let dt = new Date;
let date=[dt.getFullYear(),dt.getMonth(),dt.getDate()]
let time=[dt.getHours(),dt.getMinutes()]
console.log(`${date}`.replaceAll(',','-'),`${time}`.replaceAll(',',':'));
console.log(`${date.reverse()}`.replaceAll(',','-'),`${time}`.replaceAll(',',':'));
console.log(`${date.reverse()}`.replaceAll(',','/'),`${time}`.replaceAll(',',':'));
*/