import { createBrowserRouter } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import ErrorPage from "./components/common/ErrorPage";
import DonationContainer from "./components/donation/DonationContainer";
import LostAndFoundContainer from "./components/lostAndFound/LostAndFoundContainer";
import AboutUsContainer from "./components/aboutUs/AboutUsContainer";
import PetsContainer from "./components/pets/PetsContainer";
import ContactContainer from "./components/contact/ContactContainer";
import ReviewsContainer from "./components/reviews/ReviewsContainer";
import AdoptionFormContainer from "./components/pets/AdoptionFormContainer";
import FoundPetContainer from "./components/lostAndFound/FoundPetContainer";
import LeaveAReviewContainer from "./components/reviews/LeaveAReviewContainer";

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
    path: "/pet/adopt/:petId",
    element: <AdoptionFormContainer />,
  },
  {
    path: "/lostAndFound/foundPet/:geoPosition",
    element: <FoundPetContainer />,
  },
  {
    path: "/leaveAReview",
    element: <LeaveAReviewContainer />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
