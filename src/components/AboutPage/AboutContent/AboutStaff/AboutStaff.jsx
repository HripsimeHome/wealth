import TwoColumnSection from "../../../global/TwoColumnSection/TwoColumnSection";
import SocialIcons from "../../../layout/SocialIcons/SocialIcons";

import {
  JaneImage,
  JaneWebpImage,
  JacobImage,
  JacobWebpImage,
  //  img corners
  JaneLeftTopImage,
  JaneLeftTopWebpImage,
  JaneRightBottomImage,
  JaneRightBottomWebpImage,
  JacobLeftBottomImage,
  JacobLeftBottomWebpImage,
  JacobRightTopImage,
  JacobRightTopWebpImage,
} from "../../../../assets/images";

export const staffInfo = [
  {
    title: "Jane Doe",
    image: JaneImage,
    webpImage: JaneWebpImage,
    leftTopCornerImg: JaneLeftTopImage,
    leftTopCornerWebpImg: JaneLeftTopWebpImage,
    rightBottomCornerImg: JaneRightBottomImage,
    rightBottomCornerWebpImg: JaneRightBottomWebpImage,
    cornerHeight: "15%",
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
    leftBottomCornerImg: JacobLeftBottomImage,
    leftBottomCornerWebpImg: JacobLeftBottomWebpImage,
    rightTopCornerImg: JacobRightTopImage,
    rightTopCornerWebpImg: JacobRightTopWebpImage,
    cornerHeight: "13%",
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
