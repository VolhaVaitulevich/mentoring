// polyfill for reduce
Array.prototype.myReduce = function (callback, accInitialValue) {
    console.log(typeof accInitialValue);
    let acc = accInitialValue;
    for (let i = 0; i < this.length; i++) {
        acc = callback(acc, this[i], i, this);
    }
    return acc;
}

console.log(arr.myReduce((acc, item) => {
    if (!acc[item]) {
        return {...acc, [item]: 1};
    } 
    return {...acc, [item]: acc[item] + 1};
}, {}));