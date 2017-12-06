  window.onload = function(){
		typeWriter();

	}

var i = 0;
var txt = '> Hello, world!'; /* The text */
var speed = 200; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("helloworld").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}