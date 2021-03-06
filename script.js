$(document).ready(function () {
  $('.menu').click(function () {
    $('.toggle_nav').toggle()
  });

  $('#top').click(function () {
    var userLocation = window.location.href;
    var currentUrl = userLocation.substring(userLocation.lastIndexOf('#') + 1);

    if (currentUrl == 'home') {
      $('html, body').animate({
        scrollTop: $('#scroll-' + currentUrl).offset().top
      }, 1000);
    }
  })

});


window.onload = function () {

  let getImgWindow = document.querySelector('.bg-img');
  let getTracker1 = document.querySelector('.tracker_1');
  let getTracker2 = document.querySelector('.tracker_2');
  let getTracker3 = document.querySelector('.tracker_3');


  let getText1 = document.querySelector('.text1');
  let getText2 = document.querySelector('.text2');
  let getText3 = document.querySelector('.text3');

  let currentImg = 1;





  setInterval(imgTransform, 3000);

  function imgTransform() {
    if (currentImg === 1) {
      getImgWindow.setAttribute('src', './images/bg1.jpg');
      getTracker1.style.backgroundColor = '#272727';
      getTracker2.style.backgroundColor = '#686868';
      getTracker3.style.backgroundColor = '#686868';

      getText1.style.display = 'block';
      getText2.style.display = 'none';
      getText3.style.display = 'none';
    } else if (currentImg === 2) {
      getImgWindow.setAttribute('src', './images/bg2.jpg');
      getTracker2.style.backgroundColor = '#272727';
      getTracker1.style.backgroundColor = '#686868';
      getTracker3.style.backgroundColor = '#686868';

      getText2.style.display = 'block';
      getText1.style.display = 'none';
      getText3.style.display = 'none';
    } else if (currentImg === 3) {
      getImgWindow.setAttribute('src', './images/bg3.jpg');
      getTracker3.style.backgroundColor = '#272727';
      getTracker1.style.backgroundColor = '#686868';
      getTracker2.style.backgroundColor = '#686868';

      getText3.style.display = 'block';
      getText2.style.display = 'none';
      getText1.style.display = 'none';
    }

    currentImg++;

    if (currentImg > 3) {
      currentImg = 1;
    } else if (currentImg < 1) {
      currentImg = 3;
    }
  }


  getTracker1.onclick = function () {
    getImgWindow.setAttribute('src', './images/bg1.jpg');
    getTracker1.style.backgroundColor = '#272727';
    getTracker2.style.backgroundColor = '#686868';
    getTracker3.style.backgroundColor = '#686868';

    getText1.style.display = 'block';
    getText2.style.display = 'none';
    getText3.style.display = 'none';
  }
  getTracker2.onclick = function () {
    getImgWindow.setAttribute('src', './images/bg2.jpg');
    getTracker2.style.backgroundColor = '#272727';
    getTracker1.style.backgroundColor = '#686868';
    getTracker3.style.backgroundColor = '#686868';

    getText2.style.display = 'block';
    getText1.style.display = 'none';
    getText3.style.display = 'none';
  }
  getTracker3.onclick = function () {
    getImgWindow.setAttribute('src', './images/bg3.jpg');
    getTracker3.style.backgroundColor = '#272727';
    getTracker1.style.backgroundColor = '#686868';
    getTracker2.style.backgroundColor = '#686868';

    getText3.style.display = 'block';
    getText2.style.display = 'none';
    getText1.style.display = 'none';
  }



  setInterval(textChanger, 9000);

  let currentText = 1;
  let getChange1 = document.querySelector('.change_1');
  let getChange2 = document.querySelector('.change_2');
  let getChange3 = document.querySelector('.change_3');

  let getChangeTracker1 = document.querySelector('.change_tracker1');
  let getChangeTracker2 = document.querySelector('.change_tracker2');
  let getChangeTracker3 = document.querySelector('.change_tracker3');


  function textChanger() {
    if (currentText === 1) {
      getChange1.style.display = 'block';
      getChange2.style.display = 'none';
      getChange3.style.display = 'none';

      getChangeTracker1.style.backgroundColor = '#ffffff';
      getChangeTracker2.style.backgroundColor = '#686868';
      getChangeTracker3.style.backgroundColor = '#686868';
    } else if (currentText === 2) {
      getChange1.style.display = 'none';
      getChange2.style.display = 'block';
      getChange3.style.display = 'none';

      getChangeTracker1.style.backgroundColor = '#686868';
      getChangeTracker3.style.backgroundColor = '#686868';
      getChangeTracker2.style.backgroundColor = '#ffffff';
    } else if (currentText === 3) {
      getChange1.style.display = 'none';
      getChange2.style.display = 'none';
      getChange3.style.display = 'block';

      getChangeTracker1.style.backgroundColor = '#686868';
      getChangeTracker2.style.backgroundColor = '#686868';
      getChangeTracker3.style.backgroundColor = '#ffffff';
    }
    currentText++;

    if (currentText > 3) {
      currentText = 1;
    }


    getChangeTracker1.onclick = function () {
      getChange1.style.display = 'block';
      getChange2.style.display = 'none';
      getChange3.style.display = 'none';

      getChangeTracker1.style.backgroundColor = '#ffffff';
      getChangeTracker2.style.backgroundColor = '#686868';
      getChangeTracker3.style.backgroundColor = '#686868';
    }
    getChangeTracker2.onclick = function () {
      getChange1.style.display = 'none';
      getChange2.style.display = 'block';
      getChange3.style.display = 'none';

      getChangeTracker1.style.backgroundColor = '#686868';
      getChangeTracker3.style.backgroundColor = '#686868';
      getChangeTracker2.style.backgroundColor = '#ffffff';
    }
    getChangeTracker3.onclick = function () {
      getChange1.style.display = 'none';
      getChange2.style.display = 'none';
      getChange3.style.display = 'block';

      getChangeTracker1.style.backgroundColor = '#686868';
      getChangeTracker2.style.backgroundColor = '#686868';
      getChangeTracker3.style.backgroundColor = '#ffffff';
    }
  }








}

function transform() {
  let getb = document.body;
  let getSec = document.querySelector('.section_4');

  let getSec1 = document.querySelector('.section_1');
  let getSec3 = document.querySelector('.section_3');
  let prefooter = document.querySelector('.prefooter');
  let changeCon = document.querySelector('.change_container');



  

  

  if (getb.classList.contains('.dark')) {
    getSec1.style.backgroundColor = '#F5F5F5';
    getSec1.style.color = '#000';


    getSec.style.backgroundColor = '#fff';
    getSec.style.color = '#000';


   getSec3.style.backgroundColor = '#F5F5F5';
   getSec3.style.color = '#000';

   prefooter.style.backgroundColor = '#ffffff';
   prefooter.style.color = '#000';

   changeCon.style.color = '#000';
   getb.style.backgroundColor = '#fff';
   getb.style.color = '#000';


    getb.classList.remove('.dark');
  } else {
    getSec1.style.backgroundColor = '#272727';
     getSec1.style.color = '#fff';

     getb.style.backgroundColor = '#272727';
     getb.style.color = '#fff';

     getSec.style.backgroundColor = '#272727';
     getSec.style.color = '#fff';


    getSec3.style.backgroundColor = '#272727';
    getSec3.style.color = '#fff';

    prefooter.style.backgroundColor = '#272727';
    prefooter.style.color = '#fff';

    changeCon.style.color = '#56AED4';


    
    getb.classList.add('.dark');
  }
}