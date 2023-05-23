// return masked string
function maskify(cc) {
    if (cc.length <= 3) {
            return cc;
        }
        const arrOfChars = cc.toString().split('');
        for (let i = arrOfChars.length - 5; i >= 0; i--) {
            arrOfChars[i] = '#';
        }
        return arrOfChars.join('');
    }