import React from "react";
import { productsdata } from "./product.js";
import styles from "./Product.module.css";
const Products = () => {
  console.log(productsdata);
  return (
    <div className={styles.product_container}>
      <div>
        <h3 className={styles.shophead}>Shop</h3>
      </div>
      <div className={styles.categoryselector}>
        <select name={"categoryselector"} placeholder={"Category"}>
          <option value="">Select Category</option>
          <option value="Fashion">Fashion</option>
          <option value="Fitness">Fitness</option>
          <option value="Skin_Care">Skin Care</option>
          <option value="Make_Up">Make Up</option>
          <option value="Hair_Care">Hair Care</option>
          <option value="Hair Styles">Hair Styles</option>
        </select>
      </div>
      <div className={styles.prdoducts_div}>
        {productsdata.map((elem) => (
          <div key={elem.id} className={styles.prdoducts_iteam}>
            <img src={elem.imagelink} alt="" />
            <div>
              <span>{elem.category}</span>
              <h3> {elem.heading}</h3>
              <p>{elem.desc}</p>
              <p>Read More…</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
