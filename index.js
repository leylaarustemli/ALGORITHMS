
//? 3) Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin.
// let eded=parseInt(prompt("ededi yazin"))
// let say=0
// for (let index = 1; index <= eded; index++) {
//     if(eded%index==0){
//         say++
//     }
// }
// console.log(say);



// ? 2) Verilmiş ədədin bütün bölənlərini console'a çıxaran proqram tərtib edin.
// let eded=parseInt(prompt("ededi yazin"))
// for (let index = 1; index <= eded; index++) {
//     if(eded%index==0)
//     console.log(index);
// }



//? 7)0 - 100 arası tək ədədlərin və cüt ədədlərin cəmini tapın
// let tekCem=0
// let cutCem=0
// for (let index = 0; index < 100; index++) {
//     if(index%2==0 ){
//         cutCem+=index
//     }
//    else{
//     tekCem+=index
//    }
// } console.log(cutCem,tekCem);



//? 4) for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın
//  0 x 0 = 0
//  1 x 1 = 1
//  2 x 2 = 4
//  3 x 3 = 9
//  4 x 4 = 16
//  5 x 5 = 25
//  6 x 6 = 36
//  7 x 7 = 49
//  8 x 8 = 64
//  9 x 9 = 81
//  10 x 10 = 100

// for (let i = 0; i <=10; i++) {
// console.log(i+"x"+i+"="+(i*i));
// }


//? 5)  for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın
//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

//  for (let i = 0; i <=10; i++) {
//     console.log(i+" "+i**2+" "+i**3);
    
//  }

 
// ARRAY
// ?1 # webTechs arrayında olan elementlərin uzunluğu 4'dən böyük olanları yeni bir arraya yığın
// const webTechs = [
//   "HTML",
//   "CSS",
//   "JS",
//   "React",
//   "JS",
//   "Redux",
//   "Node",
//   "JS",
//   "MongDB",
// ];
// let arr=[]
// for (let i = 0; i < webTechs.length; i++) {
//     if(webTechs[i].length>4){
//       arr.push(webTechs[i])
//     }
// }
// console.log(arr);


// ?# 2.product arrayindəki producların qiymətləri cəmini və ortalamasını tapın\
// const products = [
//     {
//       id: 1,
//       title: "Smartphone",
//       description: "A high-end smartphone with the latest features.",
//       price: 799.99,
//     },
//     {
//       id: 2,
//       title: "Laptop",
//       description: "Powerful laptop with a large screen and fast processor.",
//       price: 1299.99,
//     },
//     {
//       id: 3,
//       title: "Coffee Maker",
//       description: "An automatic coffee maker with a built-in grinder.",
//       price: 99.99,
//     },
//     {
//       id: 4,
//       title: "Headphones",
//       description: "Wireless over-ear headphones with noise-cancellation.",
//       price: 199.99,
//     },
//     {
//       id: 5,
//       title: "Smart TV",
//       description: "55-inch 4K Smart TV with streaming apps built-in.",
//       price: 699.99,
//     },
//   ];
  
// let cem=0
// for (let i = 0; i < products.length; i++) {
//    cem+=products[i].price
// }console.log(cem);

// let edediOrta=cem/products.length
// console.log(edediOrta);


// ?countries arrayində a ilə başlayıb a ilə bitən ölkələri tapın
// let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];
// for (let i = 0; i < countries.length; i++) {
//     if(countries[i].charAt(0)=="A" &&  countries[i].charAt(countries[i].length-1)=="a"){
// console.log(countries[i]);
//     }
// }



//? Verilmiş ədədin bölənlərinin sayını tapan funksiya tərtib edin.
// let eded=parseInt(prompt("ededi yazin"))
// function ededSayi(eded){
//     let say=0
//     for (let index = 1; index <= eded; index++) {
        
//         if(eded%index==0){
//             say++
//         }
//     }
//     return say
// }
// console.log(ededSayi(eded));




//? daxil edilmiş cümlə daxilində boşluqların sayini tapan function yazin
// let str=prompt("cumleni yazin")

// function findSpaceCounts(str){
//         let say=0
// for (let i = 0; i < str.length; i++) {
//     if(str[i]==" "){
//         say++
//     }
// }
//         return say
//     }
// console.log(findSpaceCounts(str));




// FUNCTIONS

// ?1) printFullName adında funksiya yaradırsız və 2 parameter qəbul edir (firstName: "lorem", lastName: ipsum)
// console.log(printFullName()) // I am jhon doe
// console.log(printFullName("jhon", "doe"));
// function printFullName(firstName,lastName){
//     let FullName=firstName+" "+lastName
//     return "I am " +FullName
// // return "I am"+" "+firstName+" "+lastName
// }
// console.log(printFullName("leyla","rustemli"));


//? 2) daxil edilən ədədin kvadratını return edən funksiya yazın

// function square(number) {}
// console.log(square(5)); //25
//  let eded=parseInt(prompt("ededi yazin"))
// function square(number){
//    let kvadrat=number**2
// return kvadrat
// }
//  console.log(square(eded));


// ? 3) 4 funksiya yazın. Hər biri 2 parametr qəbul etsin və riyazi əməlləri yerinə yetirsin.

//  console.log(sum(2, 3)); // 5
//  console.log(multiply(2, 3)); //6
//  console.log(subtruct(2, 3)); //-1
//  console.log(divide(2, 3)); // 0,666666


// function toplama(a,b){
//     let c=a+b
//     return c
// }console.log(toplama(5,8));



// function cixma(a,b){
//         let c=a-b
//         return c
// }
// console.log(cixma(9,8));


// function vurma(a,b){
//     let c=a*b
//     return c
// }
// console.log(vurma(9,8));



// function bolme(a,b){
//     let c=a/b
//     return c
// }
// console.log(bolme(9,3));



//? 4) Elə bir funksiya yazın ki, 3 parametr qəbul etsin, 2 ədəd və 1 ədəd operator. Operatora uygun nəticəni return etsin.

// console.log(calculator(2, 5, "+")); //7
// console.log(calculator(2, 5, "*")); //10
// console.log(calculator(2, 5, "/")); //0.4
// console.log(calculator(2, 5, "-")); //-3

// function calculator(a,b,operator){
// if(operator=="+"){
// return a+b
// }
// else if(operator=="*"){
//     return a*b
// }
// else if(operator=="/"){
//     return a/b;
// }
// else if(operator=="-"){
//     return a-b
// }
// }

// console.log(calculator(2, 5, "+")); 
// console.log(calculator(2, 5, "*"));     
// console.log(calculator(2, 5, "/")); 
// console.log(calculator(2, 5, "-")); 



// ?5) arrayın ilk və son elementinin cəmini return edən function yazın.

// function getSum(arr){
// let ilk=parseInt(arr.slice(0,1))
// let son=parseInt(arr.slice(arr.length-1,arr.length))
// return ilk+son
// }
// console.log(getSum([80, 5, 58, 17, 100]));



// ?6) arrayın bütün elementlərinin cəmini qaytaran funksiya yazın.

// function sum(arr){
//     let cem=0
// for (let i = 0; i < arr.length; i++) {
//    cem+=arr[i]
// }
// return cem
// }
// console.log(sum([10,20,30,40,50]));


//? 7) arrayin daxilindəki max elementi return edən funksiya yazın.
// function element(arr){
// let maxElement=arr[0]
// for (let i = 1; i < arr.length; i++) {
//    if(arr[i]>maxElement){
//     maxElement=arr[i]
//    }
// }
// return maxElement
// }
// console.log(element([4,5,8,7,9,11,15]));



// ?8) filterEmployees adında funksiya yaradın, parameter kimi bir array alsın və salary > 60000 olan objectləri return etsin
// const employees = [
//   { name: "Jamil", salary: 50000, department: "IT" },
//   { name: "Jale", salary: 60000, department: "HR" },
//   { name: "Bayram", salary: 55000, department: "IT" },
//   { name: "Sahil", salary: 75000, department: "HR" },
//   { name: "Maryam", salary: 65000, department: "IT" },
//   { name: "Elnara", salary: 80000, department: "HR" },
//   { name: "Davud", salary: 70000, department: "IT" },
// ];

// function objectlər(employees){
// let salary=0
// for (let i = 0; i < employees.length; i++) {
//     if(employees[i].salary>60000){
//         salary++
//     }
// }
// return salary
// }
// console.log(objectlər(employees));



//? 11. Daxil edilən iki arrayi birləşdirən funksiya yazın.
// console.log(concatArray([1,2,3,4,5],[6,7,8,9]))
// Expected Output:
// [1,2,3,4,5,6,7,8,9]

// function concatArray(arr1,arr2){
// const number=arr1.concat(arr2)
// return number
// }
// console.log(concatArray([1,2,3,4,5],[6,7,8,9]));



// ?14. Bir funksiya yazın 2 parametr qəbul etsin, birinci başlanğıcı ikinci sonu göstərsin. Siz isə arada qalan rəqəmləri doldurun.
// Məsələn:
// console.log(range(1, 4));
// Expected Output:
// [1, 2, 3, 4]

// function range(parametr1,parametr2){
// let newArr=[]
// for (let i = parametr1; i <= parametr2; i++) {
//     newArr.push(i)
// }
// return newArr
// }
// console.log(range(2,8));