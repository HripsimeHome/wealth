import PageHeader from "../../global/PageHeader/PageHeader";
import { articlesIcon } from "../../../assets/svg";

const BlogHeader = () => {
  return (
    <PageHeader
      icon={articlesIcon}
      sectionTitle="articles"
      title="Blog"
      subtitle="Lorem"
    />
  );
};

export default BlogHeader;
