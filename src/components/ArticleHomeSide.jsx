import { Link } from "react-router-dom";

const ArticleHomeSide = ({ data }) => {
  return (
    <>
      <aside className="p-5 md:w-4/12 w-full shadow-md h-full md:block flex flex-col ">
        {data.map((e, i) => (
          <Link to={e.url} target="_blank">
            <div className="flex p-3 gap-3" key={i}>
              <span className="font-bold text-lg text-slate-500">#{i + 1}</span>
              <div className="flex flex-col border-b-2 border-slate-500 w-full ">
                <h3 className="font-semibold md:text-md text-xs hover:text-red-500">
                  {e.title}
                </h3>
                <p className="font-thin text-sm my-2">{e.published_date}</p>
              </div>
            </div>
          </Link>
        ))}
      </aside>
    </>
  );
};

export default ArticleHomeSide;
