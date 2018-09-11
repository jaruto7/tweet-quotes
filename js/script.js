var prefix = "https://cors-anywhere.herokuapp.com/";
var tweetLink = "https://twitter.com/intent/tweet?text=";
var quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

function getQuote() {
    fetch( prefix + quoteUrl, { cache: "no-store" } )
        .then( function ( resp ) {
            return resp.json();
        })
        .then( createTweet );
}

document.addEventListener( 'DOMContentLoaded', function() {
    console.log('test1')
    getQuote();
    document.querySelector( '.trigger' ).addEventListener( 'click', function() {
        console.log('test2');
        getQuote();
    });
});

function createTweet( input ) {
    var data = input[0];

    var dataElement = document.createElement( 'div' );
    dataElement.innerHTML = data.content;
    // console.log(dataElement);
    var quoteText = dataElement.innerHTML.trim();
    var quoteAuthor = data.title;
    var tweetText = 'Quote of the day - ' + quoteText + ' Author: ' + quoteAuthor;

    if ( !quoteAuthor.length ) {
        quoteAuthor = 'Unknown author';
    }
    
    if( tweetText.length > 140 ) {
        getQuote();
    } else {
        var tweet = tweetLink + encodeURIComponent( tweetText );
        console.log(tweetText);
        document.querySelector( '.quote' ).innerText = quoteText;
        document.querySelector( '.author' ).innerText = 'Author: ' + quoteAuthor;
        document.querySelector( '.tweet' ).setAttribute( 'href', tweet );
    }
}
