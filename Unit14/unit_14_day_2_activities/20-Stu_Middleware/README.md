# 📖 Implement Middleware Function for User Authentication

Work with a partner to implement the following user story:

- As a developer, I want to write my own middleware to check for user authentication.

## Acceptance Criteria

- It's done when the middleware checks whether the user is logged in.

- It's done when the middleware allows access to the gallery and painting pages if the user is logged in.

- It's done when the middleware directs an unauthorized user to the login page if they are not logged in yet.

## 📝 Notes

Refer to the documentation:

[Express.js documentation on using middleware](https://expressjs.com/en/guide/using-middleware.html)

## Instructions

1. Create a .env file with your MySQL credentials. (Use `.env.EXAMPLE` as a template.)

2. Run `npm install` to install dependencies.

3. Run `npm run seed` to seed the database.

4. Read the hints.

5. Create a middleware function to redirect to the login route if the user isn't logged in.

6. Update `home-routes.js` so that it uses the withAuth middleware function.

7. Reference the instructor demo, documentation, and ask questions if you are stuck.

---

## 💡 Hints

How can you keep the current logic being used in the routes to check whether a user is logged in or not and rewrite it as a middleware function? Where can you write the code for the custom middleware so that it is separate but accessible from the routes? (Where did you put the custom helper functions?)

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

- What other middleware do developers use with Express.js?

Use [Google](https://www.google.com) or another search engine to research this.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
