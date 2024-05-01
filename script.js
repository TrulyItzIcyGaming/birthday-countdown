// Set the date we're counting down to
const countDownDate = new Date("May 2, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const countdown = setInterval(() => {

  // Get the current date and time
  const now = new Date().getTime();
  
  // Calculate the remaining time
  const distance = countDownDate - now;
  
  // Calculate days, hours, minutes and seconds remaining
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Display the countdown
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
  
  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("days").innerText = "0";
    document.getElementById("hours").innerText = "0";
    document.getElementById("minutes").innerText = "0";
    document.getElementById("seconds").innerText = "0";
  }
}, 1000);
