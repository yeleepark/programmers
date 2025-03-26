function solution(num_list) {
    const { even, odd } = num_list.reduce(
        (acc, num) => {
            num % 2 === 0 ? (acc.even += num) : (acc.odd += num);
            return acc;
        },
        { even: '', odd: '' }
    );

    return Number(even) + Number(odd);
}
