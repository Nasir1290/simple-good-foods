import React, { useState } from "react";
import Paginate from "../general/Pagination";
import NotFound from "../general/NotFound";
import FoodCard from "./FoodCard";

function FoodList({ products }) {
  // paginate logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // paginate logic

  return (
    <>
      {paginatedProducts?.length > 1 ? (
        // <div className="grid items-center justify-items-center md:grid-cols-3 lg:grid-cols-3 grid-cols-1 mx-8 gap-3">
        
          <div className="flex flex-wrap justify-center items-center gap-3 mx-8">
            {paginatedProducts.map((foodItem, index) => (
              <FoodCard key={index} foodItem={foodItem} />
            ))}
          </div>
      ) : (
        <NotFound />
      )}
      {products.length > 12 && (
        <Paginate
          total={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
}

export default FoodList;
