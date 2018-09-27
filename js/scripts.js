(function ()
{
	if(!words)
		return;

	// Randomly select words from object and place into DOM
	var $word = words[Math.floor(Math.random()*words.length)];

	var $wordName = $word.word;
	var $wordType = $word.wordtype;
	var $wordDefinition = $word.definition;
	var $wordSynonyms = $word.synonyms;

	$( '.js-word' ).html( $wordName );
	$( '.js-type' ).html( $wordType );
	$( '.js-definition' ).html( $wordDefinition);
	$( '.js-synonyms' ).html( $wordSynonyms );
	$( '.js-dict-link' ).attr('href', 'https://www.merriam-webster.com/dictionary/' + $wordName );


	// modify array
	function nextVal(arr) {
		firstElm = arr.shift();
		arr.push(firstElm);
		backgroundColorDelta(firstElm);
		return arr;
	}

	// set background color
	function backgroundColorDelta (firstElm) {
		$( 'body' ).css('background-color', firstElm);
	}

	if (localStorage.getItem('localColorArr') === null) {
		//set array first time if it doesn't exist
		var colorsArr = ['#5F0B0D', '#5E2136', '#4F325C', '#214187', '#253764', '#1F2942', '#0F151F', '#132521', '#16321F', '#183319', '#1B383D', '#1E3C62', '#214186', '#362F5E', '#4A1D35'];
		localStorage.setItem('localColorArr', JSON.stringify(colorsArr));
		var localColorArr = JSON.parse(localStorage.getItem('localColorArr'));
	} else {
		var localColorArr = JSON.parse(localStorage.getItem('localColorArr'));
		//modify array
		modifiedColors = nextVal(localColorArr);
		// set setLocalStorage = modifiedArray;
		localStorage.setItem('localColorArr', JSON.stringify(modifiedColors));
	}

}());
