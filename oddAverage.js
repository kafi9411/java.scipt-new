function oddAverage(numbers){
    const odds = [];
    for(const number of numbers){
        if(number % 2 ===1){
            odds.push(number)            
        }  

    }
    sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    const count = odds.length;
    const avg = sum / count
    return avg
}
const numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const avg = oddAverage(numbers)
console.log(avg)
