# 🃏 Truthy, Falsy, and Array Iteration — D&D Party Roster Panel

A focused React + TypeScript practice project that isolates JavaScript truthy/falsy coercion and the four core array iteration methods.

> **Status:** 🚧 Planned
> **Concept:** Frontend (React / TypeScript)

## 🎯 What This Project Practices

This project exercises closely related JavaScript operations in one cohesive flow:

| Concept                        | What You'll Observe                                                                        |
| :----------------------------- | :----------------------------------------------------------------------------------------- |
| **Truthy and falsy values**    | The six falsy values in JavaScript — and why `null` is falsy while `[]` is truthy          |
| **`.filter(Boolean)`**         | Stripping `null` placeholder spell slots from a typed array in one step                    |
| **The silent `0` bug**         | `.filter(Boolean)` drops a valid cantrip with `level: 0` — and why                         |
| **`.some()`**                  | Replacing a `for` loop that checks whether the party has a healer                          |
| **`.filter()`**                | Replacing a `for` loop that collects injured characters below full HP                      |
| **`.find()`**                  | Locating the party tank by role — with `?.` to guard an undefined result                   |
| **`.every()`**                 | Checking whether all party members are at full health, including the empty-array edge case |
| **`.map()` and transform**     | Building party summary strings without a manual push loop                                  |
| **Chaining `.filter().map()`** | Producing a veterans-only summary — keeping only characters above level 5                  |

## 🧠 Why These Concepts Are Combined

These entries all describe the same fundamental activity — walking every item in an array and deciding what to do with it. Exercising them together makes it clear that choosing the right method is **choosing how to express intent**, not just how to write code. A `for` loop can do all of these at once — which is exactly the problem: one loop silently carries multiple responsibilities, and the intent stays hidden until the body is fully read.

---

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

## 🚀 Quick Start

```bash
# Navigate to the project
cd truthy-falsy-array-iteration-project

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open `http://localhost:5173` in your browser. The app renders a D&D party roster panel that demonstrates each array method in sequence.

---

## 🔍 Key Observations Made During This Project

<!-- TODO -->

## 🧩 SOLID Principle Applied

**SRP (Single Responsibility Principle)** — each array method has exactly one responsibility. `some` asks a question. `filter` keeps items. `find` retrieves one item. `every` validates all items. `map` transforms items. A `for` loop can do all of these at once — which is exactly the problem: one loop silently carries multiple responsibilities, and the intent stays hidden until the body is fully read.

---

. ݁₊ ⊹ . ݁ ⟡ ݁ . ⊹ ₊ ݁.

_"The expert in anything was once a beginner."_ 🌠
