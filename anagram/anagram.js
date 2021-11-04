// anagram is (of words) a word or phrase that is created 
// by rearranging the letters of another word or phrase

let isAnagram = (str1,str2) => {
    let sorted1 =str1.split('').sort().join('').toLowerCase();
    let sorted2 =str2.split('').sort().join('').toLowerCase();

    return (sorted1 == sorted2)
}

console.log(isAnagram('hello','loelh'))