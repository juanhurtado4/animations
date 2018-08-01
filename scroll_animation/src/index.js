const title = document.querySelector(".title");
const title2 = document.querySelector(".title2");

const animate = () => {
  const ypos = window.pageYOffset;
  title.style.transform = `translateX(${ypos}px)`;
  title2.style.transform = `translateX(-${ypos}px)`;
};

const scroll = () => {
  if (window.pageYOffset) {
    window.requestAnimationFrame(animate);
  }
};

window.addEventListener("scroll", scroll);
