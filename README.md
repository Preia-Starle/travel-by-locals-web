# travel-by-locals-web
## Practice application. 
### Purpose: users can add and share travel recommendations from a city they live in and check recommendations of others
Current features:
- responsive introductory main page (basic styling using Google Material Design, image, video, song)
- recommendations form to GET user input
- location input into form - using Google Places API
- submit button to save data to local storage(LS)
- successful submit popup alert
- onsubmit redirect and display of results in a table
- display of maps with markers(via Google Maps API + Geocoder API) based on user's previous geolocation input 
- option to edit single item, save new input in LS and display updated set of results on the page
- option to delete single item from page and LS and display updated set of results on the page
- modals for delete item, edit item, dropdown menu
- button to clear storage and go back to main page
- authentication - sign-in option and login verification using Auth0
- SQL database hosted in Azure
- node + express.js API, DB connection, routing to prepare for saving user input into database


Backlog:
- add an option to create a user profile for authenticated users
- add a feature to upload images and videos with recommendations
- add an option for user to share their recommendations with others based on authentication and created profile - button to send user input saved in local storage to a database and display it on a page for others to see
- dropdown menu with list of locations - onclick will display a page with results(recommendations) based on location
- enable search
- enable adding to favourites
