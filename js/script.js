var tweetLink = "https://twitter.com/intent/tweet?text=";
var quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

function getQuote(){
    fetch( quoteUrl, { cache: "no-store" } )
        .then( function ( resp ){
            return resp.json();
        })
        .then( createTweet );
}

function createTweet( input ){
    var data = input[ 0 ];

    var dataElement = document.createElement( 'div' );
    dataElement.innerHTML = data.content;
    // console.log(dataElement);
    var quoteText = dataElement.innerHTML.trim();
    var quoteAuthor = data.title;

    if(!quoteAuthor.length){
        quoteAuthor = 'Unknown author';
    }
}