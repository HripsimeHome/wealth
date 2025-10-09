import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useInfiniteScroll = (loadMore, { threshold = 0.5 } = {}) => {
  const { ref, inView } = useInView({ threshold });

  //когда элемент попадает в зону видимости, вызываем callback функцию loadMore)()).

  useEffect(() => {
    if (inView) loadMore();
  }, [inView, loadMore]);

  return ref;
};
