export const likes = (a : string[]) : string => {
  // TODO
  const len:number = a.length
  let result:string = 'like this'
  if (len === 0) return 'no one likes this'
  if (len === 1) return `${a[0]} likes this`
  if (len === 2) return `${a[0]} and ${a[1]} ${result}`
  if (len === 3) return `${a[0]}, ${a[1]} and ${a[2]} ${result}`
  else return `${a[0]}, ${a[1]} and ${len-2} others ${result}`
}