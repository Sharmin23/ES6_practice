// // Template Strings allow multiline strings:

// // let text =
// // `The quick
// // brown fox
// // jumps over
// // the lazy dog`;


// // console.log(text);

// var numbers = [ 89,35,97,21];

// var student = {
//     name: 'sakib khan',
//     age: 32,
//     movies:['king khan','dhakar mastan']
// }

// var about = `My Name os ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]} ` ;

// console.log(about);


// // **********Arrow function********

// var getFifty = () => 55; // without peremeter
// var addSixtyFive = num => num + 65 ; 
// var isEven = x => x % 2 == 0; // single perameter
// var addThree = (x,y,z)=> x+y+z; // perameter
// var doMath = (num1, num2) => {
//     const sum = num1 + num2;
// //     return sum;
// } //multline

// // ***********spread operator*********
// var numbers = [ 89,35,97,21];
// var newNumbers =[...numbers ];

// numbers.push(99);

//  console.log(newNumbers);
//  console.log(numbers);

//  //Create a new array from an older array and add an Element

//  var currentNumber = [...numbers,55];
//  console.log(currentNumber);

// //  Array Method( Map,ForEach,Filter and find)

// var products=[

// {name:'laptop', price: 3200, brand:'lenovo',color: 'silver'},

// {name:'phone', price: 7000, brand:'iphone',color: 'golden'},
// {name:'sunglass', price: 300, brand:'ribon',color: 'black'},
// ];

// var brand = products.map(product => product.brand);

// console.log(brand);

// products.forEach(product =>console.log(product))
// products.forEach(product =>console.log(product.color))

// // product.forEach(product =>){
// // //     //multiline
// // // }

// // //filter
// // var cheap = products.filter(product => product.price<=5000);
// // console.log(cheap);

// // var cheap = products.find(product => product.price<=5000);
// // console.log(cheap);

// // Destructuring array and object

// // array
// var [x, y] = [42, 65];

// console.log(x, y);

// //object

// var student{name,age}= {
//     name: 'shramin',
//     age:25,
//     salay : 35000
// }

// var employee = {
//     ide:'VS Code',
//     designation:'developer',
//     machine:'mac',
//     lang:['html','css','js'],
//     specification:{
//         height : 66,
//         weight: 67,
//         address:'kapasia',
//         drink :'water',
//         watch:{
//             color:'black',
//             price:500,
//             brand:'garmin'
//         }

//     }
// }

// var { machine,idea} = employee;
// var {brand} = employee?.specification?.watch;

//JESON,Fethch,keys,values ,Array andd or remove using Dots

//JSON

// var student = {
//     name: ' Sharmin Sultana',
//     age: 27,
//     hobbies: ['progmming','dance','singing']
// }

// // covert object to json
// var studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);
// //convrt json to object
//  var studentObj = JSON.parse(studentJSON);
//  console.log(studentObj);


 //fetch
    









