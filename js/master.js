function Menu(x) {
  x.classList.toggle("change");
  var drop = document.getElementById("myDropdown");
  if (drop.style.display === "block") {
    drop.style.display = "none";
  } else {
    drop.style.display = "block";
  }
}

function ShowAndHide() {
    var y = document.getElementById('SecretButton')
    var x = document.getElementById('Secret');
    if (x.style.display == 'none') {
        x.style.display = 'block';
        y.style.display = 'none';
    } else {
        x.style.display = 'none';
    }
}
