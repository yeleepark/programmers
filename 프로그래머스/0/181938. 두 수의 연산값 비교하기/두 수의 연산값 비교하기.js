function solution(a, b) {
    const ab = Number(a.toString() + b.toString());
    const mul = 2 * a * b;

    return ab >= mul ? ab : mul;
}