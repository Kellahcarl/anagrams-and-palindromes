// anagram is (of words) a word or phrase that is created 
// by rearranging the letters of another word 

const isAnagram = (str1,str2) => {
    let sorted1 =str1.split('').sort().join('').toLowerCase();
    let sorted2 =str2.split('').sort().join('').toLowerCase();

    return (sorted1 == sorted2)
}

// console.log(isAnagram('hello','loelh'))

const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/anagram', (req, res) => {
    // const { text1,text2 }= req.body;
    try {
        const { text1, text2 } = req.body;
        if (!text1 || !text2)
          return res.status(400).send("You need to provide text1 and text2");
    
        if (isAnagram(text1, text2)) {
          return res.status(200).send(true);
        }
        return res.status(200).send(false);
      } catch {
        res.sendStatus(500);
      }
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})