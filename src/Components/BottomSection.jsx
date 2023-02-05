import React from "react";

const BottomSection = () => {
  return (
    <section className="p-4 grid grid-cols-[3fr,2fr] gap-6">
      {/* left section start */}
      <div className="bg-yellow-100 grid gap-4 lg:grid-cols-2  xl:grid-cols-4 p-4">
        <div>
          {/* fine */}
          <div className="flex justify-between my-1">
            <label htmlFor="fine" className="mr-2 text-right">
              Fine
            </label>
            <input
              type="text"
              id="fine"
              className="p-1 bg-blue-200 border border-gray-400 outline-none w-auto lg:w-[100px] "
            />
          </div>

          {/* tgws */}
          <div className="flex justify-between my-1">
            <label htmlFor="tgws" className="mr-2 text-right">
              T-W.G.S
            </label>
            <input
              type="text"
              id="tgws"
              className="p-1 bg-blue-200 border border-gray-400 outline-none w-auto lg:w-[100px] "
            />
          </div>

          {/* tgws */}
          <div className="flex justify-between my-1">
            <label htmlFor="mrp" className="mr-2 text-right">
              M.R.P
            </label>
            <input
              type="text"
              id="mrp"
              className="p-1 bg-blue-200 border border-gray-400 outline-none w-auto lg:w-[100px] "
            />
          </div>
          {/* tgws */}
          <div className="flex justify-between my-1">
            <label htmlFor="design" className="mr-2 text-right">
              Design
            </label>
            <input
              type="text"
              id="design"
              className="p-1 bg-blue-200 border border-gray-400 outline-none w-auto lg:w-[100px] "
            />
          </div>
        </div>

        {/* second row */}
        <div>
          {/* fine */}
          <div className="flex justify-between my-1">
            <label htmlFor="diaVal" className="mr-2 text-right">
              Dia.Val.
            </label>
            <input
              type="text"
              id="diaVal"
              className="p-1 bg-blue-200 border border-gray-400 outline-none w-auto lg:w-[100px] "
            />
          </div>

          {/* tgws */}
          <div className="flex justify-between my-1">
            <label htmlFor="tlws" className="mr-2 text-right">
              T-L.W-S
            </label>
            <input
              type="text"
              id="tlws"
              className="p-1 bg-blue-200 border border-gray-400 outline-none w-auto lg:w-[100px] "
            />
          </div>

          {/* tgws */}
          <div className="flex justify-between my-1">
            <label htmlFor="pktwt" className="mr-2 text-right">
              Tot Pktwt
            </label>
            <input
              type="text"
              id="pktwt"
              className="p-1 bg-blue-200 border border-gray-400 outline-none w-auto lg:w-[100px] "
            />
          </div>
          {/* tgws */}
          <div className="flex justify-between my-1">
            <label htmlFor="clarity" className="mr-2 text-right">
              Clarity
            </label>
            <input
              type="text"
              id="clarity"
              className="p-1 bg-blue-200 border border-gray-400 outline-none w-auto lg:w-[100px] "
            />
          </div>
        </div>

        {/* third row */}
        <div>
          {/* fine */}
          <div className="flex justify-between my-1">
            <label htmlFor="tgwg" className="mr-2 text-right">
              T-G.W-G
            </label>
            <input
              type="text"
              id="tgwg"
              className="p-1 bg-blue-200 border border-gray-400 outline-none w-auto lg:w-[100px] "
            />
          </div>

          {/* tgws */}
          <div className="flex justify-between my-1">
            <label htmlFor="tnws" className="mr-2 text-right">
              T-N.W-S
            </label>
            <input
              type="text"
              id="tnws"
              className="p-1 bg-blue-200 border border-gray-400 outline-none w-auto lg:w-[100px] "
            />
          </div>

          {/* tgws */}
          <div className="flex justify-between my-1">
            <label htmlFor="colour" className="mr-2 text-right">
              Colour
            </label>
            <input
              type="text"
              id="colour"
              className="p-1 bg-blue-200 border border-gray-400 outline-none w-auto lg:w-[100px] "
            />
          </div>
        </div>

        {/* fourth row */}
        <div>
          {/* fine */}
          <div className="flex justify-between my-1">
            <label htmlFor="no" className="mr-2 text-right">
              No
            </label>
            <input
              type="text"
              id="no"
              className="p-1 bg-blue-200 border border-gray-400 outline-none w-auto lg:w-[100px] "
            />
          </div>

          {/* tgws */}
          <div className="flex justify-between my-1">
            <label htmlFor="rows" className="mr-2 text-right">
              Rows
            </label>
            <input
              type="text"
              id="rows"
              className="p-1 bg-blue-200 border border-gray-400 outline-none w-auto lg:w-[100px] "
            />
          </div>
        </div>
      </div>

      {/* left section end */}

      {/* right section start */}
      <div className="bg-yellow-100 p-4">
        {/* total */}
        <div className="xl:flex justify-between my-2">
          <label htmlFor="total">Total</label>
          <div>
            <input
              type="text"
              id="total1"
              className="p-1 bg-blue-200 border border-gray-400 outline-none w-auto lg:w-[100px] "
            />
            <input
              type="text"
              id="total2"
              className="p-1 bg-blue-200 border border-gray-400 outline-none w-auto lg:w-[100px] "
            />
            <input
              type="text"
              id="total3"
              className="p-1 bg-blue-200 border border-gray-400 outline-none w-auto lg:w-[100px] "
            />
            <input
              type="text"
              id="total4"
              className="p-1 bg-blue-200 border border-gray-400 outline-none w-auto lg:w-[100px] "
            />
          </div>
        </div>
        {/* receive */}
        <div className="xl:flex justify-between my-2">
          <label htmlFor="receive">Receive</label>
          <div>
            <input
              type="text"
              id="receive1"
              className="p-1 bg-blue-200 border border-gray-400 outline-none w-auto lg:w-[100px] "
            />
            <input
              type="text"
              id="receive2"
              className="p-1 bg-blue-200 border border-gray-400 outline-none w-auto lg:w-[100px] "
            />
            <input
              type="text"
              id="receive3"
              className="p-1 bg-blue-200 border border-gray-400 outline-none w-auto lg:w-[100px] "
            />
            <input
              type="text"
              id="receive4"
              className="p-1 bg-blue-200 border border-gray-400 outline-none w-auto lg:w-[100px] "
            />
          </div>
        </div>
        {/* difference */}
        <div className="xl:flex justify-between my-2">
          <label htmlFor="total">Difference</label>
          <div>
            <input
              type="text"
              id="difference1"
              className="p-1 bg-blue-200 border border-gray-400 outline-none w-auto lg:w-[100px] "
            />
            <input
              type="text"
              id="difference2"
              className="p-1 bg-blue-200 border border-gray-400 outline-none w-auto lg:w-[100px] "
            />
            <input
              type="text"
              id="difference3"
              className="p-1 bg-blue-200 border border-gray-400 outline-none w-auto lg:w-[100px] "
            />
            <input
              type="text"
              id="difference4"
              className="p-1 bg-blue-200 border border-gray-400 outline-none w-auto lg:w-[100px] "
            />
          </div>
        </div>
      </div>
      {/* right section end */}
    </section>
  );
};

export default BottomSection;
