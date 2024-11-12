//problem 2
{
    const removeDuplicates = (param: number[]): number[] => {
        const newArray: number[] = Array.from(new Set(param))
        return newArray
    }
    console.log(removeDuplicates([1, 2, 3, 5, 5, 6, 6, 7, 7, 7]));
}