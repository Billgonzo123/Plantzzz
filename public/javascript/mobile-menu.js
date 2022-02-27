const plantBtn = document.querySelector("#plants-btn");
const scheduleBtn = document.querySelector("#schedule-btn");
const plantGridEl = document.getElementsByClassName("plant-grid");
const scheduleEl = document.getElementsByClassName("schedule");

// function to Display plant grid in mobile view
function plantButtonHandler() {
  plantGridEl[0].classList.add('active');
  scheduleEl[0].classList.remove('active');
}

// function to Display Schedule in mobile view 
function scheduleButtonHandler() {
  scheduleEl[0].classList.add('active');
  plantGridEl[0].classList.remove('active');
}

plantBtn?.addEventListener('click', plantButtonHandler);
scheduleBtn?.addEventListener('click', scheduleButtonHandler);