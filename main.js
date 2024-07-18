// Declaring URL
const api_url = "https://api.api-ninjas.com/v1/quotes";

// Declaring quote and author by getElementById which returns id element from HTML doc
const quote = document.getElementById("quote");
const author = document.getElementById("author");

// Function to generate quote
async function getQuote(url) {
    try {
        // Fetch function used to fetch data by getting response from server of provided URL by sending req
        const response = await fetch(url, {
            headers: {
                'X-Api-Key': 'wya8qW6gGpCLzlXtj0EBiw==WkEDy3dnJ14EEY4C'
            }
        });
        // JSON stands for JavaScript Object Notation
        // JSON is a lightweight format for storing and transporting data
        // JSON is often used when data is sent from a server to a web page
        const data = await response.json();
        console.log(data);
        
        // Updates the HTML content at this point 
        quote.innerHTML = data[0].quote; // Assuming the response is an array and we take the first element
        author.innerHTML = data[0].author;
    } catch (error) {
        console.error('Error fetching the quote:', error);
        quote.innerHTML = 'Could not fetch quote at this time. Please try again later.';
        author.innerHTML = '';
    }
}

getQuote(api_url);

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML, "Tweet Window", "width=500,height=400");
}
