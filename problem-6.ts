//problem 6

{

    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    type NewProf = Partial<Profile>;


    const updateProfile = (param1:Profile, param2:NewProf) =>{
        return {...param1, ...param2}
    }
    const person = { name: "Alice", age: 30, email: "alice@example.com" };
    // console.log(updateProfile(person, { age: 26 }));
} 