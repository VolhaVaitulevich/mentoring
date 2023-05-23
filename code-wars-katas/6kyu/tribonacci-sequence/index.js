function tribonacci(signature,n){
    if (n === 0) {
          return [];
      }
      if (signature.length < 2) {
          return [];
      }
      if (n <= 2) {
          signature.length = n;
          return signature;
      } 
      let i = 3;
      while (i < n) {
          signature[i] = signature[i-3] + signature[i-2] + signature[i-1];
          i++;
      }
      return signature;
  }