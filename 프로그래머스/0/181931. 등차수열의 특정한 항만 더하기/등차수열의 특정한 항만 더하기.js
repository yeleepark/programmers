function solution(a, d, included) {
    let result = 0;
    included.reduce((acc, curr, index) => {
        if (index === 0) acc = a;
        else acc += d;
        
        if (curr) result += acc;
        return acc;
    }, 0);
    return result;
}