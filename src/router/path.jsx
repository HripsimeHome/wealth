import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import BlogPage from "../pages/BlogPage";
//import BlogSingle from "../components/global/Blog/BlogSIngle/BlogSingle";
import ContactsPage from "../pages/ContactsPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import TermsPage from "../pages/TermsPage";
import TestPage from "../pages/TestPage";

//import { Navigate } from "TestPage-router-dom";

// Paths
export const homePagePath = "/";
export const aboutPagePath = "/about";
export const servicesPagePath = "/services";
export const blogPagePath = "/blog";
export const contactsPagePath = "/contacts";
export const privacyPolicyPagePath = "/privacy";
export const termsPagePath = "/terms";

export const testPagePath = "/test";

// Routes
export const routes = [
  {
    path: homePagePath,
    component: <HomePage />,
  },
  {
    path: aboutPagePath,
    component: <AboutPage />,
  },

  {
    path: servicesPagePath,
    component: <ServicesPage />,
  },

  {
    path: "/blog",
    component: <BlogPage />,
  },

  {
    path: "/blog/:id",
    component: <BlogPage />,
  },

  {
    path: contactsPagePath,
    component: <ContactsPage />,
  },
  {
    path: privacyPolicyPagePath,
    component: <PrivacyPolicyPage />,
  },
  {
    path: termsPagePath,
    component: <TermsPage />,
  },
  {
    path: testPagePath,
    component: <TestPage />,
  },
];
