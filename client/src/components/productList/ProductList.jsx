import React, { useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [productsPerPage, serProductPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const productList = async()=>{
    const data = await axios.get("http://localhost:3001/dogs/all");
    console.log(data.data)

}

  return <div>ProductList</div>;
};

export default ProductList;
