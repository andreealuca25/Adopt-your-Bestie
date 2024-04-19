import { createBrowserRouter } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import ErrorPage from "./components/error/ErrorPage";
import DonationContainer from "./components/donation/DonationContainer";
import LostAndFoundContainer from "./components/lostAndFound/LostAndFoundContainer";
import AboutUsContainer from "./components/aboutUs/AboutUsContainer";
import PetsContainer from "./components/pets/PetsContainer";
import ContactContainer from "./components/contact/ContactContainer";
import ReviewsContainer from "./components/reviews/ReviewsContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/about",
    element: <AboutUsContainer />,
  },
  {
    path: "/pets",
    element: <PetsContainer />,
  },
  {
    path: "/lostAndFound",
    element: <LostAndFoundContainer />,
  },
  {
    path: "/donate",
    element: <DonationContainer />,
  },
  {
    path: "/contact",
    element: <ContactContainer />,
  },
  {
    path: "/reviews",
    element: <ReviewsContainer />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
