let firstCont = document.querySelector(".list .item-list-one");
let secondCont = document.querySelector(".list .item-list-two");
let firstList = document.querySelector(".item-list .first");
let secondList = document.querySelector(".item-list .second");
let firstImg = document.querySelector("[data-imageOne]");
let secondImg = document.querySelector("[data-imageTwo]");
let closer = document.querySelector("[data-closer]");
let overlay = document.querySelector("[data-overlay]");
let open = document.querySelector(".open")
let mobile = document.querySelector(".mobile");


firstCont.addEventListener ("click", () => {
  firstList.classList.toggle("active");
  secondList.classList.remove("active");
  if(firstList.classList.contains('active')) {
    firstImg.src = "images/icon-arrow-up.svg"
    secondImg.src = "images/icon-arrow-down.svg"
  } else {
    firstImg.src = "images/icon-arrow-down.svg"
  }
});
secondCont.addEventListener ("click", () => {
  secondList.classList.toggle("active");
  firstList.classList.remove("active");
  if(secondList.classList.contains('active')) {
    secondImg.src = "images/icon-arrow-up.svg"
    firstImg.src = "images/icon-arrow-down.svg"
  } else {
    secondImg.src = "images/icon-arrow-down.svg"
  }
});

open.addEventListener("click", () => { 
  overlay.classList.remove("none");
  mobile.classList.add("active");
});

closer.addEventListener("click", () => {
  overlay.classList.add("none");
  mobile.classList.remove("active");
});