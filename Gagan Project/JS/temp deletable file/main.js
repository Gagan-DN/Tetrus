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


/*main start*/
 
/*  main function start*/
function main(){
    var main_frame=`
  <div class="title-bar">
  <div class="page_type_gif">
  <h2 id="page_heading">Overview
  </h2>
  </div>
  <!--seacrh bar start-->
  <div class="search-box">
  <form id="search_form" autocomplete="on"> 
  <input type="search" id="searchwrd" name="searchwrd" placeholder="Search....">
  <button id="search_btn">
  <i class="fa fa-search">search
  </i>
  </button>
  </form>   
  </div>
  <!--search bar end-->
  </div>
  <div class="content-area">
  <p>Content goes here 
  <i class="fa fa-smile-o" aria-hidden="true">
  </i>
  </p>
  </div>
  `;
    get_set_all_class_plus("main_main",main_frame);
  }
  /*  main function end*/
  main();
    
  /*main end*/