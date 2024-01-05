function mostFrequentDays(year) {
  
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const yearStart = new Date(year+"-01-01T12:00:00")
    const yearEnd = new Date(year+"-12-31T12:00:00")
  
    let startingDay=yearStart.getDay()
    let endingDay=yearEnd.getDay()
  
    let res = [days[(startingDay) % 7]]
    if ((endingDay-startingDay)==1 || (endingDay-startingDay)==-6) { //leap year
      res.push(days[(startingDay+1) % 7])
      if (startingDay==0) res=res.reverse() //edge case of "Mon", "Sun"
      }
    return res
  }