import { useLoaderData } from "react-router-dom";
import ArticleHome from "../components/ArticleHome";
import { Helmet } from "react-helmet";

const Home = () => {
  const loader = useLoaderData();

  return (
    <>
      <Helmet>
        <title>Fiki Lifadly Amanda Nasution || Home</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem sunt modi velit sapiente ad expedita. Laborum commodi est asperiores error!"
        />
      </Helmet>
      <ArticleHome data={loader} />
    </>
  );
};

export default Home;
