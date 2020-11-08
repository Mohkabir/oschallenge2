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


window.onload = function(){

  let getImgWindow = document.querySelector('.bg-img');
  let getTracker1 = document.querySelector('.tracker_1');
  let getTracker2 = document.querySelector('.tracker_2');
  let getTracker3 = document.querySelector('.tracker_3');

  let currentImg = 1;


  setInterval(imgTransform,3000);

  function imgTransform(){
    if(currentImg === 1){
      getImgWindow.setAttribute('src','./images/bg1.jpg');
      getTracker1.style.backgroundColor = '#272727';
      getTracker2.style.backgroundColor = '#686868';
      getTracker3.style.backgroundColor = '#686868';
    }else if(currentImg === 2){
      getImgWindow.setAttribute('src','./images/bg2.jpg');
      getTracker2.style.backgroundColor = '#272727';
      getTracker1.style.backgroundColor = '#686868';
      getTracker3.style.backgroundColor = '#686868';
    }else if(currentImg === 3){
      getImgWindow.setAttribute('src','./images/bg3.jpg');
      getTracker3.style.backgroundColor = '#272727';
      getTracker1.style.backgroundColor = '#686868';
      getTracker2.style.backgroundColor = '#686868';
    }

    currentImg++ ;

    if(currentImg > 3){
      currentImg = 1 ;
    }else if(currentImg < 1){
      currentImg = 3;
    }
  }
  getTracker1.onclick = function(){
    currentImg = 1;
  }
  getTracker2.onclick = function(){
    currentImg = 2;
  }
  getTracker3.onclick = function(){
    currentImg = 3;
  }








  setInterval(textChanger,3000);

  let currentText = 1 ;
  let getChange1 = document.querySelector('.change_1');
  let getChange2 = document.querySelector('.change_2');
  let getChange3 = document.querySelector('.change_3');
  
  let getChangeTracker1 = document.querySelector('.change_tracker1');
  let getChangeTracker2 = document.querySelector('.change_tracker2');
  let getChangeTracker3 = document.querySelector('.change_tracker3');

  
  function textChanger(){
    if(currentText === 1){
      getChange1.style.display = 'block';
      getChange2.style.display = 'none';
      getChange3.style.display = 'none';

      getChangeTracker1.style.backgroundColor = '#ffffff';
      getChangeTracker2.style.backgroundColor = '#686868';
      getChangeTracker3.style.backgroundColor = '#686868';
    }else if(currentText === 2){
      getChange1.style.display = 'none';
      getChange2.style.display = 'block';
      getChange3.style.display = 'none';

      getChangeTracker1.style.backgroundColor = '#686868';
      getChangeTracker3.style.backgroundColor = '#686868';
      getChangeTracker2.style.backgroundColor = '#ffffff';
    }else if(currentText === 3){
      getChange1.style.display = 'none';
      getChange2.style.display = 'none';
      getChange3.style.display = 'block';

      getChangeTracker1.style.backgroundColor = '#686868';
      getChangeTracker2.style.backgroundColor = '#686868';
      getChangeTracker3.style.backgroundColor = '#ffffff';
    }
    currentText++ ;

    if(currentText > 3){
      currentText = 1 ;
    }
  }








}
