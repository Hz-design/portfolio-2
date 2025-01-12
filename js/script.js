// Navigation menu
const menu = document.querySelector('.hamburger-menu');
const deNav = document.querySelector('.toonMenu');
const toggleOff = document.querySelector('.toggle-off');

menu.addEventListener('click', toggleMenu);

function toggleMenu(event){
    deNav.classList.toggle('show');
    menu.classList.toggle('open');
    toggleOff.classList.toggle('transparant');
}

toggleOff.addEventListener('click', backHome);

function backHome(event){
    deNav.classList.toggle('show');
    menu.classList.toggle('open');
    toggleOff.classList.toggle('transparant');
}

// DOM elements
const toggle = document.querySelector(".toggle");
const body = document.querySelector("body");

// Function to update the theme toggle based on the current theme
const updateThemeToggle = () => {
    const isDarkTheme = localStorage.getItem("theme") === "dark";
    toggle.checked = isDarkTheme;
};

// Check the browser preferred color scheme, and sets the defaultTheme based on that
const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const defaultTheme = prefersDarkMode ? "dark" : "light";
const preferredTheme = localStorage.getItem("theme");

// Check if the localStorage item is set, if not set it to the default theme
if (!preferredTheme) {
    localStorage.setItem("theme", defaultTheme);
}

// Sets the theme  f the site preferredTheme (based on localStorage)
body.dataset.theme = preferredTheme || defaultTheme;


// Update the theme toggle on page load
updateThemeToggle();

// Theme toggle handler
toggle.addEventListener("click", () => {
    // Check if the saved theme in localStorage is "dark"
    const isDarkTheme = localStorage.getItem("theme") === "dark";
    // Chooses the opposite theme of the current selected one
    const newTheme = isDarkTheme ? "light" : "dark";
    // Changes the theme to the newTheme
    localStorage.setItem("theme", newTheme);
    body.dataset.theme = newTheme;
});

//Functie reveal, wanneer de gebruiker scrollend de viewport binnenkomt wordt er een class toegevoegd aan de element of verwijderd.
function reveal(){
    //hiermee wordt de onderdeel geselecteerd, welk item er gerevealed moet worden.
    let reveals = document.querySelectorAll(".revealer");
    
    for (let i = 0; i < reveals.length; i++){
      //windowHeight is de hoogte van de viewport
      let windowHeight = window.innerHeight;
      //elementTop is de afstand van de geselecteerde element vanaf bovenaan de viewport of de lengte dat er is gescrollt 
      let elementTop = reveals[i].getBoundingClientRect().top;
      //elementVisible is de hoogte wanneer het element wordt getoond aan de gebruiker
      let elementVisible = 150;
      //de if statement zorgt ervoor wanneer de class moet worden toegekend of moet worden verwijderd.
      if(elementTop < windowHeight - elementVisible){
        reveals[i].classList.add("active");
      }
      else{
        reveals[i].classList.remove("active");
      }
    }
  }
  //eventListener zorgt ervoor dat de gebruiker met de scroll beweging de functie activeert.
  window.addEventListener("scroll", reveal);


// Hybrid Scrolling
const stickySections = [...document.querySelectorAll('.sticky_wrap')]

window.addEventListener('scroll', (e) => {
  for(let i = 0; i < stickySections.length; i++){
    transform(stickySections[i])
  }
})

function transform(section) {

  const offsetTop = section.parentElement.offsetTop;

  const scrollSection = section.querySelector('.horizontal_scroll')

  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;

  percentage = percentage < 0 ? 0 : percentage > 300 ? 300 : percentage;

  scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`
}


// Scroll contents on hover show information
const scrollContentPhotos = document.querySelectorAll('.scroll_content-photo');

// Loop through each element and add event listeners
scrollContentPhotos.forEach((photo, index) => {

  photo.addEventListener('mouseover', () => {
    // Show specific information for this photo
      const infoElement = document.querySelector(`#info-${index}`);
      const photoFilter = document.querySelector(`.scroll_content-photo`);
      if (infoElement) {
        scrollContentPhotos[index].classList.remove('filter');
        infoElement.classList.add('visible'); // Make the info visible
      }
  });

  photo.addEventListener('mouseout', () => {
    // Hide the specific information when hover ends
      const infoElement = document.querySelector(`#info-${index}`);
      if (infoElement) {
        scrollContentPhotos[index].classList.add('filter');
        infoElement.classList.remove('visible'); // Hide the info
      }
  });
});