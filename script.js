window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showbackToTopButtonOnScroll()
}

function showbackToTopButtonOnScroll() {
    if(scrollY > 100) {
        document.querySelector("#backToTopButton").classList.add("show")
    } else {
        document.querySelector("#backToTopButton").classList.remove("show")
    }
}


ScrollReveal().reveal('#home h1', { distance: '400px', origin: 'top', duration: 500, easing: 'ease-in-out'});

ScrollReveal().reveal('#services .header', { distance: '200px', origin: 'left', duration: 500, easing: 'ease-in-out'});

ScrollReveal().reveal('#services .first', { distance: '200px', origin: 'right', duration: 500, easing: 'ease-in-out'});

ScrollReveal().reveal('#services .second', { distance: '200px', origin: 'right', duration: 500, delay: 300 ,easing: 'ease-in-out'});

ScrollReveal().reveal(
    '#values .vision, #values .mission, #values .value h2, #localizations header, #localizations .local',
{ distance: '200px', origin: 'bottom', duration: 500 ,easing: 'ease-in-out'});

ScrollReveal().reveal('#values .card', { distance: '200px', scale: 0.5, opacity: 0.5 ,duration: 700, easing: 'ease-in-out'});

