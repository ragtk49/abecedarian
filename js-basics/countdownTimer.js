function countDown() {
    let a = 30;
  
    function tick() {
      console.log(a);
      a = a - 1;
      if (a >= 0) {
        setTimeout(tick, 1000); // Delay next execution
      }
    }
  
    tick(); // Start the countdown
  }
  
  // Start the countdown with an initial delay of 1 second
  setTimeout(countDown, 1000);