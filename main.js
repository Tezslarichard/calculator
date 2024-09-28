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
function calculate() {
    try {
        const expression = display.value.replace(/²/g, '**2');
        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}

// Négyzetre emelés
function square() {
    const currentValue = display.value;
    if (currentValue) {
        display.value += "²";
    }
}

// Törlés gomb

function deleteLastValue() {
    display.value = display.value.slice(0, -1);
  }

