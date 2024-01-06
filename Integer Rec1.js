function listSquared(m, n) {
    let res = [];
    for(i=m;i<=n;i++) {
        let r = checkCriteria(i)
        if (r) res.push(r)
    }

    return res
}

function checkCriteria(i) {
    // find the divisors
    let arr = []
    let lim=Math.floor(Math.sqrt(i))
    for(j=1;j<=lim;j++) {
        if ( i % j == 0 ) {
            arr.push(j)
            if (j*j != i) // if i square number then only add divisor once
                arr.push(i /j)
        }
    }
    //square the divisors
    let sumsquares = arr.map(x => x*x).reduce((total,n) => total+n)
    //is it a square number?
    let sss = Math.sqrt(sumsquares)
    if (sss==Math.floor(sss)) return [i,sumsquares]
    return null
}

console.log(checkCriteria(4))
listSquared(1,250)


