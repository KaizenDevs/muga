$('body').ready(function() {

	 (function($){
  			
        $.fn.eprepnav = function(slider_width, margin_right,speed_height,speed_slide,menu_with){
            var my_id = this.attr('id'); 
    		//alert(my_id);
            var count = $('.containter').length;
            var slider_width =  slider_width + margin_right;
            var my_containter_first =$(".right-content div:nth-child(1)");
            var my_containter_first_height =my_containter_first.height();
            var mask = $(' .mask');
            var containter_width = $('.mask .right-content').width(count*slider_width+(margin_right*count));

			my_containter_first.addClass('first');

			$('#'+my_id+' .menu-left ul li').width(menu_with);
            $('.right-content .containter').css({
			   'margin-right' : margin_right,
			   'width': slider_width
			});
			$('.mask').css({
			   'width' : slider_width,
			   'height' : my_containter_first_height
 			});
            
        	$('#'+my_id+' .menu-left ul li').click(function() {
				var my_button = $(this).index()+1;
				var my_containter = $(".right-content > div:nth-child("+my_button+")");
				var my_containter_height = my_containter.height();
				var my_container_xpos = (slider_width+margin_right) * (my_button-1);
				$('#'+my_id+' .menu-left ul li').removeClass('active');
				$(this).addClass('active');

				//debug
				//$('#test-text').text(my_containter.text());

				$(mask).animate({ 'height':my_containter_height}, 250, function() {
					$('.right-content').animate({ 'margin-left': -my_container_xpos}, speed_slide, function() { });
				});	
			});
        };
    })
	(jQuery);
	//Usage
    //$("#my-slider").(slider_width, margin_right,speed_height,speed_slide,menu_with)
    
});