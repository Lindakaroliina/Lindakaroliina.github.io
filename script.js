// Alustetaan lenis
const lenis = new Lenis ({
    lerp:0.08, // rullauksen liukuaika
    smoothWheel: true // Aktivoi hiiren pehmennyksen rullauksessa
});

//Rullaus pidetään käynnissä ruudunpäivityksissä
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


// Tämä on menu näkymä kun leveys pienenee
function toggleMenu(){
const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    if (menu && icon) {
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}
}

// Tämä on nuoli, joka seuraa sivun laidassa ja tästä päästään takaisin sivun etusivulle
const scrolltopbtn = document.getElementById('scrolltopbtn');

if (scrolltopbtn) {
    lenis.on('scroll', (e) => {
    if (e.scroll > 100) {
        scrolltopbtn.classList.add('show');
    } else {
        scrolltopbtn.classList.remove('show');
    }
    });
//Rullaa takaisin ylös klikatessa
    scrolltopbtn.addEventListener('click', () => {
       lenis.scrollTo(0);
    });
}



// Tämä on toiminta, joka vaikuttaa cv kohdan tekstiboksin esiintymiseen ja piilottamiseen

//Etsitään otsikko, jota klikataan
const toggleHeaders= document.querySelectorAll('.toggle-work');

toggleHeaders.forEach(header => {
header.addEventListener('click', function(){
    const parent= this.closest('.timeline-content');
    parent.classList.toggle('active');
   }); 
});


// Tämä koodi on timelinen Scroll reveal
const observer= new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            //kun elementti tulee esiin lisätään show-luokka
            entry.target.classList.add('show');
        }
    });
}, {
    threshold:0.6
});

const timelineItems = document.querySelectorAll('.container-left, .container-right');

timelineItems.forEach((item) => {
    observer.observe(item);
});

