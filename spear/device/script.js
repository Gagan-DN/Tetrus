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
// iframe dis end
// iphone dis st
var phone='<!--phone views st-->\
<div class="temp-wrapper">\
<div class="px">\
<div class="px__body">\
<div class="px__body__cut"></div>\
<div class="px__body__speaker"></div>\
<div class="px__body__sensor"></div>\
<div class="px__body__mute"></div>\
<div class="px__body__up"></div>\
<div class="px__body__down"></div>\
<div class="px__body__right"></div>\
</div>\
<div class="px__screen">\
<div class="px__screen__">\
<div class="px__screen__frame">\
<!--i display start-->\
<a name="view">\
<iframe onload="display()" src="#" name="preview"  id="dis" class="dis"\
width="273.297px" title="display" >\
</iframe>\
</a>\
<!--i display end-->\
<!--<i class="fa fa-apple"></i>-->\
</div>\
</div>\
</div>\
</div>\
</div>\
<!--phone views ed-->';
// iphone dis ed
//laptop/desktop view st
var desktop='<!--desktop start-->\
    <div class="desktop_container">\
      <div class="desktop-box">\
        <div class="mbp-mockup-wrapper">\
          <div class="mbp-container">\
            <div class="mbp-display with-glare">\
              <div class="display-edge">\
                <div class="bezel">\
                  <div class="display-camera" >\
                  </div>\
                  <div class="display-frame">\
                    <!--display goes here-->\
                    <a name="view">\
                      <iframe onload="display()" src="#" name="preview"  id="dis" class="dis"\
                              width="" title="display" >\
                      </iframe>\
                    </a>\
                  </div>\
                  <div class="below-display">\
                    <div class="macbookpro">\
                    </div>\
                  </div>\
                </div>\
              </div>\
            </div>\
            <div class="mbp-keyboard">\
              <div class="front">\
                <div class="opener-left">\
                </div>\
                <div class="opener-right">\
                </div>\
              </div>\
              <div class="bottom-left">\
              </div>\
              <div class="bottom-right">\
              </div>\
              <div class="mbp-shadow">\
                <div class="shadow-left">\
                </div>\
                <div class="shadow-right">\
                </div>\
              </div>\
            </div>\
          </div>\
        </div>\
      </div>\
    </div>\
    <!--desktop end-->';
//laptop/desktop view ed
// tab view st
var tablet='<!--tab view st-->\
<!--Tab Start -->\
<div class="tab_container">\
<link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">\
<div id="toggle_btn" onclick="horiver()">Switch <i id="tab-mood" class="bx bx-mobile-landscape"></i>\
</div>\
<div class="tab-box">\
<div id="tab_status" class="portrait">\
<div class="tab_frame">\
<div class="tab_camera">\
<div class="camera_eye">\
</div>\
</div>\
<div class="tab_screen">\
<!--       display goes here  -->\
<a name="view">\
<iframe onload="display()" src="#" name="preview"  id="dis" class="dis"\
width="" title="display" >\
</iframe>\
</a>\
</div>\
<div class="tab_label">V-CA\
</div>\
</div>\
</div>\
</div>\
</div>\
<!--Tab end  -->\
<!--tab view ed-->';
//tab  function start
/*btn=document.getElementById("toggle_btn");
btn.onclick(function(){horiver();});*/
function horiver() {
  document.getElementById("tab_status").classList.toggle("portrait");
  document.getElementById("tab_status").classList.toggle("landscape");
  document.getElementById("tab-mood").classList.toggle("bx-mobile-landscape");
  document.getElementById("tab-mood").classList.toggle("bx-mobile");
}
// tab function end
// tab view ed';
//device view function start
function view_of(type_of_view){
  var frame= document.getElementById("dis_view");
  frame.innerHTML=type_of_view;
  display();
}
// device view function end
view_of(desktop);
