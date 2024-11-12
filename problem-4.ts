//problem 4

{

    type Circle = {
     shape: string;
     radius: number;
    }
 
    type Rectangle = {
     shape: string;
     width: number;
     height: number;
    }
 
    type Shape = Circle | Rectangle;
 
    const calculateShapeArea = (param:Shape) : number => {
         if('radius' in param){
             return Math.PI * param.radius * param.radius
         }
         else return param.width * param.height
    }
 
    const circleArea = calculateShapeArea({ shape: "circle", radius: 7 });
 
    const rectangleArea = calculateShapeArea({
     shape: "rectangle",
     width: 4,
     height: 6,
   });
 //    console.log(circleArea);
 //    console.log(rectangleArea);
 }