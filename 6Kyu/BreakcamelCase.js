// Break Camel Case 6 Kyu

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
// FUNDAMENTALS STRINGS FORMATTING ALGORITHMS


function solution(string) {
    return string.replace(/[A-Z]/g, ' $&').trim()
    }