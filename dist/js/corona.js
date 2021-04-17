const coronaContainer = document.querySelector(".corona-container");
const coronaButton = document.querySelector(".corona-btn");

coronaButton.addEventListener("click", () => {
  coronaContainer.classList.remove("active");
  localStorage.setItem("coronaBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("coronaBannerDisplayed")) {
    coronaContainer.classList.add("active");
  }
}, 1500);
