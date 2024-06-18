
import Header from "@/src/layout/headers/header";
import Footer from "@/src/layout/footers/footer";
import React from "react";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import ContactFormArea from "./contact-form-area";
import HeroBanner from "../../common/hero-banner";
import OfficeLocation from "./office-location";

const Contact = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title_top="Get In" title_bottom="Get In" />
            <HeroBanner bg_img="/assets/img/contact/contact-banner.jpg" />
            <OfficeLocation />
            <ContactFormArea />
            {/* <ContactInner /> */}
            {/* <CtaArea /> */}
          </main>
          <Footer style_contact={true} style_team={true} />
        </div>
      </div>
    </>
  );
};

export default Contact;
