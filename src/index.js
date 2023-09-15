
import { WishList } from "./wishlist.js";

let makeInput = document.getElementById("makeInput");
let form = document.getElementById("submitForm");
let modelInput = document.getElementById("modelInput");
let yearInput = document.getElementById("yearInput");
let makeDisplay = document.getElementById("car-make");
let modelDisplay = document.getElementById("car-model");
let yearDisplay = document.getElementById("car-year");
let removeBtn = document.querySelector(".removeBtn");
let wishlistUl = document.querySelector("#wishListContainer ul");


let wishlist = new WishList();

function showCarDetails(car) {
  makeDisplay.textContent = car.make;
  modelDisplay.textContent = car.model;
  yearDisplay.textContent = car.year;
  removeBtn.disabled = false;
  removeBtn.setAttribute("data-carId", car.id);
}

function updateDOMList() {
  wishlistUl.innerHTML = "";
  wishlist.list.forEach((car) => {
    const li = document.createElement("li");
    li.textContent = `${car.make} ${car.model}`;
    li.addEventListener("click", () => showCarDetails(car));
    wishlistUl.appendChild(li);
  });
}
  
function addCar(event) {
  
  event.preventDefault();
  
  let make = makeInput.value;
  let model = modelInput.value;
  let year = yearInput.value;
  
  wishlist.add(make, model, year);
  
  
  updateDOMList();
}

function removeCar() {
  let carId = Number(removeBtn.getAttribute("data-carId"));
  wishlist.remove(carId);
  
  updateDOMList();
  
  makeDisplay.textContent = "";
  modelDisplay.textContent = "";
  yearDisplay.textContent = "";
  removeBtn.disabled = true;
}


form.addEventListener("submit", addCar);
removeBtn.addEventListener("click", removeCar);