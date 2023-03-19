// // Завдання 1
const car={
    model: 'audi',
    year: 2000,
    color: 'white'
}
let key = prompt('What color do you want?', 'color')
car.color = key;
car.type = 'electro'
alert(car.color)
console.log (car)

// // Завдання 2
// const salaries = {
//     fronted: 12000,
//     backend: 10000,
//     designer: 8000,
//     dayPay() {
//         alert('We must pay salary on Tuesday!');
//     },
//     total(){
//         let sum = 0;
//         for (const key in salaries) {
//             if( Number(this[key]))
//             sum += this[key];
//             console.log(sum)
//         }
//     }
// }
// salaries.total();
// salaries.manager = 5000;
// salaries.total()

// // // Завдання 3
// function Lego(brand, system, cost) {
//     this.brand = brand,
//         this.system = system,
//         this.cost = cost,
//         this[Symbol.toPrimitive] = (hint) => {
//             // hint "string", "number","default"
//             if ('string' === hint) {
//                 return this.brand
//             };
//             if ('number' === hint) {
//                 return this.cost
//             };
//             if ('default' === hint) {
//                 return ("'" + this.brand + " " + this.system + " " + this.cost + "' ")
//             }
//         }
// };
// let dell = new Lego('Dell', 'Windows', 800)
// console.log(dell)
// let apple = new Lego('Apple', 'MAC_OS', 1700)
// console.log(apple);

// console.log(String(dell))
// // dell
// console.log(+apple)
// // 1700
// console.log(dell + apple)
// // 'Dell windows 800'+'Apple MAC OS 1700'