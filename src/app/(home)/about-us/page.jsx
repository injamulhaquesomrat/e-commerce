import AboutUsContainer from "@/components/about-us/AboutUsContainer";
import Container from "@/components/global/Container";
import Footer from "@/components/global/footer/Footer";
import Navbar from "@/components/global/navbar/Navbar";
import React from "react";

const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <h6 className="text-3xl text-center py-10 font-bold">About Us</h6>
        <AboutUsContainer />
      </Container>
      <Footer />
    </>
  );
};

export default AboutUsPage;
