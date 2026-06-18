const user = {
    name: "Pramod",
    age: 43
}




//We can have a function inside object as well


const calculator = {
    value: 0,
    add(a, b) {
        c = a + b;
        return c;
    },
    subtract(a, b) {
        d = a - b;
        return d;
    }
}
console.log(calculator.add(10, 5)); //15
console.log(calculator.subtract(15, 5)); //10
