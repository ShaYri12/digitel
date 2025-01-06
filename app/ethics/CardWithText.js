import React from "react";

const CardWithText = ({ title, para }) => {
  return (
    <div
      className="md:rounded-[31px] rounded-[25px] border border-[#FFFFFF33] lg:px-[70px] md:px-[40px] px-4 md:py-[50px] py-[30px]"
      style={{
        background:
          "linear-gradient(166.27deg, rgba(38, 38, 38, 0.2) 69.2%, #363636 102.23%)",
      }}
    >
      <h2 className="lg:text-[32px] md:text-[24px] sm:text-[22px] text-[20px] font-[400] mb-[6px]">
        {title}
      </h2>
      <p className="text-white md:text-[18px] text-[16px] font-[300]">{para}</p>
    </div>
  );
};

export default CardWithText;
