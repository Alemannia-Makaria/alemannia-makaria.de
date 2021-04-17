const coronaContainer = document.querySelector(".corona-container");
const coronaButton = document.querySelector(".corona-btn");

coronaContainer.classList.add("active");

coronaButton.addEventListener("click", () => {
  coronaContainer.classList.remove("active");
  localStorage.setItem("coronaBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("coronaBannerDisplayed")) {
    coronaContainer.classList.add("active");
  }
}, 1500);
