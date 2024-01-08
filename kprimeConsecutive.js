function consecKprimes(k, arr) {
    let kprime=arr.map((elem) => primeFactors(elem).length==k)
    return kprime.slice(1).reduce((acc,value,index) => (value && kprime[index]) ? ++acc : acc, 0,)
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


console.log(consecKprimes(3, [10158, 10182, 10184, 10172, 10179, 10168, 10156, 10165, 10155, 10161, 10178, 10170]))