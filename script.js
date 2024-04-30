const timeDays = document.getElementById('timeDays');
const timeHour = document.getElementById('timeHour');
const timeMinutes = document.getElementById('timeMinutes');
const timeSeconds = document.getElementById('timeSeconds');

const blocks = document.querySelectorAll('.benefit-advna-option');

blocks.forEach(block => {
  block.addEventListener('mouseenter', handleMouseEnter);
});

const mobileContent = document.querySelector('.benefit-advan-mobile-content');
function changeBackground(imageUrl) {
  mobileContent.classList.add('benefit-advan-mobile-content-leave');

  setTimeout(() => {
    mobileContent.style.background = `url(${imageUrl}) center/cover no-repeat`;
    mobileContent.classList.remove('benefit-advan-mobile-content-leave');
  }, 300);
}
function handleMouseEnter(event) {
  blocks.forEach(block => {
    block.classList.remove('gradient-border-block-1');
  });

  this.classList.add('gradient-border-block-1');

  const optionId = event.target.id;
  let imageUrl;
  switch(optionId) {
    case 'option-1':
      imageUrl = 'assets/images/advan-opt-art.svg';
      break;
    case 'option-2':
      imageUrl = 'assets/images/advan-opt-revol.svg';
      break;
    case 'option-3':
      imageUrl = 'assets/images/advan-opt-tech.svg';
      break;
    case 'option-4':
      imageUrl = 'assets/images/advan-opt-int.svg';
      break;
    default:
      imageUrl = '';
  }
  changeBackground(imageUrl);
}

// Function to update countdown
const updateCountdown = () => {
  var now = new Date().getTime();
  // Set countdown time to current time plus 1 hour, 3 minutes, and 21 seconds
  var countDownDate = now + (1 * 60 * 60 * 1000) + (3 * 60 * 1000) + (21 * 1000);

  var x = setInterval(function() {
    now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Add leading zeros if necessary
    days = days < 10 ? "0" + days : days;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("timeDays").innerHTML = days;
    document.getElementById("timeHours").innerHTML = hours;
    document.getElementById("timeMinutes").innerHTML = minutes;
    document.getElementById("timeSeconds").innerHTML = seconds;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "<h3 class='b-intro-time-title'>Registration is closed!</h3>";
    }
  }, 1000);
}


document.addEventListener("DOMContentLoaded", function() {
  updateCountdown();
});