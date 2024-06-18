import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import Portfolio from "./portfolio";

const Project = () => {
  return (
    <>
      <Header style_2={true} />
      <main>
        {/* <BreadcrumbTwo /> */}
        <Portfolio />
      </main>
      <Footer style_contact={true}  style_team={true} />
    </>
  );
};

export default Project;
