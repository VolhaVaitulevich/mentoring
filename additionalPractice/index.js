/* const person = {
    name: 'Lydia',
    age: 21,
  };
  
  for (const item in person) {
    console.log(item);
  }


  [1, 2, 3, 4].reduce((x, y) => console.log(x, y), 0);

 */
  const fibonacci = (n) => {
    const phi = (Math.sqrt(5)+1)/2
    const bigPhi = BigInt(phi * 1000000000000000)
    const isEven = (n%2) ? 1 : -1


    let f = [ 0n, 1n, 1n, 2n, 3n, 5n ];
    const x = Math.abs(n)
        // Fibonacci numbers for n < 6
        if (x < 6)
            return f[x];
   
        // Else start counting from 
        // 5th term
        let t = 5, fn = 5n;
   
        while (t < x) {
             fn = ((fn * bigPhi));
             t++;
        }
        if (n < 0) {
          return BigInt(fn * BigInt(isEven))
        }
        return BigInt(fn);   
  }
console.log(fibonacci(-7));