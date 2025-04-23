var project = document.querySelectorAll(".project");
var blackout = document.querySelector(".blackout");
var body = document.getElementById("body");
var clickedProject, isClicked;

project.forEach(item =>{
  item.addEventListener("mouseenter", () =>{
    if (!blackout.classList.contains("active"))
    {
      item.querySelector("video").play();
      item.querySelector(".text").classList.remove("active");
    }
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
    if (isClicked) return;

    clickedProject = item;
    clickedProject.querySelector("video").classList.add("sized");
    clickedProject.querySelector("video").play();
    clickedProject.querySelector(".text").classList.remove("active");
    clickedProject.style.pointerEvents = "none";
    body.style.overflow = "hidden";

    blackout.classList.add("active");
    blackout.style.pointerEvents = "all";
    blackout.style.cursor = "pointer";
    isClicked = true;
  })
});

blackout.addEventListener("click", () =>{
  clickedProject.querySelector("video").classList.remove("sized");
  clickedProject.querySelector("video").pause();
  clickedProject.querySelector(".text").classList.add("active");
  clickedProject.style.pointerEvents = "all";
  body.style.overflow = "auto";

  blackout.classList.remove("active");
  blackout.style.pointerEvents = "none";
  blackout.style.cursor = "default";
  isClicked = false;
})
