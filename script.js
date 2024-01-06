const topbtn = document.getElementById('my-btn')

window.onscroll = function()
{
  scrollfunction();
}

function scrollfunction()
{
  if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
  {
    topbtn.style.display = "block";
  }
  else
  {
    topbtn.style.display = "none";
  }
}

topbtn.addEventListener('click',()=>
{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})