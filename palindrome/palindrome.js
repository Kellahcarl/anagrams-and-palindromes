// palindrome is a word, phrase, number or any other sequence 
// of units which has the property of reading the same forwards
//  as it does backwards, character for character, sometimes
//   disregarding punctuation, capitalization and diacritics.


// 1. reverse the String
// 2. check with original if they are same

const Palindrome  = (str) => {
    const isPalindrome = str.split('').reverse().join('')

    //CHANGE STRING INTO AN ARRAY { SPLIT METHOD}
    // REVERSE SO THAT THE FIRST CHARACTER BECOMES LAST & VICE VERSA
    // JOIN CHANGES THE ARRAY INTO A STRING 

    return (str==isPalindrome);
}
// Palindrome("abba");

//outputs true or false 
const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/palindrome", (req, res) => {
    try {
      const { string } = req.body;
      if (!string || typeof string !== "string")
        return res.status(400).send("You need to provide a string");
      if (Palindrome(string)) {
        return res.status(200).send(true);
      }
      return res.status(200).send(false);
    } catch {
      res.sendStatus(500);
    }
  });

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })