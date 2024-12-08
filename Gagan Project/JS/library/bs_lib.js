export function get_set_all_class(cls,output){
    var get_set= document.getElementsByClassName(cls);
    for(let i=0;i<get_set.length;i++){
      get_set[i].innerHTML=output;
    }
  }
export function get_set_all_class_pluss(cls,output){
    var get_set= document.getElementsByClassName(cls);
    for(let i=0;i<get_set.length;i++){
      get_set[i].innerHTML+=output;
    }
  }
export function get_set_all_id(id,output){
    var get_set= document.getElementsByClassName(id);
    get_set.innerHTML=output;
  }
export function get_set_all_id_plus(id,output){
    var get_set= document.getElementsByClassName(id);
    get_set.innerHTML+=output;
  }
  /*main end*/
  // button st
export function btn(type,btn_name,action,u_id,classs){
    var button=`<button type="`+type+`id="`+u_id+`" onclick=`+action+` class="`+classs+`">`+btn_name+`</button>`;
    return button;
  }
  // button end
  /*texto copy start*/
  /*text copy end*/