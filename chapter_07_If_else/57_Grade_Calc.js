
let marks = 85;
if (marks < 0 || marks > 100) {
    console.log("Marks is invalid");  // ✅ catches -10, -999, 101, etc.
}
else if (marks >= 90) {
    console.log("Grade is A");
}
else if (marks >= 80) {
    console.log("Grade is B");
}
else if (marks >= 70) {
    console.log("Grade is C");
}
else if (marks >= 60) {
    console.log("Grade is D");
}
else {
    console.log("Fail");
}
