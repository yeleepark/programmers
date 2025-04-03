function solution(n) {
    return [...n.toString()].reduce((acc, curr) => acc + parseInt(curr), 0);
}
