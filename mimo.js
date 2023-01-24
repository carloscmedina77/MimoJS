// const piNumber = 3.1416;
// piNumber = 90;
// console.log(piNumber);

// //pi is like const for numbers

// const newPresent = "Trousers";
// const wardrobe = ["Shirt"];
// wardrobe
//     .
//     push
//     (newPresent);
// console.log(wardrobe);

//cannot We can't change a whole array stored in a const variable. However, we can use array methods to update its contents.

// const fullName = "Helen McGuire";
// console.log("Hello " + fullName + "!");
// console.log(`Hello ${fullName}!`);

const testScores = [72, 95, 90, 71, 75, 79];
const A = [];
for (const element of testScores) {
    if (element >= 90) {
        A.push(element);
    }
};

console.log(A);
const testScore = [72, 95, 90, 71, 75, 79];
const B = testScore.filter();


