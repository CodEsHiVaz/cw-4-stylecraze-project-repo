import React, { useState } from "react";
import styles from "./Product.module.css";
const Product = () => {
  const [product, setproduct] = useState([]);
  return (
    <div className={styles.productmain}>
      <div className={styles.productchild}>
        <div className={styles.topshortdescriptiondiv}>
          <h2 className={styles.mainheading}>
            Best Nail Polish Colors That Look Great On All Skin Tones In 2022
          </h2>

          <span className={styles.timeline_span}>
            May 4, 2022 Written by{" "}
            <span className={styles.auther_span}>Esha Saxena</span>
          </span>

          <p className={styles.short_description_text}>
            All products recommended on StyleCraze are independently selected by
            our editorial team. If you make a purchase through any of these
            links, we may receive a commission. Learn more about our product
            selection process here.
          </p>
          <img
            className={styles.first_image}
            src="https://cdn2.stylecraze.com/wp-content/uploads/2012/09/Best-Nail-Polish-Colors-For-Olive-Tan-Light-Medium-Skins.jpg.webp"
            alt=""
          />
          <p className={styles.description}>
            A well-done coat of nail polish can make your hands look appealing.
            And there are some nail colors that look best on medium skin, some
            on olive skin, and some on tanned skin. So, we have put together a
            list of the best nail polish colors for different skin tones so that
            you can pick the one that matches your skin tone the best. <br />{" "}
            Using a specific nail paint that goes well with your skin color will
            accentuate the beauty of your nails and your hands. It will add to
            the glam of your outfit and help you express your personality
            better. So, scroll down and check out our sifted list to pick the
            shades that are made for your skin tone and texture.
          </p>
        </div>
        <div className={styles.tabular_product_presentation}>
          <div className={styles.tabular_product_head}>
            <div>TOP 10 PRODUCTS</div>
            <div className={styles.tabular_chckprice}> CHECK PRICE</div>
          </div>
          <div className={styles.tabular_body}>
            <div>
              <div>
                Best For Winter: O.P.I Infinite Shine Nail Polish In Stick To
                Your Burgundies
              </div>
              <div>Price on Amazon</div>
            </div>{" "}
            <div>
              <div>Best Streak-Free Application: Essie In Bahama Mama</div>
              <div>Price on Amazon</div>
            </div>{" "}
            <div>
              <div>
                Best Semi-Matte Finish: Duri Nail Polish - Cloud True Blue
              </div>
              <div>Price on Amazon</div>
            </div>{" "}
            <div>
              <div>
                Best High-Shine Finish: O.P.I In To Infinity And Blue-Yond
              </div>
              <div>Price on Amazon</div>
            </div>{" "}
            <div>
              <div>Best For Summer: China Glaze In Sun Of A Peach</div>
              <div>Price on Amazon</div>
            </div>{" "}
            <div>
              <div>
                Best 10-Free Formula: Deborah Lippmann In Peaches & Cream
              </div>
              <div>Price on Amazon</div>
            </div>{" "}
            <div>
              <div>Best Chip-Resistant: Orly In Fancy Fuchsia</div>
              <div>Price on Amazon</div>
            </div>{" "}
            <div>
              <div>Most Pigmented: Essie In The Fuchsia Is Bright</div>
              <div>Price on Amazon</div>
            </div>{" "}
            <div>
              <div>Best Applicator: Essie in Tangerine Tease</div>
              <div>Price on Amazon</div>
            </div>{" "}
            <div>
              <div>Best In Budget: Revlon Core Nail In Tangerine</div>
              <div>Price on Amazon</div>
            </div>
          </div>
        </div>
        <div className={styles.contemts_indexing}></div>
      </div>
    </div>
  );
};

export default Product;
