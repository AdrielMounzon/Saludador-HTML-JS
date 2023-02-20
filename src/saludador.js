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
    let fechaActual = new Date();
    let horaActual = fechaActual.getHours();
    let saludoHora = "Hola"
    if(horaActual < 12)
      saludoHora = "Buenos días "
    else
    {
      if (horaActual > 12 && horaActual < 20)
        saludoHora = "Buenas tardes "
      else
      saludoHora = "Buenas noches "
    }
  div.innerHTML = "<p>" + saludoHora + gen + nombre.value + "</p>";
});