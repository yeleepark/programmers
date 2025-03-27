function solution(n, control) {
    return [...control].reduce((acc, curr) => {
        if (curr === 'w') return acc + 1;
        if (curr === 's') return acc - 1;
        if (curr === 'd') return acc + 10;
        if (curr === 'a') return acc - 10;
        return acc;
    }, n);
}
