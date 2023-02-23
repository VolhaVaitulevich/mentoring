const lastVisited = '2023-01-18T15:25:00';


const getTimestampDiff = (lastVisited) =>{
    const currentDateTimestamp = Date.now();
    const lastVisitedTimestamp = new Date(lastVisited).getTime();
    return currentDateTimestamp - lastVisitedTimestamp;
}

const getDiff = (lastVisited) => {
    const lastSeen = "Last seen:";
    const msDiff = getTimestampDiff(lastVisited);
    const secondsDiff = Math.round(msDiff / 1000);
    const minutesDiff = Math.round(secondsDiff / 60);
    const hoursDiff = Math.floor(minutesDiff / 60);
    const daysDiff = Math.floor(hoursDiff / 24);
    const weeksDiff = Math.floor(daysDiff / 7);
    const monthsDiff = Math.floor(daysDiff / 30);
    const yearDiff = Math.floor(monthsDiff / 12);
    
    if (secondsDiff < 10) {
        return `${lastSeen} recently.`;
    }
    if (secondsDiff >= 10 && secondsDiff <= 59) {
        return `${lastSeen} ${secondsDiff} seconds ago.`;
    }
    if (secondsDiff > 59 && minutesDiff <= 59) {
        if (minutesDiff === 1) {
            return `${lastSeen} a minute ago.`;
        }
        return `${lastSeen} ${minutesDiff} minutes ago.`;
    }
    if (minutesDiff > 59 && hoursDiff <= 23) {
        if (hoursDiff === 1) {
            return `${lastSeen} an hour ago.`;
        }
        return `${lastSeen} ${hoursDiff} hours ago.`;
    }
    if (hoursDiff > 23 && daysDiff < 7) {
        if (daysDiff === 1) {
            return `${lastSeen} a day ago.`;
        }
        return `${lastSeen} ${daysDiff} days ago.`;
    }
    if (daysDiff >= 7 && weeksDiff < 5) {
        if (weeksDiff === 1) {
            return `${lastSeen} a week ago.`;
        }
        return `${lastSeen} ${weeksDiff} weeks ago.`;
    }
    if (weeksDiff >= 5 && monthsDiff < 12) {
        if (monthsDiff === 1) {
            return `${lastSeen} a month ago.`;
        }
        return `${lastSeen} ${monthsDiff} months ago.`;
    }      
    if (monthsDiff >= 12)
    {
        if (yearDiff === 1) {
            return `${lastSeen} a year ago.`;
        }
        return `${lastSeen} ${yearDiff} years ago.`
    }


}
console.log(getDiff(lastVisited));
