const nombre = document.querySelector("#nombre");
const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");
const genero = document.querySelector("#genero");


form.addEventListener("submit", (event) => {
  event.preventDefault();

    let gen;
    if(genero.value=="hombre")
        gen = "Sr.";
    if (genero.value=="mujer")
        gen = "Sra. ";
  div.innerHTML = "<p> hola " + gen + nombre.value + "</p>";
});