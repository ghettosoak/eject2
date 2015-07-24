$(function($){

	$('.tile').on('mouseenter mouseleave', function(e){

		console.log(e.type)

		var $that = $(this),
			w = $that.width(),
			h = $that.height(),

			x = ( e.pageX - $that.offset().left - ( w/2 )) * ( w > h ? ( h/w ) : 1 ),
			y = ( e.pageY - $that.offset().top  - ( h/2 )) * ( h > w ? ( w/h ) : 1 ),
		
			direction = Math.round( ( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 ) % 4;
		
			console.log($that.attr('class'))
		switch( direction ) {
			case 0:
				// from top
				$that.attr('data-direction', 'top');
				break;
			case 1:
				// from right
				$that.attr('data-direction', 'right');
				break;
			case 2:
				// from bottom
				$that.attr('data-direction', 'bottom');
				break;
			case 3:
				// from left
				$that.attr('data-direction', 'left');
				break;
		};

		if (e.type === 'mouseenter'){
			console.log('ENTR')
			setTimeout(function(){
				$that.addClass('transitioning hover')
			}, 10)
		}else{
			console.log('LEAVE')
			$that.removeClass('hover')
				.siblings().removeClass('hover')
			setTimeout(function(){
				$that.removeClass('transitioning')
					// .siblings().removeClass('transitioning')
			}, 100)
		}
	});
		
});
