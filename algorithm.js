// twoSum LeetCode

/* function twoSum (nums, target) {
    const result = []
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j <= nums.length; j++) {
            if(nums[i] + nums[j] == target) result.push(i, j)
        }
    }
    return result
}
console.log(twoSum([3, 2, 4], 6)); */

// palindrome LeetCode 

/* function isPalindrome (x) {
    let result = x.toString().split('').reverse().join('')
    x = x.toString()
    return (result === x)
}
console.log(isPalindrome(123)) */

// Check same case codewars

/* function sameCase(a, b){
    a = a.toString()
    b = b.toString()
    const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const alphabets2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w','x', 'y', 'z'] 
    
    if(!alphabets.includes(a) && !alphabets2.includes(a)) return -1
    else if(!alphabets.includes(b) && !alphabets2.includes(b)) return -1 
    const letter1 = alphabets.includes(a)
    const letter2 = alphabets2.includes(a)
    const letter3 = alphabets.includes(b)
    const letter4 = alphabets2.includes(b)
    if(letter1 === letter3 || letter2 === letter4) return 1 
    return 0
}

console.log(sameCase('h', 'w')); */

// Gravity Flip CodeWars

/* function flip (d, a) {
    if(d === 'R') return a.sort((a, b) => a - b) 
    else if (d === 'L') return a.sort((a, b) => b - a)
}

console.log(flip('L', [3, 2, 1, 2])); */

/* function remainder(n, m) {
    const max = Math.max(n, m)
    const min = Math.min(n, m)
    return max % min
}

console.log(remainder(-33, -938)); */


// Removing Elements CodeWars

function removeEveryOther(arr) {
    const arr2 = []
    for(let i = 0; i < arr.length; i++) {
        if(i % 2 == 0) {
            arr2.push(arr[i])
        }
    }
    return arr2
}

console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));