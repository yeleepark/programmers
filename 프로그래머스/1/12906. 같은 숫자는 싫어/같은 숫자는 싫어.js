function solution(arr)
{
    return arr.filter((value, index) => {
        return value !== arr[index - 1];
    })
}