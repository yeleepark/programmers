function solution(l, r) {
  const result = [];

  for (let i = l; i <= r; i++) {
    const str = i.toString();
    if ([...str].every(ch => ch === '0' || ch === '5')) {
      result.push(i);
    }
  }

  return result.length ? result : [-1];
}
