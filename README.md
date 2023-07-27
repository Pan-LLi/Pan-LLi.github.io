The content below is an example project proposal / requirements document. Replace the text below the lines marked "__TODO__" with details specific to your project. Remove the "TODO" lines.

(__TODO__: your project name)

# Find Restroom around you in NYC

## Overview

(__TODO__: a brief one or two paragraph, high-level description of your project)

Finding a restroom is not easy as many restrooms are not open to the public My web app can help users to find public toilet around them in New York City. Users are able to contribute to new public restroom. Users who are interested in my web app can create their account to store their preference of restrooms, such as restrooms closed to them.




## Data Model

(__TODO__: a description of your application's data and their relationships to each other) 

My database include a list of free public restrooms in NYC

The data contains location, accessbility, and name

Users can find the nearest restroom based on such information

Users can contribute to add new restroom to database



Embed might be applied

(__TODO__: sample documents)

js

An Example User:

{
  Name: Restroom1,
  Location: NYU,
  OpenYearRound: Yes,
  HandicappedAccessible: Yes,
  Borough: Brooklyn,
  Comments: some comments...
}



An Example List with Embedded Items:

{
  Name: Restroom1,
  Location: NYU,
  OpenYearRound: Yes,
  HandicappedAccessible: Yes,
  Borough: Brooklyn,
  Comments: [
    {PublicTransportationAround: "A train"}
    {comment:...}
  ]
}



## [Link to Commented First Draft Schema](db.mjs) 
[Link](db.mjs)


## Wireframes

(__TODO__: wireframes for all of the pages on your site; they can be as simple as photos of drawings or you can use a tool like Balsamiq, Omnigraffle, etc.)

[WireFrame](documentation/WireFrame.jpeg)

/list/create - page for creating a new shopping list

![list create](documentation/list-create.png)

/list - page for showing all shopping lists

![list](documentation/list.png)

/list/slug - page for showing specific shopping list

![list](documentation/list-slug.png)

## Site map

(__TODO__: draw out a site map that shows how pages are related to each other)
[SiteMap](documentation/SiteMap.jpeg)

Here's a [complex example from wikipedia](https://upload.wikimedia.org/wikipedia/commons/2/20/Sitemap_google.jpg), but you can create one without the screenshots, drop shadows, etc. ... just names of pages and where they flow to.

## User Stories or Use Cases

(__TODO__: write out how your application will be used through [user stories](http://en.wikipedia.org/wiki/User_story#Format) and / or [use cases](https://en.wikipedia.org/wiki/Use_case))

1. as a user, I can contribute to add new restroom to restroom database
2. as a user, I can find the nearby restrooms
3. as a user, I can see the list of availble restrooms
4. as a user, I can filter the restrooms I want based on some conditions
5. as a user, I can enjoy the interctions with buttons and animations

## Research Topics

(__TODO__: the research topics that you're planning on working on along with their point values... and the total points of research topics listed)

* (2 points) Two Javascript Libraries: Animate On Scroll (AOS) and AniJS
    * AOS create animation effect every time user loads a web page
    * The animation vareis in different elements, including flip, zoom, and fade-in
    * AniJS provides animation when user browsing the web page, such as hovering on buttons and navigating to another link

* (2 points) BootStrap
    * Boostrap will apply to my front-end side
    * Bootstrap will create better visual effects and interactions wih users
    
* (2 points) Html Canvas
    * Use canvas to draw the background image
    * Canvas read the data from the color of a image

* (5 points) Five APi: Maps Embed API, Distance Matrix API, Maps URL Api, Geolocation API, Amadeus Search Api
    * Use GoogleMap API DistanceMatrix Servicea and Geolocation API to find the closet toilet
    * Use GoogleMap embed map service to show the position of a toilet
    * Use GoogleMap API to direct user to the google map page that use their location as origin and toilet as the destination
    * Use Amadeus API to find flight tickets



10 points total out of 8 required points (___TODO__: addtional points will __not__ count for extra credit)


## [Link to Initial Main Project File](app.mjs) 

(__TODO__: create a skeleton Express application with a package.json, app.mjs, views folder, etc. ... and link to your initial app.mjs)
[Link to Homepage](/views/homepage.hbs)
[Link to Layout](/views/layout.hbs)
[Link to database](/db.mjs) 
## Annotations / References Used

(__TODO__: list any tutorials/references/etc. that you've based your code off of)

1. [Data Set Sources](https://catalog.data.gov/dataset/directory-of-toilets-in-public-parks) - (dataset/Directory_Of_Toilets_In_Public_Parks.csv)

2.[Google Maps API](https://developers.google.com/maps/documentation/urls/get-started) - (
  homepage.hbs
)
3.[JS Library](http://anijs.github.io/#intro) -(layout.hbs, report.hbs, contribute.hbs, ticket.hbs, result.hbs, search.hbs )
4.[JS Library](https://michalsnik.github.io/aos/)-(layout.hbs, report.hbs, contribute.hbs, ticket.hbs, result.hbs, search.hbs)