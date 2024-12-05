interface IFooterFormBody {
  handleSubmit: () => void;
}

const FooterFormBody = ({ handleSubmit }: IFooterFormBody) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-screen-2xl text-7xl font-barlow font-bold flex flex-col justify-center md:flex-row md:items-center items-start md:justify-between text-white border-b-white border-b-8 py-4 tracking-tighter">
        <input
          type="text"
          className="bg-transparent focus:outline-none text-white opacity-75 tracking-tright"
          placeholder="EMAIL"
          required
        />
        <button
          type="button"
          className="items-start sm:items-end font-barlow font-bold leading-tight"
        >
          SIGN UP
        </button>
      </div>
    </form>
  );
};

export default FooterFormBody;
