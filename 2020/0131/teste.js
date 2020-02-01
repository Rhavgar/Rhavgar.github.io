function alerta()
{
  alert("Teste de alerta");
};

function confirma()
{
  confirm("50%");
};

function promptt()
{
  pali = prompt("Ça va?");

  (pali == reverterStr(pali) ? alert("é um pato") : alert("não é um pato"));
};

function reverterStr(str)
{
    return str.split("").reverse().join("");
};

function fatorial(num)
{
  return num <= 0 ? 1 : num*(fatorial(num-1));
};

function fato_prom()
{
  num = parseInt(prompt("fato"));
  alert(fatorial(num));
};
