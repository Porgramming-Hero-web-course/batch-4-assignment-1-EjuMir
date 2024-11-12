//problem 3
{
    const countWordOccurrences = (param1: string, param2: string): number => {
        const arr: string[] = param1.split(' ');
        const result: string[] = arr.filter(value => value.toLowerCase() === param2.toLowerCase())
        return result.length
    }
    // console.log(countWordOccurrences("I love typescript", "typescript"));
} 