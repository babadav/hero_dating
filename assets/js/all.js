var HeroApi = (function(){
	var shared = {};

	function populate(data){
		var results = JSON.parse(data);
		console.log(results);
	}

	function setupListeners(){
		$('.button-1').on('click', function(e){
			e.preventDefault();
			console.log('clicked');
			$.ajax('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=7e4c5c423179dd65da3bd09829eeee78&hash=e2b8bce6038a888d9fc9481e094a6b33')
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSGVyb0FwaSA9IChmdW5jdGlvbigpe1xuXHR2YXIgc2hhcmVkID0ge307XG5cblx0ZnVuY3Rpb24gcG9wdWxhdGUoZGF0YSl7XG5cdFx0dmFyIHJlc3VsdHMgPSBKU09OLnBhcnNlKGRhdGEpO1xuXHRcdGNvbnNvbGUubG9nKHJlc3VsdHMpO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2V0dXBMaXN0ZW5lcnMoKXtcblx0XHQkKCcuYnV0dG9uLTEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XG5cdFx0XHQkLmFqYXgoJ2h0dHBzOi8vZ2F0ZXdheS5tYXJ2ZWwuY29tL3YxL3B1YmxpYy9jaGFyYWN0ZXJzP3RzPTEmYXBpa2V5PTdlNGM1YzQyMzE3OWRkNjVkYTNiZDA5ODI5ZWVlZTc4Jmhhc2g9ZTJiOGJjZTYwMzhhODg4ZDlmYzk0ODFlMDk0YTZiMzMnKVxuXHRcdFx0LmRvbmUocG9wdWxhdGUpO1xuXHRcdH0pXG5cdH1cblxuXHRmdW5jdGlvbiBpbml0KCl7XG5cdFx0c2V0dXBMaXN0ZW5lcnMoKTtcblx0fVxuXHRzaGFyZWQuaW5pdCA9IGluaXQ7XG5cblx0cmV0dXJuIHNoYXJlZDtcbn0oKSk7XG5cbkhlcm9BcGkuaW5pdCgpOyJdfQ==
