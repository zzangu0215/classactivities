# Creating Indexes

In this activity, you will create an index on your object store that can be used to query data.

## Instructions

- In your browser's DevTools, be sure to have deleted the "todoList" database from the list of IndexedDB in the Application tab before starting this activity!

- Write code to request an IndexedDB database instance.

- On success, log the result to your console.

- Inside the `onupgradeneeded` method, create an object store for your database called `toDoList`. Next, create three indexes for your ToDoList called `icebox`, `inprogress` and `complete`.

## 💡 Hint(s)

- Use the [createIndex](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/createIndex) docs if you are stuck.
