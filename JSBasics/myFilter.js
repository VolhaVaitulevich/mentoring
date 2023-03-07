// polyfill for filter 
Array.prototype.myFilter = function (callback) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            arr.push(this[i]);
        }
    }
    return arr;
}

console.log(arr.myFilter((item) => {
    return (item >= 5);
}));