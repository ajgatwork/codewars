function countKprimes(k, start, nd) {
    console.log(k+" "+start+" "+nd)
    let res = [];
    for (let i = start; i <= nd; i++) {
        console.log("Starting - "+i)
        let r = primeFactors(i)
        if (r.length==k) res.push(i)
    }
    return res
}

function primeFactors(k) {
    let n=k
    let arr=[]
    for(let i=k; i>1 && n>1;i--) {
        if (i% 1000 == 0) console.log("primefactors "+i)
        if (!isPrime(i)) continue;
        while ( n % i == 0) {
            arr.push(i)
            n = n/i
        }
    }
    return arr
}


let primes= new Set();

function isPrime(num)
{
  if (primes.has(num)) return true;
  if (checkPrime(num)) {
    primes.add(num)
    return true
  }
  return false
}

function checkPrime(num) {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

function checkCriteria(i,k) {
    // find the divisors
    let arr = []
    let lim = Math.floor(Math.sqrt(i))
    for (j = 2; j <= lim; j++, f1=i%j, f2=i/j) {
        let f1=i%j
        let f2=i/j
        console.log("cc - "+j+" "+f1+" "+f2)
        if (f1 == 0 ) {
            if (isPrime(j) && isPrime(f2) ) {
                arr.push(j)
                arr.push(f2)
            }
            //if (j!=f2) // if i square number then only add divisor once
        }
    }
    console.log(arr)
    if (arr.length==k) return i
    return null
}



//console.log(isPrime(2))
//console.log(checkCriteria(95,2))
//console.log(countKprimes(2,94,96))
//8 10000000 10000200
console.log(countKprimes(8,10000000,10000200))
//console.log(primeFactors(96))