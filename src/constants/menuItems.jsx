import {
  homePagePath,
  aboutPagePath,
  servicesPagePath,
  blogPagePath,
  contactsPagePath,
  privacyPolicyPagePath,
  termsPagePath,
} from "../router/path";

// Header menu

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

// Footer menu
export const footerMenu = [
  {
    title: "Main",
    list: [
      {
        text: "Home",
        path: homePagePath,
      },
      {
        text: "About",
        path: aboutPagePath,
      },
      {
        text: "Services",
        path: servicesPagePath,
      },
      {
        text: "Blog",
        path: blogPagePath,
      },
    ],
  },

  {
    title: "Pages",
    list: [
      {
        text: "Contacts",
        path: contactsPagePath,
      },
      {
        text: "Privacy Policy",
        path: privacyPolicyPagePath,
      },
      {
        text: "Terms &amp; Conditions",
        path: termsPagePath,
      },
    ],
  },
];
