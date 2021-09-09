# 🏗️ Implement One-to-Many Association Between Reader and Book Models

Work with a partner to implement the following user story:

- As a book owner, I want to see the books in my collection.

## Acceptance Criteria

- It's done when the MySQL table for book data has a foreign key referencing the reader table.

- It's done when the response of a GET request to `/api/readers` or `/api/readers/:id` includes the books owned by a reader, like the following JSON:

  ```json
  {
    "id": 1,
    "name": "Lernantino",
    "email": "lernantino@gmail.com",
    "password": "$2b$10$AcbPGE6mNk3aZAnFCan1XeVVbuDYhQiHxOQ/gIG/PSUj2WoOR2pGC",
    "library_card": {
      "id": 2,
      "card_number": "8342e78a-7265-4060-9834-81a19c76c041",
      "reader_id": 1
    },
    "books": [
      {
        "id": 4,
        "title": "The Pragmatic Programmer: Your Journey To Mastery",
        "author": "David Thomas",
        "isbn": "978-0135957059",
        "pages": 352,
        "edition": 2,
        "is_paperback": false,
        "reader_id": 1
      }
    ]
  }
  ```

---

## 💡 Hints

When you associate these models, what will the relationship look like? Would users belong to books, or would books belong to users?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

- As a JavaScript developer using Sequelize, why do you still need to know SQL?

Use [Google](https://www.google.com) or another search engine to research this.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
