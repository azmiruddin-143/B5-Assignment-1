function formatString(typeing: string, toUpper?: boolean):string {
    if (toUpper === true) {
        return typeing.toLocaleLowerCase();
    }else{
        return typeing.toUpperCase();
    }
}

formatString("Hello"); 
formatString("Hello", true);   
formatString("Hello", false);



type Book = {
    title: string,
    rating: number
}

const books: Book[] = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

function filterByRating(items: Book[]): Book[] {
    const filtering = items.filter(hi => hi.rating >= 4)
    return filtering;
}

 filterByRating(books)



function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
}

concatenateArrays(["a", "b"], ["c"]);
concatenateArrays([1, 2], [3, 4], [5]);  


class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make
        this.year = year
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

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }

    getModel() {
        return (`Model ${this.model}`)
    }

    getFullInfo() {
        return (`Make: ${this.getMake()} MOdel: ${this.model} Year: ${this.getYear()}`)
    }
}

const myCar = new Car("Toyota", 2020, "Corolla");

myCar.getInfo();      
myCar.getModel();     
myCar.getFullInfo();


function processValue(value: string | number): number {

    if (typeof value === "number") {
        return value * 2;
    }else {
        return value.length;
    }
}

 processValue("hello");
 processValue(10);


interface Product {
    name: string,
    price: number
}

const products:Product[] = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];
  
function getMostExpensiveProduct(products: Product[]): Product | null {

    if(products.length === 0) {
        return null;
    }
    const mostExpensive = products.reduce((prev,current) =>{
        return current.price > prev.price ? current : prev;
    })
    return mostExpensive;

}


getMostExpensiveProduct(products)



enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {
     if(day === Day.Saturday || day === Day.Sunday) {
       return('Weekend');
     }else{
        return ('Weekday');
     }
  }


 getDayType(Day.Monday) ;  
 getDayType(Day.Sunday) ; 
  

  async function squareAsync(n: number): Promise<number> {
    return await new  Promise((resolve, reject) =>{
         if(n < 0) {
            return reject("Negative number not allowed")
         }

         setTimeout(() =>{
            resolve(n*n);
         },1000)
    })
  }


squareAsync(4).then(console.log);     
squareAsync(-3).catch(console.error);