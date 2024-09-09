import React from "react";
import { Pagination } from "@nextui-org/react";

export default function Paginate({ total, currentPage, onPageChange }) {
  return (
    <div className="bg-[#3b7f96] flex justify-center text-center p-2 m-4 rounded-md">
      <Pagination
        loop
        showControls
        color="success"
        total={total}
        initialPage={currentPage}
        onChange={onPageChange}
      />
    </div>
  );
}
