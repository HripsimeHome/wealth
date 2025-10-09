import styles from "./Blog.module.scss";
import { useState } from "react";
import BlogHeader from "./BlogHeader/BlogHeader";
import BlogCardList from "./BlogCardList/BlogCardList";
import { useInfiniteScroll } from "../../../hooks/useInfiniteScroll";

const Blog = ({ posts }) => {
  const [visibleCount, setVisibleCount] = useState(2); // сколько постов показываем сначала -  2 поста

  // Берём только видимые посты
  const visiblePosts = posts.slice(0, visibleCount);

  // Функция подгрузки новых постов
  const handleLoadMore = () => {
    if (visibleCount < posts.length) {
      setVisibleCount((prev) => prev + 2); // Добавляем ещё 2 поста
    }
  };

  // Используем хук infinite scroll, получаем ref
  const loadMoreRef = useInfiniteScroll(handleLoadMore);

  return (
    <section className={styles.blog}>
      <BlogHeader />

      <div className={styles.blog__cardContainer}>
        {/* <BlogCardList posts={posts} /> */}
        <BlogCardList posts={visiblePosts} />

        {visibleCount < posts.length && (
          <div ref={loadMoreRef} style={{ height: 40 }} />
        )}
      </div>
    </section>
  );
};

export default Blog;
