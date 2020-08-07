
![Granny's Recipe Box](../src/logo.png)

A project from [Amanda King](https://github.com/MandasK) for [NSS Cohort 41](http://nashvillesoftwareschool.com/).


## Granny's Recipe Box

An app to add and track recipes. Entries are uploaded by the user uploading a photo or screenshot of a recipe. Using Tesseracts OCR software and a locally hosted API the API will return the formatted the text back into the recipe. The user can then edit the recipe, add other users as friends and see their recipes.


## MVP Definition
1. User login/registration
1. User-specific CRUD for recipes completed
1. User-specific recipe box view of all recipes
1. Add user-specific friends so user can see recipes of others 
1. Add notes on friend's recipes
1. Search recipes by ingredients


## Dream Stretch Goals
1. Add recipes of friends to users recipe dashboard to edit
1. Add in photos for recipes
1. search for keywords to find recipes

## Setup
Steps to get started:
1. `git clone git@github.com:MandasK/grannys-recipe-box.git`
1. `cd` into the directory it creates
1. `mkdir api`
1. `touch api/database.json`
1.  add `{"users":[], "recipes":[], "friends":[],"notes":[]}` to database.
1. `json-server -p 8088 -w api/database.json`
1. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Planning Links
* [ERD](https://dbdiagram.io/d/5f18639a1e6ca02dc1a43e40)
* [Wireframe](https://drive.google.com/file/d/1qB29R5iYr4zS1exdEZkzSw5Rdf1tAfFW/view?usp=sharing)
* [Link to Repo with tickets](https://github.com/MandasK/grannys-recipe-box)


## Technologies Used: 
[React](https://reactjs.org/)
[JavaScript](https://github.com/tesseract-ocr)
[CSS](https://github.com/tesseract-ocr)
[React Bootstrap](https://react-bootstrap.github.io/)
[Tesseract github doc](https://github.com/tesseract-ocr)

