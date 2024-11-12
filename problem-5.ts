//problem 5
{
    const getProperty =<T,Q extends keyof T>(param1:T, param2:Q) =>{
         return param1[param2]
    }
    const person = { name: "Alice", age: 30 };
     
    // console.log(getProperty(person, "age")); 

}