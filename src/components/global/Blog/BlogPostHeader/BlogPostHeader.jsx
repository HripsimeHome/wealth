import styles from "./BlogPostHeader.module.scss";

const BlogPostHeader = () => {
  return (
    <div className={styles.blogPostHeader}>
      <h className={styles.blogPostHeader__title}>Latest Posts</h>
      <div className={styles.blogPostHeader__descriptionContainer}>
        <h4 className={styles.blogPostHeader__subtitle}>our recent articles</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default BlogPostHeader;
