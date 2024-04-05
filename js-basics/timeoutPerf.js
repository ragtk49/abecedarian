function countDown() {
    let a = 30;
    
    function counter() {
      // Timestamp when the counter function starts running
      const startCounterTime = performance.now();
  
      console.log(a);
      a--;
  
      if(a >= 0){
        // Timestamp right before setTimeout call for the next iteration
        const startSetTimeoutTime = performance.now();
  
        setTimeout(() => {
          // Calculate the elapsed time since the setTimeout was called
          const elapsed = performance.now() - startSetTimeoutTime;
          console.log(`Elapsed time before counter starts: ${elapsed} milliseconds`);
          
          counter();
        }, 1000);
      }
    }
  
    counter();
  }
  
  // Start the countdown with an initial delay of 1 second
  setTimeout(countDown, 1000);