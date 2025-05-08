function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLocaleLowerCase();
  }
  else {
    return input.toLocaleUpperCase()
  }
 
}
// console.log(formatString("ami", true));
console.log(formatString("Hello", ));
console.log(formatString("Hello", true));
console.log(formatString("Hello", false));


// Output: "HELLO"
// Output: "HELLO"
// Output: "hello"
