let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Ouvrir/fermer le menu
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Pour le défilement fluide quand on clique sur un lien
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // empêche le saut brutal
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});

// pour activer automatiquement le lien de navigation selon la section qui est visible
window.addEventListener('scroll', () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            let activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if (activeLink) activeLink.classList.add('active');
        }
    });
});

//Mode sombre / clair
const themeToggle = document.querySelector('#theme-toggle');
const body = document.body;

// Vérifie si un thème est déjà enregistré
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    themeToggle.innerHTML = "<i class='bx bx-sun'></i>";
}

// Quand on clique sur le bouton
themeToggle.onclick = () => {
    body.classList.toggle('light-mode');
    
    // Change l'icône
    if (body.classList.contains('light-mode')) {
        themeToggle.innerHTML = "<i class='bx bx-sun'></i>";
        localStorage.setItem('theme', 'light');
    } else {
        themeToggle.innerHTML = "<i class='bx bx-moon'></i>";
        localStorage.setItem('theme', 'dark');
    }
};
