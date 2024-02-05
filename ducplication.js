function dublicate(names){
    const newlist = [];
    

    for(const name of names){
        if(newlist.includes(name) === false)
        newlist.push(name)
    }
    const total = newlist.length
    console.log(total)
    return newlist
}
const names = ["Kafi", "Jisad", "Alamin", "Rashed", "Rowson", "Rashed", "Alamin","Kafi", "Roton"]
// const total = names.length
// console.log(total)
const newlist = dublicate(names)
console.log(newlist)