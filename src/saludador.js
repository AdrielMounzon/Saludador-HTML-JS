const nombre = document.querySelector("#nombre");
const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");


form.addEventListener("submit", (event) => {
  event.preventDefault();

    let gen;
    if(genero.value=="hombre")
        gen = "Sr. ";
    if (genero.value=="mujer")
        gen = "Sra. ";
  div.innerHTML = "<p> Hola " + gen + nombre.value + "</p>";
});