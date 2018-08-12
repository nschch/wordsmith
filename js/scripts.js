var colors = ['#5F0B0D', '#5E2136', '#4F325C', '#214187', '#253764', '#1F2942', '#0F151F', '#132521', '#16321F', '#183F1D'];

var word = words[Math.floor(Math.random()*words.length)];
var color = colors[Math.floor(Math.random()*colors.length)];

var wordName = word.word;
var wordType = word.wordtype;
var wordDefinition = word.definition;
var wordSynonyms = word.synonyms;

$( '.js-word' ).html( wordName );
$( '.js-type' ).html( wordType );
$( '.js-definition' ).html( wordDefinition);
$( '.js-synonyms' ).html( wordSynonyms );
$( '.js-dict-link' ).attr("href", "https://www.merriam-webster.com/dictionary/" + wordName );

$( 'body' ).css("background-color", color);

