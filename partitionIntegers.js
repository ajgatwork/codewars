// naive method

function partitions(n) {
    // your code here
    var set = new Set();
    subpart([n],set);
    return set.size;
  }
  
  function subpart(arr, set) {
    var key = arr.join('.');
    if (set.has(key)) return; // seen this already so can ditch.optimisaion
    set.add(key);
    let n = arr.pop();
    if (n==1) return;
    for(let i=1;i<=Math.round(n/2);i++){
      var a = arr.concat( [n-i, i]).sort((a,b) =>  a-b);
      subpart(a,set);
    }
    
  }
  
//----- perfomant method
  
  function partitions(number) {
    // see  https://en.wikipedia.org/wiki/Pentagonal_number_theorem
    var cache = new Map();
    return p(number, cache);
  }
  
  function p(n,cache) {
    if (n<=1) return 1;
    if (cache.has(n)) return cache.get(n);
    let i=1;
    let result=0;
    while(true) {
      var input = n - pentagramNumber(i);
      if (input<0) break;
      result +=  p(input,cache)*(Math.pow(-1,i-1));
      input = n - pentagramNumber(-1*i);
      if (input<0) break;
      result += p(input,cache)*(Math.pow(-1,-1*i-1));
      i++;
    }
    cache.set(n,result);
    return result;
  }
  
  function pentagramNumber(k) {
    return k*(3*k-1)/2
  }
  