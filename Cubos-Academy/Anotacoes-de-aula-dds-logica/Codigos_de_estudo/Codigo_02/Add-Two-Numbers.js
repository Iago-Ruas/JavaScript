
let arrayNumber_01   = [2,3,0,5];
let arrayNumber_02   = [6,5,8,4];
let number_01        = 0;
let number_02        = 0;

number_01 = arrayNumber_01.reverse();
number_02 = arrayNumber_02.reverse();

console.log(number_01);
console.log(number_02);

for (let i = 0; i < arrayNumber_01.length; i++){
    let number_A = number_01[i]
    let number_B = number_02[i]
    console.log(`${number_A},${number_B}`);
    
}