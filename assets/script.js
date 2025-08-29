document.addEventListener("DOMContentLoaded", () => {
  const headings = document.querySelectorAll("h2");
  headings.forEach((h2, index) => {
    setTimeout(() => {
      h2.classList.add("fade-in");
    }, index * 500);
  });
});
