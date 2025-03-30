function solution(arr, queries) {
  for (const [s, e, k] of queries) {
    let start = s + (k - (s % k)) % k;

    for (let i = start; i <= e; i += k) {
      arr[i] += 1;
    }
  }

  return arr;
}
