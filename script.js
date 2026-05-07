setTimeout(() => {

  document.getElementById("splash").style.display = "none";

  document.getElementById("login").classList.remove("hidden");

}, 2000);

function showHome(){

  document.getElementById("login").style.display = "none";

  document.getElementById("home").classList.remove("hidden");

}
