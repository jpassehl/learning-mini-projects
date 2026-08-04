# 📦 Destructuring — Reaching Into Objects and Arrays

A focused React + TypeScript practice project that isolates JavaScript destructuring, rest/spread, and optional chaining.

> **Status:** 🛠️ In-Progress  
> **Concept:** Frontend (React / TypeScript)  

## 🎯 What This Project Practices

This project exercises four closely related JavaScript operations in one cohesive flow:

| Concept | What You'll Observe |
| :--- | :--- |
| **Object destructuring** | Pulling `name`, `price`, and `category` from a product object |
| **The silent `undefined` bug** | Misspelling a key (`catagory`) and watching it render blank |
| **Renaming at the destructure site** | `price: displayPrice` — keeping the object key but changing the local variable |
| **Array destructuring** | Extracting the top two ratings from a `ratings` array |
| **Rest/spread (`...rest`)** | Building an `ActionButton` wrapper that forwards all native button props |
| **The missing-prop bug** | Pulling `onClick` out of `rest` but forgetting to pass it to the button |
| **Optional chaining (`?.`)** | Safely accessing `product.details?.tagline` without crashing on `null` |
| **Nullish coalescing (`??`)** | Providing fallback text when a value is `null` or `undefined` |

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

Open `http://localhost:5173` in your browser. The app renders a product card that demonstrates all four destructuring forms in sequence.

---

## 🔍 Key Observations Made During This Project

// TODO

## 🧩 SOLID Principle Applied

**ISP (Interface Segregation Principle)** — each destructure site takes only what it needs from the data structure. This project observes all three ways that principle can fail:

- Taking a key that doesn't exist (silent `undefined`)
- Failing to re-pass a key that was taken (missing prop bug)
- Taking from a container that might not exist (`TypeError` / runtime crash)

---

. ݁₊ ⊹ . ݁ ⟡ ݁ . ⊹ ₊ ݁.

*"The expert in anything was once a beginner."* 🌠
