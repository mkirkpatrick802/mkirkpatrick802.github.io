const filler = document.querySelector(".ProjectFiller");

function Menu(x) {
  x.classList.toggle("change");
  var drop = document.getElementById("myDropdown");
  if (drop.style.display === "block")
  {
    drop.style.display = "none";
  }
  else
  {
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

const project = document.querySelectorAll(".project");
const blackout = document.querySelector(".BlackOut");
isClicked = false;

project.forEach(item =>{
  item.addEventListener("mouseenter", () =>{
    item.querySelector("video").play();
    item.querySelector(".text").classList.remove("active");
  })
});

project.forEach(item =>{
  item.addEventListener("mouseleave", () =>{
    if (!isClicked)
    {
      item.querySelector("video").pause();
      item.querySelector(".text").classList.add("active");
    }
  })
});

project.forEach(item =>{
  item.addEventListener("click", () =>{
    if(!isClicked)
    {
      item.querySelector("video").classList.add("sized")
      item.querySelector("video").play();
      item.querySelector(".text").classList.remove("active");
      blackout.classList.add("active");
    }
    else
    {
      item.querySelector("video").classList.remove("sized")
      item.querySelector("video").pause();
      item.querySelector(".text").classList.add("active");
      blackout.classList.remove("active");
    }

    isClicked = !isClicked;
  })
});
