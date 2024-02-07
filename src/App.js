import { Link, Route, Routes } from "react-router-dom";
import  Home  from "./pages/Home";
import About from"./pages/About"

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
export default App;
