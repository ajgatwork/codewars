function vm(version) {
    if (version==null || version.length==0) {
        console.log("Empty input")
        return new mgr(0,0,1)
    }
    const regexp = /(?<major>[0-9]+).(?<minor>[0-9]+).(?<patch>[0-9]+)|(?<major2>[0-9]+).(?<minor2>[0-9]+)|(?<major3>[0-9]+)/;
    const match = version.match(regexp);
    if (match==null) throw "Error occured while parsing version!"
    
    if (match.groups.major3 !=undefined) return new mgr(match.groups.major3,0,0)
    if (match.groups.major2 !=undefined) return new mgr(match.groups.major2,match.groups.minor2,0)


    console.log(`Major: ${match.groups.major} Minor: ${match.groups.minor} Patch: ${match.groups.patch} `);
    return new mgr(match.groups.major, match.groups.minor, match.groups.patch)
}



class mgr {

    constructor(major,minor,patch) {

        this.version=[major,minor,patch]
        this.history=[]
    }

    major() {
        this.history.push( [...this.version] )
        this.version[0]++
        this.version[1]=0
        this.version[2]=0
        return this;
    }

    minor() {
        this.history.push( [...this.version])
        this.version[1]++
        this.version[2]=0
        return this;
    }

    patch() {
        this.history.push( [...this.version])
        this.version[2]++
        return this;
    }

    rollback() {
        if (this.history.length==0) throw "Cannot rollback!"
        this.version=this.history.pop()
        return this;
    }

    release() {
        return this.version.join(".")
    }
}

vm("")
console.log(vm("2").patch().rollback().release())

console.log(vm().release())
