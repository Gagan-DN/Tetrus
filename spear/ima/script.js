// Created Using Easy HTML v1.4.8
// https://play.google.com/store/apps/details?id=ak.andro.easyhtml

function html(){
  const html_content='\
<head></head>\
<body></body>\
<script type=“text/javascript” src=""></script>\
';
  const html= document.getElementsByTagName("html");
  for(let i=0;i<html.length;i++){
    html[i].innerHTML=html_content;
  }
}
function head(){
  let title='<title>HTML Elements Reference</title>';
  let base_url='<base href="https://www.w3schools.com/" target="_blank">';
  let link_style='<link rel="stylesheet" href="styles.css">';
  let keywords='<meta name="keywords" content="HTML, CSS, JavaScript">';
  let description='<meta name="description" content="Free Web tutorials for HTML and CSS">';
  let author='<meta name="author" content="John Doe">';
  let ducument_refresh='<meta http-equiv="refresh" content="30">';
  let viewport='<meta name="viewport" content="width=device-width, initial-scale=1.0">';
  let head_script='<script type="text/javascript" src=""></script>';
  const head_content=title+base_url+link_style;
  const head= document.getElementsByTagName("head");
  for(let i=0;i<head.length;i++){
    head[i].innerHTML=head_content;
  }
}
function body(){
  const body_content='\
<header class="main_header">\
</header>\
<main class="main_body">\
<h1>new<\h1></main>\
<footer class="main_footer">\
</footer>\
';
  const body= document.getElementsByTagName("body");
  for(let i=0;i<body.length;i++){
    body[i].innerHTML=body_content;
  }
}
html();
head();
 body();
