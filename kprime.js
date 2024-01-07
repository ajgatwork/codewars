function countKprimes(k, start, nd) {
    let res = [];
    for (let i = start; i <= nd; i++) {
        let r = primeFactors(i)
        if (r.length==k) res.push(i)
    }
    return res
}

function primeFactors(k) {
    let n=k
    let arr=[]
    for(let i=2; i<=Math.floor(Math.sqrt(k)) && n>1;i++) {
        if (!checkPrime(i)) continue;
        while ( n % i == 0) {
            arr.push(i)
            n = n/i
        }
    }
    if (checkPrime(n)) arr.push(n)
    return arr
}

function checkPrime(num) {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}



//console.log(isPrime(2))
//console.log(checkCriteria(95,2))
console.log(countKprimes(2,94,96))
//8 10000000 10000200
//console.log(countKprimes(8,10000000,10000200))
//console.log(primeFactors(8))