interface Props {
  fields: Map<string, string>;
  img: string;
}

export default function Spotlight({ fields, img }: Props) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-200 p-4">
      <div className="flex flex-col gap-4">
        <img
          className="object-contain "
          src={img}
          alt={"Picture of Character"}
        />
        <form className="w-full max-w-sm">
          {[...fields.keys()].map((field) => {
            return (
              <div key={field} className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    {field}
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id={field}
                    type="text"
                  />
                </div>
              </div>
            );
          })}
        </form>
      </div>
    </div>
  );
}
