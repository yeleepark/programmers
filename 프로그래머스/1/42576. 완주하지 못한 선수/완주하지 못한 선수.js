function solution(participant, completion) {
  const map = new Map();

  for (let name of participant) {
    map.set(name, (map.get(name) ?? 0) + 1);
  }

  for (let name of completion) {
    map.set(name, map.get(name) - 1);
  }

  for (let [name, count] of map) {
    if (count > 0) return name;
  }
}
