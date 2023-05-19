import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  return (
    <main id="error-content">
      <h1>An error occurred!</h1>
      <p>{error.statusText}</p>
    </main>
  );
};

export default ErrorElement;
