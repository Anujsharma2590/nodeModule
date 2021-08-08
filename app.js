//redline---------------------------

//  const readline = require("readline");
// console.log(readline);

// const readline1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })
// readline1.on("close", () => {
//     console.log("bye bye");
// });

// readline1.question("name : " , (name) => {
//     readline1.question("country : ", (country) => {
//         console.log(`${name} is from ${country}`);
//         readline1.close();
//     })
// })





const readline = require('readline');

const readline1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline1.on("close", () => {
  console.log("bye bye");
});
let books = ["database", "operating system", "networking"];

menu();

function menu() {

  readline1.question(
      `
      1 - Show all books
      2 - Add a new books 
      3 - Quit
      ` ,(i) => {
      if (i == 1) {
        for (var j = 0; j < books.length; j++) {
          console.log(books[j]);
        }
        menu();
      } else if (i == 2) {
        readline1.question("add the name of the book : ", (book) => {
          books.push(book);
          console.log('Book added Successfully');
          menu();
        });
      } else if (i == 3) {
        readline1.question("Are you sure you want to quit - press Y to quit : ", (key) => {
            if (key == 'Y') {
              readline1.close();
            }   
          });
      } else {
        console.log('You have selected an invalid entry so please press 1, 2 or 3');
        menu();
      }
    });
}

