// Add / Edit Cancel button functionality
async function cancelFormHandler(event) {
  event.preventDefault();
  document.location.replace("/");
}

// Add / Edit Save button functionality
async function addPlantFormHandler(event) {
  event.preventDefault();

  const userSelectPlant = document.querySelector("#select-plant").value.trim();
  const userSelectNickname = document.querySelector("#plant-nickname").value.trim();
  const userSelectDPLW = document.querySelector("#last-watered").value.trim();
  const userSelectWfVal = document.querySelector("#wfVal").value.trim();
  const userSelectWfMult = document.querySelector("#wfMult").value.trim();

  if (
    userSelectPlant && userSelectNickname && userSelectDPLW && userSelectWfVal && userSelectWfMult
  ) {
    const water_int = parseInt(userSelectWfVal) + parseInt(userSelectWfMult);
    const response = await fetch("/api/userPlants", {
      method: "POST",
      body: JSON.stringify({
        nickname: userSelectNickname,
        plant_id: userSelectPlant,
        initial_water_date: userSelectDPLW,
        watering_interval: water_int,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("plant added to userPlants");
      document.location.replace("/");
    } else {
      alert("Plant already exists in account!");
    }
  }
}

// Function to grab stored watering frequency and display on page load
async function frequencyHandler() {
  let wkOption = document.querySelectorAll(".week-freq");
  let dayOption = document.querySelectorAll(".day-freq");
  const selectedPlant = document.querySelector("#select-plant").value;

  wkOption.forEach((opt) => {
    opt.removeAttribute("selected", "selected");
  });

  dayOption.forEach((opt) => {
    opt.removeAttribute("selected", "selected");
  });

  const response = await fetch(`/api/plants/${selectedPlant}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let day = dayFreq(data.watering_interval);
      let week = weekFreq(data.watering_interval);

      for (let i = 0; i < dayOption.length; i++) {
        if (day == dayOption[i].innerHTML) {
          dayOption[i].setAttribute("selected", "selected");
        }
      }

      for (let i = 0; i < wkOption.length; i++) {
        if (week == wkOption[i].innerHTML) {
          wkOption[i].setAttribute("selected", "selected");
        }
      }
    });
}

// Functions to convert Watering Frequency to days
function dayFreq(int) {
  let day = Math.floor(int % 7);
  if (!day) {
    day = 0;
  }
  return day;
}

function weekFreq(int) {
  let week = Math.floor(int / 7);
  if (!week) {
    week = 0;
  }
  return week;
}

window.addEventListener("load", frequencyHandler);
document.querySelector("#select-plant").addEventListener("change", frequencyHandler);
document.querySelector(".cancel").addEventListener("click", cancelFormHandler);
document.querySelector("#edit-form").addEventListener("submit", addPlantFormHandler);