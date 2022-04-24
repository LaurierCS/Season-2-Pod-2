(() => {
  const nav = document.getElementsByTagName("nav")[0];
  const navOffset = nav.offsetTop;

  window.addEventListener("scroll", () => {
    if (window.scrollY > navOffset + 200) {
      if (nav.classList.contains("bg-transparent")) {
        nav.classList.remove("bg-transparent");
        nav.classList.add("bg-dark");
      }
    } else {
      if (nav.classList.contains("bg-dark")) {
        nav.classList.remove("bg-dark");
        nav.classList.add("bg-transparent");
      }
    }
  });
})();


