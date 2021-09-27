import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return (
    <div className="App">
      <NavBar/>
          <ItemListContainer
            mensaje="La lista se encuentra vacia"
          />
    </div>
  );
}

export default App;
