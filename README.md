# SHA E-Commerce Legacy Project.

# Table Of Contents:  
  - [Overview](#overview)
  - [Description](#description)
  - [Team](#team)
  - [Technologies](#technologies)
  - [Installation and Running Application](#installation-and-running-application)
  - [Dependencies](#dependencies)
  - [How to Use?](#how-to-use)
  - [Credits](#credits)
  - [Demo](#demo)

## An E-commerce shop with electronics

## Overview
An application created as a project for Social Hacker's Academy Fullstack Developer Course.
It was created using MERN stack: React for the frontend, MongoDB for the database, as well as Node.js & Express.js for the backend.
The challenges we faced was the limited time of a week for this project. Also to learn React and pass values and props between pages and components. 

## Description
This is an application created with MERN stack, featuring an e-shop selling electronic products. The goal for this project was to understand someone else's code and add some more features to the project, as well as to get more familiar with React states, props, and components.

There are 3 main categories of products: mobile phones, laptops and accessories. 
The user can create an account and then login to the application.
The user gets authenticated via a token, using the JsonWebToken library.
Inside the application the user can browse the products. There is one page for each category.

There was a one week time limit for this project. In this period, as a new feature, we added a shopping cart component. Users can see the product's name, unit price, and the total amount of products added to the cart. We also added an admin role to the users. If a user has an admin role, he/she will see an "Admin" button on the top-right corner of the page, and be able to add new products to the shop. And we made some design. In the future, we would like to enhance the shopping cart features. Also we would like to complete the orders part of the application as well as make the UI smoother and a nice experience for the users.  
  
## Team  
  
- Product Owner: Anita (Ourania) Angelidou, Mohamed Asif Yousufi
- Scrum Master: Sofia TACHMATZIDOU,
- Development Team Members: Mehmet TOKGOZ, Sofia TACHMATZIDOU  

## Technologies

This project created using MERN Stack. **MERN Stack** was preferred for this project because it allows faster application development using only javascript and without combining different programming languages.  

   **MongoDB** **(mongoose)** is a high-performance, cost-effective database system with a schemaless database feature.  

   **Express.js** was used with Node.js, as it links easily and fast to databases.  

   **React**, **Styled components**, were used to enhance the web design.  

   **Node.js** was chosen for this application, as it is lightweight, efficient, has good performance, and is very fast in building web applications. In addition, there is a vast amount of tools in npm to support the developer.

 
## Installation and Running Application

The project is uploaded to Github.

To get the project on your computer follow these steps:
1. Fork the project's repository to your Github account
2. Clone the repository from your Github account to your local hard drive `git clone [url]`
3. Open a command prompt and go to the project's repository
4. Type `npm install` to install the node package dependencies
5. Type `npm start` to run the server
6. The server should be available at `http://localhost:3636` and the application at `http://localhost:3000`

In case the application doesn't start at `http://localhost:3000` then:
1. At the command prompt go to the projects repository and then inside the folder *client* by typing `cd client`
2. Then type `npm start` to start React

### Dependencies

The project has the following dependencies:

For the Node.js dependencies:  

    "bcrypt": "^5.1.0",  
    
    "body-parser": "^1.20.1",  
    
    "cors": "^2.8.5",  
    
    "dotenv": "^16.0.3",  
    
    "express": "^4.18.2",  
    
    "jsonwebtoken": "^9.0.0",  
    
    "mongoose": "^6.8.4"  
    

 Development dependencies:  
 
    "nodemon": "^2.0.20"  
    

React dependencies are:  

    "axios": "^1.2.3",  
    
    "react": "^18.2.0",  
    
    "react-dom": "^18.2.0",  
    
    "react-icons": "^4.7.1",  
    
    "react-router-dom": "^6.7.0",  
    
    "react-scripts": "5.0.1",  
    
    "styled-components": "^5.3.6",  
    
    "web-vitals": "^2.1.4"  
    

Environmental requirements:  

    Create a .env file and fill in the following properties with your preferences.
    MONGO_URI
    TOKEN_KEY
    TOKEN_EXPIRES_IN

## How to use?
Initially at the beginning of the project the user lands at the home page `/`
There the user can Register, Login or browse the categories
Once the user registers at `/auth/register`, he/she gets redirected to the login page `/auth/login`
From the login page the user gets redirected to the profile page `/profile` 
From the profile page the user can select a category of products and redirect to the selected category's page, namely `/profile/category/mobile`, `/profile/category/laptops` or `/category/accessories`

The rest of the project remains unfinished

## Credits
The project owners are:
- Anita (Ourania) Angelidou,
- Mohamed Asif Yousufi
  
The project updated by:
- Sofia Tachmatzidou,
- Mehmet TOKGOZ

## Demo

You can watch a demo of the application here: [Live-Demo](https://vimeo.com/807678443/16dc0e10eb)





 
