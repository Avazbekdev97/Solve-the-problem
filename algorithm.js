// 1) twoSum LeetCode

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

// 2) palindrome LeetCode 

/* function isPalindrome (x) {
    let result = x.toString().split('').reverse().join('')
    x = x.toString()
    return (result === x)
}
console.log(isPalindrome(123)) */

// 3) Check same case codewars

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

// 4) Gravity Flip CodeWars

/* function flip (d, a) {
    if(d === 'R') return a.sort((a, b) => a - b) 
    else if (d === 'L') return a.sort((a, b) => b - a)
}

console.log(flip('L', [3, 2, 1, 2])); */

// 5) min max mode

/* function remainder(n, m) {
    const max = Math.max(n, m)
    const min = Math.min(n, m)
    return max % min
}

console.log(remainder(-33, -938)); */


// 6) Removing Elements CodeWars

/* function removeEveryOther(arr) {
    const arr2 = []
    for(let i = 0; i < arr.length; i++) {
        if(i % 2 == 0) {
            arr2.push(arr[i])
        }
    }
    return arr2
}

console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"])); */

// 7) Beginner - Lost Without a Map CodeWars

/* function maps(x){
    return x.map(el => el * 2)
}

console.log(maps([1, 2, 3])); */

// 8) How good are you really? Codewars

/* function betterThanAverage(classPoints, yourPoints) {
    let sum = 0,
        count = 0
    for(let i = 0; i < classPoints.length; i++) {
        sum += classPoints[i]
        count++
    }
    sum = parseInt(sum / count)
    return sum < yourPoints ? true : false
}

console.log(betterThanAverage([2, 3], 5)); */

// 9) Vowel remover

/* function shortcut (string) {
    let vowel = ['a', 'e', 'i', 'o', 'u']
    let str = ''
    for(let i = 0; i < string.length; i++) {
        if(vowel.includes(string[i])) continue
        else str += string[i]
    }
    return str
}

console.log(shortcut('olmaliq')); */

// 10) Merge Two Sorted Lists LeetCode

/* function mergeTwoLists(list1, list2) {
    let arr = [...list1, ...list2]
    //let size = list1.length < list2.length ? list1.length: list2.length
    return arr.sort((a, b) => a - b)
}

console.log(mergeTwoLists([1,2,4], [1,3,4])); */

// 11) shorter concat [reverse longer] codewars

/* function shorter_reverse_longer(a,b){
    if(a.length == b.length) return b + a.split('').reverse().join('') + b 
    else if (a.length > b.length) return b + a.split('').reverse().join('') + b
    else return a + b.split('').reverse().join('') + a
}

console.log(shorter_reverse_longer("first", "abcde")); */

// 12) Reverse words

/* function reverseWords(str) {
    str = str.split('').reverse().join('')
    str = str.split(' ')
    let str2 = ''
    for(let i = str.length - 1; i >= 0; i--) {
        str2 += str[i] + ' '
    }
    return str2.trimEnd()
}

console.log(reverseWords("ehT kciuq nworb xof spmuj revo eht yzal .god ")); */