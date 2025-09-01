import { Outlet } from "react-router-dom";
import Blog from "../components/global/Blog/Blog";
//import BlogSingle from "../components/global/Blog/BlogSIngle/BlogSingle";

const BlogPage = () => {
  return (
    <>
      {/* <BlogSingle /> */}
      <Blog />
      {/* <Outlet /> */}
    </>
  );
};

export default BlogPage;
