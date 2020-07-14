[...document.querySelectorAll(".banner")].map((e) => {
  e.style.animationDelay = `${2 + Math.random() * 1.5}s`;
});

