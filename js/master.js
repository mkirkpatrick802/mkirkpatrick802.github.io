function Menu(x) {
  x.classList.toggle("change");
  var drop = document.getElementById("myDropdown");
  if (drop.style.display === "block") {
    drop.style.display = "none";
  } else {
    drop.style.display = "block";
  }
}
