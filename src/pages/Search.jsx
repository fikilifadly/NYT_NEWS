import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { apiSearchArticle } from "../utils/Api";
import Loading from "../components/Loading";
import SearchCard from "../components/SearchCard";
import ErrorBoundary from "../components/ErrorBoundary";
import { Helmet } from "react-helmet";

const Search = () => {
  const [param] = useSearchParams();

  const [listSearch, setListSearch] = useState([]);

  const [page, setPage] = useState(1);

  const [isLoading, setIsLoading] = useState(true);

  const value = param.getAll("q");

  const handleBottomScroll = () => {
    let scrolHeight = document.documentElement.scrollHeight;
    let innerHeight = window.innerHeight;
    let top = document.documentElement.scrollTop;

    if (innerHeight + top + 1 >= scrolHeight) {
      setIsLoading(true);
      setPage((e) => e + 1);
    }
  };

  useEffect(() => {
    apiSearchArticle(value, page).then((el) => setListSearch(el));
  }, []);

  useEffect(() => {
    apiSearchArticle(value, page).then((el) => setListSearch(el));
  }, [param]);

  useEffect(() => {
    window.addEventListener("scroll", handleBottomScroll);

    return () => {
      window.removeEventListener("scroll", handleBottomScroll);
    };
  }, []);

  useEffect(() => {
    apiSearchArticle(value, page).then((el) =>
      setListSearch([...listSearch, ...el])
    );
    setIsLoading(false);
  }, [page]);

  return (
    <>
      <Helmet>
        <title>Fiki Lifadly Amanda Nasution || Search</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem sunt modi velit sapiente ad expedita. Laborum commodi est asperiores error!"
        />
      </Helmet>

      <h1 className="text-lg mb-5">
        Searching for: <strong>{value}</strong>
      </h1>
      <ErrorBoundary fallback={<Loading />}>
        <SearchCard searchData={listSearch} />
      </ErrorBoundary>

      {isLoading && <Loading />}
    </>
  );
};

export default Search;
