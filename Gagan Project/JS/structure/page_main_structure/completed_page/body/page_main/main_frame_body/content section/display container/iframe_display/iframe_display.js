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
  display();
