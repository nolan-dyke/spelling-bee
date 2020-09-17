var words = require('an-array-of-english-words');
let result = [];

const centerLetter = 'a';
const allLetters = ['p', 'u', 'n', 'i', 'l', 'f', 'a'];

function findValidWords(){
    const sortedAnswer = allLetters.sort()
    words.forEach(word => {
        let wordArray = word.split('')
        if (wordArray.includes(centerLetter)){
            let uniqueChars = [...new Set(wordArray)].sort()
            let check = true
            for(let i = 0; i < uniqueChars.length; i++) {
                if(uniqueChars[i] !== sortedAnswer[i]) {
                    check = false
                }
            }
            if (check){
                result.push(word)
            }
        }
    })
    console.log(result)
}

findValidWords()