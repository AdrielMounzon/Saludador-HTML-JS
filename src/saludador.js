const nombre = document.querySelector("#nombre");
const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");
const genero = document.querySelector("#genero");
const edad = document.querySelector("#edad")


form.addEventListener("submit", (event) => {
  event.preventDefault();

    let gen;
    if(genero.value=="hombre")
    {
      if(edad.value<35)
        gen = "Joven "
      else
      gen = "Sr. ";
    }
    if (genero.value=="mujer")
    {
      if(edad.value<35)
        gen = "Srta.  "
      else
      gen = "Sra. ";
    }
  div.innerHTML = "<p> Hola " + gen + nombre.value + "</p>";
});