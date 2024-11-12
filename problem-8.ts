//problem 8
{
  
    const validateKeys = <T extends Object, Q extends keyof T>(obj: T, keys: Q[]):boolean =>{
                return keys.every(key => key in obj);
    }
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    // console.log(validateKeys(person, ["name", "age"]));

}