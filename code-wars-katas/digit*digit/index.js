function squareDigits(num){
    const arrOfDigits = num.toString().split('');
    return Number(arrOfDigits.map((item) => item ** 2).join(''));
}