import React from "react";

const SimplePage = () => {
  return (
    <section className="bg-[#FEC4C3] h-[100vh] overflow-scroll">
      <div className="grid grid-cols-2">
        {/*top left side section */}
        <div className="border border-gray-600 flex justify-center items-center">
          <input
            type="text"
            id="topLeftInput"
            className="bg-blue-300 w-[300px] py-2 px-1 border border-gray-600 outline-none"
          />
        </div>

        {/* top right side section */}
        <div className="border border-gray-600">
          <div className="p-3">
            {/* top right left section */}
            <div>
              {/* series input  */}
              <div className="my-1">
                <label htmlFor="series" className="px-2 py-1 bg-gray-300 mr-1">
                  Series
                </label>
                <input
                  type="text"
                  id="series"
                  className="border border-gray-600 outline-none mx-2 w-[250px] p-1"
                />
              </div>

              {/* date input  */}
              <div className="my-1">
                <label htmlFor="date" className="px-2 py-1 mr-3">
                  Date
                </label>
                <input
                  type="text"
                  id="date"
                  className="border border-gray-600 outline-none mx-2 w-[250px] p-1"
                />
              </div>

              {/* bill no input  */}
              <div className="my-1">
                <label htmlFor="billNo" className="px-2 py-1 ">
                  Bill No
                </label>
                <input
                  type="text"
                  id="billNo"
                  className="border border-gray-600 outline-none mx-2 p-1"
                />
              </div>

              {/* checkbox input  */}
              <div>
                <input
                  type="checkbox"
                  name="finalVoucher"
                  id="finalVoucher"
                  className="mr-2"
                />
                <label htmlFor="finalVoucher">Final Voucher</label>
              </div>
            </div>

            {/* top right - right section */}
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplePage;
