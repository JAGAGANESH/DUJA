function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function changeArrow(id) {
  if(document.getElementById(id).className=="arrowRight") {
    document.getElementById(id).className="arrowDown";
  }
  else {
    document.getElementById(id).className="arrowRight";
  }
}
