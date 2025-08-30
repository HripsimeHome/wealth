import styles from "./SocialIcons.module.scss";
import Svg from "../../layout/Svg/Svg";

import { youtubeIcon, instagramIcon, tiktokIcon } from "../../../assets/svg";

const socialIconsData = [
  {
    icon: youtubeIcon,
    alt: "YouTube",
    title: "",
    link: "https://youtube.com/@mamnunagency?si=nbS2rhZMimU_iyJP",
  },
  {
    icon: instagramIcon,
    alt: "Instagram",
    link: "https://www.instagram.com/mamnunagency?igsh=bzk0dGt4anhqbTlw",
  },

  {
    icon: tiktokIcon,
    alt: "TikTOk",
    link: "https://www.tiktok.com/",
  },
];

function SocialIcons() {
  return (
    <div className={styles.socialIcons}>
      {socialIconsData.map(({ icon, alt, link }, index) => (
        <a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={alt}
        >
          <Svg id={icon} alt={alt} className={styles.socialIcons__icon} />
        </a>
      ))}
    </div>
  );
}

export default SocialIcons;
