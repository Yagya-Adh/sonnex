"use client";
import { ArrowDownIcon } from "@heroicons/react/16/solid";

interface IFooterFormBody {
  handleSubmit: () => void;
}

const FooterForm = () => {
  const handleSubmit = () => {
    alert("Your email here!");
  };
  return (
    <div className="bg-sonex-footerFormBackGround py-20 pt-5">
      <div className="max-w-screen-2xl mx-auto ">
        <FooterFormHead />
        <FooterFormBody handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default FooterForm;

const FooterFormHead = () => {
  return (
    <div className="flex items-center justify-between text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <h1 className="text-3xl font-bold font-sonexFamily tracking-tighter">
          {"NEWS LETTER"}
        </h1>
        <p className="max-w-72">
          Get informed about the best events and special offers only our
          subscribers have &#46;
        </p>
      </div>
      <ArrowDownIcon className="size-6 text-white" />
    </div>
  );
};

const FooterFormBody = ({ handleSubmit }: IFooterFormBody) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-screen-2xl text-5xl font-extrabold flex flex-col justify-center md:flex-row md:items-center items-start md:justify-between text-white border-b-white border-b-8 py-10 font-sonexFamily tracking-tighter">
        <input
          type="text"
          className="bg-transparent focus:outline-none"
          placeholder="EMAIL"
          required
        />
        <button className="items-start sm:items-end ">SIGN UP</button>
      </div>
    </form>
  );
};
