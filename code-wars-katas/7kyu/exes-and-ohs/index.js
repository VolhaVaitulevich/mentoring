function XO(str) {
    const charsObj = [...str.toLowerCase()].reduce((acc, item) => {
        if (!acc[item]) {
            return {...acc, [item]: 1};
        } 
        return {...acc, [item]: acc[item] + 1};
    }, {});
    return charsObj['o'] === charsObj['x'];
}

function XONew(str) {
    const charsObj = [...str].map((item) => item.toLowerCase()).reduce((acc, item) => {
        if (!acc[item]) {
            return {...acc, [item]: 1};
        } 
        return {...acc, [item]: acc[item] + 1};
    }, {});
    return charsObj['o'] === charsObj['x'];
}