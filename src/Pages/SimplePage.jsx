import React from "react";
import Table from "../Components/Table";
import TopSection from "../Components/TopSection";
import "./SimplePage.css";

const SimplePage = () => {
  return (
    <section className="bg-[#FEC4C3] h-[100vh] overflow-scroll">
      <TopSection />

      {/* table component here */}
      <div>
        <Table />
      </div>
    </section>
  );
};

export default SimplePage;
