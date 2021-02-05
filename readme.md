# Software Engineer Immersive Program - Project 2
## Build-a-Creature
An online creature creation app (similar to Build-a-Bear)

## Description & Motivation
We wanted to create an app for kids of all ages to be able to select animal body components and "build" them into complete creatures.

## Technologies Used
+ Command Line: Interaction with the computer and navigating the file system.  Running local server (nodemon)
+ Source Control: Interaction, management and uploading files and changes on code to Git repository.
+ Sequelize: Create database, tables, and generate data/seed files from command line.
+ Postgres: Database and tables
+ Visual Studio Code: Coding on HTML, CSS, JavaScript, and Express.
+ Production Deployment: Pubished/deployed via Heroku
+ Google Chrome Web Browser: Launching the website
+ Google Chrome Developer Tools: Debugging and solving problems in the code
+ Installed: Nodemon, Express, ejs, method-override

## Installation
+ Web Browser
+ Internet Connectivity


## Approach
The app is built on a SQL database.  Tables included: BodyParts (contains data for creature bodyparts), Buildings (a join table), Gardens (finished creatures), and Users (user data).

The app allows for creation of new user accounts, login, editing, and deletion of the same.  Once logged in a user can view completed creatures in a gallery or choose to create creatures of their own by making a choice at the bottom of the User Profile screen. 

Once in the build screen the user can select the body parts needed via checkboxes.  When all the appropriate body parts are chosen the user clicks on the Create Creature button.  This button navigates to a new screen where the creature will be displayed.


## Images
### Wireframe
![WF](/readme_images/wireframe.png)

### Views
![View](/readme_images/IMG_8293.jpg)

### Welcome Screen
![welcome](/readme_images/welcome.png)

### Sign Up
![signup](/readme_images/signup.png)

### User Profile
![userprofile](/readme_images/userprofile.png)

### User Profile
![userprofile](/readme_images/userprofile.png)

### Create Creature
![buildEJS](/readme_images/buildEJS.png)

### Show Creature Garden
![garden-show](/readme_images/Garden-Show.png)

## Goals
### Minimum Viable Product
+ User model has full CRUD✔︎
+ User selects body parts ✔︎
+ User gives new creature a name ✔︎
+ New creature is created in database ✔︎
+ All creatures created are displayed in gallery ✔︎
+ The completed creature will be assigned to the user ID ✔︎

### Stretch Goal 1 (might move back to MVP)
+ The user can see all the creatures they have created in the past.

### Stretch Goal 2
+ We want to be able to create an imaginary animal.

### Strecth Goal 3
+ We do not want to be able to create the same animal we did previously

### Strecth Goal 4
+ We want to see images of the animals we created

### Strecth Goal 5
+ We want to edit/update the animals we created

### Strecth Goal 6
+ We want to delete the animals we created ✔︎

## Author
Ana Cecilia Maldonado Cervantes and Matthew Otis Guffy.  Co-Creators
