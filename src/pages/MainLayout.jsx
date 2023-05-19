import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiPopularPage } from "../utils/Api";
import Header from "../components/Header";
import ArticleHomeSide from "../components/ArticleHomeSide";
import ErrorBoundary from "../components/ErrorBoundary";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const MainLayout = () => {
  const [sideArticle, setSideArticle] = useState([]);

  useEffect(() => {
    apiPopularPage().then((e) => setSideArticle(e));
  }, []);

  return (
    <>
      <Header />
      <div className="container md:pt-28 pt-14 w-10/12 mx-auto min-h-screen">
        <h1 className="md:text-4xl text-2xl font-bold my-5">Homepage</h1>
        <div className="flex md:flex-row flex-col gap-5">
          <Outlet />
          <ErrorBoundary fallback={<Loading />}>
            <ArticleHomeSide data={sideArticle} />
          </ErrorBoundary>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
