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