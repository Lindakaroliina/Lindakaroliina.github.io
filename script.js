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

// Tämä on geministä otettu js pätkä jolla sähköposti ominaisuus toimii! tutustu tarkemmin!


document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();

  const form = this;
  const submitBtn = document.getElementById('submitBtn');
  const formStatus = document.getElementById('formStatus');

  submitBtn.disabled = true;
  submitBtn.textContent = 'Lähetetään...';
  
  if (formStatus) {
    formStatus.style.color = '#94a3b8'; // Harmaa latausteksti
    formStatus.textContent = 'Lähetetään viestiä...';
  }

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: new FormData(form)
  })
  .then(async (response) => {
    let json = await response.json();
    if (response.status == 200) {
      if (formStatus) {
        formStatus.style.fontSize = '1.6rem';
        formStatus.style.color = '#102317'; // Kirkas vihreä onnistumiselle
        formStatus.textContent = ' Viestin lähetys onnistui!';
      }
      form.reset();
    } else {
      if (formStatus) {
        formStatus.style.color = '#f87171'; // Kirkas punainen virheelle
        formStatus.textContent = json.message || 'Jotain meni vikaan.';
      }
    }
  })
  .catch(error => {
    if (formStatus) {
      formStatus.style.color = '#f87171';
      formStatus.textContent = 'Verkkovirhe. Yritä uudelleen.';
    }
  })
  .then(() => {
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Lähetä viesti';
      if (formStatus) formStatus.textContent = '';
    }, 5000); // Nostin ajan 5 sekuntiin, jotta käyttäjä ehtii varmasti lukea ilmoituksen
  });
});