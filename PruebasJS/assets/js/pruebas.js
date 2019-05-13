function myFunction3() {
  document.getElementById("demo5").innerHTML = "Escribiendo desde un archivo exterior";
  document.getElementById("demo5").style.fontStyle = "bold";
  document.getElementById("demo5").style.fontSize = "2em";
  document.getElementById("demo5").style.backgroundColor = "black";
  document.getElementById("demo5").style.color = "red";
  document.getElementById("demo5").style.textAlign = "center";
  document.getElementById("demo5").style.padding = "5%";
  document.getElementById("demo5").style.margin = "5%";
}

function outputHtml() {
  document.getElementById("writeHtml").innerHTML = 5+5;
}

function changeMoon() {
  document.getElementById("test").innerHTML.text('Goodbye, Moon!').fadeOut(4000);
}

console.log('x= '+2+' | y='+3);
console.log('x= ' + 2 + ' | y=' + 3);