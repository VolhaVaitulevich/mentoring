function generateHashtag (str) {
    const arrOfWords = str.split(" ");
    const resultString = '#' + arrOfWords.reduce((accString, item) => accString + item.charAt(0).toUpperCase() + item.slice(1),'');
    return (resultString.length > 140 || resultString.length === 1) ? false : resultString;
}