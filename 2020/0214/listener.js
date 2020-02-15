function digitando(e)
{
  document.getElementById("digit").textContent = this.value;  
}

function events()
{
  document.getElementById("txtbox").addEventListener("keypress", digitando, false);
}
