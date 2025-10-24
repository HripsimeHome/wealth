import styles from "./BlogSingle.module.scss";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../../../utils/formatDate";
import { useAnimationInView } from "../../../../hooks/useInViewAnimation";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../../providers/TransitionProvider";
import ImageWebp from "./../../../layout/ImageWebp/ImageWebp";

const BlogSingle = ({ article }) => {
  const { ref: blogSingleHeaderRef, inView: isBlogSingleHeaderInView } =
    useAnimationInView({
      threshold: 0.1,
    });

  const { ref: blogSingleImgRef, inView: isBlogSingleImgInView } =
    useAnimationInView({
      threshold: 0.5,
    });

  const { ref: blogSingleContentRef, inView: isBlogSingleContentInView } =
    useAnimationInView({
      threshold: 0.5,
    });

  const navigate = useNavigate();

  if (!article) return <p>Статья не найдена</p>;

  const {
    title,
    description,
    image,
    webpImage,
    avatar,
    authorName,
    category,
    date,
    content,
  } = article;

  return (
    <section className={`${styles.blogSingle} container`}>
      <button
        className={` ${styles.blogSingle__back} btnPrimary`}
        onClick={() => navigate(-1)}
      >
        Back to all posts
      </button>

      <div ref={blogSingleHeaderRef}>
        <TransitionProvider
          inProp={isBlogSingleHeaderInView}
          delay={100}
          style={TransitionStyleTypes.zoomIn}
          className={styles.blogSingle__header}
        >
          <span className={styles.blogSingle__category}>{category}</span>
          <h1 className={styles.blogSingle__title}>{title}</h1>
          <p>{description}</p>

          <img
            src={avatar}
            alt={authorName}
            className={styles.blogSingle__avatar}
          />
          <span className={styles.blogSingle__authorName}>{authorName}</span>
          <span className={styles.blogSingle__date}>
            {formatDate(date, true)}
          </span>
        </TransitionProvider>

        <div className={styles.blogSingle__imgContainer} ref={blogSingleImgRef}>
          <TransitionProvider
            inProp={isBlogSingleImgInView}
            delay={400}
            style={TransitionStyleTypes.bottom}
          >
            <ImageWebp
              src={image}
              srcSet={webpImage}
              alt={title}
              className={styles.blogSingle__img}
            />
          </TransitionProvider>
        </div>
      </div>

      <div
        className={`${styles.blogSingle__contentContainer} paddingYLg`}
        ref={blogSingleContentRef}
      >
        {content.map(({ heading, text, subtext }, index) => (
          <TransitionProvider
            inProp={isBlogSingleContentInView}
            delay={800}
            style={TransitionStyleTypes.bottom}
            className={styles.blogHeader}
          >
            <div key={index}>
              <h2 className={styles.blogSingle__heading}>{heading}</h2>
              <p className={styles.blogSingle__text}>{text}</p>
              {subtext && (
                <p className={styles.blogSingle__subtext}>{subtext}</p>
              )}
            </div>
          </TransitionProvider>
        ))}
      </div>
    </section>
  );
};

export default BlogSingle;
