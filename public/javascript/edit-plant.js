const hiddenPlant = document.querySelector("#hidden-plant").value;

async function editPlantFormHandler(event) {
  event.preventDefault();

const userSelectPlant = document.querySelector("#select-plant").value.trim();
const userSelectNickname = document.querySelector("#plant-nickname").value.trim();
const userSelectDPLW = document.querySelector("#last-watered").value.trim();
const userSelectWfVal = document.querySelector("#wfVal").value.trim();
const userSelectWfMult = document.querySelector("#wfMult").value.trim();

  let userPlantId = window.location.pathname;
  userPlantId = userPlantId.split("/")[2];

  if (
    userSelectPlant ||
    userSelectNickname ||
    userSelectDPLW ||
    userSelectWfVal ||
    userSelectWfMult
  ) {
    const response = await fetch(`/api/userPlants/${userPlantId}`, {
      method: "PUT",
      body: JSON.stringify({
        nickname: userSelectNickname,
        plant_id: userSelectPlant,
        initial_water_date: userSelectDPLW,
        watering_interval: userSelectWfVal + userSelectWfMult,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("plant updated");
      document.location.replace("/");
    } else {
      alert("Plant already exists in account!");
    }
  }
}

function populate () {
    let option = document.querySelectorAll('.default-plant')

    for (let i = 0; i < option.length; i++) {
        if (hiddenPlant === option[i].textContent) {
            option[i].setAttribute('selected', 'selected');
        }
    }
}
populate();

document.querySelector(".submit").addEventListener("click", editPlantFormHandler);