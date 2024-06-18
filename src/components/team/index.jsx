import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import CtaArea from "../contact/cta-area";
import TeamArea from "./team-area";

const Team = () => {
  return (
    <>
      <Header/>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title={"Team Member"} innertitle={"Team Member"} />
            <TeamArea />
          </main>
          <Footer style_contact={true} style_team={true} />
        </div>
      </div>
    </>
  );
};

export default Team;
