import styles from "./Blog.module.scss";
import Header from "../Header/Header";
import BlogCard from "./BlogCard/BlogCard";
import BlogHeader from "./BlogHeader/BlogHeader";

import { articlesIcon } from "../../../assets/svg";

const Blog = () => {
  return (
    <section className={styles.blog}>
      <Header
        icon={articlesIcon}
        sectionTitle="articles"
        title="Blog"
        subtitle="Lorem"
      />

      <div className="containerBlack">
        <div className={`${styles.blog__container} container`}>
          <BlogHeader />
          <BlogCard />
        </div>
      </div>
    </section>
  );
};

export default Blog;
