import { useSpring } from "@react-spring/web";

export const useSmoothScroll = () => {
  const [, api] = useSpring(() => ({
    y: 0,
  }));

  const scrollTo = (target, offset = 0) => {
    if (!target) return;

    const targetY =
      target.getBoundingClientRect().top + window.scrollY - offset;
    const startY = window.scrollY;

    api.start({
      from: { y: startY },
      to: { y: targetY },
      config: {
        mass: 3, // большая масса → тяжёлое начало
        tension: 50, // низкое натяжение → медленный старт
        friction: 25, // трение → плавное ускорение
        clamp: false,
      },
      onChange: ({ value }) => {
        window.scrollTo(0, value.y);
      },
    });
  };

  return scrollTo;
};
