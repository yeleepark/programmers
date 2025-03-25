function solution(n) {
  let sum = 0;
    
  if (n % 2 === 1) {
    for (let i = 1; i <= n; i += 2) {
      sum += i;
    }
    return sum;
  } else {
    for (let i = 2; i <= n; i += 2) {
      sum += i * i;
    }
    return sum;
  }
}