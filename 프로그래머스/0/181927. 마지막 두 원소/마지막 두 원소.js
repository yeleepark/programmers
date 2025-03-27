function solution(num_list) {
  const [a, b] = num_list.slice(-2);
  num_list.push(b > a ? b - a : b * 2);
  return num_list;
}