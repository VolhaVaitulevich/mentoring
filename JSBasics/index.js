const arr = [1,2,0,3,6,2,3,4,6,8,0,9,4,5,6,7,7,7,7];

const numberOfUsages = arr.reduce((acc, item) => {
    if (!acc[item]) {
        return {...acc, [item]: 1};
    } 
    return {...acc, [item]: acc[item] + 1};
}, {});

const checkOnUndefined = (value) => {
    return typeof value === 'undefined';
}


const obj = {
    a: {
        t1: 'a',
        t2: 'c'
    },
    c: 'test',
    d: [1,4]
}

const obj2 = {...obj};

const arr2 = [...arr];

Number.prototype.multiply = function (num) {
    return this * num;
}
const testNumber = 4;

Array.prototype.myMap = function (callback) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(callback(this[i], i, this));
    }
    return arr;
}

console.log(arr.myMap((item) => {
    return item.multiply(2);
}));


