import React from "react";

const LowerFooterSection = () => {
    return (
      <section>
        {/* top buttons */}
        <div className="lg:w-[80%] mx-auto flex justify-between">
          <div>
            <button>Save</button>
            <button>Cancel</button>
          </div>
          <div>
            <button>Delete</button>
            <button>New</button>
            <button>Print</button>
            <button>Prev</button>
            <button>Nxt</button>
            <button>Export</button>
            <button>Import</button>
          </div>
        </div>

        {/* bottom buttons */}
        <div></div>
      </section>
    );
};

export default LowerFooterSection;
