import { useRouteError } from "react-router-dom";

export default function Empty() {
  let error = useRouteError();
  return (
    <main>
      <div className="container-fluid justify-content-center">
        <p className="fs-2 text-center">
          "Oops, we couldn't find what you're looking for! :("
        </p>
      </div>
    </main>
  );
}
