import "./App.css";
import Home from "./pages/Home";
import keywords from "./data.json";

function App() {
  const data = keywords.map((data) => data.key);

  return (
    <div className="app">
      <Home data={data} />
    </div>
  );
}

export default App;
