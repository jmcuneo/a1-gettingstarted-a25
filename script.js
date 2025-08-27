document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header h1");
  const colors = ["#1b263b", "darkgreen", "maroon", "purple"];
  let i = 0;

  setInterval(() => {
    header.style.color = colors[i];
    i = (i + 1) % colors.length;
  }, 1000); // change every 1 second
});
