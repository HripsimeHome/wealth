import styles from "./BlogCardList.module.scss";
import { Link } from "react-router-dom";
import { formatDate } from "../../../../utils/formatDate";
import { useAnimationInView } from "../../../../hooks/useInViewAnimation";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../../providers/TransitionProvider";
import ImageWebp from "./../../../layout/ImageWebp/ImageWebp";

const BlogCardList = ({ posts = [] }) => {
  const { ref: cardRef, inView: isCardInView } = useAnimationInView({
    threshold: 0.2,
  });

  return (
    <>
      {posts.length === 0 ? (
        <p>No posts found</p>
      ) : (
        posts.map(
          (
            { id, image, webpImage, avatar, authorName, category, date, title },
            index
          ) => (
            <div ref={cardRef} key={index}>
              <Link to={`/blog/${id}`}>
                <TransitionProvider
                  style={TransitionStyleTypes.bottom}
                  inProp={isCardInView}
                  delay={100}
                >
                  <div className={styles.blogCardList}>
                    <div className={styles.blogCardList__imgWrapper}>
                      <ImageWebp
                        src={image}
                        srcSet={webpImage}
                        alt={title}
                        className={styles.blogCardList__img}
                      />
                      <div className={styles.blogCardList__more}>+</div>
                    </div>

                    <div className={styles.blogCardList__infoBlock}>
                      <div className={styles.blogCardList__authorContainer}>
                        <span>
                          <img
                            src={avatar}
                            alt={authorName}
                            className={styles.blogCardList__avatar}
                          />
                        </span>

                        <span className={styles.blogCardList__authorName}>
                          {authorName}
                          <hr className={styles.blogCardList__line} />
                        </span>
                      </div>

                      <div className={styles.blogCardList__details}>
                        <span className={styles.blogCardList__category}>
                          {category}
                        </span>
                        <span className={styles.blogCardList__date}>
                          {" "}
                          {formatDate(date, false)}
                        </span>
                      </div>
                    </div>
                    {/* infoBlock */}

                    <h2 className={styles.blogCardList__title}>{title}</h2>
                  </div>
                </TransitionProvider>
              </Link>
            </div>
          )
        )
      )}
    </>
  );
};

export default BlogCardList;
