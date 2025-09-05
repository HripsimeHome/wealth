import styles from "./Blog.module.scss";
import BlogHeader from "./BlogHeader/BlogHeader";
import BlogCardList from "./BlogCardList/BlogCardList";

const Blog = ({ posts }) => {
  return (
    <section className={styles.blog}>
      <BlogHeader />

      <div className={styles.blog__cardContainer}>
        <BlogCardList posts={posts} />
      </div>
    </section>
  );
};

export default Blog;
