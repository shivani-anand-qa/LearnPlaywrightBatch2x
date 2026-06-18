# LearnPlaywrightBatch2x

A structured learning repository covering JavaScript fundamentals, TypeScript, and Playwright test automation — built as part of The Testing Academy Batch 2x curriculum.

## Repository Structure

```
├── chapter_01_Basics/
│   ├── 01_Basics.js                    - Hello World and variables
│   ├── 02JS.js                         - JavaScript basics
│   └── 03_JS_Commands.js               - Node.js process commands (platform, arch, version)
│
├── chapter_02_Javascript_Concepts/
│   └── 05_JS_Basics.js                 - var/let/const and JavaScript reserved keywords
│
├── chapter_03_Indentifier_Literals/
│   ├── 06_Identifier_Rules.js          - Identifier rules and naming conventions
│   ├── 07_Identifier_Part2.js          - Identifiers continued
│   ├── 08_Comments.js                  - Single-line and multi-line comments
│   ├── VS_Code_keyboardshort_mac.md    - VS Code shortcuts for Mac
│   └── VS_Code_keyboardshort_win.md    - VS Code shortcuts for Windows
│
├── chapter_04_Javascript_Concepts/
│   ├── 09_var_let_const.js             - var, let, const comparison
│   ├── 10_functions.js                 - Function basics
│   ├── 11_var_explained.js             - var scope and quirks
│   ├── 12_let_people_love.js           - Why developers prefer let
│   ├── 13_const_explained.js           - const rules and usage
│   ├── 14_var_functionsscope.js        - var and function scope
│   ├── 15_let_functionscope.js         - let and block scope
│   ├── 16_Hoisting.js                  - Variable hoisting with var
│   ├── 17_hoisting_fn.js               - Function hoisting
│   ├── 18_let_hoisting.js              - let hoisting and TDZ
│   ├── 19_let_hoisting_block.js        - Block-level hoisting with let
│   ├── 20_let_const.js                 - let vs const differences
│   └── 21_Jr_QA.js                     - Junior QA interview questions
│
├── chapter_05_Literal/
│   ├── 22_Literal.js                   - Literal types in JS
│   ├── 23_NullVsUndefinedVsEmpty.js    - null vs undefined vs empty string
│   ├── 24_null.js                      - null in depth
│   ├── 25_Literal_All.js               - All literal types overview
│   ├── 26Literal_number_all.js         - Number literals (int, float, hex, binary, octal)
│   ├── 27_String.js                    - String literals
│   ├── 28_Template_Literal.js          - Template literals and expressions
│   └── 29_backtick_single_double.js    - Backtick vs single vs double quotes
│
├── chapter_06_Operators/
│   ├── 30_Operators.js                 - Operators overview
│   ├── 31_Arithmetic_Op.js             - Arithmetic operators (+, -, *, /)
│   ├── 32_Modulus.Op.js                - Modulus operator (%)
│   ├── 33_Exponential_Op.js            - Exponentiation operator (**)
│   ├── 34_IQ.js                        - Operator interview questions
│   ├── 35_Comparison_Op.js             - Comparison operators
│   ├── 35_Comparison_strict_loose.js   - Strict (===) vs loose (==) equality
│   ├── 37_IQ_loose_vs_strict.js        - IQ: loose vs strict comparison
│   ├── 38_Confusing_Comparison.js      - Confusing JS comparisons (null, NaN, etc.)
│   ├── 39_Logical_Op.js                - Logical operators (&&, ||, !)
│   ├── 40_String_Con_Op.js             - String concatenation operator
│   ├── 41_Ternary_Op.js                - Ternary operator (? :)
│   ├── 42_Type_Op.js                   - typeof and instanceof operators
│   ├── 43_Incre_Decre_Op.js            - Increment (++) and decrement (--) operators
│   ├── 44_Null_Op.js                   - Nullish coalescing (??) and null comparisons
│   ├── 45_Post_Increment.js            - Post-increment behaviour
│   ├── 46_IQ_Increment.js              - Increment IQ question
│   └── 47_Advance_IQ.js                - Advanced increment IQ (prefix vs postfix)
│
├── chapter_07_If_else/
│   ├── 48_IF_ELSE.js                   - Basic if/else syntax
│   ├── 49_if_elseif_else.js            - if / else if / else chains
│   ├── 50_Real_if_else.js              - Real-world if/else examples
│   ├── 51_API_if_else.js               - if/else in API response validation
│   ├── 52_IQ_if_else.js                - Truthy/falsy IQ questions
│   ├── 53_if_else_real.js              - Real-world scenario exercises
│   ├── 54_IQ.js                        - if/else interview questions
│   ├── 55_IE.js                        - if/else edge cases
│   ├── 56_IQ_even_Odd.js               - Even/odd check with if/else
│   ├── 57_Grade_Calc.js                - Grade calculator using if/else
│   └── 58_leap_year.js                 - Leap year checker
│
├── chapter_08_Switch_Statement/
│   ├── 59_switch.js                    - Basic switch statement
│   ├── 60_No_Break.js                  - Fall-through without break
│   ├── 61_Default.js                   - Default case in switch
│   ├── 62_REAL_TIME_EXAMPLE.js         - API response code handling with switch
│   ├── 63_Switch_Group.js              - Grouping cases in switch
│   ├── 64_IQ.js                        - Switch interview questions
│   ├── 65_IQ2.js                       - Switch IQ part 2
│   ├── 66_IQ3.js                       - Switch IQ part 3
│   └── 67_IQ4.js                       - Switch IQ part 4
│
├── chapter_09_Userinput/
│   ├── 68_User_input.js                - Basic user input with prompt
│   ├── 69_Node_readLine.js             - Node.js readline module
│   └── 70_prompt_sync.js               - prompt-sync package for synchronous input
│
├── chapter_10_Loops/
│   ├── 71_for_loop.js                  - Introduction to for loops
│   ├── 72_For_loop.js                  - for loop with counter
│   ├── 73_for_loop2.js                 - for loop variations
│   ├── 74_IQ.js                        - Loop interview questions
│   ├── 75_Advanced_for_Loop            - Advanced for loop patterns (arrays preview)
│   ├── 76_While.js                     - while loop
│   ├── 77_Do_While.js                  - do...while loop
│   ├── 78_Do_While.js                  - do...while continued
│   ├── 79_IQ.js                        - while loop IQ questions
│   ├── 80_IQ.js                        - Loop IQ part 2
│   ├── 81_IQ.js                        - Loop IQ part 3
│   └── 82_IQ.js                        - Loop IQ part 4
│
├── chapter_11_Arrays/
│   ├── 83_Arrays.js                    - Array introduction and empty arrays
│   ├── 84_Arrays.js                    - Creating arrays (array literal)
│   ├── 85_Access_Arrays.js             - Accessing and modifying array elements
│   ├── 86_Arrays_Adding_Removing.js    - push / pop / shift / unshift basics
│   ├── 87_Adding_Removing2.js          - Adding and removing elements continued
│   ├── 88_Real_Examples.js             - Real-world array examples (browser list)
│   ├── 89_Searching.js                 - indexOf, find, includes — searching arrays
│   ├── 90_Iterate.js                   - Iterating arrays with for loop and forEach
│   ├── 91_Transform.js                 - map, filter, reduce transforms
│   ├── 92_Arrays.js                    - Sorting arrays
│   ├── 93_Array_Slicing.js             - slice vs splice
│   ├── 94_Concat_Array.js              - Concatenating arrays
│   └── 95_Array_Checking.js            - Array.isArray, every, some
│
├── chapter_12_Functions/
│   ├── 96_Functions.js                 - Function basics: define and call
│   ├── 97_Type1_Basic_Fn.js            - Type 1: no parameter, no return
│   ├── 98_Type2_Fn_With_Param_No_Return.js  - Type 2: with parameter, no return
│   ├── 99_Type3_Fn_without_Param_Return_Type.js - Type 3: no parameter, with return
│   ├── 100_Type4_Fn_With_Param_With_Return.js   - Type 4: with parameter, with return
│   ├── 101_Template_literal.js         - Template literals inside functions
│   ├── 103_Arrow_Fn.js                 - Arrow functions (ES6): converting regular functions to arrow syntax
│   ├── 104_Arrow_Fn_REAL.js            - Real-world arrow function example: HTTP status code validator
│   ├── 105_IIFE.js                     - IIFE (Immediately Invoked Function Expressions)
│   ├── 106_Default_Param_Fn.js         - Default parameters in functions
│   ├── 107_IQ.js                       - IQ: return values, function expressions vs declarations
│   ├── 108_Rest_Param_Fn.js            - Rest parameters (...params)
│   ├── 109_IQ.js                       - IQ: spread vs rest, error checking with spread
│   ├── 110_Spread_IQ.js                - Spread operator IQ questions
│   ├── 111_Scope._Fn.js                - Scope in functions: global vs local scope
│   ├── 112_IQ.js                       - IQ: nested scope and block scope (ReferenceError demo)
│   ├── 113_Closure.js                  - Closures: makeCounter and basic closure pattern
│   ├── 114_Closure.js                  - Closures continued: counter object with increment/decrement/get
│   ├── 115_API_REAL_Closure.js         - Real-world closure: retry tracker for test automation
│   ├── 116_Higher_Order_Fn.js          - Higher-order functions (functions as arguments)
│   └── 117_Pure_Fn.js                  - Pure vs impure functions
│
└── chapter_13_Strings.js/
    ├── 118_Strings.js                  - String creation: single quotes, double quotes, backticks
    ├── 119_String_Properties.js        - String properties: length, typeof, character access
    ├── 120_Search_Check_Str.js         - Searching & checking: includes, startsWith, endsWith, indexOf
    ├── 121_Substring.js                - Extracting substrings: slice, substring
    ├── 122_Transform_Str.js            - Transforming strings: toUpperCase, toLowerCase, trim, replace
    ├── 123_SC.js                       - Type conversion: toString, Number, parseInt, parseFloat
    └── June 3 task.js                  - Practice tasks: palindrome checker and anagram detector
```

## Topics Covered

### Chapter 1 — Basics
- Running JavaScript with Node.js
- `console.log` output
- Variables with `let`
- Node.js `process` object: `platform`, `arch`, `version`

### Chapter 2 — JavaScript Concepts
- Variable declarations: `var`, `let`, `const`
- JavaScript reserved keywords (declaration, control flow, error handling, modules)

### Chapter 3 — Identifiers & Literals
- Identifier naming rules (valid/invalid examples)
- Naming conventions: camelCase, PascalCase, UPPER_CASE, `_underscore`
- Single-line (`//`) and multi-line (`/* */`) comments
- VS Code keyboard shortcuts for Mac and Windows

### Chapter 4 — Scope, Hoisting & Variables
- Detailed comparison of `var`, `let`, and `const`
- Function scope vs block scope
- Variable hoisting and the Temporal Dead Zone (TDZ)
- Function hoisting
- Junior QA interview prep questions

### Chapter 5 — Literals
- All JS literal types: string, number, boolean, null, undefined, object, array
- `null` vs `undefined` vs empty string
- Number literals: integers, floats, hex (`0x`), binary (`0b`), octal (`0o`)
- String literals: single quotes, double quotes, backticks
- Template literals and embedded expressions

### Chapter 6 — Operators
- Arithmetic: `+`, `-`, `*`, `/`, `%`, `**`
- Comparison: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- Loose vs strict equality pitfalls
- Logical operators: `&&`, `||`, `!`
- String concatenation with `+`
- Ternary operator `? :`
- Type operators: `typeof`, `instanceof`
- Increment (`++`) and decrement (`--`): prefix vs postfix
- Nullish coalescing (`??`) and null comparison quirks
- Confusing comparisons: `null`, `NaN`, `undefined`

### Chapter 7 — If / Else
- `if`, `else if`, `else` syntax and chaining
- Truthy and falsy values
- Real-world examples: login validation, API checks
- Practical exercises: even/odd checker, grade calculator, leap year checker

### Chapter 8 — Switch Statement
- Basic `switch` / `case` / `break` syntax
- Fall-through behaviour without `break`
- `default` case
- Grouping multiple cases
- Real-world example: HTTP response code handler
- Interview questions

### Chapter 9 — User Input
- `prompt()` for browser-based input
- Node.js `readline` module for terminal input
- `prompt-sync` package for synchronous terminal input

### Chapter 10 — Loops
- `for` loop: syntax, counter, variations
- `while` loop: init / condition / update pattern
- `do...while` loop: guarantees at least one execution
- Advanced for-loop patterns (arrays preview)
- Loop-based interview questions and exercises

### Chapter 11 — Arrays
- Array creation: literal syntax, empty arrays
- Accessing and modifying elements by index
- Adding/removing: `push`, `pop`, `shift`, `unshift`
- Searching: `indexOf`, `find`, `includes`
- Iterating: `for` loop, `forEach`
- Transforming: `map`, `filter`, `reduce`
- Sorting arrays
- `slice` vs `splice`
- Concatenating arrays with `concat` and spread
- Checking: `Array.isArray`, `every`, `some`

### Chapter 12 — Functions
- Function structure: define (declare) vs call (invoke)
- Type 1: no parameter, no return value
- Type 2: with parameter, no return value
- Type 3: no parameter, with return value
- Type 4: with parameter, with return value
- Parameters vs arguments distinction
- Template literals inside functions
- Arrow functions (ES6): concise syntax, implicit return, single-param shorthand
- Real-world arrow function: HTTP status code validator (normal → expression → arrow)
- IIFE (Immediately Invoked Function Expressions): self-executing functions
- Default parameters: fallback values when arguments are omitted
- Rest parameters (`...params`): collect variable arguments into an array
- Spread operator (`...`): spread array elements as individual arguments
- Scope in functions: global scope vs local (function) scope
- Nested scope and block scope: inner functions can't be accessed from outer scope
- Closures: inner function retaining access to outer function's variables ("backpack")
- Closures in practice: counter with `increment`, `decrement`, `get`
- Real-world closure: retry tracker for test automation
- Higher-order functions: passing functions as arguments
- Pure functions vs impure functions: predictability and side effects

### Chapter 13 — Strings
- String creation: single quotes, double quotes, backticks
- String properties: `length`, `typeof`, accessing characters by index
- Searching & checking: `includes`, `startsWith`, `endsWith`, `indexOf`, `lastIndexOf`
- Extracting substrings: `slice(start, end)`, `substring(start, end)`
- Transforming strings: `toUpperCase`, `toLowerCase`, `trim`, `trimStart`, `trimEnd`, `replace`, `replaceAll`
- Type conversion: `toString`, `Number()`, `parseInt`, `parseFloat`, `String()`
- Practice tasks: palindrome checker (loop & built-in approaches), anagram detector (sort & compare)

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or above recommended)
- [VS Code](https://code.visualstudio.com/)

## Running the Examples

```bash
# Chapter 1
node chapter_01_Basics/01_Basics.js
node chapter_01_Basics/03_JS_Commands.js

# Chapter 4
node chapter_04_Javascript_Concepts/09_var_let_const.js

# Chapter 6
node chapter_06_Operators/41_Ternary_Op.js
node chapter_06_Operators/43_Incre_Decre_Op.js

# Chapter 7
node chapter_07_If_else/57_Grade_Calc.js
node chapter_07_If_else/58_leap_year.js

# Chapter 8
node chapter_08_Switch_Statement/62_REAL_TIME_EXAMPLE.js

# Chapter 10
node chapter_10_Loops/76_While.js
node chapter_10_Loops/77_Do_While.js

# Chapter 11
node chapter_11_Arrays/88_Real_Examples.js
node chapter_11_Arrays/91_Transform.js
node chapter_11_Arrays/95_Array_Checking.js

# Chapter 12
node chapter_12_Functions/96_Functions.js
node chapter_12_Functions/97_Type1_Basic_Fn.js
node chapter_12_Functions/98_Type2_Fn_With_Param_No_Return.js
node chapter_12_Functions/99_Type3_Fn_without_Param_Return_Type.js
node chapter_12_Functions/100_Type4_Fn_With_Param_With_Return.js
node chapter_12_Functions/103_Arrow_Fn.js
node chapter_12_Functions/104_Arrow_Fn_REAL.js
node chapter_12_Functions/105_IIFE.js
node chapter_12_Functions/106_Default_Param_Fn.js
node chapter_12_Functions/108_Rest_Param_Fn.js
node chapter_12_Functions/111_Scope._Fn.js
node chapter_12_Functions/113_Closure.js
node chapter_12_Functions/114_Closure.js
node chapter_12_Functions/115_API_REAL_Closure.js
node chapter_12_Functions/116_Higher_Order_Fn.js
node chapter_12_Functions/117_Pure_Fn.js

# Chapter 13
node "chapter_13_Strings.js/118_Strings.js"
node "chapter_13_Strings.js/119_String_Properties.js"
node "chapter_13_Strings.js/120_Search_Check_Str.js"
node "chapter_13_Strings.js/121_Substring.js"
node "chapter_13_Strings.js/122_Transform_Str.js"
node "chapter_13_Strings.js/123_SC.js"
node "chapter_13_Strings.js/June 3 task.js"
```

## Author

**Shivani Anand** — QA Engineer learning Playwright automation
