import PageHeader from "../../global/PageHeadingWrapper/PageHeadingSmall/PageHeadingSmall";
import Accordion from "../../layout/Accordion/Accordion";
import { useAnimationInView } from "../../../hooks/useInViewAnimation";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";

import { investmentsIcon } from "../../../assets/svg";

const faqData = [
  {
    title: "What is investing?",
    content:
      "Investing is the act of allocating money or resources with the expectation of generating a profit or return over time. It involves purchasing assets—such as stocks, real estate, or businesses—that are expected to increase in value or produce income. The goal of investing is to grow wealth, achieve financial goals, or secure long-term financial stability.",
  },
  {
    title: "What are the risks of investing?",
    content:
      "Investing always carries a certain level of risk. The value of investments can fluctuate due to market conditions, economic changes, or company performance. Common risks include market risk, inflation risk, liquidity risk, and the risk of losing the initial capital. Understanding and managing these risks is essential to making informed investment decisions and building a resilient portfolio.",
  },
  {
    title: "How can I start investing today?",
    content:
      "Getting started with investing is easier than ever. Begin by setting clear financial goals and determining your risk tolerance. Next, choose a reliable brokerage platform or investment app. You can start with small amounts by investing in diversified options like index funds or ETFs. It's important to research, stay informed, and consider speaking with a financial advisor before making major decisions.",
  },
  {
    title: "What is a robo-advisor?",
    content:
      "A robo-advisor is an online platform that provides automated, algorithm-driven financial planning and investment management services with little to no human supervision. It typically asks you questions about your financial goals, risk tolerance, and time horizon, then builds and manages a diversified investment portfolio for you. Robo-advisors are ideal for beginners due to their low fees, ease of use, and hands-off approach.",
  },
  {
    title: "How do taxes affect my investments?",
    content:
      "Taxes can significantly impact your investment returns. Depending on the type of investment and how long you hold it, you may owe capital gains tax, dividend tax, or interest income tax. Short-term investments are usually taxed at a higher rate than long-term ones. Using tax-advantaged accounts like IRAs or 401(k)s can help reduce or defer these taxes, maximizing your overall returns.",
  },
];

const ContactsFAQ = () => {
  const { ref: accordionRef, inView: isAccordionInView } = useAnimationInView({
    threshold: 0.5,
  });
  return (
    <section ref={accordionRef}>
      <PageHeader
        icon={investmentsIcon}
        sectionTitle="ask the team"
        title="FAQ"
        subtitle="clear answers paired with step-by-step guidance for all"
      />
      <TransitionProvider
        inProp={isAccordionInView}
        delay={700}
        style={TransitionStyleTypes.bottom}
      >
        <Accordion data={faqData} />
      </TransitionProvider>
    </section>
  );
};

export default ContactsFAQ;
