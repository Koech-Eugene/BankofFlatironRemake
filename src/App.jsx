import { Link, Route, Routes } from "react-router-dom";
import  Home  from "./pages/Home";
import About from"./pages/About"
import TransForm from "./pages/TransForm";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='about'>About</Link>
          </li>
          <li>
            <Link to='transForm'>Transaction Form</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/transForm" element={<TransForm/>}/>
      </Routes>
    </>
  );
}
export default App;
