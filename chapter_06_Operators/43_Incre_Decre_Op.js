// Increment (++) and Decrement (--) Operators
// ++ adds 1 to a variable
// -- subtracts 1 from a variable
// Two forms: prefix (++x) and postfix (x++)

let a = 5;

// --- Postfix Increment: returns value FIRST, then increments ---
console.log(a++); // 5  (returns original value)
console.log(a);   // 6  (now incremented)

// --- Prefix Increment: increments FIRST, then returns value ---
let b = 5;
console.log(++b); // 6  (incremented before returning)
console.log(b);   // 6

// --- Postfix Decrement: returns value FIRST, then decrements ---
let c = 10;
console.log(c--); // 10 (returns original value)
console.log(c);   // 9  (now decremented)

// --- Prefix Decrement: decrements FIRST, then returns value ---
let d = 10;
console.log(--d); // 9  (decremented before returning)
console.log(d);   // 9

// --- Practical Example: Loop counter ---
let count = 0;
while (count < 3) {
    console.log("Count:", count);
    count++;
}
// Count: 0
// Count: 1
// Count: 2

// --- Practical Example: Countdown ---
let timer = 3;
while (timer > 0) {
    console.log("Timer:", timer);
    timer--;
}
// Timer: 3
// Timer: 2
// Timer: 1

// --- Common mistake: prefix vs postfix in assignment ---
let x = 5;
let y = x++;   // y gets 5, then x becomes 6
console.log("x:", x, "y:", y); // x: 6  y: 5

let p = 5;
let q = ++p;   // p becomes 6 first, then q gets 6
console.log("p:", p, "q:", q); // p: 6  q: 6

// --- Pre Decrement with assignment: decrements FIRST, then assigns ---
let m = 10;
let n = --m;   // m becomes 9 first, then n gets 9
console.log("m:", m, "n:", n); // m: 9  n: 9

// --- Post Decrement with assignment: assigns FIRST, then decrements ---
let s = 10;
let t = s--;   // t gets 10 (original), then s becomes 9
console.log("s:", s, "t:", t); // s: 9  t: 10
