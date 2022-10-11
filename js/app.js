const bg = document.querySelector(".container");

window.addEventListener("mousemove", (e) => {
  let x = e.clientX / 5;
  let y = e.clientY / 5;
  bg.style.backgroundPositionY = y + "px";
  bg.style.backgroundPositionX = x + "px";
});
