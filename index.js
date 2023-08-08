let dropdown = document.getElementById("dropdown-container");
let dropdownMain = document.getElementById("header-links");
dropdown.style.display="none";
 


document.getElementById("crosbox").className="d-none";
let x=0;
function dropdownimg(num){
   console.log(num)
   
   x = x+num;
   console.log(x)
  if(x%2){
   document.getElementById("dropbox").className="d-none";
   document.getElementById("crosbox").className="block";

   dropdown.style.display="block";
  }else{
   dropdown.style.display="none";
   document.getElementById("dropbox").className="block";
   document.getElementById("crosbox").className="d-none";
   
}
}
