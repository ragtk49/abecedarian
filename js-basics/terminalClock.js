function terminalClock(hours, minutes, seconds) {
  
    function timePart(timepart) {
      return timepart < 10 ? "0" + timepart : timepart;
    }
  
    function updateClock() {
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
      if (hours >= 24) {
        hours = 0;
      }
  
      let time =
        timePart(hours) + ":" + timePart(minutes) + ":" + timePart(seconds);
  
      console.clear();
      console.log(time);
      setTimeout(updateClock, 1000);
    }
    updateClock();
  }
  
  terminalClock(0, 0, 0);
  