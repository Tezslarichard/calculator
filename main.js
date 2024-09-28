// Kijelző elem lekérése
const display = document.getElementById("display"); 

// Bevitel hozzáadása a kijelzőhöz
function appendToDisplay(input){
    display.value += input;
}

// Kijelző törlése
function clearDisplay(){
    display.value = "";
}

// Kifejezés kiszámítása
function calculate(){
    try{
        display.value = eval(display.value);  // Eredmény kiiratása
    }
    catch(error) {
        display.value = "Error"; // Hiba esetén
    }
}

// Négyzetre emelés

function square(){
    try{
        display.value = eval(display.value)**2;
    }catch(error){
        display.value="Error";
    }
}