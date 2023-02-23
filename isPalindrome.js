//Answer #1
function isPalindrome(word){
    for(let i = 0; i < word.length/2; i++){
       if(word[i] !== word[word.length - 1 - i]){
        return false
       }
    }
    return true
}

console.log(isPalindrome('racecar'))
console.log(isPalindrome('monday'))


// Answer #2
function isPalindrome1(word){
    return word.split('').reverse().join('') === word
}

console.log(isPalindrome1('hello'))
console.log(isPalindrome1('racecar'))


//Answer #3
function isPalindrome3(string){
    let word = string.split('')
    let forwards = []
    let backwards = []
    for(let i = 0; i < word.length; i++){
        backwards.push(word[i])
        forwards.unshift(word[i])
    }
    fString = forwards.join('')
    bString = backwards.join('')
    if(fString === bString){
        return true
    }
    return false
}

console.log(isPalindrome3('hello'))
console.log(isPalindrome3('tacocat'))