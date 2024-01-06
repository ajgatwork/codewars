function prod2sum(a, b, c, d) {
    let res = o([ order([Math.abs(a*c-b*d), Math.abs(a*d+b*c)]), order([Math.abs(a*d-b*c),Math.abs(a*c+b*d)]) ])
    if (res[0][0]==res[1][0]) res.pop()
    return res;
}

function order(a) {
  return (a[1] <a[0]) ? [ a[1], a[0] ] : a
}

function o(a) {
  return (a[1][0] < a[0][0]) ? [ a[1], a[0] ] : a
}

let r = prod2sum(2,3,4,5)
console.log( r[0] )
console.log( r[1] )