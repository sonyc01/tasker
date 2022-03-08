# Tasker Project

## Project Description

Mobile application created to save project ideas and references. It is capable of creating projects based on ideas and save refernces directly from the mobiles browser. The user can then split the project into tasks which can have further refences and issues. All of the users actions are synced to an online database and a Github repository for desktop use.

## Technologies used

- React/React Native
  - used to implement app logic and hand the UI of the app
  - used because of previous usage on other projects and speed of MVP development
- Firebase
  - used as a DB provider with real time update capability
  - NoSQL design patterns
  - No need for a seperate backend due to firebase cloud functions which handle the CRUD operations between the app and the DB
  - user auth provider
  - used before on previous projects
- Github GraphQL API
  - used to sync data between the Github repo and the application
  - only avaialbe method to comunicate with the Github projects API currently

## Task List

- [x] Create Task List => README.md
- Week 4
  - [x] Set up work enviroment, repo and download dependencies - 1H
  - [x] Set up basic layout of a React project - 2H
- Week 5
  - [ ] Implement a basic GUI layout - 2H
  - [ ] Add action buttons with dummy API calls - 1H
- Week 6
  - [ ] Set up Firebase DB architecture - 1H
  - [ ] Start work on Firebase cloud functions and backend - 2H
- Week 7
  - [ ] Finish work on backend functions - 1H
  - [ ] Add ability to create projects => connect to backend - 2H
- Week 8
  - [ ] Add ability to create sub tasks of projects - 3H
- Week 9
  - [ ] Functions to save references from browser to the app and assign them to a project -2H
  - [ ] Start work on Github API sync
- Week 10
  - [ ] Finish the functionality of syncing with Github - 3H
- Week 11
  - [ ] Add user authentication with firebase API - 3H
- Week 12
  - [ ] Project presentation
