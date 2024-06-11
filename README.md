# CS-465 Journal - Project Retrospective and Reflection

## Architecture
**Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the Single-Page Application (SPA).**

First and foremost, JavaScript is a powerful development language that effectively runs all of the MEAN stack; it's behind code execution across the application from Node to Express to Angular. Express is a framework built on Node.js that runs the application's back-end, but notably is also equipped to run the front-end (which is the case for the customer-facing part of the website). In turn, the Single-Page Application (SPA) is built using Angular, a front-end language (again, running JavaScript) with powerful tools to build and run web applications. Angular employs this rich set of tools to allow navigating between webpages without reloading the whole webpage, which is the defining trait of SPAs. This behavior reduces server load and increases webpage load speeds to users, with the downside that the webpage's initial load is often slower because the entire site is loaded immediately.

**Why did the backend use a NoSQL MongoDB database?**

MongoDB is the preferred database solution for the MEAN and MERN stacks because it goes hand-in-hand with the JavaScript language (more specifically, JSON). MongoDB acts as the 'model' in the Model-View-Controller architecture, while the Controller and Views are handled by various tools running JavaScript that make generous use of JSON data files. MongoDB focuses specifically on JSON, meaning it is an excellent option for a JavaScript- and JSON-focused tech stack. MongoDB documents are stored as Binary JSON (BSON).



## Functionality
**How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces?**

JSON and JavaScript are adjacent to each other, but perform wildly different tasks. JSON is a format for data storage, while JavaScript is a fully-featured object-oriented programming language. To generalize, JSON is a data storage medium, while JavaScript is a system for function and operation execution. JSON ties together the front-end and back-end by acting as a uniform data storage and transportation medium that both sides of the application know exactly how to interact with natively.

**Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable User Interface (UI) components.**

Earlier in development process, all Views in the application were translated from static HTML to dynamic Handlebars (.hbs) templates. This allows for highly modular code and dramatically reduces repetitive code, saving developer time and ultimately reducing bugs. Later, data that was hard-coded into the Controllers was transferred into static JSON files, reducing unnecessary responsibility from the controllers. Finally, these static JSON files were translated into the MongoDB database, where the data is now dynamic and can be easily and efficiently interacted with. Additionally, reusable User Interface (UI) components further reduce repetitive code (again, a time waster during development) and makes changes later in development much easier and safer. When a single view is reused in multiple places, changing that specific view means that each of its uses changes along with it; code does not have to be changed repetitively, and there is no risk of some part of the application being forgotten.



## Testing
**Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.**

Methods for request and retrieval in APIs refer to CRUD (create, read, update, delete) operations, also known as POST, GET, PUT, and DELETE. These operations are used to interact with data stores to perform various data operations. The API utilizes URL endpoints to access data and perform operations, like the "./trips" endpoint to retrieve a list (JSON formatted) of all trips existing in the database. Furthermore, proper security practices are critical to keeping user data safe as well as ensuring that only authorized users can access certain parts of the application. By using authentication mechanisms like username/password protection with hashing and salting, the application immediately becomes significantly more secure. Other layers of security are often employed in addition, which further increases the level of the application's security.



## Reflection
**How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?**

This course has been my first 'real' exposure to front-end and full-stack development, and is certainly my first experience using tools like those included in the MEAN stack (with the exception of MongoDB and JSON). While I have prior experience in other development languages like Java, C++, and C#, my experience with front-end languages and scripting (HTML, CSS, JavaScript, etc.) was minimal prior to this course. I've also learned about and used a handful of powerful tools to help with full-stack development, like Postman for testing API endpoints and MongoDB compass for viewing and modifying database/collection contents in real-time. Skills I've gained from this course and the MEAN stack are important foundationally for many careers in the Computer Science field, regardless of whether the role is front-end, back-end, or full-stack; having a rich set of skills is beneficial in most, or all, situations.
