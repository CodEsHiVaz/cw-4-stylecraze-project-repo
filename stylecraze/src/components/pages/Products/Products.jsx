import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Product.module.css";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const navigate = useNavigate();
  const [productsdata, setproductsdata] = useState([]);
  const [tempdata, settempdata] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/productsdata`)
      .then((r) => setproductsdata(r.data));
  }, []);

  const categoryselector = (event) => {
    setproductsdata(
      tempdata.filter((elem) => elem.category === event.target.value)
    );
    axios
      .get(`http://localhost:8080/productsdata`)
      .then((r) => settempdata(r.data));
  };

  // ;
  const navfunction = (i) => {
    navigate(`/product/:${i}`);
    // console.log(productsdata[i]);
  };
  // console.log(productsdata);
  return (
    <div className={styles.product_container}>
      <div>
        <h3 className={styles.shophead}>Shop</h3>
      </div>
      <div className={styles.categoryselector}>
        <select name="categoryselector" onChange={(e) => categoryselector(e)}>
          <option>Select Category</option>
          <option value="Fashion">Fashion</option>
          <option value="Fitness">Fitness</option>
          <option value="Skin Care">Skin Care</option>
          <option value="Face Makeup">Make Up</option>
          <option value="Hair Care">Hair Care</option>
          <option value="Hair Styles">Hair Styles</option>
        </select>
      </div>
      <div className={styles.prdoducts_div}>
        {productsdata.map((elem, i) => (
          <div key={elem.id} className={styles.prdoducts_iteam}>
            <img src={elem.imagelink} alt="" />
            <div>
              <span>{elem.category}</span>
              <h3> {elem.heading}</h3>
              <p>{elem.desc}</p>
              <p onClick={() => navfunction(i)}>Read More…</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
