// Countdown Timer
const timer = document.getElementById('timer');
// Set your launch date here!
const launchDate = new Date("2025-12-31 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = launchDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    timer.textContent = "Launched!";
  }
}, 1000);
