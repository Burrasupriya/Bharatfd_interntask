I have used node.js and express.js 
# Features

View FAQs with multilingual support (English, Hindi, Bengali, etc.)

Search for specific questions

Admin panel for adding, editing, and deleting FAQs

REST API built with Express and MySQL

Frontend built with React


# directory structure
faq
===>backend
======server.js
======>routes
=========faqs.js
======db.js
===>src
======>components
=========home.js
=========admin.js
===>public
===>readme.md


# Technologies Used

Backend: Node.js, Express.js, MySQL

Frontend: React.js, Axios

Translation: Google Translate API (google-translate-api-x)

react should be react18 if we are doing npx create-react-app it is installing react19 and we should degrade it react18 inorder to support all the functions.

# API Endpoints

Get FAQs

GET /api/faqs

Query Parameters:

lang: Language code (default: en)

search: Search query (optional)

Response: List of FAQs (translated if lang is specified)


# Add FAQ

POST /api/faqs

Body:
{
  "question": "What is Node.js?",
  "answer": "Node.js is a JavaScript runtime."
}
Response:
{ "message": "FAQ added successfully", "id": 1 }

# Update FAQ

PUT /api/faqs/:id
Body:
{
  "question": "Updated Question?",
  "answer": "Updated Answer."
}
Response:
{ "message": "FAQ updated successfully" }

# Delete FAQ

DELETE /api/faqs/:id
Response:
{ "message": "FAQ deleted successfully" }

# Usage

User Side

Open the application in a browser.

Select a language from the dropdown.

Search for FAQs using the search bar.

View translated FAQs.

Admin Side

Navigate to the Admin Panel.

Add new FAQs using the form.

Edit or delete existing FAQs.




# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
