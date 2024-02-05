function finalAverage(numbers){
    odds=[];
    for(const number of numbers){
        if( number % 2 ===1)
        odds.push(number)
    }
    sum = 0 ;
    for(const number of odds){
        sum = sum + number
    }
    const count =  odds.length;
    const avg = sum /count
    return avg

}
const numbers = [1, 10, 15, 20, 25, 30, 35,  40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100 ];
const avg = finalAverage(numbers)
console.log(avg)