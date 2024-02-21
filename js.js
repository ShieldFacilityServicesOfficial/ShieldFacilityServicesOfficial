const cursor = document.getElementById("cursor");
let lastMouseX = 0; // Store the last mouse X position
let lastMouseY = 0; // Store the last mouse Y position

function updateCursor() {
  const x = lastMouseX - cursor.clientWidth / 2 + window.scrollX;
  const y = lastMouseY - cursor.clientHeight / 2 + window.scrollY;

  cursor.style.transform = `translate(${x}px, ${y}px)`;
}

function handleMouseMove(e) {
  lastMouseX = e.clientX;
  lastMouseY = e.clientY;
  updateCursor();
  cursor.style.opacity = 1;
}

function handleMouseLeave() {
  cursor.style.opacity = 0;
}

function handleScroll() {
  updateCursor(); // Update cursor position on scroll
}


window.addEventListener("mousemove", handleMouseMove);
window.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("scroll", handleScroll);

const nav = document.querySelector('.navContainer');
const h1Top = document.querySelector('h1').offsetTop;

function updateNavbarBackground() {
  if (window.scrollY >= h1Top - nav.offsetHeight) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
}
