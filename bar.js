
    moveProgressBar();
	$(window).resize(function() {
		        moveProgressBar();
				    
	});

function moveProgressBar() {
	      console.log("moveProgressBar");
		          var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
				          var getProgressWrapWidth = $('.progress-wrap').width();
						          var progressTotal = getPercent * getProgressWrapWidth;
								          var animationLength = 2500;
										          
										  $('.progress-bar').stop().animate({
											              left: progressTotal
											          
										  }, animationLength);
										      
}
