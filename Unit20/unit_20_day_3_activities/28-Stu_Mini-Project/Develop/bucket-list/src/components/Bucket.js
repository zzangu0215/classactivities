import React, { useState } from "react";
import BucketForm from "./BucketForm";

function Bucket(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    eagerness: "",
  });

  console.log(props.bucket);

  const submitUpdate = (value) => {
    // TODO: Call the editBucketItem function from props to update the edited item in BucketList's state
    // TODO: Set the key:value pairs in the `edit` object back to empty strings to reset the update form
    props.editBucketItem(edit.id, value);
    setEdit({ id: null, value: "", eagerness: "" });
  };

  // If the user is attempting to edit an item, render the bucket form with the edit variable passed as a prop
  if (edit.id) {
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.bucket.map((item) => (
    // - TODO: Add a className of `bucket-row complete ${item.eagerness}` for
    //   completed items, and `bucket-row ${item.eagerness}` for non-completed
    //   items. Hint: use a ternary operator
    // - TODO: Add a key prop set to the value of the item id
    <div className={""}>
      {/* TODO: Add an onClick event that invokes the `completeBucketItem` method
      passing the item id as a argument */}
      <div onClick={() => {}}>{item.text}</div>
      <div className="icons">
        {/* TODO: Add an onClick event update the `edit` object with the `id`,
        `value`, and `eagerness` properties */}
        <p onClick={() => {}}> ✏️</p>
        {/* TODO: Add an onClick event that will invoke the removeBucketItem method passing in the `item.id` */}
        <p onClick={() => {}}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Bucket;
