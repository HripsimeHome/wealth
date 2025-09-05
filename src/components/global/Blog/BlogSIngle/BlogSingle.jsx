import styles from "./BlogSingle.module.scss";
import ImageWebp from "./../../../layout/ImageWebp/ImageWebp";

const BlogSingle = ({ article, onBack }) => {
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
    <section className={styles.blogSingle}>
      <button
        className={` ${styles.blogSingle__back} btnPrimary`}
        onClick={onBack}
      >
        Back to all posts
      </button>

      <div className={styles.blogSingle__header}>
        <span className={styles.blogSingle__category}>{category}</span>
        <h1 className={styles.blogSingle__title}>{title}</h1>
        <p>{description}</p>

        <img
          src={avatar}
          alt={authorName}
          className={styles.blogSingle__avatar}
        />
        <span className={styles.blogSingle__authorName}>{authorName}</span>
        <span>{date}</span>

        <ImageWebp
          src={image}
          srcSet={webpImage}
          alt={title}
          className={styles.blogSingle__img}
        />
      </div>

      <div className={`${styles.blogSingle__contentContainer} paddingYLg`}>
        {content.map(({ heading, text, subтext }, idx) => (
          <div key={idx}>
            <h2 className={styles.blogSingle__heading}>{heading}</h2>
            <p className={styles.blogSingle__text}>{text}</p>
            {subтext && <p className={styles.blogSingle__subtext}>{subтext}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSingle;
