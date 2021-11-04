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

    console.log(str==isPalindrome);
}
Palindrome("abba");

//outputs true or false 