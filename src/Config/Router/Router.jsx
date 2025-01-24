// import { createBrowserRouter } from "react-router-dom";
// import React, { lazy, Suspense } from "react";
// import Layout from "../../Layout";
// import NotFound from "../../Screens/NotFound";

// // Helper for lazy loading with Suspense
// const LazyLoad = (Component) => (
//   <Suspense
//     fallback={
//       <div className="w-full bg-secondaryColor text-white h-screen flex justify-center items-center">
//         Loading...
//       </div>
//     }
//   >
//     <Component />
//   </Suspense>
// );

// // Dynamic imports for routes
// const routesConfig = [
//   { path: "/", component: "Home", isIndex: true },
//   { path: "about", component: "About_Us" },
//   { path: "faqs", component: "FAQs" },
//   { path: "contact-us", component: "ContactUs" },
//   { path: "articles", component: "Articles" },
//   { path: "testimonials", component: "Testimonials" },
//   { path: "privacy-policy", component: "PrivacyPolicy" },
//   { path: "term-condition", component: "TermsConditions" },
//   { path: "hiring", component: "Hiring" },
//   { path: "membership", component: "Membership" },
//   { path: "personas", component: "Personas" },
//   { path: "checkout/*", component: "Checkout" },
//   { path: "wearehiring", component: "WeAreHiring" },
//   { path: "service/hair-care", component: "Services/Hair-Care" },
//   { path: "service/skin-care", component: "Services/Skin-Care" },
//   { path: "service/favorite", component: "Services/Favorite" },
//   { path: "service/inner-page", component: "Services/innerpage/Inner-Page" },
//   { path: "book-appointment", component: "BookAppointment" },
//   { path: "cart", component: "Cart/Cart" },
// ];

// // Dynamically create routes
 
// // Dynamically create routes with the correct file extension
// const childrenRoutes = routesConfig.map(({ path, component, isIndex }) => ({
//   path,
//   index: isIndex || false,
//   element: LazyLoad(lazy(() => import(`../../Screens/${component}.jsx`))),  
// }));


// // Router setup
// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [...childrenRoutes, { path: "*", element: <NotFound /> }],
//   },
//   {
//     path: "/login",
//     element: LazyLoad(lazy(() => import("../../Screens/Auth/Login.jsx"))),
//   },
//   {
//     path: "/register",
//     element: LazyLoad(lazy(() => import("../../Screens/Auth/Register.jsx"))),
//   },
//   {
//     path: "/setPassword",
//     element: LazyLoad(lazy(() => import("../../Screens/Auth/setPassword.jsx"))),
//   },
//   {
//     path: "/forgotPassword",
//     element: LazyLoad(lazy(() => import("../../Screens/Auth/ForgotPassword.jsx"))),
//   },
//   {
//     path: "/success",
//     element: LazyLoad(lazy(() => import("../../Screens/Auth/successfull.jsx"))),
//   },
//   {
//     path: "/email",
//     element: LazyLoad(lazy(() => import("../../Screens/Auth/email.jsx"))),
//   },
//   {
//     path: "/otp",
//     element: LazyLoad(lazy(() => import("../../Screens/Auth/otp.jsx"))),
//   },
//   { path: "*", element: <NotFound /> },
// ]);




// import { createBrowserRouter } from "react-router-dom";
// import AboutUs from "../../Screens/About_Us";
// import FAQs from "../../Screens/FAQs";
// import ContactUs from "../../Screens/ContactUs";
// import Articles from "../../Screens/Articles";
// import TermsConditions from "../../Screens/TermsConditions";
// import Hiring from "../../Screens/Hiring";
// import PrivacyPolicy from "../../Screens/PrivacyPolicy";
// import Testimonials from "../../Screens/Testimonials";
// import Login from "../../Screens/Auth/Login";
// import Register from "../../Screens/Auth/Register";
// import HairCare from "../../Screens/Services/Hair-Care";
// import SkinCare from "../../Screens/Services/Skin-Care";
// import Favorites from "../../Screens/Services/Favorite";
// import InnerPage from "../../Screens/Services/innerpage/Inner-Page";
// import BookAppointment from "../../Screens/BookAppointment";
// import Cart from "../../Screens/Cart/Cart";

// export const router = createBrowserRouter([
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
//   {
//     path: "/about",
//     element: <AboutUs />,
//   },
//   {
//     path: "/faqs",
//     element: <FAQs />,
//   },
//   {
//     path: "/contact-us",
//     element: <ContactUs />,
//   },
//   {
//     path: "/articles",
//     element: <Articles />,
//   },
//   {
//     path: "/testimonials",
//     element: <Testimonials />,
//   },
//   {
//     path: "/privacy-policy",
//     element: <PrivacyPolicy />,
//   },
//   {
//     path: "/term-condition",
//     element: <TermsConditions />,
//   },
//   {
//     path: "/hiring",
//     element: <Hiring />,
//   },
//   {
//     path: "/service/hair-care",
//     element: <HairCare />,
//   },
//   {
//     path: "/service/skin-care",
//     element: <SkinCare />,
//   },
//   {
//     path: "/service/favorite",
//     element: <Favorites />,
//   },
//   {
//     path: "/service/inner-page",
//     element: <InnerPage />,
//   },
//   {
//     path: "/book-appointment",
//     element: <BookAppointment />,
//   },
//   {
//     path: "/cart",
//     element: <Cart />,
//   },
// ]);





import { createBrowserRouter } from "react-router-dom";
import Login from "../../Screens/Auth/Login";
import Register from "../../Screens/Auth/Register";
import Otp from "../../Screens/Auth/Otp";
import Layout from "../../Layout";
import Successfull from "../../Screens/Auth/successfull";
import SetPassword from "../../Screens/Auth/setPassword";
import ForgotPassword from "../../Screens/Auth/ForgotPassword";
import Email from "../../Screens/Auth/email";
import Dashboard from "../../Screens/Dashboard";
 
// import NotFound from "../../Screens/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      // { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/setPassword",
    element: <SetPassword />,
  },
  {
    path: "/forgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/success",
    element: <Successfull />,
  },
  {
    path: "/email",
    element: <Email />,
  },
  {
    path: "/otp",
    element: <Otp />,
  },
  // { path: "*", element: <NotFound /> },
]);