const plantBtn = document.querySelector('#plants-btn');
const scheduleBtn = document.querySelector('#schedule-btn');


const hideSchedule = function (hide, show) {
  var myClasses = document.querySelectorAll(".schedule"),
    i = 0,
    l = myClasses.length;

  for (i; i < l; i++) {
    myClasses[i].style.display = "none";
  }

  var myClasses = document.querySelectorAll(".plant-grid"),
    i = 0,
    l = myClasses.length;

  for (i; i < l; i++) {
    myClasses[i].style.display = "grid";
  }

  plantBtn.style.backgroundColor = "#227A9F";
  scheduleBtn.style.backgroundColor = "#70B2CE";
};

const hidePlants = function () {
    var myClasses = document.querySelectorAll(".plant-grid"),
      i = 0,
      l = myClasses.length;
  
    for (i; i < l; i++) {
      myClasses[i].style.display = "none";
    }
  
    var myClasses = document.querySelectorAll(".schedule"),
      i = 0,
      l = myClasses.length;
  
    for (i; i < l; i++) {
      myClasses[i].style.display = "flex";
    }

    scheduleBtn.style.backgroundColor = "#227A9F";
    plantBtn.style.backgroundColor = "#70B2CE";
  };

