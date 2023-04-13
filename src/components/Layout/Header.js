import { Fragment } from "react";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeal</h1>
        <HeaderCartButton onClick={props.onShown} />
      </header>
      <div className={classes["main-image"]}>
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/076/314/original/meals.jpg?1681197457"
          alt="A table of food"
        />
      </div>
    </Fragment>
  );
};

export default Header;
