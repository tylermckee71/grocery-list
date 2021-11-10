import "./App.css";
import GroceryList from "./components/GroceryList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Grocery List</p>
        <GroceryList items={[]} />
      </header>
    </div>
  );
}

export default App;
