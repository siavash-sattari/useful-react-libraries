import React, { useEffect, useState } from "react";
import Course from "../components/Course";
import Count from "../components/Count";
import { useQuery } from "react-query";

function Courses() {
  const { data, isLoading } = useQuery("Courses", () =>
    fetch("http://localhost:4000/courses").then((res) => res.json())
  );

  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // const callApi = async () => {
  //   try {
  //     setIsLoading(true);
  //     const res = await fetch("http://localhost:4000/courses");
  //     const responseData = await res.json();
  //     setData(responseData);
  //   } catch (error) {
  //     error;
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   callApi();
  // }, []);

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
