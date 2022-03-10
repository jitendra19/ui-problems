import "./styles.css";

const container = document.getElementById("container");
var wait = false;
function loadImages(numImages = 10) {
  let i = 0;
  while (i < numImages) {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        const img = document.createElement("img");
        img.src = `${data.message}`;
        container.appendChild(img);
      });
    i++;
  }
  if (i >= numImages) {
    wait = false;
  }
}
window.addEventListener("scroll", () => {
  // console.log(window.scrollY); //scrolled from top
  // console.log(window.innerHeight); //visible part of screen
  console.log("value of swait -- ", wait);
  if (
    !wait &&
    window.scrollY + window.innerHeight + 20 >=
      document.documentElement.scrollHeight
  ) {
    console.log("called me");
    wait = true;
    loadImages();
  }
});

loadImages();
