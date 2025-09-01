import styles from "./BlogSingle.module.scss";
import { useParams } from "react-router-dom";
//import { postData } from "../BlogCard/BlogCard";
import ImageWebp from "./../../../layout/ImageWebp/ImageWebp";

import { avatarImage, portfolioImage } from "../../../../assets/images";

// cont data = [
//   {
//     title: "Set Clear Financial Goals",
//     text: "Before diving into investing, it’s important to define your financial objectives. Are you saving for retirement, a down payment on a house, or building a college fund for your kids? Your goals will determine the type of investments that suit you best."
//   },

//   {
//     title: "Build an Emergency Fund",
//     text: "Investing is not a substitute for having liquid savings. Before committing any money to investments, make sure you have an emergency fund. This fund should cover 3-6 months' worth of living expenses and be stored in an easily accessible account like a high-yield savings account."
//   },

//   {
//     title: "Understand Your Risk Tolerance",
//     text: "Every investment carries some level of risk. Understanding your personal risk tolerance—how much volatility you’re comfortable with—will guide you toward investments that align with your comfort level. Stocks, for instance, offer higher potential returns but come with higher risk."
//   },

//     {
//     title: "Learn the Basics of Different Investment Types",
//     text: "Mutual Funds/ETFs: These funds pool money from many investors to buy a diversified portfolio of stocks or bonds, offering exposure to many companies with less individual risk. Investing in property for rental income or capital appreciation over time."
//   },

//     {
//     title: "Continue Learning and Adjusting",
//     text: "The world of investing is constantly evolving. Stay informed by reading investment books, listening to podcasts, or following reputable financial news sources. As your financial situation and goals change, you may need to adjust your investment strategy accordingly."
//   },

//     {
//     title: "Conclusion:",
//     text: "Getting started with investing doesn’t have to be complicated. By setting clear goals, understanding your risk tolerance, and staying informed, you can begin building wealth over time. Start small, diversify your portfolio, and, most importantly, be patient. Investing is a long-term game, and with consistency, your efforts will pay off."
//   },

// ]

const BlogSingle = () => {
  // const { id } = useParams();
  // const article = postData.find((post) => post.id === id);
  // if (!article) return <p>Статья не найдена</p>;

  return (
    <section className={styles.blogSingle}>
      <div className={styles.blogSingle__header}>
        {/* <span className={styles.blogSingle__category}>{category}</span> */}
        <span className={styles.blogSingle__category}>investing</span>
        <h1 className={styles.blogSingle__title}>
          Investing Starters Advice 101
        </h1>
        <p>Benefits and steps to take when investing & saving.</p>
        <img
          src={avatarImage}
          //alt={authorName}
          className={styles.blogSingle__avatar}
        />
        <span className={styles.blogSingle__authorName}>David Ross</span>
        <span>August 17, 2025</span>
        <img
          src={portfolioImage}
          //alt={authorName}
          className={styles.blogSingle__img}
        />
      </div>
      <div className={`${styles.blogSingle__content} paddingYLg`}>
        <h2>Spread Investments Across Asset Classes</h2>
        <p className={styles.blogSingle__text}>
          Different asset classes—such as stocks, bonds, real estate, and
          commodities—have different levels of risk and return. By spreading
          your money across multiple asset classes, you minimize the impact of
          volatility in any one area.
        </p>
        <h2>Spread Investments Across Asset Classes</h2>
        <p className={styles.blogSingle__text}>
          Different asset classes—such as stocks, bonds, real estate, and
          commodities—have different levels of risk and return. By spreading
          your money across multiple asset classes, you minimize the impact of
          volatility in any one area.
        </p>
      </div>
    </section>
  );
};

export default BlogSingle;
