import { Link } from "react-router-dom";

const SearchCard = ({ searchData }) => {
  return (
    <>
      <div className="flex flex-wrap gap-5">
        {searchData && searchData.length > 0 ? (
          searchData.map((el, i) => {
            return (
              <Link
                to={`https://${el.web_url}`}
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:max-w-[300px] md:w-[300px]  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                key={i}
              >
                <div className="overflow-hidden w-full h-[200px]">
                  <img
                    className="object-cover w-full rounded-t-lg h-full md:h-auto md:min-h-[200px] md:w-full "
                    src={
                      el.multimedia.length > 0
                        ? `https://static01.nyt.com/${el.multimedia[0].url}`
                        : "/src/assets/noimage.jpg"
                    }
                    alt={el.headline.main || ""}
                    title={el.headline.main || ""}
                  />
                </div>
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h2 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                    {el.headline.main || ""}
                  </h2>
                  <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                    {el.abstract || ""}
                  </p>
                </div>
              </Link>
            );
          })
        ) : (
          <div className="grid place-items-center min-h-[500px] w-full">
            <h2 className="font-bold text-2xl">
              No Result Found, Please Try Another Keyword
            </h2>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchCard;
