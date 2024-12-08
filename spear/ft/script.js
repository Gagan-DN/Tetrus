// Created Using Easy HTML v1.4.8
// https://play.google.com/store/apps/details?id=ak.andro.easyhtml

//iframe display
function display(){
  document.getElementById("dis").contentDocument.open();
  var html=document.getElementById("html").value;
  var css=document.getElementById("css").value;
  var js=document.getElementById("js").value;
  var final=html+css+js;
  // document.querySelector('iframe').contentDocument.write(final);
  document.getElementById("dis").contentDocument.write(final);
  document.getElementById("dis").contentDocument.close();
}
//copy fumction
function copyhtml() {
  const element = document.querySelector('#html');
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
}
function copycss() {
  const element = document.querySelector('#css');
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
}
function copyjs() {
  const element = document.querySelector('#js');
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
}
//search tech start
const f = document.getElementById('form');
const q = document.getElementById('searchwrd');
const google = 'https://www.google.com/search?q=+';
const site = 'toolkifree';
function submitted(event) {
  event.preventDefault();
  const url = google + site + '+' + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}
f.addEventListener('submit', submitted);
//search tech end
//notification start
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var close_btn = document.getElementById("btnc");
// Get the close button element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};
// When the user clicks on close buttno, close the modal
close_btn.onclick = function() {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
//notification end
//day and night mode start
function modechange(){
  var element=document.body;
  element.classList.toggle("dark-mode");
}
//day and night mode end
//menu bar start


/*menu star*/

/*menu end*/


//menu bar end
