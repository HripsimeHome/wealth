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
    image: investingStartersImage,
    webpImage: investingStartersWebpImage,
    avatar: avatarImage,
    authorName: "David Ross",
    category: "investing",
    date: "june 10",
    title: "Investing Starters Advice 101",
  },
  {
    image: moneyImage,
    webpImage: moneyWebpImage,
    avatar: avatarImage,
    authorName: "Sarah Mitchell",
    category: "budgeting",
    date: "july 20",
    title: "How Much Money Should I Save?",
  },
  {
    image: investingImage,
    webpImage: investingWebpImage,
    avatar: avatarImage,
    authorName: "Maria Carter",
    category: "investing",
    date: "aug 12",
    title: "How Should I Get Started With Investing?",
  },
  {
    image: portfolioImage,
    webpImage: portfolioWebpImage,
    avatar: avatarImage,
    authorName: "John Smith",
    category: "strategies",
    date: "aug 16",
    title: "How to Diversify Your Portfolio",
  },
];

const BlogCard = () => {
  return (
    <>
      {postData.map(
        (
          { image, webpImage, avatar, authorName, category, data, title },
          index
        ) => (
          <Link to={contactsPagePath} key={index}>
            <div className={styles.blogCard}>
              <div className={styles.blogCard__imgWrapper}>
                <ImageWebp
                  src={image}
                  srcSet={webpImage}
                  alt={title}
                  className={styles.blogCard__img}
                />
                <span className={styles.blogCard__more}>+</span>
              </div>

              <div className={styles.blogCard__infoBlock}>
                <div className={styles.blogCard__authorContainer}>
                  <span>
                    <img
                      src={avatar}
                      alt={authorName}
                      className={styles.blogCard__avatar}
                    />
                  </span>

                  <span className={styles.blogCard__authorName}>
                    {authorName}
                    <hr className={styles.blogCard__line} />
                  </span>
                </div>

                <div className={styles.blogCard__details}>
                  <span className={styles.blogCard__category}>{category}</span>
                  <span className={styles.blogCard__data}>{data}</span>
                </div>
              </div>
              {/* infoBlock */}

              <h2 className={styles.blogCard__title}>{title}</h2>
            </div>
          </Link>
        )
      )}
    </>
  );
};

export default BlogCard;
