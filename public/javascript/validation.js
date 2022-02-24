//Adds style class to invalid form inputs
const inputs = document.getElementById("edit-form").querySelectorAll("[required]")

inputs.forEach(select => {
  select.addEventListener("invalid", event => {
    select.classList.add("error");
    },
    false
  );
});