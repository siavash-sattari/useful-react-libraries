import { useQuery } from "react-query";
import Count from "./Count";
import Course from "./Course";

function Courses() {
  const { data, isLoading } = useQuery("Courses", () =>
    fetch("http://localhost:4000/courses").then((res) => res.json())
  );

  if (isLoading) {
    return (
      <div className="alert alert-primary mt-4 text-center">is loading ...</div>
    );
  }

  return (
    <>
      <h1 className="mt-4 text-center">
        Courses / Count: <Count />
      </h1>
      <div className="container mt-3">
        <div className="row">
          {data?.map((item) => (
            <Course key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Courses;
