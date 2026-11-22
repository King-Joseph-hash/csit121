function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.querySelector(".open-btn").setAttribute("aria-expanded", "true");
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.querySelector(".open-btn").setAttribute("aria-expanded", "false");
}