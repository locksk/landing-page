$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('body,html').animate({
      scrollTop: $(hash).offset().top
      }, 1200, function(){
      window.location.hash = hash;
     });
     } 
    });
});

var width = $(window).width(); 

window.onscroll = function(){
if ((width >= 900)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#middle").css("background-size","150% auto");
    }else{
        $("#middle").css("background-size","100% auto");        
    }
}
};

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1450);


var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.18) {
    // Show button
    scrollToTopBtn.classList.add("showBtn");
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn");
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);

function magnify(imglink){
  $("#img_here").css("background",`url('${imglink}') center center`);
  $("#magnify").css("display","flex");
  $("#magnify").addClass("animated fadeIn");
  setTimeout(function(){
      $("#magnify").removeClass("animated fadeIn");
  },800);
}

function closemagnify(){
  $("#magnify").addClass("animated fadeOut");
  setTimeout(function(){
      $("#magnify").css("display","none");
      $("#magnify").removeClass("animated fadeOut");
      $("#img_here").css("background",`url('') center center`);
  },800);
}

setTimeout(function(){
  $("#loading").addClass("animated fadeOut");
  setTimeout(function(){
    $("#loading").removeClass("animated fadeOut");
    $("#loading").css("display","none");
  },800);
},1650);

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('body,html').animate({
      scrollTop: $(hash).offset().top
      }, 1800, function(){
      window.location.hash = hash;
     });
     } 
    });
});