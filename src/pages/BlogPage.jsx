import { Outlet } from "react-router-dom";
import Blog from "../components/global/Blog/Blog";
import BlogHeader from "../components/BlogPage/BlogHeader/BlogHeader";

const BlogPage = () => {
  return (
    <>
      {/* <BlogHeader /> */}
      <Blog />
      {/* <Outlet /> */}
    </>
  );
};

export default BlogPage;
