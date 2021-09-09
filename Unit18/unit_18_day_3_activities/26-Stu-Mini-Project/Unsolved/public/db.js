let db;
// TODO: create a new db request for a "BudgetDB" database.
const request = window.indexedDB.open("budgetDB", 1);

request.onerror = function (event) {
  console.log(`⛔ ${e.target.errorCode}`);
};

// TODO: setup database with BudgetStore object store.
request.onupgradeneeded = function (event) {
  // create object store called "BudgetStore" and set autoIncrement to true
  db = event.target.result;
  const budgetStore = db.createObjectStore("budgetDB", {
    autoIncrement: true,
  });
};

request.onsuccess = function (event) {
  console.log("open BudgetDB success 🔌");
  db = event.target.result;

  if (navigator.onLine) {
    console.log("Online! 🌐");
    checkDatabase();
  }
};

// TODO: checkDatabase is called when the user goes online. This function should
// get all items in the BudgetStore object store and send a request to the
// backend to add them to the database. If the request is successful, all items
// should be removed from the BudgetStore object store.
function checkDatabase() {
  // open a transaction on your pending db
  const transaction = db.transaction(["budgetDB"], "readonly");
  // access your BudgetStore object
  const budgetStore = transaction.objectStore("budgetDB");
  // get all entries in the BudgetStore
  const getAll = budgetStore.getAll();

  getAll.onsuccess = async () => {
    if (getAll.result.length === 0) {
      // no items to post to backend
      return;
    }
    const response = await fetch("/api/transaction/bulk", {
      method: "POST",
      body: JSON.stringify(getAll.result),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });
    // result contains the newly added items;
    const dbTransactions = await response.json();
    if (dbTransactions.length > 0) {
      // TODO: remove all objects from BudgetStore
      // create a new readwrite transaction with the BudgetStore
      const newTransaction = db.transaction(["budgetDB"], "readwrite");
      // access the BudgetStore object store
      const newBudgetStore = newTransaction.objectStore("budgetDB");
      // clear all items in BudgetStore
      newBudgetStore.clear();
    }
  };
}

// TODO: saveRecord accepts a record object and saves it in the BudgetStore
// object store
function saveRecord(record) {
  // create a transaction on the pending db with readwrite access
  const transaction = db.transaction(["budgetDB"], "readwrite");
  // access your pending object store
  const budgetStore = transaction.objectStore("budgetDB");
  // add record to your store with add method.
  budgetStore.add(record);
}

// listen for app coming back online
window.addEventListener("online", checkDatabase);
