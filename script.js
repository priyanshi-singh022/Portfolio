document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const navbar = document.querySelector(".navbar");

    if (menuIcon && navbar) {
        menuIcon.addEventListener("click", () => {
            navbar.classList.toggle("active");
        });
    } else {
        console.error("Menu icon or navbar not found in the DOM.");
    }
});


document.getElementById('seeMoreBtn').addEventListener('click', () => {
  var more = document.getElementById('moreAboutMe');
  if(more.style.display === 'none') {
    more.style.display = 'block';
    document.getElementById('seeMoreBtn').textContent = 'See Less';
  } else {
    more.style.display = 'none';
    document.getElementById('seeMoreBtn').textContent = 'See More';
  }
});


