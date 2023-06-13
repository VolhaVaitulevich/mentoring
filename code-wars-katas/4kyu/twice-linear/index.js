function dblLinear(n) {
  let u = [1];
  let x = 0;
  let y = 0;

  for (let i = 0; i < n; i++) {
    let nextX = u[x] * 2 + 1;
    let nextY = u[y] * 3 + 1;
    let next = Math.min(nextX, nextY);

    u.push(next);

    if (next === nextX) {
      x++;
    }

    if (next === nextY) {
      y++;
    }
  }

  return u[n];
}