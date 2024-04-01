// declaring url
const api_url="https://api.quotable.io/random";
// declaring quote by getElementById which return id element from html doc
const quote=document.getElementById("quote");
// declaring author
const author=document.getElementById("author");

// function to generate quote 
async function getquote(url){
    // fetch func used to fetch data by get response from server of provided url by sending req
    const response=await fetch(url);
//    JSON stands for JavaScript Object Notation
// JSON is a lightweight format for storing and transporting data
// JSON is often used when data is sent from a server to a web page
    var data=await response.json();
    // upadates the html content at this point 
    quote.innerHTML=data.content;
    author.innerHTML=data.author;
}

getquote(api_url);
function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML,"Tweet Window","width=500,height=400");
}