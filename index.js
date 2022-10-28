/* function numbers (number) {
    const arr = []
    for(let i = 1; i <= number; i++) {
        i = i.toString()
        if((i >= 10 && i <= number) && i.at(-1) == '0') {
            arr.push(parseInt(i))
        }
    }
    return arr
}

console.log(numbers(111)); */

/* const add = (x) => (y) => {
    const z = x + y
    return z
}

const result = add(3)(5)
console.log(result); */

/* function add(x) {
    function closure (y) {
        const z = x + y
        return z
    }
    return closure
}

console.log(add(3)(5)); */

    //const symbol1 = Symbol.for('Geeks');
    //const symbol2 = Symbol.for(123);
    //const symbol3 = Symbol.for("gfg");
    //const symbol4 = Symbol.for('789');
  
    // Getting the same symbols if found 
    // in the global symbol registry
    // otherwise a new created and returned
    // console.log(symbol1);
    // console.log(symbol2);
    // console.log(symbol3);
    // console.log(symbol4);

    
//let array = [1, 2, 3, 4, 5] 
//console.log(array[array.length]);

//console.log('arrayning uzunligi --->>>', array.length);

/* let ladder = {
    step: 0,
    up () {
        this.step++;
        return this
    },
    down () {
        this.step--;
        return this
    },
    showStep: function() {
        console.log(this.step);
        return this
    } 
}

console.log(ladder.up().up().down().showStep().down().showStep()); */

function oddCount(n) {
    let stack = []
}

console.log(oddCount(15));