//problem 1
{
let sum: number = 0;
const sumArray = (param: number[]): number => {
    param.forEach((val: number) => sum += val);
    return console.log(sum);
}
sumArray([1, 2, 3, 4, 5]);
}
