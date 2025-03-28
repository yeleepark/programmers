function solution(numLog) {
  let result = '';
  for (let i = 1; i < numLog.length; i++) {
    const diff = numLog[i] - numLog[i - 1];
    if (diff === 1) result += 'w';
    else if (diff === -1) result += 's';
    else if (diff === 10) result += 'd';
    else if (diff === -10) result += 'a';
  }
  return result;
}
