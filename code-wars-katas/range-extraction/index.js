function solution(list){let result = '';
    for (let i = 0; i < list.length; ) {
        let count = 1
        for (let j = i; j < list.length; j++) {
            if (list[j] === list[j+1] - 1) {
                count += 1
            } 
            else {
                break
            }
        }
        if (count >= 3) {
            result += list[i] + '-' + list[i+count-1] + ','
        }
        else {
            if (count === 2) {
                result += list[i] + ',' + list[i+1] + ','
            } else {result += list[i] + ','}
        }
        i = i + count
    }
    if (result.slice(-1) === ',') {
        result = result.slice(0,-1)
    }
    return result
}