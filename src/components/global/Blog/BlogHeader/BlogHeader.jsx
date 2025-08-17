import styles from "./BlogHeader.module.scss";

const BlogHeader = () => {
  return (
    <div className={styles.blogHeader}>
      <h className={styles.blogHeader__title}>Latest Posts</h>
      <div className={styles.blogHeader__descriptionContainer}>
        <h4>OUR RECENT ARTICLES</h4>
        <p>Read the newest articles crafted to inform and inspire you</p>
      </div>
    </div>
  );
};

export default BlogHeader;
