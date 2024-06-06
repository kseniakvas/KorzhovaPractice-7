function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  function mobileHide() {
    var divs = document.querySelectorAll('.flex-nav > div');
    for (var i = 1; i < divs.length; i++) {
    divs[i].style.display = 'none'; 
}
  } 
