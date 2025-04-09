
function scrollSlider(direction) {
    const slider = document.getElementById("eventSlider");

    const slide = slider.querySelector(".slide");
    const slideStyles = window.getComputedStyle(slide);
    const slideWidth = slide.offsetWidth + parseInt(slideStyles.marginRight || 20);
  
    slider.scrollBy({
      left: direction * slideWidth,
      behavior: "smooth",
    });
  }
// ___________________________________________

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
const inputs = document.querySelectorAll(".input");
let topbutton = document.getElementById("top");
topbutton.style.display = "none";

// ______________________________


function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode;
    if(this.value == ""){
    parent.classList.remove("focus");
}
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});





const track = document.getElementById("sliderTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
const visibleCards = 3;
const totalCards = document.querySelectorAll(".event-card").length;

function updateSlider() {
  const cardWidth = document.querySelector(".event-card").offsetWidth;
  const moveX = cardWidth * currentIndex;
  track.style.transform = `translateX(-${moveX}px)`;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < totalCards - visibleCards) {
    currentIndex++;
    updateSlider();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

window.addEventListener("resize", updateSlider); // Keep responsive