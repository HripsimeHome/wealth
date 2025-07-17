import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import BlogPage from "../pages/BlogPage";
import ContactsPage from "../pages/ContactsPage";
//import { Navigate } from "react-router-dom";

// Paths
export const homePagePath = "/";
export const aboutPagePath = "/about";
export const servicesPagePath = "/services";
export const blogPagePath = "/blog";
export const contactsPagePath = "/contacts";

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
    path: contactsPagePath,
    component: <ContactsPage />,
  },

  {
    path: blogPagePath,
    component: <BlogPage />,
  },
];
