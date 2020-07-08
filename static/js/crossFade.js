[...document.querySelectorAll(".banner")].map((e) => {
  console.log(e)
  console.log(`${2 + Math.random() * .5}s`)
  e.style.animationDelay = `${2 + Math.random() * 1.5}s`;
});

