// Problem-1


function formatString(typeing: string, toUpper?: boolean) {
    if (toUpper === true) {
        return typeing.toLocaleLowerCase()
    }
    else {
        return typeing.toUpperCase()
    }

}
const result = formatString("Hello", false)
// console.log(result);


// problem-2//


type Book = {
    title: string,
    rating: number
}

const books:Book[] = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

function filterByRating(items: Book[]):Book[] {
    const filtering = items.filter(hi => hi.rating >= 4)
    return filtering

}

const filterRating = filterByRating(books)
console.log(filterRating);


// Problem-3 

function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat()
}

const allArayData = (concatenateArrays([1, 2], [3, 4], [5]))
console.log(allArayData);


// Problem-4


class Vehicle {
    private make:string;
    private year: number;

  constructor( make:string,year: number) {
    this.make= make
    this.year= year
  }

  getInfo() {
     return (`Make ${this.make} Year ${this.year}`)
  }

  protected getMake() {
    return this.make;
  }
  protected getYear() {
    return this.year;
  }


}

class Car extends Vehicle {

    private model: string;

   constructor( make:string,year: number, model:string) {
    super(make,year);
    this.model = model;
   }
 
   getModel() {
      return (`Model ${this.model}`)
   }

   getFullInfo() { 
    return (`Make: ${this.getMake} MOdel: ${this.model} Year: ${this.getYear}`)
   }
 }
 
 const myCar = new Car("Toyota", 2020, "Corolla");

 console.log(myCar);