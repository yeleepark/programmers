function solution(ineq, eq, n, m) {
  const operatorMap = {
    ">=": n >= m,
    "<=": n <= m,
    ">!": n > m,
    "<!": n < m,
  };
  
  return operatorMap[ineq + eq] ? 1 : 0;
}