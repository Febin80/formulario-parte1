const claro=document.getElementById('claro');

const contraste=document.getElementById('contraste');

function cambiarColor(){
    document.documentElement.removeAttribute("data-theme");
    document.body.classList.remove("contraste"); 
  }

function cambiarContraste(){

    document.documentElement.setAttribute("data-theme", "contraste");
  document.body.classList.add("contraste"); 
}

claro.addEventListener("click",cambiarColor);


contraste.addEventListener("click",cambiarContraste);

const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
  const campos = form.elements;
  for (const campo of campos) {
    if (campo.type === 'text' && campo.value.trim() === '') {
      e.preventDefault();
      alert('Por favor, complete todos los campos');
      break;
    }
  }
});


