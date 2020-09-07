
$(document).ready(function(){
   $('.i2').on({
      mouseenter:function(){
         $('.dropdown_1').removeClass('hide').animate({
            opacity:1,
            top:"60px"
         })
         $('.i2>a')[0].style.color ="red"   
      },
      mouseleave:function(){
         $('.dropdown_1').addClass('hide').animate({
            opacity:0.1,
            top:"80px"
         })
      $('.i2>a')[0].style.color ="rgb(142,116,116)"
   },
   })

   $('.i3').on({
      mouseenter:function(){
         $('.dropdown_2').removeClass('hide').animate({
            opacity:1,
            top:"60px"
         })
         $('.i3>a')[0].style.color ="red"   
      },
      mouseleave:function(){
         $('.dropdown_2').addClass('hide').animate({
            opacity:0.1,
            top:"80px"
         })
         $('.i3>a')[0].style.color ="rgb(142,116,116)"   
      },
   })

   $('.i4').on({
      mouseenter:function(){
         $('.dropdown_3').removeClass('hide').animate({
            opacity:1,
            top:"60px"
         })
         $('.i4>a')[0].style.color ="red"   
      },
      mouseleave:function(){
         $('.dropdown_3').addClass('hide').animate({
            opacity:0.1,
            top:"80px"
         })
         $('.i4>a')[0].style.color ="rgb(142,116,116)"   
      },
   })

   $('.i1').on({
      mouseenter:function(){$('.i1>a')[0].style.color ="red"},
      mouseleave:function(){$('.i1>a')[0].style.color ="rgb(142,116,116)"}
   })

   $('.i5').on({
      mouseenter:function(){$('.i5>a')[0].style.color ="red"},
      mouseleave:function(){$('.i5>a')[0].style.color ="rgb(142,116,116)"}
   })


   $('.hamburger>svg').click(function(){
      $('.sub_menu').slideToggle()
   })
   $('.sub1').click(function(){
      $('.hide1').slideToggle()
   });
   $('.sub2').click(function(){
      $('.hide2').slideToggle()
   });
   $('.sub3').click(function(){
      $('.hide3').slideToggle()
   });


})

