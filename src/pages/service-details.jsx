import React from "react";
import SEO from "../common/seo";
import ServiceDetails from "../components/service-details";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"DevtekAI - Data analytics"} />
      <ServiceDetails />
    </Wrapper>
  );
};

export default index;
