$(document).ready(function(){
  $('.menu').click(function(){
    $('.mainNav').slideToggle()
  });

    $('#top').click(function(){
    var userLocation = window.location.href;
  var currentUrl = userLocation.substring(userLocation.lastIndexOf('#')+1);

  if(currentUrl == 'home'){
    $('html, body').animate({
      scrollTop: $('#scroll-' + currentUrl).offset().top
    },1000);
  }
  })
  
});