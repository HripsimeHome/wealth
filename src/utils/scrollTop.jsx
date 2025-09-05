export const scrollTop = (isSmooth) => {
  window.scrollTo({
    top: 0,
    behavior: isSmooth ? "smooth" : "auto",
  });
};
