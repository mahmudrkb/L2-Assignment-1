function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLocaleLowerCase();
  } else {
    return input.toLocaleUpperCase();
  }
}




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



function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result = arrays.reduce((pre, curr) => [...pre, ...curr], []);
  return result;
}


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


function processValue(value: string | number): number {
  if (typeof value === "number") {
    return value * 2;
  } else {
    return value.length;
  }
}



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



enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Sunday || day === Day.Saturday) {
    return "Weekend";
  } else {
    return "weekday";
  }
}



async function squareAsync(n: number): Promise<number> {
  if (n < 0) {
    const output = Promise.reject("Negative number not allowed");
    return output;
  } else {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return n * n;
  }
}


