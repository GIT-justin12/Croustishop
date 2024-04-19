// Détecter lorqu'on scroll
window.onscroll = function() { sticky() };

// Recuperer les elements 
let header = document.getElementById('sticky-header');
let stickycomponent = header.offsetTop;

//Faire la fonction
function sticky() {
    if (window.pageYOffset > stickycomponent) {
        header.classList.add("sticky");
    }
    else {
        header.classList.remove("sticky");
    }
}