//problem 7

{

    class Car {
        constructor(public name: string, public model: string, public year: number){}
        getCarAge(){
            const currentYear = new Date().getFullYear()
            return console.log(currentYear - this.year);
        }
    }
    
    const car = new Car("Honda", "Civic", 2018);
    // car.getCarAge();
}