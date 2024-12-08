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

  /*content section start*/
 // button st
 function btn(type,btn_name,action,u_id,classs){
    var button=`<button type="`+type+`id="`+u_id+`" onclick=`+action+` class="`+classs+`">`+btn_name+`</button>`;
    return button;
  }
  // button end
  /*texto copy start*/
  /*text copy end*/


 /*Section partion start*/
 var content_space=`
 <div class="top_section"></div>
 <div class="buttom_section"></div>
 `;
 get_set_all_class("content-area",content_space);

  var section=`
 <div class="lhs">
</div>
<div class="rhs">
</div>
  `;
 get_set_all_class("buttom_section",section);
  /*Section partion end*/


  /*rhs Section partion start*/
 var rhs_container=`
 <div class="custamise_section"></div>
 <div class="code_section"></div>
 `;
 get_set_all_class("rhs",rhs_container);

  /*var section=`
 <div class="lhs">
</div>
<div class="rhs">
</div>
  `;
 get_set_all_class("buttom_section",section);
  /*rhs Section partion end*/
   /*Section partion start fo1 lf1*/
   /*var lf1_container=`
   <div class="lf1-container"></div>
   `;
   get_set_all_class("lf1",lf1-container);
   /*Section partion end*/


   /*content section end*/