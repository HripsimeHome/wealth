import styles from "./BlogCardList.module.scss";

import { useNavigate, Link } from "react-router-dom";
import ImageWebp from "./../../../layout/ImageWebp/ImageWebp";

const BlogCardList = ({ posts }) => {
  const navigate = useNavigate();

  return (
    <>
      {posts.map(
        ({
          id,
          image,
          webpImage,
          avatar,
          authorName,
          category,
          date,
          title,
        }) => (
          <Link to={`/blog/${id}`} key={id}>
            <div className={styles.blogCard}>
              <div className={styles.blogCard__imgWrapper}>
                <ImageWebp
                  src={image}
                  srcSet={webpImage}
                  alt={title}
                  className={styles.blogCard__img}
                />
                <div className={styles.blogCard__more}>+</div>
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
                  <span className={styles.blogCard__date}>{date}</span>
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

export default BlogCardList;
