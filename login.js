// Vaihda tähän oma salasana

const PASSWORD = "LindaOksanen2026";

// Funktio joka tarkistaa salasanan

function checkPw() {
    const pw = document.getElementById("pw").value;
    const loginDiv = document.getElementById("login");
    const errorMsg = document.getElementById("error");

    if (pw===PASSWORD) {
        //Tallennetaan  tieto, että ei häitä ulos (sessionStorage)
        sessionStorage.setItem("portfolio_auth", "1");
        // Näytetään sisältö ja piilotetaan login
        document.getElementById("login").style.display = "none";
        document.getElementById("content").style.display = "block";
    }

    else {

        if (errorMsg && loginDiv){
        errorMsg.innerHTML = "Väärä salasana, koita uudestaan!";
        document.getElementById("pw").value = "";

        loginDiv.classList.remove("shake");
        void loginDiv.offsetWidth;
        loginDiv.classList.add("shake");
        }
    }
    }
    
    //Kuunnellaan buttonia kun klikataan
const openBtn= document.getElementById("openBtn");
if (openBtn) {
    openBtn.addEventListener("click", checkPw);
}


// Kuunnellaan Enter näppäintä
    const togglePw = document.getElementById("togglePw");

    const pwInput= document.getElementById("pw");
    if(togglePw && pwInput){
        togglePw.addEventListener("click", function() {
            const type = pwInput.type === "password" ? "text" : "password";
            pwInput.type = type;
            this.textContent = type === "password" ?"katso" : "piilota";
        });
    }

    if (pwInput) {
        pwInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); //Estää lomakkeen lähetyksen
            checkPw(); // kutsuu samaa funktiota kuin button
        }
    });
    }

function checkLoginState() {
    const login= document.getElementById("login");
    const content= document.getElementById("content");

if (login && content && sessionStorage.getItem("portfolio_auth") === "1") {
    login.style.display = "none";
    content.style.display = "block";
}
}


// Valinnainen uloskirjautumisfunktio
function logout() {
    sessionStorage.removeItem("portfolio_auth");
    location.reload(); //päivittää sivun
}

checkLoginState();

