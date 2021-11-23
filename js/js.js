


//nav bar //
$(function  () {
    'use strict';

    // calc body padding top depend on navbar height

    $('body').css('paddingTop',$('.navbar').innerHeight() + 11);


    //smoothly scroll to element 

    $('.navbar li a').click (function(e){

        e.preventDefault();

        $('html, body').animate({

         scrollTop: $('#'+ $(this).data('scroll')).offset().top 
        
        },1000);
      
});
  //add active class on navbar link and remove from siblings

$('.navbar li').click(function  (){
    $(this).addClass('active').siblings().removeClass('active');

});


});

/*navbar*/