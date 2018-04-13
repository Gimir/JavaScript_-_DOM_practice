var demo = document.getElementById("demo");
var h = document.getElementsByTagName("h1");
demo.innerHTML = "Hello World";
demo.onclick = function() {
  if (demo.style.color == "green") demo.style.color = "red"
  else demo.style.color = "green"
}
for (let i = 0; i < h.length; i++) {
  h[i].innerHTML = "BOOOMM!!!"
}
