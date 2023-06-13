function permutations(string) {
  const combinations = new Set();

  function generateCombinations(prefix, remaining) {
    if (remaining.length === 0) {
      combinations.add(prefix);
    } else {
      for (let i = 0; i < remaining.length; i++) {
        generateCombinations(
          prefix + remaining[i],
          remaining.slice(0, i) + remaining.slice(i + 1)
        );
      }
    }
  }

  generateCombinations('', string);
  return Array.from(combinations);
}