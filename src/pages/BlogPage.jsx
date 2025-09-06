import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Blog from "../components/global/Blog/Blog";
import BlogSingle from "../components/global/Blog/BlogSIngle/BlogSingle";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/blogData.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch blog data");
        //if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);

        return res.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error loading blogData.json:", err));
  }, []);

  // if (!posts || posts.length === 0) return <p>Loading posts...</p>;
  // Аналогичо этому
  if (!posts?.length) return <p>Loading posts...</p>;

  if (id) {
    const article = posts.find((post) => post.id === id);
    if (!article) return <p>Статья не найдена</p>;

    return <BlogSingle article={article} onBack={() => navigate(-1)} />;
  }

  return (
    <div className="containerBlackTopRounded">
      <Blog posts={posts} />
    </div>
  );
};
// const BlogPage = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const res = await fetch("/data/blogData.json");
//         if (!res.ok) throw new Error("Failed to fetch blog data");

//         const data = await res.json();
//         setPosts(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   // вычисляем article всегда, даже если id нет
//   const article = useMemo(
//     () => (id ? posts.find((post) => post.id === id) : null),
//     [posts, id]
//   );

//   // пока грузится
//   if (loading) return <p>Loading posts...</p>;
//   // ошибка загрузки
//   if (error) return <p>Error: {error}</p>;

//   // Single article
//   if (id) {
//     if (!article) return <p>Статья не найдена</p>;
//     return <BlogSingle article={article} onBack={() => navigate(-1)} />;
//   }

//   // Blog list
//   return (
//     <div className="containerBlackTopRounded">
//       <Blog posts={posts} />
//     </div>
//   );
// };
export default BlogPage;
