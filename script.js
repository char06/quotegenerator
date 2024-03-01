// Define the apiQuotes variable
let apiQuotes;

// Define the newQuote function
function newQuote(apiQuotes) {
  // Pick a random quote from the API array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}

// Define the fetchData function to fetch data from the API
function fetchData(apiEndpoint) {
  return fetch(apiEndpoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      throw error; // Re-throw the error for proper error handling in the caller
    });
}

// Example usage:
const apiEndpoint =
  "https://jacintodesign.github.io/quotes-api/data/quotes.json";

// Call fetchData to fetch data from the API
fetchData(apiEndpoint)
  .then((data) => {
    // Save the fetched quotes in the variable
    apiQuotes = data;
    //console.log(apiQuotes); // Do something with the fetched quotes
    newQuote(apiQuotes); // Call the newQuote function with the fetched data
  })
  .catch((error) => {
    // Handle any errors that occurred during the fetch operation
    console.error("Error fetching data:", error);
  });
