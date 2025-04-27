function solution(clothes) {
    const clothesMap = {};

    for (let [name, type] of clothes) {
        clothesMap[type] = (clothesMap[type] || 0) + 1;
    }

    let answer = 1;
    for (let type in clothesMap) {
        answer *= (clothesMap[type] + 1);
    }

    return answer - 1;
}
