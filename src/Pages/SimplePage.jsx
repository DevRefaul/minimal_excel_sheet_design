import React from "react";
import BottomSection from "../Components/BottomSection";
import Table from "../Components/Table";
import TopSection from "../Components/TopSection";
import "./SimplePage.css";

const SimplePage = () => {
  return (
    <section className="bg-[#FEC4C3] h-[100vh] overflow-scroll py-10">
      <TopSection />

      {/* table component here */}
      <div>
        <Table />
      </div>

      <BottomSection />
    </section>
  );
};

export default SimplePage;
