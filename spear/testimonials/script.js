// Created Using Easy HTML v1.4.8
// https://play.google.com/store/apps/details?id=ak.andro.easyhtml

// samplea data
var testiomnialDataList = [
  {
    avatar:
    "https://img.freepik.com/free-photo/woman-with-long-hair-yellow-hoodie-with-word-music-it_1340-39068.jpg",
    name: "Simonette Lindermann",
    review:
    "Mind-blowing discovery! changed my routine. Essential for everyone. A vise advice to all interested. Can't imagine without it!",
    rating:5
  }
  ,
  {
    avatar:
    "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg",
    name: "Merilee Beal",
    review:
    "Unbelievable gem! Altered my life. A must-have now. Wholeheartedly advise it to everyone. An absolute game-changer",
    rating:4
  }
  ,
  {
    avatar:
    "https://img.freepik.com/free-photo/handsome-african-guy-with-stylish-haircut-taking-photo-digital-camera_171337-1345.jpg",
    name: "Suzi Lankester",
    review:
    "Phenomenal addition! Completely transformed my days. Can't go without it. Strongly endorse for all. A game-changer for sure!",
    rating:2
  }
  ,
  {
    avatar:
    "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg",
    name: "Gaston Cunnow",
    review:
    "Amazing product! It changed my life. Can't live without it now. Highly recommended to everyone!",
    rating:4
  }
  ,
  {
    avatar:
    "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
    name: "Marys Lobb",
    review:
    "Life-altering find! Indispensable now. Enthusiastically suggest to all. A game-changer for everyone!",
    rating:2
  }
  ,
  {
    avatar:
    "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
    name: "Marys Lobb",
    review:
    "Life-altering find! Indispensable now. Enthusiastically suggest to all. A game-changer for everyone!",
    rating:1
  }
  ,
  {
    avatar:
    "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
    name: "Marys Lobb",
    review:
    "Life-altering find! Indispensable now. Enthusiastically suggest to all. A game-changer for everyone!",
    rating:5
  }
];
//set2
var testimonial_slide = document.querySelector("#testimonial_container");
for (let i of testiomnialDataList)
{
  testimonial_slide.innerHTML +=` <div class="slide_card"><div class="Testimonial-dis_overview"><div class="Testimonial-display_container"><img src="${i.avatar}
"></div><div class="Testimonial-content_disc"><h3>${i.name}
</h3><div class="rating-box" onload="ratingStar(${i.rating}
)">
<label name="star1" class="orange_star">&starf;\
</label>\
<label name="star2" class="rating_star">&starf;\
</label>\
<label name="star3" class="rating_star">&starf;\
</label>\
<label name="star4" class="rating_star">&starf;\
</label>\
<label name="star5" class="rating_star">&starf;\
</label>
</div>
<p>${i.review}
</p></div></div>`;
}
/*testimonial_slide.innerHTML +=` <div class="slide_card"><div class="Testimonial-dis_overview"><div class="Testimonial-display_container"><img src="${i.avatar}
"></div></div><div class="Testimonial-content_disc"><h3>${i.name}
</h3><div class="rating-box" onload="ratingStar(${i.rating})">
</div>
<p>${i.review}
</p></div></div>`;}*/
//movements;
function ratingStar(rating){
  var slideRating= document.querySelector("#rating-box");
  var stars="";
  if(rating==1){
    var stars=' <label name="star1" class="orange_star">&starf;\
</label>\
<label name="star2" class="rating_star">&starf;\
</label>\
<label name="star3" class="rating_star">&starf;\
</label>\
<label name="star4" class="rating_star">&starf;\
</label>\
<label name="star5" class="rating_star">&starf;\
</label>';
  }
  else if(rating==2){
    var stars=' <label name="star1" class="orange_star">&starf;\
</label>\
<label name="star2" class="orange_star">&starf;\
</label>\
<label name="star3" class="rating_star">&starf;\
</label>\
<label name="star4" class="rating_star">&starf;\
</label>\
<label name="star5" class="rating_star">&starf;\
</label>';
  }
  else if(rating==3){
    var stars=' <label name="star1" class="orange_star">&starf;\
</label>\
<label name="star2" class="orange_star">&starf;\
</label>\
<label name="star3" class="orange_star">&starf;\
</label>\
<label name="star4" class="rating_star">&starf;\
</label>\
<label name="star5" class="rating_star">&starf;\
</label>';
  }
  else if(rating==4){
    var stars=' <label name="star1" class="orange_star">&starf;\
</label>\
<label name="star2" class="orange_star">&starf;\
</label>\
<label name="star3" class="orange_star">&starf;\
</label>\
<label name="star4" class="orange_star">&starf;\
</label>\
<label name="star5" class="rating_star">&starf;\
</label>';
  }
  else if(rating==5){
    var stars=' <label name="star1" class="orange_star">&starf;\
</label>\
<label name="star2" class="orange_star">&starf;\
</label>\
<label name="star3" class="orange_star">&starf;\
</label>\
<label name="star4" class="orange_star">&starf;\
</label>\
<label name="star5" class="orange_star">&starf;\
</label>';
  }
  else{
    var stars=' <label name="star1" class="rating_star">&starf;\
</label>\
<label name="star2" class="rating_star">&starf;\
</label>\
<label name="star3" class="rating_star">&starf;\
</label>\
<label name="star4" class="rating_star">&starf;\
</label>\
<label name="star5" class="rating_star">&starf;\
</label>';
  }
  slideRating.innerHTML=stars;
}
//movements
let slideIndex=1;
showSlides(slideIndex);
//netx & previous controls
function plusSlides(n){
  showSlides(slideIndex+=n);
}
function showSlides(n){
  let i;
  let slides=document.getElementsByClassName("slide_card");
  let slength=slides.length;
  if(n>slength){
    slideIndex=1;
  }
  if(n<1){
    slideIndex=slength;
  }
  for(i=0;i<slength;i++){
    slides[i].style.display="none";
  }
  slides[slideIndex-1].style.display="block";
  setTimeout(showSlides,2000);
}
//sceren touch 
var triggerElementID = null;
// this variable is used to identity the triggering element
var fingerCount = 0;
var startX = 0;
var startY = 0;
var curX = 0;
var curY = 0;
var deltaX = 0;
var deltaY = 0;
var horzDiff = 0;
var vertDiff = 0;
var minLength = 72;
// the shortest distance the user may swipe
var swipeLength = 0;
var swipeAngle = null;
var swipeDirection = null;
// The 4 Touch Event Handlers
// NOTE: the touchStart handler should also receive the ID of the triggering element
// make sure its ID is passed in the event call placed in the element declaration, like:
// <div id="picture-frame" ontouchstart="touchStart(event,'picture-frame');"  ontouchend="touchEnd(event);" ontouchmove="touchMove(event);" ontouchcancel="touchCancel(event);">
function touchStart(event,passedName) {
  // disable the standard ability to select the touched object
  event.preventDefault();
  // get the total number of fingers touching the screen
  fingerCount = event.touches.length;
  // since we're looking for a swipe (single finger) and not a gesture (multiple fingers),
  // check that only one finger was used
  if ( fingerCount == 1 ) {
    // get the coordinates of the touch
    startX = event.touches[0].pageX;
    startY = event.touches[0].pageY;
    // store the triggering element ID
    triggerElementID = passedName;
  }
  else {
    // more than one finger touched so cancel
    touchCancel(event);
  }
}
function touchMove(event) {
  event.preventDefault();
  if ( event.touches.length == 1 ) {
    curX = event.touches[0].pageX;
    curY = event.touches[0].pageY;
  }
  else {
    touchCancel(event);
  }
}
function touchEnd(event) {
  event.preventDefault();
  // check to see if more than one finger was used and that there is an ending coordinate
  if ( fingerCount == 1 && curX != 0 ) {
    // use the Distance Formula to determine the length of the swipe
    swipeLength = Math.round(Math.sqrt(Math.pow(curX - startX,2) + Math.pow(curY - startY,2)));
    // if the user swiped more than the minimum length, perform the appropriate action
    if ( swipeLength >= minLength ) {
      caluculateAngle();
      determineSwipeDirection();
      processingRoutine();
      touchCancel(event);
      // reset the variables
    }
    else {
      touchCancel(event);
    }
  }
  else {
    touchCancel(event);
  }
}
function touchCancel(event) {
  // reset the variables back to default values
  fingerCount = 0;
  startX = 0;
  startY = 0;
  curX = 0;
  curY = 0;
  deltaX = 0;
  deltaY = 0;
  horzDiff = 0;
  vertDiff = 0;
  swipeLength = 0;
  swipeAngle = null;
  swipeDirection = null;
  triggerElementID = null;
}
function caluculateAngle() {
  var X = startX-curX;
  var Y = curY-startY;
  var Z = Math.round(Math.sqrt(Math.pow(X,2)+Math.pow(Y,2)));
  //the distance - rounded - in pixels
  var r = Math.atan2(Y,X);
  //angle in radians (Cartesian system)
  swipeAngle = Math.round(r*180/Math.PI);
  //angle in degrees
  if ( swipeAngle < 0 ) {
    swipeAngle =  360 - Math.abs(swipeAngle);
  }
}
function determineSwipeDirection() {
  if ( (swipeAngle <= 45) && (swipeAngle >= 0) ) {
    swipeDirection = 'left';
  }
  else if ( (swipeAngle <= 360) && (swipeAngle >= 315) ) {
    swipeDirection = 'left';
  }
  else if ( (swipeAngle >= 135) && (swipeAngle <= 225) ) {
    swipeDirection = 'right';
  }
  else if ( (swipeAngle > 45) && (swipeAngle < 135) ) {
    swipeDirection = 'down';
  }
  else {
    swipeDirection = 'up';
  }
}
function goToNext(){
  plusSlides(-1);
}
function goToPrev(){
  plusSlides(1);
}
function processingRoutine() {
  var swipedElement = document.getElementById(triggerElementID);
  if ( swipeDirection == 'left' ) {
    goToNext();
  }
  else if ( swipeDirection == 'right' ) {
    goToPrev();
  }
  else if ( swipeDirection == 'up' ) {
    goToPrev();
  }
  else if ( swipeDirection == 'down' ) {
    goToNext();
  }
}
