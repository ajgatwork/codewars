function countKprimes(k, start, nd) {
    let res = [];
    for (let i = start; i <= nd; i++) {
        let r = primeFactors(i)
        if (r.length==k) res.push(i)
    }
    return res
}

//there is a cleverer way of doing this, lots of people seemed to search the internet to find it.  maybe I should have done the same!
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

function puzzle(s) {
    let arr1=countKprimes(1,1,s)
    let arr3=countKprimes(3,1,s)
    let arr7=countKprimes(7,1,s)

    let count = 0
    for(let i=0;i<arr1.length;i++) {
        for (let j=0;j<arr3.length;j++) {
            for (let k=0;k<arr7.length;k++) {
                if (arr1[i]+arr3[j]+arr7[k] == s) count++
            }
        }
    }

    return count

}


//console.log(isPrime(2))
//console.log(checkCriteria(95,2))
console.log(countKprimes(2,94,100))
//8 10000000 10000200
//console.log(countKprimes(8,10000000,10000200))
//console.log(primeFactors(8))