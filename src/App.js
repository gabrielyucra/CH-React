import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return(
    <>
      <NavBar />
      <ItemListContainer greeting= "Bienvenidos a la Tienda"/>
    </>
  );
}

export default App;