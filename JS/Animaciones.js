//Agregar class a NAV para el scroll
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    nav.classList.toggle("sticky", window.scrollY > 0);
});
//ScrollReveal
window.sr = ScrollReveal();
//nav
    sr.reveal(".nav_container", {
        duration: 1500,
        origin : "bottom",
        distance : "-100px"

    });
//main
    sr.reveal(".homeCont", {
        duration: 2000,
        origin : "top",
        distance : "-100px"

    });
//conocenos
    sr.reveal(".scroll_conocenos", {
        duration: 3000,
        origin : "bottom",
        distance : "400px"

    });
    sr.reveal(".scroll_conocenos_img", {
        duration: 5000,
        origin : "bottom",
        distance : "400px"

    });
//productos
    sr.reveal(".prod-cont", {
        duration: 4000,
        origin : "bottom",
        distance : "400px"

    });