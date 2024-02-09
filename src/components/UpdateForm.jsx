import React from "react";

function UpdateTransactionForm({
  getDate,
  getCategory,
  getDescription,
  getAmount,
  onUpdateButtonClicked,
  getUpdatedId,
  visability
  
  

}) {
  return (
  <form style={{display:visability}}>
      <label htmlFor="date">Date</label>
      <input id="date" type="date" placeholder="Date" onChange={getDate} />

      <label htmlFor="category">Category</label>
      <input
        id="category"
        type="text"
        placeholder="Category"
        onChange={getCategory}
      />

      <label htmlFor="Description">Description</label>
      <input
        id="Description"
        type="text"
        placeholder="Description"
        onChange={getDescription}
      />

      <label htmlFor="amount">Amount</label>
      <input
        id="amount"
        type="number"
        placeholder="Amount"
        onChange={getAmount}
      />

      <label htmlFor="updateId">Update Id</label>
      <input
        id="updateId"
        type="number"
        placeholder="enter id of transaction to update"
        onChange={getUpdatedId}
      />
      <button type="button" onClick={onUpdateButtonClicked}>
        Submit
      </button>
    </form>
  );
}

export default UpdateTransactionForm;
