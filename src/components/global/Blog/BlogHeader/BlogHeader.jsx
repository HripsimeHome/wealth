import styles from "./BlogHeader.module.scss";
import { useAnimationInView } from "../../../../hooks/useInViewAnimation";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../../providers/TransitionProvider";

const BlogHeader = () => {
  const { ref: blogHeaderRef, inView: isblogHeaderInView } = useAnimationInView(
    {
      threshold: 0.2,
    }
  );
  return (
    <div ref={blogHeaderRef}>
      <TransitionProvider
        inProp={isblogHeaderInView}
        delay={100}
        style={TransitionStyleTypes.zoomIn}
        className={styles.blogHeader}
      >
        <h className={styles.blogHeader__title}>Latest Posts</h>
        <div className={styles.blogHeader__descriptionContainer}>
          <h4>OUR RECENT ARTICLES</h4>
          <p>Read the newest articles crafted to inform and inspire you</p>
        </div>
      </TransitionProvider>
    </div>
  );
};

export default BlogHeader;
