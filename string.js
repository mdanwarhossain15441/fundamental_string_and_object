// there is 3 types to write a string

// const str1= 'this is a string';
// const str2= "this is a string";
// const str3= `this is a string`;



// string length

// const str1 = `dhaka`;
// console.log(str1.length);

// const str2= 'comilla';
// console.log(str2.length);

// const str3= "donia";
// console.log(str3.length);



// string Index

// const capital = "dhaka";
// console.log(capital[2]);// a

// const capital1= 'chitagong';
// console.log(capital1[4]);//length= 9 index=a


// change the array value by index

// const friends = ['ami', 'tumi', 'see', 'tara'];

// friends[2]= 'mia';

// console.log(friends);


// kono string a lower case korar niyom
// const school = 'Rajuk Uttara Model School';
// console.log(school.toLocaleUpperCase());

// const college= 'Dr. Mahbubur Rahman Molla College';
// console.log(college.toLocaleUpperCase());

// const river = 'water';
// const ocane = " water  ";
// console.log(ocane.trimStart());
// if(river===ocane){
//     console.log('nodir pani khawa jay');
// }else{
//     console.log('somudrer pani lobonakto');
// }

// if(river.trimEnd===ocane.trimEnd){
//     console.log('nodir pani khawa jay');
// }else{
//     console.log('somudrer pani lobonakto');
// }


// string slice
// const address= 'andar Killa'
// const part=address.slice(1,4);
// console.log(part);


//split
// const anwar= 'Anwar is a very honest and hard working person';

// console.log(anwar.split());
// console.log(anwar.split(''));
// console.log(anwar.split(' '));
// console.log(anwar.split('a'));
// console.log(anwar.split("r"));
// console.log(anwar.split('w'));
// console.log(anwar.split(' '));

// join
// const realFriend = ['anwar', 'mim', 'amir', 'mukta'];

// console.log(realFriend.join('|'));

// const firstName='Abidur';
// const lastName= 'Rahman';

// console.log(firstName.concat(' ', lastName));
// console.log(firstName.concat().concat(firstName, lastName));

// Include
// const firstName= 'Abir';
// console.log(firstName.includes('br'));


// reverse string
// const sentense= 'I am learning Web Development';

// let reverse= '';

// for(const letter of sentense){
//     console.log(letter);

//     reverse= letter+reverse;
// }

// console.log(typeof(reverse));

// string reverse
// const sentense="I want to be a Web Developer";

// let reserve= "";

// for(const letter of sentense){
//     reserve= letter+ reserve;
// }
// console.log(reserve);

// reverse of string by for of loop

// const sentense='I am want to be an Web Developer';

// let reserve ="";

// for(const letter of sentense){
//     reserve=letter+reserve;
// }

// console.log(reserve);

// reverse of string

// const sectence = "i want to a web Developer";

// let reverse= '';

// for(let i=0; i<sectence.length; i++){
//     let letter = sectence[i];
//     reverse= letter+reverse;
// }

// console.log(reverse);


//reverse a string using for of loop

const sectence= "I want to a Web Developer";
let reverse= '';

for(const letter of sectence){
    reverse= letter+reverse;
}

// console.log(reverse);


//reverse a string using by for loop
const sectence1="this is a String";
let reserve1=``;

for(let i=0; i<=sectence1.length; i++){
    let letter = sectence1[i];
    reserve1=letter+reserve1;
}

// console.log(reserve1);


//reverse a string using split
const sectence2='this is a String';

const reserve2=sectence2.split('').reverse().join('');

console.log(reserve2);
