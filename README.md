# travel-by-locals-web
## Practice application. 
### Purpose: users can add and share travel recommendations from a city they live in and check recommendations of others
Current features:
- responsive introductory main page (basic styling + image, video, song, text)
- button to redirect to a form
- interactive form to GET user input
- location input into form - using Google Places API
- submit button to save data to local storage(LS)
- successful submit popup alert + timer for redirect 
- onsubmit redirect and display of information for the user to review
- display of maps with markers(via Google Maps API + Geocoder API) based on user's previous geolocation input 
- button to clear storage and go back to the main page (and repeat the process if desired)
- dummy button to save user input into a database
- option to edit single item, save new input in LS and display updated set of results on the page
- option to delete single item from page and LS and display updated set of results on the page
- modal dialog box for delete item


Backlog:
- authentication - login verification against some free service (via API)
- add a feature to save images and videos from the form (2phase: to local storage first(5MB) limit + in table display option to add more and save all to databse as per current design vs. save into a database directly - PREFERRED - simpler)
- make a database connection
- save user input into a database
- create form dropdowns based on previous users' input
