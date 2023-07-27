// Navigation menu
var menu = document.querySelector('.hamburger-menu');
var deNav = document.querySelector('.toonMenu');
var toggleOff = document.querySelector('.toggle-off');

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
    var reveals = document.querySelectorAll(".revealer");
    
    for (var i = 0; i < reveals.length; i++){
      //windowHeight is de hoogte van de viewport
      var windowHeight = window.innerHeight;
      //elementTop is de afstand van de geselecteerde element vanaf bovenaan de viewport of de lengte dat er is gescrollt 
      var elementTop = reveals[i].getBoundingClientRect().top;
      //elementVisible is de hoogte wanneer het element wordt getoond aan de gebruiker
      var elementVisible = 150;
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

/* Bronnen lijst 
Chat GPT & 

*/