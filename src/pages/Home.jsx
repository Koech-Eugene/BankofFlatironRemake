
import "../App.css";
import SearchBar from "../components/SearchBar";
import TransactionTable from "../components/TransactionTable";
import AddTransactionForm from "../components/AddTransactionForm";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import UpdateForm from "../components/UpdateForm";
import TransForm from "./TransForm";

function Home() {
  // state to hold transactions
  const [transactions, setTransactions] = useState([]);
  //using a copy of the search value
  const [term, setTerm] = useState("");
  const [sortType, setSortType] = useState(null);

  // as the component mounts , this will run initially
  useEffect(() => {
    fetchTransaction();
  }, []);

  const fetchTransaction = async () => {
    try {
      const response = await fetch("http://localhost:8001/transactions");
      const data = await response.json();
      setTransactions(data);
      console.log(data);
      console.log(transactions);
    } catch (error) {
      console.log("Error fetching transaction ", error);
    }
  };

  const handleSearch = async (searchValue) => {
    // console.log("from app.js " , searchValue)
    setTerm(searchValue);
    console.log(term);
    // from using the search value to filter my shared transactions
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(term.toLowerCase())
  );

  const addTransaction = async (newTransaction) => {
    try {
      const response = await fetch("http://localhost:8001/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTransaction),
      });
      if (response.ok) {
        //re render
        fetchTransaction();
      } else {
        console.log("Error adding transaction ", response.statusText);
      }
    } catch (error) {
      console.error("error adding transaction ", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8001/transactions/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setTransactions(
          transactions.filter((transaction) => transaction.id != id)
        );
      } else {
        console.log("Error deleting transaction ", response.statusText);
      }
    } catch (error) {
      console.error("error deleting transaction ", error);
    }
  };

  //sort function
  const handleSort = (type) => {
    if (sortType === type) {
      setSortType(null);
    } else {
      setSortType(type);
      // making a copy of the transactions array to be used for sorting purposes as per the type
      const sortedTransactions = [...transactions];

      if (type === "category") {
        sortedTransactions.sort((a, b) => a.category.localeCompare(b.category));
      } else if (type === "description") {
        sortedTransactions.sort((a, b) =>
          a.description.localeCompare(b.description)
        );
      }
      setTransactions(sortedTransactions);
    }
  };

  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [updateId, setUpdateId] = useState("");

  function getDate(e) {
    setDate(e.target.value);
  }
  function getCategory(e) {
    setCategory(e.target.value);
  }
  function getDescription(e) {
    setDescription(e.target.value);
  }
  function getAmount(e) {
    setAmount(e.target.value);
  }
  function getUpdateId(e) {
    setUpdateId(Number(e.target.value));
  }

  const performPatch = async (updatedTransaction) => {
    try {
      const patchRespnse = await fetch(
        `http://localhost:8001/transactions/${updatedTransaction.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedTransaction),
        }
      );
      if (patchRespnse.ok) {
        // re-render
        fetchTransaction();
      } else {
        console.error(
          "Error updating the transaction",
          patchRespnse.statusText
        );
      }
    } catch (error) {
      console.error("error adding transaction", error);
    }
  };

  async function onUpdateButtonClicked() {
    const updatedTransaction = {
      description: description,
      date: date,
      amount: amount,
      category: category,
      id: updateId,
    };
    setTransactions(
      transactions.map((transaction) => {
        return transaction.id === updateId ? updatedTransaction : transaction;
      })
    );
    performPatch(updatedTransaction);
  }

  return (
    <>
      <div className="App">
        <h2>Bank Of FlatIron</h2>
        <SearchBar onSearch={handleSearch} />
        <br></br>
        <button
          style={{
            margin: 10,
          }}
          className="btn btn-primary"
          onClick={() => handleSort(null)}
        >
          Clear Sort
        </button>
        <button
          style={{
            margin: 10,
          }}
          className="btn btn-primary"
          onClick={() => handleSort("category")}
        >
          Sort by Category
        </button>
        <button
          style={{
            margin: 10,
          }}
          className="btn btn-primary"
          onClick={() => handleSort("description")}
        >
          Sort by Description
        </button>
        <TransactionTable
          transactions={filteredTransactions}
          onDelete={handleDelete}
        />
        {/* <AddTransactionForm onAdd={addTransaction} /> */}
        {/* <TransForm onAdd={addTransaction}/> */}
        <UpdateForm
          getAmount={getAmount}
          getCategory={getCategory}
          getDescription={getDescription}
          getDate={getDate}
          getUpdatedId={getUpdateId}
          onUpdateButtonClicked={onUpdateButtonClicked}
        />
      </div>
    </>
  );
}

export default  Home;
