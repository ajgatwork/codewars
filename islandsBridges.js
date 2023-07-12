// - https://www.codewars.com/kata/64a815e3e96dec077e305750/train/javascript

function bridge(islands) {
  // Your code here
  //console.log(islands);
  let vertices = new Map();
  let remaining = new Set();
  for(let i=0;i<islands.length;i++) {
    vertices.set(i,islands[i]);
    remaining.add(i);
  }
  let tree = new Set();
  let total = 0;
  
  //initialise
  tree.add(0);
  remaining.delete(0);
     
  let edges = new Array();
  //calculate the distance between all nodes


  var newone = 0;

  while (remaining.size) {
    // refresh the list of edges from the tree
    remaining.forEach((island) => {
      let d = dist(islands[newone],islands[island]);
      edges.push({v1:newone, v2:island, d:d})
    });
  
    edges.sort((a,b) => a.d - b.d);
    //console.log(edges);  
    // pick the shortest path to a node not in tree
    // ordered so just pick the first one
   var shortest = edges.shift();
   total += shortest.d;
    // put that node in the tree
   newone = (tree.has(shortest.v1)) ? shortest.v2:shortest.v1;
   tree.add(newone);
   remaining.delete(newone);
   // filter out edges that dont count any more
       console.log("pre filter "+edges.length);
   edges = edges.filter((elem) => elem.v1!=newone && elem.v2!=newone);
   console.log("post filter "+edges.length);
}
  //console.log(total);
  return total;
}

function dist( p1,p2) { return Math.sqrt(Math.abs(p1[0]-p2[0])*Math.abs(p1[0]-p2[0])
                                  + Math.abs(p1[1]-p2[1])*Math.abs(p1[1]-p2[1]))}
