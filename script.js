// Question 1

const score = 85;
let grade = "";

switch (true) {
case score >= 90 && score <= 100:
    grade = "A";
    break;
case score >= 80 && score < 90:
    grade = "B";
    break;
case score >= 70 && score < 80:
    grade = "C";
    break;
case score >= 60 && score < 70:
    grade = "D";
    break;
case score >= 0 && score < 60:
    grade = "F";
    break;
default:
    grade = "Invalid Score";
}

console.log(`Grade: ${grade}`);

const result = score >= 60 ? "Passed" : "Failed";
console.log(`Status: ${result}`);

// Question 2

const strInput = "25";
const numInput = Number(strInput);
console.log(`Converted "${strInput}" (${typeof strInput}) to ${numInput} (${typeof numInput})`);

const testValues = [0, "", "hello", null, undefined, NaN];

testValues.forEach((val) => {
if (val) {
    console.log(`Value [${String(val)}] is truthy`);
} else {
    console.log(`Value [${String(val)}] is falsy`);
}
});

// Question 3

function greetingBot(name, isMorning) {

    const greeting = (isMorning && "Good morning") || "Hello";
    return `${greeting}, ${name}!`;

    console.log(greetingBot("Zama", true));
    console.log(greetingBot("Evie", false));
}

// Question 4

const post = {
username: "her-tech-horizon",
caption: "Day 1 of mastering JavaScript!",
likes: 500000,
comments: ["Great progress!", "Keep it up!", "🔥"],


addLike() {
    this.likes += 1;
    console.log(`Post liked! Total likes: ${this.likes}`);
}
};

const { username, caption } = post;
console.log("Username:", username);
console.log("Caption:", caption);

// Question 5

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Combined Array:", combined);

const totalRows = 5;

for (let i = 1; i <= totalRows; i++) {

const spaces = "   ".repeat(totalRows - i);
const stars = "*  ".repeat(i).trimEnd();
console.log(spaces + stars);
}

console.log("Counting down from 10 to 1:");
let count = 10;
while (count >= 1) {
console.log(count);
count--;
}