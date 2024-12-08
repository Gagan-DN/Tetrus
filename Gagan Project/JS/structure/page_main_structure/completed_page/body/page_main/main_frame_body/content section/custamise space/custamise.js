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
var custamise_section=`
  <h2>CUSTAMISE :</h2>
  `;
get_set_all_class("custamise_section",custamise_section);