function toCamelCase(str) {
    // Split the string by dashes and underscores
    const words = str.split(/[-_]/);
  
    // Capitalize the first letter of each word after the first one
    const camelCaseWords = words.map((word, index) => {
      if (index === 0) {
        return word;
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    });
  
    // Join the words back together
    const camelCaseStr = camelCaseWords.join('');
  
    return camelCaseStr;
  }