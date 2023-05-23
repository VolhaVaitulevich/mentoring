function scramble(str1, str2) {
    const strObj1 = str1.split('').reduce((acc, item) => {
          if (acc[item]) {
              acc[item] += 1
          }
          else { acc[item] = 1 }
          return acc
      }, {})
      const strObj2 = str2.split('').reduce((acc, item) => {
          if (acc[item]) {
              acc[item] += 1
          }
          else { acc[item] = 1 }
          return acc
      }, {})
  
      for (key in strObj2) {
          if (!strObj1[key] || strObj1[key] < strObj2[key])
          {
              return false
          }
      }
  
      return true
  }