function solution(arr, queries) {
  const result = [];

  for (const [s, e, k] of queries) {
    const sliced = arr.slice(s, e + 1);
    const filtered = sliced.filter((v) => v > k);
    const min = filtered.length ? Math.min(...filtered) : -1;
    result.push(min);
  }

  return result;
}
