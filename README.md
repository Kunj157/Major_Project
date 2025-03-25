**Description**

- It is a booking platform that has many different filters for one to choose a property that suits the needs.
- This application enables users to rent the places such as hotels, restaurants all across the globe, post the reviews regarding those places as well as posting their properties for rental purposes with detailed description.
- This project is a web application built with Node.js and Express. It uses EJS as the templating engine and includes functionalities for user management, listing management, and reviews and MongoDB for database interactions. The project is structured to follow the MVC (Model-View-Controller) pattern. It is deployed using [Render](https://major-project-kl3p.onrender.com/listings). It leverages cloud-platform services of cloudinary.
- It supports user-friendly responsive UI for enhanced user-experience built with the help of Bootstrap.
- Implemented User-Authentication and Authorization using PassportJS middleware.


**Table of Contents**

- Installation
- Usage
- Project Structure
- Routes
- Models
- Controllers
- Views
- Middleware
- Utils
<br>

**1. Installation:-**

- git clone https://github.com/yourusername/delta.git
- cd delta

**2. Install dependencies:**

- npm install

**3. Set up environment variables:**

- Create a .env file in the root directory and add the necessary environment variables.<br>
- Refer to .env.example for the required variables.

**4. Start the application:**

- npm start

**5. Usage**

- Once the application is running, you can access it at http://localhost:8080. The app allows users to sign up, log in, create listings, and post reviews.


**Project Structure:-**

```
delta/
├── controller/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── init/
│   ├── data.js
│   └── index.js
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── map.js
│       └── script.js
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
├── views/
│   ├── includes/
│   │   ├── error.ejs
│   │   ├── flash.ejs
│   │   ├── footer.ejs
│   │   └── Navbar.ejs
│   ├── layouts/
│   │   └── boilerplate.ejs
│   ├── listings/
│   │   ├── edit.ejs
│   │   ├── index.ejs
│   │   ├── new.ejs
│   │   └── show.ejs
│   └── users/
│       ├── login.ejs
│       └── signup.ejs
├── app.js
├── cloudConfig.js
├── middleware.js
├── package.json
├── package-lock.json
└── schema.js
```
