var word = words[Math.floor(Math.random()*words.length)];

var wordName = word.word;
var wordType = word.wordtype;
var wordDefinition = word.definition;
var wordSynonyms = word.synonyms;

$( '.js-word' ).html( wordName );
$( '.js-type' ).html( wordType );
$( '.js-definition' ).html( wordDefinition);
$( '.js-synonyms' ).html( wordSynonyms );
$( '.js-dict-link' ).attr("href", "https://www.merriam-webster.com/dictionary/"+ wordName );
