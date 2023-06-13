const countNum = (num, start) => {
    let res = 1
    while ((start) <= num) 
    {
        res = res * start
        start += 2
    }
    let resStr = String(res)
    let end = resStr.length - 1
    let count = 0
    while (resStr[end] === '0') {
        count ++
        end --
    }
    return count
}

function countZeros(n) {
    let result = 0
    if (n % 2 === 0) {
        result = countNum(n, 2)
    }
    else result = countNum(n, 1)
    return result
}

console.log(countZeros(4387));

