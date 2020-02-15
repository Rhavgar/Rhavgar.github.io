function ocultar()
{
  x = this.previousElementSibling;
  if (x.style.display != "none")
  {
    x.style.display = "none";
    this.textContent = "Mostrar Conteúdo";
  }
  else
  {
    x.style.display = "";
    this.textContent = "Ocultar Conteúdo"
  }
}

function events()
{
  document.getElementById('enlace_1').addEventListener('click', ocultar, false);
  document.getElementById('enlace_2').addEventListener('click', ocultar, false);
  document.getElementById('enlace_3').addEventListener('click', ocultar, false);
}
