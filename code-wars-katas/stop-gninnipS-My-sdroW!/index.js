function spinWords(string){
    const arrOfWords = string.split(' ');
    const spinnedWords = arrOfWords.reduce((acc, item) => {
        const testarr = [];
        if (item.length >= 5) {
            return acc + ' ' + item.split('').reverse().join('');
        }
        return acc + ' ' + item;
    }, '');
    return spinnedWords.trim();
}