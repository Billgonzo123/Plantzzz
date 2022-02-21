// This will add the image related to what is selected in the form
var selectPlant = document.querySelector("#select-plant");

selectPlant.addEventListener("change", function () {
  let plantName = selectPlant.options[selectPlant.selectedIndex].text;

  plantName = plantName.replace(/ /g, "_").toLowerCase();

  document.querySelector("#plant-image").src = `/assets/img/${plantName}.jpg`;
});