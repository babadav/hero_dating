var HeroApi = (function(){
	var shared = {};

	function populate(results){
		console.log(results);
	}

	function setupListeners(){
		$('.button-1').on('click', function(e){
			e.preventDefault();
			console.log('clicked');
			$.ajax('https://gateway.marvel.com/v1/public/characters?apikey=7e4c5c423179dd65da3bd09829eeee78')
			.done(populate);
		})
	}

	function init(){
		setupListeners();
	}
	shared.init = init;

	return shared;
}());

HeroApi.init();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEhlcm9BcGkgPSAoZnVuY3Rpb24oKXtcblx0dmFyIHNoYXJlZCA9IHt9O1xuXG5cdGZ1bmN0aW9uIHBvcHVsYXRlKHJlc3VsdHMpe1xuXHRcdGNvbnNvbGUubG9nKHJlc3VsdHMpO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2V0dXBMaXN0ZW5lcnMoKXtcblx0XHQkKCcuYnV0dG9uLTEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XG5cdFx0XHQkLmFqYXgoJ2h0dHBzOi8vZ2F0ZXdheS5tYXJ2ZWwuY29tL3YxL3B1YmxpYy9jaGFyYWN0ZXJzP2FwaWtleT03ZTRjNWM0MjMxNzlkZDY1ZGEzYmQwOTgyOWVlZWU3OCcpXG5cdFx0XHQuZG9uZShwb3B1bGF0ZSk7XG5cdFx0fSlcblx0fVxuXG5cdGZ1bmN0aW9uIGluaXQoKXtcblx0XHRzZXR1cExpc3RlbmVycygpO1xuXHR9XG5cdHNoYXJlZC5pbml0ID0gaW5pdDtcblxuXHRyZXR1cm4gc2hhcmVkO1xufSgpKTtcblxuSGVyb0FwaS5pbml0KCk7Il19
