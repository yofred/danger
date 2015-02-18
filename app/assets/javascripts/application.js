// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$(document).ready(function(){


    $('#about-icon1').css("visibility", "hidden");
    $('#about-icon2').css("visibility", "hidden");
    $('#about-icon3').css("visibility", "hidden");
    $('#banner-title').css("visibility", "hidden");
    $('#banner-desc').css("visibility", "hidden");
    $('#nyc-quote').css("visibility", "hidden");

   // cache the window object
   $window = $(window);


  //  PARALLAX

   $('section[data-type="background"]').each(function(){
     // declare the variable to affect the defined data-type
     var $scroll = $(this);

      $(window).scroll(function() {
        // HTML5 proves useful for helping with creating JS functions!
        // also, negative value because we're scrolling upwards
        var yPos = -($window.scrollTop() / $scroll.data('speed'));

        // background position
        var coords = '50% '+ yPos + 'px';

        // move the background
        $scroll.css({ backgroundPosition: coords });
      }); // end window scroll
   });


  //  ANIMATIONS

    // banner

    $(window).load(function(){

     function show_title(){
       $('#banner-title').css("visibility", "visible");
       $('#banner-title').addClass('animated fadeInUp');
     };

     function show_desc(){
       $('#banner-desc').css("visibility", "visible");
       $('#banner-desc').addClass('animated fadeIn');
     };

     window.setTimeout( show_title, 200 );

     window.setTimeout( show_desc, 800 );

    })

   // footer animations
   // trigger footer CSS slideup animations
   $(window).scroll(function() {
     $('#danger-icon').each(function(){
     var imagePos = $(this).offset().top;

     var topOfWindow = $(window).scrollTop();
       if (imagePos < topOfWindow+1000) {
         $(this).addClass('animated swing');
       }
     });

     $('#about-icon1').each(function(){
       var imagePos = $(this).offset().top;

       var topOfWindow = $(window).scrollTop();
         if (imagePos < topOfWindow+600) {
           $(this).css("visibility", "visible");
           $(this).addClass('animated fadeInUp');
         }
     });

     $('#about-icon2').each(function(){
       var imagePos = $(this).offset().top;

       var topOfWindow = $(window).scrollTop();
         if (imagePos < topOfWindow+600) {
           $(this).css("visibility", "visible");
           $(this).addClass('animated fadeInUp');
         }
     });

     $('#about-icon3').each(function(){
       var imagePos = $(this).offset().top;

       var topOfWindow = $(window).scrollTop();
         if (imagePos < topOfWindow+600) {
           $(this).css("visibility", "visible");
           $(this).addClass('animated fadeInUp');
         }
     });

     $('#nyc-quote').each(function(){
       var imagePos = $(this).offset().top;

       var topOfWindow = $(window).scrollTop();
         if (imagePos < topOfWindow+800) {
           $(this).css("visibility", "visible");
           $(this).addClass('animated rollIn');
         }
     });





   });


  //  // about icons animations
  //  $(window).scroll(function() {
  //    $('.about-icons').each(function(){
  //    var imagePos = $(this).offset().top;
   //
  //    var topOfWindow = $(window).scrollTop();
  //      if (imagePos < topOfWindow+100) {
  //        $(this).show();
  //        $(this).addClass('animated fadeInUp');
  //      }
  //    });
  //  });




});
