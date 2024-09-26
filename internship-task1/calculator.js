let temp=document.getElementById('display');
temp.value=0
function calc(input)
{
  if(temp.value==='0')
  {
    temp.value=input;
  }
  else
  {
    temp.value+=input;
  }
}
function total()
{
  try
  {
    temp.value=eval(temp.value);
  }
  catch
  {
    temp.value='ERROR';
  }
}
function backspace()
{
  let r=temp.value;
  r=r.toString().slice(0,-1);
  temp.value=r;
}
function clr()
{
  temp.value=0;
}

