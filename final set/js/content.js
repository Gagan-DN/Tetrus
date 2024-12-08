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
  /*main end*/
  // button st
  function btn(type,btn_name,action,u_id,classs){
    var button=`<button type="`+type+`id="`+u_id+`" onclick=`+action+` class="`+classs+`">`+btn_name+`</button>`;
    return button;
  }
  // button end
  /*texto copy start*/
  /*text copy end*/
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
/*get_set_all_class_plus("content-area",nav_button);*/
  /*Section partion start*/
  var section=`
  <div class="lf1">
  <div class="lf1-container"></div>
  </div>
<div class="rf2">
<div class="rf2-t1"></div>
<div class="rf2-t2"></div>
</div>
  `;
  //get_set_all_class("content-area",section);
  /*Section partion end*/
   /*Section partion start fo1 lf1*/
   /*var lf1_container=`
   <div class="lf1-container"></div>
   `;
   get_set_all_class("lf1",lf1-container);
   /*Section partion end*/