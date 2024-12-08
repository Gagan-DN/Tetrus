//tab  function start
  /*btn=document.getElementById("toggle_btn");
  btn.onclick(function(){horiver();});*/
  function horiver() {
    document.getElementById("tab_status").classList.toggle("portrait");
    document.getElementById("tab_status").classList.toggle("landscape");
    document.getElementById("tab-mood").classList.toggle("bx-mobile-landscape");
    document.getElementById("tab-mood").classList.toggle("bx-mobile");
  }
//horiver();
  // tab function end