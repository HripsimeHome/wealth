import styles from "./BlogCard.module.scss";
import { Link } from "react-router-dom";
import { contactsPagePath } from "../../../../router/path";
import ImageWebp from "./../../../layout/ImageWebp/ImageWebp";

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

const postData = [
  {
    image: "",
    webpImage: "",
    avatar: "",
    name: "",
    category: "",
    data: "",
    title: "",
  },
];

const BlogCard = () => {
  return (
    <div className={styles.blogCard__cardContainer}>
      <Link to={contactsPagePath}>
        <div className={styles.blogCard__card}>
          <div className={styles.blogCard__imgWrapper}>
            <ImageWebp
              src={investingImage}
              srcSet={investingWebpImage}
              alt="Investing Starters"
              className={styles.blogCard__img}
            />
            <span className={styles.blogCard__more}>+</span>
          </div>

          <div className={styles.blogCard__infoBlock}>
            <div className={styles.blogCard__author}>
              <span>
                <img
                  src={avatarImage}
                  alt="Blogger avatar"
                  className={styles.blogCard__avatar}
                />
              </span>

              <span className={styles.blogCard__name}>
                david ross
                <hr className={styles.blogCard__line} />
              </span>
            </div>

            <div className={styles.blogCard__blogInfo}>
              <span className={styles.blogCard__category}>investing</span>
              <span className={styles.blogCard__data}>Aug 11</span>
            </div>
          </div>
          {/* info */}

          <h2 className={styles.blogCard__title}>
            Investing Starters Advice 101
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
