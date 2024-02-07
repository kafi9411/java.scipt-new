function dublicate(Numbers){
    const newlist = [];
    for( const Number of Numbers){
        if(newlist.includes(Number) ===false){
            newlist.push(Number)
        }
        
    }
    return newlist
    

}
const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 7, 9, 5, 6, 4, 5, 2, 45, 5, 5, 8, 9, 0, 5, 5, 4, 4, 5 ];
const newlist = dublicate(Numbers)
console.log(newlist)