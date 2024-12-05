interface ISectionHead {
  sectionName: string;
  linkName?: string;
  linkTextColor?: string;
  sideDescription?: string;
}

const SectionHead = ({
  sectionName,
  linkName,
  linkTextColor,
  sideDescription,
}: ISectionHead) => {
  return (
    <div className="max-w-screen-2xl mx-auto py-5 ">
      <div
        className={`flex justify-between     items-center   
          ${sideDescription ? "justify-start" : ""} `}
      >
        <h1 className="text-8xl py-4 font-extrabold font-sonexFamily tracking-tighter max-w-20 ">
          {sectionName}
        </h1>

        {linkName && (
          <button
            className={`font-bold  underline  text-xl ${
              linkTextColor ? linkTextColor : "text-black"
            }`}
          >
            {linkName}
          </button>
        )}

        {sideDescription && (
          <p className="pe-96 max-w-3xl text-2xl text-stone-700">
            {sideDescription}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionHead;
