// clock.js

function updateClock() {
    const now = new Date();
    
    // Get hours, minutes, and seconds
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    // Format time as HH:MM:SS
    const timeString = `${hours}:${minutes}:${seconds}`;
  
    // Clear the console and display the current time
    console.clear();
    console.log(`Current Time: ${timeString}`);
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initial call to display the time immediately
  updateClock();
  