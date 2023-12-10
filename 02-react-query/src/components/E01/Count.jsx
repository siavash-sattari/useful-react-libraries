import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

function Count() {
  const { data } = useQuery("Courses", () =>
    fetch("http://localhost:4000/courses").then((res) => res.json())
  );

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const callApi = async () => {
  //     const res = await fetch("http://localhost:4000/courses");
  //     const responseData = await res.json();
  //     console.log(responseData);
  //     setData(responseData);
  //   };

  //   callApi();
  // }, []);

  return data?.length;
}

export default Count;
