$('body').ready(function() {
 

	//Usage
    //$("#my-slider").(slider_width, margin_right,speed_height,speed_slide,menu_with)

   

    // setTimeout(function(){
    // 	$('#slider-students ul li').eq(3).click();
    // },1000);
   
/* Center Footer Links */
	// var footerLinks = $('#footer-links ul').width();
	//alert(footerLinks);

// $("#menu-left ul li").click(function() {
// 	$("#menu-left ul li").removeClass('active');
// 	$(this).addClass('active');
// });
 
	$('body').imagesLoaded()
  .always( function( instance ) {
    console.log('all images loaded');
  })
  .done( function( instance ) {
    console.log('all images successfully loaded');
    if($(window).width() >= 700 ){
      $("#slider-students").eprepnav(695,5,250,250,50);
    }else{
      $("#slider-students").eprepnav($(window).width() - 5,5,250,250,50);
    }
    $(window).on('resize',function(){
      if($(window).width() < 700 ){
        $("#slider-students").eprepnav($(window).width() - 5,5,250,250,50);
      }
    });
  })
  .fail( function() {
    console.log('all images loaded, at least one is broken');
  })
  .progress( function( instance, image ) {
    var result = image.isLoaded ? 'loaded' : 'broken';
    console.log( 'image is ' + result + ' for ' + image.img.src );
  });

});

