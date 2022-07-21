import "./App.css";

//own
import Main from "../components/main/Main.styled";
import Header from "../components/Header/header.styled";
import useInitializeProducts from "./use-initialize-products";

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
