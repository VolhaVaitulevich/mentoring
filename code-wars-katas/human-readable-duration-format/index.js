function formatDuration (seconds) {
    // Complete this function
    if (seconds === 0) {
        return 'now'
    }
      let minutesDiff = Math.floor(seconds / 60)
      let hoursDiff = Math.floor(minutesDiff / 60)
      let daysDiff = Math.floor(hoursDiff / 24)
      const yearDiff = Math.floor(daysDiff / 365)

      const secondsDiff = seconds % 60;
      minutesDiff = minutesDiff % 60
      hoursDiff = hoursDiff % 24
      daysDiff = daysDiff % 365
      
      const arr = []


      if (yearDiff >= 1)
      {
          if (yearDiff === 1) {
              arr.push('1 year')
          }
          else {arr.push(`${yearDiff} years`)}
      }
      if (daysDiff >= 1) {
          if (daysDiff === 1) {
             arr.push(`1 day`);
          }
          else {arr.push(`${daysDiff} days`);}
      }
      if (hoursDiff >=1 ) {
          if (hoursDiff === 1) {
            arr.push(`1 hour`);
          }
          else {arr.push(`${hoursDiff} hours`);}
      }
      if (minutesDiff >= 1) {
          if (minutesDiff === 1) {
              arr.push(`1 minute`);
          }
          else {arr.push(`${minutesDiff} minutes`);}
      }
      if (secondsDiff >= 1) {
        if (secondsDiff === 1) {
            arr.push(`1 second`)
        }
        else {arr.push(`${secondsDiff} seconds`);}
      }
      const last = arr.pop();
      let result = ''
      if (arr.length === 0) {
        result = last
      }
       else {result = arr.join(', ') + ' and ' + last}
      
      return result
  }