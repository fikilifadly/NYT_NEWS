import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SearchLayout = () => {
  return (
    <>
      <Header />
      <div className="container md:pt-32 pt-14 w-10/12 mx-auto min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default SearchLayout;
