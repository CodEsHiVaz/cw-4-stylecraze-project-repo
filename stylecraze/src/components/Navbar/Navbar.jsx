import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Navbar/navbar.module.css";

const Navbar = () => {
  const navigator = useNavigate();
  const navigationfunction = (val) => {
    // console.log(val);
    navigator(`/category/${val}`);
  };
  return (
    <div className={styles.navmain}>
      <div>
        <div className={styles.navchild}>
          <Link to={"/"}>
            {" "}
            <img
              src="https://cdn2.stylecraze.com/wp-content/themes/buddyboss-child/images/sc-logo.png"
              alt="logo"
            />
          </Link>
        </div>
        <ul className={styles.menulistul}>
          <li onClick={() => navigationfunction("Makeup")}>MAKEUP </li>{" "}
          <li className={styles.ulpartition}>|</li>
          <li>HAIR CARE</li>
          <li className={styles.ulpartition}>|</li>
          <li>SKIN CARE </li> <li className={styles.ulpartition}>|</li>
          <li>HAIRSTYLES </li> <li className={styles.ulpartition}>|</li>
          <li onClick={() => navigationfunction("Health&wellness")}>
            HEALTH & WELLNESS{" "}
          </li>{" "}
          <li className={styles.ulpartition}>|</li>
          <li>NEWS </li> <li className={styles.ulpartition}>|</li>
          <li>TOOLS </li> <li className={styles.ulpartition}>|</li>
          <li>
            <Link className={styles.link} to={"/products"}>
              PRODUCTS
            </Link>{" "}
          </li>{" "}
          <li className={styles.ulpartition}>|</li>
          <li>
            <Link className={styles.link} to={"/aboutus"}>
              ABOUT US
            </Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};
//
export default Navbar;
