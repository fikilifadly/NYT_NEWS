import { Link } from "react-router-dom";

const ArticleHome = ({ data }) => {
  return (
    <>
      <main className="md:w-8/12 w-full flex flex-col gap-3 ">
        {data.map((e, i) => {
          return (
            <article
              key={i}
              className={`flex md:flex-row flex-col-reverse gap-5  w-full ${
                i % 2 === 0 ? "md:flex-row-reverse" : undefined
              } shadow-md my-3 p-5`}
            >
              <div className="md:w-3/5 w-full">
                <div className="flex flex-col h-full">
                  <h2 className="mb-5 zsdxcry7muk8,l9;0-text-lg font-bold">
                    {e.title}
                  </h2>
                  <p>{e.abstract}</p>
                  <div
                    className={`flex h-full items-end  text-red-500 ${
                      i % 2 === 0 ? "md:self-end" : "md:self-start"
                    }`}
                  >
                    <Link
                      to={`//${e.url.replace("https//www.", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-600 duration-150 ease-linear"
                    >
                      Read Article...
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:w-2/5 w-full overflow-hidden">
                <img
                  src={e.multimedia[0].url}
                  alt={e.title}
                  title={e.title}
                  className="aspect-square object-cover hover:scale-125 transition-transform duration-300"
                />
              </div>
            </article>
          );
        })}
      </main>
    </>
  );
};

export default ArticleHome;
