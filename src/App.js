import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from "./components/NavBar";
// import ItemListContainer from './components/ItemListContainer';


const App = () => {
  return(
    <>
      <NavBar />
      {/* <ItemListContainer greeting= "Bienvenidos a la Tienda"/> */}
      <ItemDetailContainer></ItemDetailContainer>
    </>
  );
}

export default App;