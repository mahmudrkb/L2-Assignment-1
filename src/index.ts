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
