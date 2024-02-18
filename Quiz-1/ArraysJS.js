const fruits = ["Banana", "Mango", "Orange", "Peache"];
let fruit = fruits.at(3);

document.getElementById("demo").innerHTML = fruit;

const arr1 = ["Abubakar", "Khattak", "Abdullah"];
const arr2 = ["Ayesha", "Areej", "Iman"];
const sumup = arr1.concat(arr2);

document.getElementById("demo1").innerHTML = sumup;

const F = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];

document.getElementById("demo2").innerHTML = F.copyWithin(2,0);
document.getElementById("demo3").innerHTML = F.copyWithin(3,0,2);

const f = fruits.entries();
for(let x of f){
    document.getElementById("demo4").innerHTML += x;
}

const ages = [32, 33, 12, 40];

function checkTheAge(age){
    return age > document.getElementById("ageCheck").value;
}

function myFunction(){
    document.getElementById("demo5").innerHTML = ages.every(checkTheAge);
}

const A = ["a", "b", "c", "d", "e"];
document.getElementById("demo6").innerHTML = A.fill("x", 1,3);

function checkAdult(age){
    return age >= 18;
}
document.getElementById("demo7").innerHTML = ages.filter(checkAdult);

function findindex(age)
{
    return age > document.getElementById("tocheck").value;
}

function myFunction(){
document.getElementById("demo8").innerHTML = ages.findIndex(findindex);}