import { useQuery } from "react-query";

function Count() {
  const { data } = useQuery("Courses", () =>
    fetch("http://localhost:4000/courses").then((res) => res.json())
  );

  return data?.length;
}

export default Count;
