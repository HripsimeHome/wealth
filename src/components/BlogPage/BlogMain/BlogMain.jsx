import styles from "./BlogMain.module.scss";
import Header from "../../global/Header/Header";
import { articlesIcon } from "../../../assets/svg";

const BlogMain = () => {
  return (
    <section className={styles.blogMain}>
      <div className="container">
        <Header
          icon={articlesIcon}
          sectionTitle="articles"
          title="Blog"
          subtitle="Lorem"
        />
      </div>
    </section>
  );
};

export default BlogMain;
