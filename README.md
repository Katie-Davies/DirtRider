# DirtRider Fullstack 

An in development personal project that fills the gap in the market for hiring dirt bikes from individual people. 

## In Progress 
I am currently learning how to implement Stripe and Socket.io. Keep checking in to see the progress! 

### All Users
* View profile
* Edit profile


### User Story as Customer 

* To view all available bikes
* Search all bikes by make or engine size
* See availability for bookings
* Book a bike for hire - update and delete

  ## Stretch
  * Message owner 
  * Search by location -Google maps API

### User Story as Bike Host
* Add a bike - images using Multer
* Manage bookings - update and delete
* Set available dates

  ## Stretch
  * Messaging between host and customer using https://socket.io/

### AI Stretch
* User to ask the preferences of the rider i.e. beginner, trail riding. AI to give recommendations on the type of bike they should hire.

## Current setup

### Frontend set-up 
* React.js
* Routes using react-route-dom
* React0Query- aCustom Hooks
* Tailwind and Daisy UI for styling
* Auth0
* JWT Tokens

### Backend set-up 
* Express for routes
* JWT middleware for authorisation
* Knex library for database queries
* SQLite database 



### Installation
#### **From the command line**

```
git clone git@github.com:Katie-Davies/DirtRider.git
npm install # to install dependencies
npm run knex migrate:latest
npm run knex seed:run # to create database
npm run dev # to start the dev server
```

You can find the server running on [http://localhost:3000](http://localhost:3000) and the client running on [http://localhost:5173](http://localhost:5173).

---

