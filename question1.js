/* Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg". */

function sortByStrings(unsorted, sorted) {
    let unsortedArray = unsorted.split("");
    let sortedArray = sorted.split("");
    let finalArray = new Array;
    for (let i = 0; i < sortedArray.length; i++) {
        for (let j = 0; j < unsorted.length; j++) {
            if (sortedArray[i] === unsortedArray[j]) {
                resultArr.push(unsortedArray[j])
            }
        }
    }
    return finalArray.join("");
}

sortByStrings("weather", "therapyw");
sortByStrings("good", "odg");