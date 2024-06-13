# DirtRider Fullstack 

An in development personal project that fills the gap in the market for hiring dirt bikes from individual people. 

## In Progress 
I am currently learning how to implement Stripe and Socket.io. Keep checking in to see the progress! 


### User Story as Customer 

* To view all available bikes
* Search all bikes by make or engine size
* See availability for bookings
* Book a bike for hire 

  ## Stretch
  * message owner
  * search by location -Google maps API

### User Story as Bike Host
* Add a bike - images using Multer
* manage bookings

  ## Stretch
  * messaging between host and customer using https://socket.io/
  * set available dates

## Current setup

### Frontend set-up 
* React.js
* Routes using react-route-dom
* Custom Hooks
* Tailwind and Daisy UI for styling

### Backend set-up 
* Express for routes
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

