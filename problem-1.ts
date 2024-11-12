//problem 1
{
let sum: number = 0;
const sumArray = (param: number[]): number => {
    param.forEach((val: number) => sum += val);
    return sum;
}
// console.log(sumArray([1, 2, 3, 5]));
}
