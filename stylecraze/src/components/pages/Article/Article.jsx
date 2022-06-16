import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./Article.module.css";
import { data } from "./data.js";
const Article = () => {
  console.log(data);
  const { id } = useParams();
  // console.log(id);
  const [article, setarticle] = useState({});
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`https://my-api-hosting-for-stlcrz.herokuapp.com/articles/${id}`)
      .then((r) => setarticle(r.data));
  }, [id]);
  console.log(article);
  // console.log(id);
  return (
    <div className={styles.article_maindiv}>
      <div className={styles.article_child}>
        <div className={styles.top_short_descriptiondiv}>
          <h2 className={styles.mainheading}>{article.heading}</h2>

          <span className={styles.timeline_span}>
            May 4, 2022 Written{" "}
            <span className={styles.auther_span}>{article.auther}</span>
          </span>

          <p className={styles.short_description_text}>
            All products recommended on StyleCraze are independently selected by
            our editorial team. If you make a purchase through any of these
            links, we may receive a commission. Learn more about our product
            selection process here.
          </p>
          <img className={styles.first_image} src={article.image} alt="" />
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime,
            natus! Labore sequi sed totam quod expedita, eaque reiciendis fugiat
            consequuntur et est cum soluta dolorem rem repellendus odio in.
            Provident. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Suscipit error quidem rerum unde vero laboriosam ullam quasi maxime?
            Alias distinctio itaque et officia voluptatibus labore autem
            laboriosam? Vel, ea voluptatum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. <br /> <br /> Quod ratione sunt
            aperiam aspernatur laboriosam eaque id iste modi doloremque! Minima
            voluptates consectetur veritatis fugiat, delectus quibusdam dolore
            reprehenderit nihil? Soluta. Officiis id, vitae error voluptate
            blanditiis aut, similique esse cumque tempora suscipit maiores
            doloremque at eos quia! Sunt sint deserunt repudiandae modi
            deleniti, neque eaque earum impedit. Blanditiis, in magni?
          </p>
        </div>
        {data.map((elem) => (
          <div key={elem.id} className={styles.article_description_div}>
            <h3>{elem.head}</h3>

            <p>{elem.head_subtext}</p>
            <h3>{elem.subhead}</h3>
            <span>{elem.subhead_subtext}</span>
            <img src={elem.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
