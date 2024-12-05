const FooterEnd = () => {
  const currentDate = new Date().getFullYear();

  return (
    <div className="bg-black text-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between flex-row items-center">
          <h1 className="text-sm max-w-screen-xl w-full">
            &copy; Sonnex {currentDate} &#46; All rights reserved&#46;
          </h1>

          <div className="flex items-center justify-end w-full py-4 ">
            <div className="mx-4">
              <button className="text-stone-700 transition-all ease-in-out duration-100 hover:text-white">
                Privacy Policy
              </button>
            </div>
            <div className="mx-4">
              <button className="text-stone-700 transition-all ease-in-out duration-100 hover:text-white">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterEnd;
