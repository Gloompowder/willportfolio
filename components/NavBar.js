"use client";
import React from "react";
import styles from "../styles/NavBar.module.css";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

// import Logo from '../assets/williamlinorange.svg';
// import BLogo from '../assets/williamlinblack.svg';

const NavBar = (props) => {
  const router = useRouter();
  const path = usePathname();

  const windowWidth = props.windowSize.width;
  const nightMode = props.isNightMode;

  const navbarNightModeRender = () => {
    return path != "/" ? (
      ""
    ) : nightMode && windowWidth > 768 ? (
      <div className={styles["nightMode-navbar-container"]}>
        <div className={styles["nightMode-navbar-home-container"]}>
          <h1
            className={styles["nightMode-navbar-home"]}
            onClick={() => props.scrollToSection("introSection")}
          >
            william lin
          </h1>
        </div>
        <div className={styles["nightMode-navbar-subgroup"]}>
          <button onClick={() => props.scrollToSection("aboutSection")}>
            about
          </button>
          <button onClick={() => props.scrollToSection("workSection")}>
            work
          </button>
          <button onClick={() => props.scrollToSection("contactSection")}>
            contact
          </button>
        </div>
      </div>
    ) : nightMode != true && windowWidth <= 768 ? (
      <div className={styles["mobile-navbar-container"]}>
        <div className={styles["mobile-navbar-home-container"]}>
          <h1
            className={styles["navbar-home"]}
            onClick={() => props.scrollToSection("introSection")}
          >
            william lin
          </h1>
        </div>
        <div className={styles["mobile-navbar-button-container"]}>
          <button
            className={styles["navbar-button"]}
            onClick={props.toggleModal}
          >
            =
          </button>
        </div>
      </div>
    ) : nightMode && windowWidth <= 768 ? (
      <div className={styles["nightMode-mobile-navbar-container"]}>
        <div className={styles["nightMode-mobile-navbar-home-container"]}>
          <h1
            className={styles["nightMode-navbar-home"]}
            onClick={() => props.scrollToSection("introSection")}
          >
            william lin
          </h1>
        </div>
        <div className={styles["nightMode-mobile-navbar-button-container"]}>
          <button
            className={styles["nightMode-navbar-button"]}
            onClick={props.toggleModal}
          >
            =
          </button>
        </div>
      </div>
    ) : nightMode != true && windowWidth > 768 ? (
      <div className={styles["navbar-container"]}>
        <div className={styles["navbar-home-container"]}>
          <h1
            className={styles["navbar-home"]}
            onClick={() => props.scrollToSection("introSection")}
          >
            william lin
          </h1>
        </div>
        <div className={styles["navbar-subgroup"]}>
          <button onClick={() => props.scrollToSection("aboutSection")}>
            about
          </button>
          <button onClick={() => props.scrollToSection("workSection")}>
            work
          </button>
          <button onClick={() => props.scrollToSection("contactSection")}>
            contact
          </button>
        </div>
      </div>
    ) : (
      ""
    );
  };

  return (
    // Your NavBar JSX
    navbarNightModeRender()
  );
};

export default NavBar;
