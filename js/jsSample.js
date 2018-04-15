var demo = document.getElementById("demo");
demo.innerHTML = "Hello World";
function change() {
  if (demo.style.color == "green") demo.style.color = "red"
  else demo.style.color = "green"
}
var box = document.getElementById("box");
function changeColor() {
  if (box.className == "noact") box.className = "act"
  else box.className = "noact"
}
setInterval(changeColor, 1000)

var animate = document.getElementById('animate');
var pos = 0;
var id = setInterval(frame, 5);
function frame(){
  if (pos == 350) clearInterval(id)
  else {
    pos++;
    animate.style.top = pos + 'px';
    animate.style.left = pos + 'px';
  }
}
