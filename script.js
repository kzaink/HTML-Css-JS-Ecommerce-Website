const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", function () {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", function () {
    nav.classList.remove("active");
  });
}

let MainImage = document.getElementById("MainImage");
let smallimg = document.getElementsByClassName("small-image");

// smallimg[0].onclick = function () {
//   MainImage.src = smallimg[0].src;
// };
// smallimg[1].onclick = function () {
//   MainImage.src = smallimg[1].src;
// };
// smallimg[2].onclick = function () {
//   MainImage.src = smallimg[2].src;
// };
// smallimg[3].onclick = function () {
//   MainImage.src = smallimg[3].src;
// };

for (let i = 0; i < smallimg.length; i++) {
  smallimg[i].onclick = function () {
    MainImage.src = smallimg[i].src;
  };
}
