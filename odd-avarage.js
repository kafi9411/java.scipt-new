function oddAvarage(numbers){
    const adds = [];
    for(const number of numbers){
        if(number % 2 ===1){
            adds.push(number)
        }
    }
    let sum =0;
    for(const number of adds){
          sum = sum + number;    
    }
    const count = adds.length;
    console.log(sum , count)
    const avg = sum / count
    

    return avg;
}
const numbers = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 ];
const avg = oddAvarage(numbers)
console.log(avg)