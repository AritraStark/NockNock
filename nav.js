var i=2;
var toggler= document.querySelector(".fas");
toggler.addEventListener("click",function(){
  if(i%2==0)
  {
    var a=document.querySelector(".n1");
    a.classList.add("shadow");
    // a.classList.remove("hidden");

  }
  else{
    var a=document.querySelector(".n1");
    a.classList.remove("shadow");
    // a.classList.add("hidden");
  }
  i++;
});
