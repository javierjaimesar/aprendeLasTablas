let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

const sonido = document.getElementById("sonidos")

const inputResultado = document.getElementById("resultado");
const inputResultado1 = document.getElementById("resultado1");
const button = document.getElementById("button");
const div = document.getElementById("div");
const otraVez = document.getElementById("otraVez");
const otraVez1 = document.getElementById("otraVez1");
const comprobar = document.getElementById("comprobar");
const table = document.getElementById("table")

const tabla = [];

function random() {
    num1.value = Math.floor(Math.random() * (9 - 1) + 1);
    num2.value = Math.floor(Math.random() * (9 - 1) + 1);
    inputResultado.focus();
}

function intento() {
    comprobar.style.display = "block";
    button.style.display = "inline";
    otraVez.innerHTML = "";
    div.innerHTML = "";
    inputResultado.value = "";
    otraVez1.innerHTML = "";
    random();
    inputResultado.style.display = "inline"
    inputResultado1.style.display = "none"
    inputResultado.focus();
}

function correcto() {
    sonido.innerHTML = `<audio autoplay><source src="./audio/CORRECTO.mp3" type="audio/mp3"></audio>`;
    div.innerHTML = `<h3>Correcto!!!🎉</h3>`;
    otraVez1.innerHTML = `<button class="btn btn-success" id="button">Otra vez!!</button>`;
    otraVez.innerHTML = "";
    comprobar.style.display = "none";
    button.style.display = "none";
    table.innerHTML = "";
    inputResultado1.value = inputResultado.value;
    inputResultado1.style.display = "inline";
    inputResultado.style.display = "none";
}

function intentar() {
    resultadoCorrecto = inputResultado.value;
    if (inputResultado.value == "") {
        inputResultado.focus();
        alert("Ingresa un numero :)");
    } else {
        const result = parseInt(num1.value) * parseInt(num2.value);
        const resultado = parseInt(inputResultado.value);
        if (result == resultado) {
            correcto();
            inputResultado1.focus();
            inputResultado1.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') {
                    intento();
                }
            });

        } else {
            inputResultado.blur();
            inputResultado1.blur();
            sonido.innerHTML = `<audio autoplay><source src="./audio/INCORRECTO.mp3" type="audio/mp3"></audio>`;
            div.innerHTML = `<h3>Incorrecto😢</h3>`;
            otraVez.innerHTML = `<button class="btn btn-danger" id="button">Prueba de nuevo!</button>`;
            comprobar.style.display = "none";
            button.style.display = "none";
            const number = parseInt(num1.value);
            table.innerHTML = "";
            for (let i = 1; i < 11; i++) {
                tabla[i] = `
                <tr>
                    <th> ${number} </th>
                    <th> x </th>
                    <th> ${i} </th>
                    <th> = </th>
                    <th> ${number * i} </th>
                </tr>`;
                table.innerHTML += tabla[i];
            }
            inputResultado.value = "";
        }
    }
}

inputResultado1.style.display = "none"

random();


button.addEventListener("click", intentar);
inputResultado.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        intentar();
    }
});


otraVez.addEventListener("click", () => {
    const result = parseInt(num1.value) * parseInt(num2.value);
    const resultado = parseInt(inputResultado.value);
    if (inputResultado.value == "") {
        inputResultado.focus();
        alert("Ingresa un numero :)");
    } else if (result == resultado) {
        correcto();
    } else {
        sonido.innerHTML = `<audio autoplay><source src="./audio/INCORRECTO.mp3" type="audio/mp3"></audio>`;
        inputResultado.value = "";
    }
});

otraVez1.addEventListener("click", () => {
    intento();
})