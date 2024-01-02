import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "react-query";

const getUsers = async ({ pageParam = 0 }) => {
  const res = await fetch(
    `https://api.realworld.io/api/articles?limit=10&offset=${pageParam}`
  );
  const data = await res.json();
  return { ...data, prevOffset: pageParam };
};

const Users = () => {
  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    getNextPageParam: (lastPage) => {
      if (lastPage.prevOffset + 10 > lastPage.articleCount) {
        return false;
      }

      return lastPage.prevOffset + 10;
    },
    cacheTime: 60000, // 60 seconds
  });

  const articles = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.articles];
  }, []);

  if (isLoading) {
    return (
      <div className="alert alert-primary mt-4 text-center">is loading ...</div>
    );
  }

  return (
    <div>
      <h2 className="text-center my-3">Articles</h2>

      <InfiniteScroll
        dataLength={articles ? articles.length : 0}
        next={() => fetchNextPage()}
        hasMore={hasNextPage}
        scrollThreshold={0.8}
        loader={
          <div className="alert alert-primary mb-4 text-center">
            Loading ...
          </div>
        }
      >
        <div>
          {articles &&
            articles.map((article, index) => (
              <div key={index} className="px-4">
                <p>
                  <span className="text-success fw-bold">Author :</span>{" "}
                  {article?.author?.username}
                </p>
                <p>
                  <span className="text-success fw-bold">Article Title :</span>{" "}
                  {article.title}
                </p>
                <hr />
              </div>
            ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Users;
