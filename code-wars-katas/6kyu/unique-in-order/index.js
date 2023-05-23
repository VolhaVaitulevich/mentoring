var uniqueInOrder=function(iterable){
    const uniqueArr = [];
    [...iterable].forEach(item => {
        if (item !== uniqueArr[uniqueArr.length - 1]) {
            uniqueArr.push(item);
        }
    });
    return uniqueArr;
}

var uniqueInOrder=function(iterable){
    const myReduce = (arr) => {
        return arr.reduce((acc, item) => {
            const newArr = acc;
            let i = newArr.length-1;
            if (item !== newArr[i]) {
                newArr.push(item);
            }
            return newArr;
        }, [])
    }
    if (!Array.isArray(iterable)) {
        return myReduce(iterable.split(''));
    }

    if (Array.isArray(iterable)) {
        return myReduce(iterable);
    }
}