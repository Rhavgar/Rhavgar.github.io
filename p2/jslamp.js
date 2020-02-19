window.addEventListener('load', function()
{
  document.getElementById('lampada').addEventListener('click', onoff);
});

function onoff()
{
  if(document.getElementById('lampada').value == 1)
  {
    document.getElementById('lampada').src = "lamp_off.gif";
    document.getElementById('lampada').value = 0;
  }
  else
  {
    document.getElementById('lampada').src = "lamp_on.gif";
    document.getElementById('lampada').value = 1;
  }
}
