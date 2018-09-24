# mongo-scraper
---
## Description
This app scrapes the most recent movie trailers from IMDB and lets users save movies and leave comments on them.

![Gif app-scrape](/public/assets/img/scrape.gif)

## Demo
---
You can view the demo on Heroku [here!](https://gt-mongo-scraper.herokuapp.com/)

## How It Works
Scrape movies by clicking the "Scrape Movies" button.
Once movies are loaded, view the link to the IMDB page as well as a description of the movie by clicking the save movie button and navigating to that page.
Saved movies can be viewed at the "Saved Movies" page.
Comments can be added on saved movies by clicking the "Notes" button.
Saved movies can be deleted by clicking the "Delete" button.

## Technologies Used
* Node.js
* Express.js
* Handlebars.js
* MongoDB
* Mongoose
* npm packages
  * body-parser
  * express
  * express-handlebars
  * mongoose
  * cheerio
  * request