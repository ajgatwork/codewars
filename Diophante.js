function solequa(n) {  
    let arr = []
    let lim=Math.floor(Math.sqrt(n))
    for(j=1;j<=lim;j++) {
        if ( n % j == 0 ) {
            arr.push([j, n/j])
        }
    }
    return arr.map((e) => [ (e[0]+e[1])/2, (e[1]-e[0])/4]).filter((x) => Number.isInteger(x[0]) && Number.isInteger(x[1]))
}

let a = solequa(90005)
a.forEach((element) => console.log(element))