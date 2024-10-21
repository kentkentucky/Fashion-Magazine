//navigation menu
//create variable for hamburger svg
const hamburgerBtn = document.querySelector(".hamburger .bars");
//create variable for menu
const menu = document.querySelector(".hamburger > ul");
//create variable for exit button
const crossBtn = document.querySelector(".hamburger .cross");
//get screenwidth
const screenWidth = window.innerWidth;

//slide menu out when hamburger is clicked
hamburgerBtn.addEventListener("click", () => {
  const visibility = menu.getAttribute("data-visible");
  if (visibility == "false") {
    menu.setAttribute("data-visible", "true");
    const menustyle = document.querySelector(".hamburger");
    menustyle.style.left = "0px";
    hamburgerBtn.style.display = "none";
    crossBtn.style.left = "25vw";
    if (screenWidth <= 560) {
      crossBtn.style.left = "93vw";
    }
  }
});

//close menu when exit button is clicked
crossBtn.addEventListener("click", () => {
  const visibility = menu.getAttribute("data-visible");
  if (visibility == "true") {
    menu.setAttribute("data-visible", "false");
    const menustyle = document.querySelector(".hamburger");
    menustyle.style.left = "-40vw";
    crossBtn.style.left = "-24vw";
    hamburgerBtn.style.display = "initial";
    if (screenWidth <= 560) {
      menustyle.style.left = "-140vw";
      crossBtn.style.left = "-124vw";
    }
  }
});

// add border to selected subscription plan
const priceCols = document.querySelectorAll('.price-col');

priceCols.forEach(plan => {
  plan.addEventListener('click', () => {
    // Remove the 'selected' class from all plans
    priceCols.forEach(col => {
      col.classList.remove('selected');
    });

    // Add the 'selected' class to the clicked plan
    plan.classList.add('selected');
  });
});

// Add click event listeners to toggle the dropdowns
const footerCols = document.querySelectorAll('.footer-col');

footerCols.forEach(col => {
  const header = col.querySelector('h4');

  header.addEventListener('click', () => {
    col.classList.toggle('open');
  });
});