import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TransForm from "./pages/TransForm";

function App() {
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
      } else {
        console.log("Error adding transaction ", response.statusText);
      }
    } catch (error) {
      console.error("error adding transaction ", error);
    }
  };

  return (
    <>
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="transForm">Add Transaction Form</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/transForm"
          element={<TransForm onAdd={addTransaction} />}
        />
      </Routes>
    </>
  );
}
export default App;
