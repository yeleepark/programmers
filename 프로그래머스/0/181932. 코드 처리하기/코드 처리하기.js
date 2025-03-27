function solution(code) {
  let mode = 0;
  let ret = [...code].reduce((acc, cur, i) => {
    if (cur === '1') {
      mode = 1 - mode;
    } else if (i % 2 === mode) {
      acc += cur;
    }
    return acc;
  }, '');

  return ret || 'EMPTY';
}