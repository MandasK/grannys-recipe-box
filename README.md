
![Granny's Recipe Box](./logo.png)

A project from [Amanda King](https://github.com/MandasK) for [NSS Cohort 41](http://nashvillesoftwareschool.com/).


## Granny's Recipe Box

An app to add and track recipes. Entries are uploaded by the user uploading a photo or screenshot of a recipe. Using Tesseracts OCR software and a locally hosted API the API will return the formatted the text back into the recipe. The user can then edit the recipe, add other users as friends and see their recipes.


## Setup
Steps to get started:
1. `git clone git@github.com:MandasK/grannys-recipe-box.git`
1. `cd` into the directory it creates
1. `mkdir api`
1. `touch api/database.json`
1.  add `{"users":[], "recipes":[], "friends":[],"notes":[]}` to database.
1. `json-server -p 8088 -w api/database.json`
1. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Using Granny's Recipe Box

1. Register a new account.*
1. To add a new recipe select "Add a New Recipe" in the navbar. Then select "Choose file" under the "Upload Image to Return as Text" section. From here select a file to upload (this should be a text based photo or screenshot"). Then select "Choose file" under "Upload Recipe Image" section (this should be an image of the cooked recipe). Select continue after previews have loaded. Now enter a recipe title and then select Submit. Your recipe is now available.
1. To edit or delete your recipes, just open the recipe either from "My Recipe Box" or the main recipe list and select edit or delete to update. 
1. To add a Friend, select a user from the dropdown menu and select add. You can then select on that user's name and go to their recipes to add notes about the recipe. You can also delete your own notes if you no longer wish to see the note.
1. You can also search by ingredient or recipe author. The search just simply start typing the ingredient or username from the search bar.
1. To logout, simply select the logout button on the top right to be logged out and redirected to the login page.


(*) Note: this is not true authentication. Email addresses are saved in clear text in the JSON database, and anyone who knows your email could login to see information inside database. Do not store any sensitive information, including, but not limited to birthdates, social security numbers, mother's maiden names, names of first pets, and/or shoe sizes.

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

