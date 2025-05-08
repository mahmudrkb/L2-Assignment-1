function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLocaleLowerCase();
  } else {
    return input.toLocaleUpperCase();
  }
}
// console.log(formatString("ami", true));
console.log(formatString("Hello"));
console.log(formatString("Hello", true));
console.log(formatString("Hello", false));

// Output: "HELLO"
// Output: "HELLO"
// Output: "hello"

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  let output = items.filter((item) => item.rating >= 4);
  return output;
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
  //   { title: "Book s", rating: 6 },
];

console.log(filterByRating(books));
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result = arrays.reduce((pre, curr) => [...pre, ...curr], []);
  return result;
}

console.log(concatenateArrays(["a", "b"], ["c"]));
// Output: ["a", "b", "c"]
console.log(concatenateArrays([1, 2], [3, 4], [5]));
// Output: [1, 2, 3, 4, 5]

class Vehicle {
  private Make: string;
  private Year: number;

  constructor(Make: string, Year: number) {
    this.Make = Make;
    this.Year = Year;
  }
  getInfo(): string {
    return `Make: ${this.Make}, Year: ${this.Year}`;
  }
}

class Car extends Vehicle {
  private Model: string;
  constructor(Make: string, Year: number, Model: string) {
    super(Make, Year);
    this.Model = Model;
  }
  getModel(): string {
    return `Model: ${this.Model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
//   const myCar = new Car("Bugatti", 2024, "Chiron");
console.log(myCar.getInfo()); // Output: "Make: Toyota, Year: 2020"
console.log(myCar.getModel()); // Output: "Model: Corolla"

function processValue(value: string | number): number {
  if (typeof value === "number") {
    return value * 2;
  } else {
    return value.length;
  }
}

console.log(processValue("hello")); // Output: 5
// console.log(processValue("hello world"));
console.log(processValue(10)); // Output: 20
// Output: 20

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  } else {
    const maxPrice = products.reduce((max, min) =>
      min.price > max.price ? min : max
    );
    return maxPrice;
  }
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
//   { name: "ph", price: 540 },
];

console.log(getMostExpensiveProduct(products));
// Output: { name: "Bag", price: 50 }











enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string  {
    if(day===Day.Sunday ){
        return "Weekend"

    }else{
        return "weekday"
    }
  }


console.log(getDayType(Day.Monday));   // Output: "Weekday"
// console.log(getDayType(Day.Friday));   // Output: "Weekday"
console.log(getDayType(Day.Sunday));  // Output: "Weekday"
;   // Output: "Weekend"