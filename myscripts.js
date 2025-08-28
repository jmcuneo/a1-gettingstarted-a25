const colors = ["#FF5733", "#33FF57", "#3357FF", "#F39C12", "#8E44AD"];
let i = 0;

setInterval(() => {
  document.getElementById("name").style.color = colors[i];
  i = (i + 1) % colors.length;
}, 700);