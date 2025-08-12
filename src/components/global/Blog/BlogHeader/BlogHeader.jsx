import styles from "./BlogHeader.module.scss";

const BlogHeader = () => {
  return (
    <div className={styles.blogHeader}>
      <h2>Latest Posts</h2>
      <div className={styles.blogHeader__description}>
        <p>Our recent articles</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default BlogHeader;
