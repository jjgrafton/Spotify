/* Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string. 

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer. 

For s = "4[ab]", the output should be decodeString(s) = "abababab" 
For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa" */

function decodeString(s) {
    let solution = []
    let repeat
    for (let i of s) {
        if (i !== ']') {
            solution.push(i)
        } else {
            let temp = ''
            while (solution[solution.length - 1] !== '[') {
                temp = solution.pop() + temp
            }
            solution.pop()
            let count
            if (solution.length > 0 && solution[solution.length - 1].match(/[0-9]+/)) {
                count = parseInt(solution.pop())
            }
            repeat = temp.repeat(count)
            solution.push(repeat)
        }
    }
    return repeat
}