function moveZeros(arr) {
    return arr.filter(item => item !== 0).concat(arr.filter(item => item ===0))
}


function moveZerosNew(arr) {
    const newArr = arr.filter( (item) => item !== 0 )
    const arrayOfZeros = new Array(arr.length - newArr.length).fill(0);
    console.log(arrayOfZeros, newArr);
    newArr.push(...arrayOfZeros);
    return newArr;
}