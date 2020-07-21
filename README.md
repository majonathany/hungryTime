##About this Project

This project was written in ReactJS, with the styling done in SCSS mostly. 

###To run the project, navigate in the terminal to the inner directory `hungry_time`, and run `npm start`.

There were a couple of things to note in this project -

1. I make use of the Google Maps API, which should show your current location on the page load.
If it does not, check that your location is determinable. If it is not, the map loads automatically
at Miami's coordinates.

2. I had run out of time with implementing the distance query. As `distance` is not in the API,
I had been planning on using another API to get a list of zip codes within the specified zip code, 
enumerate the zip codes within the specified distance, and then iterate over the list of zip codes to get a larger
query.

3. It seems the `price` parameter doesn't work for some reason in the OpenTable API. 
Typing in `zip: 90210` with a price of `1, 2, 3, 4` all yield the same results.

4. In general, I ran out of time as I work during the day and made everything from scratch. The
app was not tested on mobile devices or screens with different sizing and accessibility
configurations, but should run properly anyway.

------------------------

### If you have any questions, let me know at majonathant@gmail.com. Thanks!