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
    <section className="max-w-screen-xl mx-auto py-5 px-4 lg:p-0">
      <div
        className={`flex flex-col items-start sm:flex-row sm:justify-between sm:items-end 
          ${sideDescription ? "justify-start" : ""} `}
      >
        <h1 className="text-4xl lg:text-6xl font-extrabold font-sonexFamily tracking-tighter max-w-20 ">
          {sectionName}
        </h1>
        {linkName && (
          <button
            className={`font-bold  underline  text-xl 
              ${linkTextColor ? linkTextColor : "text-black"}`}
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
    </section>
  );
};

export default SectionHead;
