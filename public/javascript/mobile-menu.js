const plantBtn = document.querySelector("#plants-btn");
const scheduleBtn = document.querySelector("#schedule-btn");
const plantGridEl = document.getElementsByClassName("plant-grid");
const scheduleEl = document.getElementsByClassName("schedule");

function plantButtonHandler() {
  plantGridEl[0].classList.add('active');
  scheduleEl[0].classList.remove('active');
}

function scheduleButtonHandler() {
  scheduleEl[0].classList.add('active');
  plantGridEl[0].classList.remove('active');
}

plantBtn?.addEventListener('click', plantButtonHandler);
scheduleBtn?.addEventListener('click', scheduleButtonHandler);