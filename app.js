var count = 350;
window.onkeydown = function () {
  console.log(event.keyCode);
  var character = document.getElementById("character");
  if (event.keyCode === 39) {
    character.src = "two.gif";
    count = count + 50;
    console.log(count);
    character.style.left = count + "px";
    setTimeout(function () {
      character.src = "one.gif";
    }, 100);
  }
  if (event.keyCode === 37) {
    character.src = "two.gif";
    count = count - 50;
    console.log(count);
    character.style.left = count + "px";
    setTimeout(function () {
      character.src = "one.gif";
    }, 100);
  }
  if (event.keyCode === 65) {
    character.src = "three.gif";
    setTimeout(function () {
      character.src = "one.gif";
    }, 4500);
  }
};