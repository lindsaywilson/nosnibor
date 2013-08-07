/*
 * Common.js - appear across the site
 */
jQuery(document).ready(function($) {

  // Initialize
  //-----------------------------------------------------------//
  var width = $(window).width();
  if (width <= 480) {
  //-----------------------------------------------------------//
   $('#main-content').addClass('mobile');
  } else {
   $('#main-content').addClass('desktop');
  }
  
  //flexslider
  $('.flexslider').hover( function(){
	  $('.flex-control-nav').slideToggle();
  }, function(){
	  $('.flex-control-nav').slideToggle();
  });
  
  // FitVids
  $('.media-youtube-video, .media-vimeo-preview-wrapper').fitVids();

// Pager
//-----------------------------------------------------------// 
 var init_start = parseInt($('.item_start').text());
 var init_end = parseInt($('.item_end').text());
 var init_total = parseInt($('.item_total').text());
 
 next_start = init_start + 15;
 next_end = init_end + 15;  
 prev_start = init_start - 15;
 prev_end = prev_start + 14; 
 
 if( next_end > init_total ) { next_end = init_total; }
 
 var next_item = $('li.pager-next a').attr('href');
 var prev_item = $('li.pager-previous a').attr('href');
 
 $('.item_start').html(next_start);
 $('.item_end').html(next_end);
 
 $('.item_start_prev').html(prev_start);
 $('.item_end_prev').html(prev_end);
 
 $('.item_next a').attr('href', next_item);
 $('.item_prev a').attr('href', prev_item);

  if($('ul.pager li.pager-next').find("a").length <= 0) { $('#item_pager_next').hide(); } 
  if($('ul.pager li.pager-previous').find("a").length <= 0) { $('#item_pager_prev').hide(); } 
  

// V2. greyscale fullscreen background 
//-----------------------------------------------------------//
var backimage = $(".backstretch img").attr('src');
 $.backstretch(backimage);
var backimage2 = $('.artwork-item:last a').attr('href');
$.backstretch(backimage2);
// V2. scroller & background video
//-----------------------------------------------------------//
if (width > 480) {

// full background video
//-----------------------------------------------------------//
  /*$('.front').videoBG({
		position:"fixed",
		zIndex:0,
		mp4: Drupal.settings.basePath + 'sites/all/themes/corolla/video/video_larger_file.mp4',
		ogv: Drupal.settings.basePath + 'sites/all/themes/corolla/video/video_larger_file.ogv',
		webm: Drupal.settings.basePath + 'sites/all/themes/corolla/video/video_larger_file.webm',
		poster: Drupal.settings.basePath + 'sites/all/themes/corolla/video/video-holding.jpg',
		opacity:1,
		fullscreen:true,
  });  
  $(".front div#makeMeScrollable").hide();
  */
   // scroller 
   //-----------------------------------------------------------//
   $("div#makeMeScrollable").smoothDivScroll({
	autoScrollingMode: "always",
	manualContinuousScrolling: true
   });
 
 /*
   // Mouse over
   $("#makeMeScrollable").bind("mouseover", function(){
    $("#makeMeScrollable").smoothDivScroll("stopAutoScrolling");
   });
   // Mouse out
   $("#makeMeScrollable").bind("mouseout", function(){
    $("#makeMeScrollable").smoothDivScroll("startAutoScrolling");
   });
*/
/*
  $('.videoBG').delay(7000).fadeOut('2000', function() {
      $('.videoBG').remove(); 
      $('.skip-video').hide();
      $(".front .region-header").fadeIn('3000'); 
      $(".front #play_slideshow").fadeIn('3000');
      $(".front div#makeMeScrollable").fadeIn('3000');
  }); // end of videoBG 

  // Skip video
  $('.videoBG_wrapper').append($('.skip-video'));
  $('.skip-video').click(function() {
    $('.videoBG').remove(); 
    $('.skip-video').hide();
    $(".front .region-header").fadeIn('3000'); 
    $(".front #play_slideshow").fadeIn('3000'); 
    $(".front div#makeMeScrollable").fadeIn('3000');
  }); // end of skip video 
*/
$("#makeMeScrollable").bind("mouseover", function() {
		$(this).smoothDivScroll("stopAutoScrolling");
	}).bind("mouseout", function() {
		$(this).smoothDivScroll("startAutoScrolling");
	});

} else {

  $('script[src*=smoothDivScroll]').remove();

} 


//-----------------------------------------------------------//
// Play Slideshow

$('#play_slideshow').click( function(){
	
	if($('#slideshow').html() == ''){
		
		$(this).html('<div class="loading">Loading</div>');
		$.get("/slideshow")
		.done(function(data) {
			$('#play_slideshow').html(' ');
			$('#slideshow').html(data);
			$('.fancybox-slideshow').fancybox({
				autoPlay : true,
				playSpeed : 5000,
				helpers : {
						title : {
							type : 'inside'
						},
						buttons	: {}
					},
	
					afterLoad : function() {
						this.title =  'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '') + '<a href=\"#\" onClick="jQuery(\'.fancybox-close\').click();" class=\"slideshow-close\">Close</a>';
					}
			}).click();
		})
		
	} else{
		$('.fancybox-slideshow').click();
	}

});




 // V2. Artwork Filter 
 //-----------------------------------------------------------//
 $('.section-artwork .galleries-filter').hide();
 if($('#edit-type-year a').length == 0) { $('#edit-type-year').addClass('selected'); }
 if($('#edit-type-medium a').length == 0) { $('#edit-type-medium').addClass('selected'); }
 if($('#edit-type-subcategory a').length == 0) { $('#edit-type-subcategory').addClass('selected');  }
 $('.section-artwork .selected').prepend($('.filter-nav'));
 $('#edit-type-year').append($('.filter-year'));
 $('#edit-type-medium').append($('.filter-medium'));
 $('#edit-type-subcategory').append($('.filter-project'));
 $('.section-artwork .selected .galleries-filter').show();

//-----------------------------------------------------------//
// Wrap artwork image with links
 $('.section-artwork .smoothdiv').each(function(index) {
   $src = $(this).find('.views-field-title a').attr('href');
   $(this).wrap('<a href="' + $src + '" />');
 });
//-----------------------------------------------------------//  
// Centre scroller
/*
$(window).resize(function(){

		$('.view-scroller').css({
			position:'absolute',
			//left: ($(window).width() - $('.className').outerWidth())/2,
			top: ($(window).height() - $('.view-scroller').outerHeight())/2
		});
		
	});
 
	$(window).resize();
	*/
//-----------------------------------------------------------//
 /*
 $('.view-artwork-gallery .view-content').wrapInner('<ul id="artwork-slider" />');
 var $children = $('.artwork-item');
 for(var i = 0, l = $children.length; i < l; i += 15) {
    $children.slice(i, i+15).wrapAll('<li class="artwork-slide"></li>');
  }
 var $child = $('.artwork-slide .artwork-item');
 for(var i = 0, l = $child.length; i < l; i += 5) {
   $child.slice(i, i+5).wrapAll('<div id="artwork-item-wrapper"></li>');
  }
 //$('.artwork-slide .artwork-item:nth-child(5)').addClass('item-break');

  
$('#artwork-slider').bxSlider();
$('.artwork-slide').addClass('clearfix');
*/
//-----------------------------------------------------------//
// Responsive slider
//<div id="carousel" class="es-carousel-wrapper"><div class="es-carousel"><ul><li>
$('.view-artwork-gallery .view-content').wrapInner('<div id="es_carousel" class="es-carousel-wrapper" />');
$('#es_carousel').wrapInner('<div class="es-carousel" />');
$('.es-carousel').wrapInner('<ul>');
var $children = $('.artwork-item');
 for(var i = 0, l = $children.length; i < l; i += 3) {
    $children.slice(i, i+3).wrapAll('<li class="es-carousel-row"></li>');
  }
if (width > 480) {  
 $('#es_carousel').elastislide({
				imageW 	: 195,
				minItems	: 5,
				margin		: 0
			});
} else {
  $('#es_carousel').elastislide({
				imageW 	: 145,
				minItems	: 2,
				margin		: 0
			});
}	

 // adding numbers to prev/next 		
 
 var totalImg = $('.page-artwork-gallery .es-carousel-row img').length;
 if(totalImg>15){
	 $('.es-nav-next').wrapInner('<div class="arrow" />').prepend('<strong class="countImg">16</strong>').append('<strong class="totalImg">'+totalImg+'</strong>');
 $('.es-nav-prev').wrapInner('<div class="arrow" />').prepend('<strong class="countImg">1</strong>').append('<strong class="totalImg">'+totalImg+'</strong>');
 }
 

//-----------------------------------------------------------//
// Fancybox overlay greyscale fullscreen background

$('.artwork-item a').click(function() {
  //var bg = $(this).attr('href');
  //console.log(bg);
  //$('.fancybox-overlay').attr('style', 'background-image: url(' + bg + '!important)'); 
  //$('#backstretch img').attr('src', bg); 
  //$('#backstretch').css( { 'z-index': '1', 'opacity': '1' });
}); 


//-----------------------------------------------------------//
// Project images hover

$('#makeMeScrollable .views-row').hover( function(){
	var rel = $(this).attr('rel');
	$('.'+rel).addClass('active');
},function () {
	$('.view-artwork-filter .active').removeClass('active');
});



}); 

/*
;(function($) {
  $(window).bind('load', function() {
  
     $('.bwWrapper').BlackAndWhite({
		hoverEffect: false,
		//webworkerPath: Drupal.settings.basePath + 'sites/all/themes/corolla/js/'
		webworkerPath : false,
		invertHoverEffect:false
	});  
    
  });
})(jQuery);

*/

// Full Background Image
/*
 var backimage = $(".field-name-field-background img").attr('src');
 $.backstretch(backimage);
 
 var backimage2 = $(".bwWrapper img").attr('src');
 $.backstretch(backimage2);
 
 var backimage3 = $(".page-type-project .view-mode-teaser img").attr('src');
 $.backstretch(backimage3);
 $(".page-type-project .view-mode-teaser").hide();
*/ 
  // Auto-submit
  /*
  $("form#views-exposed-form-portfolio-archive-page-page input#edit-submit-portfolio-archive-page").hide();
  $("form#views-exposed-form-portfolio-archive-page-page select").change(function() {
   $("form#views-exposed-form-portfolio-archive-page-page").submit();
  });
  */
  /*
  // Filter
  $('.section-portfolio .view-portfolio-archive-filter .view-content').hide();
  $('.section-portfolio .view-portfolio-archive-filter .view-content:eq(1)').show();
  $('.section-portfolio .filter-nav').insertBefore('.galleries-filter:eq(1) h2');
  $('.section-portfolio .galleries-filter:eq(1) h2').addClass('selected');
  
   $('.section-portfolio .galleries-filter h2').click(function() {
     $('.section-portfolio .galleries-filter h2').removeClass('selected');
     $('.section-portfolio .view-portfolio-archive-filter .view-content').hide();
     $('.section-portfolio .filter-nav').hide();
     $(this).parent().find('.view-content').fadeIn('3000'); 
     $('.filter-nav').insertBefore($(this)).fadeIn('3000');
     $(this).addClass('selected');
   });
   */
  /* 
     // Hover to show information
  
  $(".simply-scroll .simply-scroll-list li").hover(
  function () {
    $(this).find(".views-field-title").hide();
    $(this).find(".views-field-body").slideToggle("fast");
  }, 
  function () {
    $(this).find(".views-field-body").slideToggle("fast");
    $(this).find(".views-field-title").show();
  }
  );
  */
  // Home
  /*
  $('.front #main-content .region-content').wrapInner('<ul id="scroller" />');
  $('.front #main-content .block-views').wrap('<li>');
  $('.front #main-content #block-system-main').appendTo('.front #main-content .region-content');
  $("#scroller, .front .region-header").hide();
  
    $('.videoBG').delay(7000).fadeOut('2000', function() {
      $('.videoBG').remove(); 
      $('.skip-video').hide();
      $(".front .region-header").fadeIn('3000'); 
      $(".front #play_slideshow").fadeIn('3000');
      if (width <= 480) { 
       $("#scroller").fadeIn('3000').simplyScroll({ orientation: 'vertical', auto: true, autoMode: 'loop' });
      } else {
       $("#scroller").fadeIn('3000').simplyScroll();
      }
  });
  */