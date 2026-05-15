
// Tämä on menu näkymä kun leveys pienenee
function toggleMenu(){
const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

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

//TUTUSTU TARKEMMIN
// Alustetaan Lenis

console.log("Lenis-testi");

const lenis = new Lenis({
  lerp: 0.08,   // Kuinka kauan rullaus liukuu (sekunteina)
  smoothWheel: true  // Aktivoi hiiren rullan pehmennyksen
});

// Pidetään rullaus käynnissä jokaisessa ruudunpäivityksessä
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);