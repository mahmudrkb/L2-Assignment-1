##  What is Type Inference in TypeScript?

Type inference is a feature in TypeScript where the compiler automatically detects and assigns types to variables, function return values, or parameters without explicitly stating them.

---

###  Example:

```ts
let message = "Hello, TypeScript!";
```

TypeScript infers the type of `message` as `string`, so:

```ts
message = 42; //  Error: Type 'number' is not assignable to type 'string'.
```

---

##  Why is Type Inference Helpful?

* **Less boilerplate**: You don’t always have to manually annotate types.

  ```ts
  let count = 5; // inferred as number, no need to write: let count: number = 5;
  ```

* **Faster development**: You can code quickly without writing types everywhere.

* **Type safety**: Even without explicit types, you still get autocompletion and error checking.

* **Readability**: Cleaner and easier-to-read code without redundant type annotations.

---

## 🔍 Where Type Inference Works:

* Variable declarations
* Function return types
* Parameter defaults
* Destructuring assignments
