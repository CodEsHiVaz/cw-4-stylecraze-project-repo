import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./category.module.css";
const Category = () => {
  const navigate = useNavigate();
  const [cat, setcat] = useState("");
  const [subtop, setsubtop] = useState([]);
  const [articales, setarticales] = useState([]);
  const [articales1, setarticales1] = useState({});
  const [articales4, setarticales4] = useState({});
  const { val } = useParams();
  document.title = `StyleCraze-clone/${val}`;
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`https://my-api-hosting-for-stlcrz.herokuapp.com/${val}`)
      .then((r) => setcat(r.data.title));
    axios
      .get(`https://my-api-hosting-for-stlcrz.herokuapp.com/${val}`)
      .then((r) => setarticales(r.data.articles));
    axios
      .get(`https://my-api-hosting-for-stlcrz.herokuapp.com/${val}`)
      .then((r) => setsubtop(r.data.subtopics));
    axios
      .get(`https://my-api-hosting-for-stlcrz.herokuapp.com/${val}`)
      .then((r) => setarticales1(r.data.articles[0]));
    axios
      .get(`https://my-api-hosting-for-stlcrz.herokuapp.com/${val}`)
      .then((r) => setarticales4(r.data.articles[4]));
  }, [val]);
  // console.log(img1);
  // console.log(cat);
  // console.log(subtop);
  // console.log(articales);
  // console.log(articales1);
  // console.log(articales4);
  const navigatotfunction = (id) => {
    // console.log(id);
    navigate(`/article/${id}`);
  };
  return (
    <div className={styles.categorymain}>
      <div className={styles.categorychild}>
        <div className={styles.directory}> Home » {val} </div>
        <div className={styles.contents}>
          <p className={styles.categoryheader}> {cat}</p>
          <div className={styles.subcats}>
            {subtop?.map((elem) => (
              <div key={elem.id}>{elem.name}</div>
            ))}
          </div>
          <div className={styles.articlediv1}>
            <div>
              <img
                onClick={() => navigatotfunction(articales1.id)}
                src={articales1.image}
                alt=""
              />{" "}
            </div>
            <div className={styles.aticlebigdescription}>
              {" "}
              <h2>{articales1.heading}</h2>
              <p>{articales1.description} </p>
              <div>{articales1.auther}</div>
            </div>
          </div>
          <div className={styles.continerfor3}>
            {articales.map(
              (elem, i) =>
                i > 0 &&
                i < 4 && (
                  <div className={styles.containerfor3children} key={elem.id}>
                    {" "}
                    <img
                      onClick={() => navigatotfunction(elem.id)}
                      src={elem.image}
                      alt="images.png"
                    />
                    <div>
                      <h3>{elem.heading}</h3>
                      <span className={styles.gridauther}>{elem.auther}</span>
                    </div>{" "}
                  </div>
                )
            )}
          </div>
          <div className={styles.articlediv1}>
            <div className={styles.aticlebigdescription}>
              <h2>{articales4.heading}</h2>
              <p>{articales4.description} </p>
              <div>{articales4.auther}</div>
            </div>
            <div>
              <img
                onClick={() => navigatotfunction(articales4.id)}
                src={articales4.image}
                alt=""
              />{" "}
            </div>
          </div>
          <div className={styles.continerfor3}>
            {articales.map(
              (elem, i) =>
                i > 4 &&
                i < 11 && (
                  <div className={styles.containerfor3children} key={elem.id}>
                    {" "}
                    <img
                      onClick={() => navigatotfunction(elem.id)}
                      src={elem.image}
                      alt="images.png"
                    />
                    <div>
                      <h3>{elem.heading}</h3>
                      <span className={styles.gridauther}>{elem.auther}</span>
                    </div>{" "}
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
