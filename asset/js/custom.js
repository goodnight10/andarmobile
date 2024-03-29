$(function(){
  /**
 * 메뉴바 상단고정
 *
 * @version 1.0.0
 * @since 2022-06-18
 * @author jy
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
 * 서브메뉴 열고닫기
 *
 * @version 1.0.0
 * @since 2022-06-18
 * @author jy
 */
   
    $('.header .menu-area .link-more').click(function(e){
      e.preventDefault();
      $('.header .submenu-area').stop().slideToggle();
      $('.header .menu-area .link-more').toggleClass('active');
      $('.header .menu-area .menu-list').toggleClass('active');
      $('.header .menu-area .all-menu').toggleClass('active');
    })


    
/**
 * 검색창 열고닫기
 *
 * @version 1.0.0
 * @since 2022-06-19
 * @author jy
 */
  //
      $('.header .btn-search').click(function(e){
        e.preventDefault();
          $('.search-page').addClass('fixed')
        
      })
      $('.header .link-back').click(function(e){
        e.preventDefault();
          $('.search-page').removeClass('fixed')
        
      })
  

 /**
  * 메뉴펼치면 배경 어두워지게
  *
  * @version 1.0.0
  * @since 2022-06-18
  * @author jy
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
 * 메뉴 열고닫기
 *
 * @version 1.0.0
 * @since 2022-06-18
 * @author jy
 */
  
    // 
    $('.gnb-area .btn-category').click(function(e){
      e.preventDefault();
      // active로 꾸며주기
      $(this).toggleClass('active');
      $(this).siblings('.sub-list').stop().slideToggle();
    })
    
    /**
     * upper클릭시 최상단
     * 톡상담 영역 스크롤 내리면 사라지고 올리면 나타나게
     *
     * @version 1.0.0
     * @since 2022-06-18
     * @author jy
     */
  
    // 
    $( '.upper' ).click( function() {
      $( 'html, body' ).animate( { scrollTop : 0 }, 300 );
      return false;
    } );

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





 /**
  * 맨윗부분 슬라이드
  *
  * @version 1.0.0
  * @since 2022-06-18
  * @author jy
  */
 // 
var swiper = new Swiper(".top-slide", {
  autoplay: {
      delay: 1500,
  },
  loop:true,
  slidesPerView : 1,
  effect : 'fade',
});


 /**
  * 메인부분 슬라이드
  *
  * @version 1.0.0
  * @since 2022-06-18
  * @author jy
  */
 // 
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

   /**
  * 상품 슬라이드
  *
  * @version 1.0.0
  * @since 2022-06-18
  * @author jy
  */
 // 

var swiper = new Swiper(".product-slide", {
  slidesPerView : '2.2',
  spaceBetween: 10,
  freeMode : true,
});

})