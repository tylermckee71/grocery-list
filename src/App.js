import "./App.css";
import GroceryList from "./components/GroceryList";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={titleStyle}>
          <p>Grocery List</p>
          <LocalGroceryStoreIcon fontSize="large" />
        </div>
        <GroceryList items={[]} />
      </header>
    </div>
  );
}

const titleStyle = {
  display: "flex",
  alignItems: "center",
};

export default App;
