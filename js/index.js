console.log("I'm ready!");

// Iteration 1: Names and Input 

const hacker1 = 'Gian Carlo Sosa'
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Michael Jordan';
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

// let longestName = ""
if(hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)}
else { // (hacker1.length === hacker2.length)
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// let uppercased = hacker1.toUpperCase();
//console.log(uppercased);

// Iteration 3: Loops

let newHacker1 = ''

for(i = 0; i < hacker1.length; i++){
  newHacker1 += hacker1[i] + " ";
}
 console.log(newHacker1.toUpperCase().trim());

let newHacker2 = ''

for(i= hacker2.length - 1; i>= 0; i--){
    if(i === 0){
        hacker2 += hacker[i].toUpperCase()
    }
  newHacker2 += hacker2[i];
}
 console.log(newHacker2)


 if (hacker1 > hacker2) {
    console.log(`The driver's name goes first.`)
  }
  else if (hacker1 < hacker2) {
    console.log(`Yo, the navigator goes first definitely.`)
  } else {
    console.log(`What?! You both have the same name?`)
  }


// bonus 1

const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit ante, consequat sit amet venenatis vitae, ultricies nec nisi. Integer vehicula erat metus, porta venenatis justo hendrerit at. Pellentesque eget sapien eu velit suscipit porttitor. Cras consectetur, lorem eget consectetur ullamcorper, ex lectus tincidunt est, quis tristique nulla nisl sit amet leo. Sed facilisis nibh eget lorem fermentum vestibulum. Aliquam feugiat cursus eros, vitae fermentum lectus. Aliquam ornare mattis eros, rutrum vulputate lectus posuere eget. Nullam convallis, neque ac elementum porta, quam lorem semper dui, in pellentesque augue metus ut massa.

Curabitur porta congue ornare. Nullam vitae ipsum id turpis malesuada vulputate quis ac diam. Maecenas commodo mattis justo, vel luctus ligula ornare nec. Nullam suscipit massa eu eros tincidunt tempus. Duis sodales leo iaculis lectus varius, ornare sodales elit mollis. Phasellus blandit imperdiet venenatis. Cras ultrices leo eu justo convallis mollis.

Mauris aliquam nulla ante, sed tristique tellus volutpat vulputate. Aenean maximus lacinia ante, a vehicula metus. Cras leo orci, accumsan eu nunc id, ultricies rutrum risus. Sed sodales posuere massa id cursus. Sed nisl urna, varius vitae nisl sed, scelerisque tincidunt orci. Duis dolor nunc, pellentesque finibus dolor non, tristique efficitur ligula. Nullam sit amet arcu sit amet odio lobortis tincidunt. Curabitur rhoncus metus et ipsum venenatis luctus. Donec tempor diam in erat consequat mollis`

let wordCount = 0

let etCount = 0


// i know this is the answer but i dont know how to do it fully



let splittedParagraph = paragraph.split(' ');

for (let i=0; i < splittedParagraph.length; i++) {
  if(splittedParagraph[i].includes('\n')) {
    wordCount++
  } else if(splittedParagraph[i] === "et" || splittedParagraph[i] === "et.") {
    etCount++;
  }
  wordCount++;
 }

console.log('words count is', wordCount);
console.log('et count  is', etCount);



 
let phraseToCheck = "A man, a plan, a canal, Panama!";
phraseToCheck = phraseToCheck.replace(/[ ,!.]/g, "").toLowerCase();

let reversedPhrase = phraseToCheck.split('').reverse().join('');

if (phraseToCheck === reversedPhrase) {
  console.log('Phrase is a palindrome');
}
else {
  console.log('Not a palindrome');
}


