console.log("i'm ready!");

// Iteration 1: Names and Input

let hacker1 = "Yebrai";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Ironhack";

console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `t seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
let nameUpper = "";
for (let i = 0; i < hacker1.length; i++) {
  nameUpper += hacker1[i].toUpperCase();
  if ((nameUpper[i] = String)) {
    nameUpper += " ";
  }
}
nameUpper = nameUpper.slice(0, -1);

console.log(nameUpper);

//3.2
let nameReverse = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  nameReverse += hacker1[i];
}
console.log(nameReverse);

// //3.3
let naviLexi = "";

for (let i = 0; i < hacker2.length; i++) {
  let count1 = hacker1[i];
  // console.log(hacker1[i])
  let count2 = hacker2[i];
  // console.log(hacker2[i])
  if (count1 > count2) {
    naviLexi = "The driver's name goes first.";
  } else if (count1 < count2) {
    naviLexi = "Yo, the navigator goes first definitely.";
  } else if (count1 === count2) {
    naviLexi = "What?! You both have the same name?";
  }
}
console.log(naviLexi);

//Bonus 1

let loremMult =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

//bonus 1.2
// Aprecio patron. Las palabras son las mismas que los espacios, sin contar la primera palabra del texto, por ello declaro la variable count con "1"
let count = 1;
for (let i = 0; i < loremMult.length; i++) {
  let char1 = loremMult[i];
  if (char1 === " ") {
    count++;
  }
}
console.log(count);

//bonus 1.3

let countEt = 0;
for (let i = 0; i < loremMult.length; i++) {
  let char1 = loremMult[i];
  let char2 = loremMult[i + 1];
  if (char1 === "e" && char2 === "t") {
    countEt++;
  }
}
console.log(countEt);

//Bonus 2

let phraseToCheck = "step on no pets";
let palindrome = "";
let result = "";
for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  palindrome += phraseToCheck[i];
}
for (let i = 0; i < palindrome.length; i++) {
  result += palindrome[i];
}
console.log(phraseToCheck);
console.log(palindrome);
if (phraseToCheck === result) {
  console.log("Its a Palindrome!!! :)");
} else {
  console.log("Isnt a Palindrome!!! :(");
}
