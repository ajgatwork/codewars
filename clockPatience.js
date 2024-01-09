function patience(cards) {
    // DEAL
    const facedown = Array.from(Array(13), () => {
      return new Array();
    })
    for(let i=0;i<cards.length;i++) {
      facedown[i % 13].push(num(cards[i]))
    }
    // PLAY
    let play = 12
    do {
      play = facedown[play].pop()
    }
    while (facedown[play].length!=0)
    
    return facedown.reduce((acc,elem) => acc + elem.length,0)
  }
  
  function num(card) {
    let l = 0
    switch (card) {
        case 'A':l=0; break;
        case 'J':l=10; break;
        case 'Q':l=11; break;
        case 'K':l=12; break;
        default:l=+card-1;
    }
    return l
  }
  
   let unshuffled = [ 'A','2','3','4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K' ]
 console.log(patience(unshuffled)) //should be 48