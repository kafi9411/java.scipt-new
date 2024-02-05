// Array Number Jog Korar Upai  
function arrayAdd(numbers){
   let sum = 0;
   for (const number of numbers){
    console.log(number);
    sum = sum + number;
   }
   return sum;

   

}
const nums = [20, 21, 24, 26, 4, 2, 23];
const sum = arrayAdd(nums)
console.log(sum)