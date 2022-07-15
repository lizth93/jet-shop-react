import "./App.css";

//own
import Main from "../components/Main.styled";
import Header from "../components/Header/Header.styled";
import useInitializeProducts from "./useInitializeProducts";

function App() {
  useInitializeProducts();
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
