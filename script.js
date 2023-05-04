// Function to get the current date in the required format
const getCurrentDate = () => {
    const currentDate = new Date().toISOString().split("T")[0];
    return currentDate;
  }
  
  // Function to fetch the image of the day for the current date
  const getCurrentImageOfTheDay = () => {
    const apiKey = "Njq6AIuCRIcG5vpPWoObBZk7K85FDTdNKRfFMO53";
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${getCurrentDate()}`;
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const currentImageContainer = document.getElementById("current-image-container");
        currentImageContainer.innerHTML = `
          <h2>${data.title}</h2>
          <img src="${data.url}" alt="${data.title}">
          <p>${data.explanation}</p>
        `;
      })
      .catch(error => console.log(error));
  }
  
  // Function to fetch the image of the day for a specific date and save the search to local storage
  const getImageOfTheDay = (date) => {
    const apiKey = "Njq6AIuCRIcG5vpPWoObBZk7K85FDTdNKRfFMO53";
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const currentImageContainer = document.getElementById("current-image-container");
        currentImageContainer.innerHTML = `
          <h2>${data.title}</h2>
          <img src="${data.url}" alt="${data.title}">
          <p>${data.explanation}</p>
        `;
        
        saveSearch(date);
        addSearchToHistory();
      })
      .catch(error => console.log(error));
  }
  
  // Function to save a date to local storage
  const saveSearch = (date) => {
    let searches = JSON.parse(localStorage.getItem("searches")) || [];
    searches.push(date);
    localStorage.setItem("searches", JSON.stringify(searches));
  }
  
  // Function to display the search history from local storage
  const addSearchToHistory = () => {
    const searchHistory = document.getElementById("search-history");
    searchHistory.innerHTML = "<h2>Search History</h2>";
    searchHistory.style.padding = "2%";
    
    let searches = JSON.parse(localStorage.getItem("searches")) || [];
    
    searches.forEach(search => {
      const searchItem = document.createElement("li");
      searchItem.innerText = search;
      searchItem.addEventListener("click", () => getImageOfTheDay(search));
      searchHistory.appendChild(searchItem);
    });
  }
  
  // Function to handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const searchInput = document.getElementById("search-input");
    const searchDate = searchInput.value;
    getImageOfTheDay(searchDate);
    searchInput.value = "";
  }
  
  // Add event listener to the search form submit button
  const searchForm = document.getElementById("search-form");
  searchForm.addEventListener("submit", handleFormSubmit);
  
  // Call the getCurrentImageOfTheDay function when the page loads
  getCurrentImageOfTheDay();
  


// Help me with this!     
//                                                                                                                                                    1)Build a web page that retrieves data from NASA's Picture of the Day API, allowing the user to select a date from a form and send it in the query params. 
// 2)The page should allow the user to save their searches to local storage and display their past searches on the page. 
// 3)The page should also display the current image of the day when it loads.                                                                                                  

// Problem Statement:
// 1.Create an HTML file with a form that allows the user to select a date and a submit button. The form should have an ID of "search-form" and the input field should have an ID of "search-input".


// 2.Create a section in the HTML file with an ID of "current-image-container" where the data will be shown.


// 3.Create an unordered list in the HTML file with an ID of "search-history" where the user's past searches will be displayed.


// 4.Create a CSS file to style the HTML elements.


// Create a JavaScript file with the following functions:


// getCurrentImageOfTheDay(): This function should fetch the data for the current date from the NASA API and display it in the UI. This function runs when the page loads.

// getImageOfTheDay(): This function should fetch the data for the selected date from the NASA API and display it in the UI. It should also save the date to local storage and also show it in the search history unordered list.

// saveSearch(): This function should save a date to local storage. As shown in the recording, you need to just save the dates in an array.

// addSearchToHistory(): This function should add the date to the search history list in the Ui. You need to get the searches array from localstorage and display it as an unordered list in the ui. 
// When a user clicks on the specific list item, you need to fetch the data for that specific date all over again and show it in the black div.

// Make sure when the user clicks the list item , you show the search results again on the screen in the div.


// NASA API:

// "https://api.nasa.gov/planetary/apod " : This endpoint returns the data for the image of the day for a given date. The date should be passed in as a query parameter in the format YYYY-MM-DD. 
// The API key should be passed in as a query parameter with the key api_key.

// The API Endpoint to get information of a specific date looks like - https://api.nasa.gov/planetary/apod?date=${date}&api_key=${your_api_key}

// The API Endpoint to get information of current date is also the same, just make sure that the date to passed will be current date and the date you pass in the URL should be in yyyy-mm-dd format.

// For example - https://api.nasa.gov/planetary/apod?api_key=LCc8yC3V8qH2zpKDNlqx2G9jEKIw2kwPOhuNCX2a&date=2023-03-30


// Hint:
// You can use const currentDate = new Date().toISOString().split("T")[0]; to get the currentDate in the format as shown above.