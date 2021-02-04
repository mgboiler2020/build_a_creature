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
![WF1](/readme_images/wireframe1.jpeg)
![WF2](/readme_images/wireframe2.jpeg)

### Welcome Screen
![Intro](/readme_images/Intro.png)

### Question
![Question](/readme_images/Question.png)

### Answer & Score
![Answer](/readme_images/Answer.png)

### Exit
![Exit](/readme_images/Exit.png)

## Goals
### Minimum Viable Product
+ 10 multiple choice questions ✔︎
+ No photos ✔︎
+ Type answer and hit submit ✔︎
+ Score shown on exit screen ✔︎
### Stretch Goal 1
+ The completed creature will be assigned to the user ID and the user can see all the creatures they have created.

### Stretch Goal 2
+ I want to be able to create an imaginary animal

### Strecth Goal 3
+ I don’t want to be able to create the same animal I did previously

### Strecth Goal 3
+ I want to see an image of the animal I created

## Author
Ana Cecilia Maldonado Cervantes and Matt Guffy