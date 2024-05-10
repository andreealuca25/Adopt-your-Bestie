import React from "react";
import NavBarFooterWrapper from "../wrapper/NavBarFooterWrapper";
import LeaveAReview from "./LeaveAReview";

const LeaveAReviewContainer = () => {
  return (
    <NavBarFooterWrapper topPadding="pt-32">
      <LeaveAReview />
    </NavBarFooterWrapper>
  );
};

export default LeaveAReviewContainer;
