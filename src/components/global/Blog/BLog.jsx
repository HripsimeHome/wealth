import styles from "./Blog.module.scss";
import Header from "../Header/Header";
import BlogCard from "./BlogCard/BlogCard ";

import { articlesIcon } from "../../../assets/svg";

const Blog = ({ showHeader = true }) => {
  return (
    <section className={styles.blog}>
      {showHeader && (
        <Header
          icon={articlesIcon}
          sectionTitle="articles"
          title="Blog"
          subtitle="Lorem"
        />
      )}

      <div className="containerBlack">
        <div className={`${styles.blog__container} container`}>
          <div className={styles.blog__header}>
            <h2>Latest Posts</h2>
            <div className={styles.blog__headerDescription}>
              <p>Our recent articles</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          {/* header */}

          <BlogCard />
        </div>
        {/* container */}
      </div>
    </section>
  );
};

export default Blog;
