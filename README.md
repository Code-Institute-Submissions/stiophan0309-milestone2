## Knoydart - Scotland's True Wilderness

Knoydart - Scotland's True Wilderness, is a one stop shop site with information about visiting  the Knoydart peninsula in the Scottish Highlands - the remotest part of mainland Britain.  The site gives information about travelling to Knoydart, accomodation and activities/things to do and see in the area.

Using the site gives users shows that Knoydart is not just for the experienced hillwalker but also for everyone from newlyweds to people seeking to just get away from it all in an idyllic surrounding.

The main goals of the site are:

* To promote Knoydart as a holiday destination
* To provide a one stop shop of what Knoydart has to offer
* To appeal to different clientele and encourage them to visit

## UX

The website is designed for visitors:

* Who can speak English
* Who are looking for information about visiting the Knoydart peninsula in Western Scotland

The project will benefit users because:

* The site uses a friendly responsive layout
* Does not focus on any specific subject, other sites go too much into detail straight away

* The website is
..* Easy to navigate
..* Broken down into clear sections without information overload

### User stories

1. As a new vistor to the site, I want to be able to easily navigate around the site so I can find easily the information I require.
2. As a new vistor to the site, I want to be able to view accommodation, activities and travel details so I can decide if Knoydart is a place I wish to visit.
3. As a hillwalker I want information on walks, details of the hill(s) and local amenities.
4. As a holidaymaker I want to find out what accommodation and activities are available.
5. As a newlywed I wish to find out if Knoydart is suitable for a honeymoon.
6. As a group we wish to see if our group can be accommodated and what facilities and activities are available.


### Wireframes

Links to wireframes are as folows:

*[Browser Window](/wireframes/Browser_Window.png)
*[Mobile](/wireframes/Mobile.png)
*[Full Page](/wireframes/Full_Page.png)
*[Full Page - Tablet](/wireframes/Full_Page-Tablet.png)
*[Full Page - Mobile](/wireframes/Full_Page-Mobile.png)

## Features

The following features are in place on the site:

The site is a single page website broken down into sections, all of which can be accessed by scrolling down or using the relevant link from the Navbar.

### Existing Features

* Navbar - allows user to navigate to the various sections by clicking on the relevant entry.  the Header/Navbar also always stays at the top for easy navigation, when the user scrolls down the header will collapse to save screen space.
* Map - allows users to see where the location of accommodation and attractions etc
* Map Markers - allows user to view information about that location.
* Reference letters - In the various sections allows the user to refer to the relevant map marker.

### Features to be implemented

At the time of development it was hoped that all the JS scripts could be combined and different JSON files used for the location, map marker and accommodation data but this was not possible due to time constraints and is hoped to be achieved in the future.

## Technologies Used

<img src="https://camo.githubusercontent.com/904ade21b6fb63dec17555495bb36f749ba52023/68747470733a2f2f73332d75732d776573742d322e616d617a6f6e6177732e636f6d2f706c7567696e7365727665722f646f635265736f75726365732f737461636b2e737667" width="350px">

### In this project I also used:

* Bootstrap - [http://getbootstrap.com/]
    - I use **Bootstrap** to give the project a simple, responsive layout.
    
* jQuery - [https://jquery.com]
    - jQuery was used to access some additional libraries which are required by Bootstrap and Google Maps which give additional function to the site.

* JSON - [https://www.json.org/json-en.html]
    - I use JSON for dynamically storing and accessing data to avoid clutter within HTML and JavaScript code.

## Testing

HTML and CSS have been validated by using the W3C HTML and CSS validation services:

* [CSS Validator](https://jigsaw.w3.org/css-validator/)
* [HTML Validator](https://validator.w3.org/)

### Manual Testing of Site

1. Header collapse
    ..i. Go to Home page
   ..ii. Scroll down using mouse
  ..iii. Checked to see if Title and Subtitle collapse onto one line
  
2. Navigation Bar
    ..i. Go to Home Page from a desktop computer
   ..ii. Use device settings in Google Chrome to mimic various devices to test if layout is responsive, and
  ..iii. Re-size browser window to see if Navbar is responsive and collapes at small resolutions
   ..iv. Click on each navigation item to verify it scrolls to the relevant section and doesn't disappear underneath the fixed header
    ..v. Repeated above using a tablet and mobile phone

3. Map
    ..i. Click on map markers to verify an infowindow appears
   ..ii. Click on the external link on the infowindow to verify it links to the relevant url
  ..iii. Click on the cluster icons to verify the map zooms in to view individual clusters
   ..iv. Click on map markers after having zoomed in and repeat steps i. and ii.
   
4. Accommodation Section
    ..i. Go to home page
   ..ii. Go to Accommodation section
  ..iii. Verfiy each 'card' is displaying correctly (image, text, and Visit Page link)
   ..iv. Verify each Visit Page botton works and links to the relevant url
   
5. Rest of site
    ..i. Go to Home Page
   ..ii. Click on relevant button on Navbar
  ..iii. Verify any links work and go to relevent url
   

## Deployment

The project was developed on the GitPod IDE and deployed to GitHub via the push function.

The url of the deployed site is as follows:

[https://stiophan0309.github.io/milestone2/]

The url of the development site is:

[https://github.com/stiophan0309/milestone2]

## Credits

### Acknowledgements

My mentor Simen Daehlin has been instrumental in guiding m through the development process

### Content

The site was built using content from the following sites:

* Visit Knoydart [https://www.visitknoydart.co.uk]
* Walk Highlands [https://www.walkhighlands.co.uk]
* Kilchoan Estate [https://www.kilchoan-knoydart.com]
* Knoydart Foundation [http://www.knoydart-foundation.com]
* Visit Scotland [https://www.visitscotland.com]
* Western Isles Cruises [https://westernislescruises.co.uk]
* Trip Advisor [https://www.tripadvisor.co.uk]

### Media

All images on the site are linked from the above websites with the exception of Visit Knoydart.




