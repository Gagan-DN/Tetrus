// Created Using Easy HTML v1.4.8
// https://play.google.com/store/apps/details?id=ak.andro.easyhtml

//display flyout mobile-menu
$(".nav__toggle").on("click", function () {
  $(".nav, .mobile-mask").toggleClass("show");
});

$(".mobile-mask").on("click", function () {
  $(".nav, .mobile-mask").removeClass("show");
});
