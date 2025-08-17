import styles from "./Blog.module.scss";
import BlogHeader from "./BlogHeader/BlogHeader";
import BlogCard from "./BlogCard/BlogCard";

const Blog = () => {
  return (
    <section className={`${styles.blog} containerBlack`}>
      <BlogHeader />

      <div className={styles.blog__cardContainer}>
        <BlogCard />
      </div>
    </section>
  );
};

export default Blog;
