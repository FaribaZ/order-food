import { Fragment, useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showHandler = () => {
    setCartIsShown(true);
  };
  const hideHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideHandler} />}
      <Header onShown={showHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
