# TypeScript ForEach and Nullable Strings

This repo demonstrates a common TypeScript error related to using `forEach` with arrays containing nullable strings and a function that expects a non-nullable string.

The `bug.ts` file shows the problem: the `printName` function works correctly when called individually with null or a string, but fails when used with `forEach` on an array containing nullable strings.  TypeScript correctly points out the type mismatch.

The `bugSolution.ts` file provides a solution illustrating how to handle the null values using optional chaining or type guards.