import TwoColumnSection from "../../../global/TwoColumnSection/TwoColumnSection";
import SocialIcons from "../../../layout/SocialIcons/SocialIcons";

import {
  JaneImage,
  JaneWebpImage,
  JacobImage,
  JacobWebpImage,
} from "../../../../assets/images";

import {
  JaneLeftTopIcon,
  JaneRightBottomIcon,
  JacobRightTopIcon,
  JacobLeftBottomIcon,
} from "../../../../assets/svg";

export const staffInfo = [
  {
    title: "Jane Doe",
    image: JaneImage,
    webpImage: JaneWebpImage,
    imgLeftTopCorner: JaneLeftTopIcon,
    imgRightBottomCorner: JaneRightBottomIcon,
    description: [
      "With over 15 years of experience as a stock analyst on Wall Street, Jane has solidified her reputation as a seasoned professional.",
      "Her insights, honed during the post-financial crisis, have consistently garnered attention and respect.",
      "Since 2015, Jane has been a prominent figure at stock conferences and in the media, sharing her bold predictions and in-depth analyses.",
    ],
  },
  {
    title: "Jacob Smith",
    image: JacobImage,
    webpImage: JacobWebpImage,
    imgRightTopCorner: JacobRightTopIcon,
    imgLeftBottomCorner: JacobLeftBottomIcon,
    reverse: true,
    description: [
      "Our seasoned Portfolio Manager, actively oversees the Bento Wealth Fund, delivering insights and actionable strategies. He manages our real-time trade alerts and stock positions.",
      "Jacob's proven track record of outperforming the market during volatile times underscores his expertise in navigating the dynamic world of investing.",
    ],
  },
];
const AboutStaff = () => {
  return (
    <>
      {staffInfo.map((staffMember, i) => (
        <TwoColumnSection
          key={i}
          textWhite
          socialIcons={<SocialIcons />}
          {...staffMember}
        />
      ))}
    </>
  );
};

export default AboutStaff;
