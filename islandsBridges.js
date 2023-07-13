// - https://www.codewars.com/kata/64a815e3e96dec077e305750/train/javascript

function bridge(islands) {
  // Your code here

  let remaining = new Array();
  for(let i=1;i<islands.length;i++) {
    remaining.push(i);
  }
  let tree = new Array();
  let total = 0;
  

  //  5 islands
  //  arr[0] = arr[1,2,3,4]
  //  arr[1] =   arr[2,3,4]
  //  arr[2] =     arr[3,4]
  //  arr[3] =       arr[4]
  //
  // use sparse arrays
  // calculate all distances between all islands
  var edges = new Array();

  var start = Date.now();
  for(let i=0;i<islands.length;i++) {
    edges[i] = new Array();
    for(let j=i+1;j<islands.length;j++) {
      edges[i][j] = dist(islands[i],islands[j]);
    }
  }
  var end = Date.now();
  console.log("Added all distances in "+(end-start)+"ms");
  start = Date.now();
  //initialise
  tree.push(0);
  // remaining already exludes 0

  
  while (remaining.length) {
 
  // pick the shortest path to a node not in tree
  // find the shortest distance where one vertex is in tree and one is in remaining
  var shortest={d:9999999999};
  for(let i=0;i<tree.length;i++) {
    for(let j=0;j<remaining.length;j++) {
      // edges array is organised so that first number has to be bigger than second
      var a = tree[i];
      var b = remaining[j];
      if (a>b) {
        //swap
        b = tree[i];
        a = remaining[j];
      }
      //console.log("checking "+a+" "+b+" "+edges[a][b]+" against "+shortest);
      if (edges[a][b] < shortest.d) {
        shortest = {v1:a, v2:b, d:edges[a][b]};
        //console.log(shortest);
      }
    }
  }

   total += shortest.d;
    // put that node in the tree
   var newone = (tree.includes(shortest.v1)) ? shortest.v2:shortest.v1;
   tree.push(newone);
   remaining = remaining.filter((value) => value!=newone);  

  }
  //console.log(total);
  end = Date.now();
  console.log("Completed rest in "+(end-start)+"ms");
  return total;
}

function dist( p1,p2) { return Math.sqrt(Math.abs(p1[0]-p2[0])*Math.abs(p1[0]-p2[0])
                                  + Math.abs(p1[1]-p2[1])*Math.abs(p1[1]-p2[1]))}

