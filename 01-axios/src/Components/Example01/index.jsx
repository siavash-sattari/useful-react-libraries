import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import "./index.css";

function Example01() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Method 1:
    // axios.get("https://fakestoreapi.com/products/?limit=6")

    // Method 2:
    // axios({
    //   url: "https://fakestoreapi.com/products/?limit=6",
    //   method: "GET",
    // })

    // Method 3:
    axios
      .get("https://fakestoreapi.com/products/", {
        params: {
          limit: 6,
        },
      })
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      });
  }, []);

  return (
    <ul>
      {products.length > 0 &&
        products.map((product) => <Product key={product.id} {...product} />)}
    </ul>
  );
}

export default Example01;
