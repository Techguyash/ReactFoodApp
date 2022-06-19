import React from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Freds's delivery</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="image background"></img>
      </div>
    </React.Fragment>
  );
};

export default Headers;