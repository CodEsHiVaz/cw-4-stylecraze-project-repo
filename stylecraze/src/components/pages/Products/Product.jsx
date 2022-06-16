import React, { useState } from "react";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";

const Product = () => {
  document.title = "StyleCraze-clone/Product";
  const [product, setproduct] = useState([]);
  const byonamazon = () => {
    window.open(
      "https://www.amazon.com/dp/B01AE1EY5Q?tag=tsr-mkp-nailpolish-skintones-20&linkCode=ogi&th=1&psc=1"
    );
  };
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
          <div className={styles.productdctdiv}>
            <span className={styles.productdct_head_indescription1}>
              Best For Winter:
              <span className={styles.productdct_head_indescription}>
                O.P.I Infinite Shine Nail Polish In Stick To Your Burgundies
              </span>
            </span>
            <div className={styles.product_and_Amoazon}>
              <div>
                <img
                  src="https://m.media-amazon.com/images/I/31hkwRQ0s9L.jpg"
                  alt=""
                />
              </div>

              <div
                className={styles.container_for_byon_amzon}
                onClick={() => {
                  byonamazon();
                }}
              >
                BUY ON AMAZON
              </div>
            </div>
            <span className={styles.reviews_head}>Review</span>
            <span>
              This nail polish from O.P.I’s Infinite Shine 2 range is a gorgeous
              deep purple-y, red shade of burgundy. You need two coats to
              achieve an opaque finish. We love how easy it is to apply this
              formula and end up with a professional salon-like finish. It is
              perfect for the colder months of the year.
            </span>
          </div>
          <div className={styles.productdctdiv}>
            <span className={styles.productdct_head_indescription1}>
              Best Streak-Free Application:
              <span className={styles.productdct_head_indescription}>
                Essie In Bahama Mama
              </span>
            </span>
            <div className={styles.product_and_Amoazon}>
              <div>
                <img
                  src="https://m.media-amazon.com/images/I/315vrtHIIPL.jpg"
                  alt=""
                />
              </div>

              <div
                className={styles.container_for_byon_amzon}
                onClick={() => {
                  byonamazon();
                }}
              >
                BUY ON AMAZON
              </div>
            </div>
            <span className={styles.reviews_head}>Review</span>
            <span>
              This shade from Essie is best described as a warm, rich, creamy
              deep plum. This is a more vibrant color of the burgundy family and
              is a classic color for winter, spring, summer, and fall. It has a
              great formula that gives you streak-free application. You can go
              in with two or three coats for an opaque finish. Do give it a shot
              if you want your hands looking bold and sophisticated.
            </span>
          </div>
          {/* -------------------------------------- */}
          <div className={styles.productdctdiv}>
            <span className={styles.productdct_head_indescription1}>
              Best Semi-Matte Finish:
              <span className={styles.productdct_head_indescription}>
                Duri Nail Polish – Cloud True Blue
              </span>
            </span>
            <div className={styles.product_and_Amoazon}>
              <div>
                <img
                  src="https://m.media-amazon.com/images/I/31DoHGCzjpL.jpg"
                  alt=""
                />
              </div>

              <div
                className={styles.container_for_byon_amzon}
                onClick={() => {
                  byonamazon();
                }}
              >
                BUY ON AMAZON
              </div>
            </div>
            <span className={styles.reviews_head}>Review</span>
            <span>
              This gorgeous pastel blue from Duri is here to bag you tons of
              compliments. This summer or spring color of very subtle and light
              sky blue will look great on olive and medium skin tones. The color
              settles into a semi-matte finish and offers full coverage. This
              long-lasting polish adds charm to your nails and comes with a
              professional brush for precise application
            </span>
          </div>
          {/* ------------------------------ */}
          <div className={styles.productdctdiv}>
            <span className={styles.productdct_head_indescription1}>
              Best High-Shine Finish:
              <span className={styles.productdct_head_indescription}>
                O.P.I In To Infinity And Blue-Yond
              </span>
            </span>
            <div className={styles.product_and_Amoazon}>
              <div>
                <img
                  src="https://m.media-amazon.com/images/I/31lZO4aHtTL.jpg"
                  alt=""
                />
              </div>

              <div
                className={styles.container_for_byon_amzon}
                onClick={() => {
                  byonamazon();
                }}
              >
                BUY ON AMAZON
              </div>
            </div>
            <span className={styles.reviews_head}>Review</span>
            <span>
              This pastel blue from O.P.I is guaranteed to bag you tons of
              compliments. It is the perfect sky blue nail polish color for
              medium and olive skin tones that you can wear during the spring or
              summer. The formula is exceptional because it not only gives you
              comfortable application but also leaves you with a high-shine and
              glossy finish that stays.
            </span>
          </div>
          {/* ------------------------------ */}
          <div className={styles.productdctdiv}>
            <span className={styles.productdct_head_indescription1}>
              Best For Summer:
              <span className={styles.productdct_head_indescription}>
                China Glaze In Sun Of A Peach
              </span>
            </span>
            <div className={styles.product_and_Amoazon}>
              <div>
                <img
                  src="https://m.media-amazon.com/images/I/31kn+Wx+E-L.jpg"
                  alt=""
                />
              </div>

              <div
                className={styles.container_for_byon_amzon}
                onClick={() => {
                  byonamazon();
                }}
              >
                BUY ON AMAZON
              </div>
            </div>
            <span className={styles.reviews_head}>Review</span>
            <span>
              This pastel blue from O.P.I is guaranteed to bag you tons of
              compliments. It is the perfect sky blue nail polish color for
              medium and olive skin tones that you can wear during the spring or
              summer. The formula is exceptional because it not only gives you
              comfortable application but also leaves you with a high-shine and
              glossy finish that stays.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
