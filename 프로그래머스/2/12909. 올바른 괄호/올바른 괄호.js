function solution(s) {
    let count = 0;
    for (const char of s) {
        if (char === '(') {
            count++;
        } else {
            count--;
        }

        if (count < 0) return false;
    }
    return count === 0;
}
