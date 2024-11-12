Union Types (|):
A union type allows a variable to be one of several types. It is defined using the '|' symbol. Union types are useful when you want to indicate that a value could be of different types.

example : 
   type Circle = {
     shape: string;
     radius: number;
    }
 
    type Rectangle = {
     shape: string;
     width: number;
     height: number;
    }
 
    type Shape = Circle | Rectangle;   after union  -->    Shape = {shape: string}

Intersection Types (&):
An intersection type combines multiple types into one. A value must satisfy all of the types in the intersection. Intersection types are ideal when you need an object that has properties from multiple types.

example : 

interface Person {
  name: string;
}

interface Student{
  permissions: string[];
}

type Educated = Person & Student; after intersection --> Educated = {name: string; permissions: string[];}

const educ : Educated = {
  name: "Alice",
  permissions: ["read", "write"]
};

Union and intersection types are powerful features in TypeScript that help create flexible and precise type definitions