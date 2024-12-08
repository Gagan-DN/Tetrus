// Created Using Easy HTML v1.4.8
// https://play.google.com/store/apps/details?id=ak.andro.easyhtml

/*menu function start*/
//display flyout mobile-menu
$(".nav__toggle").on("click", function () {
  $(".nav, .mobile-mask").toggleClass("show");
}
                    );
$(".mobile-mask").on("click", function () {
  $(".nav, .mobile-mask").removeClass("show");
}
                    );
/*menu function end*/
/*heading start*/
const title = document.querySelector("title");
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