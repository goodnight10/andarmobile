$(function(){
  /**
 * 주석달아주기
 *
 * @version 1.0.0
 * @since 2022-01-16
 * @author 본인이름 (Nico)
 */

  // 
  
  $(window).scroll(function(){
    const curr=$(window).scrollTop();
    if (curr>0) {
      $('.header-inner').addClass('fixed')
    } else {
      $('.header-inner').removeClass('fixed')
    }
    
  })


    /**
   * 주석달아주기
   *
   * @version 1.0.0
   * @since 2022-01-16
   * @author 본인이름 (Nico)
   */
  
    // 
    $('.header .menu-area .link-more').click(function(e){
      e.preventDefault();
      $('.header .submenu-area').stop().slideToggle();
    })


 /**
   * 주석달아주기
   *
   * @version 1.0.0
   * @since 2022-01-16
   * @author 본인이름 (Nico)
   */
  
    // 

    $('.btn-menu').click(function (e) {
      e.preventDefault();
      $('.gnb-area, .dimmed').addClass('active');
      $('body').addClass('hidden');
      
    })
    $('.btn-close, .dimmed').click(function (e) {
      e.preventDefault();
      $('.gnb-area, .dimmed').removeClass('active');
      $('body').removeClass('hidden');
    })


    /**
   * 주석달아주기
   *
   * @version 1.0.0
   * @since 2022-01-16
   * @author 본인이름 (Nico)
   */
  
    // 
    $('.gnb-area .btn-category').click(function(e){
      e.preventDefault();
      // active로 꾸며주기
      $(this).toggleClass('active');
      $(this).siblings('.sub-list').stop().slideToggle();
    })
    
    /**
   * 스크롤이벤트
   *
   * @version 1.0.0
   * @since 2022-01-16
   * @author 본인이름 (Nico)
   */
  
    // 
    let last=0;
    $(window).scroll(function(){
      const curr = $(window).scrollTop();
      
      if (curr < last) {
        $('.fixed-area').addClass('active');
      } else{
        
        $('.fixed-area').removeClass('active');
      }
      last=curr;
    })



})


var swiper = new Swiper(".top-slide", {
  autoplay: {
      delay: 1500,
  },
  loop:true,
  slidesPerView : 1,
  effect : 'fade',
});



var swiper = new Swiper(".product-slide", {
    slidesPerView : '2.2',
    spaceBetween: 10,
    freeMode : true,
});

var swiper = new Swiper(".main-slide", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2500,
    },
    loop:true,
    slidesPerView : 'auto',
    effect : 'fade',
  });




// $(window).on('mousewheel',function(e){
//   var wheel = e.originalEvent.wheelDelta;
  
//   if(wheel>0){
//     $('.wrap').addClass('active');
//     $('.wrap').removeClass('no');
    
//   } else {
//     $('.wrap').addClass('no');
//     $('.wrap').removeClass('active');
      
//   }
//   });



// ==================리스트내리고올리는거
  // $('.category-wrap .btn-category').click(function(e){
  //   e.preventDefault();
  //   $('.category-wrap .sub-list').stop().slideUp();
  // },function(){
  //   $('.category-wrap .sub-list').stop().slideDown();
  // });

  // $('.btn-category').click(function(e){
  //   e.preventDefault();
  //   $('.sub-list').stop().slideUp();
  //   $(this).siblings().stop().slideToggle();
  // });

  // =================================





  

  



  // $(window).scroll(function(){
  //   curr=$(window).scrollTop();
  //   target=$('.logo-area').offset().top;

  //   if(curr >= target){
  //     $('.logo-wrap').show();
  //     $('.header .swiper-wrapper').show();
  //     $('logo-area-fixed').hide();
  //   }else{
  //     $('.logo-wrap').hide();
  //     $('.header .swiper-wrapper').hide();
  //     $('.logo-area-fixed').show();
  //   }
  // })


  // $(window).scroll(function(){
  //   curr=$(window).scrollTop();
  //   target=$('.logo-area').offset().top;

  //   if(curr >= target){
  //     $('.logo-wrap').css('display', 'block');
  //     $('.header .swiper-wrapper').css('display', 'block');
  //     $('logo-area-fixed').css('display', 'none');
  //   }else{
  //     $('.logo-wrap').css('display', 'none');
  //     $('.header .swiper-wrapper').css('display', 'none');
  //     $('.logo-area-fixed').css('display', 'block');
  //     $('.logo-area-fixed').css('top', '0');
  //   }
  // })


  // $( window ).ready( function() {
  //   var menuOffset = $( '.logo-area-fixed' ).offset();
  //   $( window ).scroll( function() {
  //     if ( $( window ).scrollTop() > menuOffset.top ) {
  //       $( '.logo-area-fixed' ).addClass( 'logo-fixed' );
  //     }
  //     else {
  //       $( '.logo-area-fixed' ).removeClass( 'logo-fixed' );
  //     }
  //   });
  // } );


  
  // $(document).ready(function () {
  //       var topBar = $(".logo-wrap").offset();
  //       $(window).scroll(function () {
  //           var docScrollY = $(document).scrollTop()
  //           var barThis = $(".logo-wrap")
  //           var fixNext = $(".logo-area-fixed")
  //           if (docScrollY > topBar.top) {
  //             barThis.addClass("logo-fixed");
  //             fixNext.addClass("pd_top_80");
  //           } else {
  //             barThis.removeClass("logo-fixed");
  //             fixNext.removeClass("pd_top_80");
  //           }
  //           });
  //       })

  