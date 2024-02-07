const numbers = [25, 23, 21, 26, 22,82, 26,247, 28, 26,2, 4, 255, 55]
function hight(numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(max < num){
            max = num
        }        
    }
    return max
}
const max = hight(numbers)
console.log(max)
