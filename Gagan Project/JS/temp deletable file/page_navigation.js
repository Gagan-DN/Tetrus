//gen function start
function get_set_all_class_plus(cls,output){
    var get_set= document.getElementsByClassName(cls);
    for(let i=0;i<get_set.length;i++){
      get_set[i].innerHTML+=output;
    }
  }
  function get_set_all_class(cls,output){
    var get_set= document.getElementsByClassName(cls);
    for(let i=0;i<get_set.length;i++){
      get_set[i].innerHTML=output;
    }
  }
  //gen function start
var nav_button=`
<div class="page_nv_container">
          <a href="">
            <button type="button" class="btn1 upsl">&#60 Prev
            </button>
          </a>
          <h1 class="page_heading">Machime Learnimg
          </h1>
          <a href="">
            <button type="button" class="btn1 upsr">Next &#62
            </button>
          </a>
        </div>
`;
get_set_all_class("top_section",nav_button);