import { useInView } from "react-intersection-observer";

/**
 * useAnimationInView - универсальный хук для анимаций при прокрутке
 *
 * @param {object} options - настройки
 * @param {number} options.threshold - процент видимости элемента для срабатывания (0-1)
 * @param {boolean} options.triggerOnce - анимация срабатывает один раз
 * @returns {object} { ref, inView }
 */
export const useAnimationInView = ({
  threshold = 0.5,
  triggerOnce = true,
} = {}) => {
  const { ref, inView } = useInView({ threshold, triggerOnce });
  return { ref, inView };
};
