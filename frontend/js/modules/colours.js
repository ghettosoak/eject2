$(function($){
	$('.tile').each(function(e){
		var colour = randomColor({
				// hue: 'blue',
				luminosity: 'dark'
			}),
			$that = $(this);

		$that.css('background-color', colour);

		$that
			.find('.content').css({
				'border-color': colour
			})
			.find('.slider').css({	
				'color': colour,
			})
			.find('.hover').css({	
				'background-color': colour,
			});

		if ($that.hasClass('link'))
			$that.find('.slider h2 span')
				.css('border-color', colour);

		if ($that.hasClass('colophon'))
			$that.find('.invert')
				.css('background-color', colour);

		$('.colours')
			.append('<span style="color: ' + colour + ';">' + colour + ', </span>');

		$that.addClass('ready')
	})

});
