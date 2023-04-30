import logo from "./logo.svg";
import "./App.css";
import Clicking from "./clicking.jsx";
import "bulma/css/bulma.min.css";
import Navbar from "./navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Clicking />
      </div>
    </>
  );
}

export default App;
