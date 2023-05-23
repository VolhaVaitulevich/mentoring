function solution (numbers) {
    numbers.sort((a, b) => b - a)
    while (true) {
        let count = 0
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > numbers[i+1]) {
                numbers[i] -= numbers[i+1]
                count++
            }
        }
        if (count === 0) break
        if (count === 1) { 
            numbers.sort((a, b) => b - a)
        }
    }
    return numbers.reduce((acc, item) => acc += item, 0)
}

function solutionNew (numbers) {
    return numbers.length * numbers.reduce((acc, item) => gcd(acc, item), 0)
  }
  
function gcd(acc, item)  {
    if (item === 0) return acc
    else return gcd(item, acc % item)
}