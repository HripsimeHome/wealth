import styles from "./BlogMain.module.scss";
import { Link } from "react-router-dom";
import ImageWebp from "./../../../layout/ImageWebp/ImageWebp";
import Header from "../../Header/Header";
import { articlesIcon } from "../../../../assets/svg";

import { contactsPagePath } from "../../../../router/path";
import {
  investingStartersImage,
  investingStartersWebpImage,
  moneyImage,
  moneyWebpImage,
  investingImage,
  investingWebpImage,
  portfolioImage,
  portfolioWebpImage,
  avatarImage,
} from "../../../../assets/images";

const BlogMain = () => {
  return (
    <section className={styles.blogMain}>
      <Header
        icon={articlesIcon}
        sectionTitle="articles"
        title="Blog"
        subtitle="Lorem"
      />
      <div className="containerBlack">
        <div className={`${styles.blogMain__container} container`}>
          <div className={styles.blogMain__counter}>
            <div>36K</div>
            <div>28</div>
            <div>14</div>
            <div>15</div>
          </div>

          <div className={styles.blogMain__header}>
            <h2>Latest Posts</h2>
            <div className={styles.blogMain__headerDescription}>
              <p>Our recent articles</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          {/* header */}

          <div className={styles.blogMain__cardContainer}>
            <Link to={contactsPagePath}>
              <div className={styles.blogMain__card}>
                <div className={styles.blogMain__imgWrapper}>
                  <ImageWebp
                    src={investingImage}
                    srcSet={investingWebpImage}
                    alt="Investing Starters"
                    className={styles.blogMain__img}
                  />
                  <span className={styles.blogMain__more}>+</span>
                </div>

                <div className={styles.blogMain__info}>
                  <div className={styles.blogMain__test}>
                    <span>
                      <img
                        src={avatarImage}
                        alt="Blogger avatar"
                        className={styles.blogMain__avatar}
                      />
                    </span>

                    <span className={styles.blogMain__name}>
                      {" "}
                      david ross
                      <hr className={styles.blogMain__line} />
                    </span>
                  </div>

                  <div className={styles.blogMain__test1}>
                    <span className={styles.blogMain__label}>investing</span>
                    <span className={styles.blogMain__data}>Aug 11</span>
                  </div>
                </div>
                {/* info */}

                <h2 className={styles.blogMain__title}>
                  Investing Starters Advice 101
                </h2>
              </div>
            </Link>

            <div className={styles.blogMain__card}>
              <div className={styles.blogMain__imgWrapper}>
                <ImageWebp
                  src={moneyImage}
                  srcSet={moneyWebpImage}
                  alt="Investing Starters"
                  className={styles.blogMain__img}
                />
                <span className={styles.blogMain__more}>+</span>
              </div>
              <h2 className={styles.blogMain__title}>
                How Much Money Should I Save?
              </h2>
            </div>
            <div className={styles.blogMain__card}>
              <div className={styles.blogMain__imgWrapper}>
                <ImageWebp
                  src={investingImage}
                  srcSet={investingWebpImage}
                  alt="Investing Starters"
                  className={styles.blogMain__img}
                />
                <span className={styles.blogMain__more}>+</span>
              </div>
              <h2 className={styles.blogMain__title}>
                How Should I Get Started With Investing?
              </h2>
            </div>
            <div className={styles.blogMain__card}>
              <div className={styles.blogMain__imgWrapper}>
                <ImageWebp
                  src={portfolioImage}
                  srcSet={portfolioWebpImage}
                  alt="Investing Starters"
                  className={styles.blogMain__img}
                />
                <span className={styles.blogMain__more}>+</span>
              </div>
              <h2 className={styles.blogMain__title}>
                How to Diversify Your Portfolio
              </h2>
            </div>
            {/* <div className={styles.blogMain__card}>card 4</div> */}
          </div>
          {/* cardContainer */}
        </div>
        {/* container */}
      </div>
    </section>
  );
};

export default BlogMain;
