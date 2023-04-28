/*const headerMainE1 = document.getElementsByClassName("header-link");
const header4 = document.getElementById("contact-container");
const bodyE1= document.getElementById("main-body");

console.log(bodyE1);
function contact(){
  
   console.log(header4);
}
function showNave(){
   headerMainE1.style.display="none";
}
*/
let dropdown = document.getElementById("dropdown-container");
let dropdownMain = document.getElementById("header-links");
dropdown.style.display="none";
let x=2
function dropdownimg(){
  if(x%2==0){
   dropdown.style.display="block";
  x--;
  }else{
   dropdown.style.display="none";
   x++;
  }
}