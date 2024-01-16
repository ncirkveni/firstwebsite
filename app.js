let originalName = document.querySelector("#firstName");
let originalSurname = document.querySelector("#lastName");
let novoIme = document.querySelector("#reversedName");
let novoPrezime = document.querySelector("#reversedSurname");
let shiba = document.querySelector("#doge");
let pocetak = document.querySelector("#start");

function proba() {
  novoIme.textContent = originalName.value
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
  novoPrezime.textContent = originalSurname.value
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
  shiba.innerHTML = "<img src='public/doge.jpeg' />";
  pocetak.textContent = "Your new name is ";
}
document.getElementById("submit").addEventListener("click", proba);
