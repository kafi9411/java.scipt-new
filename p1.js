function calculateMoney(tikit){
    const totaltikitSells = 120 * tikit
    const getmanFee = 500;
    const stafLanchFee = 50;
    const staf = 8;
    const stafTotalLachFee = staf * stafLanchFee
    const totalFee = stafTotalLachFee + getmanFee
    const profit = totaltikitSells - totalFee 
    return profit
}
const profit  = calculateMoney(93)
console.log(profit)
