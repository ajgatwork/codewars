function permutations(string) {
    let strarr = Array.from(string)
    // now get rid of duplicates
    return Array.from(new Set(p(string)))
}

function p(str) {
    let perms = []
    if (str.length<=2) {
        perms.push(str)
        perms.push(str.split("").reverse().join(""))
        return perms
    }

    for(let i=0;i< str.length;i++) {
        let ns="";
        for(let j=0;j<str.length;j++) {
            if (i!=j) ns=ns.concat(str[j])
        }
        let pp = p(ns)
        perms=perms.concat(pp.map((elem) => str[i]+elem))
    }
    return perms
}

console.log(permutations('aba'))