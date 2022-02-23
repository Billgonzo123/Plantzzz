const plantBtn = document.querySelector("#plants-btn");
const scheduleBtn = document.querySelector("#schedule-btn");
const plantGridEl = document.getElementsByClassName("plant-grid");
const scheduleEl = document.getElementsByClassName("schedule");

console.log(plantGridEl, scheduleEl);
function plantButtonHandler() {
  plantGridEl[0].classList.add('active');
  scheduleEl[0].classList.remove('active');
}

function scheduleButtonHandler() {
  scheduleEl[0].classList.add('active');
  plantGridEl[0].classList.remove('active');
}

// const hideSchedule = function (hide, show) {
//   var myClasses = document.querySelectorAll(".schedule"),
//     i = 0,
//     l = myClasses.length;

//   for (i; i < l; i++) {
//     myClasses[i].style.display = "none";
//   }

//   var myClasses = document.querySelectorAll(".plant-grid"),
//     i = 0,
//     l = myClasses.length;

//   for (i; i < l; i++) {
//     myClasses[i].style.display = "grid";
//   }

//   plantBtn.style.backgroundColor = "#227A9F";
//   scheduleBtn.style.backgroundColor = "#70B2CE";
// };

// const hidePlants = function () {
//   var myClasses = document.querySelectorAll(".plant-grid"),
//     i = 0,
//     l = myClasses.length;

//   for (i; i < l; i++) {
//     myClasses[i].style.display = "none";
//   }

//   var myClasses = document.querySelectorAll(".schedule"),
//     i = 0,
//     l = myClasses.length;

//   for (i; i < l; i++) {
//     myClasses[i].style.display = "flex";
//   }

//   scheduleBtn.style.backgroundColor = "#227A9F";
//   plantBtn.style.backgroundColor = "#70B2CE";
// };

// var observer = new IntersectionObserver(
//   function (entries) {
//     if (entries[0]["intersectionRatio"] == 1) {
//       // element is hidden
//       var myClasses = document.querySelectorAll(".plant-grid"),
//         i = 0,
//         l = myClasses.length;

//       for (i; i < l; i++) {
//         myClasses[i].style.display = "grid";
//       }

//       var myClasses = document.querySelectorAll(".schedule"),
//         i = 0,
//         l = myClasses.length;

//       for (i; i < l; i++) {
//         myClasses[i].style.display = "flex";
//       }
//     } else {
//       // element is visible
//       // entries[0]['intersectionRatio'] can be used to check whether element is visible fully or partially
//       var myClasses = document.querySelectorAll(".schedule"),
//       i = 0,
//       l = myClasses.length;

//     for (i; i < l; i++) {
//       myClasses[i].style.display = "flex";
//     }
//     }
//   },
//   { root: document.documentElement });

// // element to observe
// observer.observe(document.querySelector(".mobile-nav"));

plantBtn?.addEventListener('click', plantButtonHandler);
scheduleBtn?.addEventListener('click', scheduleButtonHandler);