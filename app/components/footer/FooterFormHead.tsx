import { ArrowDownIcon } from "@/app/icons";

const FooterFormHead = () => {
  return (
    <div className="flex items-start justify-between text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 items-start">
        <h1 className="text-xl font-semibold font-barlow tracking-tighter uppercase">
          NEWS LETTER
        </h1>
        <p className="max-w-72">
          Get informed about the best events and special offers only our
          subscribers have&#46;
        </p>
      </div>
      <ArrowDownIcon className="w-6 h-6 fill-white" />
    </div>
  );
};

export default FooterFormHead;
