function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 const modalBackground = document.getElementById("modalBackground");
 const modalBtn = document.getElementById("modalBtn");
 const span = document.getElementsByClassName("close")[0];
 
 
 const handleDisplay = (value) => {
     if (value == 'open')
         modalBackground.style.display = "block";
     else if(value == 'close')
         modalBackground.style.display = "none";
     else if(value.target == modalBackground)
         modalBackground.style.display = "none";
 }
 
 
 modalBtn.addEventListener("click",()=>{handleDisplay('open')});
 span.addEventListener("click",()=>{handleDisplay('close')});
 window.addEventListener("click", ()=>{handleDisplay(event)});
 