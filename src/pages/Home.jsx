import React from "react";

// import components
import Header from "../components/Header";
import Contents from "../components/Contents";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="-z-50 mx-auto max-w-[1440px] overflow-hidden">
        <Header />
        <Contents />
        <Footer />
      </div>
    </>
  );
};

export default Home;
