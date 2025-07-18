// Application Header

import {
  homePagePath,
  aboutPagePath,
  servicesPagePath,
  blogPagePath,
  contactsPagePath,
} from "../router/path";

export const headerMenuItems = [
  {
    text: "Home",
    link: homePagePath,
  },
  {
    text: "About Us",
    link: aboutPagePath,
  },
  {
    text: "Services",
    link: servicesPagePath,
  },
  {
    text: "Blog",
    link: blogPagePath,
  },
  {
    text: "Contacts",
    link: contactsPagePath,
  },
];
