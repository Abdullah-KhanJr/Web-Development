console.log("Advance JavaScript");

async function sleeps () {
    return new Promise((resolve, reject) =>{
        setInterval(() => {
            resolve (45)
        }, 1000);
    })
}

// let a = await sleeps()
// console.log(a);
// let B = await sleeps()
// console.log(B);

function sum (a, b, c) {
    return a+b+c;
}

// Immediately Invoked Function Expression (IIFE)
(async function main() {
    // let a = await sleeps()
    // console.log(a);
    // let B = await sleeps()
    // console.log(B);

    let [x, y] = [1, 5]
    // x = 1, y = 5
    console.log(x, y);

    let [a, b, ...rest] = [1, 3, 5, 6, 7, 6]
    // a = 1, b = 3, rest = 5,6,7,6
    console.log(a ,b, rest);

    let obj = {
        d:1,
        e:2,
        f:3
    }

    let {e, f} = obj
    console.log(e, f);

    let arr = [1,4,7]
    // Spread Operator (...) it opens the array in to its element
    console.log(sum(...arr));

    

})

