window.addEventListener('load',function()
{
  document.getElementById('tquarto').addEventListener('change', criancaLimite);

  var calc = document.getElementById('calc');
  calc.addEventListener('click', calcular);
});

function criancaLimite()
{
  var check = document.getElementById('tquarto').value;
  var c2 = document.getElementById('c2');
  var c3 = document.getElementById('c3');
  if(check == 139)
  {
    c2.disabled = false;
    c3.disabled = false;
  }

  if(check == 220)
  {
    c2.disabled = false;
    c3.disabled = true;
  }

  if(check == 340)
  {
    c2.disabled = true;
    c3.disabled = true;
  }
}

function calcular()
{
  var nome = document.getElementById('nome').value;
  var tel = document.getElementById('tel').value;
  var dtc = new Date(document.getElementById('dtc').value);
  var dts = new Date(document.getElementById('dts').value);
  var vdiaria = parseInt(document.getElementById('tquarto').value);
  var vadicional = 30 * parseInt(document.getElementById('crianca').value);

  dias = (dts - dtc)/86400000;
  alert("Valor total: " + (vdiaria + vadicional)*dias);
}
