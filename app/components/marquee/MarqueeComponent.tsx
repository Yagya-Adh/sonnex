"use client";
import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  return (
    <>
      <Marquee loop={0}>
        <div className="bg-[#0000001a] py-5 ">
          | Expert advice | Returns extends over a period of 14 days | Free
          shipping for orders over $899 | Shipping through all of Europe |
          Expert advice | Returns extends over a period of 14 days | Free
          shipping for orders over $899 | Shipping through all of Europe |
          Expert advice | Returns extends over a period of 14 days |
        </div>
      </Marquee>
    </>
  );
};

export default MarqueeComponent;
