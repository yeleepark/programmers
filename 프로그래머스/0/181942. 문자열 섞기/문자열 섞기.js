function solution(str1, str2) {
    return [...str1].map((char, i) => char + str2[i]).join('');
}
