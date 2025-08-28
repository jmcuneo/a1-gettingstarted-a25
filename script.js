document.getElementById("myButton").addEventListener("click", () => {
  alert("Hello");
});

const colors = [
  "#DBB804",
  "#DB6004",
  "#DB8404",
  "#DBD200"
];

let i = 0;

document.getElementById("homeButton").addEventListener("click", () => {
  document.getElementById("homeButton").style.backgroundColor = colors[i%4];
  i++;
});