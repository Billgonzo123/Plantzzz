
async function cancelFormHandler(event) {
  event.preventDefault();
  document.location.replace("/");
}

async function addPlantFormHandler(event) {
  event.preventDefault();

  const userSelectPlant = document.querySelector("#select-plant").value.trim();
  const userSelectNickname = document
    .querySelector("#plant-nickname")
    .value.trim();
  const userSelectDPLW = document.querySelector("#last-watered").value.trim();
  const userSelectWfVal = document.querySelector("#wfVal").value.trim();
  const userSelectWfMult = document.querySelector("#wfMult").value.trim();

  console.log(userSelectDPLW);

  if (
    userSelectPlant &&
    userSelectNickname &&
    userSelectDPLW &&
    userSelectWfVal &&
    userSelectWfMult
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


document.querySelector(".cancel").addEventListener("click", cancelFormHandler);

document.querySelector('#edit-form').addEventListener("submit", addPlantFormHandler);
