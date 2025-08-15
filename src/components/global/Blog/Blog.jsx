import styles from "./Blog.module.scss";
import BlogPostHeader from "./BlogPostHeader/BlogPostHeader";
import BlogCard from "./BlogCard/BlogCard";

const Blog = () => {
  return (
    <section className={`${styles.blog} containerBlack`}>
      <BlogPostHeader />
      <div className={styles.blog__cardContainer}>
        <BlogCard />
      </div>
    </section>
  );
};

export default Blog;
