function solution(n) {
    return [...n.toString()].reverse().map(i => parseInt(i));
}