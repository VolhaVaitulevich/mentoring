function incrementString (strng) {
    let matches = [] 
      matches = (strng.match(/\d+/g)) ? strng.match(/\d+/g) : []
      if (matches.length > 0) {
          strng = strng.slice(0, -matches[matches.length-1].length)
          if (matches.length) {
              const newNumber = Number(matches[0]) + 1;
              if (String(newNumber).length === matches[0].length) {
                  return strng + newNumber
              } 
              else {
                  let diff = matches[0].length - String(newNumber).length
                  while (diff > 0) {
                      strng += '0'
                      diff -= 1
                  }
                  return strng + newNumber
              }
          }
      }
      return strng + '1' 
  }