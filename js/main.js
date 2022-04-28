"use strict";

let btns = document.querySelectorAll(".btn"),
value = document.querySelector("span") , counter = 0;
btns.forEach((btn)=>{
btn.addEventListener("click", function(e){
  let types = e.currentTarget.classList;
  if(types.contains("decrease"))
  {
    counter--;
  }
  else if(types.contains("increase"))
{
  counter++;
}
else
{
  counter = 0;
}
value.textContent = counter
if(counter == 0)
{
  value.style.color = "#000"
}
else if(counter < 0)
{
  value.style.color = "red"

}
else
{
  value.style.color = "green"

}
})
})