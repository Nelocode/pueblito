"use client";

import SmoothScroller from "@/components/SmoothScroller";
import PageTransition from "@/components/PageTransition";
import ScrollToTop from "@/components/ScrollToTop";

const ClientLayout = ({ children }) => {
  return (
    <>
      <SmoothScroller />
      <ScrollToTop />
      <PageTransition>
        {children}
      </PageTransition>
    </>
  );
};

export default ClientLayout;
