# 📦 Destructuring — Reaching Into Objects and Arrays

A focused React + TypeScript practice project that isolates JavaScript destructuring, rest/spread, and optional chaining.

> **Status:** 🛠️ In-Progress  
> **Concept:** Frontend (React / TypeScript)

## 🎯 What This Project Practices

This project exercises closely related JavaScript operations in one cohesive flow:

| Concept                              | What You'll Observe                                                            |
| :----------------------------------- | :----------------------------------------------------------------------------- |
| **Object destructuring**             | Pulling `name`, `price`, and `category` from a product object                  |
| **The silent `undefined` bug**       | Misspelling a key (`catagory`) and watching it render blank                    |
| **Renaming at the destructure site** | `price: displayPrice` — keeping the object key but changing the local variable |
| **Array destructuring**              | Extracting the top two ratings from a `ratings` array                          |
| **Rest/spread (`...rest`)**          | Building an `ActionButton` wrapper that forwards all native button props       |
| **The missing-prop bug**             | Pulling `onClick` out of `rest` but forgetting to pass it to the button        |
| **Optional chaining (`?.`)**         | Safely accessing `product.details?.tagline` without crashing on `null`         |
| **Nullish coalescing (`??`)**        | Providing fallback text when a value is `null` or `undefined`                  |

## 🧠 Why These Concepts Are Combined

These entries all describe the same root operation — reaching into a JavaScript container and extracting a value. Exercising them together makes it clear they are **one operation with different safety rules applied**, not four separate syntax features.

---

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

## 🚀 Quick Start

```bash
# Navigate to the project
cd destructuring-project

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open `http://localhost:5173` in your browser. The app renders a product card that demonstrates each destructuring form in sequence.

---

## 🔍 Key Observations Made During This Project

### Object Destructuring

Object destructuring is a one-line syntax for pulling values out of an object and into a local named variables.
_Note that when you destructure an object, the variable names put inside the `{}` brackets must match the object's keys
**exactly**_ or else you'd get a `TS2339` error (property `'x'` does not exist on type `'y'`) in Typescript.

> [!IMPORTANT]
> _In a Javascript object, a key is the label on the left-side of each {`key`:`value`} pair_

example:

```tsx
function App() {
  const product = { name: 'Ergonomic Chair', price: 349, category: 'Furniture' }

  const { name, price, category } = product // Object destructuring - keys are `name`, `price`, and `category`
```

> [!NOTE]
> this is also functionally the same as the following;

```tsx
const name = product.name
const price = product.price
const category = product.category
```

#### Destructuring Renaming

The syntax for assigning a key's value to a differently named local variable

```tsx
const { name, price: displayPrice, category } = product
//           ^^^^^^^^^^^^^^^^^^^^ - read the `price` key and store it's value in a variable named displayPrice
```

### Array Destructuring

Array destructuring takes values from an array and assigns them to variables based on their _position_ (index)

```tsx
function App() {
  const product = {
    // other properties....
    ratings: [4.8, 4.6, 4.1],
    // index:  0    1    2
  }
  const { ratings } = product // step 1 — destructure ratings out of the object
  const [firstRating, secondRating] = ratings // step 2 — destructure by position
}
```

> [!NOTE]
> this is also functionally the same as the following;

```tsx
const ratings = product.ratings
const firstRating = ratings[0] // 4.8
const secondRating = ratings[1] // 4.6
```

| Position | Value | Assigned To  |
| -------- | ----- | ------------ |
| Index 0  | 4.8   | firstRating  |
| Index 1  | 4.6   | secondRating |
| Index 2  | 4.1   | Not Assigned |

> [!IMPORTANT]
> **Key Insight**: _Position_ matters, variable names don't! Unlike object destructuring (where variable names must match the key, _array destructuring ignores
> variable names entirely_)

example:

```tsx

//Object Destructuring
const { category } = product ✅ // works fine - key is "category"

const { catagory } = product ❌ // `TS2339 error` - key doesnt exist

//Array Destructuring

const [topRating, secondRating] = ratings ✅ // works- topRating = 4.8, secondRating = 4.6

const [x, y] = ratings ✅ // works- x = 4.8, y = 4.6

const [anything, whatever] = ratings ✅ // works- anything = 4.8, whatever = 4.6
```

#### Skipping Values in Array Destructuring

To skip a position entirely - simply leave it empty with a comma !

example;

```tsx
const [topRating, , thirdRating] = ratings // topRating = 4.8, thirdRating = 4.1
//              ^ - skips index 1
```

### Rest Syntax and Spread Syntax

Rest and spread are two sides of the same coin. Rest syntax `(...rest)` collects all props not explicitly named into a single variable at the destructuring site; spread syntax `({...rest})` expands that variable back out into a receiving element. Together, they let a component pass through to the underlying element without having to explicitly name each one.

| Syntax   | What It Does                                                                 | Where it appears                                                                                    |
| -------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| _REST_   | Packs remaining values into a **_new container_** (object or array)          | ALWAYS on the left side of = (or in function parameters) → the "**packing/receiving** site"         |
| _SPREAD_ | Unpacks an **_existing container_** (object or array) into individual pieces | ALWAYS on the right side of = (or inside JSX / function calls) → the "**unpacking/providing** site" |

#### REST Syntax

```tsx
export function ActionButton({ label, ...rest }: Props) {} // REST Syntax at the function parameter site
```

> [!IMPORTANT]
> This is parameter destructuring syntax! It's just shorthand for the following:

```tsx
export function ActionButton(props) {
  const { label, ...rest } = props
  /*
   * Destructure the incoming props object.
   * - `label`   → pulled out into its own variable.
   * - `...rest` → collects ALL other props (onClick, className, disabled, etc.)
   *                into a new object named `rest`.
   */
}
```

Therefore, the following two are functionally the same!

```tsx
const { label, ...rest } = props // explicit destructure assignment
function ActionButton({ label, ...rest }) // destructure in parameter list
```

#### SPREAD Syntax

```tsx
// SPREAD Syntax at the JSX prop list
// example: let's say rest = { onClick: fn, className: 'btn', type: 'submit' }
<button {...rest}> {label} </button>
// {...rest} is the ENTIRE JSX prop list!
```

> [!NOTE]
> React transforms this into `React.createElement('button', rest, label)`
> React.createElement() takes three arguments:

```txt
 type: HTML tag name or a React component
 props: an object (or null)
 children: zero or more child nodes
```

So, with `<button {...rest}> {label} </button>` - We created the rest object during destructuring in the function parameters, we're taking that existing object (rest) and unpacking all of its properties (such as onClick,className,etc) onto the `<button>` element as individual props.

```tsx
const fruits = ['apple', 'banana', 'orange']

// without SPREAD

console.log(fruits) // logs: ['apple', 'banana', 'orange'] - (the array itself)

//with SPREAD

console.log(...fruits) // logs: apple banana orange - unpacked the array into seperate log elements
```

### Optional Chaining

In React and Javascript, optional chaining, (`?.`) is a safe way to **access deeply nested object properties, arrays, or functions without casuing a runtime crash** if an intermediate value is `null` or `undefined`. → Instead of throwing a "_cannot read properties of null error_", the expression short-ciruits & immediately returns `undefined`"

```tsx
const product = {
 // other properties....
  details: null as ProductDetails | null,
}
//...

<p> {product.details.tagline} </p> ❌
// `TS2531 error` - 'product.details' is possibly null. In plain Javascript this crashes at runtime with TypeError: cannot read properties of null
```

optional chaining is a safety gate. It looks like this : `?.` so you'd write something like:
`<p>{product.details?.tagline}</p>`

### Nullish Coalescing

Nullish Coalescing `(??)` is a logical operator that returns its right-hand operand when its left-hand operand is `null` or `undefined`. Otherwise, it returns the left-hand operand.

example:

```tsx
value ?? fallback
// If value is null or undefined → use fallback
// If value is anything else (even "" or 0) → use value
```

> [!NOTE]
> You can combine optional chaining `(?.)` and nullish coalescing `(??)` into a single expression

```tsx
<p>{product.details?.tagline ?? 'No tagline available'}</p>
/* javascript checks product.details, sees details is null
   optional cahining (?.) kciks in: "I can't go further - return undefined"
   the ?? operator recieves undefined and says "That's a nulish value. Give me the fallback
   the UI renders: "No tagline availalbe"*/
```

## 🧩 SOLID Principle Applied

**ISP (Interface Segregation Principle)** — each destructure site takes only what it needs from the data structure. This project observes all three ways that principle can fail:

- Taking a key that doesn't exist (silent `undefined`)
- Failing to re-pass a key that was taken (missing prop bug)
- Taking from a container that might not exist (`TypeError` / runtime crash)

---

. ݁₊ ⊹ . ݁ ⟡ ݁ . ⊹ ₊ ݁.

_"The expert in anything was once a beginner."_ 🌠
