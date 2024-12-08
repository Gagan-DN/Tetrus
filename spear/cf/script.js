// Created Using Easy HTML v1.4.8
// https://play.google.com/store/apps/details?id=ak.andro.easyhtml

/*********General library start**********/
/*main start*/
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
/*********General library end**********/
/*header start*/
/* menubar data start*/
var json_nav_item_overview = [
  {
    title:
    "Home",
    href: "",
    fa_fa_fonts:
    "fa fa-home"
  }
  ,
  {
    title:
    "Community",
    href: "",
    fa_fa_fonts:
    "fa fa-users"
  }
  ,
  {
    title:
    "Data base",
    href: "",
    fa_fa_fonts:
    "fa fa-database"
  }
  ,
  {
    title:
    "Dynamic Links",
    href: "",
    fa_fa_fonts:
    "fa fa-link"
  }
  ,
  {
    title:
    "Test lab",
    href: "",
    fa_fa_fonts:
    "fa fa-mobile"
  }
  ,
  {
    title:
    "Resources",
    href: "",
    fa_fa_fonts:
    "fa fa-folder"
  }
  ,
  {
    title:
    "Converters",
    href: "",
    fa_fa_fonts:
    "fa fa-exchange-alt"
  }
  ,
  {
    title:
    "Data structure",
    href: "",
    fa_fa_fonts:
    "fa fa-database"
  }
  ,
  {
    title:
    "Chat bots",
    href: "",
    fa_fa_fonts:
    "fa fa-comments"
  }
  ,
  {
    title:
    "Voice assistent",
    href: "",
    fa_fa_fonts:
    "fa fa-microphone"
  }
];
var json_web_devlop=[
  {
    title:
    "Loaders",
    href: "",
    fa_fa_fonts:
    "fa fa-"
  }
  ,
  {
    title:
    "Registration/Login(signup)",
    href: "",
    fa_fa_fonts:
    "fa fa-"
  }
  ,
  {
    title:
    "Basic html format",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
];
var json_head_section=[
  {
    title:
    "Page title",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Meta tags",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Linkers",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Favicon",
    href: "",
    fa_fa_fonts:
    "farfa-line-chart"
  }
];
var json_body_section=[
  {
    title:
    "Body configuration",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Body tepmlates",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
];
var json_header_section=[
  {
    title:
    "Branding/logo",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Title/Heading",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Font styles",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Navigation/menu bars",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Search bars",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "day/night mode",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Notification tags",
    href: "",
    fa_fa_fonts:
    "farfa-line-chart"
  }
];
var json_main_section=[
  {
    title:
    "Tags",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Sections/Partitions",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "pop up",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Background",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Paragraphs",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Thoughts",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Quotations",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Articals",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Ad space",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Line breakers",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Tables",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Images",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Videos",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Audio",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Image resources",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Video resource",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Audio resources",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Forms",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Inputs",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Buttons",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Scroller Notification",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Color picker",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Hover effects",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Onclick effects",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Onload effects",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Special effects",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Event attributes",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Css animations",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Emojes",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Stickers",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "fa fa-web icons",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "HTML Tags",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "CSS Styles",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "JS Functions",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "PHP Functions",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Prgoressive bars",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Animated logos",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Clocks/Watches",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Calendars",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Iframes",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Link",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Browser resizing",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Special charecters",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Social media icons",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Icons",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Comments",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Comments &#38; Reviews",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Comments &#38; Reviews resources",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Contact forms",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Terms &#38; conditions",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Privacy policy",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Copyright",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Display adjustments",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Devices view set",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
];
var json_footer_section=[  
  {
    title:
    "About us",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Contact us",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Social media links",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Contact forms",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Speical partners",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Visitor countes",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Terms &#38; conditions",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Privacy policy",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
  ,
  {
    title:
    "Copyright",
    href: "",
    fa_fa_fonts:
    "fa fa-line-chart"
  }
];
var json_web_templates=[
  {
    title:
    "Responives templates",
    href: "",
    fa_fa_fonts:
    "fa fa-file"
  }
];
var json_Data_storage=[{
  title:
  "Data storage",
  href: "",
  fa_fa_fonts:
  "fa fa-database"
}
                      ];
var json_Hosting=[{
  title:
  "Hosting",
  href: "",
  fa_fa_fonts:
  "fa fa-globe"
}
                 ];
var json_About_us=[{
  title:
  "About us",
  href: "",
  fa_fa_fonts:
  "fas fa-users"
}
                  ];
var json_contact_us=[{
  title:
  "Contact  us",
  href: "",
  fa_fa_fonts:
  "fa fa-address-card"
}
                    ];
var json_feedback=[{
  title:
  "Review",
  href: "",
  fa_fa_fonts:
  "fa fa-star"
}
                   ,
                   {
                     title:
                     "Queries",
                     href: "",
                     fa_fa_fonts:
                     "fa fa-question-circle"
                   }
                  ];
var nav_overview="";
var web_devlop="";
var head_section="";
var body_section="";
var header_section="";
var main_section="";
var footer_section="";
var web_templates="";
var Data_storage="";
var Hosting="";
var About_us="";
var contact_us="";
var feedback="";
for (let i of json_nav_item_overview){
  nav_overview+= 
    `<a href="${i.href}
">
<div class="nav__item overview">
<i class="${i.fa_fa_fonts}
" aria-hidden="true">
</i>
<span>${i.title}
</span>
</div>
</a>`;
}
for (let i of json_web_devlop)
  web_devlop += 
    `<a href="${i.href}
">
<div class="nav__item">
<i class="${i.fa_fa_fonts}
" aria-hidden="true">
</i>
<span>${i.title}
</span>
</div>
</a>`;
;
for (let i of json_head_section)
  head_section += 
    `<a href="${i.href}
">
<div class="nav__item">
<i class="${i.fa_fa_fonts}
" aria-hidden="true">
</i>
<span>${i.title}
</span>
</div>
</a>`;
for (let i of json_body_section)
  body_section += 
    `<a href="${i.href}
">
<div class="nav__item ">
<i class="${i.fa_fa_fonts}
" aria-hidden="true">
</i>
<span>${i.title}
</span>
</div>
</a>`;
for (let i of json_header_section)
  header_section += 
    `<a href="${i.href}
">
<div class="nav__item">
<i class="${i.fa_fa_fonts}
" aria-hidden="true">
</i>
<span>${i.title}
</span>
</div>
</a>`;
for (let i of json_main_section)
  main_section += 
    `<a href="${i.href}
">
<div class="nav__item">
<i class="${i.fa_fa_fonts}
" aria-hidden="true">
</i>
<span>${i.title}
</span>
</div>
</a>`;
for (let i of json_footer_section)
  footer_section += 
    `<a href="${i.href}
">
<div class="nav__item">
<i class="${i.fa_fa_fonts}
" aria-hidden="true">
</i>
<span>${i.title}
</span>
</div>
</a>`;
for (let i of json_web_templates)
  web_templates += 
    `<a href="${i.href}
">
<div class="nav__item">
<i class="${i.fa_fa_fonts}
" aria-hidden="true">
</i>
<span>${i.title}
</span>
</div>
</a>`;
for (let i of json_Data_storage)
  Data_storage += 
    `<a href="${i.href}
">
<div class="nav__item">
<i class="${i.fa_fa_fonts}
" aria-hidden="true">
</i>
<span>${i.title}
</span>
</div>
</a>`;
for (let i of json_Hosting)
  Hosting += 
    `<a href="${i.href}
">
<div class="nav__item ">
<i class="${i.fa_fa_fonts}
" aria-hidden="true">
</i>
<span>${i.title}
</span>
</div>
</a>`;
for (let i of json_About_us)
  About_us += 
    `<a href="${i.href}
">
<div class="nav__item ">
<i class="${i.fa_fa_fonts}
" aria-hidden="true">
</i>
<span>${i.title}
</span>
</div>
</a>`;
for (let i of json_contact_us)
  contact_us += 
    `<a href="${i.href}
">
<div class="nav__item">
<i class="${i.fa_fa_fonts}
" aria-hidden="true">
</i>
<span>${i.title}
</span>
</div>
</a>`;
for (let i of json_feedback)
  feedback += 
    `<a href="${i.href}
">
<div class="nav__item ">
<i class="${i.fa_fa_fonts}
" aria-hidden="true">
</i>
<span>${i.title}
</span>
</div>
</a>`;
var nav_menu=nav_overview+
    `<label class="nav__label">web develop
</label>`+
    web_devlop +
    `<label class="nav__label">head section
</label>`+
    head_section+
    `<label class="nav__label">body section
</label>`+
    body_section+
    `<label class="nav__label">Header
</label>`+
    header_section+
    `<label class="nav__label">Main
</label>`+
    main_section+
    `<label class="nav__label">footer section
</label>`+
    footer_section+
    `<label class="nav__label">web templates
</label>`+
    web_templates+
    `<label class="nav__label">Data storage
</label>`+
    Data_storage+
    `<label class="nav__label">Hosting
</label>`+
    Hosting+
    `<label class="nav__label">About us
</label>`+
    About_us+
    `<label class="nav__label">contact us
</label>`+
    contact_us+
    `<label class="nav__label">feedback
</label>`+
    feedback;
/* menubar data end*/
/*header menu start*/
function header(){
  /*nav start*/
  var navigation=`
<div class="top-bar">
<i class="nav__toggle fa fa-bars" aria-hidden="true">
</i>
<img class="logo__icon" src="https://www.youshe.id/favicon.ico">
<!--img class="logo__text" src="https://blogger.googleusercontent.com/img/a/AVvXsEike5pXQzGJhqq26mKDZ1H7Ph-jcZFV2pOymZgcuDTBVmnP1r4e7eePxWPr2rX7grUzidLGYgeU6Z5KkoRqmVx1CfopQx7AZua6uksdyGKf5iyGA7gHNGxtbgHEnQ_9hWTI058K8DYQ-thc2PsiIpnApWcygBXNg28h6sI_bqheG9hHmuIVFoEX67yo"-->
<strong>
<a href="https://cdpn.io/pen/debug/bGmYVjM?authentication_hash=LDAmdRyDjnEr">SE
<span>OR
</span>
</a>
</strong>
</div>
<div class="mobile-mask">
</div>
<nav class="nav">
<div class="m-logo">
<img class="logo__icon" src="https://www.youshe.id/favicon.ico">
<!--img class="logo__text" src="https://blogger.googleusercontent.com/img/a/AVvXsEike5pXQzGJhqq26mKDZ1H7Ph-jcZFV2pOymZgcuDTBVmnP1r4e7eePxWPr2rX7grUzidLGYgeU6Z5KkoRqmVx1CfopQx7AZua6uksdyGKf5iyGA7gHNGxtbgHEnQ_9hWTI058K8DYQ-thc2PsiIpnApWcygBXNg28h6sI_bqheG9hHmuIVFoEX67yo"-->
<strong>SE
<span>OR
</span>
</strong>
</div>
</nav>
<div class="nav-footer">
<i class="fa fa-angle-left" aria-hidden="true">
</i>
</div>
`;
  get_set_all_class_plus("main_header",navigation);
  get_set_all_class_plus("nav",nav_menu);
  /*var header= document.getElementsByClassName("main_header");
  for(let i=0;i<header.length;i++){
    header[i].innerHTML=navigation;
  }*/
  /*nav end*/
  //nav
  /*var nav = document.getElementsByClassName("nav");
  for(let i=0;i<nav.length;i++){
    nav[i].innerHTML+=nav_menu;
  }
  ;*/
  //display flyout mobile-menu
  $(".nav__toggle").on("click", function () {
    $(".nav, .mobile-mask").toggleClass("show");
  }
                      );
  $(".mobile-mask").on("click", function () {
    $(".nav, .mobile-mask").removeClass("show");
  }
                      );
  /* header menu function end*/
  /*header end*/
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
  get_set_all_class("main_main",main_frame);
}
/*  main function end*/
  main();
  /*heading start*/
//   const title = document.querySelector("title");
  //var title=document.getElementById("page_title");
  document.getElementById("page_heading").innerHTML=title.text;
  /*heading end*/
  //search tech start
  const f = document.getElementById('search_form');
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
}
/*main end*/
header();
main();
