"use client";
import FooterFormHead from "./FooterFormHead";
import FooterFormBody from "./FooterFormBody";

const FooterForm = () => {
  const handleSubmit = () => {
    alert("Your email here!");
  };
  return (
    <div className="bg-sonex-footerFormBackGround py-20 pt-5">
      <div className="max-w-screen-xl mx-auto">
        <FooterFormHead />
        <FooterFormBody handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default FooterForm;
