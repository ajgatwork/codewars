function latestClock(a, b, c, d) {
    let target = [a,b,c,d].sort().join('')
    let t = {hours:23, minutes:59, string:"2359"}
    while (t.string != target) t = minusOneMinute(t)
      
    return ""+t.hours.toString().padStart(2,"0")+":"+t.minutes.toString().padStart(2,"0")
  }
  
  function minusOneMinute(time) {
    if (time.minutes==0) {
      time.hours--
      time.minutes=59
    } else {
      time.minutes--
    }
    time.string="".concat(time.minutes.toString().padStart(2,"0"),time.hours.toString().padStart(2,"0")).split('').sort().join('')
    return time;
    
  }