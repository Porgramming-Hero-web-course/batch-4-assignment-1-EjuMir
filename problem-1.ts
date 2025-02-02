//problem 1
{
let sum: number = 0;
const sumArray = (param: number[]): number => {
   return param.forEach((val: number) => sum += val);
}
sumArray([1, 2, 3, 4, 5]);
}
