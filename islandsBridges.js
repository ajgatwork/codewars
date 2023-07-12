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
     
  let edges = new SortedLinkedList();

  var newone = 0;

  while (remaining.size) {
    // refresh the list of edges from the tree
    remaining.forEach((island) => {
      let d = dist(islands[newone],islands[island]);
      edges.add(newone, island, d)
    });
  
    //console.log(edges);  
    // pick the shortest path to a node not in tree
    // ordered so just pick the first one
   var shortest = edges.getShortest();
   total += shortest.d;
    // put that node in the tree
   newone = (tree.has(shortest.v1)) ? shortest.v2:shortest.v1;
   tree.add(newone);
   remaining.delete(newone);
   // filter out edges that dont count any more
       console.log("pre filter "+edges.size);
   edges.pruneVertex(newone);
   console.log("post filter "+edges.size);
  }
  //console.log(total);
  return total;
}

function dist( p1,p2) { return Math.sqrt(Math.abs(p1[0]-p2[0])*Math.abs(p1[0]-p2[0])
                                  + Math.abs(p1[1]-p2[1])*Math.abs(p1[1]-p2[1]))}


class SortedLinkedList {
  #size = 0;
  head = null;
  
  get size() {
    return this.#size;
  }
  
  createElement(v1,v2,dist) {
    return {value:{v1:v1, v2:v2, d:dist}, next: null};
  }
  
  add(from,to,distance) {
    const element = this.createElement(from,to,distance);
    
    if(this.head === null) {
      this.head = element;
    } else {
      let current = this.head;
      let previous = null;

      while (current && element.value.d > current.value.d ) {
        previous = current;
        current = current.next;
      }

      //add at start
      if (previous==null) {
        element.next = this.head;
        this.head=element;
      } else if (current==null) {  //add at end
        previous.next=element;
      } else { //add in the middle
        previous.next = element;
        element.next = current;
      }
    }
    
    this.#size += 1;
    return this.size;
  }
  
  pruneVertex(vertex) {
    // remove any elements that refer to this vertex
    let current = this.head;
    let previous = null;
    while (current!=null) {
      //console.log(">>"+current.value.from);
      if (current.value.v1==vertex || current.value.v2==vertex) {
        //prune     
        if (previous==null) { //prune from start
          this.head=current.next;
        } else { //prune from the middle
          //console.log(previous.value.from+","+current.value.from);
          previous.next = current.next;
        }
        this.#size -= 1;
      } else{
        previous =current;
      }
      current=current.next;
    }
  }
  
  
  
  getShortest() {
    return (this.head) ? this.head.value : null;
  }
  

  
  toString() {
    if(!this.size) return 'size 0 ';
    
    let str = "size "+this.#size+" ["+this.head.value.v1+","+this.head.value.v2+","+this.head.value.d+"]";
    let current = this.head.next;
    
    while(current) {
      str += "->"+"["+current.value.v1+","+current.value.v2+","+current.value.d+"]";
      current = current.next;
    }
    
    return str;
  }

}      

 //var list = new SortedLinkedList();
//console.log(list.size);
//console.log(list.toString());
//list.add(0,1,7);
//console.log(list.toString());
//list.add(0,1,9);
// console.log(list.toString());
//list.add(2,3,5);
//console.log(list.toString());
//list.add(2,4,6);
//console.log(list.toString());
//list.add(17,17,6);
//console.log(list.toString());
//list.pruneVertex(17);
//console.log(list.toString());
//list.pruneVertex(2);
//console.log(list.toString());
//list.pruneVertex(0);
//console.log(list.toString()); 