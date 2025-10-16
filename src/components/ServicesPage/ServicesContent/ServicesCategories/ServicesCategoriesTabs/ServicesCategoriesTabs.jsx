import TabsGroups from "../../../../layout/TabsGroups/TabsGroups";
import { investIcon, companyIcon } from "../../../../../assets/svg";

const tabLabels = [
  "Spy",
  "Trade alerts",
  "Entry and Exit",
  "Quality insights",
  "Insights x2",
  "Stocks",
];

const tabContent = [
  [
    {
      icon: investIcon,
      title: "Double Your Market Exposure with SPY",
      description:
        "SPY offers double exposure to the S&P 500, letting investors capture amplified market gains with real-time insights and smart risk control.",
    },
    {
      icon: investIcon,
      title: "Double the Power of the S&P 500 with Smarter Market Exposure",
      description:
        "SPY combines precision and leverage to help investors outperform traditional index results while maintaining balanced market control.",
    },
    {
      icon: investIcon,
      title: "Smarter Access to Market Growth Potential",
      description:
        "With SPY, you can mirror the strength of the S&P 500 and double its momentum, achieving higher returns through adaptive performance tracking.",
    },
  ],
  [
    {
      icon: companyIcon,
      title: "Real-Time Trade Alerts to Stay Ahead of Every Market Opportunity",
      description:
        "Get instant notifications on key market movements and potential entry points. Our real-time trade alerts keep you informed and ready to act, helping you make smarter decisions.",
    },
    {
      icon: companyIcon,
      title: "Smart Trade Alerts That Guide You Through Every Market Phase",
      description:
        "Receive timely trade alerts based on data-driven insights and proven strategies. Whether the market rises or falls, you’ll know when to move, when to hold, and how to protect your portfolio with confidence.",
    },
    {
      icon: companyIcon,
      title: "Stay in Control with Instant Trade Signals and Market Insights",
      description:
        "Our system delivers precise alerts in real time, helping you react fast to price swings and market changes.",
    },
  ],

  [
    {
      icon: companyIcon,
      title:
        "Maximize Market Entry and Exit Strategies for Optimal Brand Performance",
      description:
        "Leverage precise entry and exit tactics to capture audience attention, boost conversions, and ensure your campaigns reach maximum impact.",
    },
    {
      icon: companyIcon,
      title:
        "trategic Market Entry and Exit Plans to Drive Growth and Engagement",
      description:
        "Implement smart entry and exit strategies to engage customers effectively and maximize campaign results across all marketing channels.",
    },
    {
      icon: companyIcon,
      title: "Optimize Your Brand’s Market Entry and Exit for Maximum Impact",
      description:
        "Use data-driven entry and exit techniques to capture audience interest, enhance conversions, and improve overall marketing performance.",
    },
  ],

  [
    {
      icon: companyIcon,
      title:
        "Gain Actionable Quality Insights to Elevate Your Marketing Decisions",
      description:
        "Analyze data-driven quality insights to optimize campaigns, improve customer engagement, and make smarter marketing decisions.",
    },
    {
      icon: companyIcon,
      title:
        "Unlock High-Quality Insights That Drive Measurable Marketing Results",
      description:
        "Leverage deep insights to understand audience behavior, enhance strategy, and deliver campaigns with maximum impact and ROI.",
    },
    {
      icon: companyIcon,
      title: "Transform Your Marketing with Strategic Quality Insights",
      description:
        "Use reliable insights to refine messaging, identify growth opportunities, and ensure your marketing efforts achieve consistent success.",
    },
  ],

  [
    {
      icon: companyIcon,
      title:
        "Double Your Insights to Make Smarter, Data-Driven Marketing Decisions",
      description:
        "Gain twice the actionable insights to optimize campaigns, increase engagement, and drive measurable results for every marketing effort.",
    },
    {
      icon: companyIcon,
      title: "Amplify Your Strategy with Twice the Marketing Insights",
      description:
        "Leverage expanded insights to better understand your audience, refine messaging, and maximize conversions across all channels.",
    },
    {
      icon: companyIcon,
      title:
        "Insights x2: Unlock Deeper Data for Superior Marketing Performance",
      description:
        "Double your analytical power with enhanced insights, enabling precise targeting, smarter campaigns, and improved ROI.",
    },
  ],

  [
    {
      icon: companyIcon,
      title:
        "Maximize Your Stock Insights for Smarter Investment and Marketing Moves",
      description:
        "Track key stock trends and performance data to make informed decisions and craft marketing campaigns that align with market opportunities.",
    },
    {
      icon: companyIcon,
      title: "tay Ahead with Real-Time Stock Analysis and Actionable Insights",
      description:
        "Use real-time stock information to optimize investment strategies and enhance marketing campaigns with timely, data-driven decisions.",
    },
    {
      icon: companyIcon,
      title: "Transform Market Knowledge into Powerful Stock Strategies",
      description:
        "Leverage detailed stock insights to anticipate trends, boost engagement, and drive results across both investments and marketing efforts.",
    },
  ],
];

const ServicesCategoriesTabs = () => {
  return (
    <>
      <TabsGroups tabLabels={tabLabels} tabContent={tabContent} />
    </>
  );
};

export default ServicesCategoriesTabs;
