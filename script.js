
// Tämä on menu näkymä kun leveys pienenee
function toggleMenu(){
const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

// Vaihda tähän oma salasana

const PASSWORD = "Linda2025";

// Funktio joka tarkistaa salasanan

function checkPw() {
    const pw = document.getElementById("pw").value;

    if (pw===PASSWORD) {
        //Tallennetaan  tieto, että ei häitä ulos (sessionStorage)
        sessionStorage.setItem("portfolio_auth", "1");

        // Näytetään sisältö ja piilotetaan login
        document.getElementById("login").style.display = "none";
        document.getElementById("content").style.display = "block";
    }

    else {
        document.getElementById("err").innerText = "Väärä salasana";
    }
    }
    
    //Kuunnellaan buttonia kun klikataan
document.getElementById("openBtn").addEventListener("click", checkPw);

// Kuunnellaan Enter näppäintä
    document.getElementById("pw").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); //Estää lomakkeen lähetyksen
            checkPw(); // kutsuu samaa funktiota kuin button
        }
    }
);

if (sessionStorage.getItem("portfolio_auth") === "1") {
    document.getElementById("login").style.display = "none";
    document.getElementById("content").style.display = "block";
}

// Valinnainen uloskirjautumisfunktio
function logout() {
    sessionStorage.removeItem("portfolio_auth");
    location.reload(); //päivittää sivun
}
